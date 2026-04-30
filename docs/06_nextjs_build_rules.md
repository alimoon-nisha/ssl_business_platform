# 06 Next.js Build Rules

## Tech stack
Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components where simple
- Client components only where interactivity is needed
- `lucide-react` for simple line icons, if available
- No backend integration for this prototype

## Required routes
Create these routes:

- `/`
- `/products/payment-gateway`
- `/products/messaging-suite`
- `/products/corporate-recharge`
- `/contact-sales`
- `/login`
- `/forgot-password`
- `/get-started`
- `/service-application/[service]`
- `/dashboard`

Do not create a separate `/sign-up` journey. `Get started` is the account
creation and business setup journey. If `/sign-up` is ever added as a
compatibility route, it must redirect to `/get-started`.

Do not create a separate `/sign-in` route unless it redirects to `/login`.

The earlier standalone onboarding routes (`/onboarding/business`,
`/onboarding/documents`, and `/onboarding/complete`) are deprecated for this
prototype. Their intent is now covered by `/get-started` for base account setup
and `/service-application/[service]` for selected service application.

## Suggested folder structure
```txt
src/
  app/
    page.tsx
    products/
      payment-gateway/
        page.tsx
      messaging-suite/
        page.tsx
      corporate-recharge/
        page.tsx
    contact-sales/
      page.tsx
    login/
      page.tsx
    forgot-password/
      page.tsx
    get-started/
      page.tsx
    service-application/
      [service]/
        page.tsx
    dashboard/
      page.tsx
    layout.tsx
    globals.css
  components/
    marketing/
      Header.tsx
      Footer.tsx
      HeroMockup.tsx
      ProductIconStrip.tsx
      FeatureCard.tsx
      ServicePlanCard.tsx
      FAQAccordion.tsx
      ResourceCard.tsx
      CTASection.tsx
    product/
      ProductHero.tsx
      ProductTrustRow.tsx
      VideoDemoBlock.tsx
      SetupSteps.tsx
      ProductBenefits.tsx
      ProductFAQ.tsx
      ProductCTA.tsx
    auth/
      AuthShell.tsx
      AuthInput.tsx
      BusinessSizeRadioGroup.tsx
      RegionSelect.tsx
      GetStartedWizard.tsx
    contact/
      ContactSalesForm.tsx
    dashboard/
      DashboardShell.tsx
      SidebarNav.tsx
      TopBar.tsx
      ReadinessBanner.tsx
      QuickActionCard.tsx
      ServiceCard.tsx
      ApplicationStatusList.tsx
      DocumentVaultSummary.tsx
      BillingSupportCard.tsx
    ui/
      Button.tsx
      Card.tsx
      Badge.tsx
      IconBadge.tsx
  data/
    mockPlatform.ts
    productContent.ts
  lib/
    cn.ts
```

## Styling rules
Use Tailwind utility classes, but keep components readable.

Create design tokens in `globals.css` or Tailwind config:

```css
:root {
  --background: #ffffff;
  --surface: #f8fafd;
  --text-primary: #202124;
  --text-secondary: #5f6368;
  --border: #dadce0;
  --border-soft: #e8eaed;
  --primary: #1a73e8;
  --primary-hover: #185abc;
  --success: #188038;
  --warning: #f9ab00;
  --error: #d93025;
}
```

## Pixel-level design constraints
Codex must follow these constraints:

- Header height between 64px and 72px.
- Main container max width around 1180px.
- Hero title no smaller than 48px on desktop.
- Page sections must have at least 72px vertical padding on desktop.
- Cards must use light borders and subtle rounding.
- Do not use heavy box shadows.
- Do not use dark backgrounds for main marketing sections.
- Do not use giant gradients.
- Do not use illustration libraries with random mismatched style.

## Component quality rules
- Components must be small and reusable.
- No hardcoded repeated card arrays inside JSX if the data can live in a content object.
- Use semantic HTML.
- Use accessible labels on forms.
- Buttons and links must have visible focus states.
- FAQ must be keyboard accessible.
- Mobile navigation must be usable.

## Mock data rules
Create a centralized data file.

Use realistic sample business:

```ts
export const currentBusiness = {
  name: "Rahman Traders Ltd.",
  profileCompletion: 65,
  missingItems: ["Trade license", "Bank document"],
};
```

Use realistic services:

```ts
export const services = [
  {
    id: "sslcommerz",
    name: "SSLCOMMERZ Payment Gateway",
    status: "Recommended",
    description: "Accept online payments through cards, mobile wallets, and bank channels.",
    cta: "Start application",
  },
  {
    id: "bulk-sms",
    name: "Bulk SMS",
    status: "Available",
    description: "Set up sender ID, campaigns, delivery reports, and business messaging.",
    cta: "Explore",
  },
  {
    id: "corporate-top-up",
    name: "Corporate Top-Up",
    status: "Available",
    description: "Manage business recharge requests, balances, and operator services.",
    cta: "Explore",
  },
];
```

## Visual asset rules
Create original vector-like UI illustrations in JSX/CSS/SVG if no assets are provided.

Do not:

- Import Google logos.
- Import Google app icons.
- Use exact Google Workspace illustrations.
- Use SSLCOMMERZ real logo unless provided by the user or available locally.

## Interaction rules
Marketing pages:

- Header links can route to sections or placeholder pages.
- FAQ accordion must open and close.
- CTA buttons must route to `/get-started`, `/login`, product pages, or section anchors.

Auth and service application:

- Forms can use local state.
- General signup/business setup happens in `/get-started`.
- Selected service application happens in `/service-application/[service]`.
- On submit, route to the next step or dashboard.
- Do not connect to real auth.

Dashboard:

- Use mock data.
- Buttons can link to placeholder routes or show disabled states.
- No API calls.

## Acceptance checklist
The prototype is acceptable only if:

- Landing page follows the Google Workspace-inspired landing page structure described in the specs.
- Product detail pages follow the Google Workspace-inspired product detail structure described in the specs.
- Get-started page follows the spacious account setup structure described in the specs.
- Content is SSL Business Platform content, not Google content.
- Header, footer, cards, FAQ, and CTA blocks are consistent across pages.
- Dashboard first page clearly shows service activation, applications, document vault, billing, and support.
- Mobile layout is usable.
- No Google assets or copied Google text are used.
