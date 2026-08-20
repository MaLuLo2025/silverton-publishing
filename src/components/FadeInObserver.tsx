"use client";

import { useEffect } from "react";

// Ported from index.html's inline IntersectionObserver script. Cosmetic
// only — adds .visible to any .fade-in element once it scrolls into view.
export default function FadeInObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
