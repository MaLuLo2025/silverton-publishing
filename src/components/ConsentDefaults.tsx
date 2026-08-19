import Script from "next/script";

// Consent Mode v2 defaults. Must render — and therefore execute — before
// the gtag.js loader script. strategy="beforeInteractive" guarantees Next.js
// injects this into the initial HTML ahead of any afterInteractive script,
// so gtag.js never observes an "ungated" moment: by the time it loads,
// storage is already denied by default, and (for a returning visitor who
// previously granted consent) already re-granted based on their saved
// choice — both read synchronously from localStorage before gtag.js is
// even requested.
//
// The localStorage key/shape here ("cookie_prefs") must stay in sync with
// src/lib/cookieConsent.ts — this has to be a plain inline script (it runs
// before any module code), so it can't import that module directly.
//
// Ported from the Select portfolio (goldsilverselect/src/components/ConsentDefaults.tsx),
// with the legacy-key migration branch removed: that existed only to handle
// GSS's pre-Consent-Mode visitors who had a bare "gs_cookie_consent" string
// in localStorage. Silverton never had any consent mechanism before this,
// so there's no legacy state to read — every visitor is a first-time
// visitor from Consent Mode's point of view.
export default function ConsentDefaults() {
  return (
    <Script id="consent-defaults" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        window.gtag = gtag;

        gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'functionality_storage': 'granted',
          'security_storage': 'granted',
          'wait_for_update': 500
        });

        try {
          var stored = localStorage.getItem('cookie_prefs');
          if (stored) {
            var prefs = JSON.parse(stored);
            gtag('consent', 'update', {
              'analytics_storage': prefs.analytics === true ? 'granted' : 'denied'
            });
          }
        } catch (e) {}
      `}
    </Script>
  );
}
