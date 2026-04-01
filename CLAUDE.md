# Claude Code Playbook

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
  components/     # Reusable UI components
  pages/          # Route-level views
  hooks/          # Custom React hooks
  utils/          # Pure helper functions
  constants/      # App-wide constants and config
  styles/         # Global styles / tokens
references/       # Specs, mockups, design notes
scripts/          # Build or automation scripts
gotchas.md        # Ongoing lessons learned
```

Structure improves reasoning quality — keep it consistent.

---

## 8. Avoid Over-Constraining

- Provide context, not micromanagement
- Let the problem dictate the solution shape
- Flexibility > rigid step-by-step instructions
- Trust the plan; don't re-litigate during execution
