export const productIconItems = [
  "Payment Gateway",
  "Bulk SMS",
  "Corporate Top-Up",
  "Sales Force Automation",
];

export const valueColumns = [
  {
    title: "One business profile",
    body: "Keep company details, authorized contacts, and reusable documents in one secure profile.",
  },
  {
    title: "Service activation made clear",
    body: "See what each service needs, upload missing documents, and track approval progress.",
  },
  {
    title: "Built for Bangladeshi businesses",
    body: "Start with SSLCOMMERZ, messaging, and top-up services, then expand as your business grows.",
  },
];

export const featureCards = [
  {
    title: "Activate SSLCOMMERZ faster",
    body: "Apply for the payment gateway, submit merchant documents, and follow review status from the same workspace.",
    visual: "payments",
    href: "/products/payment-gateway",
  },
  {
    title: "Manage messaging campaigns",
    body: "Prepare SMS services, sender IDs, approvals, balance, and campaign reports from a shared account.",
    visual: "messages",
    href: "/products/messaging-suite",
  },
  {
    title: "Start corporate top-up services",
    body: "Set up recharge services, manage operators, track balances, and keep activity visible for your team.",
    visual: "recharge",
    href: "/products/corporate-recharge",
  },
] as const;

export const servicePlans = [
  {
    name: "Starter setup",
    description: "Use for new businesses exploring SSL services.",
    cta: "Create account",
    href: "/get-started",
    highlighted: true,
    features: [
      "Business profile",
      "Document vault",
      "Service catalog",
      "Application tracking",
      "Support requests",
    ],
  },
  {
    name: "Payment gateway",
    description: "Apply for SSLCOMMERZ with merchant onboarding support.",
    cta: "Start application",
    href: "/get-started?service=payment-gateway",
    highlighted: false,
    features: [
      "SSLCOMMERZ onboarding",
      "Merchant document checklist",
      "API/plugin integration guidance",
      "Payment method coverage",
      "Review and approval tracking",
    ],
  },
  {
    name: "Messaging suite",
    description: "Set up business SMS and sender ID readiness.",
    cta: "Start application",
    href: "/get-started?service=messaging-suite",
    highlighted: false,
    features: [
      "Bulk SMS setup",
      "Sender ID request",
      "Campaign readiness",
      "Delivery report access",
      "Balance and usage overview",
    ],
  },
  {
    name: "Corporate recharge",
    description: "Prepare operator services and top-up workflows.",
    cta: "Start application",
    href: "/get-started?service=corporate-recharge",
    highlighted: false,
    features: [
      "Corporate top-up request",
      "Operator/service setup",
      "Recharge activity",
      "Balance visibility",
      "Team approval support",
    ],
  },
];

export const landingFaqs = [
  "What is SSL Business Hub?",
  "Is this the same as SSLCOMMERZ?",
  "Can I activate more than one service from one account?",
  "Do I need to upload the same documents again?",
  "Which services are available first?",
  "Can my team members access the account?",
  "How long does service approval take?",
];

export const resourceCards = [
  "How to prepare your merchant documents",
  "How online payment activation works",
  "Choosing between SMS, voice SMS, and top-up services",
  "How to manage users and permissions",
  "How unified billing can simplify service management",
];

export const currentBusiness = {
  name: "Rahman Traders Ltd.",
  userName: "Subin",
  profileCompletion: 65,
  missingItems: ["Trade license", "Bank document"],
};

export const services = [
  {
    id: "sslcommerz",
    name: "SSLCOMMERZ Payment Gateway",
    status: "Recommended",
    description:
      "Accept online payments through cards, mobile wallets, and bank channels.",
    cta: "Start application",
    href: "/products/payment-gateway",
  },
  {
    id: "bulk-sms",
    name: "Messaging Suite",
    status: "Available",
    description:
      "Set up sender ID, campaigns, delivery reports, and business messaging.",
    cta: "Explore",
    href: "/products/messaging-suite",
  },
  {
    id: "corporate-top-up",
    name: "Corporate Recharge",
    status: "Available",
    description:
      "Manage business recharge requests, balances, and operator services.",
    cta: "Explore",
    href: "/products/corporate-recharge",
  },
  {
    id: "cloud-security",
    name: "Cloud Hosting and Cyber Security",
    status: "Contact sales",
    description:
      "Plan secure hosting, protection, and managed technology support.",
    cta: "Contact sales",
    href: "/contact-sales",
  },
];

export const applications = [
  {
    service: "SSLCOMMERZ Payment Gateway",
    status: "Missing information",
    lastUpdated: "Today",
    nextStep: "Upload trade license",
    cta: "Continue",
  },
  {
    service: "Bulk SMS",
    status: "Draft",
    lastUpdated: "Yesterday",
    nextStep: "Choose SMS use case",
    cta: "Continue",
  },
  {
    service: "Corporate Top-Up",
    status: "Not started",
    lastUpdated: "-",
    nextStep: "Start request",
    cta: "Start",
  },
];

export const documents = [
  { name: "Trade license", status: "Missing" },
  { name: "TIN certificate", status: "Uploaded" },
  { name: "BIN/VAT certificate", status: "Optional" },
  { name: "Authorized person NID", status: "Uploaded" },
  { name: "Bank document", status: "Missing" },
];
