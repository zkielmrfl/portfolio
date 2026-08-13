"use client";

import { useEffect } from "react";

const selector = [
  ".section-header",
  ".about-copy",
  ".profile-panel",
  ".project-card",
  ".skill-category",
  ".credential-card",
  ".lab-panel",
  ".contact-form",
  ".social-panel",
  ".music-player",
  ".playlist-console",
  ".footer"
].join(",");

export function ScrollAnimator() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-order", String(index % 6));
    });

    let frame = 0;

    function updateMotion() {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = (elementCenter - viewportCenter) / viewportCenter;
        const shift = Math.max(-14, Math.min(14, distance * -10));
        element.style.setProperty("--scroll-shift", `${shift.toFixed(2)}px`);
      });
    }

    function requestMotionUpdate() {
      if (frame) return;
      frame = window.requestAnimationFrame(updateMotion);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));
    updateMotion();
    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
