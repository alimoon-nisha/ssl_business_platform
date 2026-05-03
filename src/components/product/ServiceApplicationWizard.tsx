"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Camera, Check, Upload, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type ServiceSlug =
  | "payment-gateway"
  | "bulk-sms"
  | "messaging-suite"
  | "corporate-top-up"
  | "corporate-recharge"
  | "sales-force-automation"
  | "cloud-hosting";
type Step = 1 | 2 | 3 | 4;

type ServiceApplicationWizardProps = {
  serviceSlug: string;
  serviceLabel: string;
  packageName: string;
};

type DocumentRequirement = {
  name: string;
  helper: string;
  accept: string;
  capture?: "user";
};

type PackageOption = {
  id: string;
  name: string;
  price: string;
  description: string;
  quantity?: string;
  details?: string[];
  note?: string;
};

const messagingPackageOptions = [
  { id: "starter", name: "Starter Plan", price: "৳1732.50", description: "Ideal for small-scale campaigns", quantity: "5,000 SMS" },
  { id: "value", name: "Value Plan", price: "৳3360.00", description: "Best for high-volume messaging", quantity: "10,000 SMS" },
];

const corporateRechargePackageOptions = [
  { id: "standard", name: "Standard", price: "Custom pricing", description: "For business recharge workflows and approvals." },
  { id: "volume", name: "Volume", price: "Custom pricing", description: "For larger recharge programs and reporting." },
];

const packageOptions: Record<ServiceSlug, PackageOption[]> = {
  "payment-gateway": [
    {
      id: "online-business",
      name: "Online Business",
      price: "BDT 34,000/yr",
      description: "For website or app-based ecommerce businesses.",
      details: [
        "One-time setup fee, non-refundable",
        "2.50% per transaction for Visa, Mastercard, and MFS",
        "3.50% per transaction for Amex and foreign cards",
      ],
      note: "7 days free trial, then BDT 34,000 per year",
    },
    {
      id: "physical-store",
      name: "Physical Business",
      price: "BDT 15,000/yr",
      description: "For physical shops and retail businesses.",
      details: [
        "Setup fee: BDT 2,000, includes QR stand",
        "1.50% per transaction for dynamic QR payments",
        "2.00% per transaction for physical card swipe (POS)",
      ],
      note: "14 days free trial, then BDT 15,000 per year",
    },
    {
      id: "f-commerce",
      name: "F commerce",
      price: "Pay as you go",
      description: "For Facebook and Instagram sellers.",
      details: [
        "Monthly platform fee: BDT 500, first month free",
        "0% gateway fee as a special launch offer",
        "1.00% platform commission per successful sale",
      ],
      note: "No hidden setup charges",
    },
  ],
  "bulk-sms": messagingPackageOptions,
  "messaging-suite": messagingPackageOptions,
  "corporate-top-up": corporateRechargePackageOptions,
  "corporate-recharge": corporateRechargePackageOptions,
  "sales-force-automation": [
    { id: "demo", name: "Demo and scoping", price: "Custom pricing", description: "For teams reviewing sales automation modules and rollout needs." },
  ],
  "cloud-hosting": [
    { id: "contact-sales", name: "Contact sales", price: "Custom pricing", description: "Pricing and scope depend on your infrastructure needs." },
  ],
};

const bulkSmsDocumentOptions: DocumentRequirement[] = [
  {
    name: "NID Front Side",
    helper: "JPG or PNG (Max 5MB)",
    accept: ".jpg,.jpeg,.png",
  },
  {
    name: "NID Back Side",
    helper: "JPG or PNG (Max 5MB)",
    accept: ".jpg,.jpeg,.png",
  },
  {
    name: "Trade license",
    helper: "PDF, JPG, or PNG (Max 5MB)",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  {
    name: "TIN certificate",
    helper: "PDF, JPG, or PNG (Max 5MB)",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
];

const documentOptionsByService: Record<ServiceSlug, DocumentRequirement[]> = {
  "bulk-sms": bulkSmsDocumentOptions,
  "messaging-suite": bulkSmsDocumentOptions,
  "corporate-top-up": [
    ...bulkSmsDocumentOptions,
    {
      name: "VAT Certificate",
      helper: "PDF, JPG, or PNG (Max 5MB)",
      accept: ".pdf,.jpg,.jpeg,.png",
    },
  ],
  "corporate-recharge": [
    ...bulkSmsDocumentOptions,
    {
      name: "VAT Certificate",
      helper: "PDF, JPG, or PNG (Max 5MB)",
      accept: ".pdf,.jpg,.jpeg,.png",
    },
  ],
  "sales-force-automation": bulkSmsDocumentOptions,
  "payment-gateway": [
    {
      name: "User photo",
      helper: "Take a JPG or PNG photo (Max 5MB)",
      accept: "image/*",
      capture: "user",
    },
    ...bulkSmsDocumentOptions,
    {
      name: "Bank cheque leaf",
      helper: "PDF, JPG, or PNG (Max 5MB)",
      accept: ".pdf,.jpg,.jpeg,.png",
    },
    {
      name: "Company logo",
      helper: "JPG or PNG (Max 5MB)",
      accept: ".jpg,.jpeg,.png",
    },
  ],
  "cloud-hosting": bulkSmsDocumentOptions,
};

const messagingSuiteTerms = [
  "At all-time, we shall adhere to all the rules, regulations and guidelines of BTRC and time-to-time given instruction of the Telecom Operators and SSL while using the SMS service.",
  "Telecom Operator and SSL shall have the right to disconnect, suspend and/or bar the services for any violation of any legal and regulatory requirement of BTRC or for sending any unauthorized SMS or for giving any false information in this regard..",
  "We will ensure that the contents of SMS are not going against local legal requirement, national security and/or national interest, social norms, culture and religious belief of the people of Bangladesh in case of violation of this clause, we shall be sole responsible for whatever consequences that attracts..",
  "We be sole responsible for any misuse of the port, hacking by third party or internally from our end, and will be responsible for the SMS text also.",
  "We will not in any situation use SSL’s platform/API for sending SMS of A2P (Application-to-Person) of any entity of foreign origin (entity from the outside of Bangladesh). We shall be solely liable for any such unacceptable act. Furthermore, SSL shall be entitled to terminate the service with immediate effect if any such activity by us is detected. Moreover, SSL shall have the right to take any legal recourse against us for infringement of this clause and financial and/or reputational loss in addition to its right to the service termination.",
  "All promotional/Notification/OTP mass communication through SMS, the content has to be in Bangla. No other language is allowed, as per BTRC regulations.",
  "A single SMS in English will be counted as 160 characters, and in Bangla, it will be 70 characters.",
  "For multiple English SMS, each will be counted as 153 characters, and for Bangla SMS, each will be 67 characters.",
  "All SMS notifications must be in Bangla, as per BTRC regulations.",
  "Promotional SMS content needs BTRC verification, handled by SSL on behalf of the client.",
  "Masking, limited to 11 characters, will be in English and applicable for all local operators..",
  "SMS validity is unlimited, and API compatibility is ensured.",
  "No international traffic is allowed through local channels.",
  "Regulatory actions can be taken for any illegal activity.",
  "Clients need to fill masking registration forms on their letterhead.",
  "No spam or illegal SMS are allowed as per operator/regulator policies.",
  "Agreement and legal papers will be signed by all parties.",
  "KYC documents must be provided by clients.",
  "The lead time is 4-5 working days for masking account creation.",
  "SMS rates may change at any time as per confirmation of operators and regulatory authority.",
  "For local SMS, customers must have a physical entity in Bangladesh, and SMS must be generated from their local server.",
  "Client's IP will be whitelisted for security purposes.",
  "No English promotional SMS is allowed through API.",
];

const paymentGatewayTerms = [
  "This Agreement (\"Agreement\") is a legally binding document between you (meaning the individual person or the Company or the Proprietor as the case may be) (hereinafter referred to as the \"Merchant\") and Software Shop Limited (hereinafter referred to as \"SSL\").",
  {
    title: "1 Scope of Work:",
    items: [
      "By accepting the terms and conditions contained herein, the Merchant shall be able to instantly open a merchant account at SSLCOMMERZ Payment gateway for availing the payment gateway service, subject to the fulfillment of the conditions provided herein."
    ]
  },
  {
    title: "2 Service Terms and Conditions:",
    items: [
      "i. Within 7 (seven) days of the instant merchant account opening, the Merchant needs to complete the following:\n- Complete the signing-up process and sign the necessary payment gateway service agreement or Merchant Enrollment Form as per the prescribed format of SSL.\n- Pay applicable fees/charges to SSL.\n- Provide necessary due diligence and Know Your Customer (KYC) documents as per the requirements of SSL.\n- The Merchant will receive a test API from SSL and the Merchant shall be allowed to do limited live transactions through the payment gateway. However, if the Merchant fails to satisfy the requirements of SSL for the full live account, complete the signing-up process, or provide complete and accurate information, or meet the compliance requirements of SSL, then the Merchant's ability to operate the merchant account opened instantly hereunder shall cease.",
      "ii. Any transactions occurring within this interim period of 7 days are subject to settlement only if the Merchant successfully completes the signing-up process, pays necessary charges to SSL, satisfies Know Your Customer and due diligence of SSL as per SSL's discretion. Failing which, SSL reserves the right to reverse the transaction/payment to the customer at SSL's discretion. The Merchant shall have no claim or dispute over the same reversal of the transaction.",
      "iii. Notwithstanding anything contrary provided in any part of this Agreement, payment release by SSL in favor of the Merchant shall be governed by the prevailing laws, rules-regulation, guidelines, and escrow payment modality shall be applied if such modality is applicable as per the concerned rules-regulations, guidelines of the competent regulatory authority(ies).",
      "iv. The Merchant shall strictly adhere to applicable anti-money laundering and combating financing of terrorism laws, rules, regulations, and regulatory guidelines.",
      "v. Merchant shall not sell any products that are illegal according to the laws of the land.",
      "vi. SSL retains the full authority to deny any transaction request if it appears suspicious or fraudulent, with the aim of maintaining the integrity and security of the payment system.",
      "vii. The Merchant acknowledges and agrees that the liability for chargebacks arising from transactions shall be solely the responsibility of the Merchant. SSL shall not be held accountable for any chargeback related to the Merchant's transactions.",
      "viii. The Merchant acknowledges that all liabilities related to the products or services offered through the Payment Gateway Service shall be the sole responsibility of the Merchant. Any disputes arising in connection with these products or services will be limited to resolution between the customer and the Merchant.",
      "ix. In the event of any violation of the terms and conditions contained herein or for the other reasons whatsoever, SSL may, at its own discretion, instantly deactivate the Merchant's payment gateway account, halt any transaction processing, or take other appropriate actions as it deems necessary."
    ]
  }
];

type TermItem = string | { title: string; items: string[] };

const termsByService: Partial<Record<ServiceSlug, { title?: string; items: TermItem[] }>> = {
  "messaging-suite": { items: messagingSuiteTerms },
  "bulk-sms": { items: messagingSuiteTerms },
  "payment-gateway": {
    title: "AGREEMENT FOR INSTANT PAYMENT GATEWAY ACCOUNT OPENING",
    items: paymentGatewayTerms
  }
};

export function ServiceApplicationWizard({ serviceSlug, serviceLabel, packageName }: ServiceApplicationWizardProps) {
  const [step, setStep] = useState<Step>(1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(packageName || "");
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const packageList = packageOptions[serviceSlug as ServiceSlug] ?? [];
  const documentOptions =
    documentOptionsByService[serviceSlug as ServiceSlug] ?? bulkSmsDocumentOptions;

  const canGoNext =
    (step === 1 && termsAccepted) ||
    (step === 2 && Boolean(selectedPackage)) ||
    (step === 3 && Object.keys(uploadedFiles).length === documentOptions.length);

  function handleFileChange(docName: string, event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles((prev) => ({ ...prev, [docName]: file.name }));
    }
  }

  function stopCamera() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }

  async function openCamera() {
    setCameraError("");
    setCameraOpen(true);

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError("Camera capture is not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch {
      setCameraError("Unable to open the camera. Please allow camera access and try again.");
    }
  }

  function closeCamera() {
    stopCamera();
    setCameraOpen(false);
  }

  function captureUserPhoto() {
    const video = videoRef.current;

    if (!video || video.videoWidth === 0 || video.videoHeight === 0) {
      setCameraError("Camera preview is not ready yet.");
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");

    if (!context) {
      setCameraError("Unable to capture the photo. Please try again.");
      return;
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    setUploadedFiles((prev) => ({ ...prev, "User photo": "Captured photo" }));
    closeCamera();
  }

  useEffect(() => {
    return () => stopCamera();
  }, []);

  function goNext() {
    if (step < 4) {
      setStep((current) => (current + 1) as Step);
    }
  }

  function goBack() {
    if (step > 1) {
      setStep((current) => (current - 1) as Step);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          Service application
        </p>
        <h1 className="mt-3 text-4xl font-medium tracking-normal text-text-primary">
          {serviceLabel}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
          {step === 1
            ? "Review the service terms before you continue."
            : step === 2
              ? "Choose the package that matches your service needs."
              : step === 3
                ? "Upload the documents needed to review your application."
                : "Review your application summary before you submit or proceed to payment."}
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-4">
        {[
          "Terms",
          "Package",
          "Documents",
          "Summary",
        ].map((label, index) => (
          <div
            key={label}
            className={cn(
              "rounded-full px-4 py-2 text-center text-sm font-medium",
              index + 1 === step ? "bg-blue-50 text-primary" : "bg-surface-alt text-text-secondary",
            )}
          >
            {label}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <>
          <div className="rounded-2xl bg-surface-alt p-6 max-h-[300px] overflow-y-auto border-none">
            <div className="text-sm leading-6 text-text-secondary space-y-4">
              <h4 className="text-sm font-semibold text-text-primary">Service Agreement & Terms of Use</h4>
              <p>
                By proceeding with this application, you agree to the following terms and conditions governing the use of SSL Wireless business services. Please read this document carefully before continuing.
              </p>
              
              {termsByService[serviceSlug as ServiceSlug] ? (
                <div className="space-y-4">
                  {termsByService[serviceSlug as ServiceSlug]?.title && (
                    <p className="font-bold text-text-primary uppercase border-b border-border-soft pb-2">
                      {termsByService[serviceSlug as ServiceSlug]?.title}
                    </p>
                  )}
                  {termsByService[serviceSlug as ServiceSlug]?.items.map((item, index) => {
                    if (typeof item === "string") {
                      const hasManualNumbering = /^[0-9]+\.\s/.test(item) || /^[ivx]+\.\s/i.test(item);
                      return (
                        <p key={index} className="whitespace-pre-wrap">
                          {!hasManualNumbering && termsByService[serviceSlug as ServiceSlug]?.title === undefined && (
                            <strong>{index + 1}. </strong>
                          )}
                          {item}
                        </p>
                      );
                    }
                    return (
                      <div key={index} className="space-y-3">
                        <p className="font-semibold text-text-primary">{item.title}</p>
                        <div className="space-y-3 pl-4 border-l-2 border-border-soft">
                          {item.items.map((subItem, subIndex) => (
                            <p key={subIndex} className="whitespace-pre-wrap">{subItem}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <>
                  <p>
                    <strong>1. Acceptance of Terms:</strong> You acknowledge that you have read, understood, and agree to be bound by these terms. If you are applying on behalf of a business entity, you represent that you have the authority to bind such entity to these terms.
                  </p>
                  <p>
                    <strong>2. Service Provision:</strong> SSL Wireless agrees to provide the services described in your application subject to successful review of your business profile and documents. Approval is at the sole discretion of SSL Wireless and its partner financial institutions where applicable.
                  </p>
                  <p>
                    <strong>3. Compliance & Documentation:</strong> You agree to provide accurate and complete information and documentation as required by the laws of Bangladesh and SSL internal policies. Failure to provide valid documentation may result in application rejection.
                  </p>
                  <p>
                    <strong>4. Fees & Payments:</strong> Service fees, transaction charges, and subscription costs are determined by the selected package and will be communicated during the onboarding process. Fees are subject to change with prior notice.
                  </p>
                  <p>
                    <strong>5. Data Privacy & Security:</strong> We value your privacy. Your business data is handled in accordance with our Privacy Policy. You are responsible for maintaining the security of your account credentials.
                  </p>
                  <p>
                    <strong>6. Prohibited Activities:</strong> You agree not to use SSL services for any illegal activities, including but not limited to money laundering, fraud, or unauthorized financial transactions.
                  </p>
                  <p>
                    <strong>7. Termination:</strong> Either party may terminate the service agreement with prior notice as specified in the service-specific contract.
                  </p>
                  <p>
                    <strong>8. Amendments:</strong> SSL Wireless reserves the right to amend these terms at any time. Continued use of the service constitutes acceptance of the updated terms.
                  </p>
                </>
              )}
              
              <p>
                For more detailed information, please contact our support team or refer to the full service documentation available in your dashboard resources.
              </p>
            </div>
          </div>
          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-text-primary">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
              className="mt-1 size-[18px] accent-primary"
            />
            I read and agree to the service terms.
          </label>
        </>
      ) : null}

      {step === 2 ? (
        <div>
          <div className="grid gap-4 md:grid-cols-2">
            {packageList.map((item) => {
              const selected = selectedPackage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedPackage(item.id)}
                  className={cn(
                    "relative rounded-2xl border p-5 text-left transition-colors",
                    selected ? "border-primary bg-blue-50" : "border-border-soft bg-white hover:border-border",
                  )}
                >
                  {selected && (
                    <Badge tone="blue" className="absolute right-5 top-5">
                      Selected
                    </Badge>
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary">{item.name}</h2>
                    {item.quantity && (
                      <div className="mt-1.5 inline-flex items-center rounded-md bg-black px-2 py-0.5 text-xs font-semibold text-white">
                        {item.quantity}
                      </div>
                    )}
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{item.description}</p>
                  </div>
                  {item.details ? (
                    <ul className="mt-4 space-y-2 border-t border-border-soft pt-4">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-2 text-xs leading-5 text-text-secondary"
                        >
                          <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="mt-5 text-xl font-medium text-primary">{item.price}</p>
                  {item.note ? (
                    <p className="mt-2 text-xs leading-5 text-text-secondary">
                      {item.note}
                    </p>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div>
          <div className="space-y-4">
            {documentOptions.map((item) => {
              const fileName = uploadedFiles[item.name];
              const uploaded = Boolean(fileName);
              const requiresCapture = Boolean(item.capture);

              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-border-soft bg-white p-4 transition-all hover:border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex size-10 items-center justify-center rounded-full transition-colors",
                      uploaded ? "bg-success/10 text-success" : "bg-surface-alt text-text-secondary"
                    )}>
                      {uploaded ? (
                        <Check className="size-5" />
                      ) : requiresCapture ? (
                        <Camera className="size-5" />
                      ) : (
                        <Upload className="size-5" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{item.name}</p>
                      <p className="text-xs text-text-secondary">
                        {uploaded ? fileName : item.helper}
                      </p>
                    </div>
                  </div>
                  {requiresCapture ? (
                    <button
                      type="button"
                      onClick={openCamera}
                      className="inline-flex h-9 cursor-pointer items-center justify-center rounded-full border border-border bg-white px-4 text-xs font-medium text-primary transition-colors hover:bg-blue-50"
                    >
                      {uploaded ? "Retake" : "Capture"}
                    </button>
                  ) : (
                    <label>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(item.name, e)}
                        accept={item.accept}
                      />
                      <div className="inline-flex h-9 cursor-pointer items-center justify-center rounded-full border border-border bg-white px-4 text-xs font-medium text-primary transition-colors hover:bg-blue-50">
                        {uploaded ? "Replace" : "Upload"}
                      </div>
                    </label>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-text-secondary">
            You can upload the remaining documents later from your dashboard. Any files you upload now will be saved to your document vault, and your application progress will be saved as a draft.
          </p>
        </div>
      ) : null}

      {cameraOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-text-primary">Capture user photo</h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Center the user&apos;s face clearly before capturing.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCamera}
                className="flex size-9 items-center justify-center rounded-full text-text-secondary hover:bg-surface"
                aria-label="Close camera"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="overflow-hidden rounded-xl bg-black">
              <video
                ref={videoRef}
                className="aspect-[4/3] w-full object-cover"
                autoPlay
                muted
                playsInline
              />
            </div>

            {cameraError ? <p className="mt-3 text-sm text-error">{cameraError}</p> : null}

            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <Button type="button" variant="secondary" onClick={closeCamera}>
                Cancel
              </Button>
              <Button type="button" onClick={captureUserPhoto} disabled={Boolean(cameraError)}>
                Capture photo
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="space-y-6">
          <div className="rounded-2xl bg-surface-alt p-6 border-none">
            <div className="space-y-4 text-sm">
              {[
                { label: "Service", value: serviceLabel },
                {
                  label: "Package",
                  value: (
                    <div className="relative flex items-center">
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="appearance-none bg-transparent pr-8 text-right text-text-secondary outline-none cursor-pointer hover:text-primary transition-colors"
                      >
                        {packageList.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} {pkg.quantity ? `(${pkg.quantity})` : ""}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-0 flex items-center text-text-secondary">
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  ),
                },
                { label: "Documents uploaded", value: Object.keys(uploadedFiles).length || 0 },
                { label: "Total payable now", value: packageList.find(p => p.id === selectedPackage)?.price || "Custom pricing" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center justify-between py-2 border-b border-border-soft",
                    index === 3 && "border-none pb-0"
                  )}
                >
                  <span className="font-medium text-text-primary">{item.label}</span>
                  <div className="text-text-secondary">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm leading-6 text-text-secondary">
            After payment, you’ll be redirected to the dashboard. You can track review status, complete missing steps, and update rejected documents from there.
          </p>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          {step > 1 ? (
            <Button type="button" variant="secondary" onClick={goBack}>
              Back
            </Button>
          ) : null}
          {step < 4 ? (
            <Button type="button" onClick={goNext} disabled={!canGoNext}>
              Next
            </Button>
          ) : (
            <ButtonLink href="/dashboard">Pay now</ButtonLink>
          )}
        </div>

        <Link
          href="/dashboard"
          className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
        >
          Save and continue later
        </Link>
      </div>
    </div>
  );
}
