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
- Where do I manage billing, team, and support?

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
- User avatar

## Sidebar
Navigation items:

1. Home
2. Services
3. Applications
4. Documents
5. Billing
6. Team
7. Support
8. Settings

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
6. Billing and support cards

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
- Missing: Trade license, bank document

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

Cards in 3 columns:

### SSLCOMMERZ Payment Gateway
Status: `Recommended`
Body:

> Accept online payments through cards, mobile wallets, and bank channels.

CTA:

> Start application

### Bulk SMS
Status: `Available`
Body:

> Set up sender ID, campaigns, delivery reports, and business messaging.

CTA:

> Explore

### Corporate Top-Up
Status: `Available`
Body:

> Manage business recharge requests, balances, and operator services.

CTA:

> Explore

Optional second row cards:

- Cloud Hosting and Cyber Security
- Software Development
- Sales Force Automation

These can be shown as `Coming soon` or `Contact sales` depending on prototype needs.

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
- Authorized person NID: Uploaded
- Bank document: Missing

CTA:

> Manage documents

Right card:

Title:

> Reuse suggestions

Body:

> Uploading your trade license now may help complete SSLCOMMERZ and SMS applications faster.

CTA:

> Upload trade license

## 6. Billing and support cards
Two cards.

Billing card:

Title:

> Billing

Body:

> View invoices, activation fees, subscriptions, and payment history.

Status:

> No pending invoice

CTA:

> View billing

Support card:

Title:

> Support

Body:

> Get help with onboarding, documents, service activation, and integration.

Status:

> Average response: within business hours

CTA:

> Open support

## Empty states
Implement empty states, even if dummy data is used:

- No applications yet
- No documents uploaded yet
- No invoices yet
- No notifications yet

## Responsive behavior
Desktop:

- Sidebar visible.
- 3-column service cards.

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
- `BillingSupportCard`

## Data requirements for prototype
Use a centralized mock data file:

`src/data/mockPlatform.ts`

Include:

- Current user
- Current business
- Services
- Applications
- Documents
- Billing summary
- Support summary

Do not scatter dummy data inside components.

## Anti-patterns
Do not:

- Build a dense analytics dashboard.
- Add charts unless directly useful.
- Make it look like a banking dashboard.
- Put all services inside huge colored tiles.
- Hide application statuses behind modals.
