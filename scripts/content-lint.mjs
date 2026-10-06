// Content lint: scans blog article content (src/lib/blogContent/*.tsx, which
// includes the in-article FAQ blocks) plus the title/excerpt lines of
// src/lib/blog.ts. Runs from package.json "prebuild"; exit 1 on any hit.
// Exceptions live in content-lint.allow.json: {file, pattern, contains, reason}
// where "pattern" is a rule id below and "contains" is a short exact substring
// of the allowed line.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const RULES = [
  // a. self-claims about our directory or listings
  { id: "self-claim-verified", re: /verified (dealer|provider|listing|directory)s?/i },
  { id: "self-claim-we-verify", re: /\bwe (verify|vet|screen)\b/i },
  { id: "self-claim-vetted", re: /\bvetted\b/i },
  { id: "self-claim-trusted", re: /\b(trusted|top-rated) (dealer|provider|shop|specialist)s?/i },
  // b. nothing renders below articles that this phrase could describe
  { id: "directory-below", re: /directory below/i },
  // c. markdown tables
  { id: "markdown-table", re: /^\s*\|.*\|\s*$/ },
  // d. emphasis inside link text
  { id: "emphasis-in-link-text", re: /\[[^\]]*[*_][^\]]*\]\(/ },
  // e. Silverton: no invented client matters
  { id: "client-anecdote", re: /\b(a |one of )?(client|clients) of ours\b/i },
  { id: "client-anecdote", re: /\bour client\b/i },
  { id: "client-anecdote", re: /\bwe (represented|advised)\b/i },
  { id: "client-anecdote", re: /\bmy client\b/i },
  { id: "client-anecdote", re: /\bI represented\b/i },
  { id: "client-anecdote", re: /\ba client (called|came|asked) me\b/i },
  // e. Silverton: no pre-launch book references in body prose
  { id: "book-reference", re: /\bChapter \d+ of\b/ },
  { id: "book-reference", re: /\bthe book\b/i },
];

const allow = existsSync(join(root, "content-lint.allow.json"))
  ? JSON.parse(readFileSync(join(root, "content-lint.allow.json"), "utf8"))
  : [];

const files = [];
const contentDir = join(root, "src/lib/blogContent");
for (const f of readdirSync(contentDir).sort()) {
  if (f.endsWith(".tsx") || f.endsWith(".ts")) files.push({ rel: `src/lib/blogContent/${f}`, all: true });
}
files.push({ rel: "src/lib/blog.ts", all: false });

const allowed = (file, rule, line) =>
  allow.some((a) => a.file === file && a.pattern === rule && line.includes(a.contains));

let hits = 0;
for (const { rel, all } of files) {
  const lines = readFileSync(join(root, rel), "utf8").split("\n");
  lines.forEach((line, i) => {
    // blog.ts: only title/excerpt are prose; category and relatedBook are exempt.
    if (!all && !/^\s*(title|excerpt):/.test(line)) return;
    for (const { id, re } of RULES) {
      const m = line.match(re);
      if (m && !allowed(rel, id, line)) {
        hits++;
        console.error(`${rel}:${i + 1} [${id}] ${m[0].trim()}\n    ${line.trim().slice(0, 200)}`);
      }
    }
  });
}

if (hits) {
  console.error(`\ncontent-lint: ${hits} hit(s). Fix the content, or add an allowlist entry with a reason.`);
  process.exit(1);
}
console.log(`content-lint: clean (${files.length} files scanned)`);
