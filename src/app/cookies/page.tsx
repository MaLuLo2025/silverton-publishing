import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySection from "@/components/PolicySection";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Silverton Publishing cookie policy — how we use cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-6" style={{ paddingTop: 96, paddingBottom: 64 }}>
        <h1 className="font-serif text-3xl font-bold mb-2" style={{ color: "var(--cream)" }}>
          Cookie Policy
        </h1>
        <p className="font-sans text-sm mb-10" style={{ color: "var(--faint)" }}>
          Effective Date: August 19, 2026
        </p>

        <PolicySection title="1. What Are Cookies">
          Cookies are small text files stored on your device when you visit a website. We also use
          similar technologies like local storage.
        </PolicySection>

        <PolicySection title="2. How We Use Cookies and Local Storage">
          <p className="mb-3">
            We use cookies and local storage for essential site functionality (remembering your
            cookie preferences) and, if you consent, for analytics (understanding how visitors use
            our site via Google Analytics).
          </p>
          <p>
            MailerLite may set its own cookies when you interact with the newsletter form. These
            cookies are governed by MailerLite&apos;s own privacy policy (
            <a
              href="https://www.mailerlite.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold)" }}
            >
              https://www.mailerlite.com/legal/privacy-policy
            </a>
            ).
          </p>
        </PolicySection>

        <PolicySection title="3. How Your Consent Choice Is Stored">
          Your cookie preferences are stored in your browser&apos;s local storage and are not tied
          to your identity. You can change your choice at any time using the &quot;Cookie
          Preferences&quot; link in the site footer.
        </PolicySection>

        <PolicySection title="4. Google Analytics">
          <p className="mb-4">
            We use Google Analytics 4, which operates under Google&apos;s Consent Mode.
            Specifically:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4">
            <li>
              Analytics cookies (<code>_ga</code>, <code>_ga_*</code>) are{" "}
              <strong>not set</strong> unless you grant Analytics consent, either by clicking
              &quot;Accept&quot; or by turning on Analytics in Cookie Preferences.
            </li>
            <li>
              If you later turn Analytics off, any Analytics cookies already on your device are{" "}
              <strong>actively deleted</strong>, not just left to expire.
            </li>
          </ul>
          <p className="mb-4">
            When Analytics consent is denied, Google&apos;s tag may still send a limited,
            anonymized signal to Google for basic aggregate measurement. This signal does not
            include a cookie and does not include any identifier that persists across visits or
            links back to you individually. It is not the same as the tracking that happens once
            you grant consent, and we do not use it to build a profile of you.
          </p>
          <p>
            Google&apos;s own use of this data is governed by{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold)" }}
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </PolicySection>

        <PolicySection title="5. Managing Your Preferences">
          You can accept, reject, or customize analytics cookies at any time via the &quot;Cookie
          Preferences&quot; link in the footer.
        </PolicySection>

        <PolicySection title="6. Changes to This Policy">
          We may update this Cookie Policy from time to time. The &quot;Effective Date&quot; above
          reflects the most recent revision.
        </PolicySection>

        <PolicySection title="7. Contact Us">
          privacy@silvertonpublishing.com
        </PolicySection>
      </main>
      <Footer />
    </>
  );
}
