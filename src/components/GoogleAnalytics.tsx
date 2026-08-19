"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  CONSENT_UPDATE_EVENT,
  prefsToConsentUpdate,
  type CookiePreferences,
} from "@/lib/cookieConsent";
import { deleteGaCookies } from "@/lib/gaCookies";

const GA_ID = "G-2MJWP1RMZX";

// Ported unchanged (structurally) from the Select portfolio
// (goldsilverselect/src/components/GoogleAnalytics.tsx). gtag.js loads
// immediately on every page load — same as the current static site — but
// under Consent Mode v2 (ConsentDefaults.tsx) it starts denied and only
// begins writing identified/persistent data once the visitor accepts.
// Accepting takes effect at runtime via the CONSENT_UPDATE_EVENT listener
// below — no reload required.

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const fn = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof fn === "function" ? fn : null;
}

export default function GoogleAnalytics() {
  // Runtime consent changes (accept/reject/save from the preferences panel,
  // any time after initial load) — update Consent Mode immediately, no
  // reload required, and clear existing GA cookies the moment analytics
  // goes from granted to denied. ConsentDefaults handles the initial-load
  // case; this effect handles everything that happens after that.
  useEffect(() => {
    function handleConsentUpdate(e: Event) {
      const detail = (e as CustomEvent<{ prefs: CookiePreferences }>).detail;
      if (!detail?.prefs) return;

      const wasAnalyticsGranted = document.cookie.includes("_ga=");
      const update = prefsToConsentUpdate(detail.prefs);

      getGtag()?.("consent", "update", update);

      if (wasAnalyticsGranted && !detail.prefs.analytics) {
        deleteGaCookies();
      }
    }

    window.addEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
    return () =>
      window.removeEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
