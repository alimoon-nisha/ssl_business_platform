# 02 Landing Page Spec

## Route
`/`

## Page goal
Introduce SSL Business Platform as the unified entry point for SSL Wireless business services. The page should feel structurally close to a calm, Google Workspace-inspired enterprise landing page.

## Exact section order
Build sections in this exact order:

1. Global header
2. Hero section
3. Product icon strip / anchor nav
4. Main value statement
5. Feature trio section
6. Service plans / service selection section
7. Migration / onboarding confidence section
8. FAQ section
9. Resources / learning cards section
10. Final CTA block
11. Newsletter signup block
12. Footer

Do not add unrelated sections.

## 1. Global header
Use the global header from `01_global_design_language.md`.

Header content:

- Logo text: `SSL Business Platform`
- Nav links: Products, Solutions, Pricing, Resources, Support
- Right links: Contact sales, Sign in, Get started

Header behavior:

- White background.
- Thin bottom border.
- Get started button blue.
- Sign in as plain blue link.

## 2. Hero section
Layout:

- Two-column desktop layout.
- Left column text, right column UI mockup/illustration.
- Max width 1180px.
- Top padding 72px to 96px.
- Bottom padding 48px to 72px.

Hero headline:

> The better way to start and manage business services

Hero body:

> Activate payments, messaging, recharge, and digital solutions from one SSL account. Submit business documents once, track every application, and manage services from a single place.

Primary CTA:

> Get started

Secondary CTA:

> Contact sales

Right visual:

Create an original UI mockup inspired by the landing page structure:

- A clean admin panel preview.
- Left mini sidebar with service icons.
- Center card titled `Business profile`.
- Right card titled `Applications`.
- Tiny floating status chip: `Documents reused` or `Under review`.
- Use light gray card surfaces and small blue/green/yellow accents.

Background:

- Mostly white.
- Very soft radial glow in bottom-left and bottom-right, barely visible.
- No heavy gradient.

## 3. Product icon strip / anchor nav
Replicate the feel of a small icon strip under the hero.

Structure:

- Centered pill-shaped container.
- Four or five anchor items.
- Items: Overview, Services, Activation, Dashboard, FAQ.
- Below or inside the strip, show a row of small product icons with labels.

Product icons:

- Payment Gateway
- SMS
- Corporate Top-Up
- Virtual Recharge
- Cloud Hosting
- Cyber Security
- Software Development
- Sales Force Automation

Do not use Google app icons.

## 4. Main value statement
Centered text block.

Title:

> All the services your business needs, managed from one account.

Three short columns below:

Column 1 title:

> One business profile

Body:

> Keep company details, authorized contacts, and reusable documents in one secure profile.

Column 2 title:

> Service activation made clear

Body:

> See what each service needs, upload missing documents, and track approval progress.

Column 3 title:

> Built for Bangladeshi businesses

Body:

> Start with SSLCOMMERZ, messaging, and top-up services, then expand as your business grows.

## 5. Feature trio section
Use a clean three-card section.

Title:

> One account. Many SSL services.

Cards:

### Card 1
Title:

> Activate SSLCOMMERZ faster

Body:

> Apply for the payment gateway, submit merchant documents, and follow review status from the same workspace.

Visual:

A UI mockup showing payment gateway application status.

### Card 2
Title:

> Manage messaging campaigns

Body:

> Prepare SMS services, sender IDs, approvals, balance, and campaign reports from a shared account.

Visual:

A simple campaign calendar or SMS dashboard mockup.

### Card 3
Title:

> Start corporate top-up services

Body:

> Set up recharge services, manage operators, track balances, and keep activity visible for your team.

Visual:

A recharge request form or balance card mockup.

Card style:

- 3 columns on desktop.
- Card image area on top.
- White card, subtle border, rounded corners.
- Keep text short.

## 6. Service plans / service selection section
Do not copy Google Workspace pricing exactly. Use a service selection table/card section inspired by the pricing section.

Title:

> Find the right services for your business.

Subtitle:

> Start with one service, then add more from the same SSL account.

Desktop layout:

- Four columns, same rhythm as Workspace pricing cards.
- One highlighted card with blue border.

Cards:

### Starter setup
Use for new businesses exploring SSL services.
CTA: `Create account`
Includes:

- Business profile
- Document vault
- Service catalog
- Application tracking
- Support requests

### Payment gateway
Highlight this card.
CTA: `Start application`
Includes:

- SSLCOMMERZ onboarding
- Merchant document checklist
- API/plugin integration guidance
- Payment method coverage
- Review and approval tracking

### Messaging suite
CTA: `Explore SMS`
Includes:

- Bulk SMS setup
- Sender ID request
- Campaign readiness
- Delivery report access
- Balance and usage overview

### Corporate recharge
CTA: `Explore top-up`
Includes:

- Corporate top-up request
- Operator/service setup
- Recharge activity
- Balance visibility
- Team approval support

Below the cards, add small disclaimer text:

> Service availability, approval requirements, fees, and document checklists may vary by business type and selected product.

## 7. Migration / onboarding confidence section
Use a small confidence block.

Left aligned narrow content.

Title:

> Move your business setup into one SSL account.

Body:

> Existing SSL merchants and new businesses can bring their company profile, service applications, and documents into a single platform over time.

CTA:

> Learn about onboarding

Right side optional visual:

- A small document vault card.
- A progress indicator.
- A reused trade license chip.

## 8. FAQ section
Use a light gray background band.

Title:

> Find the answers that you need.

FAQ rows:

1. What is SSL Business Platform?
2. Is this the same as SSLCOMMERZ?
3. Can I activate more than one service from one account?
4. Do I need to upload the same documents again?
5. Which services are available first?
6. Can my team members access the account?
7. How long does service approval take?

Right side cards:

Card 1:

Title: `Explore services`
Body: `See which SSL services fit your business needs.`
CTA: `View services`

Card 2:

Title: `Talk to sales`
Body: `Need help choosing the right service setup?`
CTA: `Contact sales`

## 9. Resources / learning cards section
Match the Google Workspace learning card layout.

Title:

> Learn how SSL services can support your business.

Cards:

1. `How to prepare your merchant documents`
2. `How online payment activation works`
3. `Choosing between SMS, voice SMS, and top-up services`
4. `How to manage users and permissions`
5. `How unified billing can simplify service management`

Use light cards with small illustrative thumbnails.

## 10. Final CTA block
Centered pale gray block.

Title:

> Start with one SSL account today.

Body:

> Create your business profile, explore services, and begin activation when you are ready.

CTA:

> Get started

## 11. Newsletter signup block
Match the pale blue newsletter block near the bottom of the Workspace page.

Left text:

> Sign up for product updates, service launches, and business tips.

Right form:

- First name
- Last name
- Business email
- Region dropdown default: Bangladesh
- Subscribe button

## 12. Footer
Large multi-column footer.

Columns:

- Included services
- Solutions
- Resources
- Support
- Company

Footer bottom:

- SSL Wireless
- Privacy
- Terms
- Contact
- Language selector

## Component requirements
Create these reusable components:

- `Header`
- `Footer`
- `HeroMockup`
- `ProductIconStrip`
- `FeatureCard`
- `ServicePlanCard`
- `FAQAccordion`
- `ResourceCard`
- `NewsletterBlock`
- `CTASection`

## Anti-patterns
Do not:

- Use a dark hero.
- Use big stock photos.
- Use heavy fintech gradients.
- Use generic AI SaaS glow effects.
- Add too many sections.
- Make the landing page look like SSLCOMMERZ only. It is an SSL ecosystem platform.
