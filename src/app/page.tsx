import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MailerLiteSignup from "@/components/MailerLiteSignup";
import FadeInObserver from "@/components/FadeInObserver";

// Phase 3: full homepage content, ported from index.html. The FAQ preview
// section links to 8 of the 38 blog articles (Phase 4) by slug, matching
// the current static site's selection.
const volumes = [
  { num: "VOL 01", title: "Business Structure & Jurisdiction", tag: "How to form, where to form, and how to protect what you build" },
  { num: "VOL 02", title: "Contracts & Legal Foundations", tag: "Every clause, every deal, every risk — decoded" },
  { num: "VOL 03", title: "Tax Planning & Accounting", tag: "Keep more of what you earn; survive every audit" },
  { num: "VOL 04", title: "Business Insurance & Risk Management", tag: "What to carry, what to avoid, how to protect everything" },
  { num: "VOL 05", title: "Building Your Team", tag: "Classification, hiring, compensation, and the legal foundation" },
  { num: "VOL 06", title: "Managing Your Team", tag: "Performance, discipline, complaints, and termination without lawsuits" },
  { num: "VOL 07", title: "Technology, AI & Digital Business", tag: "Build, protect, and scale a digital business legally" },
  { num: "VOL 08", title: "Intellectual Property", tag: "What you own, how to protect it, what to do when it's stolen" },
  { num: "VOL 09", title: "Business Financing", tag: "Debt, collateral, lenders, and the loan you can actually get" },
  { num: "VOL 10", title: "Buying a Business", tag: "Due diligence, deal structure, financing, and integration" },
  { num: "VOL 11", title: "Selling Your Business", tag: "Timing, valuation, buyers, taxes, and closing" },
  { num: "VOL 12", title: "Offshore Business, Tax Havens & International Trusts", tag: "Kendall Mountain, Silverton." },
];

const faqPreview = [
  { slug: "contractor-agreement", category: "Contracts & Legal Foundations", title: "What Actually Belongs in an Independent Contractor Agreement", excerpt: "The IRS reclassifies thousands of independent contractors as employees every year. The difference between a legitimate 1099 relationship and a misclassification disaster often comes down to whether your contractor agreement includes the right clauses." },
  { slug: "tax-deductions", category: "Tax Planning & Accounting", title: "Business Tax Deductions Most Small Businesses Miss", excerpt: "The difference between an average small business owner and one who understands the tax code is often $5,000-$15,000 in lost deductions every year. Here are the legitimate write-offs most owners leave on the table." },
  { slug: "offshore-accounts-legal-illegal", category: "Offshore Business", title: "Offshore Accounts: What's Legal, What's Not, and What the Penalties Actually Look Like", excerpt: "Holding offshore accounts is legal. Failing to report them is where the catastrophic penalties live. The compliance regime every U.S. person with foreign accounts needs to understand." },
  { slug: "when-is-my-business-liable-for-ai", category: "Technology, AI & Digital Business", title: "Is My Business Liable When AI Gets It Wrong? An Entrepreneur's Guide to AI Legal Risk", excerpt: "There is no federal AI liability statute, which does not mean there is no AI liability. A practitioner's guide to where entrepreneur legal exposure actually lies — and how to reduce it." },
  { slug: "llc-vs-s-corp-vs-c-corp", category: "Entity Formation", title: "LLC vs. S-Corp vs. C-Corp: Which One Should You Actually Pick?", excerpt: "Every founder asks this question, and most get a vague answer. Here's a plain-language breakdown of how each structure works, how they're taxed, and which one fits your situation." },
  { slug: "do-i-need-a-business-lawyer", category: "Legal Foundations", title: "Do I Actually Need a Business Lawyer, or Can I Just Use LegalZoom?", excerpt: "You can file your own formation docs for $50. That's not the question. The question is what happens six months later when a contract, a partner dispute, or a tax election goes sideways." },
  { slug: "biggest-tax-mistakes-new-business", category: "Tax Planning", title: "The 5 Biggest Tax Mistakes New Business Owners Make (And How to Avoid Them)", excerpt: "Most of these happen in year one — before you even know they're mistakes. By the time tax season hits, the damage is done. Here's what to watch for from day one." },
  { slug: "what-should-be-in-every-business-contract", category: "Contracts", title: "What Should Be in Every Business Contract? A Founder's Clause-by-Clause Guide", excerpt: "You don't need to go to law school to understand a contract. But you do need to know what the 12 clauses that actually matter are — and what happens when they're missing." },
  { slug: "how-to-protect-your-business-name", category: "Intellectual Property", title: "How to Protect Your Business Name: Trademarks, Domains, and What Most Founders Get Wrong", excerpt: "You picked a great name. You bought the domain. You think you're covered. You're probably not. Here's what actually protects a business name — and what doesn't." },
];

export default function HomePage() {
  return (
    <>
      <FadeInObserver />
      <Header />

      <header className="hero">
        <div className="hero-mile">MILE MARKER 0 &middot; STARTING POINT</div>
        <h1>The Million Dollar Highway</h1>
        <p className="hero-subtitle">
          An Entrepreneur&apos;s Guide to Starting, Managing, and Exiting Your Business
        </p>
        <p className="hero-series">The Silverton Publishing Business Book Series &middot; 12 Volumes</p>
        <a href="#signup" className="cta-btn">
          Get Notified at Launch
        </a>
      </header>

      <section id="series" className="fade-in">
        <div className="section-mile">MILE MARKER 12 &middot; THE JOURNEY</div>
        <h2 className="section-headline">No guardrails. No shortcuts. Just the road ahead.</h2>
        <div className="overview-grid">
          <p>
            The Million Dollar Highway &mdash; US Highway 550 &mdash; is one of the most dangerous
            and perhaps the most beautiful drive in America, perhaps in the world. Carved into the
            San Juan Mountains in Southwest Colorado by an entrepreneur named Otto Mears in 1882, it
            connects the mining towns of Silverton, Ouray, Telluride, and Durango through hairpin
            turns, sheer cliffs, and very few guardrails against a backdrop of unmatched beauty.
          </p>
          <p>
            Building a business is the same drive. The Million Dollar Highway 12-volume series is
            your road map &mdash; covering nearly every legal, financial, and operational challenge
            you&apos;ll face from formation through exit. Written by a lawyer and entrepreneur who
            has formed and run multiple businesses and advised founders and business leaders for
            more than three decades, and a fintech executive who builds and scales companies from
            the inside.
          </p>
        </div>
        <div className="stats-bar">
          <div className="stat">
            <div className="stat-num">12</div>
            <div className="stat-label">Volumes</div>
          </div>
          <div className="stat">
            <div className="stat-num">200+</div>
            <div className="stat-label">Chapters</div>
          </div>
          <div className="stat">
            <div className="stat-num">&infin;</div>
            <div className="stat-label">Frameworks</div>
          </div>
          <div className="stat">
            <div className="stat-num">1</div>
            <div className="stat-label">Complete Journey</div>
          </div>
        </div>
      </section>

      <section id="road-map" className="fade-in">
        <div className="section-mile">MILE MARKER 25 &middot; THE ROAD MAP</div>
        <h2 className="section-headline">Twelve stretches. One complete road.</h2>
        <p style={{ color: "var(--dim)", marginBottom: 16, fontSize: 17 }}>
          Each volume covers a distinct legal or business discipline &mdash; read the one you need
          now, or drive the whole highway.
        </p>
        <div className="volumes-grid">
          {volumes.map((v) => (
            <div key={v.num} className="volume-card">
              <div className="volume-num">{v.num}</div>
              <div className="volume-title">{v.title}</div>
              <div className="volume-tag">{v.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="faq-section" id="faq">
        <div className="faq-inner fade-in">
          <div className="section-mile">MILE MARKER 40 &middot; REAL ADVICE</div>
          <h2 className="section-headline">
            Sample the Million Dollar Highway&apos;s content and practical advice.
          </h2>
          <p className="faq-intro">
            Before the series launches, we&apos;re publishing practical answers to the legal and
            business questions entrepreneurs search for every day. No jargon, no hedging &mdash;
            just what you need to know.
          </p>
          <div className="faq-grid">
            {faqPreview.map((item) => (
              <a key={item.slug} href={`/blog/${item.slug}`} className="faq-card">
                <div className="faq-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="read-more">Read the Answer &rarr;</span>
              </a>
            ))}
          </div>
          <div className="faq-all-link">
            <a href="/blog" className="cta-btn" style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}>
              Browse All Articles
            </a>
          </div>
        </div>
      </div>

      <div className="quote-section fade-in">
        <p className="quote-text">
          &ldquo;A road has to go somewhere worth going. And somebody has to be crazy enough to build
          it.&rdquo;
        </p>
        <p className="quote-attr">THE ORIGINAL ENTREPRENEUR&apos;S ROAD</p>
      </div>

      <section id="author" className="author-section fade-in">
        <div className="section-mile">MILE MARKER 55 &middot; THE DRIVERS</div>
        <h2 className="section-headline" style={{ marginBottom: 0 }}>
          About the Authors
        </h2>
        <div className="authors-grid">
          <div className="author-card">
            <h3 className="author-name">Mark Stetler</h3>
            <p className="author-creds">J.D. &middot; BBA Finance &middot; Attorney &amp; Entrepreneur</p>
            <p className="author-bio">
              Mark Stetler has formed and run multiple businesses and advised founders and business
              leaders for more than three decades. He holds a Juris Doctor from the University of
              Texas School of Law and a BBA in Finance from Baylor University, both with honors. This
              series distills what he&apos;s learned building, advising, and sometimes digging
              businesses out of trouble &mdash; into a practical road map for founders at every
              stage.
            </p>
          </div>
          <div className="author-card">
            <h3 className="author-name">Mason Stetler</h3>
            <p className="author-creds">BBA Finance &amp; Marketing &middot; COO, Vaulted.com</p>
            <p className="author-bio">
              Mason Stetler is the COO of Vaulted.com, a precious metals investment platform with
              significant assets under management. He holds a BBA in Finance and Marketing from
              Baylor University with honors. Mason brings a next-generation perspective on business
              operations, fintech, and the intersection of technology and financial services to the
              series.
            </p>
          </div>
        </div>
      </section>

      <div className="signup-section" id="signup">
        <div className="signup-inner fade-in">
          <div className="section-mile">MILE MARKER 70 &middot; SILVERTON AHEAD</div>
          <h2 className="section-headline">Be the first to hit the road.</h2>
          <p className="signup-body">
            The series is coming soon. Join the list and we&apos;ll let you know when the first
            volumes are ready.
          </p>

          <MailerLiteSignup />

          <p className="signup-fine">No spam. Just a heads-up when we launch.</p>
        </div>
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BookSeries",
            name: "The Million Dollar Highway: An Entrepreneur's Guide to Starting, Managing, and Exiting Your Business",
            author: [
              { "@type": "Person", name: "Mark Stetler", jobTitle: "Attorney and Entrepreneur" },
              { "@type": "Person", name: "Mason Stetler", jobTitle: "COO, Vaulted.com" },
            ],
            publisher: { "@type": "Organization", name: "Silverton Publishing" },
            numberOfBooks: 12,
            genre: ["Business", "Entrepreneurship", "Law", "Finance"],
            description:
              "A 12-volume legal and business guide for entrepreneurs covering entity formation, contracts, tax planning, insurance, hiring, intellectual property, financing, acquisitions, and exit strategy.",
          }),
        }}
      />
    </>
  );
}
