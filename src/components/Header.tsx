"use client";

// Single shared header, replacing the current static site's three divergent
// nav implementations (homepage: 5 links + working... except the mobile
// button had no CSS behind it; blog index: same 5 links but with "Real
// Advice" repurposed to mean "this page" instead of the FAQ section;
// article pages: a bare two-link nav with none of the styling). Normalized
// here to the homepage's fuller shape, fixed to work from any page (hash
// links are absolute — "/#section" — not relative), with "Real Advice" kept
// pointing at the FAQ section everywhere, and a proper Blog link added
// (previously only reachable from the footer, not the nav, on any page).
const navItems = [
  { label: "The Series", href: "/#series" },
  { label: "Road Map", href: "/#road-map" },
  { label: "Real Advice", href: "/#faq" },
  { label: "Author", href: "/#author" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <nav>
      <a href="/" className="nav-brand">
        Silverton
      </a>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
        <li>
          <a href="/#signup" className="nav-cta">
            Get Notified
          </a>
        </li>
      </ul>
      <button
        className="mobile-menu-btn"
        onClick={() => document.querySelector(".nav-links")?.classList.toggle("show")}
        aria-label="Menu"
      >
        &#9776;
      </button>
    </nav>
  );
}
