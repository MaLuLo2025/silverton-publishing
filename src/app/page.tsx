import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Phase 0 placeholder homepage. Real content (series overview, road map,
// FAQ, author, signup sections — with the MailerLite embed and its fixed
// generate_lead tracking) lands in Phase 3 per docs/REBUILD-PLAN.md. This
// page exists only to prove the design tokens, fonts, and shared
// Header/Footer render correctly end to end.
export default function HomePage() {
  return (
    <>
      <Header />

      <header className="hero">
        <div className="hero-mile">MILE MARKER 0 &middot; STARTING POINT</div>
        <h1>The Million Dollar Highway</h1>
        <p className="hero-subtitle">
          An Entrepreneur&apos;s Guide to Starting, Managing, and Exiting Your Business
        </p>
        <p className="hero-series">The Silverton Publishing Business Book Series &middot; 12 Volumes</p>
        <a href="#" className="cta-btn">
          Get Notified at Launch
        </a>
      </header>

      <section>
        <div className="section-mile">MILE MARKER 12 &middot; THE JOURNEY</div>
        <h2 className="section-headline">Series content lands in Phase 3</h2>
        <p style={{ fontSize: 17, lineHeight: 1.8, maxWidth: 640 }}>
          This is a Phase 0 skeleton page &mdash; it exists to verify the design
          tokens, typography, header, and footer render correctly before any
          real content is ported over.
        </p>
      </section>

      <Footer />
    </>
  );
}
