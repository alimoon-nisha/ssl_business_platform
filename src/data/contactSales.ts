export type SelectOption = {
  label: string;
  value: string;
};

export type ContactInquiryType = {
  id: "new-services" | "existing-service";
  title: string;
  description: string;
};

export const contactInquiryTypes: ContactInquiryType[] = [
  {
    id: "new-services",
    title: "I'm interested in SSL services for my business",
    description:
      "Explore payment, messaging, recharge, cloud, or custom business solutions.",
  },
  {
    id: "existing-service",
    title: "I'm already using an SSL service",
    description:
      "Get help with an existing account, application, activation, billing, or support request.",
  },
];

export const employeeOptions: SelectOption[] = [
  { label: "Just you", value: "just-you" },
  { label: "2 - 9", value: "2-9" },
  { label: "10 - 99", value: "10-99" },
  { label: "100 - 299", value: "100-299" },
  { label: "300+", value: "300-plus" },
];

export const businessTypeOptions: SelectOption[] = [
  { label: "Online", value: "online" },
  { label: "Store", value: "store" },
  { label: "Online + Store", value: "online-store" },
];

export const sectorOptions: SelectOption[] = [
  "Education",
  "Retail / Ecommerce",
  "Restaurant / Food",
  "Healthcare",
  "Travel / Hospitality",
  "Software / SaaS",
  "Financial services",
  "NGO / Development",
  "Professional services",
  "Real estate",
  "Media / Entertainment",
  "Logistics / Delivery",
  "Manufacturing / Distribution",
  "Other",
].map((label) => ({ label, value: label }));

export const interestedServiceOptions: SelectOption[] = [
  "SSLCOMMERZ Payment Gateway",
  "Messaging Suite / iSMS",
  "Corporate Recharge / Virtual Recharge",
  "Cloud Hosting & Cyber Security",
  "Software Development",
  "Sales Force Automation",
  "Ecommerce Website Development",
  "Call Center",
  "Other",
].map((label) => ({ label, value: label }));

export const salesHelpOptions: SelectOption[] = [
  "Compare packages",
  "Start a new service application",
  "Custom pricing or enterprise quote",
  "Help choosing the right service",
  "Existing account or application support",
  "Integration or technical discussion",
  "Other",
].map((label) => ({ label, value: label }));

export const serviceSupportChips = [
  "SSLCOMMERZ",
  "Messaging Suite",
  "Corporate Recharge",
  "Cloud Hosting",
  "Cyber Security",
  "Software Development",
  "Call Center",
  "Ecommerce Solutions",
];
