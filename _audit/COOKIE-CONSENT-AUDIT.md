# Cookie Consent & Analytics Audit — SilvertonPublishing.com

Date: 2026-08-19. Read-only audit, no code changes. Verified against production
(`https://silvertonpublishing.com`) via Playwright with a clean browser profile,
plus direct inspection of the repo (`~/Projects/silverton-publishing`).

**Summary: there is no cookie consent mechanism of any kind on this site.** Not a
broken one, not a decorative one — none. GA4 fires unconditionally and sets
tracking cookies before any user interaction, on every page, with no banner, no
Consent Mode, no stored consent state, and no policy page to even describe what
the site does. This is a materially different (simpler, more exposed) starting
point than AS/FS/GSS, which all had a banner that looked functional but didn't
enforce anything. Silverton has nothing to disable — a first implementation, not
a fix.

One unrelated but concrete bug was found in the course of this audit and is
reported separately at the end: the homepage's `generate_lead` conversion event
fires on every visit, not just real newsletter signups.

---

## Task 1 — Analytics inventory

### 1.1 — GA4 measurement ID

Confirmed: `G-2MJWP1RMZX`, matching the expected ID. Verified three ways:
- Present in every `.html` file's `<head>` (`grep` across the repo).
- Served in production HTML (`curl`-equivalent via Playwright page load).
- Live collect requests captured with `tid=G-2MJWP1RMZX`.

No other measurement ID appears anywhere in the codebase.

### 1.2 — Rollout coverage

**GA4 script tags: present on all 40 HTML files** (homepage, `blog/index.html`,
and all 38 article pages) — confirmed via `grep -rl "gtag" --include="*.html" .`
matching every file `find` returns. This part of the rollout is complete; no
page is missing the base GA4 tag.

**A second tracking mechanism is not uniformly present**, though. Two custom
events exist, wired via a shared relay to `select-admin-teal.vercel.app/api/track`
(the same pattern AS/FS/GSS use):

- `generate_lead` — homepage only, tied to the MailerLite newsletter form.
- `blog_read_complete` — fires at 75% scroll depth on article pages.

The relay script (`select-admin-teal.vercel.app`) appears in **27 of 40 files**.
The 13 without it: `blog/index.html` (expected — it's a listing page, not an
article, so neither event applies) and **12 individual article pages**:

```
blog/ai-tools-small-business-legal.html
blog/business-insurance-types-guide.html
blog/business-succession-planning.html
blog/how-to-handle-eeoc-complaint.html
blog/how-to-legally-terminate-employee.html
blog/intellectual-property-basics-entrepreneurs.html
blog/llc-to-s-corp-conversion.html
blog/obbba-small-business-owners.html
blog/operating-agreement-vs-shareholder-agreement.html
blog/qsbs-qualified-small-business-stock.html
blog/scorp-vs-ccorp-when-to-switch.html
blog/year-end-tax-planning-small-business.html
```

This is not old content that predates the feature. The relay was wired
2026-04-07 (`973473e` / `ea99f30`). Checked git history for these files
specifically — they were all added or last modified **after** that date (June
25 through August 9, 2026). The relay/event-tracking snippet is simply not
being added consistently to new articles going forward — an ongoing process
gap, not a one-time historical artifact.

### 1.3 — Other tracking / third-party scripts

Full inventory, by domain contacted (captured via live network trace, both
homepage and an article page):

| Domain | Purpose | Pages |
|---|---|---|
| `www.googletagmanager.com` | GA4 (gtag.js) | all 40 |
| `www.google-analytics.com` | GA4 collect endpoint | all 40 (fires at runtime) |
| `select-admin-teal.vercel.app` | Custom event relay (`generate_lead`, `blog_read_complete`) | 27 of 40 files |
| `assets.mailerlite.com`, `assets.mlcdn.com`, `groot.mailerlite.com`, `static.mailerlite.com`, `fonts.mailerlite.com` | MailerLite Universal — newsletter signup embed | **homepage only** (1 file) |
| `fonts.googleapis.com`, `fonts.gstatic.com` | Google Fonts | all pages |

No heatmap, session-recording, ad pixel, or social-widget script anywhere in
the codebase — checked for Hotjar, FullStory, Microsoft Clarity, Meta
Pixel/fbevents, DoubleClick, Criteo, Segment, Amplitude, Mixpanel, Intercom,
Drift, HubSpot, and embedded YouTube/Vimeo/Twitter widgets. Zero matches (one
false-positive grep hit on the word "intercompany" in an unrelated legal
article, not a script).

MailerLite is the one third-party vendor besides Google that AS/FS/GSS don't
have — it's Silverton-specific (newsletter capture for the book series), not
part of the shared Select-property stack.

### 1.4 — Cookies set

Captured via live browser trace, both pages, clean profile, zero interaction:

| Cookie | Set by | Purpose | Attributes observed |
|---|---|---|---|
| `_ga` | GA4 (gtag.js) | Client ID, cross-session visitor identifier | Standard GA4 first-party cookie |
| `_ga_2MJWP1RMZX` | GA4 (gtag.js) | Session state (GA4 property-specific) | Standard GA4 first-party cookie |

No consent cookie exists (there's nothing to store — no consent mechanism).
No MailerLite-specific cookie was observed in this test session, though
MailerLite's own client library may set one on actual form interaction — not
verified here since no interaction was performed on either test page (the
audit is about pre-consent behavior, and MailerLite's own cookie policy is
outside this repo's control).

---

## Task 2 — Consent handling

### 2.1 — Is there a cookie consent banner?

**No.** Confirmed by direct code search: the string `"cookie"` (case-insensitive)
does not appear anywhere in any `.html` file on the site. No banner markup, no
consent modal, no "Manage preferences" link, nothing. Confirmed again in the
live browser trace — no DOM element on either test page mentions the word
"cookie," and no Reject/Decline control exists to test against (Task 3 below).

### 2.2 — Is consent stored anywhere?

**No.** No `localStorage` usage anywhere in the codebase (`grep -rn
"localStorage"` returns zero matches across all `.html` files). No
consent-related cookie is set by the site itself. There is no key, no shape,
nothing to document — there's no consent state because there's no consent UI
to produce one.

### 2.3 — Is Google Consent Mode used?

**No.** No `gtag('consent', ...)` call anywhere in the codebase — the only
"consent" string matches in the entire site are unrelated legal-content uses
(contractual consent, shareholder consent, EEOC settlement consent decrees) in
article bodies. Confirmed empirically too: every live collect request
captured has **no `gcs` parameter in the URL at all** — not `gcs=G100`
(denied-default, what Consent Mode sends when nothing's been decided), literally
absent, because Consent Mode was never initialized to produce one.

### 2.4 — Does anything gate GA4 loading?

**No — it fires completely unconditionally.** The `<script async src=".../gtag/js?id=G-2MJWP1RMZX">`
tag and the inline `gtag('config', ...)` call are unconditional in every
file's `<head>`, with no wrapping condition, no deferred/consent-triggered
load, nothing. This is the exact "loads unconditionally" starting state AS,
FS, and GSS were all fixed from — except those three at least *had* a banner
UI (that happened to enforce nothing). Silverton doesn't have the banner
either.

---

## Task 3 — Empirical verification (Playwright, clean profile, production)

### Homepage (`https://silvertonpublishing.com`)

- `_ga` / `_ga_2MJWP1RMZX` cookies: **present immediately**, before any
  interaction (`_ga=GA1.1.1319957025.1787161310`, session cookie alongside it).
- Collect requests fired before any interaction: **2** —
  - `tid=G-2MJWP1RMZX gcs=(absent) en=page_view`
  - `tid=G-2MJWP1RMZX gcs=(absent) en=generate_lead` — see the bug writeup
    below; this second one is not supposed to fire without a real signup.
- No banner exists, so there is no Reject/Decline control to test. Confirmed
  directly: no element on the page mentions "cookie," and no button matching
  Reject/Decline text exists in the DOM.

### Article page (`https://silvertonpublishing.com/blog/contractor-agreement.html`)

- `_ga` / `_ga_2MJWP1RMZX` cookies: present (shared browser context/session
  with the homepage test — same client ID carried over, as expected for GA4).
- Collect request: fires quickly — `en=page_view`, `gcs=(absent)`,
  `tid=G-2MJWP1RMZX`, observed at **+636ms** after page load in a clean,
  single-page test. (An earlier combined test run under-counted this because
  the wait window was too short while the browser was still finishing up work
  from the homepage test in the same run — re-verified in isolation and it
  fires promptly and reliably.) Worth noting for context, not as a Silverton
  bug: the sibling Select-property audit found a **~5.3 second** delay before
  the equivalent collect request on GSS/FS, tied to their `wait_for_update:
  500` Consent Mode setting. Silverton has no such setting, and correspondingly
  no such delay — the absence of Consent Mode removes the delay along with the
  consent enforcement.

**Both pages behave identically: cookies set and a collect request sent
before any user action, no difference from having no consent mechanism at
all** (because there is none).

---

## Task 4 — Policy pages

### 4.1 — Does a privacy policy, cookie policy, or terms page exist?

**No.** No file matching `privacy`, `terms`, `cookie`, or `legal` exists in
the repo (the four filename hits from a broad search were all blog article
slugs about employment/business law — `how-to-fire-an-employee-legally.html`,
`ai-tools-small-business-legal.html`, etc. — not policy pages). No `href` to
any such page appears anywhere in the site's HTML. Not in `sitemap.xml`. Not
linked from the footer — the footer has exactly three links: `#series`,
`#faq`, and `blog/`.

### 4.2 / 4.3 — What policy pages claim, and what the implementation doesn't deliver

Not applicable — there's no policy page to make claims, so there's nothing to
compare against the code. This is actually a cleaner (if more exposed) problem
than GSS's, where a real policy page described three consent categories and a
consent cookie that never existed in code. Silverton's site currently makes
**zero written representation** about cookies or tracking to visitors at all.

### 4.4 — Published contact address

**None.** Zero email addresses appear anywhere in the site's HTML — no
`mailto:` links, no plain-text email addresses in any page, including the
footer. `legal@silvertonpublishing.com` and `privacy@silvertonpublishing.com`
(created today via Cloudflare Email Routing, per the task) are **not**
published anywhere on the live site. Whatever contact channel eventually
backs a privacy/cookie policy will need to be added to the site itself — it
doesn't exist today, correct or otherwise.

---

## Task 5 — Portability assessment

The Select-property Consent Mode v2 implementation, file by file, and what
porting each piece to static HTML actually requires:

| File | Lines | React-specific? | Port complexity |
|---|---:|---|---|
| `src/lib/gaCookies.ts` | 50 | No — pure DOM/cookie API calls, `.ts` only for types | **Trivial.** Strip type annotations, ship as a `<script>` include. Logic is 100% portable as-is. |
| `src/lib/cookieConsent.ts` | 95 | Minimal — uses `CustomEvent`/`window.dispatchEvent`, which work identically outside React | **Trivial-to-easy.** Same treatment as above. The one thing to drop: the `useEffect`-triggered event-listener *pattern* is React idiom, but the underlying `window.addEventListener(CONSENT_UPDATE_EVENT, ...)` call itself is vanilla and unaffected. |
| `src/components/ConsentDefaults.tsx` | 61 | Superficially — it's a Next.js `<Script strategy="beforeInteractive">` wrapper, but the *payload* is already a plain inline `<script>` block of vanilla JS (the whole point of `beforeInteractive` is that it doesn't touch React state) | **Trivial.** The inline script content ports verbatim. What doesn't port is the Next.js *guarantee* — see below. |
| `src/components/GoogleAnalytics.tsx` | 88 | Yes — `useEffect`, `next/script`, JSX return | **Easy.** The two `<Script>` tags become two plain `<script>` tags; the `useEffect` consent-listener becomes a plain `window.addEventListener` call at the bottom of an IIFE, same as the site's existing `blog_read_complete` snippet style. |
| `src/components/CookieConsent.tsx` | 211 | Yes, substantially — `useState` × 3, conditional JSX rendering for banner/preferences-panel, controlled checkbox | **Moderate.** This is the real work. Every `useState` becomes a manually-managed JS variable plus manual DOM show/hide (`element.style.display`) instead of React's declarative re-render. The two-panel UI (banner vs. preferences) needs to become two actual DOM subtrees toggled by class/style, not conditionally-rendered JSX. Still fundamentally simple imperative DOM manipulation — no framework needed to replace it — but it's hand-written state management instead of `useState`, and that's real code, not a mechanical find-replace. |
| `src/components/CookiePreferencesLink.tsx` | 18 | Yes, but trivially — one `onClick` handler | **Trivial.** Becomes `<button onclick="openCookiePreferences()">`. |

### What genuinely doesn't survive the translation

1. **The `beforeInteractive` ordering guarantee.** On the Select properties,
   Next.js's `<Script strategy="beforeInteractive">` guarantees the consent
   defaults script is injected into the HTML and *executes* before
   `afterInteractive` scripts (including gtag.js) even start. On a static HTML
   site, this becomes "whichever `<script>` tag is physically first in the
   file" — which is a real guarantee too (browsers execute non-async,
   non-deferred inline/synchronous scripts in document order), but it has to
   be maintained by hand, per file, forever. Every one of the 39 article pages
   (and any future ones) needs the consent-defaults script literally
   positioned before the gtag.js `<script>` tag in the markup, with no
   framework to enforce it. This is exactly the kind of thing that already
   silently drifted once on this site (the `select-admin-teal.vercel.app`
   relay missing from 12 recent articles) — the same failure mode is the
   biggest risk to a static-HTML port specifically.

2. **One shared component, N copies of the markup.** GSS renders
   `<ConsentDefaults />` and `<GoogleAnalytics />` once, in one `layout.tsx`,
   and every route gets it automatically — that's the entire point of the
   Next.js layout system. Static HTML has no include mechanism at all (no
   server-side includes, no build step in this repo). The realistic options,
   honestly assessed:
   - **Copy the same `<script>` block into all 39 files by hand/find-replace.**
     Works, but it's the same pattern that already produced the current
     12-file gap for the relay script — every future article is one manual
     step away from silently missing consent enforcement, exactly as it's one
     manual step away from silently missing the tracking relay today.
   - **Add a lightweight build step** (even something as small as a Node
     script that injects a shared `<head>` partial into each `.html` file at
     deploy time, or switching `blog/*.html` generation to a static-site
     generator). This is the only way to get the same one-source-of-truth
     guarantee Next.js gives GSS for free. It's a bigger lift than the
     component-porting work itself — this repo currently has *zero* build
     tooling (no `package.json`, no build script; it's committed HTML files
     deployed as-is), so introducing one is a real, separate decision, not a
     footnote.
   - **A single external `<script src="/consent.js">` file**, referenced
     identically from every page (the way `gtag.js` itself is already
     referenced). This is the cheapest real option: one canonical JS file
     living at the repo root, one `<script src="/consent.js" defer>` (or
     rather, non-deferred and positioned early, per the ordering point above)
     tag added to all 39 pages. Doesn't need a build step, doesn't need
     copy-pasted logic, and is the closest static-HTML equivalent to what
     Next.js's shared layout gives GSS. Still requires touching every existing
     file once, and still relies on manual discipline for new articles unless
     paired with a documented CLAUDE.md rule (the CLAUDE.md already has a
     precedent for this exact kind of requirement: "GA4 ID... must be present
     on every page").

3. **No CSP to worry about.** One point of relief: unlike the Select
   properties, this repo has no `vercel.json`, no CSP headers, and no
   `next.config.js` at all — confirmed via direct inspection. There's nothing
   to update or accidentally break by adding a consent script; the
   CSP-blocks-analytics failure mode documented on the Select properties
   doesn't apply here.

### Honest estimate

Porting the *logic* (gaCookies, cookieConsent, the GA4 wrapper, the
consent-defaults inline script) is genuinely small — well under an hour of
mechanical translation, since none of it is deeply React-dependent to begin
with. **The real work is the banner/preferences-panel UI** (moderate, a few
hours of hand-written imperative DOM code replacing what `useState` + JSX
gives for free) **and deciding how a single shared script gets included
across 39 static files without a build step** — that second question is an
architectural decision for this repo, not a mechanical port, and it's the
piece most likely to be underestimated if this is scoped as "just copy the
Select-property pattern."

---

## Separately flagged: `generate_lead` fires without a real signup

Found in the course of Task 3's empirical testing, not part of the original
consent-audit scope, but concrete and worth reporting alongside it.

**Every homepage visit fires a `generate_lead` GA4 event and a beacon to
`select-admin-teal.vercel.app`, regardless of whether the visitor ever
submits the newsletter form.** Reproduced 3 times in a row, clean profile,
zero interaction with the page.

Root cause, confirmed by direct inspection: `index.html`'s tracking snippet
(lines 767–791) watches the MailerLite embed via `MutationObserver` and fires
the lead event as soon as `form.querySelector('.ml-form-successBody')` finds
a match — but MailerLite's form template ships that element in the DOM
**always**, hidden via `display: none`, as static boilerplate (confirmed:
`.ml-form-successBody` is present with `display: none` and its real
"Thank you! You have successfully joined..." text, on a completely untouched
page load). The moment MailerLite's async script finishes rendering the form
— itself a DOM mutation that triggers the observer's callback — the
`querySelector` check passes, because it's checking *existence*, not
*visibility* or any actual submission signal.

Effect: `generate_lead` as a GA4 key event, and every count/dashboard fed by
the `select-admin-teal.vercel.app` relay, is currently reporting one "lead"
per homepage pageview, not per actual newsletter signup. Not something this
audit was asked to fix — flagging because it's a real, currently-live data
integrity issue immediately adjacent to what Task 1.3 asked to inventory.
