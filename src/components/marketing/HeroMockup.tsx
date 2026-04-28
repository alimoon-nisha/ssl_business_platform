"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import styles from "./HeroMockup.module.css";

const sidebarDots = ["bg-primary", "bg-success", "bg-warning", "bg-error"];
const processLoopDuration = 7500;

function easeInOut(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function getReadinessValue(elapsed: number) {
  const time = elapsed % processLoopDuration;

  if (time < 2000) {
    return 65;
  }

  if (time <= 2800) {
    const progress = easeInOut((time - 2000) / 800);
    return Math.round(65 + progress * 20);
  }

  if (time < 6500) {
    return 85;
  }

  const progress = easeInOut((time - 6500) / 1000);
  return Math.round(85 - progress * 20);
}

function subscribeToMotionPreference(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getMotionPreferenceSnapshot() {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}

function useReadinessValue() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreferenceSnapshot,
    () => false,
  );
  const [readiness, setReadiness] = useState(65);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let animationFrame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      setReadiness(getReadinessValue(now - startedAt));
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [prefersReducedMotion]);

  return prefersReducedMotion ? 85 : readiness;
}

export function HeroMockup() {
  const readiness = useReadinessValue();

  return (
    <div className={cn("relative mx-auto w-full max-w-[520px]", styles["process-loop"])}>
      <div className={cn(
        "absolute -left-5 top-12 hidden rounded-full border border-border-soft bg-white px-3 py-1.5 text-xs font-medium text-success shadow-sm md:block",
        styles["documents-reused-pulse"],
      )}>
        Documents reused
      </div>
      <div className={cn(
        "absolute -right-2 bottom-12 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary shadow-sm",
        styles["review-status-active"],
      )}>
        Under review
      </div>
      <div className="rounded-[28px] border border-border-soft bg-white p-4 shadow-[0_16px_40px_rgba(60,64,67,0.08)]">
        <div className="rounded-2xl border border-border-soft bg-surface p-4">
          <div className="mb-4 flex items-center justify-between border-b border-border-soft pb-3">
            <div>
              <div className="h-2.5 w-24 rounded-full bg-primary/15" />
              <div className="mt-2 h-2 w-36 rounded-full bg-border-soft" />
            </div>
            <Badge className={styles["readiness-badge-progress"]} tone="green">
              {readiness}% ready
            </Badge>
          </div>

          <div className="grid grid-cols-[54px_1fr_122px] gap-4">
            <div className="rounded-2xl border border-border-soft bg-white p-3">
              <div className="space-y-3">
                {sidebarDots.map((dot) => (
                  <span key={dot} className={`block size-6 rounded-lg ${dot}`} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="size-9 rounded-xl bg-blue-50" />
                <div>
                  <div className="h-2.5 w-28 rounded-full bg-text-primary/75" />
                  <div className="mt-2 h-2 w-20 rounded-full bg-border-soft" />
                </div>
              </div>
              <div className="space-y-3">
                {["Company details", "Authorized contact", "Document vault"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={cn(
                        "flex items-center justify-between rounded-xl bg-surface-alt px-3 py-2",
                        index === 2 && styles["document-vault-complete"],
                      )}
                    >
                      <span
                        className={cn(
                          "text-[11px] font-medium text-text-secondary",
                          index === 2 && styles["document-vault-label"],
                        )}
                      >
                        {item}
                      </span>
                      <span
                        className={cn(
                          "size-2 rounded-full",
                          index === 2 ? styles["document-vault-dot"] : "bg-success",
                        )}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-border-soft bg-white p-3">
              <div className="mb-3 h-2.5 w-20 rounded-full bg-text-primary/70" />
              <div className="space-y-3">
                {["SSLCOMMERZ", "Bulk SMS", "Top-Up"].map((item, index) => (
                  <div
                    key={item}
                    className={cn(
                      "rounded-xl border border-border-soft p-2",
                      styles["application-package-card"],
                    )}
                  >
                    <div className="h-2 w-16 rounded-full bg-border-soft" />
                    <div className="mt-2 h-1.5 w-10 rounded-full bg-border-soft" />
                    <div
                      className={`mt-3 h-1.5 rounded-full ${
                        index === 0 ? "w-16 bg-primary" : "w-10 bg-border"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
