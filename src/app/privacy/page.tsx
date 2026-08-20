import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySection from "@/components/PolicySection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Silverton Publishing privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-6" style={{ paddingTop: 96, paddingBottom: 64 }}>
        <h1 className="font-serif text-3xl font-bold mb-2" style={{ color: "var(--cream)" }}>
          Privacy Policy
        </h1>
        <p className="font-sans text-sm mb-10" style={{ color: "var(--faint)" }}>
          Effective Date: August 19, 2026
        </p>

        <PolicySection title="1. Introduction">
          Silverton Publishing (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
          website silvertonpublishing.com. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website. By using the site,
          you agree to the terms of this policy.
        </PolicySection>

        <PolicySection title="2. Information We Collect">
          <p className="mb-3">
            <strong>Information you provide:</strong> This site does not require you to create an
            account or provide personal information to browse our content. If you voluntarily
            subscribe to our newsletter via the form on our homepage, we collect your email address
            for that purpose. We use MailerLite to manage our mailing list; your email is stored and
            processed under MailerLite&apos;s privacy policy. If you otherwise contact us directly,
            we may also collect any information you choose to provide.
          </p>
          <p className="mb-3">
            <strong>Automatically collected information:</strong> We automatically collect certain
            data when you visit, including your IP address, browser type, operating system,
            referring URLs, pages viewed, and the dates and times of your visits.
          </p>
          <p>
            <strong>Interaction data:</strong> We collect anonymous interaction data — such as
            which articles you read and how far you scroll — to understand how visitors use the
            site and improve our content. This data is sent to our own first-party analytics
            infrastructure, not to any third-party service. No cookies are set by this system, and
            no advertising or personal profile is built from it. As part of standard server
            processing, your IP address and browser information may be logged.
          </p>
        </PolicySection>

        <PolicySection title="3. How We Use Your Information">
          We use the information we collect to send updates about the Million Dollar Highway series
          and related content, respond to inquiries, operate and improve the website, and understand
          how visitors use our site.
        </PolicySection>

        <PolicySection title="4. Sharing of Information">
          We do not sell your personal information. We may share data with trusted third-party
          service providers who assist us in operating the website (e.g., hosting, email delivery,
          analytics).
        </PolicySection>

        <PolicySection title="5. Third-Party Links">
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices of those sites and encourage you to review their privacy policies.
        </PolicySection>

        <PolicySection title="6. Data Security">
          We implement reasonable technical and organizational measures to protect your information.
          No method of transmission over the internet is completely secure, and we cannot guarantee
          absolute security.
        </PolicySection>

        <PolicySection title="7. Your Rights">
          Depending on your location, you may have the right to access, correct, or delete your
          personal information, and to opt out of certain data uses. To exercise these rights,
          contact us at privacy@silvertonpublishing.com.
        </PolicySection>

        <PolicySection title="8. Children's Privacy">
          This site is not directed to children under 13, and we do not knowingly collect personal
          information from children under 13.
        </PolicySection>

        <PolicySection title="9. Changes to This Policy">
          We may update this Privacy Policy from time to time. The &quot;Effective Date&quot; above
          reflects the most recent revision. We will not reduce your rights under this policy
          without your consent.
        </PolicySection>

        <PolicySection title="10. Contact Us">
          <p className="mt-2">
            Silverton Publishing
            <br />
            124 N Nova Rd, Ste 106, Ormond Beach, FL 32174
            <br />
            privacy@silvertonpublishing.com
          </p>
        </PolicySection>
      </main>
      <Footer />
    </>
  );
}
