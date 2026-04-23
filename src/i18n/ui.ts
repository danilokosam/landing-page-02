export const languages = {
  es: "ES",
  en: "EN",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

// ─── Spanish ─────────────────────────────────────────────────────────────────
export const es = {
  // Navigation
  "nav.services": "Servicios",
  "nav.about": "Nosotros",
  "nav.process": "Proceso",
  "nav.faq": "FAQ",

  // Hero
  "hero.titleStart": "Construye una marca que",
  "hero.titleAccent": "destaque online",
  "hero.subtitle":
    "Diseñamos sitios web, lanzamos campañas y creamos experiencias que convierten visitantes en clientes fieles.",
  "hero.cta": "Inicia tu proyecto",
  "hero.stat1Label": "Proyectos lanzados",
  "hero.stat2Label": "Retención de clientes",
  "hero.stat3Label": "Calificación promedio",
  "hero.stat4Label": "Soporte dedicado",

  // About
  "about.titleStart": "Sobre",
  "about.p1":
    "En Arka, ayudamos a marcas y empresas a construir una presencia digital que luce profesional y, sobre todo, genera resultados reales. Trabajamos con un proceso claro desde el primer día: escuchamos tus objetivos, definimos un camino simple y te acompañamos en cada paso.",
  "about.p2":
    "Ofrecemos servicios de sitios web, landing pages, desarrollo de e-commerce, SEO e implementación de CMS. Nuestro enfoque es entregar soluciones prácticas, fáciles de gestionar y alineadas con tu negocio, sin complejidades innecesarias ni promesas vacías.",
  "about.value1": "Comunicación clara",
  "about.value2": "Proceso transparente",
  "about.value3": "Enfoque en resultados",
  "about.value4": "Soporte real",

  // Services
  "services.headingStart": "Nuestros ",
  "services.headingGradient": "Servicios",
  "services.items": [
    {
      title: "Landing Pages",
      description:
        "Landing pages de alta conversión diseñadas para capturar leads, validar ofertas y convertir tráfico en oportunidades de negocio reales.",
    },
    {
      title: "Desarrollo E-commerce",
      description:
        "Tiendas online escalables con flujos de producto optimizados, checkout seguro y UX enfocada en el rendimiento para aumentar ventas.",
    },
    {
      title: "Integración CRM",
      description:
        "Configuraciones inteligentes de CRM que centralizan leads, automatizan seguimientos y dan a tu equipo de ventas visibilidad total de cada oportunidad.",
    },
    {
      title: "Implementación CMS",
      description:
        "Sistemas de gestión de contenido flexibles para que tu equipo pueda actualizar páginas, publicar contenido y escalar tu sitio sin depender de desarrolladores.",
    },
    {
      title: "Optimización SEO",
      description:
        "Mejoras técnicas y on-page de SEO que aumentan la visibilidad en buscadores, atraen tráfico calificado y apoyan el crecimiento a largo plazo.",
    },
    {
      title: "Mantenimiento y Soporte",
      description:
        "Monitoreo continuo, actualizaciones y soporte técnico para mantener tu plataforma digital segura, rápida y siempre disponible.",
    },
  ],

  // How It Works
  "process.headingStart": "Cómo",
  "process.headingGradient": "Funciona",
  "process.subtitle":
    "Desde la primera conversación hasta el lanzamiento y más allá, nuestro proceso optimizado garantiza claridad, velocidad y resultados en cada etapa.",
  "process.steps": [
    {
      icon: "shield-check",
      title: "Consulta",
      description:
        "Escuchamos tus objetivos, analizamos tu mercado y definimos una estrategia personalizada alineada con tus metas de negocio.",
    },
    {
      icon: "map-pin",
      title: "Diseño y Planificación",
      description:
        "Creamos wireframes y diseños visuales alineados con la identidad de tu marca, asegurando que cada detalle tenga un propósito.",
    },
    {
      icon: "trending-up",
      title: "Desarrollo",
      description:
        "Construimos tu proyecto con tecnologías modernas, optimizado para rendimiento, SEO y escalabilidad desde el primer día.",
    },
    {
      icon: "rocket",
      title: "Lanzamiento y Soporte",
      description:
        "Desplegamos, monitoreamos y mejoramos continuamente tu presencia digital para asegurar crecimiento y confiabilidad a largo plazo.",
    },
  ],

  // FAQ
  "faq.headingStart": "Preguntas más ",
  "faq.headingGradient": "frecuentes",
  "faq.subtitle":
    "Estamos aquí para ayudarte y resolver dudas. Encuentra respuestas a las preguntas más comunes a continuación.",
  "faq.items": [
    {
      question: "¿Qué servicios de marketing digital ofrecen?",
      answer:
        "Ofrecemos SEO, SEM, gestión de redes sociales, email marketing, marketing de contenidos y publicidad online en Google Ads, Meta Ads y LinkedIn Ads para maximizar tu visibilidad.",
    },
    {
      question: "¿Cuánto tiempo tarda en verse resultados?",
      answer:
        "Los resultados orgánicos de SEO son visibles en 3-6 meses, mientras que las campañas pagadas pueden generar leads desde el primer día. Creamos estrategias personalizadas según tus objetivos específicos.",
    },
    {
      question: "¿Desarrollan sitios web a medida o usan plantillas?",
      answer:
        "Todos nuestros sitios web son 100% a medida, optimizados para conversión y adaptados a tu marca. Nunca utilizamos plantillas genéricas.",
    },
    {
      question: "¿Los diseños web son responsive?",
      answer:
        "Sí, todos nuestros sitios son completamente responsive y están optimizados para móvil, tablet y escritorio. Priorizamos la experiencia del usuario en todos los dispositivos.",
    },
    {
      question: "¿Qué incluye un proyecto web completo?",
      answer:
        "Incluye diseño UI/UX, desarrollo frontend/backend, optimización técnica de SEO, integración de formularios, hosting, dominio y capacitación para que puedas gestionar tu contenido.",
    },
    {
      question: "¿Ofrecen mantenimiento del sitio web?",
      answer:
        "Sí, ofrecemos mantenimiento mensual que incluye actualizaciones de seguridad, copias de seguridad, optimización de rendimiento y soporte técnico 24/7.",
    },
    {
      question: "¿Puedo hacer cambios en mi sitio web después?",
      answer:
        "¡Por supuesto! Entregamos un CMS intuitivo (WordPress, Webflow o headless) más capacitación para que puedas realizar todos los cambios que necesites de forma independiente.",
    },
    {
      question: "¿Qué diferencia a su agencia de otras?",
      answer:
        "Combinamos estrategia de marketing con desarrollo web de alto rendimiento. No solo creamos sitios web bonitos, generamos resultados medibles que hacen crecer tu negocio.",
    },
  ],

  // Testimonials
  "testimonials.badge": "Amados por nuestros clientes",
  "testimonials.headingStart": "Lo que están",
  "testimonials.headingGradient": "diciendo",
  "testimonials.subtitle":
    "Opiniones reales de fundadores, desarrolladores y equipos construyendo productos listos para producción.",

  // Form
  "form.badge": "Consulta de proyecto",
  "form.headingStart": "Cuéntanos sobre tu",
  "form.headingGradient": "próxima idea",
  "form.subtitle":
    "Comparte los conceptos básicos y tendremos un punto de partida claro para la conversación. Este formulario de demostración está diseñado para previsualizar la experiencia e incluye validación del lado del cliente.",
  "form.fastContact": "Contacto rápido",
  "form.fastContactDesc":
    "Deja tu nombre y número de teléfono para que podamos hacer seguimiento con contexto.",
  "form.clearBrief": "Brief claro",
  "form.clearBriefDesc":
    "Una breve idea de proyecto ayuda a definir el alcance, los objetivos y el siguiente paso adecuado.",
  "form.labelName": "Nombre",
  "form.placeholderName": "Tu nombre completo",
  "form.labelEmail": "Correo electrónico",
  "form.placeholderEmail": "tu@ejemplo.com",
  "form.labelPhone": "Teléfono",
  "form.placeholderPhone": "+51 999 999 999",
  "form.labelMessage": "Idea de proyecto",
  "form.placeholderMessage": "Describe tu idea de proyecto",
  "form.submitBtn": "Inicia tu proyecto",
  "form.sending": "Enviando...",
  "form.errorDefault": "Algo salió mal. Por favor intenta de nuevo.",
  "form.networkError":
    "Error de red. Verifica tu conexión e intenta de nuevo.",
  "form.successDefault": "¡Gracias! Nos pondremos en contacto pronto.",

  // Team
  "team.headingStart": "Conoce al",
  "team.headingGradient": "equipo",
  "team.subtitle": "Personas creativas",

  // Sponsors
  "sponsors.heading": "Inversores y Fundadores",

  // Footer
  "footer.tagline":
    "Construimos productos digitales audaces y experiencias de marca de alto rendimiento.",
  "footer.about": "Nosotros",
  "footer.services": "Servicios",
  "footer.aboutUs": "Sobre nosotros",
  "footer.howItWorks": "Cómo funciona",
  "footer.faq": "FAQ",
  "footer.contact": "Contacto",
  "footer.talkWithUs": "Habla con nosotros",

  // Language picker
  "lang.switchLabel": "Switch to English",
  "lang.switchCode": "EN",
};

// ─── English ──────────────────────────────────────────────────────────────────
export const en: typeof es = {
  // Navigation
  "nav.services": "Services",
  "nav.about": "About",
  "nav.process": "Process",
  "nav.faq": "FAQ",

  // Hero
  "hero.titleStart": "Build a brand that",
  "hero.titleAccent": "stands out online",
  "hero.subtitle":
    "We design websites, launch campaigns and craft experiences that turn visitors into loyal customers.",
  "hero.cta": "Start Your Project",
  "hero.stat1Label": "Projects launched",
  "hero.stat2Label": "Client retention",
  "hero.stat3Label": "Avg. rating",
  "hero.stat4Label": "Dedicated support",

  // About
  "about.titleStart": "About",
  "about.p1":
    "At Arka, we help brands and businesses build a digital presence that looks professional and, above all, drives real results. We work with a clear process from day one: we listen to your goals, define a simple path forward, and support you at every step.",
  "about.p2":
    "We offer website services, landing pages, e-commerce development, SEO, and CMS implementation. Our focus is to deliver practical solutions that are easy to manage and aligned with your business, with no unnecessary complexity and no empty promises.",
  "about.value1": "Clear communication",
  "about.value2": "Transparent process",
  "about.value3": "Results-focused approach",
  "about.value4": "Real support",

  // Services
  "services.headingStart": "Our ",
  "services.headingGradient": "Services",
  "services.items": [
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to capture leads, validate offers, and turn traffic into real business opportunities.",
    },
    {
      title: "E-commerce Development",
      description:
        "Scalable online stores with optimized product flows, secure checkout, and performance-focused UX to increase sales.",
    },
    {
      title: "CRM Integration",
      description:
        "Smart CRM setups that centralize leads, automate follow-ups, and give your sales team full visibility of every opportunity.",
    },
    {
      title: "CMS Implementation",
      description:
        "Flexible content management systems so your team can update pages, publish content, and scale your website without developer dependency.",
    },
    {
      title: "SEO Optimization",
      description:
        "Technical and on-page SEO improvements that boost search visibility, attract qualified traffic, and support long-term growth.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing monitoring, updates, and technical support to keep your digital platform secure, fast, and always available.",
    },
  ],

  // How It Works
  "process.headingStart": "How It",
  "process.headingGradient": "Works",
  "process.subtitle":
    "From the first conversation to launch and beyond, our streamlined process ensures clarity, speed, and results at every stage.",
  "process.steps": [
    {
      icon: "shield-check",
      title: "Consultation",
      description:
        "We listen to your goals, analyze your market, and define a tailored strategy that aligns with your business objectives.",
    },
    {
      icon: "map-pin",
      title: "Design & Planning",
      description:
        "We create wireframes and visual designs aligned with your brand identity, ensuring every detail serves a purpose.",
    },
    {
      icon: "trending-up",
      title: "Development",
      description:
        "We build your project with modern technologies, optimized for performance, SEO, and scalability from day one.",
    },
    {
      icon: "rocket",
      title: "Launch & Support",
      description:
        "We deploy, monitor, and continuously improve your digital presence to ensure long-term growth and reliability.",
    },
  ],

  // FAQ
  "faq.headingStart": "Most asked ",
  "faq.headingGradient": "FAQ's",
  "faq.subtitle":
    "We're here to help you and solve doubts. Find answers to the most common questions below.",
  "faq.items": [
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We offer SEO, SEM, social media management, email marketing, content marketing, and online advertising on Google Ads, Meta Ads, and LinkedIn Ads to maximize your visibility.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Organic SEO results are visible in 3-6 months, while paid campaigns can generate leads from day one. We create customized strategies based on your specific goals.",
    },
    {
      question: "Do you develop custom websites or use templates?",
      answer:
        "All our websites are 100% custom-built, conversion-optimized, and tailored to your brand. We never use generic templates.",
    },
    {
      question: "Are the web designs responsive?",
      answer:
        "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop. We prioritize user experience across all devices.",
    },
    {
      question: "What does a complete web project include?",
      answer:
        "It includes UI/UX design, frontend/backend development, technical SEO optimization, form integration, hosting, domain, and training so you can manage your content.",
    },
    {
      question: "Do you offer website maintenance?",
      answer:
        "Yes, we offer monthly maintenance that includes security updates, backups, performance optimization, and 24/7 technical support.",
    },
    {
      question: "Can I make changes to my website later?",
      answer:
        "Absolutely! We deliver an intuitive CMS (WordPress, Webflow, or headless) plus training so you can make all the changes you need independently.",
    },
    {
      question: "What makes your agency different?",
      answer:
        "We combine marketing strategy with high-performance web development. We don't just create beautiful websites, we generate measurable results that grow your business.",
    },
  ],

  // Testimonials
  "testimonials.badge": "Loved by clients",
  "testimonials.headingStart": "What people are",
  "testimonials.headingGradient": "saying",
  "testimonials.subtitle":
    "Real feedback from founders, developers and teams building production-ready products.",

  // Form
  "form.badge": "Project inquiry",
  "form.headingStart": "Tell us about your",
  "form.headingGradient": "next idea",
  "form.subtitle":
    "Share the basics and we will have a clear starting point for the conversation. This demo form is designed to preview the experience and includes simple client-side input validation.",
  "form.fastContact": "Fast contact",
  "form.fastContactDesc":
    "Leave your name and phone number so we can follow up with context.",
  "form.clearBrief": "Clear brief",
  "form.clearBriefDesc":
    "A short project idea helps frame scope, goals and the right next step.",
  "form.labelName": "Name",
  "form.placeholderName": "Your full name",
  "form.labelEmail": "Email",
  "form.placeholderEmail": "you@example.com",
  "form.labelPhone": "Phone",
  "form.placeholderPhone": "+1 (555) 000-0000",
  "form.labelMessage": "Project idea",
  "form.placeholderMessage": "Describe your project idea",
  "form.submitBtn": "Start Your Project",
  "form.sending": "Sending...",
  "form.errorDefault": "Something went wrong. Please try again.",
  "form.networkError":
    "Network error. Please check your connection and try again.",
  "form.successDefault": "Thank you! We'll be in touch soon.",

  // Team
  "team.headingStart": "Meet the",
  "team.headingGradient": "crew",
  "team.subtitle": "Creative people",

  // Sponsors
  "sponsors.heading": "Investors and Founders",

  // Footer
  "footer.tagline":
    "We build bold digital products and high-performance brand experiences.",
  "footer.about": "About",
  "footer.services": "Services",
  "footer.aboutUs": "About us",
  "footer.howItWorks": "How it works",
  "footer.faq": "FAQ",
  "footer.contact": "Contact",
  "footer.talkWithUs": "Talk with us",

  // Language picker
  "lang.switchLabel": "Cambiar a Español",
  "lang.switchCode": "ES",
};

export const ui = { es, en } as const;
export type Translations = typeof es;
