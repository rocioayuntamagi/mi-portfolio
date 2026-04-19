"use client";

import { useEffect } from "react";

export default function AnimateOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(
      ".portfolio-about, .portfolio-projects, .portfolio-contact, .portfolio-section"
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}