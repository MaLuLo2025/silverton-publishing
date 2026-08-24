# Claude Code Playbook

## Shared Conventions
Authoritative shared conventions for all Select properties live at
`../CONVENTIONS.md`. This file documents only property-specific overrides
or details. Do not duplicate shared conventions here; update
`CONVENTIONS.md` instead and propagate as needed.

`deploy.sh` was updated 2026-08-24 to `../CONVENTIONS.md`'s deploy-script
standard (branch check, blocklist guard, fetch-and-verify push guard —
AestheticSelect's implementation, reused verbatim; explicit-stage-only was
already this script's behavior). Also added a `package.json` existence
check: this repo is Next.js (`next.config.js`, `next` 14.2.35, `src/`),
matching the SEO Standards section below (corrected 2026-08-24).

## File Output
All generated files for this project go to `~/Claude Files/silverton-publishing/` — never `~/Downloads/`.

## 1. Plan Mode Default

For any non-trivial task (3+ steps, new components, refactors, or architecture decisions):

- **Always enter plan mode first** — lay out the approach before writing a single line
- Define both execution steps AND verification steps upfront
- Write enough detail to remove ambiguity
- Once the plan is approved, execute freely without interrupting

If something breaks mid-execution → stop, re-plan, don't patch forward blindly.

---

## 2. Task Management

For every task:

1. Plan first → write out steps with a checklist
2. Verify approach before execution
3. Track progress continuously (check off steps)
4. Explain changes at each meaningful step
5. Document results clearly when done
6. Capture lessons after completion → log to `gotchas.md`

---

## 3. Verification Before Done

**Never mark a task complete without proof.**

- Visually confirm UI changes render correctly
- Check browser console for errors
- Test interactive states (hover, focus, loading, error, empty)
- Compare expected vs actual behavior
- Ask: "Would a senior frontend engineer approve this?"

---

## 4. Error Logging / Self-Improvement Loop

- After any mistake → log it to `gotchas.md` at project root
- Convert mistakes into rules, not just fixes
- Review `gotchas.md` before starting related tasks
- Iterate until error rate drops

### `gotchas.md` format:
```
## [Date] — [Short description]
- What went wrong:
- Root cause:
- Rule going forward:
```

---

## 5. Core Coding Principles

- **Simplicity First** → minimal, clean solutions; no over-engineering
- **Root Cause over Symptoms** → never patch surface errors; fix what's underneath
- **No Lazy Fixes** → if it's wrong, fix it properly
- **Verification > Generation** → running and confirming beats shipping fast
- **Iteration > Perfection** → ship clean increments, improve continuously

---

## 6. Frontend-Specific Standards

- Prefer semantic HTML — use the right element for the job
- CSS: utility-first (Tailwind) or scoped modules — no global soup
- Components should do one thing well; split early
- Handle all states: loading, error, empty, populated
- Accessibility is not optional — keyboard nav and ARIA where needed
- No hardcoded magic values — use design tokens or constants

---

## 7. File Structure Conventions

```
src/
  app/            # App Router — routes live here, not pages/
    layout.tsx    # Root layout (metadataBase, global chrome)
    page.tsx      # Homepage
    sitemap.ts    # Dynamic sitemap.xml route handler
    robots.ts     # Dynamic robots.txt route handler
    blog/         # /blog — index page + [slug] dynamic route
    privacy/, terms/, cookies/   # Static legal pages
  components/     # Reusable UI components (Header, Footer, CookieConsent, etc.)
  lib/            # Non-component logic
    blog.ts       # Blog post metadata (blogPosts array)
    blogTypes.ts  # Shared TypeScript types
    blogContent/  # Article body content, split into batch-N.tsx files
gotchas.md        # Ongoing lessons learned
```

Structure improves reasoning quality — keep it consistent.

---

## 8. Avoid Over-Constraining

- Provide context, not micromanagement
- Let the problem dictate the solution shape
- Flexibility > rigid step-by-step instructions
- Trust the plan; don't re-litigate during execution

---

## 9. SEO Standards

This project must follow **Section 20 (SEO Foundation)** of the global `~/.claude/CLAUDE.md`. Read it before any content addition or template change.

Project-specific notes:
- This is a Next.js 14 (App Router) site — canonical tags are set via
  `alternates.canonical` in each route's exported `metadata` (or
  `generateMetadata`), with `metadataBase` set once in `src/app/layout.tsx`
- Canonical hostname: `silvertonpublishing.com` (apex, no www)
- `sitemap.xml` and `robots.txt` are dynamic Next.js route handlers
  (`src/app/sitemap.ts`, `src/app/robots.ts`) — the sitemap's blog entries
  are derived from `blogPosts` in `src/lib/blog.ts`, so a new post is
  picked up automatically; only non-blog static pages need a manual entry
  in `sitemap.ts`'s `staticPages` list
- Every blog post must include `Article` JSON-LD schema in the `<head>`
- Title suffix convention: `| Silverton Publishing` (NOT "Million Dollar Highway")
- GA4 ID: `G-2MJWP1RMZX` — must be present on every page
- New blog posts must be added to `blogPosts` in `src/lib/blog.ts` — the
  blog index (`src/app/blog/page.tsx`) and the sitemap both render from
  that same array, so a post added there is automatically linked and
  indexed; never orphan pages

---

## 10. Working Practices

Debugging discipline (three-hypothesis checkpoint) and verification tooling
(Playwright element handles) are in `../CONVENTIONS.md`. No property-specific
override for this project.
