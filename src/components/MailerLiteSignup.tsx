"use client";

import { useEffect } from "react";
import Script from "next/script";

// MailerLite Universal embed, ported from index.html, with the success-state
// tracking bug already fixed (see the 2026-08-19 fix on main: commits
// 7167e0b and e24c992). Two defects existed in the original inline script:
// 1. It checked for the existence of .ml-form-successBody rather than its
//    visibility — that element is present (hidden) in the DOM from load,
//    so the existence check fired generate_lead on every homepage visit.
// 2. MailerLite toggles that element's visibility via a style-attribute
//    mutation on an already-present node, not a childList mutation — so an
//    observer only watching childList never re-fires on a real submission.
// Both are fixed here from the start: offsetHeight > 0 for visibility, and
// the observer watches attributes (filtered to 'style') as well as childList.
export default function MailerLiteSignup() {
  useEffect(() => {
    const form = document.querySelector('.ml-embedded[data-form="T9WRhZ"]');
    if (!form) return;

    const obs = new MutationObserver(function () {
      const successBody = form.querySelector(".ml-form-successBody") as HTMLElement | null;
      if (successBody && successBody.offsetHeight > 0) {
        if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", {
            method: "mailerlite",
            form_id: "T9WRhZ",
            form_location: "homepage",
          });
        }
        try {
          const body = JSON.stringify({ site: "silvertonpublishing", event_type: "generate_lead" });
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
          // Tracking failure shouldn't block the signup itself.
        }
        obs.disconnect();
      }
    });

    obs.observe(form, { childList: true, subtree: true, attributes: true, attributeFilter: ["style"] });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2200212');
        `}
      </Script>
      <div className="ml-embedded" data-form="T9WRhZ" />
    </>
  );
}
