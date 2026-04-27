# 04 Signup and Login Journey Spec

## Routes
Use these routes:

- `/sign-in`
- `/sign-up`
- `/get-started`
- `/onboarding/business`
- `/onboarding/documents`
- `/onboarding/complete`

## Page goal
Create an onboarding journey inspired by the Google Workspace get-started screenshot. It should feel sparse, trustworthy, and easy. Avoid dashboard-style complexity during onboarding.

## Design reference
The get-started screenshot shows:

- Very simple white page.
- Centered top brand.
- Thin header divider.
- Large title on left.
- Large form fields.
- Radio options with lots of spacing.
- Region dropdown.
- Blue Next button.
- Right side illustration and feature message.

Match this composition closely using SSL content.

## Shared auth shell
Create `AuthShell` component:

- Top centered logo: `SSL Business Platform`
- Thin border below top area.
- Main content split into two columns.
- Left column: form.
- Right column: illustration and message.
- Desktop content max width: 980px to 1100px.
- Top margin after header: 64px to 80px.
- Mobile: hide or move illustration below form.

## `/get-started`
This is the first business setup screen.

Title:

> Let’s get started

Fields:

1. Business name input
2. Number of employees, including you
   - Just you
   - 2 - 9
   - 10 - 99
   - 100 - 299
   - 300+
3. Region dropdown
   - Bangladesh selected by default
4. Primary button: `Next`

Right illustration:

Use original flat business illustration.

Feature badge:

> Included feature

Right title:

> Activate services from one business profile

Right body:

> Add your business details once, then use them across payment, messaging, recharge, and other SSL services.

## `/sign-up`
Title:

> Create your SSL account

Fields:

- Full name
- Work email
- Phone number
- Password
- Confirm password

Checkbox:

> I agree to the Terms and Privacy Policy.

Primary button:

> Create account

Secondary text:

> Already have an account? Sign in

Right message:

Title:

> One account for every SSL service

Body:

> Your account gives you access to service applications, document vault, billing, support, and team management.

## `/sign-in`
Title:

> Sign in

Fields:

- Email or phone
- Password

Links:

- Forgot password?
- Create account

Primary button:

> Sign in

Right message:

Title:

> Continue managing your services

Body:

> Track applications, upload missing documents, review billing, and open active product spaces.

## `/onboarding/business`
Purpose:
Collect business profile basics after account creation.

Title:

> Tell us about your business

Fields:

- Business legal name
- Business type
  - Sole proprietorship
  - Partnership
  - Private limited company
  - NGO
  - Educational institution
  - Other
- Trade license number
- TIN number
- Business address
- Contact person name
- Contact person designation

Button:

> Save and continue

Right message:

Title:

> Your business profile saves time

Body:

> Common information can be reused when you apply for SSLCOMMERZ, SMS, top-up, and future SSL services.

## `/onboarding/documents`
Purpose:
Introduce document vault without forcing all uploads at once.

Title:

> Add common business documents

Document cards:

- Trade license
- TIN certificate
- BIN/VAT certificate
- Authorized person NID
- Bank account document
- Company authorization letter

Each document card status:

- Not uploaded
- Uploaded
- Needs replacement

Primary button:

> Continue

Secondary button:

> Skip for now

Right message:

Title:

> Upload once. Reuse when needed.

Body:

> Some services need the same business documents. Your vault helps reduce repeated submission.

## `/onboarding/complete`
Title:

> Your SSL workspace is ready

Body:

> Start with a service application, complete your document vault, or invite your team.

Cards:

1. Start SSLCOMMERZ application
2. Explore SMS services
3. Explore corporate top-up
4. Complete document vault

Primary button:

> Go to dashboard

## Form behavior
- Use client-side validation.
- Show clear, simple error messages.
- Required fields should be visibly marked.
- Keep disabled button state until minimum valid fields are entered.
- Use accessible labels, not placeholder-only fields.
- Keyboard navigation must work.

## Visual rules
- Do not show a busy stepper at the top. The Google get-started page keeps the page clean.
- Do not turn onboarding into a dense KYC form.
- Use one clear question group per screen.
- Right-side feature message should change by step.

## Component requirements
Create:

- `AuthShell`
- `BusinessSizeRadioGroup`
- `RegionSelect`
- `AuthInput`
- `DocumentUploadCard`
- `OnboardingChoiceCard`

## Anti-patterns
Do not:

- Use a dark login page.
- Use split-screen gradients.
- Add social login buttons unless explicitly requested.
- Ask for every possible document in the first screen.
