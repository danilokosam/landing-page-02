# AGENTS.md - Development Guidelines

This document provides guidelines for agents working on this codebase.

## Project Overview

- **Framework**: Astro 6.1.4 with Tailwind CSS 4
- **Node version**: >= 22.12.0
- **Package manager**: npm
- **Language**: TypeScript

## Build Commands

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Format code with Prettier
npm run format
```

### Running a Single Test

**Note**: This project currently has no test suite. If tests are added in the future, typical commands would be:

```bash
# Run all tests
npm test

# Run a single test file
npm test -- path/to/test/file.test.ts

# Run tests matching a pattern
npm test -- --grep "pattern"
```

## Code Style Guidelines

### General Principles

- Keep components small and focused on a single responsibility
- Use descriptive variable and function names
- Avoid magic numbers - use constants or CSS custom properties
- Prefer composition over inheritance

### Formatting

- **Tool**: Prettier (configured in `.prettierrc` if present)
- Run `npm run format` before committing to ensure consistent formatting
- Prettier handles:
  - Line length (default 100)
  - Quoting (prefer double quotes for JSX, single for JS)
  - Trailing commas
  - Semicolons
  - Tab width (2 spaces)

### Imports and Path Aliases

The project uses path aliases configured in `tsconfig.json`:

```typescript
// Use these aliases - do NOT use relative paths for components/layouts
import Header from "@components/Global/Header.astro";
import Footer from "@components/Global/Footer.astro";
import BaseLayout from "@layouts/BaseLayout.astro";

// Styles
import "@styles/global.css";

// Allowed relative imports for:
// - Same-component helper functions
// - Utilities within the same directory
// - Local type definitions
```

Path alias mappings:

- `@components/*` -> `./src/components/*`
- `@layouts/*` -> `./src/layouts/*`
- `@utils/*` -> `./src/utils/*`
- `@pages/*` -> `./src/pages/*`
- `@styles/*` -> `./src/styles/*`

### TypeScript Guidelines

- Use TypeScript's strict mode (extends `astro/tsconfigs/strict`)
- Prefer explicit type annotations for function parameters and return types
- Use interfaces for object shapes, types for unions
- Avoid `any` - use `unknown` if type is truly uncertain

Example component Props interface:

```typescript
export interface Props {
  title?: string;
  description?: string;
  image?: {
    url: string;
    alt: string;
  };
  type?: "website";
  canonicalUrl?: string;
  lang?: string;
}
```

### Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.astro`, `TestimonialCard.astro`)
- **Directories**: PascalCase or camelCase (e.g., `Sections/`, `UI/`, `Global/`)
- **Files**: kebab-case for non-component files (e.g., `global.css`)
- **CSS Classes**: Tailwind utilities with custom CSS variables
- **Interfaces**: PascalCase with `Props` suffix for component props

Component file structure:

- Section components go in `src/components/Sections/`
- UI components go in `src/components/UI/`
- Global components go in `src/components/Global/`
- Layouts go in `src/layouts/`

### Astro Component Guidelines

- Use `Props` interface for component props with default values
- Prefer prop defaults in destructuring rather than in interface
- Use `<script is:inline>` for inline JavaScript that needs to run immediately
- Keep HTML template logic minimal - move complex logic to frontmatter
- Use slots for flexible component composition

Example:

```astro
---
export interface Props {
  title?: string;
}

const { title = "Default Title" } = Astro.props;
---

<h1>{title}</h1>
<slot />
```

### Error Handling

- Use Astro's built-in error boundaries for catch-all error pages
- Validate props with TypeScript types
- For runtime errors, provide fallback UI states
- Log errors appropriately for debugging

### CSS and Tailwind

- **Tailwind v4**: Uses CSS-based configuration with `@theme` directive
- Use Tailwind utility classes as first choice
- Define custom theme values in `src/styles/global.css`
- Use CSS custom properties for consistent theming
- Prefer `.class-name` syntax for custom utilities

Example Tailwind usage:

```html
<div class="flex flex-wrap gap-3 md:grid-cols-2">
  <div class="glass-card">
    <p class="text-3xl font-bold text-(--primary)">+120</p>
  </div>
</div>
```

### SEO Best Practices

- Always include `title` and `description` meta tags
- Use Open Graph and Twitter card meta tags
- Include canonical URLs
- Use semantic HTML5 elements
- Ensure images have alt text

### Best Practices

1. **Performance**: Use optimized images, lazy load where possible
2. **Accessibility**: Include ARIA labels, proper heading hierarchy
3. **Responsive**: Design for mobile-first, use Tailwind responsive prefixes
4. **SEO**: Complete meta tags, semantic HTML, sitemap

### Pre-commit Checklist

Before committing:

1. Run `npm run format` - formats all code
2. Run `npm run build` - verifies build succeeds
3. Check for any TypeScript errors

### File Organization

```
src/
├── components/
│   ├── Global/      # Header, Footer, Navigation
│   ├── Sections/    # FaqSection, HeroSection, etc.
│   └── UI/          # Icon, ThemeIcon, TestimonialCard
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── assets/
    └── images
```

### Useful VS Code Extensions

- Astro (for Astro syntax highlighting and IntelliSense)
- Tailwind CSS IntelliSense (for Tailwind autocomplete)
- Prettier (for code formatting)
- TypeScript and JavaScript Language Features

### Common Tasks

**Adding a new section**:

1. Create component in `src/components/Sections/`
2. Import in page with `@components/*` alias
3. Use within `<section>` or layout

**Adding a new UI component**:

1. Create in `src/components/UI/`
2. Props interface with TypeScript
3. Use Tailwind classes for styling
4. Handle responsive variants

**Modifying styles**:

1. Edit `src/styles/global.css` for theme variables
2. Tailwind CSS v4 uses CSS-based config

### Environment Variables

- Create `.env` file for local development
- Use `.env.example` as template (if exists)
- Never commit secrets to repository

This project uses Astro with Tailwind v4 and has no test suite currently. Focus on maintaining clean component structure, proper TypeScript typing, and consistent Prettier formatting.
