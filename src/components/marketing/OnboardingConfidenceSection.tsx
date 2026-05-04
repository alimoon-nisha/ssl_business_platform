"use client";

import { ArrowRight, FileCheck2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";

function easeInOut(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

export function OnboardingConfidenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

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
          setProgress(0);

          const startTime = window.performance.now();
          const duration = 2400;

          const tick = (time: number) => {
            const rawProgress = Math.min((time - startTime) / duration, 1);
            setProgress(Math.round(easeInOut(rawProgress) * 100));

            if (rawProgress < 1) {
              animationFrameRef.current = window.requestAnimationFrame(tick);
            }
          };

          animationFrameRef.current = window.requestAnimationFrame(tick);
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
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-success">
                  <FileCheck2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    Document vault
                  </h3>
                  <p className="text-xs text-text-secondary">Trade license reused</p>
                </div>
              </div>
              <div
                className="h-2 overflow-hidden rounded-full bg-white"
                aria-label="Document vault progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                role="progressbar"
              >
                <div
                  className="h-2 rounded-full bg-success transition-[width] duration-150"
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