# AI Coding Agent Instructions - Mestar u Diru

## Project Overview
Next.js 15 handyman services website with TypeScript and Tailwind CSS. Single-page static marketing site (no backend/API routes) with contact form, service showcase, and hero section. All business logic and data flow are handled client-side for simplicity and fast deploys. Uses Radix UI components and `sonner` for notifications.

## Key Commands
- **Development**: `npm run dev` (Next.js with Turbopack)
- **Build**: `npm build`
- **Linting**: `npm run lint` (ESLint)


## Architecture & File Structure

**Big Picture:**
- This project is intentionally a static, client-rendered marketing site (not a SaaS or CRUD app).
- All business data (contact info, services, etc.) is centralized in `src/lib/constants.ts` for easy updates and type safety.
- No server-side logic or API routes are present; all interactivity is handled in the browser.

### Page Composition (`src/app/page.tsx`)
The app is a single page composed of stacked sections:
- `Hero` - Hero section with call-to-action buttons
- `Services` - Service cards showcase
- `ContactForm` - Service request form with validation
- `Footer` - Contact details and social links
- `Toaster` (from `sonner`) - Toast notifications

### UI Components (`src/components/ui/`)
Shadcn/Radix UI components using `class-variance-authority` for variants:
- Button variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`
- All UI components use `cn()` utility for className merging

### Business Data (`src/lib/constants.ts`)
Centralize all business info here—phone, email, service area, hours. Used in `ContactForm` and `Footer`. Pattern: `as const` for type safety.

### Layout
`src/app/layout.tsx` sets metadata (title, description) and provides root HTML structure. All styling is Tailwind-based.

## Component Patterns

### Forms
`ContactForm.tsx` demonstrates the pattern:
- `"use client"` directive for client-side interactivity
- `react-hook-form` style state management with `useState`
- Input validation before submit
- Toast notifications for feedback (`sonner`)
- Form data object with field names matching UI input names

### Image Handling
All images (including external URLs) must use the `ImageWithFallback` component (`src/lib/ImageWithFallback.tsx`) to ensure graceful fallback on load failure. This is required for reliability and consistent UX.

### Styling
- All color tokens use HSL CSS variables (e.g., `hsl(var(--primary))`) defined in globals.css
- Dark mode via `darkMode: "class"` in Tailwind config
- Responsive using Tailwind breakpoints (`lg:`, `md:`, etc.)
- Use `cn()` utility to conditionally merge classNames

## Type Safety
- TypeScript `strict: true` enabled
- Component props typed with `React.ReactNode` and interface patterns
- Constants use `as const` for literal types

## Common Tasks

**Adding a New Service Option**
1. Add to `SERVICE_OPTIONS` array in `src/lib/constants.ts`
2. Option must have `value` and `label` properties
3. Automatically available in `ContactForm` Select component

**Adding a Section to Homepage**
1. Create component in `src/app/components/`
2. Export as default function
3. Import and add to page composition in `src/app/page.tsx` in desired order
4. Follow responsive grid pattern (e.g., `grid-cols-1 lg:grid-cols-2`)

**Updating Business Info**
1. Edit `BUSINESS_INFO` in `src/lib/constants.ts`
2. Changes auto-propagate to `ContactForm`, `Footer`, and metadata

## Conventions
- Components use TypeScript, not JavaScript
- Client components marked explicitly with `"use client"` directive
- Tailwind + CSS variables, no inline styles
- Form validation shows error toast via `sonner`
- External dependencies: `next-themes` (theme switching—currently unused), `lucide-react` (icons)

## Deployment
Ready for Vercel. No environment variables or backend setup required. The site is optimized for static hosting and fast deploys.
