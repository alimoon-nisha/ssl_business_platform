# 00 Project Context and Research

## Product idea
SSL Wireless wants a unified business platform similar in structure to Google Workspace:

- One public marketing website.
- One account and authentication system.
- One business profile and account management area.
- Multiple services that businesses can activate from one place.
- Shared document vault for common business documents.
- Service-specific activation flows for each product.
- Unified billing, subscription, payment, application tracking, support, and team access.

This should not feel like a generic SaaS dashboard. It should feel like a calm, trusted business ecosystem for Bangladeshi merchants, SMEs, enterprises, and digital-first organizations.

## Primary business services for prototype
Use these as the main service catalog items:

1. SSLCOMMERZ Payment Gateway
   - Accept online payments from cards, mobile wallets, and bank channels.
   - Merchant onboarding and document submission.
   - Integration support through API, SDK, plugins, documentation, and demo.
   - Campaign, EMI, reconciliation, fraud and transaction management concepts.

2. Bulk SMS and Messaging
   - Bulk SMS for marketing, OTP, alerts, and business communication.
   - Voice SMS can be treated as an adjacent service.
   - Sender ID, campaign setup, balance/top-up, delivery reports, and approval flow.

3. Corporate Top-Up / Virtual Recharge
   - Airtime recharge and bill payment services for business use cases.
   - Corporate recharge, operator selection, balance management, approvals, and recharge reports.

4. Optional future services, visible as secondary cards only
   - Software development
   - Sales force automation
   - Ecommerce website development
   - Cloud hosting and cyber security
   - Insurance payment solutions

## Research notes from official SSL sources
Use official sources as the content baseline:

- SSL Wireless presents itself as a Bangladesh-based digital solutions provider with services across payment services, application development, banking and financial services, enterprise solutions, entertainment and VAS, IT security, marketing and promotion, solutions/platforms/tools, and insurance services.
- SSLCOMMERZ is positioned as a secure and authorized online payment gateway platform developed by SSL Wireless.
- SSLCOMMERZ describes itself as an end-to-end payment solution with extensive coverage, seamless integration, and multiple channels.
- SSLCOMMERZ highlights quick activation, simple integration, 30+ payment plans and 30+ banks' EMI, campaign management, and support for cards, mobile wallets, and bank payment channels.
- SSL Wireless has public service inquiry options that include Bulk SMS, Voice SMS, Corporate Top Up, Software Development, Sales Force Automation, Ecommerce Website Development, Cloud Hosting and Cyber Security, Call Center, and Other.
- SSL Wireless company material mentions pioneering online airtime recharge/top-up through Easy.com.bd and work in mobile-based SMS services for banks.

## Source URLs for product facts
Codex should use these only for content facts, not for visual design:

- https://sslwireless.com/
- https://sslwireless.com/payment-services/
- https://sslwireless.com/query/
- https://sslwireless.com/our-company/
- https://sslcommerz.com/
- https://sslcommerz.com/payment-gateway/
- https://sslcommerz.com/pricing/
- https://merchant.sslcommerz.com/

## Product positioning
Working name: SSL Business Hub

Suggested one-line positioning:

> One SSL account to activate, manage, and grow your business services.

Alternative hero lines:

- The better way to start and manage SSL services.
- Activate business services from one trusted SSL account.
- One account for payments, messaging, recharge, and more.

## Core UX principle
A business user should not have to submit the same company information again and again. The platform should collect shared information once and reuse it across product activation flows.

## Shared documents
Common documents may include:

- Trade license
- TIN certificate
- BIN or VAT certificate
- NID or passport of authorized person
- Bank account details or bank certificate
- Company address proof
- Partnership deed or incorporation documents, depending on business type
- Authorization letter, depending on service

Each service can ask for additional documents, but shared documents should be reused from the vault.

## Service activation states
Use these states consistently across dashboard, product cards, and application tracker:

- Not started
- Draft
- Missing information
- Submitted
- Under review
- Needs correction
- Approved
- Active
- Suspended

## Core user journey
1. Visitor lands on public website.
2. Visitor browses services and value proposition.
3. Visitor opens product detail page for a service.
4. Visitor signs up or logs in.
5. New user completes business profile basics.
6. User lands on first dashboard page.
7. Dashboard shows business profile health, available services, active applications, document vault status, billing and support shortcuts.
8. User starts activating a service.
9. Platform reuses common business data and asks only for missing service-specific inputs.

## Do not build beyond scope
For this prototype, build only:

- Landing page
- One product detail page template, initially for SSLCOMMERZ Payment Gateway
- Signup/login/onboarding journey screens
- First page after login, the dashboard home

Do not build full activation flows yet. Dashboard cards can link to placeholder routes.
