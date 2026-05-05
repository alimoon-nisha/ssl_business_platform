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
    title: "Accept payments anywhere",
    body: "Accept payments online or in-store through cards, mobile wallets, and banks.",
    visual: "payments",
    logo: "/sslcommerz.png",
    href: "/products/payment-gateway",
    applicationHref: "/get-started?service=payment-gateway",
  },
  {
    title: "Manage messaging campaigns",
    body: "Prepare SMS services, sender IDs, approvals, balance, and campaign reports from a shared account.",
    visual: "messages",
    logo: "/isms.png",
    href: "/products/messaging-suite",
    applicationHref: "/get-started?service=messaging-suite",
  },
  {
    title: "Start corporate top-up services",
    body: "Set up recharge services, manage operators, track balances, and keep activity visible for your team.",
    visual: "recharge",
    logo: "/virtualrecharge.png",
    href: "/products/corporate-recharge",
    applicationHref: "/get-started?service=corporate-recharge",
  },
  {
    title: "Coordinate field sales operations",
    body: "Plan visits, track orders, manage delivery activity, and keep sales teams visible from one workflow.",
    visual: "sales",
    logo: "/hercules.png",
    href: "/products/sales-force-automation",
    applicationHref: "/get-started?service=sales-force-automation",
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
  missingItems: ["Trade license", "NID Back Side"],
};

export const services = [
  {
    id: "sslcommerz",
    title: "Accept payments anywhere",
    status: "Recommended",
    description:
      "Accept payments online or in-store through cards, mobile wallets, and banks.",
    logo: "/sslcommerz.png",
    cta: "Start application",
    href: "/service-application/payment-gateway",
  },
  {
    id: "bulk-sms",
    title: "Manage messaging campaigns",
    status: "Available",
    description:
      "Prepare SMS services, sender IDs, approvals, balance, and campaign reports from a shared account.",
    logo: "/isms.png",
    cta: "Start application",
    href: "/service-application/messaging-suite",
  },
  {
    id: "corporate-top-up",
    title: "Start corporate top-up services",
    status: "Available",
    description:
      "Set up recharge services, manage operators, track balances, and keep activity visible for your team.",
    logo: "/virtualrecharge.png",
    cta: "Start application",
    href: "/service-application/corporate-recharge",
  },
  {
    id: "cloud-security",
    title: "Coordinate field sales operations",
    status: "Available",
    description:
      "Plan visits, track orders, manage delivery activity, and keep sales teams visible from one workflow.",
    logo: "/hercules.png",
    cta: "Start application",
    href: "/service-application/sales-force-automation",
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
];

export const documents = [
  { name: "Trade license", status: "Missing" },
  { name: "TIN certificate", status: "Uploaded" },
  { name: "BIN/VAT certificate", status: "Optional" },
  { name: "NID Front Side", status: "Uploaded" },
  { name: "NID Back Side", status: "Missing" },
];
