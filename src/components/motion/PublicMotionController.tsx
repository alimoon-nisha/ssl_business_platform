"use client";

import { useEffect } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function revealAll() {
  document
    .querySelectorAll<HTMLElement>("[data-reveal]")
    .forEach((element) => element.classList.add("is-visible"));
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function PublicMotionController() {
  useEffect(() => {
    const mediaQuery = window.matchMedia(reducedMotionQuery);

    if (mediaQuery.matches) {
      revealAll();
      document
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach((element) => element.style.setProperty("--parallax-y", "0px"));
      return undefined;
    }

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;

      if (mediaQuery.matches) {
        parallaxElements.forEach((element) =>
          element.style.setProperty("--parallax-y", "0px"),
        );
        return;
      }

      const viewportCenter = window.innerHeight / 2;

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const speed = Number(element.dataset.parallaxSpeed ?? 0.04);
        const offset = clamp((viewportCenter - elementCenter) * speed, -18, 18);

        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);
    mediaQuery.addEventListener("change", requestParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      mediaQuery.removeEventListener("change", requestParallaxUpdate);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return null;
}
