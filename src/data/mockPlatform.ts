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
  id: "88291",
  userName: "Subin",
  profileCompletion: 65,
  missingItems: ["Trade license", "NID Back Side"],
};

export const businessProfile = {
  businessName: "Rahman Traders Ltd.",
  employeeRange: "10 - 99",
  businessType: "Online + Store",
  sector: "Retail / Ecommerce",
  contactPersonName: "Subin Rahman",
  companyAddress: "House 18, Road 7, Dhanmondi, Dhaka",
  designation: "Managing Director",
  department: "Operations",
  region: "Bangladesh",
  email: "subin@rahmantraders.example",
  mobile: "+8801712345678",
};

export const accountSettings = {
  name: "Subin Rahman",
  email: "subin@rahmantraders.example",
  mobile: "+8801712345678",
  role: "Owner",
  language: "English",
  timezone: "Asia/Dhaka",
  loginAlerts: true,
  productUpdates: true,
};

export const services = [
  {
    id: "sslcommerz",
    slug: "payment-gateway",
    title: "Accept payments anywhere",
    name: "SSLCOMMERZ Payment Gateway",
    status: "Active",
    serviceStatus: "Setup needed",
    applicationStatus: "Missing information",
    description:
      "Accept payments online or in-store through cards, mobile wallets, and banks.",
    logo: "/sslcommerz.png",
    cta: "Start application",
    href: "/service-application/payment-gateway",
    dashboardHref: "/dashboard/services",
    packageName: "Online Business",
    activeDate: "Jan 15, 2026",
    renewalDate: "Jan 15, 2027",
    balance: "৳ 12,500",
    price: "৳ 5,000 / month",
    trialMonths: null as number | null,
    kam: {
      name: "Rahim Uddin",
      phone: "+880 1711-123456",
      email: "rahim@sslwireless.com",
    },
    poc: [
      { name: "Nisha Ali", designation: "Technical Lead", contact: "+880 1811-654321" },
    ],
    requiredDocuments: ["Trade license", "TIN certificate", "NID Front Side", "NID Back Side", "Bank cheque leaf"],
    resources: ["Merchant document checklist", "Payment gateway onboarding overview", "API and plugin preparation"],
  },
  {
    id: "bulk-sms",
    slug: "messaging-suite",
    title: "Manage messaging campaigns",
    name: "Messaging Suite",
    status: "Available",
    serviceStatus: "Draft setup",
    applicationStatus: "Draft",
    description:
      "Prepare SMS services, sender IDs, approvals, balance, and campaign reports from a shared account.",
    logo: "/isms.png",
    cta: "Start application",
    href: "/service-application/messaging-suite",
    dashboardHref: "/dashboard/services",
    packageName: "Value Plan",
    requiredDocuments: ["NID Front Side", "NID Back Side", "Trade license", "TIN certificate"],
    resources: ["Sender ID preparation", "Campaign readiness guide", "Delivery report overview"],
  },
  {
    id: "corporate-top-up",
    slug: "corporate-recharge",
    title: "Start corporate top-up services",
    name: "Corporate Recharge",
    status: "Available",
    serviceStatus: "Not started",
    applicationStatus: "Not started",
    description:
      "Set up recharge services, manage operators, track balances, and keep activity visible for your team.",
    logo: "/virtualrecharge.png",
    cta: "Start application",
    href: "/service-application/corporate-recharge",
    dashboardHref: "/dashboard/services",
    packageName: "Standard",
    requiredDocuments: ["Trade license", "TIN certificate", "VAT Certificate", "Authorized person NID"],
    resources: ["Recharge request planning", "Operator setup guide", "Approval workflow overview"],
  },
  {
    id: "cloud-security",
    slug: "sales-force-automation",
    title: "Coordinate field sales operations",
    name: "Sales Force Automation",
    status: "Available",
    serviceStatus: "Contact sales",
    applicationStatus: "Contact sales",
    description:
      "Plan visits, track orders, manage delivery activity, and keep sales teams visible from one workflow.",
    logo: "/hercules.png",
    cta: "Start application",
    href: "/service-application/sales-force-automation",
    dashboardHref: "/dashboard/services",
    packageName: "Demo and scoping",
    requiredDocuments: ["Sales team structure", "Territory plan", "Order workflow", "Reporting requirements"],
    resources: ["Field activity planning", "Sales operations rollout guide", "Demo preparation checklist"],
  },
];

export const applications = [
  {
    id: "sslcommerz-payment",
    service: "SSLCOMMERZ Payment Gateway",
    serviceSlug: "payment-gateway",
    status: "Missing information",
    progress: 45,
    lastUpdated: "Today",
    nextStep: "Upload trade license",
    cta: "Continue",
    href: "/dashboard/applications/sslcommerz-payment",
    actionHref: "/service-application/payment-gateway",
  },
  {
    id: "bulk-sms-draft",
    service: "Bulk SMS",
    serviceSlug: "messaging-suite",
    status: "Not started",
    progress: 20,
    lastUpdated: "Yesterday",
    nextStep: "Choose SMS use case",
    cta: "Start",
    href: "/dashboard/applications/bulk-sms-draft",
    actionHref: "/service-application/messaging-suite",
  },
];



export const applicationDetails = {
  "sslcommerz-payment": {
    id: "sslcommerz-payment",
    service: "SSLCOMMERZ Payment Gateway",
    status: "Missing information",
    nextAction: "Upload trade license",
    actionHref: "/service-application/payment-gateway",
    supportHref: "/contact-sales",
    submittedInfo: [
      ["Business name", "Rahman Traders Ltd."],
      ["Business type", "Online + Store"],
      ["Selected package", "Online Business"],
      ["Contact person", "Subin Rahman"],
    ],
    documents: [
      ["Trade license", "Missing"],
      ["TIN certificate", "Uploaded"],
      ["NID Front Side", "Uploaded"],
      ["NID Back Side", "Missing"],
      ["Bank cheque leaf", "Pending"],
    ],
    timeline: [
      ["Account created", "Completed", "Apr 29"],
      ["Package selected", "Completed", "Apr 29"],
      ["Documents reviewed", "Needs action", "Today"],
      ["Compliance review", "Pending", "After missing files"],
    ],
    reviewNotes: [
      "Trade license is required before compliance review can continue.",
      "NID back side is missing from the shared document vault.",
    ],
    activityLog: [
      "Today: Application flagged for missing trade license.",
      "Yesterday: TIN certificate reused from document vault.",
      "Apr 29: Online Business package selected.",
    ],
  },
  "bulk-sms-draft": {
    id: "bulk-sms-draft",
    service: "Bulk SMS",
    status: "Draft",
    nextAction: "Choose SMS use case",
    actionHref: "/service-application/messaging-suite",
    supportHref: "/contact-sales",
    submittedInfo: [
      ["Business name", "Rahman Traders Ltd."],
      ["Messaging need", "Campaigns and alerts"],
      ["Selected package", "Value Plan"],
      ["Sender ID", "Not requested"],
    ],
    documents: [
      ["NID Front Side", "Uploaded"],
      ["NID Back Side", "Missing"],
      ["Trade license", "Missing"],
      ["TIN certificate", "Uploaded"],
    ],
    timeline: [
      ["Draft created", "Completed", "Yesterday"],
      ["Use case selection", "Current", "Next"],
      ["Sender ID review", "Pending", "After submission"],
      ["Activation", "Pending", "After approval"],
    ],
    reviewNotes: [
      "Select whether messaging is for campaign, alert, OTP-style notification, or mixed usage.",
    ],
    activityLog: [
      "Yesterday: Messaging Suite setup saved as draft.",
      "Yesterday: Value Plan marked as preferred package.",
    ],
  },
  "corporate-recharge-start": {
    id: "corporate-recharge-start",
    service: "Corporate Recharge",
    status: "Not started",
    nextAction: "Start request",
    actionHref: "/service-application/corporate-recharge",
    supportHref: "/contact-sales",
    submittedInfo: [
      ["Business name", "Rahman Traders Ltd."],
      ["Recharge use case", "Not provided"],
      ["Expected volume", "Not provided"],
      ["Package", "Standard"],
    ],
    documents: [
      ["Trade license", "Missing"],
      ["TIN certificate", "Uploaded"],
      ["VAT Certificate", "Optional"],
    ],
    timeline: [
      ["Request", "Not started", "-"],
      ["Requirement review", "Pending", "After request"],
      ["Commercial setup", "Pending", "After review"],
    ],
    reviewNotes: ["Start the request to share operator, billing, and approval requirements."],
    activityLog: ["No application activity yet."],
  },
  "sales-automation-contact": {
    id: "sales-automation-contact",
    service: "Sales Force Automation",
    status: "Contact sales",
    nextAction: "Schedule discovery",
    actionHref: "/contact-sales",
    supportHref: "/contact-sales",
    submittedInfo: [
      ["Business name", "Rahman Traders Ltd."],
      ["Team size", "10 - 99"],
      ["Workflow", "Field sales and delivery tracking"],
      ["Package", "Demo and scoping"],
    ],
    documents: [
      ["Sales team structure", "Pending"],
      ["Territory plan", "Pending"],
      ["Order workflow", "Pending"],
    ],
    timeline: [
      ["Interest captured", "Completed", "This week"],
      ["Discovery call", "Current", "Next"],
      ["Pilot scope", "Pending", "After call"],
    ],
    reviewNotes: ["A sales consultant should confirm workflow scope before setup starts."],
    activityLog: ["This week: Sales Force Automation added to service workspace."],
  },
} as const;

export type DashboardNotification = {
  id: string;
  kind: "attention" | "document" | "application" | "billing" | "support";
  title: string;
  body: string;
  time: string;
  href: string;
  unread?: boolean;
};

export const dashboardNotifications: DashboardNotification[] = [
  {
    id: "sslcommerz-missing-info",
    kind: "attention",
    title: "SSLCOMMERZ needs information",
    body: "Upload your trade license to continue the payment gateway review.",
    time: "Today",
    href: "/service-application/payment-gateway",
    unread: true,
  },
  {
    id: "nid-back-side-missing",
    kind: "document",
    title: "NID back side is missing",
    body: "Add the missing file to keep your document vault ready for new services.",
    time: "Today",
    href: "/dashboard",
    unread: true,
  },
  {
    id: "bulk-sms-draft",
    kind: "application",
    title: "Bulk SMS setup saved as draft",
    body: "Choose your SMS use case when you are ready to continue setup.",
    time: "Yesterday",
    href: "/service-application/messaging-suite",
  },
];

export const documents = [
  {
    id: "trade-license",
    name: "Trade license",
    status: "Missing",
    usedBy: ["SSLCOMMERZ Payment Gateway", "Bulk SMS", "Corporate Recharge"],
    lastUpdated: "-",
    history: [
      { date: "Apr 20, 2026", event: "Rejected", reason: "Image was blurry and unreadable.", status: "error" },
      { date: "Apr 15, 2026", event: "Uploaded", status: "success" },
    ],
  },
  {
    id: "tin-certificate",
    name: "TIN certificate",
    status: "Uploaded",
    usedBy: ["SSLCOMMERZ Payment Gateway", "Bulk SMS", "Corporate Recharge"],
    lastUpdated: "Apr 29",
    history: [
      { date: "Apr 29, 2026", event: "Approved", status: "success" },
      { date: "Apr 28, 2026", event: "Uploaded", status: "success" },
    ],
  },
  {
    id: "bin-vat",
    name: "BIN/VAT certificate",
    status: "Optional",
    usedBy: ["Corporate Recharge"],
    lastUpdated: "-",
    history: [],
  },
  {
    id: "nid-front",
    name: "NID Front Side",
    status: "Uploaded",
    usedBy: ["SSLCOMMERZ Payment Gateway", "Bulk SMS"],
    lastUpdated: "Apr 29",
    history: [
      { date: "Apr 29, 2026", event: "Approved", status: "success" },
      { date: "Apr 25, 2026", event: "Uploaded", status: "success" },
    ],
  },
  {
    id: "nid-back",
    name: "NID Back Side",
    status: "Missing",
    usedBy: ["SSLCOMMERZ Payment Gateway", "Bulk SMS"],
    lastUpdated: "-",
    history: [
      { date: "Apr 25, 2026", event: "Rejected", reason: "Back side of NID was not provided.", status: "error" },
    ],
  },
  {
    id: "bank-document",
    name: "Bank document",
    status: "Pending",
    usedBy: ["SSLCOMMERZ Payment Gateway"],
    lastUpdated: "-",
    history: [
      { date: "Today", event: "Uploaded", status: "success" },
    ],
  },
];

export const billingProfile = {
  legalName: "Rahman Traders Ltd.",
  billingEmail: "accounts@rahmantraders.example",
  billingAddress: "House 18, Road 7, Dhanmondi, Dhaka",
  taxId: "TIN-8721-4402",
};

export const invoices = [
  {
    id: "INV-2026-004",
    service: "SSLCOMMERZ Payment Gateway",
    date: "May 01, 2026",
    amount: "৳ 34,000",
    status: "Due",
    action: "Pay now",
  },
  {
    id: "INV-2026-003",
    service: "Messaging Suite",
    date: "Apr 20, 2026",
    amount: "৳ 3,360",
    status: "Paid",
    action: "View",
  },
  {
    id: "INV-2026-002",
    service: "Corporate Recharge",
    date: "Apr 12, 2026",
    amount: "৳ 3,360",
    status: "Pending",
    action: "View",
  },
  {
    id: "INV-2026-001",
    service: "Sales Force Automation",
    date: "Mar 28, 2026",
    amount: "৳ 5,200",
    status: "Paid",
    action: "View",
  },
  {
    id: "INV-2025-012",
    service: "SSLCOMMERZ Payment Gateway",
    date: "Mar 01, 2026",
    amount: "৳ 34,000",
    status: "Due",
    action: "Pay now",
  },
];

export const paymentHistory = [
  { id: "PAY-2026-005", date: "Apr 20, 2026", description: "Messaging Suite Value Plan", amount: "৳ 3,360", status: "Paid", service: "Messaging Suite" },
  { id: "PAY-2026-004", date: "Apr 02, 2026", description: "Document verification fee", amount: "৳ 500", status: "Paid", service: "Platform" },
  { id: "PAY-2026-003", date: "Mar 15, 2026", description: "SMS Recharge - 50k Bundle", amount: "৳ 12,000", status: "Paid", service: "Messaging Suite" },
  { id: "PAY-2026-002", date: "Mar 01, 2026", description: "SSLCOMMERZ Annual Fee", amount: "৳ 34,000", status: "Paid", service: "SSLCOMMERZ" },
  { id: "PAY-2026-001", date: "Feb 12, 2026", description: "Wallet Top-up", amount: "৳ 10,000", status: "Paid", service: "Wallet" },
];

export const packageBilling = [
  ["SSLCOMMERZ Payment Gateway", "Online Business", "৳ 34,000/yr", "Due"],
  ["Messaging Suite", "Value Plan", "৳ 3,360", "Active"],
  ["Corporate Recharge", "Standard", "Custom pricing", "Scoping"],
];

export const dashboardSearchItems = [
  { label: "Services", description: "Open internal service workspace", href: "/dashboard/services" },
  { label: "Applications", description: "Review service applications", href: "/dashboard/applications" },
  { label: "Documents", description: "Manage reusable business documents", href: "/dashboard/documents" },
  { label: "Billing", description: "Invoices, packages, and payment history", href: "/dashboard/billing" },
  { label: "Manage business profile", description: "Update business setup information", href: "/dashboard/profile" },
  { label: "Account settings", description: "Update account preferences", href: "/dashboard/settings" },
  ...services.map((service) => ({
    label: service.name,
    description: service.description,
    href: "/dashboard/services",
  })),
  ...applications.map((application) => ({
    label: application.service,
    description: `${application.status}: ${application.nextStep}`,
    href: application.href,
  })),
  ...documents.map((document) => ({
    label: document.name,
    description: `${document.status} document`,
    href: "/dashboard/documents",
  })),
];
