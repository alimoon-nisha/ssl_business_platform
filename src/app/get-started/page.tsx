import { Suspense } from "react";
import { GetStartedWizard } from "@/components/auth/GetStartedWizard";

export default function GetStartedPage() {
  return (
    <Suspense fallback={null}>
      <GetStartedWizard />
    </Suspense>
  );
}
