"use client";

import { useEffect, useRef, useState } from "react";
import { X, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { saveAssessmentAnswers, clearAssessmentAnswers, type AssessmentData } from "@/lib/assessmentPrefill";
import { useRouter } from "next/navigation";

interface ServiceAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const businessTypeOptions = [
  { label: "Online", value: "online" },
  { label: "Store", value: "store" },
  { label: "Online + Store", value: "online-store" },
];

const sectorOptions = [
  "Education", "Retail / Ecommerce", "Restaurant / Food", "Healthcare",
  "Travel / Hospitality", "Software / SaaS", "Financial services",
  "NGO / Development", "Professional services", "Real estate",
  "Media / Entertainment", "Logistics / Delivery", "Manufacturing / Distribution", "Other"
];

const employeeOptions = [
  { label: "Just you", value: "Just you" },
  { label: "2 - 9", value: "2 - 9" },
  { label: "10 - 99", value: "10 - 99" },
  { label: "100 - 299", value: "100 - 299" },
  { label: "300+", value: "300+" },
];

const needOptions = [
  { id: "online-payments", label: "Accept online payments" },
  { id: "sms-campaigns", label: "Send SMS campaigns or alerts" },
  { id: "business-messaging", label: "Set up sender ID or business messaging" },
  { id: "corporate-recharge", label: "Manage corporate mobile recharge or top-up" },
  { id: "hosting-security", label: "Host or secure business systems" },
  { id: "software-solution", label: "Build a custom software solution" },
  { id: "field-sales", label: "Manage field sales or distribution operations" },
  { id: "ecommerce-web", label: "Create or improve an ecommerce website" },
  { id: "call-center", label: "Get call center or customer support assistance" },
];

const readinessOptions = {
  sellsOnline: ["Yes", "No", "Planning to start", "Only through social media / marketplace"],
  hasWebsite: ["Yes", "No", "In progress", "Not needed"],
  monthlyActivity: ["Low / just starting", "Growing", "High volume", "Not sure"],
  documentsReady: ["Yes, most documents are ready", "Some documents are ready", "Not yet", "Not sure"],
};

interface Recommendation {
  id: string;
  title: string;
  description: string;
  checklist: string[];
  cta: "Start application" | "Contact sales";
  isRecommended?: boolean;
  reason: string;
}

export function ServiceAssessmentModal({ isOpen, onClose }: ServiceAssessmentModalProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<AssessmentData>({
    businessType: "",
    sector: "",
    employeeRange: "",
    selectedNeeds: [],
    readiness: {
      sellsOnline: "",
      hasWebsite: "",
      monthlyActivity: "",
      documentsReady: "",
    },
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const toggleNeed = (needId: string) => {
    setAnswers((prev) => {
      if (prev.selectedNeeds.includes(needId)) {
        return { ...prev, selectedNeeds: prev.selectedNeeds.filter((id) => id !== needId) };
      }
      return { ...prev, selectedNeeds: [...prev.selectedNeeds, needId] };
    });
  };

  const handleRetake = () => {
    clearAssessmentAnswers();
    setStep(1);
    setAnswers({
      businessType: "",
      sector: "",
      employeeRange: "",
      selectedNeeds: [],
      readiness: {
        sellsOnline: "",
        hasWebsite: "",
        monthlyActivity: "",
        documentsReady: "",
      },
    });
  };

  const getRecommendations = (): Recommendation[] => {
    const results: Recommendation[] = [];
    const { selectedNeeds } = answers;

    const addRec = (rec: Recommendation) => {
      if (!results.find((r) => r.id === rec.id)) {
        results.push(rec);
      }
    };

    if (selectedNeeds.includes("online-payments") || selectedNeeds.includes("ecommerce-web")) {
      addRec({
        id: "sslcommerz",
        title: "SSLCOMMERZ Payment Gateway",
        description: "Accept digital payments through cards, mobile wallets, and bank payment channels.",
        checklist: ["Online payment acceptance", "Merchant onboarding", "API/plugin integration", "Application tracking"],
        cta: "Start application",
        reason: "Recommended because you selected online payments.",
      });
    }
    if (selectedNeeds.includes("sms-campaigns") || selectedNeeds.includes("business-messaging")) {
      addRec({
        id: "messaging-suite",
        title: "Messaging Suite / iSMS",
        description: "Send business SMS, alerts, campaigns, and service messages from a managed platform.",
        checklist: ["Bulk SMS setup", "Sender ID request", "Campaign readiness", "Delivery report access"],
        cta: "Start application",
        reason: "Recommended because you selected business messaging.",
      });
    }
    if (selectedNeeds.includes("corporate-recharge")) {
      addRec({
        id: "corporate-recharge",
        title: "Corporate Recharge",
        description: "Manage corporate top-up and recharge workflows for teams, partners, or business programs.",
        checklist: ["Corporate top-up request", "Operator/service setup", "Recharge activity", "Team approval support"],
        cta: "Start application",
        reason: "Recommended because you selected corporate recharge.",
      });
    }
    if (selectedNeeds.includes("hosting-security")) {
      addRec({
        id: "cloud-hosting",
        title: "Cloud Hosting & Cyber Security",
        description: "Plan secure hosting, infrastructure, and managed protection for business systems.",
        checklist: ["Hosting requirement review", "Security planning", "Managed support", "Sales consultation"],
        cta: "Contact sales",
        reason: "Recommended because you selected hosting or security.",
      });
    }
    if (selectedNeeds.includes("software-solution")) {
      addRec({
        id: "software-dev",
        title: "Software Development",
        description: "Discuss custom business software, automation, or platform development needs.",
        checklist: ["Requirement discovery", "Custom solution planning", "Technical consultation", "Sales follow-up"],
        cta: "Contact sales",
        reason: "Recommended because you selected custom software.",
      });
    }
    if (selectedNeeds.includes("field-sales")) {
      addRec({
        id: "sales-force",
        title: "Sales Force Automation",
        description: "Support field teams, distribution workflows, order capture, and operational visibility.",
        checklist: ["Field activity tracking", "Order workflow support", "Distribution visibility", "Business process review"],
        cta: "Contact sales",
        reason: "Recommended because you selected field sales operations.",
      });
    }
    if (selectedNeeds.includes("ecommerce-web")) {
      addRec({
        id: "ecommerce-dev",
        title: "Ecommerce Website Development",
        description: "Plan an ecommerce site or improve your online sales journey with SSL support.",
        checklist: ["Ecommerce setup", "Online ordering", "Payment readiness", "Sales consultation"],
        cta: "Contact sales",
        reason: "Recommended because you selected ecommerce development.",
      });
    }
    if (selectedNeeds.includes("call-center")) {
      addRec({
        id: "call-center",
        title: "Call Center",
        description: "Get support for customer communication, call handling, or contact center operations.",
        checklist: ["Customer support setup", "Call handling support", "Contact center planning"],
        cta: "Contact sales",
        reason: "Recommended because you selected call center assistance.",
      });
    }

    // Apply primary recommendations based on business type/sector if we have too many or too few
    const finalRecs = results.slice(0, 3);
    if (finalRecs.length > 0) {
      finalRecs[0].isRecommended = true;
    }

    return finalRecs;
  };

  const handleResultAction = (rec: Recommendation) => {
    saveAssessmentAnswers(answers);
    const slugMap: Record<string, string> = {
      "sslcommerz": "payment-gateway",
      "messaging-suite": "messaging-suite",
      "corporate-recharge": "corporate-recharge",
      "cloud-hosting": "cloud-hosting",
      "software-dev": "software-development",
      "sales-force": "sales-force-automation",
      "ecommerce-dev": "ecommerce-website-development",
      "call-center": "call-center"
    };
    
    const serviceSlug = slugMap[rec.id] || rec.id;
    const path = rec.cta === "Start application" ? "/get-started" : "/contact-sales";
    router.push(`${path}?service=${serviceSlug}&source=assessment`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-text-primary/40 backdrop-blur-sm" onClick={onClose} />
      
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative w-full overflow-hidden rounded-3xl bg-white shadow-2xl transition-all",
          step === 4 ? "max-w-[960px]" : "max-w-[760px]"
        )}
      >
        {/* Header */}
        <div className="border-b border-border-soft px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Service Assessment</p>
              <h2 className="mt-1 text-2xl font-semibold text-text-primary">Find the right SSL services</h2>
              <p className="mt-1 text-sm text-text-secondary">Answer a few quick questions. We’ll recommend services that match your business needs.</p>
            </div>
            <button 
              ref={closeButtonRef}
              onClick={onClose}
              className="flex size-10 items-center justify-center rounded-full hover:bg-surface-alt"
              aria-label="Close assessment"
            >
              <X className="size-5 text-text-secondary" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[70vh] overflow-y-auto px-8 py-10">
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-text-primary">Tell us about your business</h3>
                <p className="mt-1 text-sm text-text-secondary">We’ll use this to suggest SSL services that match your business model.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Business type</label>
                  <select 
                    value={answers.businessType}
                    onChange={(e) => setAnswers({...answers, businessType: e.target.value})}
                    className="h-12 w-full rounded-xl border border-border bg-white px-4 text-text-primary outline-none focus:border-primary"
                  >
                    <option value="">Select type</option>
                    {businessTypeOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Sector</label>
                  <select 
                    value={answers.sector}
                    onChange={(e) => setAnswers({...answers, sector: e.target.value})}
                    className="h-12 w-full rounded-xl border border-border bg-white px-4 text-text-primary outline-none focus:border-primary"
                  >
                    <option value="">Select sector</option>
                    {sectorOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-text-secondary">Number of employees</label>
                  <div className="flex flex-wrap gap-2">
                    {employeeOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setAnswers({...answers, employeeRange: opt.value})}
                        className={cn(
                          "h-11 rounded-xl border px-5 text-sm font-medium transition-all",
                          answers.employeeRange === opt.value 
                            ? "border-primary bg-blue-50 text-primary" 
                            : "border-border bg-white text-text-secondary hover:border-text-secondary"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-text-primary">What do you want to do?</h3>
                <p className="mt-1 text-sm text-text-secondary">Select all that apply. We’ll match these needs to SSL services.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {needOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => toggleNeed(opt.id)}
                    className={cn(
                      "flex min-h-[80px] flex-col items-start rounded-2xl border p-4 text-left transition-all",
                      answers.selectedNeeds.includes(opt.id)
                        ? "border-primary bg-blue-50/50 ring-1 ring-primary"
                        : "border-border-soft bg-white hover:border-border"
                    )}
                  >
                    <div className={cn(
                      "mb-2 flex size-5 items-center justify-center rounded border",
                      answers.selectedNeeds.includes(opt.id) ? "border-primary bg-primary text-white" : "border-border bg-white"
                    )}>
                      {answers.selectedNeeds.includes(opt.id) && <Check className="size-3" />}
                    </div>
                    <span className="text-sm font-medium text-text-primary leading-tight">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-text-primary">A few more details</h3>
                <p className="mt-1 text-sm text-text-secondary">These help us make the recommendation more useful.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { key: "sellsOnline", label: "Do you currently sell online?", options: readinessOptions.sellsOnline },
                  { key: "hasWebsite", label: "Do you already have a website or app?", options: readinessOptions.hasWebsite },
                  { key: "monthlyActivity", label: "Expected monthly activity", options: readinessOptions.monthlyActivity },
                  { key: "documentsReady", label: "Do you already have business documents ready?", options: readinessOptions.documentsReady },
                ].map((field) => (
                  <div key={field.key} className="space-y-3">
                    <label className="text-sm font-medium text-text-secondary">{field.label}</label>
                    <div className="space-y-2">
                      {field.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => setAnswers({...answers, readiness: {...answers.readiness, [field.key]: opt}})}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all",
                            answers.readiness[field.key as keyof typeof answers.readiness] === opt
                              ? "border-primary bg-blue-50 text-primary"
                              : "border-border-soft bg-white hover:border-border"
                          )}
                        >
                          <div className={cn(
                            "size-4 rounded-full border",
                            answers.readiness[field.key as keyof typeof answers.readiness] === opt ? "border-4 border-primary" : "border-border"
                          )} />
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-text-primary">Recommended SSL services for your business</h3>
                <p className="mt-2 text-sm text-text-secondary max-w-2xl mx-auto">Based on your answers, these services may fit your current needs. You can start one application now or contact sales for guidance.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {getRecommendations().map((rec) => (
                  <Card key={rec.id} className="relative flex flex-col p-6 border-border-soft">
                    {rec.isRecommended && (
                      <Badge tone="blue" className="absolute -top-3 left-6 flex items-center gap-1.5 shadow-sm">
                        <Sparkles className="size-3" />
                        Recommended
                      </Badge>
                    )}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-text-primary">{rec.title}</h4>
                      <p className="mt-2 text-xs text-primary font-medium">{rec.reason}</p>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{rec.description}</p>
                      <div className="mt-6 space-y-2.5">
                        {rec.checklist.map(item => (
                          <div key={item} className="flex items-center gap-2.5">
                            <Check className="size-3.5 text-success" />
                            <span className="text-xs text-text-secondary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleResultAction(rec)}
                      className="mt-8 w-full"
                      variant={rec.cta === "Start application" ? "primary" : "secondary"}
                    >
                      {rec.cta}
                    </Button>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4 pt-6">
                <button 
                  onClick={handleRetake}
                  className="text-sm font-medium text-text-secondary hover:text-primary transition-colors underline underline-offset-4"
                >
                  Retake assessment
                </button>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span>Need help?</span>
                  <button 
                    onClick={() => router.push("/contact-sales?source=assessment")}
                    className="font-medium text-primary hover:underline"
                  >
                    Talk to sales
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border-soft bg-surface-alt px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium text-text-secondary">
              {step < 4 ? `Step ${step} of 3` : "Recommendations ready"}
            </div>
            <div className="flex gap-3">
              {step > 1 && step < 4 && (
                <Button variant="secondary" onClick={handleBack}>
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button 
                  onClick={handleNext} 
                  className="min-w-36"
                  disabled={
                    (step === 1 && (!answers.businessType || !answers.sector || !answers.employeeRange)) ||
                    (step === 2 && answers.selectedNeeds.length === 0)
                  }
                >
                  Next
                </Button>
              ) : step === 3 ? (
                <Button 
                  onClick={handleNext} 
                  className="min-w-44"
                  disabled={Object.values(answers.readiness).some(v => !v)}
                >
                  Show recommendations
                </Button>
              ) : (
                <Button variant="secondary" onClick={onClose}>
                  Close
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
