import type { ReactNode } from "react";

// Blog-cycle 2026-11-09 additions.
export const batch20Content: Record<string, ReactNode> = {
  "algorithmic-pricing-disclosure-laws-2026": (
    <>
      <p>If software sets your prices using what it knows about the person looking at them, New York already requires a warning label, in capital letters, next to the price. Maryland now bars the practice for large grocers and food delivery apps. Connecticut, New Jersey and Seattle have bans coming in 2027. A New York bill that would ban it outright is waiting for the governor.</p>

      <p>Most small businesses don&apos;t do this. But a growing number use e-commerce plugins, booking tools, and AI pricing assistants that can, and the vendor&apos;s marketing may not tell you whether the feature uses customer data. The first question for any owner is simple: does any price you show a customer depend on who that customer is?</p>

      <h2>The New York rule, word for word</h2>

      <p>New York&apos;s Algorithmic Pricing Disclosure Act is <a href="https://www.nysenate.gov/legislation/laws/GBS/349-A" target="_blank" rel="noopener noreferrer">General Business Law &sect; 349-a</a>. It applies to any entity that sets the price of a good or service using <strong>personalized algorithmic pricing</strong> and shows that price to a consumer in New York using personal data specific to that consumer. The required disclosure is fixed:</p>

      <p>&ldquo;THIS PRICE WAS SET BY AN ALGORITHM USING YOUR PERSONAL DATA&rdquo;</p>

      <p>The definitions do most of the work:</p>

      <ul>
        <li><strong>Personalized algorithmic pricing</strong> is &ldquo;dynamic pricing set by an algorithm that uses personal data.&rdquo;</li>
        <li><strong>Dynamic pricing</strong> is &ldquo;pricing that fluctuates dependent on conditions.&rdquo;</li>
        <li><strong>Personal data</strong> is &ldquo;any data that identifies or could reasonably be linked, directly or indirectly, with a specific consumer or device.&rdquo; The &ldquo;or device&rdquo; matters: pricing keyed to a device ID or cookie can count.</li>
        <li>The disclosure must be <strong>clear and conspicuous</strong>: in the same medium as the price, &ldquo;on, at, or near and contemporaneous with&rdquo; every display of it, in lettering &ldquo;easily visible and understandable to the average consumer.&rdquo;</li>
      </ul>

      <p>The statute exempts entities subject to New York&apos;s insurance law, financial institutions covered by Gramm-Leach-Bliley, and a price offered to an existing subscriber that is lower than the subscription price. It also carves out location data used by for-hire and rideshare vehicles solely to calculate a fare by distance and time.</p>

      <p>Enforcement runs through the Attorney General, who must first send a cease-and-desist letter with a deadline to cure. If the violation continues, the AG can seek an injunction and a civil penalty of up to $1,000 per violation.</p>

      <h2>Is it constitutional? The appeal is pending</h2>

      <p>The National Retail Federation sued, arguing the mandatory label is compelled speech. On October 8, 2025, Judge Jed Rakoff of the Southern District of New York dismissed the challenge in <em>National Retail Federation v. James</em>, No. 25-cv-5500, treating the disclosure as &ldquo;purely factual and uncontroversial&rdquo; under the deferential <em>Zauderer</em> standard. The retailers appealed. Amicus briefs on both sides were filed in the Second Circuit in early 2026. As of November 7, 2026, we have not found a Second Circuit decision. Until there is one, the law is in effect and the district court&apos;s ruling stands.</p>

      <h2>Who else regulates this, and how</h2>

      <p>The other laws take different approaches. Some ban the practice in a sector; some require a different disclosure; one targets a different problem entirely.</p>

      <ul>
        <li><strong>Maryland (in effect October 1, 2026).</strong> The Protection From Predatory Pricing Act, <a href="https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/hb0895?ys=2026RS" target="_blank" rel="noopener noreferrer">House Bill 895, Chapter 154</a>, bars food retailers and third-party delivery services from dynamic pricing or using consumer personal data to set a price, and restricts their use of protected-class data. According to Greenberg Traurig&apos;s September 2026 summary, &ldquo;food retailers&rdquo; means stores of at least 15,000 square feet selling sales-tax-exempt food. Most small businesses are outside it.</li>
        <li><strong>Connecticut (July 1, 2027).</strong> Per the same summary, Public Act 26-130 generally bars retail sellers and third-party delivery services from surveillance pricing, and requires other businesses using it in online transactions to disclose: &ldquo;THIS PRICE WAS INCREASED USING YOUR PERSONAL DATA.&rdquo;</li>
        <li><strong>New Jersey (August 1, 2027).</strong> Sidley Austin reported in October 2026 that New Jersey enacted a surveillance pricing prohibition enforceable through the state&apos;s Consumer Fraud Act, which carries a private right of action.</li>
        <li><strong>Seattle (September 1, 2027).</strong> The same report says Seattle&apos;s Fair Pricing and Transparency Ordinance, signed October 5, 2026, prohibits &ldquo;algorithmic-based price discrimination&rdquo; by covered retailers.</li>
        <li><strong>New York, round two (pending).</strong> The legislature passed a broader ban, <a href="https://www.nysenate.gov/legislation/bills/2025/S8623/amendment/B" target="_blank" rel="noopener noreferrer">S8623B</a>, the &ldquo;One Fair Price Act.&rdquo; As of November 7, 2026, the Senate&apos;s bill page does not show it delivered to or signed by the governor. If it becomes law, New York moves from disclosure to prohibition.</li>
        <li><strong>California (a different target).</strong> AB 325, effective January 1, 2026, amended the state&apos;s antitrust law to restrict &ldquo;common pricing algorithms&rdquo; that use competitor data. That&apos;s about price coordination among competitors, not about pricing individual customers.</li>
      </ul>

      <p>The definitions don&apos;t line up. New York keys on an algorithm using personal data. Connecticut&apos;s disclosure applies when personal data is used to raise a price. Maryland focuses on dynamic pricing in one industry. A tool that is fine in one state can require a label in another and be banned in a third.</p>

      <h2>Does any of this reach your business?</h2>

      <p>Work through it in this order:</p>

      <ul>
        <li><strong>Does the price depend on the person?</strong> A price that changes with time of day, inventory, or demand for everyone is dynamic pricing, but if it doesn&apos;t use personal data, New York&apos;s label doesn&apos;t apply. A price that changes based on a shopper&apos;s browsing history, location, device, purchase history, or profile is where these laws focus.</li>
        <li><strong>Discounts are not automatically safe.</strong> New York&apos;s statute has no general exception for personalized discounts. Connecticut&apos;s retail ban lists exclusions for loyalty programs and other discounts. If your tool sends different customers different coupon values based on their data, read the specific state&apos;s text before assuming you&apos;re outside it.</li>
        <li><strong>Ask your vendors.</strong> E-commerce platforms, booking engines, and AI &ldquo;price optimization&rdquo; add-ons may personalize by default. Ask in writing what inputs the pricing feature uses, whether it uses customer- or device-level data, and whether it can be turned off by state. Put the answer in the contract.</li>
        <li><strong>Where are your customers?</strong> These laws attach to where the consumer is, not where you are. An online store in Texas that shows a personalized price to a shopper in New York is in the statute&apos;s path.</li>
      </ul>

      <p>Consider an online boutique that installs an app promising to &ldquo;show each visitor the price they&apos;re most likely to accept.&rdquo; If that app uses the visitor&apos;s browsing data or device to set the price, New York requires the label next to every such price shown to a New Yorker, and Connecticut&apos;s disclosure will apply from July 2027 if the data raises the price. The simplest compliance choice for many small businesses is not to personalize prices at all.</p>

      <h2>The FTC is watching too</h2>

      <p>There&apos;s no federal statute on personalized pricing. The FTC has said it lacks authority to ban the practice outright but intends to pursue personalized pricing that is unfair or deceptive under Section 5, according to the same Sidley report. A personalized price combined with a claim like &ldquo;everyone pays the same&rdquo; is the obvious risk. Our article on <a href="/blog/ai-washing-ftc-marketing-claims">AI marketing claims and the FTC</a> covers how the agency treats claims about AI features.</p>

      <h2>What is not settled</h2>

      <ul>
        <li>Whether New York&apos;s label survives the Second Circuit.</li>
        <li>Whether New York&apos;s ban is signed, and in what final form.</li>
        <li>How courts will read definitions like &ldquo;personal data&rdquo; and &ldquo;dynamic pricing&rdquo; at the edges, such as loyalty pricing or location-based shipping costs. None of these laws has produced a published enforcement decision against a small business that we&apos;ve found.</li>
      </ul>

      <p><em>This article reflects N.Y. General Business Law &sect; 349-a, the New York Senate&apos;s bill status page, and Maryland HB 895 as read on November 7, 2026, with Connecticut, New Jersey and Seattle details drawn from Greenberg Traurig (September 2026) and Sidley Austin (October 2026) summaries. It is general information, not legal advice for your business.</em></p>
    </>
  ),

  "ccpa-automated-decisionmaking-rules-2027": (
    <>
      <p>On January 1, 2027, California&apos;s rules on automated decisionmaking technology take effect for businesses already using it. If your company is covered by the California Consumer Privacy Act and uses software to make, or effectively make, decisions about whether someone gets hired, housed, lent to, enrolled, or treated, you will owe that person a notice before you use it, a way to opt out or appeal, and an explanation on request.</p>

      <p>Most small businesses aren&apos;t covered by the CCPA at all. The ones that are often don&apos;t realize their hiring platform or underwriting tool counts. Start with the threshold, then the definitions.</p>

      <h2>First question: is your business covered by the CCPA?</h2>

      <p>The CCPA applies to a for-profit &ldquo;business&rdquo; that does business in California and meets at least one test:</p>

      <ul>
        <li><strong>Revenue:</strong> annual gross revenue above $26,625,000, the inflation-adjusted figure in effect since January 1, 2025, according to the <a href="https://www.cppa.ca.gov/regulations/cpi_adjustment.html" target="_blank" rel="noopener noreferrer">California Privacy Protection Agency</a>. The CCPA adjusts these amounts every odd-numbered year, so check for a new figure for 2027.</li>
        <li><strong>Volume:</strong> buying, selling, or sharing the personal information of 100,000 or more consumers or households a year.</li>
        <li><strong>Data revenue:</strong> deriving 50% or more of annual revenue from selling or sharing personal information.</li>
      </ul>

      <p>&ldquo;Consumer&rdquo; under the CCPA means a California resident, and that includes your California job applicants and employees. If none of the tests fit, these rules don&apos;t apply to you, though other laws on AI in hiring may. See our guides to <a href="/blog/california-ai-employer-laws-2027">California&apos;s new AI workplace laws</a> and <a href="/blog/ai-hiring-tools-eeoc-discrimination-2026">AI hiring tools and discrimination law</a>.</p>

      <h2>What counts as ADMT</h2>

      <p>The regulations, adopted by the Agency&apos;s board on July 24, 2025 and effective January 1, 2026 (<a href="https://cppa.ca.gov/regulations/ccpa_updates.html" target="_blank" rel="noopener noreferrer">CPPA rulemaking page</a>), define <strong>automated decisionmaking technology</strong> as &ldquo;any technology that processes personal information and uses computation to replace human decisionmaking or substantially replace human decisionmaking.&rdquo;</p>

      <p>The key phrase is &ldquo;substantially replace.&rdquo; Under the regulation, a tool substantially replaces human decisionmaking when you use its output to decide &ldquo;without human involvement.&rdquo; Human involvement requires a person who:</p>

      <ul>
        <li>knows how to interpret and use the tool&apos;s output;</li>
        <li>reviews and analyzes the output and any other relevant information; and</li>
        <li>has the authority to make or change the decision based on that analysis.</li>
      </ul>

      <p>A manager who glances at an AI score and clicks &ldquo;reject&rdquo; may not meet that standard. A manager who reviews the application, considers the score as one input, and has real authority to decide differently probably does. The regulation also excludes everyday tools like spreadsheets, databases, spam filters, and calculators, &ldquo;provided that they do not replace human decisionmaking.&rdquo;</p>

      <h2>What counts as a significant decision</h2>

      <p>The rules apply only when ADMT is used for a <strong>significant decision</strong>: one that results in providing or denying</p>

      <ul>
        <li>financial or lending services, including credit, loans, deposit accounts, and installment payment plans;</li>
        <li>housing;</li>
        <li>education enrollment or opportunities, including admission, credentials, suspension and expulsion;</li>
        <li>employment or independent contracting, including hiring, allocation of work, compensation, promotion, demotion, suspension, and termination; or</li>
        <li>healthcare services.</li>
      </ul>

      <p>The regulation says a significant decision &ldquo;does not include advertising to a consumer.&rdquo; Recommending products, setting ad audiences, and routing support tickets generally fall outside the ADMT rules, though other CCPA rules may still apply.</p>

      <h2>What you have to do</h2>

      <p><strong>Timing.</strong> Under &sect; 7200, a business already using ADMT for a significant decision before January 1, 2027 must comply by that date. A business that starts later must comply from the start.</p>

      <p><strong>A pre-use notice (&sect; 7220).</strong> Before or when you collect the personal information you&apos;ll run through ADMT, you must tell the person, prominently and in the way you usually interact with them, the specific purpose. The regulation says you can&apos;t just say &ldquo;to make a significant decision&rdquo;; you have to say which decision. The notice must explain the rights to opt out and to access. You can fold it into your existing notice at collection if that notice includes everything required.</p>

      <p><strong>An opt-out, or a human appeal (&sect; 7221).</strong> Consumers generally get the right to opt out of ADMT for significant decisions. The main alternative is to offer an appeal to a human reviewer who understands the tool&apos;s output, considers what the person submits, and has authority to overturn the decision. There are narrower exceptions for hiring, admission, and work-allocation tools that are used only to assess ability or allocate work, that work for their purpose, and that don&apos;t unlawfully discriminate.</p>

      <p><strong>Access on request (&sect; 7222).</strong> When someone asks, you must explain in plain language the specific purpose, the logic of the ADMT (enough for them to understand how it processed their information), and how its output was used in their decision, including whether it was the only factor.</p>

      <p><strong>A risk assessment.</strong> Using ADMT for a significant decision is one of the processing activities that requires a documented risk assessment under &sect; 7150. For covered processing that began before the regulations took effect and continues, the assessment is due by December 31, 2027, and a summary submission to the Agency for assessments done in 2026 and 2027 is due by April 1, 2028 (&sect; 7157).</p>

      <h2>Your vendor won&apos;t do it for you</h2>

      <p>Most small and mid-sized businesses don&apos;t build these tools; they buy them. The obligations above sit with the business that uses ADMT to make the decision. To meet them, you need information only the vendor has: what personal information the tool uses, how it produces its output, and what it&apos;s designed to predict. Ask for it now, and get the vendor to commit in the contract to providing what you need to answer access requests and complete your risk assessment. Our <a href="/blog/ai-vendor-contract-negotiation-checklist">AI vendor contract checklist</a> covers the clauses.</p>

      <h2>A worked example</h2>

      <p>Consider a staffing company with $40 million in revenue that recruits in California and uses a screening tool to rank applicants. Recruiters only interview the top 20%, and nobody reviews the other 80%. That&apos;s ADMT making a significant decision (hiring) without human involvement. By January 1, 2027, the company needs a pre-use notice in its application flow, an opt-out or a human appeal process, a way to answer access requests about the tool&apos;s logic, and a plan to finish a risk assessment by the end of 2027. Alternatively, it can redesign the process so a trained recruiter reviews every application with authority to advance anyone, which may take the tool outside the definition. Which route is cheaper depends on volume.</p>

      <h2>What is not settled</h2>

      <ul>
        <li>How much review counts as &ldquo;human involvement&rdquo; in practice. The regulation sets three requirements but no published enforcement action yet shows where the Agency draws the line.</li>
        <li>How Colorado&apos;s and other states&apos; ADMT rules will interact with California&apos;s for businesses in several states. See our article on <a href="/blog/colorado-ai-act-repealed-replaced-sb-189-2026">Colorado&apos;s SB 26-189</a>.</li>
        <li>Whether federal action against state AI laws reaches privacy regulations like these. As of November 2026, no court has held that it does.</li>
      </ul>

      <p><em>This article reflects the California Privacy Protection Agency&apos;s approved regulation text (CCPA Updates, Cybersecurity Audits, Risk Assessments, ADMT, and Insurance Regulations), effective January 1, 2026, and the Agency&apos;s posted monetary thresholds, as read on November 7, 2026. It is general information, not legal advice for your business.</em></p>
    </>
  ),

  "washington-noncompete-ban-2027": (
    <>
      <p>If you have employees or contractors in Washington, every noncompete you&apos;ve ever had them sign stops being enforceable on June 30, 2027. Not just new ones. Not just low earners. All of them, with a few narrow exceptions. And by October 1, 2027, you owe your current and former workers a written notice saying so.</p>

      <p>The law is Engrossed Substitute House Bill 1155, <a href="https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bills/Session%20Laws/House/1155-S.SL.pdf" target="_blank" rel="noopener noreferrer">Chapter 149, Laws of 2026</a>, approved by the governor on March 23, 2026. Here&apos;s what changes and what to do before the deadline.</p>

      <h2>What Washington law says today</h2>

      <p>Since 2020, Washington has allowed noncompetes only for employees and contractors above an annual earnings threshold, with other conditions, and has presumed restrictions longer than 18 months unreasonable. Those thresholds rise each year with inflation. Our general guide to <a href="/blog/non-competes-after-ftc">state noncompete law after the FTC rule</a> describes the patchwork in other states.</p>

      <h2>What changes on June 30, 2027</h2>

      <p>Under the <a href="https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bill%20Reports/House/1155-S.E%20HBR%20FBR%2026.pdf" target="_blank" rel="noopener noreferrer">final bill report</a>, &ldquo;All noncompetition covenants are void and unenforceable, regardless of when the parties entered into the covenant.&rdquo; The earnings thresholds no longer matter. The law covers employees and independent contractors.</p>

      <p>An employer may not:</p>

      <ul>
        <li>enforce, attempt to enforce, or threaten to enforce a noncompete;</li>
        <li>tell a worker they&apos;re subject to one; or</li>
        <li>enter into, or try to enter into, a new one.</li>
      </ul>

      <p>That second item is easy to miss. A letter to a departing employee reminding them of their noncompete is a violation, even if you never sue.</p>

      <h2>The definition got broader</h2>

      <p>A &ldquo;noncompetition covenant&rdquo; already included agreements that bar someone from a lawful profession, trade or business, or from accepting business from a customer. The new law adds:</p>

      <ul>
        <li><strong>Forfeiture and repayment clauses:</strong> any provision that makes a worker &ldquo;return, repay, or forfeit any right, benefit, or compensation&rdquo; because they go to work in a lawful profession, trade, or business. Bonus clawbacks and equity forfeitures tied to working for a competitor fall here.</li>
        <li><strong>Performer agreements</strong> with performance spaces or third-party schedulers.</li>
      </ul>

      <h2>What you can still use</h2>

      <ul>
        <li><strong>Nonsolicitation agreements,</strong> narrowly. The law defines a permitted customer nonsolicit as one that bars a former employee from soliciting customers, prospective customers, patients and clients to move business away, only where the employee had a direct relationship with them through their work, and only for up to 18 months after employment ends. Agreements not to recruit your employees remain permitted. A clause that bars the former employee from accepting business that comes to them unsolicited is still treated as a noncompete.</li>
        <li><strong>Confidentiality agreements</strong> and trade secret protection.</li>
        <li><strong>Sale-of-business covenants,</strong> where the person signing buys, sells, acquires, or disposes of an ownership interest of 1% or more of the business.</li>
        <li><strong>Franchise covenants</strong> that comply with the state franchise statute.</li>
        <li><strong>Education-repayment agreements</strong> for out-of-pocket educational expenses, if the agreement expires within 18 months of the start date, limits repayment to the prorated remaining portion, and releases the employee if they leave for &ldquo;good cause&rdquo; under the unemployment statute.</li>
      </ul>

      <h2>The notice deadline</h2>

      <p>By October 1, 2027, employers must make reasonable efforts to give written notice to every current and former employee and independent contractor who is still subject to a noncompete that it is void and unenforceable. That means finding the agreements first. Offer letters, equity grants, bonus plans, contractor agreements, and separation agreements all can contain them.</p>

      <h2>What a mistake costs</h2>

      <p>The existing statute, as amended, gives an aggrieved person a right to sue. Where a violation is found, the party seeking enforcement must pay &ldquo;the greater of his or her actual damages or a statutory penalty of five thousand dollars, plus reasonable attorneys&apos; fees, expenses, and costs.&rdquo; The Attorney General can also enforce the law. The new rules apply to proceedings started on or after June 30, 2027; earlier proceedings follow the old law.</p>

      <h2>A plan for the next eight months</h2>

      <ul>
        <li><strong>Inventory.</strong> List every Washington-based employee and contractor, current and former, who signed anything with a restrictive covenant or a forfeiture tied to competition.</li>
        <li><strong>Sort.</strong> Separate true noncompetes from nonsolicits, confidentiality terms, and sale-of-business covenants. Check each nonsolicit against the 18-month, direct-relationship limits.</li>
        <li><strong>Fix the templates now.</strong> Stop using noncompete language in Washington offer letters and contractor agreements. Rewrite clawback and forfeiture terms that are tied to post-employment competition.</li>
        <li><strong>Protect what matters another way.</strong> Strong confidentiality agreements, trade secret practices, and access controls do the work a noncompete used to. Our guide to <a href="/blog/trademark-domain-name-protection">protecting your brand and IP</a> covers adjacent tools.</li>
        <li><strong>Prepare the notice.</strong> Draft it, decide how you&apos;ll find former workers, and keep a record of your efforts.</li>
        <li><strong>Watch remote hires.</strong> The law protects Washington-based workers. Existing Washington law already voids clauses that require litigating outside Washington or applying another state&apos;s law to a Washington-based worker&apos;s noncompete.</li>
      </ul>

      <h2>What is not settled</h2>

      <p>How courts will apply &ldquo;reasonable efforts&rdquo; to notify former workers, and exactly which equity and bonus forfeiture terms fall within the new definition, will take cases to work out. Expect litigation over nonsolicitation clauses written right up to the 18-month and direct-relationship limits.</p>

      <p><em>This article reflects the session law and final bill report for ESHB 1155 (Chapter 149, Laws of 2026), as read on November 7, 2026. It is general information, not legal advice for your business.</em></p>
    </>
  ),
};
