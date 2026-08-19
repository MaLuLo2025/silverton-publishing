import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySection from "@/components/PolicySection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Silverton Publishing terms of service — the rules governing your use of this website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-6" style={{ paddingTop: 96, paddingBottom: 64 }}>
        <h1 className="font-serif text-3xl font-bold mb-2" style={{ color: "var(--cream)" }}>
          Terms of Service
        </h1>
        <p className="font-sans text-sm mb-10" style={{ color: "var(--faint)" }}>
          Effective Date: August 19, 2026
        </p>

        <PolicySection title="1. Acceptance of Terms">
          By accessing silvertonpublishing.com, you agree to these Terms of Service.
        </PolicySection>

        <PolicySection title="2. Description of Service">
          Silverton Publishing provides informational content, including the Million Dollar Highway
          book series and an associated blog, covering legal and business topics for entrepreneurs.
          This content is authored by a licensed attorney.
        </PolicySection>

        <PolicySection title="3. Eligibility">
          You must be at least 18 years old to use this site.
        </PolicySection>

        <PolicySection title="4. Use License">
          We grant you a limited, non-exclusive, non-transferable license to access and use this
          site for personal, non-commercial purposes.
        </PolicySection>

        <PolicySection title="5. No Legal Advice Disclaimer">
          Content on this site, including the book series and blog, is provided for general
          educational purposes only and does not constitute legal, tax, or financial advice. No
          attorney-client relationship is formed by using this site, submitting a form, or
          subscribing to our email list. You should consult a licensed attorney or qualified
          professional regarding your specific situation before acting on any information found
          here.
        </PolicySection>

        <PolicySection title="6. Third-Party Links">
          This site may link to third-party websites. We do not endorse and are not responsible for
          their content.
        </PolicySection>

        <PolicySection title="7. Intellectual Property">
          All content on this site, including text, graphics, and the Million Dollar Highway name
          and materials, is the property of Silverton Publishing and protected by applicable
          intellectual property laws.
        </PolicySection>

        <PolicySection title="8. Disclaimer of Warranties">
          This site and its content are provided &quot;as is&quot; without warranties of any kind,
          express or implied.
        </PolicySection>

        <PolicySection title="9. Limitation of Liability">
          To the fullest extent permitted by law, Silverton Publishing shall not be liable for any
          indirect, incidental, or consequential damages arising from your use of this site.
        </PolicySection>

        <PolicySection title="10. Indemnification">
          You agree to indemnify and hold Silverton Publishing harmless from any claims arising from
          your violation of these Terms.
        </PolicySection>

        <PolicySection title="11. Binding Arbitration">
          <p className="mb-3">
            Any dispute, controversy, or claim arising out of or relating to these Terms or the use
            of the Site shall be resolved by binding arbitration administered by the American
            Arbitration Association (&quot;AAA&quot;) in accordance with its Commercial Arbitration
            Rules. The arbitration shall be conducted by a single arbitrator.
          </p>
          <p className="mb-3">
            The seat of arbitration shall be Durango, La Plata County, Colorado. The
            arbitrator&apos;s decision shall be final and binding, and judgment on the award may be
            entered in any court of competent jurisdiction.
          </p>
          <p>
            You agree that any arbitration shall be conducted on an individual basis and not as a
            class, consolidated, or representative action. The arbitrator may not consolidate
            proceedings or preside over any form of representative or class proceeding.
          </p>
        </PolicySection>

        <PolicySection title="12. Class Action Waiver">
          YOU AGREE TO WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE
          ARBITRATION AGAINST SILVERTON PUBLISHING. YOU ACKNOWLEDGE THAT YOU ARE GIVING UP YOUR
          RIGHT TO PARTICIPATE AS A CLASS REPRESENTATIVE OR CLASS MEMBER ON ANY CLASS CLAIM YOU MAY
          HAVE AGAINST SILVERTON PUBLISHING, INCLUDING ANY RIGHT TO CLASS ARBITRATION OR ANY
          CONSOLIDATION OF INDIVIDUAL ARBITRATIONS.
        </PolicySection>

        <PolicySection title="13. Governing Law &amp; Venue">
          These Terms shall be governed by and construed in accordance with the laws of the State of
          Colorado, without regard to its conflict of laws provisions. To the extent any dispute is
          not subject to arbitration, the exclusive venue shall be the state and federal courts
          located in La Plata County, Colorado, and you consent to the personal jurisdiction of such
          courts.
        </PolicySection>

        <PolicySection title="14. Termination">
          We reserve the right to terminate or suspend your access to the Site at any time, without
          notice, for any reason, including violation of these Terms. Upon termination, all
          provisions of these Terms that by their nature should survive shall remain in effect.
        </PolicySection>

        <PolicySection title="15. Severability">
          If any provision of these Terms is found unenforceable, the remaining provisions remain in
          full effect.
        </PolicySection>

        <PolicySection title="16. Contact Us">
          <p className="mt-2">
            Silverton Publishing
            <br />
            124 N Nova Rd, Ste 106, Ormond Beach, FL 32174
            <br />
            legal@silvertonpublishing.com
          </p>
        </PolicySection>
      </main>
      <Footer />
    </>
  );
}
