"use client";

import { useEffect } from "react";

// Ported from the per-article inline script (e.g. blog/contractor-agreement.html),
// which only existed on 26 of 38 articles before this rebuild. Centralizing
// it in the shared article template means every article gets it now — one
// of the gaps the 2026-08-19 audit found closes for free as a side effect
// of the port, not as separate per-article work.
export default function BlogReadTracker({ slug, title }: { slug: string; title: string }) {
  useEffect(() => {
    let fired = false;

    function handleScroll() {
      if (fired) return;
      const doc = document.documentElement;
      const pct = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (pct >= 0.75) {
        fired = true;
        if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "blog_read_complete", {
            article_slug: slug,
            article_title: title,
          });
        }
        try {
          const body = JSON.stringify({ site: "silvertonpublishing", event_type: "blog_read_complete" });
          if (navigator.sendBeacon) {
            navigator.sendBeacon(
              "https://select-admin-teal.vercel.app/api/track",
              new Blob([body], { type: "application/json" })
            );
          } else {
            fetch("https://select-admin-teal.vercel.app/api/track", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body,
              keepalive: true,
              mode: "cors",
              credentials: "omit",
            }).catch(() => {});
          }
        } catch {
          // Tracking failure shouldn't affect the reading experience.
        }
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug, title]);

  return null;
}
