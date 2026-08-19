# Silverton Publishing — Rebuild Scoping Plan

**Status:** Analysis only. No code has been changed. This document is the deliverable.
**Date:** 2026-08-19
**Decision context:** Silverton is hand-written static HTML with no build tooling. The 2026-08-19 cookie-consent audit (`_audit/COOKIE-CONSENT-AUDIT.md`) found no consent mechanism at all, no policy pages, no published contact address (since fixed independently — `legal@`/`privacy@silvertonpublishing.com` are now live), a `generate_lead` bug firing on every homepage visit, and the analytics relay missing from a third of articles — all symptoms of having no shared layout. This plan scopes a rebuild on the same Next.js stack as the Select properties, using GoldSilverSelect (`~/Projects/goldsilverselect`) as the reference pattern.

---

## Correction to the task premise

The task described GSS as rendering blog posts "from markdown with metadata supplied separately in a BlogPost object." That's half right. The metadata half is exactly correct — `src/lib/blog.ts` is a 377-line `BlogPost[]` array (`slug, title, tag, tagColor, excerpt, date, series?`) with no body content in it.

But there is no markdown anywhere in the GSS repo. Grepping for `.md` files under the app turns up nothing but docs (`CLAUDE.md`, audit files). Article bodies live as raw JSX — `React.ReactNode` — inline in a single 5,019-line file, `src/app/blog/[slug]/page.tsx`, in a `blogContent: Record<string, React.ReactNode>` object keyed by slug. There's no `remark`, no `gray-matter`, no markdown parser dependency at all. GSS's writer typed JSX directly (`<p>`, `<h2>`, `<ul><li>`, `<strong>`, curly-brace-escaped entities like `&ldquo;`) rather than markdown.

This changes the target format for Task 2, and it's good news, not bad: converting Silverton's existing HTML articles into inline JSX is a *more* mechanical, lower-loss conversion than HTML→Markdown would have been. Markdown can't natively express arbitrary inline formatting or forces lossy round-tripping; JSX is close enough to HTML that the conversion is close to 1:1 (see Task 2 below). The originally-mentioned markdown source drafts aren't needed as the conversion input — the live, published HTML is the more reliable source, since it reflects whatever editing happened after the drafts were written.

One more correction: the task text says "39 blog articles." The repo currently has **38** (`find blog -maxdepth 1 -iname "*.html" ! -iname index.html | wc -l` → 38). All counts below use 38.

---

## Task 1 — Inventory

### Pages (40 total)

| Category | Count | Notes |
|---|---|---|
| Homepage | 1 | `index.html` — unique, not a template instance |
| Blog index | 1 | `blog/index.html` — unique listing page, no search/filter JS |
| Blog articles | 38 | Template instances of one shape, with real structural drift (below) |

No other pages exist — no about, no contact, no policy pages.

### Article structural consistency

The 38 articles share one intended shape (`article-header` → `h1` → `article-meta` → `article-body` → footer block) but are **not** uniform in practice:

| Element | Present in |
|---|---|
| OpenGraph tags | 16 / 38 |
| Twitter Card tags | 0 / 38 |
| `select-admin-teal.vercel.app` analytics relay | 26 / 38 |
| `article-category` label | 32 / 38 |
| Legal-disclaimer paragraph | ~17–21 / 38 (exact-phrase-match dependent) |
| Book cross-promo (`book-cta`) block | 10 / 38, naming 11 distinct book titles |
| Inline `style=` attributes | 7 / 38 |
| Tables / embedded media | 0 / 38 |

No chronological "old template vs. new template" split explains this — `git log` on the deviating files shows scattered dates, not a phase boundary. The inconsistencies are the conversion risk the task asked about, and they're exactly what centralizing metadata in a `BlogPost[]` array fixes for free (see Task 2).

### Interactive behaviors

| Behavior | Lives in | Notes |
|---|---|---|
| MailerLite Universal embed | `index.html` `<head>` (`ml('account','2200212')`) + form div | Client-side third-party widget, no GSS equivalent |
| Signup success tracking | `index.html`, inline `<script>` at bottom | **Confirmed bug**: `MutationObserver` checks `form.querySelector('.ml-form-successBody')` for *existence*, not visibility — fires `generate_lead` (gtag + relay POST) on every homepage visit regardless of whether anyone actually submitted the form |
| Fade-in scroll reveal | `index.html`, `IntersectionObserver` at `threshold: 0.1` | Cosmetic only, no tracking |
| Read-completion tracking | Per-article `<script>` (e.g. `blog/contractor-agreement.html`) | Fires at 75% scroll depth: `gtag('event','blog_read_complete',...)` + `sendBeacon`/`fetch` to `select-admin-teal.vercel.app/api/track`. Present only where the relay script exists (26/38) |
| Mobile nav toggle | `index.html` only, inline `onclick` on `.mobile-menu-btn` | Absent from `blog/index.html` and article pages — a third nav variant, not shared |

### Assets

**None.** No image files, no icon files, no local font files anywhere in the repo. The entire design is typographic/CSS — Google Fonts loaded via `<link>` (Cormorant Garamond, Outfit, JetBrains Mono) plus a `:root` CSS custom-property palette. This is a genuine simplification for the rebuild: there's no asset pipeline to build.

### Design system (confirmed against code)

```css
--black: #0A0A0A;
--near-black: #111111;
--dark: #1A1A18;
--gold: #E2B960;
--gold-light: #F0D080;
--cream: #F5F0E8;
--body: #B8AFA3;
--dim: #9A8E82;
--faint: #6B6058;
--serif: 'Cormorant Garamond', Georgia, serif;   /* headlines */
--sans: 'Outfit', system-ui, sans-serif;          /* body */
--mono: 'JetBrains Mono', monospace;              /* mile markers */
```

More granular than the project notes' "black + gold" summary — 9 color tokens, not 2. The "mile marker" motif (`MILE MARKER 0/12/25/40/55/70`) is homepage-only, a section-divider device never used on blog pages — confirm it stays scoped that way in the rebuild.

---

## Task 2 — Content portability

### Verdict: mechanical, not manual — with the target corrected to JSX, not markdown

Every article is exactly the shape the task's additional context described: H1, H2 section headings, prose paragraphs, no tables, no embedded media. Inline styles appear on 7 of 38 (contradicting the "no inline styles" assumption, but low-risk — see below).

Converting to GSS's actual target shape means, per article:
1. Extract per-page `<title>`, meta description, canonical, and (where present) OG tags into a `BlogPost` entry in a new `src/lib/blog.ts`.
2. Lift the `article-body` inner HTML into a JSX fragment: `class=`→`className=`, self-close void tags, JSX-escape stray `{`/`}` and quotes, verify `<a>` targets carry `rel="noopener noreferrer"` where `target="_blank"` is used (GSS's convention).
3. Decide the disclaimer/book-cta question once, structurally, rather than per article (see below), then drop the per-article boilerplate.

### What doesn't map cleanly

- **7 articles with inline `style=` attributes** — need a manual look each, not because the conversion is hard but because someone has to judge whether the override was deliberate formatting or drift to be dropped in favor of the shared stylesheet.
- **Disclaimer vs. book-cta inconsistency** — up to ~17 articles have neither block. Recommend: the legal disclaimer becomes a **universal** element rendered by the shared article template (every article gets it, unconditionally — it's a compliance element, not editorial content), and book-cta becomes an **optional** `relatedBook` field on `BlogPost`, rendered only when set. This preserves the current editorial intent (not every article should promote a book) while guaranteeing the disclaimer never silently drops.
- **OG tags (22/38 missing), Twitter tags (38/38 missing), JSON-LD consistency** — none of this needs per-article authoring. GSS generates all of it programmatically from the centralized `BlogPost` metadata (`generateMetadata()` + a `schema` object built from `title`/`excerpt`/`date`). Once metadata is centralized, every one of the 38 articles gets uniform OG, Twitter Card, and `Article` JSON-LD automatically — this closes three of the audit's gaps as a side effect of the port, not as separate work.
- **The analytics relay gap (12/38 missing today)** — same story: once article rendering is centralized in one template component, the `blog_read_complete` relay call fires for all 38 by construction. No per-article decision needed.

### Effort estimate

| Work | Estimate |
|---|---|
| Per-article HTML→JSX conversion + metadata extraction (38 × ~18 min average) | ~11.5 hrs |
| Extra scrubbing on the 7 inline-style articles | ~2–3 hrs |
| Centralizing metadata into `blog.ts`, wiring the disclaimer/book-cta split | ~2 hrs |
| QA pass — diff rendered text content per article against live production | ~2 hrs |
| **Total** | **~17.5–20.5 hrs** |

This is an honest, not optimistic, estimate — it assumes the "known-consistent format, single author" framing holds (it does, structurally), but still budgets real time for 38 individual conversions and a real QA pass, not a bulk script-and-done treatment. No article is expected to need more than a spot-check; none of the 38 has a table, embedded media, or a structure so far outside the norm that it needs a rewrite rather than a conversion.

---

## Task 3 — Mapping to the Select stack

| Piece | Verdict | Notes |
|---|---|---|
| **Root layout** (`layout.tsx`) | Adapt | GSS mounts `ConsentDefaults` + `GoogleAnalytics` + `CookieConsent` once, globally — this pattern ports directly; only the `metadata` block (title/description/OG defaults) is Silverton-specific |
| **Header / Footer** | Build new | Silverton currently has **three different nav implementations** (homepage, blog index, article pages) — none is a clean source to port, and GSS's own `Header.tsx` has no mobile-menu pattern to copy either. Write one shared Header/Footer pair, styled with Silverton's existing CSS tokens (not GSS's Tailwind classes), collapsing 3 variants into 1 |
| **Blog index + article rendering** | Adapt | GSS's shape — `blogPosts.map()` for the index, `blogContent[slug]` + `generateStaticParams`/`generateMetadata` + a programmatically-built JSON-LD `schema` object for articles — is the right pattern. Restyle with Silverton's CSS, not GSS's Tailwind/inline-style mix |
| **`cookieConsent.ts`** | Port unchanged, minus `migrateLegacyConsent()` | That function only exists to migrate GSS's old bare-string `gs_cookie_consent` key. Silverton has never had any consent mechanism, so there's no legacy state to migrate — every visitor is a first-time visitor from the consent system's point of view |
| **`gaCookies.ts`** | Port unchanged | Generic cookie-domain-sweep helper, no GSS-specific values beyond the domain list, which needs `silvertonpublishing.com` added |
| **`ConsentDefaults.tsx`** | Port with ~11 lines removed | Strip the `gs_cookie_consent` legacy-fallback branch; the `beforeInteractive` consent-default script and returning-visitor re-grant logic port as-is |
| **`GoogleAnalytics.tsx`** | Port unchanged, swap ID | `GA_ID = "G-2MJWP1RMZX"` (confirmed — see below). Structure, `CONSENT_UPDATE_EVENT` listener, and cookie-cleanup-on-revoke logic are portfolio-generic |
| **`CookieConsent.tsx`** | Port unchanged, recolor | Banner/preferences-panel logic ports as-is; swap GSS's `#1E1E1E`/`#C5A44E` palette for Silverton's `--black`/`--gold` tokens |
| **`CookiePreferencesLink.tsx`** | Port unchanged | Trivial 18-line wrapper, zero GSS-specific content |
| **Policy pages** (privacy/terms/cookies) | Build new | GSS's three pages (118/173/134 lines) are dealer-directory boilerplate — not portable as content, only as a structural/section-heading template. Silverton needs its own privacy/terms/cookie-policy content reflecting its actual business (book sales, MailerLite list, affiliate/book links — not a dealer directory), using the now-live `legal@`/`privacy@silvertonpublishing.com` addresses |
| **`sitemap.ts` / `robots.ts`** | Adapt | GSS's sitemap pulls from `states`/`cities`/`dealers` arrays that don't apply. Silverton needs only the static-pages list + `blogPosts.map()` — a strict subset of the same pattern. `robots.ts` needs no `/api/` disallow (Silverton adds no API routes in this plan — MailerLite is client-side, the analytics relay is an external `sendBeacon`) |
| **MailerLite integration** | Adapt + bugfix | The embed itself (`ml('account','2200212')` + form div) is unaffected by the framework change — it just needs a `"use client"` wrapper. This is the natural point to fix the confirmed `generate_lead` bug: replace the existence-check (`querySelector('.ml-form-successBody')`) with a real state transition — either a visibility check or MailerLite's own success-event hook — so the event fires only on an actual submission |
| **`deploy.sh`** | Port unchanged | GSS's is 3 lines of substance (`git add -A && git commit && git push`) plus echoed URLs. Swap the printed URLs to `silvertonpublishing.com` / the `silverton-publishing` Vercel project |

**Design-system note:** GSS is Tailwind + inline `style={{}}` props layered on `globals.css`. Silverton's design is a hand-tuned CSS custom-property system. Recommend **not** converting Silverton's styling to Tailwind utilities — port the existing `:root` tokens and CSS classes into the new app's `globals.css` nearly verbatim. The task explicitly says design must be preserved; matching Silverton's own CSS is lower-risk than re-deriving it in Tailwind, and Tailwind can still be added for any genuinely new UI (the cookie banner) without touching what already works.

---

## Task 4 — Phased plan

| Phase | Ships | Verification |
|---|---|---|
| **0 — Scaffold** | Next.js app in-repo (branch), `globals.css` with Silverton's tokens ported near-verbatim, `layout.tsx`, `deploy.sh`, sitemap/robots skeletons. No content yet. | Blank-but-styled shell deploys to a Vercel **preview** URL; typography/color match source |
| **1 — Consent + analytics** | All 6 consent files, wired into `layout.tsx`, GA4 `G-2MJWP1RMZX` live | Same 6-point Playwright check used for the GSS migration this session: consent defaults denied, no pre-consent cookie, Accept → consent update fires → `_ga` cookie appears, second-page collect request carries the right `tid`/`gcs` |
| **2 — Policy pages** | Fresh privacy/terms/cookie-policy content, footer links, sitemap entries | Pages return 200; footer links present on every page; `legal@`/`privacy@` addresses correct |
| **3 — Homepage + shared Header/Footer** | Rebuilt homepage (mile markers, hero, sections, MailerLite embed with the `generate_lead` fix), one unified nav replacing 3 variants | Visual diff against live production homepage; manual end-to-end MailerLite signup test confirming `generate_lead` fires only on real success |
| **4 — Blog index + 38 articles** | Full content conversion per Task 2 | Per-article text-content diff (strip tags, diff old vs. new) across all 38; spot-check the 7 inline-style articles and every `relatedBook` assignment |
| **5 — Cutover** | Merge to `main`, promote to production | Pre-deploy SEO checklist (sitemap, canonical, JSON-LD validation, 200-not-redirect, no orphans) before promoting |

**Total estimate: ~33–42 hours**, realistically spanning several sessions — this is not a single-sitting task. Breakdown: Phase 0 ~3–4h, Phase 1 ~3–4h, Phase 2 ~3–4h (writing real legal content is slower than code), Phase 3 ~4–6h, Phase 4 ~17.5–20.5h (from Task 2), Phase 5 ~2h.

**What breaks or is unavailable during the transition:** nothing, if the rebuild is developed on a branch and verified entirely via Vercel preview deployments through Phase 4, with the current static site continuing to serve production traffic unchanged until a single atomic cutover in Phase 5. Avoid any partial/mixed deploy state.

**In-place vs. new repo — recommend in place**, i.e. the new Next.js app replaces the static files in this same repo, built on a branch. Reasons:
1. The production domain is already attached to this exact Vercel project (`silverton-publishing`, `prj_XfgrwUz6TzSVuloW2NpjPs9pcPEz`) — an in-place rebuild needs zero domain changes.
2. DNS just moved to Cloudflare today and has already settled (see below) — there's no reason to introduce a second domain-repointing event on top of that.
3. A separate new repo would only make sense if the goal were preserving the current static site as an immutable historical artifact, which nothing in this task indicates.

---

## Also requested

**GA4 measurement ID:** Confirmed — `G-2MJWP1RMZX`, matches both project notes and `CLAUDE.md`.

**Vercel project + domain configuration:** Project `silverton-publishing` (`prj_XfgrwUz6TzSVuloW2NpjPs9pcPEz`) under team `malulo2025s-projects`, production domain `silvertonpublishing.com` with `www.silvertonpublishing.com` also attached to the same project. Live DNS confirms the Cloudflare cutover is complete and working right now: `dig NS silvertonpublishing.com` returns `dave.ns.cloudflare.com` / `lady.ns.cloudflare.com`, and both apex and `www` resolve correctly to Vercel's edge (`76.76.21.21` / `cname.vercel-dns.com`). One cosmetic note: `vercel domains inspect` still shows the *old* GoDaddy nameservers (`ns77`/`ns78.domaincontrol.com`) with a mismatch indicator — that's Vercel's cached verification state, not a live problem, but worth a manual glance in the Vercel dashboard before the Phase 5 cutover in case Vercel wants the domain re-verified before a new deployment goes to production.

**Things we'd lose and should decide about, rather than drop silently:**
1. Three nav variants → one. Almost certainly correct, but note the blog-index page's missing mobile-menu button was never explained as intentional — treating unification as correct rather than preserving the gap.
2. The `generate_lead` false-positive bug — recommend fixing it now, independently of the rebuild timeline. It's corrupting live GA4 conversion data today, and the rebuild (33–42 hours across multiple sessions) is too slow a fix for a live data-integrity bug.
3. Twitter Card tags — never existed on any page. Recommend adding them project-wide during the port; they fall out of the same `generateMetadata()` call that already produces OG tags, at effectively zero marginal cost.
4. The 7 inline-style articles — don't blanket-decide; spot-check each during Phase 4 conversion to judge deliberate-formatting vs. drift.
5. Disclaimer/book-cta inconsistency — resolved above (disclaimer universal, book-cta optional per-article).
6. The mile-marker motif — nothing lost, just confirm it stays homepage-only in the rebuild, matching its current scope.
