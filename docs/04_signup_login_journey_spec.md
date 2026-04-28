# 04 Signup, Login, and Get Started Journey Spec

## Purpose

Create the authentication, account setup, and service application entry journey for SSL Business Platform.

Important product decision:

- `/get-started` and `/sign-up` are not separate journeys.
- `Get Started` is the unified signup and business setup flow.
- Users create one SSL Business Platform account first.
- If they selected a service before signup, they can continue into that service application after account creation.
- If they did not select a service, they land on the dashboard after account creation.
- Service application steps are not part of the general account setup unless a service was selected first.

This journey must use the existing SSL Business Platform design language already created in the current prototype. Do not use the visual design style from the old flow screenshots. Those screenshots are only for understanding the flow logic.

## UX rationale

Use a wizard-style flow because the journey has a clear order and later steps depend on earlier choices. Keep the base account setup short, then branch into service application only when there is a selected service.

## Core flow model

There is one account setup flow.

```text
General Get Started
→ Account setup
→ Account created
→ Dashboard
```

```text
Start application from landing or service page
→ Account setup
→ Account created
→ Continue to selected service application?
→ Service application journey
```

## Routes

Use these routes:

- `/login`
- `/get-started`
- `/service-application/[service]`
- `/dashboard`
- `/forgot-password`

Do not create a separate `/sign-up` route.

If `/sign-up` already exists, redirect it to:

```text
/get-started
```

## Entry contexts

### 1. General Get Started

Entry examples:

- Header `Get started`
- Hero `Get started`
- Final CTA `Get started`

Route:

```text
/get-started
```

Behavior:

- No selected service.
- No selected package.
- User completes account setup.
- After account creation, send user to dashboard.

Flow:

```text
Step 1: Business basics
Step 2: Contact and business details
Step 3: Account credentials
Step 4: Account created
Step 5: Dashboard
```

### 2. Start application from landing page service card

Entry examples:

- `Start application` from SSLCOMMERZ card
- `Start application` from Messaging Suite card
- `Start application` from Corporate Recharge card

Route examples:

```text
/get-started?service=payment-gateway
/get-started?service=messaging-suite
/get-started?service=corporate-recharge
```

Behavior:

- Selected service is known.
- Selected package is not known.
- User completes account setup.
- After account creation, show a continuation screen:
  `Do you want to continue to the [Service Name] application?`
- If user continues, take them to the service application journey.
- Package selection appears inside the service application flow with no package pre-selected.

Flow:

```text
Step 1: Business basics
Step 2: Contact and business details
Step 3: Account credentials
Step 4: Account created
Step 5: Continue to selected service application or skip
Step 6: Service terms
Step 7: Select package
Step 8: Upload documents
Step 9: Review summary
Step 10: Payment or submission
```

### 3. Start application after selecting a package from service detail page

Entry examples:

- User opens Messaging Suite detail page.
- User selects `Standard` package.
- User clicks `Start application`.

Route example:

```text
/get-started?service=messaging-suite&package=standard
```

Behavior:

- Selected service is known.
- Selected package is known.
- User completes account setup.
- After account creation, show the same continuation screen:
  `Do you want to continue to the [Service Name] application?`
- If user continues, take them to the same service application journey.
- Package selection screen still appears.
- The selected package is pre-selected.
- User can keep or change the selected package.

Flow:

```text
Step 1: Business basics
Step 2: Contact and business details
Step 3: Account credentials
Step 4: Account created
Step 5: Continue to selected service application or skip
Step 6: Service terms
Step 7: Select package with selected package pre-filled
Step 8: Upload documents
Step 9: Review summary
Step 10: Payment or submission
```

## Query parameter contract

Supported query params:

```ts
type GetStartedContext = {
  service?: "payment-gateway" | "messaging-suite" | "corporate-recharge" | "cloud-hosting" | string;
  package?: string;
};
```

Rules:

- `service` is optional.
- `package` is optional.
- `package` is only valid when `service` exists.
- If `package` exists without `service`, ignore package and treat the flow as general get started.
- Unknown service values should not break the flow. Show a safe fallback or redirect to `/get-started`.
- If `service` exists, keep it in flow state after account creation.
- If `package` exists, keep it in flow state and pre-select it in the package step.

## Shared visual direction

Use the current SSL Business Platform visual language:

- Clean white background.
- Workspace-inspired spacing.
- Soft blue primary CTA.
- Thin borders.
- Rounded cards.
- Calm enterprise tone.
- Existing typography scale.
- Existing header and logo treatment.
- Existing input and button styling.

Do not use the visual design pattern from the uploaded old flow screenshots.

Those screenshots are only for flow logic:

- multi-step account creation
- account created screen
- continue to service application or skip
- service terms
- package selection
- document upload
- summary/payment flow

## `/login`

Purpose:

Allow existing users to access their SSL Business Platform dashboard.

Title:

```text
Sign in
```

Fields:

- Email or mobile number
- Password

Links:

- Forgot password?
- Create account

Primary button:

```text
Sign in
```

Secondary route:

```text
Create account → /get-started
```

Forgot password route:

```text
/forgot-password
```

Right-side message title:

```text
Continue managing your services
```

Right-side message body:

```text
Track applications, upload missing documents, review billing, manage team access, and open active service spaces.
```

Behavior:

- Validate required fields.
- Show clear error states.
- Do not use social login unless explicitly requested.
- Do not use a dark login page.
- Do not create a separate signup route.

## `/forgot-password`

Purpose:

Let existing users request a password reset without leaving the SSL design language.

Title:

```text
Forgot your password?
```

Fields:

- Email or mobile number

Primary button:

```text
Send reset link
```

Secondary route:

```text
Back to sign in → /login
```

Behavior:

- Validate required input.
- Show a confirmation state after submit.
- Keep the page calm and sparse, matching the existing login shell.

## `/get-started`

Purpose:

Create one SSL Business Platform account and collect minimum business setup data.

This flow replaces the previous separate `/sign-up` and `/get-started` journeys.

### Step 1: Business basics

Step label:

```text
Step 1 of 3
```

Title:

```text
Let’s get started
```

Fields:

1. Business name
   - Required
   - Label: `Business name`
   - Helper text: `Use the legal or trade name used on your business documents.`

2. Number of employees, including you
   - Required
   - Options:
     - Just you
     - 2 - 9
     - 10 - 99
     - 100 - 299
     - 300+

3. Business type
   - Required
   - Options:
     - Online
     - Store
     - Online + Store

4. Sector
   - Required
   - Suggested options:
     - Education
     - Retail / Ecommerce
     - Restaurant / Food
     - Healthcare
     - Travel / Hospitality
     - Software / SaaS
     - Financial services
     - NGO / Development
     - Professional services
     - Real estate
     - Media / Entertainment
     - Logistics / Delivery
     - Manufacturing / Distribution
     - Other

Primary button:

```text
Next
```

Validation:

- Business name required.
- Employee range required.
- Business type required.
- Sector required.
- Disable Next until required fields are valid.

Right-side message title:

```text
Activate services from one business profile
```

Right-side message body:

```text
Add your business basics once, then use them across payment, messaging, recharge, and other SSL services.
```

### Step 2: Contact and business details

Step label:

```text
Step 2 of 3
```

Title:

```text
Add contact details
```

Fields:

1. Contact person name
   - Required

2. Company address
   - Required

3. Designation
   - Optional

4. Department
   - Optional

5. Region
   - Required
   - Default: Bangladesh

Primary button:

```text
Next
```

Secondary button:

```text
Back
```

Validation:

- Contact person name required.
- Company address required.
- Region required.

Right-side message title:

```text
Your business profile saves time
```

Right-side message body:

```text
Common information can be reused when you apply for SSLCOMMERZ, Messaging Suite, Corporate Recharge, and future SSL services.
```

### Step 3: Account credentials

Step label:

```text
Step 3 of 3
```

Title:

```text
Create your account
```

Fields:

1. Email address
   - Required

2. Mobile number
   - Required
   - Bangladesh format guidance

3. Password
   - Required

4. Confirm password
   - Required

Checkbox:

```text
I agree to the Terms of Service and Privacy Policy.
```

Primary button:

```text
Create account
```

Secondary button:

```text
Back
```

Validation:

- Email required and valid.
- Mobile number required.
- Password required.
- Confirm password must match.
- Terms checkbox required.
- Disable Create account until all required fields are valid.

Right-side message title:

```text
One account for every SSL service
```

Right-side message body:

```text
Your account gives you access to service applications, document vault, billing, support, and team management.
```

### Step 4: Account created

This screen changes based on entry context.

#### Case A: No selected service

Step label:

```text
Account created
```

Title:

```text
Your SSL Business account is ready
```

Body:

```text
You can now explore services, complete your business profile, upload documents, or continue from your dashboard.
```

Primary button:

```text
Go to dashboard
```

Secondary button:

```text
Explore services
```

Behavior:

- Primary button sends user to `/dashboard`.
- Secondary button can scroll to services or send to service catalog if that exists.

#### Case B: Selected service exists

Step label:

```text
Account created
```

Title:

```text
Your SSL Business account is ready
```

Service continuation card title:

```text
Do you want to continue to the [Service Name] application?
```

Body:

```text
You can continue the application now, or skip this step and continue later from your dashboard.
```

Next steps list:

```text
1. Review and accept the service terms
2. Select a package
3. Upload required business documents
4. Review the application summary
5. Submit or proceed to payment if required
```

Primary button:

```text
Continue application
```

Secondary button:

```text
Skip for now
```

Behavior:

- Continue application sends user to `/service-application/[service]`.
- Skip sends user to `/dashboard`.
- Preserve selected package in state if package exists.

## `/service-application/[service]`

Purpose:

Complete the service-specific application journey after account setup.

This route is only used when the user has selected a service.

Examples:

```text
/service-application/payment-gateway
/service-application/messaging-suite
/service-application/corporate-recharge
```

The service application journey should use the same visual language as `/get-started`.

Do not make this feel like a dashboard.
Do not overload the user with every possible requirement.
Show one clear step at a time.

## Service application flow

### Step 1: Service terms

Title:

```text
Terms & Conditions
```

Subtitle:

```text
Review the service agreement before continuing.
```

Content rules:

- Show service-specific terms summary.
- Use real copy later.
- For now, use clean placeholder copy that does not mention unrelated products.

Checkbox:

```text
I read and agree to the service terms.
```

Primary button:

```text
Next
```

Secondary button:

```text
Back
```

Validation:

- Disable Next until terms checkbox is selected.

### Step 2: Select package

Title:

```text
Select package
```

Subtitle:

```text
Choose the package that matches your service needs. You can review the cost before submitting.
```

Behavior:

- Show package cards for the selected service.
- Use the same package selection component for all entry points.
- If user came from landing page `Start application`, no package should be pre-selected.
- If user came from service detail page after choosing a package, that package should be pre-selected.
- User must be able to change the selected package.
- Continue button disabled until one package is selected.

Package card content:

- Package name
- Price or pricing note
- Key included features
- Trial availability, if applicable
- Setup fee or recurring fee, if applicable
- CTA state:
  - `Selected`
  - `Select package`

Pricing note rules:

- Do not assume all services have the same pricing model.
- Some services may have fixed packages.
- Some services may have trials.
- Some services may be usage-based.
- Some services may require sales contact.
- If pricing is custom, show `Custom pricing` and use CTA `Request package`.

### Step 3: Upload documents

Title:

```text
Upload documents
```

Subtitle:

```text
Upload the documents needed to review your service application.
```

Document card rules:

- Show only documents relevant to the selected service and selected package.
- If package affects document requirements, update this step based on selected package.
- Use reusable document vault logic when possible.
- If a document already exists in the vault, show it as reusable.

Common document examples:

- Trade license
- TIN certificate
- BIN/VAT certificate, if applicable
- Authorized person NID
- Bank document or cheque leaf
- Company authorization letter
- Service-specific agreement or approval document

Document statuses:

- Not uploaded
- Uploaded
- Verified
- Needs replacement
- Reused from vault
- Optional

Primary button:

```text
Continue
```

Secondary button:

```text
Back
```

Optional button:

```text
Skip for now
```

Skip behavior:

- Allow skip only if the service/package supports incomplete submission or draft save.
- If required documents are mandatory before submission, do not allow skip.
- If skipped, application status should become `Draft` or `Needs documents`.

### Step 4: Review summary

Title:

```text
Application summary
```

Show:

- Selected service
- Selected package
- Business name
- Contact person
- Business type
- Sector
- Uploaded/reused documents
- Setup fee
- Recurring fee, if applicable
- Trial, if applicable
- Total payable now
- Notes about verification or approval

Important note for payment-required services:

```text
After payment, your application will move to review. Your service will be activated after verification is completed.
```

Important note for review-first services:

```text
Your application will be reviewed by the SSL team. You may be asked for additional documents or clarification.
```

Primary button options:

- `Proceed to payment`
- `Submit application`

Use `Proceed to payment` only when there is a payable amount now.

Use `Submit application` when the service is sales-led, trial-based, or review-first.

Secondary button:

```text
Back
```

### Step 5: Payment or submission confirmation

This step is shown after the summary action.

For payment-required services:

Title:

```text
Payment initiated
```

Body:

```text
Complete payment to submit your application for review.
```

For non-payment services:

Title:

```text
Application submitted
```

Body:

```text
Your application has been submitted. You can track the status from your dashboard.
```

Primary button:

```text
Go to dashboard
```

Secondary button:

```text
View application
```

## Service package pre-selection logic

The same package selection screen must be used in all cases.

### From landing page

```text
/get-started?service=messaging-suite
```

Package step:

- No package selected.
- User selects package manually.

### From service detail page with package

```text
/get-started?service=messaging-suite&package=standard
```

Package step:

- `Standard` package is pre-selected.
- User can change selection.

### From service detail page without package

```text
/get-started?service=messaging-suite
```

Package step:

- No package selected.
- User selects package manually.

## Dashboard landing behavior

After general account setup:

```text
Go to /dashboard
```

Dashboard should show:

- Business profile completion
- Available services
- Document vault
- Applications
- Support
- Billing
- Recommended next action

After service application skip:

```text
Go to /dashboard
```

Dashboard should show:

- Draft application for selected service
- Continue application CTA
- Missing next step
- Service status: Draft

After service application submission:

```text
Go to /dashboard
```

Dashboard should show:

- Submitted application
- Selected package
- Status
- Missing documents, if any
- Payment status, if applicable
- Support/contact action

## Status model

Application statuses:

- Not started
- Draft
- Submitted
- Needs information
- Under review
- Approved
- Active
- Rejected
- Cancelled

Document statuses:

- Missing
- Uploaded
- Verified
- Needs replacement
- Reused from vault
- Expired
- Optional

Package statuses:

- Not selected
- Selected
- Trial available
- Custom pricing
- Payment required
- Sales review required

## Business type options

Use these options in account setup:

- Online
- Store
- Online + Store

Do not ask for legal entity type in the first account setup flow.

Legal entity type can be collected later if required by a service.

## Sector options

Use these options:

- Education
- Retail / Ecommerce
- Restaurant / Food
- Healthcare
- Travel / Hospitality
- Software / SaaS
- Financial services
- NGO / Development
- Professional services
- Real estate
- Media / Entertainment
- Logistics / Delivery
- Manufacturing / Distribution
- Other

## Form behavior

- Use client-side validation.
- Show clear, simple error messages.
- Required fields should be visibly marked.
- Use accessible labels.
- Do not rely only on placeholders.
- Keyboard navigation must work.
- Preserve user input when moving back and forward.
- Preserve selected service and selected package across the flow.
- Show disabled button state until minimum valid fields are entered.
- Do not show too many fields on one screen.

## Component requirements

Create or update these components:

- `AuthShell`
- `GetStartedStepper`
- `BusinessSizeRadioGroup`
- `BusinessTypeSelect`
- `SectorSelect`
- `RegionSelect`
- `AuthInput`
- `AccountCreatedCard`
- `ServiceContinuationCard`
- `ServiceTermsStep`
- `PackageSelectionStep`
- `PackageCard`
- `DocumentUploadStep`
- `DocumentUploadCard`
- `ApplicationSummaryStep`
- `ApplicationStatusBadge`

## Data structure recommendation

Use typed mock data for services and packages.

Example:

```ts
export type ServiceSlug =
  | "payment-gateway"
  | "messaging-suite"
  | "corporate-recharge"
  | "cloud-hosting";

export type ServicePackage = {
  id: string;
  serviceSlug: ServiceSlug;
  name: string;
  priceLabel: string;
  billingNote?: string;
  trialAvailable?: boolean;
  setupFee?: number;
  recurringFee?: number;
  customPricing?: boolean;
  features: string[];
  requiredDocuments: string[];
};

export type GetStartedFlowState = {
  selectedService?: ServiceSlug;
  selectedPackageId?: string;
  businessName?: string;
  employeeRange?: string;
  businessType?: "online" | "store" | "online-store";
  sector?: string;
  contactPersonName?: string;
  companyAddress?: string;
  designation?: string;
  department?: string;
  region?: string;
  email?: string;
  mobile?: string;
};
```

## Anti-patterns

Do not:

- Keep both `/sign-up` and `/get-started` as separate signup journeys.
- Send general users through service application steps.
- Force package selection when no service has been selected.
- Skip package confirmation when a package was pre-selected.
- Ask for every possible KYC document during base account setup.
- Make onboarding look like a dense dashboard.
- Use the old uploaded screenshots as visual design reference.
- Use unrelated placeholder names like `Hercules ERP`.
- Use dark login pages.
- Add social login buttons unless explicitly requested.
- Add unnecessary animation or gamification.
- Create separate duplicated service application flows for each service.

## Final implementation QA

Check these paths:

### 1. General get started

```text
/get-started
```

Expected:

```text
Business basics → Contact details → Account credentials → Account created → Dashboard
```

### 2. Landing service start

```text
/get-started?service=messaging-suite
```

Expected:

```text
Business basics → Contact details → Account credentials → Account created → Continue to Messaging Suite application? → Terms → Select package with no pre-selection → Upload documents → Summary
```

### 3. Package-selected start

```text
/get-started?service=messaging-suite&package=standard
```

Expected:

```text
Business basics → Contact details → Account credentials → Account created → Continue to Messaging Suite application? → Terms → Select package with Standard pre-selected → Upload documents → Summary
```

### 4. Skip service continuation

```text
Account created → Skip for now → Dashboard
```

Expected:

```text
Dashboard shows draft or suggested application continuation for selected service.
```

### 5. Sign in

```text
/sign-in
```

Expected:

```text
Existing user can sign in and land on dashboard.
```
