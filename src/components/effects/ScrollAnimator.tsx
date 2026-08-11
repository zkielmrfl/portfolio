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
  ".social-panel"
].join(",");

export function ScrollAnimator() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    elements.forEach((element) => element.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
