import CookiePreferencesLink from "./CookiePreferencesLink";

// Single shared footer, replacing the static site's per-page-type footer
// (which only ever had 3 links: #series, #faq, blog/, and no policy pages
// to link to since none existed). Structure follows the Select portfolio's
// footer pattern (brand + link columns + legal notice), adapted to
// Silverton's actual content — no "Financial Disclaimer" block, since this
// is a legal/business publisher, not a precious-metals directory.
const columns = [
  {
    title: "Explore",
    links: [
      { label: "The Series", href: "/#series" },
      { label: "Road Map", href: "/#road-map" },
      { label: "Author", href: "/#author" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Silverton Publishing</div>
          <p className="footer-copy">&copy; 2026 Silverton Publishing. All rights reserved.</p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="footer-links" style={{ flexDirection: "column", gap: 8 }}>
            {col.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
            {col.title === "Company" && <CookiePreferencesLink />}
          </div>
        ))}
      </div>
      <div className="footer-legal">
        <p>
          Silverton Publishing content, including the Million Dollar Highway series and
          this site&apos;s blog, is provided for general educational purposes only and does
          not constitute legal, tax, or financial advice. No attorney-client relationship
          is formed by using this site. Consult a licensed attorney or qualified professional
          for advice specific to your situation.
        </p>
      </div>
    </footer>
  );
}
