# 03 Product Detail Page Spec

## Route
`/products/payment-gateway`

## Page goal
Create a Google Workspace-inspired product detail page. The first product detail page is for SSLCOMMERZ Payment Gateway.

The design should use this product-detail structure: hero at top, centered trust/product icon row, video/demo block, setup steps, benefit section, FAQ, CTA, newsletter, footer.

## Exact section order
1. Global header
2. Product hero
3. Trust/product icon row
4. Demo/video block
5. Setup steps
6. Benefits section
7. Product FAQ
8. Final product CTA
9. Newsletter signup block
10. Footer

## 1. Global header
Same as landing page.

## 2. Product hero
Layout:

- Two-column layout.
- Left: product icon, headline, paragraph, CTA.
- Right: original UI/photo-style illustration panel.
- Max width 1080px to 1180px.

Product label:

> SSLCOMMERZ Payment Gateway

Headline:

> Accept digital payments with one trusted gateway

Body:

> Apply for SSLCOMMERZ from your SSL account, submit merchant documents, and get ready to accept card, mobile wallet, and bank payments through a secure integration.

Primary CTA:

> Start application

Secondary CTA:

> View documentation

Right visual:

Create an original product visual with:

- A merchant dashboard card.
- Payment methods row.
- Transaction status card.
- Small floating card: `Application under review`.
- A human/business illustration is allowed, but keep it flat and minimal.

Do not use the exact Google Workspace Gmail image style or Google assets.

## 3. Trust/product icon row
Centered section with a broad trust statement and a compact icon row.

Title:

> Built for online businesses across Bangladesh.

Subtitle:

> SSLCOMMERZ helps businesses accept payments across multiple digital channels with onboarding, integration, and support from SSL.

Small icon row:

- Cards
- Mobile wallet
- Bank payment
- EMI
- API
- Plugin
- Reports

Small disclaimer text:

> Actual payment methods, pricing, and approval requirements depend on selected package, business type, and SSLCOMMERZ review.

## 4. Demo/video block
Center section.

Title:

> See how payment gateway activation works

Create a large rounded rectangle video placeholder.

Inside the video placeholder:

- Mock merchant dashboard preview.
- Big play button centered.
- Label: `Payment gateway onboarding overview`

Do not embed real video unless provided.

## 5. Setup steps
Light gray section background.

Eyebrow:

> How it works

Title:

> Start accepting payments in a few clear steps

Three columns:

### Step 1
Title:

> Create your SSL account

Body:

> Add your business name, contact person, company type, and region.

CTA link:

> Learn more

### Step 2
Title:

> Complete merchant requirements

Body:

> Upload reusable business documents and provide SSLCOMMERZ-specific details when required.

CTA link:

> View checklist

### Step 3
Title:

> Integrate and go live

Body:

> Use documentation, plugins, APIs, and support resources to connect the gateway to your website or app.

CTA link:

> View documentation

## 6. Benefits section
Two-column product benefits layout.

Eyebrow:

> Why use the platform

Title:

> Payment gateway onboarding is easier when your business profile is already ready

Left feature list:

1. `Reuse business documents`
   - Store trade license, TIN, bank details, and authorization documents once.

2. `Track review status`
   - See whether your application is drafted, submitted, under review, needs correction, or approved.

3. `Prepare integration early`
   - Keep developer resources, plugin links, and environment details close to the application.

4. `Manage future services together`
   - Add messaging, top-up, or other SSL services later without creating a separate account.

Right visual:

- Document vault card.
- Gateway status chip.
- Integration checklist card.

## 7. Product FAQ
Title:

> Payment gateway FAQs

FAQ rows:

1. What is SSLCOMMERZ?
2. What documents are needed to apply?
3. Can I use existing business documents from my SSL account?
4. What payment methods are supported?
5. Does SSLCOMMERZ support plugins and APIs?
6. How long does approval take?
7. Where can I see pricing?

## 8. Final product CTA
Pale gray block.

Icon at top: Payment Gateway icon.

Title:

> Start your SSLCOMMERZ application

Body:

> Create your SSL account and prepare your merchant profile for review.

CTA:

> Get started

## 9. Newsletter signup block
Same component as landing page.

## 10. Footer
Same footer as landing page.

## Product detail template requirement
Build the page so the same layout can later support:

- `/products/sms-solution`
- `/products/corporate-top-up`
- `/products/cloud-hosting`

Use a product content object rather than hardcoding every string into components.

## Component requirements
Create:

- `ProductHero`
- `ProductTrustRow`
- `VideoDemoBlock`
- `SetupSteps`
- `ProductBenefits`
- `ProductFAQ`
- `ProductCTA`

## Anti-patterns
Do not:

- Make this page look like a fintech landing page only.
- Add crypto-style or banknote visuals.
- Make the page dense with feature tables.
- Hide the connection between SSLCOMMERZ and the unified SSL account.
