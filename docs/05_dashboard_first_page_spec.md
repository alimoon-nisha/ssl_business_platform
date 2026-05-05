# 05 Dashboard First Page Spec

## Route
`/dashboard`

## Page goal
Create only the first page after login. It should be the equivalent of a Google Admin / Workspace home for SSL services, but simpler and more business-user friendly.

This page should answer:

- What is my business profile status?
- Which services can I activate?
- Which applications need attention?
- Which documents are missing or reusable?

## Design direction
Use the same clean, white, Google Workspace-inspired language:

- Top app bar.
- Left sidebar.
- Main dashboard content.
- White cards on soft gray background.
- Minimal borders.
- Clear statuses.
- No heavy analytics charts.

## Dashboard layout
Desktop structure:

- Top bar height: 64px.
- Left sidebar width: 260px.
- Main background: `#f8fafd`.
- Main content max width: 1200px.
- Page padding: 32px.

## Top bar
Left:

- SSL Business Hub logo.
- Business switcher: `Rahman Traders Ltd.` or placeholder company.

Center optional:

- Search input: `Search services, documents, applications`

Right:

- Help icon
- Notifications icon
- Product launcher menu
- Profile menu

## Sidebar
Navigation items:

1. Home
2. Services
3. Applications
4. Documents
5. Billing

Sidebar style:

- White background.
- Right border.
- Active item with pale blue background and blue text.
- Small line icons.

## Main content exact order
1. Welcome / account readiness banner
2. Quick actions row
3. Service catalog cards
4. Applications requiring attention
5. Document vault summary
6. Slim footer in the content column

## 1. Welcome / account readiness banner
Large white card at top.

Title:

> Welcome back, Subin

Use generic fallback if no user name:

> Welcome to your SSL workspace

Body:

> Complete your business profile to activate services faster and reuse documents across applications.

Progress element:

- Business profile completion: 65%
- Missing: Trade license, NID Back Side

Buttons:

- Complete profile
- View document vault

Right side visual:

- Small checklist mockup.
- Status chip: `2 items need attention`.

## 2. Quick actions row
Four compact cards:

1. Start SSLCOMMERZ application
2. Upload documents
3. Invite team member
4. Contact support

Each card:

- Icon
- Title
- One-line body
- Chevron

## 3. Service catalog cards
Title:

> Available services

Subtitle:

> Start with one service and add more when your business needs them.

Cards in 4 columns:

### SSLCOMMERZ Payment Gateway
Status: `Recommended`
Body:

> Accept payments online or in-store through cards, mobile wallets, and banks.

Logo:

- Use the same service logo as the landing page feature card.

CTA:

> Start application

### Messaging Suite
Body:

> Prepare SMS services, sender IDs, approvals, balance, and campaign reports from a shared account.

Logo:

- Use the same service logo as the landing page feature card.

CTA:

> Start application

### Corporate Recharge
Body:

> Set up recharge services, manage operators, track balances, and keep activity visible for your team.

Logo:

- Use the same service logo as the landing page feature card.

CTA:

> Start application

### Coordinate field sales operations
Body:

> Plan visits, track orders, manage delivery activity, and keep sales teams visible from one workflow.

Logo:

- Use the same service logo as the landing page feature card.

CTA:

> Start application

## 4. Applications requiring attention
Title:

> Applications

Use table or card list.

Rows:

1. SSLCOMMERZ Payment Gateway
   - Status: Missing information
   - Last updated: Today
   - Next step: Upload trade license
   - CTA: Continue

2. Bulk SMS
   - Status: Draft
   - Last updated: Yesterday
   - Next step: Choose SMS use case
   - CTA: Continue

3. Corporate Top-Up
   - Status: Not started
   - Last updated: —
   - Next step: Start request
   - CTA: Start

Status colors:

- Missing information: amber
- Draft: gray
- Under review: blue
- Approved: green
- Needs correction: red/amber

## 5. Document vault summary
Two-column section.

Left card:

Title:

> Document vault

Body:

> Keep reusable business documents in one place.

Document statuses:

- Trade license: Missing
- TIN certificate: Uploaded
- BIN/VAT certificate: Optional
- NID Front Side: Uploaded
- NID Back Side: Missing

CTA:

> Manage documents

Right card:

Title:

> Reuse suggestions

Body:

> Uploading your trade license now may help complete SSLCOMMERZ and SMS applications faster.

CTA:

> Upload trade license

## 6. Slim footer in the content column
Show the slim footer below the main dashboard content, not below the sidebar.

Content:

- SSL Wireless
- Terms & Conditions
- Privacy Policy
- Contact
- English - Bangladesh

## Empty states
Implement empty states, even if dummy data is used:

- No applications yet
- No documents uploaded yet
- No invoices yet
- No notifications yet

## Responsive behavior
Desktop:

- Sidebar visible.
- 4-column service cards.

Tablet:

- Sidebar collapses to icon rail.
- Cards 2 columns.

Mobile:

- Sidebar becomes drawer.
- Cards stacked.
- Tables become cards.

## Component requirements
Create:

- `DashboardShell`
- `SidebarNav`
- `TopBar`
- `ReadinessBanner`
- `QuickActionCard`
- `ServiceCard`
- `ApplicationStatusList`
- `DocumentVaultSummary`
- `SimplifiedFooter`

## Data requirements for prototype
Use a centralized mock data file:

`src/data/mockPlatform.ts`

Include:

- Current user
- Current business
- Services
- Applications
- Documents

Do not scatter dummy data inside components.

## Anti-patterns
Do not:

- Build a dense analytics dashboard.
- Add charts unless directly useful.
- Make it look like a banking dashboard.
- Put all services inside huge colored tiles.
- Hide application statuses behind modals.
