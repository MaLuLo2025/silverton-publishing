import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySection from "@/components/PolicySection";

export const metadata: Metadata = {
  title: "AI Legal Tracker",
  description:
    "Updates to Silverton Publishing's AI in Business and Law coverage — new court rulings, vendor terms changes, and regulatory developments that post-date the published chapters and articles.",
  alternates: { canonical: "/ai-current" },
};

export default function AiCurrentPage() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-6" style={{ paddingTop: 96, paddingBottom: 64 }}>
        <h1 className="font-serif text-3xl font-bold mb-2" style={{ color: "var(--cream)" }}>
          AI Legal Tracker
        </h1>
        <p className="font-sans text-[14.5px] leading-relaxed mb-10" style={{ color: "var(--body)" }}>
          Updates to Silverton Publishing&apos;s <em>AI in Business and Law</em> coverage &mdash;
          new court rulings, vendor terms changes, and regulatory developments that post-date the
          published chapters and articles. Check here for material updates after this article was
          published.
        </p>

        <PolicySection title="Recent updates">
          <div className="mb-6">
            <h3
              className="font-serif text-base font-semibold mb-2"
              style={{ color: "var(--cream)" }}
            >
              February 2026 &mdash; U.S. v. Heppner (SDNY)
            </h3>
            <p>
              Judge Jed Rakoff held that a defendant&apos;s conversations with a consumer AI
              chatbot were not protected by attorney-client privilege, and that feeding a
              lawyer&apos;s advice into the chatbot risked waiving privilege over the underlying
              advice itself.
            </p>
          </div>

          <div>
            <h3
              className="font-serif text-base font-semibold mb-2"
              style={{ color: "var(--cream)" }}
            >
              Vendor terms tracker
            </h3>
            <p>
              No material vendor terms updates logged yet. This section will note when major AI
              providers change their data-training defaults, retention practices, or indemnity
              coverage.
            </p>
          </div>
        </PolicySection>
      </main>
      <Footer />
    </>
  );
}
