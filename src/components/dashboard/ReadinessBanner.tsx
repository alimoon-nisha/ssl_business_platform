import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { currentBusiness } from "@/data/mockPlatform";

const isProfileComplete = currentBusiness.profileCompletion === 100;

function ProfileCompleteCard() {
  return (
    <Card className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-8">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5">
          <CheckCircle2 className="size-3.5 text-success" />
          <span className="text-xs font-semibold text-success">Profile complete</span>
        </div>
        <h1 className="text-3xl font-semibold text-text-primary">
          Your business profile is ready
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary">
          Your business details and reusable documents are complete. You can now start service applications faster from the same profile.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Business details", "Contact information", "Required documents"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-success"
            >
              <CheckCircle2 className="size-3 shrink-0" />
              {item}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/dashboard/services">Start a service application</ButtonLink>
          <ButtonLink href="/dashboard/documents" variant="secondary">
            View document vault
          </ButtonLink>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-green-50/50 p-6 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-sm">
          <CheckCircle2 className="size-7 text-success" />
        </div>
        <div>
          <p className="text-2xl font-bold text-success">100%</p>
          <p className="mt-0.5 text-xs font-medium text-text-secondary">Profile complete</p>
        </div>
        <p className="text-[11px] leading-5 text-text-secondary">
          Business details, contact information, and required documents are ready.
        </p>
      </div>
    </Card>
  );
}

function ProfileIncompleteCard() {
  return (
    <Card className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-8">
      <div>
        <h1 className="text-3xl font-semibold text-text-primary">
          Welcome back, {currentBusiness.userName}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">
          Complete your business profile to activate services faster and reuse documents across applications.
        </p>
        <div className="mt-7">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-text-primary">Business profile completion</span>
            <span className="font-medium text-primary">{currentBusiness.profileCompletion}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-border-soft">
            <div className="h-2 w-[65%] rounded-full bg-primary" />
          </div>
          <p className="mt-3 text-sm text-text-secondary">
            Missing: {currentBusiness.missingItems.join(", ")}
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/dashboard/profile">Complete profile</ButtonLink>
          <ButtonLink href="/dashboard/documents" variant="secondary">
            View document vault
          </ButtonLink>
        </div>
      </div>
      <div className="rounded-2xl bg-surface p-5">
        <div className="rounded-2xl border border-border-soft bg-white p-4">
          <div className="mb-4 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            2 items need attention
          </div>
          <div className="space-y-3">
            {["Business details", "TIN certificate", "Trade license"].map((item, index) => (
              <Link
                key={item}
                href="/dashboard/documents"
                className="flex items-center gap-3 rounded-xl bg-surface-alt p-3 transition-colors hover:bg-border-soft"
              >
                <CheckCircle2 className={`size-4 shrink-0 ${index === 2 ? "text-warning" : "text-success"}`} />
                <span className="text-xs font-medium text-text-secondary">{item}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ReadinessBanner() {
  return isProfileComplete ? <ProfileCompleteCard /> : <ProfileIncompleteCard />;
}
