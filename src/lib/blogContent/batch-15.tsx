import type { ReactNode } from "react";

// Blog-cycle 2026-10-05 additions.
export const batch15Content: Record<string, ReactNode> = {
  "colorado-ai-act-repealed-replaced-sb-189-2026": (
    <>
      <p>If you spent part of 2025 building a risk-management program, drafting impact assessments, and reading the NIST AI framework because Colorado told you to, you can put most of that binder on the shelf. The law that required it, SB 24-205, the Colorado Artificial Intelligence Act, never took effect. In May 2026 the legislature repealed it and passed a much narrower replacement, <a href="https://leg.colorado.gov/bills/sb26-189" target="_blank" rel="noopener noreferrer">SB 26-189</a>, which Governor Polis signed on May 14, 2026. The new law takes effect January 1, 2027.</p>

      <p>That is good news for most small businesses. It is not a reason to do nothing. The replacement is a notice-and-explanation statute, and it still reaches you if you use software that scores, ranks, or recommends people in decisions about jobs, credit, housing, insurance, health care, or education. Here is what changed, what you still have to do before January, and what nobody can answer yet.</p>

      <h2>How we got here</h2>

      <p>The short version of a long saga:</p>

      <ul>
        <li><strong>May 2024.</strong> Colorado enacted SB 24-205, the first broad state law aimed at &ldquo;algorithmic discrimination.&rdquo; It put a duty of reasonable care on developers and deployers of &ldquo;high-risk&rdquo; AI systems, and required deployers to run risk-management programs and complete impact assessments.</li>
        <li><strong>August 2025.</strong> In a special session, the legislature passed SB 25B-004, pushing the effective date from February 1, 2026 to June 30, 2026 to buy time for amendments.</li>
        <li><strong>April 9, 2026.</strong> xAI sued Colorado&apos;s Attorney General in federal court in Denver (<a href="https://dockets.justia.com/docket/colorado/codce/1:2026cv01515/253513" target="_blank" rel="noopener noreferrer"><em>X.AI LLC v. Weiser</em>, No. 1:26-cv-01515, D. Colo.</a>), arguing the law violated the First Amendment and other constitutional protections.</li>
        <li><strong>April 24, 2026.</strong> The U.S. Department of Justice moved to intervene as a plaintiff. The court granted the unopposed motion the same day, and the United States filed its own complaint in intervention.</li>
        <li><strong>April 27, 2026.</strong> Magistrate Judge Cyrus Y. Chung entered a minute order granting a joint motion to stay. The Attorney General agreed not to begin enforcement of SB 24-205 for conduct on or before 14 days after the court rules on xAI&apos;s forthcoming preliminary-injunction motion.</li>
        <li><strong>May 14, 2026.</strong> The Governor signed SB 26-189, which repeals SB 24-205 and reenacts a new framework in the same part of the Colorado Consumer Protection Act.</li>
      </ul>

      <p>One clarification, because it has been widely misreported: the April order was a <strong>stipulated stay</strong>. The Attorney General agreed to it. No court has ruled on whether the 2024 law was constitutional, and with that law repealed, it may never need to.</p>

      <h2>What you can stop doing</h2>

      <p>The 2024 law&apos;s heaviest obligations are gone. Under SB 26-189, a business that uses AI in consequential decisions no longer has a statutory duty to:</p>

      <ul>
        <li>maintain a formal AI risk-management policy and program;</li>
        <li>complete annual impact assessments for each high-risk system; or</li>
        <li>meet a general &ldquo;duty of reasonable care&rdquo; to protect consumers from algorithmic discrimination.</li>
      </ul>

      <p>At least one law-firm summary reports that the old affirmative defense for following recognized frameworks (NIST AI RMF, ISO/IEC 42001) is also gone. Governance documents you built for it are still good evidence of care. They are just no longer a Colorado requirement.</p>

      <p>What did <strong>not</strong> go away: Colorado&apos;s ordinary anti-discrimination laws, federal employment law, and fair-lending law still apply to decisions you make with software, exactly as they apply to decisions you make by hand. Deleting your impact assessment does not delete your exposure under Title VII or the Equal Credit Opportunity Act. (We covered the hiring side in <a href="/blog/ai-hiring-tools-eeoc-discrimination-2026">AI hiring tools and EEOC discrimination risk</a> and the vendor-as-agent theory in <a href="/blog/ai-hiring-tools-vendor-agent-liability-2026">AI hiring tools and vendor liability</a>.)</p>

      <h2>What takes effect January 1, 2027</h2>

      <p>SB 26-189 regulates &ldquo;automated decision-making technology,&rdquo; or ADMT: technology that processes personal data and produces predictions, recommendations, classifications, rankings, scores, or similar outputs used to make or assist a decision. It applies when that technology &ldquo;materially influences&rdquo; a <strong>consequential decision</strong>, meaning a decision about access to, eligibility for, or compensation in employment, education, housing, financial or lending services, insurance, health care, or essential government services.</p>

      <p>Ordinary business software is carved out. Summaries of the enacted bill list spam filters, firewalls, spell-checkers, calculators, databases, spreadsheets, scheduling tools, search, and tools that merely summarize, organize, translate, or present information for later human review. Customer-service triage, advertising, and product recommendations are also reported as excluded.</p>

      <p>If you are a <strong>deployer</strong>, meaning the business that uses covered ADMT to make the decision, you will need four things:</p>

      <ol>
        <li><strong>A notice before use.</strong> Before the technology materially influences a decision about someone, you must give clear and conspicuous notice that it is being used and tell the person how to get more information. Summaries of the final bill say a prominent public notice that is reasonably accessible during the interaction can satisfy this, so an individual letter for every applicant may not be required.</li>
        <li><strong>An explanation after an adverse outcome.</strong> If the decision goes against the person (a rejected application, a terminated service, materially worse pricing), you have 30 days to give a plain-language description of the decision and the role the technology played, a simple way to ask for more information, and an explanation of the person&apos;s rights.</li>
        <li><strong>Two consumer rights.</strong> The person can ask you to correct inaccurate personal data the technology relied on, and can ask for meaningful human review and reconsideration, to the extent that is commercially reasonable.</li>
        <li><strong>Records.</strong> You must keep records showing compliance for at least three years after the decision.</li>
      </ol>

      <p><strong>Developers</strong>, meaning the companies that build and sell these tools, owe deployers documentation: intended uses, known limitations and risks, the categories of training data, and instructions for use, along with notice of material updates. That matters to you as a buyer, because the vendor&apos;s documentation is what you will use to write your notice and explanations.</p>

      <p>Two more provisions are worth knowing. Several summaries report that the law voids contract clauses that try to make one party indemnify the other for its own discriminatory acts involving ADMT, which will affect your vendor agreements. And the law has industry-specific off-ramps: lenders that send ECOA and FCRA adverse-action notices, HIPAA-covered entities for most clinical decisions, state-regulated insurers already subject to Colorado&apos;s insurance algorithm rules, and FERPA-compliant schools are treated differently. If you are in one of those sectors, read the off-ramp language closely before assuming you are out.</p>

      <p>There is <strong>no headcount exemption</strong> in the new law. The 2024 Act exempted many deployers with fewer than 50 employees from some duties. Our read of the summaries is that SB 26-189 does not reproduce that exemption. The obligations are lighter, but they apply to the 12-person property manager the same way they apply to a regional bank.</p>

      <h2>Enforcement: who can come after you, and how</h2>

      <p>Only the Colorado Attorney General can enforce SB 26-189. There is no private right of action. A violation is treated as a deceptive trade practice under the Colorado Consumer Protection Act, with civil penalties the legislature&apos;s fiscal analysis puts at up to $20,000 per violation.</p>

      <p>Before the AG can bring an enforcement action, the AG must give you notice of the alleged violation and 60 days to cure it. That cure right does not apply to knowing or repeated violations, and it expires January 1, 2030. Treat the cure period as a safety net for honest mistakes in the first three years, not as a compliance strategy.</p>

      <h2>A typical scenario</h2>

      <p>Here is a typical scenario. Consider a small staffing agency with a Colorado office that uses a resume-screening tool that scores applicants against job descriptions. When SB 24-205 was still in force, the agency spent several months and a meaningful consulting budget on an impact assessment for that tool. When the replacement passed, the owner&apos;s first question was whether that money had been wasted.</p>

      <p>Partly. The assessment is no longer required, but the work behind it was most of what the new law needs: the agency already knew which decisions the tool influenced, what data it used, and who could override it. Turning that into a pre-use notice for the careers page, a template for 30-day adverse-outcome explanations, and a short written human-review procedure took a few weeks, not months. The businesses that will struggle in December are the ones that never figured out where their software touches a hiring or credit decision.</p>

      <h2>Your to-do list before January 1</h2>

      <ul>
        <li><strong>Inventory.</strong> List every tool that scores, ranks, or recommends people in a decision about jobs, credit, housing, insurance, health care, or education. Include features inside software you already own, like an applicant-tracking system&apos;s &ldquo;match score.&rdquo;</li>
        <li><strong>Ask your vendors for their developer documentation</strong>, in writing, and ask how they plan to support your adverse-outcome explanations.</li>
        <li><strong>Draft your pre-use notice</strong> and decide where it will live (application page, intake form, point of sale).</li>
        <li><strong>Build the 30-day adverse-outcome process.</strong> Who sends the explanation, from what template, and how do you track the deadline?</li>
        <li><strong>Write down your human-review procedure.</strong> Who can change the outcome, and what do they look at besides the score?</li>
        <li><strong>Set up record retention</strong> for three years after each covered decision.</li>
        <li><strong>Review your vendor contracts</strong> for indemnity clauses that may be void under the new law.</li>
      </ul>

      <h2>What is still unknown</h2>

      <p>Three big questions remain open as of early October 2026.</p>

      <p><strong>The rules.</strong> SB 26-189 requires the Attorney General to adopt implementing rules by January 1, 2027. The AG&apos;s office ran a pre-rulemaking comment period through July 13, filed proposed rules on August 11, posted interim draft updates on September 23, and is taking comments through October 26, 2026, according to the <a href="https://coag.gov/ai/" target="_blank" rel="noopener noreferrer">Colorado AG&apos;s AI page</a>. The AG&apos;s <a href="https://coag.gov/app/uploads/2026/06/ADMT-Chatbot-Pre-Rulemaking-Considerations-Document.pdf" target="_blank" rel="noopener noreferrer">pre-rulemaking considerations document</a> flags the open issues: what &ldquo;materially influence&rdquo; means in practice, what a &ldquo;meaningful&rdquo; human review looks like, and how detailed an adverse-outcome explanation must be. Final rules may land within weeks of the effective date. Plan to adjust your templates in December.</p>

      <p><strong>The litigation.</strong> The stay order in <em>xAI v. Weiser</em> speaks to SB 24-205, the repealed law. Practitioners disagree about what happens next. One firm&apos;s summary says the case is partly moot because the algorithmic-discrimination provisions xAI attacked are gone. Another reports that the parties&apos; stipulation lets xAI seek a preliminary injunction within 28 days after final rules implementing the replacement law are adopted, and that the constitutional theories (compelled speech among them) could be aimed at the new disclosure duties. Our view is that you should plan to comply on January 1 and treat any injunction as a pleasant surprise, not a plan.</p>

      <p><strong>Federal preemption.</strong> The federal government&apos;s intervention in the xAI case was part of a broader push against state AI laws. Nothing in federal law today displaces SB 26-189, and nothing on the near horizon will before January.</p>

      <h2>Colorado&apos;s other 2026 AI laws, briefly</h2>

      <p>Colorado passed several narrower AI bills this session. The one most likely to matter to a general business is <a href="https://leg.colorado.gov/bills/HB26-1263" target="_blank" rel="noopener noreferrer">HB 26-1263</a>, the conversational-AI (chatbot) safety law, signed May 29, 2026, with operator requirements beginning January 1, 2027. It requires operators of publicly available chatbots to tell users they are talking to AI, and adds age-estimation, self-harm protocols, and minor-protection duties. Its definition is broad, and the AG&apos;s proposed rules would carve out narrow, bounded-task bots. We cover that in <a href="/blog/website-chatbot-disclosure-laws-2026">our chatbot disclosure guide</a>. According to the legislature&apos;s research staff, two other bills, HB 26-1139 and HB 26-1195, deal with AI in health-insurance utilization review and AI in psychotherapy. If you are not in those fields, they will not touch you.</p>

      <p>If you also collect consumer data, Colorado&apos;s AI rules sit alongside its privacy law, covered in <a href="/blog/state-privacy-laws-small-business-2026">our state privacy law overview</a>.</p>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>We have fewer than 50 employees. Are we exempt?</h3>
        <p>Probably not. The small-deployer exemption in the 2024 law does not appear in SB 26-189 as summarized by the firms we reviewed. The duties are lighter, but size alone does not take you out.</p>
      </div>

      <div className="faq-item">
        <h3>Does using ChatGPT to draft a rejection letter count?</h3>
        <p>Generally no. Tools that draft, summarize, or organize information for a human who makes the decision are excluded. The line is crossed when the software&apos;s score, ranking, or recommendation is a non-trivial factor in the decision itself. The AG&apos;s rules are expected to add examples.</p>
      </div>

      <div className="faq-item">
        <h3>Can a rejected applicant sue us under the new law?</h3>
        <p>Not under SB 26-189 itself. Only the Attorney General enforces it. The applicant can still bring a discrimination claim under other state or federal law.</p>
      </div>

      <div className="faq-item">
        <h3>Our vendor says its tool is &ldquo;compliant.&rdquo; Is that enough?</h3>
        <p>No. Most of the new obligations (notice, explanation, human review, records) fall on the business that makes the decision, not on the vendor. Ask for the vendor&apos;s documentation and build your own process around it.</p>
      </div>

      <h2>For ongoing tracking</h2>

      <p>Colorado&apos;s rules are still being written and the litigation is live. We track changes like these at <a href="/ai-current">silvertonpublishing.com/ai-current</a>.</p>

      <p><em>This article reflects Colorado AI law as of October 2026. The Attorney General&apos;s rules and the federal litigation could change the details before January 1, 2027. Confirm the final rule text and the status of</em> xAI v. Weiser <em>before relying on it. Nothing in this article is legal advice for your specific situation.</em></p>

    </>
  ),

  "website-chatbot-disclosure-laws-2026": (
    <>
      <p>The short answer: in a handful of states, yes, sometimes. Everywhere else, the law does not require it in so many words, but letting a customer believe they are chatting with a person when they are not is the kind of thing consumer-protection regulators call deception. The practical answer for almost every small business is the same either way: say it&apos;s a bot, at the start, in plain words.</p>

      <p>The longer answer is worth a few minutes, because the headlines about &ldquo;AI chatbot laws&rdquo; mostly describe laws that will never touch the help widget on a plumbing company&apos;s website. If you know which laws are about which kind of bot, you can stop worrying about the wrong ones and get the right ones done in an afternoon.</p>

      <h2>Two different kinds of &ldquo;chatbot law&rdquo;</h2>

      <p>Most of the chatbot legislation of the past two years is aimed at <strong>companion chatbots</strong>: AI products designed to hold ongoing, personal, emotionally engaging conversations, often with teenagers. Those laws require suicide and self-harm protocols, break reminders for minors, content restrictions, and reporting. They were written with Character.AI and Replika in mind, not your appointment scheduler.</p>

      <p>A much smaller set of laws is aimed at <strong>any bot that talks to consumers in a commercial setting</strong>, including customer-service bots. These are the ones that matter for a typical small business, and they are short: mostly a single disclosure duty.</p>

      <p>Here is how the main laws sort out as of October 2026.</p>

      <ul>
        <li><strong>Maine, <a href="https://legislature.maine.gov/statutes/10/title10sec1500-DD.html" target="_blank" rel="noopener noreferrer">10 M.R.S. § 1500-DD</a> (LD 1727, 2025).</strong> Covers any &ldquo;artificial intelligence chatbot&rdquo; used in trade or commerce. <strong>Reaches an ordinary customer-service bot: yes.</strong> Requires clear notice that the consumer is not talking to a human, if the bot is used in a way that may mislead a reasonable consumer into thinking otherwise. A violation is a violation of the Maine Unfair Trade Practices Act.</li>
        <li><strong>Utah, <a href="https://le.utah.gov/xcode/Title13/Chapter77/C13-77-S103_2025050720250507.html" target="_blank" rel="noopener noreferrer">Utah Code § 13-77-103</a> (as amended by SB 226, 2025).</strong> Covers generative AI used to interact with an individual in a consumer transaction. <strong>Reaches an ordinary customer-service bot: yes, on request.</strong> Requires disclosure that it is AI if the person clearly and unambiguously asks. Regulated occupations (licensed professions) must disclose up front in &ldquo;high-risk&rdquo; interactions involving sensitive data and personal advice.</li>
        <li><strong>California SB 243 (companion chatbots), effective Jan. 1, 2026.</strong> Covers companion chatbots. <strong>Reaches an ordinary customer-service bot: generally no.</strong> Bots used only for customer service or business operations are excluded. Requires disclosure where a reasonable person could be misled, plus self-harm protocols and minor protections. Private right of action.</li>
        <li><strong>California AB 1609 (Right to Human Customer Service Act), signed Sept. 28, 2026.</strong> Covers customer-service operations of businesses with more than $500 million in annual gross revenue. <strong>Reaches an ordinary customer-service bot: only for very large businesses.</strong> Requires disclosure that a customer-service chatbot is not human if a customer could reasonably think otherwise, and a way to reach a human agent within set time limits.</li>
        <li><strong>Colorado <a href="https://leg.colorado.gov/bills/HB26-1263" target="_blank" rel="noopener noreferrer">HB 26-1263</a> (Chatbot Safety Act), operator duties begin Jan. 1, 2027.</strong> Covers publicly available AI systems that primarily simulate human conversation. <strong>Reaches an ordinary customer-service bot: possibly.</strong> The statute&apos;s definition is broad. The Attorney General&apos;s proposed rules would exempt narrow, bounded-task bots (order status, billing questions, scheduling). Requires disclosure to all users that they are interacting with AI, plus age estimation, self-harm protocols, and minor protections for covered operators.</li>
      </ul>

      <p>A few notes on those laws.</p>

      <p><strong>Maine is the cleanest model.</strong> It does not care whether the bot is generative AI or a 2015-era decision tree. If a reasonable consumer could think it is a person, you have to tell them it isn&apos;t. Because the remedy runs through Maine&apos;s Unfair Trade Practices Act, you should assume it carries the same exposure as any other deceptive practice in that state.</p>

      <p><strong>Utah is narrower than it looks.</strong> The 2024 version of Utah&apos;s law was broader; the 2025 amendments cut the general rule back to &ldquo;disclose if asked.&rdquo; A bot that answers &ldquo;Are you a real person?&rdquo; honestly satisfies the basic duty. If you are in a licensed profession (accountants, health care providers, and the like), the up-front disclosure rule for high-risk interactions is stricter. The statute also gives a safe harbor to businesses that disclose clearly at the start of the interaction and throughout.</p>

      <p><strong>California&apos;s new customer-service law is for big companies.</strong> AB 1609 was signed by Governor Newsom on September 28, 2026, according to the <a href="https://www.gov.ca.gov/2026/09/28/governor-newsom-signs-commonsense-legislation-to-make-your-life-easier/" target="_blank" rel="noopener noreferrer">Governor&apos;s office</a>. Bill trackers summarizing the enacted text report a threshold of more than $500 million in annual gross revenue, public-prosecutor enforcement, penalties of up to $5,000 for a first violation and $10,000 for later ones, and no private right of action. We have not been able to confirm the operative date from the chaptered text; California laws without a stated date generally take effect the following January 1. A small business is not covered, but this law is where customer expectations are headed: an honest label and a real way to reach a person.</p>

      <p><strong>Colorado is the one to watch.</strong> Unlike most companion-bot laws, HB 26-1263 does not, on its face, exclude customer-service bots. The Colorado Attorney General&apos;s proposed rules, filed August 11, 2026, would exempt bots handling a bounded task, such as a purchase-status update, a billing question, or scheduling, as long as they stay away from the content the law prohibits for minors. Those rules are not final. If you serve Colorado consumers with a free-ranging generative AI assistant, assume the disclosure duty applies to you from January 1, 2027.</p>

      <h2>The federal backstop: deception is deception</h2>

      <p>No federal statute requires a website chatbot to identify itself. But Section 5 of the <a href="https://www.ftc.gov/legal-library/browse/statutes/federal-trade-commission-act" target="_blank" rel="noopener noreferrer">Federal Trade Commission Act</a> prohibits &ldquo;unfair or deceptive acts or practices in or affecting commerce,&rdquo; and the FTC has addressed bots that pass as people. In 2023, the FTC stated in a business guidance post that &ldquo;people should know if they&apos;re communicating with a real person or a machine.&rdquo; (<a href="https://web.archive.org/web/20250301014000/https://www.ftc.gov/business-guidance/blog/2023/05/luring-test-ai-engineering-consumer-trust" target="_blank" rel="noopener noreferrer">FTC Business Blog, May 1, 2023, archived copy</a>. The FTC has since removed the post from its website, so treat it as the agency&apos;s 2023 position, not necessarily its current guidance.)</p>

      <p>Every state also has its own consumer-protection statute modeled on Section 5. In states with no chatbot-specific law, a bot that claims to be &ldquo;Jessica from our support team&rdquo; and lets the customer believe it is a person is a deception claim waiting for a plaintiff or an attorney general. That is the real reason to disclose everywhere, not just in Maine.</p>

      <h2>A related risk: chat transcripts and wiretap claims</h2>

      <p>Disclosure laws are about what the bot says about itself. A separate line of litigation is about what happens to the conversation. Plaintiffs have sued businesses under California&apos;s Invasion of Privacy Act (CIPA), a 1967 wiretap statute with statutory damages of up to $5,000 per violation, arguing that the third-party vendor running a website chat feature is an unauthorized eavesdropper on the customer&apos;s conversation with the business.</p>

      <p>The results are mixed. In <em>Ambriz v. Google</em> (N.D. Cal., February 2025), a federal court let a CIPA claim over Google&apos;s customer-service AI proceed, reasoning that the vendor&apos;s technical <em>capability</em> to use the call data for its own purposes was enough at the pleading stage. In <em>Gutierrez v. Converse</em> (9th Cir., July 2025), the Ninth Circuit affirmed judgment for the business because the plaintiff had no evidence the chat vendor actually read or used the messages. In other words, these suits can survive a motion to dismiss and still lose on the evidence, which is an expensive way to win.</p>

      <p>California&apos;s SB 690, signed September 30, 2026, cut off private suits under one CIPA provision (the pen-register section) for website and app conduct. It does not touch the wiretap section these chat cases rely on. If your chat vendor uses transcripts to train its models, the risk is real, and a clear notice at the start of the chat that the conversation is recorded and shared with a service provider is cheap insurance.</p>

      <h2>A typical scenario</h2>

      <p>Consider a three-location home-services company that put a generative AI assistant on its website last spring. The vendor&apos;s default persona introduced itself with a first name and a stock photo of a smiling woman in a headset. Nobody at the company thought twice about it until a customer in Maine, angry about a missed appointment, posted a screenshot of the exchange alongside the line &ldquo;I asked for a manager three times and it turned out I was arguing with software.&rdquo;</p>

      <p>There was no lawsuit. There was a fast meeting. The fix took less than a day: new greeting (&ldquo;Hi, I&apos;m the automated assistant for [company]. I can book, reschedule, and answer common questions. Type &apos;person&apos; anytime to reach our team.&rdquo;), a real handoff to the office during business hours, and a one-line recording notice. The owner&apos;s takeaway is the right lesson: the label cost nothing, and the fake person cost the company a customer and a week of reputational cleanup.</p>

      <h2>The five-point checklist</h2>

      <p>This checklist meets or exceeds every state rule in the list above for an ordinary small business, and it addresses the FTC deception risk at the same time.</p>

      <ol>
        <li><strong>Disclose at the start of the chat.</strong> First message, plain words: &ldquo;I&apos;m an automated assistant,&rdquo; not a name and headshot. This satisfies Maine, Utah&apos;s safe harbor, and the likely Colorado rule all at once.</li>
        <li><strong>Answer honestly if asked.</strong> Configure the bot so that &ldquo;Are you a real person?&rdquo; always gets a truthful answer, even mid-conversation. Test it. Generative models can be talked into role-play.</li>
        <li><strong>Offer a way to reach a human.</strong> A keyword, a button, or a callback form. You are not under AB 1609&apos;s time limits unless you are a $500 million company, but a dead end is what turns an annoyed customer into a complaint.</li>
        <li><strong>Tell people the conversation is recorded.</strong> A short notice that the chat is logged and handled by a service provider, linked to your privacy policy. This is your best practical defense to the wiretap theory.</li>
        <li><strong>Fix the vendor contract.</strong> Before you sign, confirm the vendor (a) lets you control the bot&apos;s greeting and persona, (b) limits its own use of your transcripts (especially for model training), (c) tells you where transcripts are stored and for how long, and (d) supports a human handoff.</li>
      </ol>

      <p>One boundary worth drawing clearly: disclosure solves the &ldquo;is it a bot?&rdquo; problem. It does nothing for the &ldquo;the bot promised a refund we don&apos;t offer&rdquo; problem. A label does not let you disown what your chatbot tells a customer about prices, policies, or products. That is a separate question, covered in <a href="/blog/when-is-my-business-liable-for-ai">when your business is liable for what its AI says</a>.</p>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>We are a small business outside Maine, Utah, California, and Colorado. Do we need to disclose?</h3>
        <p>No statute in your state may require it today, but your customers may be in those states, and the FTC Act and your own state&apos;s consumer-protection law still prohibit deception. Disclosing costs one sentence. Not disclosing is the only option with downside.</p>
      </div>

      <div className="faq-item">
        <h3>Does a scripted, non-AI chatbot count?</h3>
        <p>Under Maine&apos;s law, yes: it covers any software that simulates human conversation. Utah&apos;s rule is limited to generative AI. Colorado&apos;s covers AI systems that primarily simulate conversation. The safe practice does not depend on the technology.</p>
      </div>

      <div className="faq-item">
        <h3>Is a disclaimer buried in our terms of service enough?</h3>
        <p>No. Maine requires clear notice, and Utah&apos;s safe harbor requires clear and conspicuous disclosure at the outset. Put the disclosure in the chat window itself.</p>
      </div>

      <div className="faq-item">
        <h3>Our bot only books appointments. Is it a &ldquo;companion chatbot&rdquo; under California SB 243?</h3>
        <p>Almost certainly not. SB 243 excludes bots used only for customer service or business operations. Some practitioners caution that a support bot that remembers past conversations and builds a personal rapport with users could drift toward the companion definition, but a scheduling bot is nowhere near that line.</p>
      </div>

      <h2>For ongoing tracking</h2>

      <p>State chatbot rules are still being written, including Colorado&apos;s final rules. We track changes at <a href="/ai-current">silvertonpublishing.com/ai-current</a>.</p>

      <p><em>This article reflects state and federal chatbot disclosure law as of October 2026. New state laws and rules in this area are arriving every legislative session. Confirm the current rules in the states where your customers live before relying on it. Nothing in this article is legal advice for your specific situation.</em></p>

    </>
  ),

  "sba-7a-business-acquisition-sop-50-10-8-1-2026": (
    <>
      <p>If you are buying a small business with an SBA 7(a) loan and your lender has not yet issued your SBA loan number, the rules of your deal changed on Thursday, October 1.</p>

      <p>On August 14, 2026, the Small Business Administration issued <a href="https://legacy.sba.gov/document/information-notice-5000-880695-issuance-sop-50-10-81" target="_blank" rel="noopener noreferrer">Information Notice 5000-880695</a> announcing SOP 50 10 8.1, the new version of the rulebook lenders follow for 7(a) and 504 loans. It applies to every application that receives an SBA loan number on or after <strong>October 1, 2026</strong>. Not every application <em>submitted</em> after that date: every application <em>numbered</em> after it. A deal that was in underwriting in September but did not get its number before October 1 is under the new rules.</p>

      <p>The headline for buyers is that SBA acquisition financing got more structured and somewhat stricter. The headline for sellers is that the seller note, the piece of the deal that so often closes the gap between what the buyer has and what the bank will lend, is more constrained than it was.</p>

      <h2>Three versions in five years</h2>

      <p>It helps to see where this came from.</p>

      <p><strong>SOP 50 10 7 and 7.1 (2023).</strong> The SBA loosened acquisition lending considerably. Equity injection for a complete change of ownership stayed at 10%, but lenders got broad discretion to follow their own policies for similar non-SBA loans (the so-called &ldquo;do what you do&rdquo; approach). Seller notes could count toward the buyer&apos;s equity if they were on full standby for just the first 24 months of the loan, and even partial-standby notes (interest-only) could count in some cases. SOP 50 10 7.1 took effect November 15, 2023, according to <a href="https://www.sba.gov/sites/default/files/2023-10/5000-848663.pdf" target="_blank" rel="noopener noreferrer">SBA Procedural Notice 5000-848663</a>.</p>

      <p><strong>SOP 50 10 8 (June 1, 2025).</strong> The SBA reversed course. The 10% minimum injection was firmly reinstated for changes of ownership and startups, &ldquo;do what you do&rdquo; was eliminated, and a seller note could count toward equity only if it was on <strong>full standby for the entire life of the SBA loan</strong>, no principal, no interest, and then only for up to half of the required injection.</p>

      <p><strong>SOP 50 10 8.1 (October 1, 2026).</strong> The new version keeps 8.0&apos;s tighter posture and reorganizes change-of-ownership lending into a dedicated appendix (Appendix 15) with separate rules for different kinds of deals.</p>

      <h2>What did not change</h2>

      <p><strong>The 10% minimum equity injection for a complete change of ownership.</strong> If you are buying 100% of a business you do not already own, you still need to put in at least 10% of the total project cost, meaning the purchase price plus closing costs, working capital, and other uses of the loan. Under 8.1, that minimum cannot be reduced for a first-time buyer.</p>

      <p><strong>Full standby means full standby.</strong> A seller note still counts toward your equity only if the seller agrees to take no payments of principal or interest for the full term of the 7(a) loan. A note with payments, or with interest-only payments, does not count as equity.</p>

      <h2>What changed</h2>

      <p>The details below come from the SBA notice and from lender-side and law-firm summaries of Appendix 15. We were not able to review the full SOP text directly, and the summaries agree on most points but not all. Ask your lender to confirm any item that matters to your deal.</p>

      <p><strong>Four transaction categories.</strong> Appendix 15 sorts changes of ownership into <strong>initial acquisitions</strong> (a new owner buying in), <strong>business expansions</strong> (an existing business buying another in its industry), <strong>owner buyouts</strong> (existing owners buying out a partner), and <strong>ESOP/cooperative</strong> transactions. The equity, coverage, and diligence rules differ by category. Most individual buyers are doing an initial acquisition.</p>

      <p><strong>&ldquo;Limited&rdquo; versus &ldquo;unlimited&rdquo; equity sources, with a 50% cap.</strong> This is the most important structural change. Equity sources are now sorted into two buckets:</p>

      <ul>
        <li><strong>Limited sources</strong> include seller debt on full standby, other standby debt, and equity from non-controlling minority investors (reported as owners of less than 20% with no control). Together, limited sources can make up <strong>no more than half</strong> of the required injection.</li>
        <li><strong>Unlimited sources</strong> are principally the buyer&apos;s own cash (including cash the buyer borrowed personally and repays outside the business) and qualifying grants. At least half of the required injection must come from here.</li>
      </ul>

      <p>Under 8.0, the 50% cap applied to the seller note. Under 8.1, multiple summaries report that it applies to all limited sources <strong>combined</strong>. If you were planning to cover half your injection with a seller note and a chunk of the rest with money from a few passive investors, that structure no longer works.</p>

      <p><strong>Higher cash-flow coverage, based on history, not projections.</strong> Summaries consistently report that initial acquisitions, owner buyouts, and ESOP deals now require a debt service coverage ratio of at least <strong>1.25 to 1</strong>, up from 1.15 to 1, while business expansions stay at 1.15. Coverage must be shown on historical or adjusted historical earnings. A buyer&apos;s projections of what the business will do after closing generally cannot make up a shortfall.</p>

      <p><strong>Quality of earnings for larger deals.</strong> Initial acquisitions and business expansions with a business purchase price of <strong>$3 million or more</strong> (excluding owner-occupied real estate) now require a quality of earnings report, including a &ldquo;cash proof&rdquo; that reconciles bank deposits to the financial statements and tax returns. Several summaries report that the lender commissions the report.</p>

      <p><strong>Longer seller transitions.</strong> A selling owner can stay on as a consultant for up to 24 months, up from 12.</p>

      <p><strong>Longer seasoning before refinancing seller debt.</strong> Several summaries report that seller debt created in a 7(a) change of ownership must be in place and current for <strong>36 months</strong> (up from 24) before it can be refinanced. We could not confirm this in the SOP text itself. Treat it as likely, and verify with your lender.</p>

      <p><strong>Citizenship and residency.</strong> Separately from 8.1, the SBA issued <a href="https://www.naggl.org/notice-further-revising-sba-loan-citizenship-and-residency-requirements/" target="_blank" rel="noopener noreferrer">Policy Notice 5000-876441</a> in February 2026, which 8.1 now incorporates. It requires 100% of the direct and indirect owners of an SBA borrower to be U.S. citizens or U.S. nationals, and makes lawful permanent residents ineligible to hold any ownership interest. Earlier exceptions for small foreign ownership stakes were rescinded. If anyone in your buying group holds a green card rather than citizenship, raise this with your lender on day one.</p>

      <p><strong>No light-touch underwriting for small acquisitions.</strong> Reports agree that the streamlined &ldquo;7(a) small loan&rdquo; process is no longer available for any change of ownership, regardless of size. Every acquisition gets a full credit memorandum and a business valuation.</p>

      <h2>A worked example</h2>

      <p>Say you are buying a commercial cleaning company for <strong>$2,000,000</strong>. Closing costs, a small working-capital cushion, and the SBA guaranty fee bring total project costs to <strong>$2,100,000</strong>.</p>

      <p><strong>Equity injection.</strong> Ten percent of $2,100,000 is <strong>$210,000</strong>. Under 8.1:</p>

      <ul>
        <li>No more than <strong>$105,000</strong> can come from limited sources (a full-standby seller note, minority investors, or other standby debt, combined).</li>
        <li>At least <strong>$105,000</strong> must come from your own money.</li>
      </ul>

      <p>So if the seller agrees to carry a $105,000 note on full standby for the life of the loan, you need $105,000 of your own cash. If you also hoped a friend would invest $50,000 for a 10% stake, that $50,000 counts toward the same $105,000 limited-source cap. It cannot replace your cash.</p>

      <p><strong>The loan.</strong> The 7(a) loan covers the remaining <strong>$1,890,000</strong>. At an illustrative 9.75% interest rate on a 10-year term, annual debt service is roughly <strong>$296,600</strong>.</p>

      <p><strong>Coverage.</strong> At the old 1.15 ratio, the business would need about <strong>$341,100</strong> of available cash flow, based on its historical results, to support that payment. At the new 1.25 ratio, it needs about <strong>$370,700</strong>: roughly <strong>$29,700 more</strong> every year, measured on what the business has actually earned, not on your plan for it. On a business producing $350,000 a year, that is the difference between an approved deal and a declined one, or a renegotiated price.</p>

      <p><strong>Diligence.</strong> At a $2 million price, no quality of earnings report is required by the SOP. At $3 million, it would be. Many lenders will ask for one anyway on deals close to the line.</p>

      <h2>A typical scenario</h2>

      <p>Consider a buyer who was under contract this summer to buy a regional HVAC service company. The structure, negotiated in the spring, used a seller note for half the equity and a small investment from two family members for most of the rest. The lender&apos;s commitment letter arrived in late August with a note that the loan would be numbered after October 1.</p>

      <p>Under 8.1, the family money and the seller note were now in the same capped bucket, and the buyer&apos;s own cash fell short of the required half. The deal survived because the seller agreed to a price reduction and the family members converted their investment into a personal loan to the buyer, repaid from the buyer&apos;s own income, which reportedly can count as an unlimited source. That took three weeks of renegotiation and an amended purchase agreement. If the parties had built the structure with the new rules in mind, it would have taken none.</p>

      <h2>What buyers should do differently</h2>

      <ul>
        <li><strong>Find out when your loan will be numbered.</strong> That date, not your letter of intent, decides which rules apply.</li>
        <li><strong>Recount your equity.</strong> Sort every dollar into limited or unlimited. If more than half of your required injection comes from sellers, investors, or standby lenders, restructure now.</li>
        <li><strong>Underwrite on history.</strong> Run the 1.25 coverage test on the seller&apos;s last full fiscal year and the two-year average before you agree to a price. If the business does not cover, the price is the problem.</li>
        <li><strong>Budget for diligence.</strong> At $3 million and up, plan on a quality of earnings report and the time it takes.</li>
        <li><strong>Check every owner&apos;s citizenship status</strong> before you form the buying entity.</li>
      </ul>

      <p>For the broader acquisition process, see <a href="/blog/how-to-buy-a-small-business">how to buy a small business</a> and <a href="/blog/financing-business-acquisition">financing a business acquisition</a>. And remember that under <a href="https://www.ecfr.gov/current/title-13/chapter-I/part-120/subpart-A/subject-group-ECFRa096ec067b9c6cf/section-120.160" target="_blank" rel="noopener noreferrer">SBA regulations</a>, every owner of 20% or more of the borrower must personally guarantee the loan, a topic covered in <a href="/blog/personal-guarantees-business-loans">personal guarantees on business loans</a>.</p>

      <h2>What sellers should do differently</h2>

      <ul>
        <li><strong>Expect to be asked for a full-standby note.</strong> If the buyer needs your note to count as equity, you will receive nothing on it until the SBA loan is repaid or, if the 36-month seasoning rule is confirmed, refinanced. Price that delay into your decision.</li>
        <li><strong>Have clean books.</strong> Coverage is now measured on your historical results, and above $3 million a third party will reconcile your bank deposits to your tax returns. Add-backs you cannot document will not survive.</li>
        <li><strong>Offer a longer transition.</strong> The 24-month consulting window is a real selling point for a lender evaluating a buyer without industry experience.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>Does the 10% equity injection apply to partial buyouts?</h3>
        <p>Owner buyouts and business expansions are treated as separate categories. Summaries indicate that, unlike initial acquisitions, the 10% injection in those categories can be reduced or eliminated when the borrower shows sufficient liquidity, working capital, and positive net worth. Confirm with your lender.</p>
      </div>

      <div className="faq-item">
        <h3>Can a seller note with payments still be part of the deal?</h3>
        <p>Yes, as financing, but not as equity. A note with scheduled payments does not count toward the injection, and its payments are included when the lender tests debt service coverage, which makes the 1.25 ratio harder to meet.</p>
      </div>

      <div className="faq-item">
        <h3>We submitted our application in September. Are we grandfathered?</h3>
        <p>Only if your loan received its SBA loan number before October 1, 2026. Submission alone does not lock in the old rules.</p>
      </div>

      <div className="faq-item">
        <h3>Is there still a maximum 7(a) loan amount?</h3>
        <p>Yes. The 7(a) program maximum remains $5 million, and 8.1 coordinates the 7(a) and 504 limits for borrowers using both. Ask your lender how the cap applies if your deal combines programs.</p>
      </div>

      <p><em>This article reflects SBA 7(a) acquisition lending rules as of October 2026. The SBA has revised these rules three times since 2023 and issues procedural notices between SOP versions. Confirm the current SOP and any later notices with your lender before relying on it. Nothing in this article is legal advice for your specific situation.</em></p>

    </>
  ),

};
