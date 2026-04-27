import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { currentBusiness } from "@/data/mockPlatform";

export function ReadinessBanner() {
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
          <ButtonLink href="/get-started">Complete profile</ButtonLink>
          <ButtonLink href="/dashboard" variant="secondary">
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
              <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-alt p-3">
                <CheckCircle2 className={`size-4 ${index === 2 ? "text-warning" : "text-success"}`} />
                <span className="text-xs font-medium text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
