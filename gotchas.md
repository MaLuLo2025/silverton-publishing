# Gotchas

Lessons logged per `CLAUDE.md` Sections 2 and 4. Review before starting related tasks.

## [Date] — [Short description]
- What went wrong:
- Root cause:
- Rule going forward:

---

## 2026-08-24 — Stale counts carried forward without re-verification
- What went wrong: Two figures were treated as ground truth across
  multiple tasks without checking them against the actual code —
  "5 orphaned blog articles" (turned out to be 0 when actually diffed
  against `src/lib/blog.ts` and `src/lib/blogContent/`), and "all 38
  blog articles" in `blog.ts`'s own header comment (actual count was
  40).
- Root cause: Both numbers were inherited from an earlier
  session/handoff and repeated as fact in later task instructions
  instead of being re-derived from the source each time. A count in a
  comment or a task brief is a snapshot, not a live value — it goes
  stale the moment the underlying data changes and nobody re-checks
  it.
- Rule going forward: Verify any specific count (articles, routes,
  entries, files) against the actual source before acting on it, even
  when the count is stated confidently in the task or in prior
  documentation. Prefer wording that can't go stale (e.g. "every blog
  article" instead of "all 38 blog articles") when a comment doesn't
  need to convey an exact number.

## 2026-10-26 — Literal ** in rendered post (bold wrapping a markdown link)
- What went wrong: The draft-to-JSX converter mishandled `**[text](url)** more text` list items, leaving literal `**` on the live deepfake-wire-fraud post. The build lint did not catch it; ~/scripts/check-rendered-markdown.sh did (3 hits) and a fix deploy (6296e42) was needed.
- Root cause: Bold regex ran after link extraction on the remaining text, so bold spans that contained a link were split across segments.
- Rule going forward: When converting markdown drafts to JSX, grep the output for a literal asterisk before building, and always run check-rendered-markdown.sh after deploy. Handle bold-wrapped links explicitly as strong around the anchor.
