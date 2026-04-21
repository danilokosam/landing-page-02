import type { APIRoute } from "astro";
import { z } from "zod";

// Validation schema
const contactFormSchema = z.object({
  formGuid: z.uuid("Invalid form ID"),
  firstname: z.string().trim().min(1, "First name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .pipe(z.email("Invalid email format")),
  phone: z.string().min(5, "Phone number is too short"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export const POST: APIRoute = async ({ request }) => {
  const HUBSPOT_PORTAL_ID = import.meta.env.HUBSPOT_PORTAL_ID;

  try {
    const formData = await request.formData();

    // We convert FormData into a flat object for Zod
    const rawData = Object.fromEntries(formData.entries());

    // Validate the data
    const validatedData = contactFormSchema.safeParse(rawData);

    // If validation fails, return Zod errors
    if (!validatedData.success) {
      return new Response(
        JSON.stringify({
          error: "Validation error",
          details: validatedData.error.flatten().fieldErrors,
        }),
        { status: 400 },
      );
    }

    // If we reach here, the data is safe and typed
    const { formGuid, firstname, email, phone, message } = validatedData.data;
    const portalId = HUBSPOT_PORTAL_ID;

    const hubspotBody = {
      fields: [
        { name: "firstname", value: firstname },
        { name: "email", value: email },
        { name: "phone", value: phone },
        { name: "message", value: message },
      ],
      context: {
        pageUri: request.url,
        pageName: "Contact Form",
      },
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotBody),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      // HubSpot sometimes returns field-specific errors
      throw new Error(result.errors?.[0]?.message || "Error in HubSpot");
    }

    return new Response(
      JSON.stringify({
        success: true,
        inlineMessage:
          "Thank you for your message! We'll get back to you soon.",
      }),
      { status: 200 },
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500 },
    );
  }
};
