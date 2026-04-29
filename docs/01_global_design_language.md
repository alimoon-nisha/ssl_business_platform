# 01 Global Design Language

## Visual target
Use a Google Workspace-inspired design language:

- White-first, very spacious layout.
- Simple enterprise typography.
- Calm blue primary actions.
- Light gray section bands.
- Thin dividers.
- Rounded cards.
- Small product icon rows.
- Minimal shadows.
- Friendly flat illustrations and UI mockups.
- No heavy gradients, no dark hero, no flashy startup design.

The final UI should look like a polished global SaaS/business ecosystem site, not a local corporate website.

## Brand substitution
Do not use Google logos or Google app icons.

Use SSL-style product icons instead:

- SSLCOMMERZ Payment Gateway
- SMS Solution
- Corporate Top-Up
- Virtual Recharge
- Software Development
- Cloud Hosting
- Cyber Security
- Sales Force Automation

If real SVGs are not available, create simple original placeholder icons using colored geometric shapes. Keep them small, flat, and clean.

## Color rules
Use a Google Workspace-inspired color balance, but adapted to SSL:

- Page background: `#ffffff`
- Soft section background: `#f8fafd` or `#f7f8fa`
- Text primary: `#202124`
- Text secondary: `#5f6368`
- Border: `#dadce0`
- Subtle border: `#e8eaed`
- Primary blue: `#1a73e8`
- Primary blue hover: `#185abc`
- Success green: `#188038`
- Warning amber: `#f9ab00`
- Error red: `#d93025`

Allow small supporting colors for product icons:

- Blue, green, yellow, red, and teal accents.
- Use them only in icons, tiny badges, small illustrations, or status accents.
- Do not create large rainbow gradients.

## Typography
Use `Inter`, `Arial`, or `Roboto` style typography. If using Next.js, load Inter through `next/font/google` or use a local fallback.

General typography scale:

- Header nav: 14px, medium weight.
- Hero title: 52px desktop, 40px tablet, 32px mobile. Line height around 1.05 to 1.15.
- Section title: 32px desktop, 28px tablet, 24px mobile.
- Card title: 20px to 24px.
- Body: 16px.
- Small text: 13px to 14px.
- Captions: 12px.

Typography must be quiet. Avoid huge bold startup-style display text.

## Layout width
Use a consistent centered container:

- Desktop max width: 1180px.
- Product detail content width: 1080px to 1120px.
- Auth page width: left form column 420px to 480px, right illustration column 500px to 560px.
- Dashboard content max width: 1200px.

## Spacing rhythm
Use large vertical breathing room:

- Header height: 64px to 72px.
- Hero top padding: 72px to 96px.
- Hero bottom padding: 64px to 88px.
- Section vertical padding: 72px to 96px.
- Tight content groups: 24px to 32px.
- Card padding: 24px to 32px.
- FAQ row height: 64px to 72px.

## Header
Use a restrained enterprise header style:

- Sticky or static top header, white background.
- Bottom border: 1px solid `#dadce0`.
- Left: SSL Business Platform wordmark.
- Middle nav: Products, Solutions, Pricing, Resources, Support.
- Right: Contact sales, Sign in, Get started button.
- Get started is a blue rounded pill.
- Header should be restrained, not oversized.

## Buttons
Primary button:

- Blue background.
- White text.
- Rounded pill or 8px radius depending on context.
- Height 40px to 48px.
- Padding left/right 20px to 28px.

Secondary button:

- White background.
- Blue text.
- 1px blue or gray border.
- Same height as primary.

Text links:

- Blue text.
- Small arrow icon optional.
- No heavy underline unless hover.

## Cards
Use Google Workspace-style cards:

- White background.
- 1px border `#e8eaed`.
- Border radius 12px to 16px.
- Minimal shadow only on hover or selected cards.
- Selected pricing/application card can have 2px blue border.
- Card image or UI mockup at top with light gray background.

## Forms
Forms should use a spacious account-setup style:

- Large title.
- Inputs with 1px gray border.
- 8px border radius.
- 52px to 60px input height.
- Labels small, gray, top-aligned.
- Radio rows large, simple, spacious.
- Blue primary Next button.
- Do not use dense form layouts.

## Illustrations and mockups
Use original assets only.

Preferred visual style:

- Flat editorial illustrations.
- Soft business characters.
- Clean product UI mockups in cards.
- Small floating panels and status chips.
- Very light shadows.
- Use subtle accents: blue, green, yellow, red.

Do not use stock corporate 3D illustrations. Do not use neon gradients. Do not use generic fintech hero coins everywhere.

## Motion
Keep animation very subtle:

- Header no heavy animation.
- Hero UI mockup can float 4px to 8px slowly.
- Background glows can drift very slowly.
- Cards can fade/slide up on scroll.
- Product icon row can have tiny hover lift.
- FAQ rows expand smoothly.

Respect `prefers-reduced-motion`.

## Responsive rules
Desktop:

- Two-column hero where applicable.
- Pricing/service cards in 3 or 4 columns.
- FAQ left column with side cards.

Tablet:

- Two columns become stacked where needed.
- Header nav can collapse.

Mobile:

- Single-column sections.
- Header becomes mobile drawer.
- Pricing/service cards horizontal scroll is allowed but stacked is preferred.
- Dashboard cards become one column.

## Design strictness
Codex must not invent a completely different design. The intended layout mood is:

- Same whitespace level.
- Same light header treatment.
- Same centered content sections.
- Same card density.
- Same FAQ structure.
- Same get-started form structure.
- Same product detail composition.

Use different brand content and original graphics.
