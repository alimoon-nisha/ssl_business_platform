"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowRight, FileCheck2, Files, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";

function easeInOut(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

const onboardingProgressSteps: Array<{
  title: string;
  body: string;
  Icon: LucideIcon;
  iconClassName: string;
}> = [
  {
    title: "Checking existing documents",
    body: "Scanning your saved vault",
    Icon: Search,
    iconClassName: "bg-blue-50 text-primary",
  },
  {
    title: "Found 3 documents",
    body: "Trade license, TIN, and bank proof ready",
    Icon: Files,
    iconClassName: "bg-amber-50 text-warning",
  },
  {
    title: "Documents reused",
    body: "Your application can move faster",
    Icon: FileCheck2,
    iconClassName: "bg-green-50 text-success",
  },
];

function getOnboardingProgressStep(progress: number) {
  if (progress < 50) {
    return onboardingProgressSteps[0];
  }

  if (progress < 100) {
    return onboardingProgressSteps[1];
  }

  return onboardingProgressSteps[2];
}

export function OnboardingConfidenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const progressStep = getOnboardingProgressStep(progress);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          observer.unobserve(entry.target);
          const duration = 4200;
          const restartDelay = 2600;

          const runAnimation = () => {
            setProgress(0);

            const startTime = window.performance.now();

            const tick = (time: number) => {
              const rawProgress = Math.min((time - startTime) / duration, 1);
              setProgress(Math.round(easeInOut(rawProgress) * 100));

              if (rawProgress < 1) {
                animationFrameRef.current = window.requestAnimationFrame(tick);
                return;
              }

              restartTimeoutRef.current = window.setTimeout(runAnimation, restartDelay);
            };

            animationFrameRef.current = window.requestAnimationFrame(tick);
          };

          runAnimation();
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.24,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      if (restartTimeoutRef.current !== null) {
        window.clearTimeout(restartTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="onboarding" className="container-xl py-16">
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div className="max-w-lg" data-reveal="fade-left">
          <h2 className="text-2xl font-medium leading-tight text-text-primary">
            Move your business setup into one SSL Business Hub account.
          </h2>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            Existing SSL merchants and new businesses can bring their company profile, service applications, and documents into a single platform over time.
          </p>
          <Link
            href="/get-started"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Learn about onboarding
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div data-reveal="fade-right">
          <Card className="p-5">
            <div
              className="rounded-2xl bg-surface p-5"
              data-parallax
              data-parallax-speed="0.025"
            >
              <div className="mb-4 grid min-h-10">
                {onboardingProgressSteps.map((step) => {
                  const active = step.title === progressStep.title;
                  const { Icon } = step;

                  return (
                    <div
                      key={step.title}
                      className={`col-start-1 row-start-1 flex items-center gap-3 transition-all duration-500 ease-out ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-1 opacity-0"
                      }`}
                      aria-hidden={!active}
                    >
                      <span
                        className={`flex size-10 items-center justify-center rounded-xl transition-colors duration-500 ${step.iconClassName}`}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-text-primary">
                          {step.title}
                        </h3>
                        <p className="text-xs text-text-secondary">{step.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="h-2 overflow-hidden rounded-full bg-white"
                aria-label={progressStep.title}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                role="progressbar"
              >
                <div
                  className="h-2 rounded-full bg-success transition-[width] duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
