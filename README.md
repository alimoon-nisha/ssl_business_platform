# SSL Business Platform

Next.js prototype for a unified SSL Wireless business services platform.

The product direction is one SSL account where businesses can create a shared business profile, explore services, reuse common documents, start service application, track application status, and reach billing/support from a single dashboard.

## Current Scope

This is a front-end prototype. It intentionally uses local state and mock data only.

Implemented areas:

- Marketing landing page
- Product detail pages for SSLCOMMERZ Payment Gateway, Messaging Suite, and Corporate Recharge
- Contact sales request page
- Login and forgot-password screens
- Unified `/get-started` account setup flow
- Selected service application entry flow
- First dashboard page with service, application, document, billing, and support summaries

Not implemented yet:

- Real authentication
- Backend APIs
- Persistence
- File uploads
- Payment/submission backend
- Full dashboard subpages

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react icons

This repo has version-specific Next.js guidance in `AGENTS.md`. Before changing framework-sensitive code, read the relevant local docs under `node_modules/next/dist/docs/`.

## Routes

- `/` - marketing landing page
- `/products/payment-gateway` - SSLCOMMERZ product detail page
- `/products/messaging-suite` - messaging product detail page
- `/products/corporate-recharge` - recharge product detail page
- `/contact-sales` - sales request form
- `/login` - sign in
- `/forgot-password` - password recovery prototype
- `/get-started` - unified signup and business setup journey
- `/get-started?service=payment-gateway` - signup with selected service continuation
- `/service-application/[service]` - selected service application prototype
- `/dashboard` - first dashboard page

There is no separate `/sign-up` journey. `Get started` is signup.

## Project Structure

```txt
src/
  app/                 Route entry points
  components/
    auth/              Login, get-started, and auth shell components
    contact/           Contact sales form
    dashboard/         Dashboard shell and summary cards
    marketing/         Landing page, header, footer, FAQ, CTA components
    product/           Product detail and service application components
    ui/                Shared primitives
  data/                Mock platform data and product content
  lib/                 Shared utilities
docs/                  Product, design, and build specs
public/illustrations/  Local prototype illustrations
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Prototype Notes

- Content and dashboard state live in `src/data/mockPlatform.ts` and `src/data/productContent.ts`.
- Product pages share one reusable detail template.
- `/get-started` handles account creation and base business setup.
- Service-specific continuation lives under `/service-application/[service]`.
- Dashboard sub-navigation is marked as coming soon until those sections are designed.
