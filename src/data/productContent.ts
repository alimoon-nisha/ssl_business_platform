import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BellRing,
  CalendarClock,
  ClipboardCheck,
  CreditCard,
  Landmark,
  MessageSquareText,
  Mic,
  Plug,
  Radio,
  ReceiptText,
  Send,
  Smartphone,
  Upload,
  UsersRound,
  WalletCards,
} from "lucide-react";

export type ProductKind = "payment" | "messaging" | "recharge";

export type ProductDetailContent = {
  slug: string;
  serviceName: string;
  label: string;
  headline: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  kind: ProductKind;
  heroIcon: LucideIcon;
  chipIcons: LucideIcon[];
  trustTitle: string;
  trustSubtitle: string;
  trustItems: string[];
  trustDisclaimer?: string;
  valueCards?: Array<{ title: string; body: string }>;
  demoTitle: string;
  demoLabel: string;
  stepsTitle: string;
  steps: Array<{ title: string; body: string; cta: string }>;
  benefitsTitle: string;
  benefits: Array<{ title: string; body: string }>;
  requirements?: {
    title: string;
    items: string[];
    note: string;
  };
  faqTitle: string;
  faqDescription: string;
  faqs: string[];
  finalTitle: string;
  finalBody: string;
  finalButton: string;
};

export const products: Record<string, ProductDetailContent> = {
  "payment-gateway": {
    slug: "payment-gateway",
    serviceName: "SSLCOMMERZ Payment Gateway",
    label: "SSLCOMMERZ Payment Gateway",
    headline: "Accept digital payments with one trusted gateway",
    body: "Apply for SSLCOMMERZ from your SSL account, submit merchant documents, and get ready to accept card, mobile wallet, and bank payments through a secure integration.",
    primaryCta: "Start application",
    secondaryCta: "View documentation",
    kind: "payment",
    heroIcon: CreditCard,
    chipIcons: [CreditCard, Smartphone, Landmark, WalletCards, Plug, BarChart3],
    trustTitle: "Built for online businesses across Bangladesh.",
    trustSubtitle:
      "SSLCOMMERZ helps businesses accept payments across multiple digital channels with onboarding, integration, and support from SSL.",
    trustItems: ["Cards", "Mobile wallet", "Bank payment", "EMI", "API", "Plugin", "Reports"],
    trustDisclaimer:
      "Actual payment methods, pricing, and approval requirements depend on selected package, business type, and SSLCOMMERZ review.",
    demoTitle: "See how payment gateway activation works",
    demoLabel: "Payment gateway onboarding overview",
    stepsTitle: "Start accepting payments in a few clear steps",
    steps: [
      {
        title: "Create your SSL account",
        body: "Add your business name, contact person, company type, and region.",
        cta: "Learn more",
      },
      {
        title: "Complete merchant requirements",
        body: "Upload reusable business documents and provide SSLCOMMERZ-specific details when required.",
        cta: "View checklist",
      },
      {
        title: "Integrate and go live",
        body: "Use documentation, plugins, APIs, and support resources to connect the gateway to your website or app.",
        cta: "View documentation",
      },
    ],
    benefitsTitle:
      "Payment gateway onboarding is easier when your business profile is already ready",
    benefits: [
      {
        title: "Reuse business documents",
        body: "Store trade license, TIN, bank details, and authorization documents once.",
      },
      {
        title: "Track review status",
        body: "See whether your application is drafted, submitted, under review, needs correction, or approved.",
      },
      {
        title: "Prepare integration early",
        body: "Keep developer resources, plugin links, and environment details close to the application.",
      },
      {
        title: "Manage future services together",
        body: "Add messaging, top-up, or other SSL services later without creating a separate account.",
      },
    ],
    faqTitle: "Payment gateway FAQs",
    faqDescription:
      "Answers to common questions about SSLCOMMERZ activation and business profile reuse.",
    faqs: [
      "What is SSLCOMMERZ?",
      "What documents are needed to apply?",
      "Can I use existing business documents from my SSL account?",
      "What payment methods are supported?",
      "Does SSLCOMMERZ support plugins and APIs?",
      "How long does approval take?",
      "Where can I see pricing?",
    ],
    finalTitle: "Start your SSLCOMMERZ application",
    finalBody: "Create your SSL account and prepare your merchant profile for review.",
    finalButton: "Get started",
  },
  "messaging-suite": {
    slug: "messaging-suite",
    serviceName: "Messaging Suite",
    label: "Business SMS • iSMS",
    headline: "Send business messages from one managed platform",
    body: "Reach customers with campaigns, alerts, OTP-style notifications, and service updates through a managed messaging suite built for Bangladeshi businesses.",
    primaryCta: "Start setup",
    secondaryCta: "Contact sales",
    kind: "messaging",
    heroIcon: MessageSquareText,
    chipIcons: [MessageSquareText, Mic, Send, BellRing, Radio, Plug, BarChart3, CalendarClock],
    trustTitle: "Built for customer communication at scale",
    trustSubtitle:
      "Use Messaging Suite to manage business messaging, send updates to customers, and track delivery from a simple dashboard.",
    trustItems: [
      "Bulk SMS",
      "Voice SMS",
      "Campaigns",
      "Alerts",
      "Sender ID",
      "API",
      "Reports",
      "Scheduling",
    ],
    valueCards: [
      {
        title: "Upload and manage recipients",
        body: "Prepare customer lists and organize messaging audiences for campaigns or service notifications.",
      },
      {
        title: "Send campaigns and alerts",
        body: "Run promotional campaigns, operational alerts, reminders, and customer updates from one place.",
      },
      {
        title: "Track delivery reports",
        body: "Review delivery status, campaign performance, and message activity through reporting views.",
      },
    ],
    demoTitle: "See how business messaging setup works",
    demoLabel: "Sender ID setup, recipient upload, campaign creation, and reporting preview.",
    stepsTitle: "Start messaging in a few clear steps",
    steps: [
      {
        title: "Create your SSL Business Profile",
        body: "Add your company details, contact person, and business information.",
        cta: "Learn more",
      },
      {
        title: "Set up messaging requirements",
        body: "Choose use case, prepare sender ID request, and upload required business details.",
        cta: "View checklist",
      },
      {
        title: "Start sending and tracking",
        body: "Create campaigns, upload recipients, schedule messages, and review reports.",
        cta: "Start setup",
      },
    ],
    benefitsTitle: "Messaging is easier when your business profile is already ready",
    benefits: [
      {
        title: "Reuse business information",
        body: "Use your saved company profile when requesting sender IDs or messaging access.",
      },
      {
        title: "Manage setup status",
        body: "Track whether your messaging setup is draft, submitted, under review, or active.",
      },
      {
        title: "Keep documents in one place",
        body: "Use the document vault for trade license, TIN, authorization, or other required files.",
      },
      {
        title: "Connect with other SSL services",
        body: "Use messaging alongside payment, recharge, hosting, and support services from one account.",
      },
    ],
    requirements: {
      title: "Prepare what you may need for messaging setup",
      items: [
        "Business name and contact details",
        "Messaging use case",
        "Sender ID request",
        "Trade license, if required",
        "TIN certificate, if required",
        "Authorized person information",
        "Recipient/data compliance acknowledgement",
        "Campaign or API requirement details",
      ],
      note: "Exact requirements may vary by messaging type, sender ID approval, and business use case.",
    },
    faqTitle: "Messaging Suite FAQs",
    faqDescription:
      "Answers to common questions about iSMS, Bulk SMS, sender IDs, recipient uploads, and reporting.",
    faqs: [
      "What is Messaging Suite/iSMS?",
      "Can I send bulk SMS campaigns?",
      "Can I request a sender ID?",
      "Can I upload recipient lists?",
      "Does it support delivery reports?",
      "Can I use API-based messaging?",
      "What documents are needed to start?",
      "How do I track setup status?",
    ],
    finalTitle: "Start your Messaging Suite setup",
    finalBody:
      "Create your SSL Business Profile, prepare your messaging requirements, and start the setup process.",
    finalButton: "Get started",
  },
  "corporate-recharge": {
    slug: "corporate-recharge",
    serviceName: "Corporate Recharge",
    label: "Corporate Top-Up • Virtual Recharge",
    headline: "Manage mobile recharge requests for your business",
    body: "Set up corporate top-up and virtual recharge workflows for employee, partner, or customer recharge needs through SSL Wireless service support.",
    primaryCta: "Start request",
    secondaryCta: "Contact sales",
    kind: "recharge",
    heroIcon: Smartphone,
    chipIcons: [Smartphone, WalletCards, UsersRound, Radio, Upload, ClipboardCheck, ReceiptText, Plug],
    trustTitle: "Built for businesses that manage recharge at scale",
    trustSubtitle:
      "Use Corporate Recharge to request, organize, and manage top-up needs across teams, partners, agents, or customer-facing programs.",
    trustItems: [
      "Corporate Top-Up",
      "Virtual Recharge",
      "Employee Recharge",
      "Partner Recharge",
      "Batch Request",
      "Approval",
      "Reports",
      "API Support",
    ],
    valueCards: [
      {
        title: "Manage recharge requests",
        body: "Create and track recharge requests for employees, agents, partners, or business programs.",
      },
      {
        title: "Support batch operations",
        body: "Prepare multiple recharge entries and manage them through a structured review or approval flow.",
      },
      {
        title: "Track status and history",
        body: "View request status, completed recharge activity, and operational history from one account.",
      },
    ],
    demoTitle: "See how corporate recharge setup works",
    demoLabel:
      "Request creation, operator selection, approval status, and recharge history preview.",
    stepsTitle: "Set up corporate recharge in a few clear steps",
    steps: [
      {
        title: "Create your SSL Business Profile",
        body: "Add company details, contact person, and business information needed for service review.",
        cta: "Learn more",
      },
      {
        title: "Submit recharge requirements",
        body: "Share your corporate recharge use case, expected volume, operator needs, and billing preference.",
        cta: "View checklist",
      },
      {
        title: "Start managing requests",
        body: "Track setup, create recharge requests, review activity, and coordinate with SSL support.",
        cta: "Start request",
      },
    ],
    benefitsTitle:
      "Corporate recharge is easier when setup is connected to your business account",
    benefits: [
      {
        title: "Use one business profile",
        body: "Keep company and contact information ready for recharge service review.",
      },
      {
        title: "Track request status",
        body: "See whether your setup is draft, submitted, under review, approved, or active.",
      },
      {
        title: "Coordinate support clearly",
        body: "Keep sales, support, and requirement updates connected to the same service request.",
      },
      {
        title: "Manage alongside other SSL services",
        body: "Use Corporate Recharge with payment, messaging, hosting, and other SSL services from one account.",
      },
    ],
    requirements: {
      title: "Prepare what you may need for corporate recharge setup",
      items: [
        "Business name and contact details",
        "Corporate recharge use case",
        "Expected monthly volume",
        "Operator or recharge type requirements",
        "Billing or payment preference",
        "Authorized contact person",
        "Trade license, if required",
        "TIN certificate, if required",
        "Agreement or approval documents, if required",
      ],
      note: "Exact requirements may vary by service model, operator arrangement, volume, and commercial agreement.",
    },
    faqTitle: "Corporate Recharge FAQs",
    faqDescription:
      "Answers to common questions about Corporate Top-Up, Virtual Recharge, batch requests, and setup review.",
    faqs: [
      "What is Corporate Recharge?",
      "Is this the same as Virtual Recharge?",
      "Who can use Corporate Recharge?",
      "Can I manage batch recharge requests?",
      "Can this be used for employees or agents?",
      "What information is needed to start?",
      "How is billing handled?",
      "How do I track setup or request status?",
    ],
    finalTitle: "Start your Corporate Recharge request",
    finalBody:
      "Create your SSL Business Profile, share your recharge requirements, and begin the service setup process.",
    finalButton: "Get started",
  },
};

export const paymentGatewayProduct = products["payment-gateway"];
export const messagingSuiteProduct = products["messaging-suite"];
export const corporateRechargeProduct = products["corporate-recharge"];
