// Shared cookie-consent storage schema + gtag Consent Mode v2 mapping.
// Ported from the Select portfolio (goldsilverselect/src/lib/cookieConsent.ts) —
// same schema and enforcement pattern, kept identical across properties on
// purpose. Silverton never had any consent mechanism before this, so unlike
// the Select properties' versions of this file, there is no legacy-key
// migration here — every visitor is a first-time visitor as far as consent
// storage is concerned.

export type ConsentState = "pending" | "accepted" | "rejected" | "custom";

export interface CookiePreferences {
  essential: boolean; // always true
  analytics: boolean;
}

export const DEFAULT_PREFS: CookiePreferences = {
  essential: true,
  analytics: false,
};

const CONSENT_KEY = "cookie_consent";
const PREFS_KEY = "cookie_prefs";

// Dispatched by saveConsent() whenever the user's choice changes.
// GoogleAnalytics.tsx listens for this to call gtag('consent', 'update', ...)
// without requiring a page reload.
export const CONSENT_UPDATE_EVENT = "cookie_consent_update";

// Dispatched by the footer "Cookie Preferences" link. CookieConsent.tsx
// listens for this to reopen itself directly into the preferences panel,
// pre-populated with whatever is currently saved.
export const OPEN_PREFERENCES_EVENT = "open_cookie_preferences";

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentState | null;
}

export function getStoredPrefs(): CookiePreferences {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  try {
    const stored = localStorage.getItem(PREFS_KEY);
    if (stored) return { ...DEFAULT_PREFS, ...JSON.parse(stored) };
  } catch {
    // Malformed stored value — fall back to defaults rather than throw.
  }
  return DEFAULT_PREFS;
}

export function saveConsent(state: ConsentState, prefs: CookiePreferences): void {
  localStorage.setItem(CONSENT_KEY, state);
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATE_EVENT, { detail: { state, prefs } })
  );
}

export function openPreferences(): void {
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

// Consent Mode v2 payload for a given preferences object. functionality_storage
// is not user-gated — it's granted unconditionally in ConsentDefaults and never
// revisited here, since essential site functionality isn't a consent choice.
export function prefsToConsentUpdate(prefs: CookiePreferences) {
  return {
    analytics_storage: prefs.analytics ? "granted" : "denied",
  } as const;
}
