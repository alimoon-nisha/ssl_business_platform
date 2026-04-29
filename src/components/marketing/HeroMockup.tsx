"use client";

import { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import styles from "./HeroMockup.module.css";

const sidebarDots = ["bg-primary", "bg-success", "bg-warning", "bg-error"];
const processLoopDuration = 7500;

type IntroPhase = "frame" | "background" | "skeleton" | "loaded";

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

function useReadinessValue(isLoaded: boolean) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreferenceSnapshot,
    () => false,
  );
  const [readiness, setReadiness] = useState(65);

  useEffect(() => {
    if (prefersReducedMotion || !isLoaded) {
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
  }, [prefersReducedMotion, isLoaded]);

  return prefersReducedMotion ? 85 : readiness;
}

export function HeroMockup() {
  const [phase, setPhase] = useState<IntroPhase>("frame");
  const hasPlayedIntro = useRef(false);
  const readiness = useReadinessValue(phase === "loaded");

  useEffect(() => {
    if (hasPlayedIntro.current) {
      setPhase("loaded");
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: frame only (already visible)
    // Phase 2: fade in background after 200ms
    timers.push(setTimeout(() => setPhase("background"), 200));

    // Phase 3: show skeleton placeholders after 500ms
    timers.push(setTimeout(() => setPhase("skeleton"), 500));

    // Phase 4: reveal actual content after 1100ms
    timers.push(setTimeout(() => {
      setPhase("loaded");
      hasPlayedIntro.current = true;
    }, 1100));

    return () => timers.forEach(clearTimeout);
  }, []);

  const showBackground = phase !== "frame";
  const showSkeleton = phase === "skeleton" || phase === "loaded";
  const showContent = phase === "loaded";

  return (
    <div className={cn("relative mx-auto w-full max-w-[520px]", showContent && styles["process-loop"])}>
      {/* Floating chip: Documents reused */}
      <div className={cn(
        "absolute -left-5 top-12 hidden rounded-full border border-border-soft bg-white px-3 py-1.5 text-xs font-medium text-success shadow-sm md:block transition-all duration-500",
        showContent
          ? cn("opacity-100 translate-y-0", styles["documents-reused-pulse"])
          : "opacity-0 translate-y-2",
      )}>
        Documents reused
      </div>

      {/* Floating chip: Under review */}
      <div className={cn(
        "absolute -right-2 bottom-12 z-10 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary shadow-sm transition-all duration-500",
        showContent
          ? cn("opacity-100 translate-y-0", styles["review-status-active"])
          : "opacity-0 translate-y-2",
      )}>
        Under review
      </div>

      {/* Outer white frame — always visible */}
      <div className="rounded-[28px] border border-border-soft bg-white p-4 shadow-[0_16px_40px_rgba(60,64,67,0.08)]">

        {/* Inner background panel */}
        <div className={cn(
          "rounded-2xl border border-border-soft p-4 transition-all duration-400",
          showBackground ? "bg-surface opacity-100" : "bg-white opacity-0 border-transparent",
        )}>

          {/* Header bar */}
          <div className={cn(
            "mb-4 flex items-center justify-between border-b border-border-soft pb-3 transition-all duration-400",
            showSkeleton ? "opacity-100" : "opacity-0",
            !showBackground && "border-transparent",
          )}>
            <div className={cn("transition-opacity duration-500", showContent ? "opacity-100" : "opacity-0")}>
              <div className="h-2.5 w-24 rounded-full bg-primary/15" />
              <div className="mt-2 h-2 w-36 rounded-full bg-border-soft" />
            </div>

            {/* Skeleton placeholder for readiness badge */}
            {!showContent && showSkeleton && (
              <div className="h-6 w-20 rounded-full bg-border-soft/60" />
            )}

            {/* Real readiness badge */}
            <div className={cn("transition-opacity duration-400", showContent ? "opacity-100" : "opacity-0")}>
              <Badge className={showContent ? styles["readiness-badge-progress"] : ""} tone="green">
                {readiness}% ready
              </Badge>
            </div>
          </div>

          {/* Main 3-column grid */}
          <div className={cn(
            "grid grid-cols-[54px_1fr_122px] gap-4 transition-all duration-400",
            showSkeleton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}>
            {/* Left sidebar */}
            <div className={cn(
              "rounded-2xl border border-border-soft bg-white p-3 transition-opacity duration-500",
              showContent ? "opacity-100" : "opacity-60",
            )}>
              <div className="space-y-3">
                {sidebarDots.map((dot) => (
                  <span
                    key={dot}
                    className={cn(
                      "block size-6 rounded-lg transition-all duration-500",
                      showContent ? dot : "bg-border-soft/50",
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Center content */}
            <div className={cn(
              "rounded-2xl border border-border-soft bg-white p-4 transition-opacity duration-500",
              showContent ? "opacity-100" : "opacity-60",
            )}>
              {/* Profile row */}
              <div className={cn(
                "mb-4 flex items-center gap-3 transition-opacity duration-400",
                showContent ? "opacity-100" : "opacity-0",
              )}>
                <span className="size-9 rounded-xl bg-blue-50" />
                <div>
                  <div className="h-2.5 w-28 rounded-full bg-text-primary/75" />
                  <div className="mt-2 h-2 w-20 rounded-full bg-border-soft" />
                </div>
              </div>

              {/* Checklist items */}
              <div className="space-y-3">
                {["Company details", "Authorized contact", "Document vault"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-400",
                        showContent
                          ? cn("bg-surface-alt", index === 2 && styles["document-vault-complete"])
                          : "bg-border-soft/30",
                      )}
                    >
                      <span
                        className={cn(
                          "text-[11px] font-medium transition-all duration-400",
                          showContent
                            ? cn("text-text-secondary", index === 2 && styles["document-vault-label"])
                            : "text-transparent",
                        )}
                      >
                        {item}
                      </span>
                      <span
                        className={cn(
                          "size-2 rounded-full transition-all duration-400",
                          showContent
                            ? (index === 2 ? styles["document-vault-dot"] : "bg-success")
                            : "bg-border-soft",
                        )}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Right cards */}
            <div className={cn(
              "rounded-2xl border border-border-soft bg-white p-3 transition-opacity duration-500",
              showContent ? "opacity-100" : "opacity-60",
            )}>
              <div className={cn(
                "mb-3 h-2.5 w-20 rounded-full transition-all duration-400",
                showContent ? "bg-text-primary/70" : "bg-border-soft/50",
              )} />
              <div className="space-y-3">
                {["SSLCOMMERZ", "Bulk SMS", "Top-Up"].map((item, index) => (
                  <div
                    key={item}
                    className={cn(
                      "rounded-xl border border-border-soft p-2",
                      showContent && styles["application-package-card"],
                    )}
                  >
                    <div className={cn(
                      "h-2 w-16 rounded-full transition-all duration-400",
                      showContent ? "bg-border-soft" : "bg-border-soft/40",
                    )} />
                    <div className={cn(
                      "mt-2 h-1.5 w-10 rounded-full transition-all duration-400",
                      showContent ? "bg-border-soft" : "bg-border-soft/30",
                    )} />
                    <div
                      className={cn(
                        "mt-3 h-1.5 rounded-full transition-all duration-400",
                        showContent
                          ? (index === 0 ? "w-16 bg-primary" : "w-10 bg-border")
                          : "w-10 bg-border-soft/30",
                      )}
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
