import type { ReactNode } from "react";

// Blog-cycle 2026-11-02 additions.
export const batch19Content: Record<string, ReactNode> = {
  "ai-agent-purchases-who-is-bound-amazon-perplexity-2026": (
    <>
      <p>Consider a 12-person landscaping company. The office manager installs an AI browser agent and tells it to &ldquo;reorder the usual irrigation parts and find the cheapest shipping.&rdquo; The agent logs into the company&apos;s supplier account, adds 40 cases instead of four, accepts the supplier&apos;s updated terms of sale along the way, and checks out on the company card. Nobody looked at the order until the freight truck showed up.</p>

      <p>Is the company stuck with that order? In most cases, the honest answer is yes. AI agents that browse, compare, and buy on your behalf are no longer a demo. Courts and websites have started deciding how they fit into existing law, and the early answers point the same way: what your agent does is treated as something you did.</p>

      <h2>What the Ninth Circuit decided in Amazon v. Perplexity</h2>

      <p>The case most owners have heard about is <em>Amazon.com Services, LLC v. Perplexity AI, Inc.</em> Amazon sued Perplexity in November 2025 over the Comet browser&apos;s built-in AI agent, which Perplexity calls the Assistant. When a user tells it to shop on Amazon.com, the agent navigates the site, fills a cart, and can check out. Amazon claimed this violated the federal Computer Fraud and Abuse Act and California&apos;s computer-access statute, because Amazon had told Perplexity its agent was not authorized. The district court granted Amazon a preliminary injunction.</p>

      <p>On August 4, 2026, the Ninth Circuit <a href="https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/04/26-1444.pdf" target="_blank" rel="noopener noreferrer">vacated that injunction</a>. The court held that Amazon was unlikely to prove that Perplexity itself &ldquo;accessed&rdquo; Amazon&apos;s computers. The statute punishes a person who accesses a computer, and the agent, &ldquo;however advanced,&rdquo; is &ldquo;a tool, not a person for statutory purposes.&rdquo; On the record before it, the court concluded: &ldquo;It is the user who &lsquo;accesses&rsquo; Amazon&apos;s computers, with the help of the Assistant to carry out specific acts on Amazon.com.&rdquo;</p>

      <p>The panel was careful to say what it was not deciding. &ldquo;We do not establish a new legal regime governing agentic AI,&rdquo; the opinion says, and it does not address whether Perplexity could avoid liability for the agent&apos;s actions in other contexts, including tort claims. The holding is limited to &ldquo;access&rdquo; under the two computer-access statutes, at the preliminary-injunction stage, and on the facts presented. On September 10, 2026, the court <a href="https://www.courthousenews.com/wp-content/uploads/2026/09/amazon-perplexity-no-rehearing.pdf" target="_blank" rel="noopener noreferrer">denied rehearing en banc</a>, and no judge on the full court requested a vote.</p>

      <p>The case is not over. According to the <a href="https://www.courtlistener.com/docket/71874820/amazoncom-services-llc-v-perplexity-ai-inc/" target="_blank" rel="noopener noreferrer">district court docket</a>, Amazon filed an amended complaint on September 21, 2026, and Perplexity moved to dismiss it on October 13, 2026. As of the end of October 2026, that motion was pending and the parties were in discovery disputes. No court has found that either side broke the law.</p>

      <h2>Why the user is the one who acts</h2>

      <p>For a business owner, the important part of the opinion is its framing. Amazon argued that the agent&apos;s autonomy made Perplexity the actor. The court rejected that and put the user in the driver&apos;s seat: the user chose the tool, gave the instruction, and used the tool to act on the website. The court even noted that Amazon&apos;s theory could have exposed users themselves to liability for &ldquo;facilitating&rdquo; the access.</p>

      <p>That is a computer-crime holding, not a contract holding. But it lines up with how contract law already treats software that acts for you, and contract law is where most of your exposure sits when an agent buys something.</p>

      <h2>The contract rule: your agent&apos;s clicks are your clicks</h2>

      <p>Two overlapping statutes govern most electronic contracts in the United States: the federal E-SIGN Act and the Uniform Electronic Transactions Act (UETA), which many states have adopted in some form. Both anticipated software agents more than 25 years ago.</p>

      <p>E-SIGN defines an <strong>electronic agent</strong> as &ldquo;a computer program or an electronic or other automated means used independently to initiate an action or respond to electronic records or performances in whole or in part without review or action by an individual at the time of the action or response&rdquo; (<a href="https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap96-subchapI-sec7006.htm" target="_blank" rel="noopener noreferrer">15 U.S.C. § 7006(3)</a>). An AI shopping agent fits that description comfortably.</p>

      <p>Then <a href="https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap96-subchapI-sec7001.htm" target="_blank" rel="noopener noreferrer">15 U.S.C. § 7001(h)</a> provides that a contract in interstate commerce &ldquo;may not be denied legal effect, validity, or enforceability solely because its formation, creation, or delivery involved the action of one or more electronic agents so long as the action of any such electronic agent is legally attributable to the person to be bound.&rdquo;</p>

      <p>UETA goes further. Utah&apos;s enactment, in force since 2000, is a good example. Under <a href="https://le.utah.gov/xcode/Title46/Chapter4/C46-4-S401_1800010118000101.html" target="_blank" rel="noopener noreferrer">Utah Code § 46-4-401</a>, a contract &ldquo;may be formed by the interaction of electronic agents of the parties, even if no individual was aware of or reviewed the electronic agents&apos; actions or the resulting terms and agreements.&rdquo; Read that again with the landscaping company in mind. Nobody at the company reviewed the order or the updated terms, and the statute says that doesn&apos;t matter.</p>

      <p>Whether the order is &ldquo;attributable&rdquo; to the company is answered by <a href="https://le.utah.gov/xcode/Title46/Chapter4/C46-4-S203_1800010118000101.html" target="_blank" rel="noopener noreferrer">Utah Code § 46-4-203</a>: an electronic record is attributable to a person &ldquo;if it was the act of the person,&rdquo; and that act &ldquo;may be shown in any manner,&rdquo; including by the security procedure used. An agent operating inside your logged-in account, with your saved payment method, after your employee told it to buy, is going to look like your act.</p>

      <p>Two cautions. First, state versions of UETA vary, and section numbers differ from state to state, so check your own state&apos;s statute before relying on any particular wording. Second, nothing here means every agent action binds you no matter what. Attribution still runs through ordinary agency and contract principles, and a seller who knew the order was wrong is in a different position from one who had no reason to think so. But the starting presumption favors the seller.</p>

      <h2>The error rule probably won&apos;t rescue you</h2>

      <p>Owners often assume there is an &ldquo;oops&rdquo; provision for computer mistakes. UETA does have one, but it was written for a different problem. Under <a href="https://le.utah.gov/xcode/Title46/Chapter4/C46-4-S204_1800010118000101.html" target="_blank" rel="noopener noreferrer">Utah Code § 46-4-204(1)(b)</a>, an individual may avoid an electronic record that resulted from an error the individual made &ldquo;in dealing with the electronic agent of another person&rdquo; if that other person&apos;s system gave no opportunity to prevent or correct the error. The individual must also promptly give notice, return or destroy what was received, and not have used or benefited from it.</p>

      <p>That rule protects a person who fat-fingers an order on someone else&apos;s automated system. By its terms it does not address a mistake made by your own agent acting for you. When neither of the statute&apos;s specific rules applies, the error &ldquo;has the effect provided by other law, including the law of mistake, and the parties&apos; contract.&rdquo; In practice, that usually means you are negotiating with the seller under its return policy, not invoking a statutory right to unwind the purchase.</p>

      <h2>The website&apos;s terms may ban the agent entirely</h2>

      <p>The Ninth Circuit added a footnote that matters more for owners than the headline holding. Its ruling, the court wrote, &ldquo;does not impair Amazon&apos;s ability to regulate access to Amazon.com via private terms of service for its users.&rdquo; In other words, losing a computer-crime argument does not stop a website from writing contract rules about agents.</p>

      <p>Amazon has done exactly that. Its <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM" target="_blank" rel="noopener noreferrer">Conditions of Use</a>, last updated August 14, 2026, now include &ldquo;Agent Terms&rdquo; that apply if you &ldquo;use, allow, enable, or cause the deployment of&rdquo; an agent on Amazon&apos;s services. An <strong>Agent</strong> is &ldquo;any software or service that takes autonomous or semi-autonomous action on behalf of, or at the instruction of, any person or entity.&rdquo; Under those terms, an agent must:</p>

      <ul>
        <li>identify itself in every request with a user-agent string in the form &ldquo;Agent/[agent name]&rdquo;;</li>
        <li>not conceal that it is an agent, including by mimicking human typing or navigation patterns or by solving CAPTCHAs;</li>
        <li>answer truthfully when asked whether it is a human or a computer; and</li>
        <li>not circumvent measures meant to block or limit agents.</li>
      </ul>

      <p>No agent may use the services at all if Amazon has asked it to refrain. The same Conditions of Use say the licenses Amazon grants &ldquo;terminate if you do not comply.&rdquo; Notice who those terms bind: you, the account holder, if you allow or cause the deployment. If your agent doesn&apos;t comply, the breach is yours, and the account at risk is yours.</p>

      <p>Amazon is the most visible example, not the only site that can write rules like these. Supplier portals, marketplaces, travel sites, and SaaS vendors can each decide whether agents are welcome. Before you point an agent at a vendor, read that vendor&apos;s current terms.</p>

      <h2>If you sell, the same rules work for you</h2>

      <p>Flip the facts. If your customers start sending agents to your online store, UETA&apos;s attribution rule helps you: an order placed by a customer&apos;s agent is generally that customer&apos;s order. Your terms of sale decide the rest. It is worth asking whether your terms say anything about agents, whether you want to require them to identify themselves, and whether your checkout gives a buyer (human or software) a clear chance to confirm before the order is final. A clear confirmation step also cuts off the error defense described above, since that rule applies only when the system offered no opportunity to prevent or correct the mistake.</p>

      <h2>Controls that keep agent purchases inside the lines</h2>

      <p>The law will keep developing, but the risk is manageable now with ordinary purchasing controls adapted to software.</p>

      <p><strong>Give the agent its own payment method with a low limit.</strong> A virtual card with a per-transaction and monthly cap turns a runaway order into a small problem. Never let an agent use a card with your full credit line.</p>

      <p><strong>Require a human approval step before checkout.</strong> Most agent tools can pause for confirmation. Turn that on for every purchase, every subscription, and every &ldquo;I agree&rdquo; click. Approval should show the total, the quantity, and any terms being accepted.</p>

      <p><strong>Limit where the agent can go.</strong> Use an allowlist of vendors whose terms you have reviewed and who permit agents. Keep the agent out of accounts that can bind the company to long-term contracts.</p>

      <p><strong>Decide who may deploy agents, in writing.</strong> An agent acting on a company account is acting for the company. Your <a href="/blog/employee-ai-use-policy">employee AI use policy</a> should say who can run agents on company accounts and for what.</p>

      <p><strong>Read the agent provider&apos;s contract.</strong> Find out what the provider promises about errors, whether it identifies itself to websites, and whether it disclaims all liability for the agent&apos;s actions. Most standard terms put the risk on you. Our <a href="/blog/ai-vendor-contract-negotiation-checklist">AI vendor contract checklist</a> lists the clauses worth asking for.</p>

      <p><strong>Keep logs.</strong> If a dispute arises, you will want the instruction the employee gave, the steps the agent took, and the screens it saw. Logs are also your best evidence if a seller&apos;s system, not your agent, caused the mistake.</p>

      <p>For the broader question of when a business answers for what its AI tools do, including the theory that an AI vendor can act as an employer&apos;s agent in hiring, see <a href="/blog/when-is-my-business-liable-for-ai">when is my business liable for AI</a>.</p>

      <h2>Frequently asked questions</h2>

      <h3>Can I cancel an order my AI agent placed by mistake?</h3>

      <p>Possibly, but usually under the seller&apos;s return or cancellation policy rather than a legal right. UETA&apos;s error rule is written for an individual&apos;s mistake on another party&apos;s automated system. A mistake by your own agent generally falls back on the law of mistake and the contract terms. Contact the seller quickly and keep records.</p>

      <h3>Did the Ninth Circuit say AI agents are legal on any website?</h3>

      <p>No. It held only that Amazon was unlikely to win its computer-access claims against Perplexity on the record at the preliminary-injunction stage. It expressly preserved a website&apos;s ability to regulate agents through its terms of service, and the case is still pending in the district court.</p>

      <h3>If my agent breaks a website&apos;s terms, is that my problem or the agent provider&apos;s?</h3>

      <p>Often yours. Terms like Amazon&apos;s Agent Terms bind the user who allows or causes the agent&apos;s use, and the consequence can be losing access to your account. Whether you can recover anything from the agent provider depends on your contract with it.</p>

      <p><em>This article reflects the Ninth Circuit&apos;s August 4, 2026 opinion and September 10, 2026 order in Amazon.com Services, LLC v. Perplexity AI, Inc., the district court docket, the cited federal and Utah statutes, and Amazon&apos;s Conditions of Use as of November 2026. State electronic-transaction statutes vary. This is general information, not legal advice for your situation.</em></p>
    </>
  ),
  "ai-voice-agents-tcpa-robocall-rules-2026": (
    <>
      <p>AI voice agents have become cheap enough for a dental office, a roofing contractor, or a property manager to deploy in an afternoon. They call customers to confirm appointments, chase unpaid invoices, follow up on web leads, and pitch renewals, in a voice that sounds like a friendly human.</p>

      <p>Under federal law, every one of those outbound calls is a call made with an &ldquo;artificial or prerecorded voice.&rdquo; That puts it under the Telephone Consumer Protection Act (TCPA), a statute that lets each person called sue for each call. And on November 25, 2026, the FCC&apos;s rules on how customers stop those calls change.</p>

      <h2>The 2024 ruling: an AI voice is an artificial voice</h2>

      <p>The TCPA has restricted calls using an &ldquo;artificial or prerecorded voice&rdquo; since 1991. In February 2024, the FCC removed any doubt about AI. In <a href="https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf" target="_blank" rel="noopener noreferrer">Declaratory Ruling FCC 24-17</a>, adopted February 2, 2024, the Commission confirmed that &ldquo;the TCPA&apos;s restrictions on the use of &lsquo;artificial or prerecorded voice&rsquo; encompass current AI technologies that generate human voices.&rdquo; As a result, such calls &ldquo;require the prior express consent of the called party to initiate such calls absent an emergency purpose or exemption.&rdquo;</p>

      <p>The ruling covers both a wholly synthetic voice and a cloned voice taken from a real person&apos;s audio. It also reminds callers that the identification, disclosure, and opt-out rules for artificial-voice calls apply, and that those requirements reach &ldquo;any AI technology that initiates any outbound telephone call using an artificial or prerecorded voice to consumers.&rdquo;</p>

      <h2>Inbound and outbound are different problems</h2>

      <p>The word that matters is &ldquo;initiates.&rdquo; The TCPA&apos;s robocall restrictions are about making calls. An AI receptionist that only answers calls your customers place to you is not initiating calls, so the consent rules discussed here don&apos;t apply to that conversation. Other laws can, including recording-consent statutes if the call is recorded or transcribed (see our piece on <a href="/blog/ai-notetakers-recording-consent-otter-lawsuit-2026">AI notetakers and recording consent</a>) and state bot-disclosure laws (see <a href="/blog/website-chatbot-disclosure-laws-2026">the 2026 chatbot disclosure map</a>).</p>

      <p>The moment that same receptionist calls the customer back, sends a reminder call the next day, or dials a list of leads, it is placing an artificial-voice call. Many voice-agent products do both, so map which of your call flows are outbound before anything else.</p>

      <h2>What consent you need for an outbound AI call</h2>

      <p>The FCC&apos;s rule, <a href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200" target="_blank" rel="noopener noreferrer">47 CFR 64.1200</a>, splits calls into two kinds. An <strong>informational call</strong> contains no advertising or telemarketing: an appointment reminder, a delivery notice, a past-due notice. A <strong>telemarketing call</strong> encourages a purchase or includes an advertisement, such as a renewal pitch, an upsell, or a promotion.</p>

      <ul>
        <li><strong>Informational calls to cell phones</strong> need the called party&apos;s prior express consent. Since 1992 the FCC has said that calling a number &ldquo;provided as one at which the called party wishes to be reached&rdquo; does not violate its rules, so a customer who gives you a cell number for their account has generally consented to calls about that account. Keep a record of where and why the number was given.</li>
        <li><strong>Informational calls to residential landlines</strong> for a commercial purpose need no consent if you make no more than three such calls in any 30-day period and honor opt-out requests, under 64.1200(a)(3)(iii).</li>
        <li><strong>Telemarketing calls</strong> with an artificial voice, to cell phones or residential lines, require <strong>prior express written consent</strong> under 64.1200(a)(2) and (a)(3). That means a signed agreement, electronic signatures included, that clearly authorizes calls using an artificial or prerecorded voice to a specific number, and that discloses the customer is not required to sign as a condition of buying anything.</li>
      </ul>

      <p>One appeals court has pushed back on the written-consent rule. In <a href="https://www.ca5.uscourts.gov/opinions/pub/24/24-20379-CV0.pdf" target="_blank" rel="noopener noreferrer"><em>Bradford v. Sovereign Pest Control of TX</em></a>, decided February 25, 2026, the Fifth Circuit held that the statute itself requires only &ldquo;prior express consent,&rdquo; which can be oral or written, for any prerecorded call. It said the statute &ldquo;provides no basis for concluding that telemarketing calls require prior express written consent but not oral consent,&rdquo; contrary to the FCC&apos;s regulation. The customer there had given his cell number on a service agreement and confirmed in later conversations that the company could call him.</p>

      <p>Bradford binds federal courts in Texas, Louisiana, and Mississippi. Elsewhere, the FCC&apos;s written-consent requirement remains the rule courts start from, and even inside the Fifth Circuit, a signed written consent is better evidence than a remembered conversation. For an outbound AI sales campaign, get written consent.</p>

      <h2>What every AI-voice call must say</h2>

      <p>Consent is only half of it. Under 64.1200(b), every artificial or prerecorded voice message must:</p>

      <ul>
        <li>state clearly, at the beginning, the identity of the business responsible for the call, using the name under which it is registered to do business with the state;</li>
        <li>state clearly, during or after the message, a telephone number for that business (not the number of the system that placed the call); and</li>
        <li>for telemarketing calls, and for informational calls to residential lines made under the no-consent exemptions, provide an automated, interactive voice or key-press opt-out mechanism, with brief instructions, so the person can make a do-not-call request during the call.</li>
      </ul>

      <p>A voice agent that opens with &ldquo;Hi, it&apos;s Jessica!&rdquo; and never names the business fails the first requirement on the first sentence. Write the opening into the script, and don&apos;t let the model improvise it.</p>

      <h2>What changes on November 25, 2026</h2>

      <p>On September 30, 2026, the FCC adopted a Report and Order (FCC 26-67) revising how consumers revoke consent. It was published at <a href="https://www.govinfo.gov/content/pkg/FR-2026-10-26/html/2026-21821.htm" target="_blank" rel="noopener noreferrer">91 FR 67214</a> on October 26, 2026, and takes effect November 25, 2026. Three changes matter for voice agents.</p>

      <p><strong>Revocations can be limited to the category of informational call.</strong> Under the revised rule, a revocation made in response to an informational call may be treated as applying &ldquo;only to the specific category of informational robocalls and text messages to which the revocation was directed.&rdquo; A patient who opts out of payment-reminder calls can still get appointment reminders. That flexibility does not extend to marketing: a revocation in response to a telemarketing call revokes consent to all future telemarketing calls from that caller.</p>

      <p><strong>You may designate an exclusive way to revoke.</strong> A caller may designate one or more of these as the exclusive revocation method: an automated, interactive voice or key-press opt-out on the call; a reply text using a standard word (&ldquo;stop,&rdquo; &ldquo;quit,&rdquo; &ldquo;end,&rdquo; &ldquo;revoke,&rdquo; &ldquo;opt out,&rdquo; &ldquo;cancel,&rdquo; or &ldquo;unsubscribe&rdquo;); or a website or phone number the caller designates. The catch is disclosure: &ldquo;The caller must clearly and conspicuously disclose the designated method to revoke consent on the call or in the text.&rdquo; A caller that designates no exclusive method must process revocations &ldquo;made by any reasonable means,&rdquo; and the customer gets a rebuttable presumption that they revoked.</p>

      <p>This is where AI voice agents create a specific risk. A conversational agent hears things like &ldquo;please stop calling me&rdquo; or &ldquo;take me off your list&rdquo; constantly. If you haven&apos;t designated and disclosed an exclusive method, a spoken request like that is very likely a reasonable revocation, and your system has to catch it, log it, and act on it. If you have designated a key-press opt-out, say so on every call, and consider honoring the plain-language request anyway. It costs you one customer you were going to lose, and it avoids an argument about whether your disclosure was clear and conspicuous.</p>

      <p><strong>Ten business days.</strong> All revocations must be honored within a reasonable time not to exceed ten business days from receipt. The new rule also supersedes a delayed portion of the earlier revocation rule that had been pushed to January 31, 2027.</p>

      <p>The FCC isn&apos;t finished. A companion <a href="https://www.govinfo.gov/content/pkg/FR-2026-10-26/html/2026-21820.htm" target="_blank" rel="noopener noreferrer">further notice of proposed rulemaking</a> (91 FR 67239) asks whether to shorten the ten-day window, require two-way texting, require a single &ldquo;revoke all&rdquo; method, and change how revocations apply to affiliates. Comments are due November 25, 2026, and replies December 28, 2026. As of November 2026, those are proposals, not rules.</p>

      <h2>State rules: California&apos;s artificial-voice disclosure</h2>

      <p>States add their own requirements. California&apos;s automatic dialing-announcing device statute, Public Utilities Code § 2874, was amended by <a href="https://legiscan.com/CA/bill/AB2905/2023" target="_blank" rel="noopener noreferrer">AB 2905</a> (Statutes of 2024, chapter 316). When the statute applies, the call must begin with an unrecorded, natural-voice announcement that identifies the caller and asks whether the person consents to hear the prerecorded message, and that announcement must now inform the person if the message uses an artificial voice. The amendment defines an artificial voice as one generated or significantly altered using artificial intelligence. Other states have their own telemarketing and do-not-call statutes, so check the law in each state you call into.</p>

      <h2>Why the stakes are high</h2>

      <p>The TCPA gives the person called a private right of action. Under <a href="https://www.govinfo.gov/content/pkg/USCODE-2023-title47/html/USCODE-2023-title47-chap5-subchapII-partI-sec227.htm" target="_blank" rel="noopener noreferrer">47 U.S.C. § 227(b)(3)</a>, a plaintiff can recover actual monetary loss or $500 for each violation, whichever is greater, and a court may increase the award up to three times if the violation was willful or knowing. State attorneys general can also sue for $500 per violation. Damages are counted per call. An agent that places a few thousand reminder calls a month without a clean consent record can produce a very large number.</p>

      <h2>A deployment checklist for AI voice agents</h2>

      <p>Consider a 15-employee HVAC company that wants an AI agent to confirm service appointments and, in the off season, call past customers about maintenance plans. Here is how it might set up the program.</p>

      <p><strong>Separate the call types.</strong> Appointment confirmations are informational. Maintenance-plan calls are telemarketing. Run them as separate campaigns with separate consent checks.</p>

      <p><strong>Capture written consent for marketing calls.</strong> Add a clear, separate checkbox or signed authorization to the service agreement or online booking form that covers calls using an artificial or prerecorded voice to the number given, with the &ldquo;not required to purchase&rdquo; disclosure. Store the record with a timestamp.</p>

      <p><strong>Lock the opening and closing script.</strong> The agent should open with the registered business name and give a callback number before it hangs up. Marketing calls need the automated opt-out mechanism and instructions.</p>

      <p><strong>Decide on an exclusive revocation method before November 25.</strong> If you designate one, disclose it on every call. Either way, set the agent to recognize spoken opt-out requests and route them to your do-not-call list within ten business days, and keep track of which category of informational calls each revocation covers.</p>

      <p><strong>Scrub and honor do-not-call lists.</strong> Telemarketing calls must respect the national registry and your internal do-not-call list.</p>

      <p><strong>Read the vendor contract.</strong> The rules make the business &ldquo;responsible for initiating the call&rdquo; the one that must identify itself, and that will usually be you, not the software vendor. Ask what the vendor does to support consent records, opt-out handling, and call logs, and who bears the cost of a violation caused by the platform. Our <a href="/blog/ai-vendor-contract-negotiation-checklist">AI vendor contract checklist</a> covers indemnity and liability clauses.</p>

      <p><strong>Watch your marketing claims about the agent itself.</strong> If you sell AI voice services, the FTC expects you to back up what you say they can do. See <a href="/blog/ai-washing-ftc-marketing-claims">how the FTC polices AI marketing</a>.</p>

      <h2>Frequently asked questions</h2>

      <h3>Does the TCPA apply if a human reviews the AI agent&apos;s calls afterward?</h3>

      <p>Yes. The question is whether the call was made using an artificial or prerecorded voice, and the FCC has said AI-generated voices are artificial voices. Human review after the fact doesn&apos;t change how the call was made.</p>

      <h3>Can my AI agent call customers to remind them about appointments?</h3>

      <p>Generally yes, if the customer gave you the number and the call is purely informational. The call must still identify your business at the start and give a callback number, and you must honor requests to stop within ten business days. Adding a sales pitch turns it into a telemarketing call with stricter consent rules.</p>

      <h3>Does the Fifth Circuit&apos;s Bradford decision mean oral consent is enough everywhere?</h3>

      <p>No. Bradford binds federal courts in Texas, Louisiana, and Mississippi. Outside that circuit, the FCC&apos;s requirement of prior express written consent for artificial-voice telemarketing remains in its rules, and written consent is the safer practice everywhere.</p>

      <p><em>This article reflects FCC Declaratory Ruling FCC 24-17, the FCC&apos;s Report and Order FCC 26-67 as published at 91 FR 67214 (effective November 25, 2026), 47 CFR 64.1200, 47 U.S.C. § 227, Bradford v. Sovereign Pest Control of TX (5th Cir. 2026), and California Public Utilities Code § 2874 as of November 2026. This is general information, not legal advice for your situation.</em></p>
    </>
  ),
  "exempt-salary-thresholds-2027-overtime": (
    <>
      <p>&ldquo;She&apos;s salaried, so she doesn&apos;t get overtime.&rdquo; It is one of the most common sentences in small-business payroll, and it is wrong more often than owners expect. Paying someone a salary is only one of three things the law requires before you can skip overtime. The other two are a minimum salary level and a job that actually meets a duties test.</p>

      <p>The minimum salary level is the part that changes on a calendar. On January 1, 2027, California and Washington raise theirs, and Washington&apos;s jump is large. The federal level, meanwhile, has gone back to where it was in 2020. If you have salaried employees in either state, now is the time to check every one of them.</p>

      <h2>Three tests, not one</h2>

      <p>Under the federal Fair Labor Standards Act, the main overtime exemptions cover executive, administrative, and professional employees, often called the white-collar exemptions. To use one, the employee generally must meet all three of these:</p>

      <ul>
        <li><strong>Salary basis.</strong> A predetermined amount paid each pay period that doesn&apos;t go up or down with the quantity or quality of work.</li>
        <li><strong>Salary level.</strong> At least the minimum set by federal regulation, and by state law where the state sets a higher figure.</li>
        <li><strong>Duties.</strong> The job&apos;s primary duties must fit the specific exemption, such as managing the business or a department, exercising independent judgment on significant matters, or doing work that requires advanced knowledge.</li>
      </ul>

      <p>Titles don&apos;t count. The federal rule says it directly: &ldquo;A job title alone is insufficient to establish the exempt status of an employee&rdquo; (<a href="https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-541/subpart-A/section-541.2" target="_blank" rel="noopener noreferrer">29 CFR 541.2</a>). An &ldquo;office manager&rdquo; who mainly answers phones and enters invoices may be non-exempt no matter what you pay her.</p>

      <h2>Federal: back to $684 a week</h2>

      <p>In 2024, the U.S. Department of Labor issued a rule that would have raised the federal salary level from $684 a week to $844 on July 1, 2024, and to $1,128 on January 1, 2025. Courts in Texas vacated that rule. The Eastern District of Texas did so on November 15, 2024, in <em>Texas v. U.S. Department of Labor</em>.</p>

      <p>On May 15, 2026, the Department published a <a href="https://www.govinfo.gov/content/pkg/FR-2026-05-15/html/2026-09839.htm" target="_blank" rel="noopener noreferrer">technical amendment at 91 FR 27833</a> removing the vacated 2024 text from the Code of Federal Regulations and restoring the prior version. As of November 2026, <a href="https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-541/subpart-G/section-541.600" target="_blank" rel="noopener noreferrer">29 CFR 541.600</a> sets the federal salary level at:</p>

      <ul>
        <li><strong>$684 per week</strong> (about $35,568 a year) for executive, administrative, and professional employees;</li>
        <li><strong>$27.63 per hour</strong> as an alternative for computer employees paid by the hour; and</li>
        <li><strong>$107,432 in total annual compensation</strong> for the highly compensated employee test in 29 CFR 541.601, which still requires at least $684 a week on a salary or fee basis and that the employee customarily and regularly performs at least one exempt duty.</li>
      </ul>

      <p>Employers may count nondiscretionary bonuses, incentives, and commissions paid at least annually toward up to ten percent of the $684 standard level, under 29 CFR 541.602(a)(3).</p>

      <p>The federal figure is a floor, not a ceiling. The FLSA says nothing in it excuses noncompliance with a state law setting a higher minimum wage (<a href="https://www.govinfo.gov/content/pkg/USCODE-2023-title29/html/USCODE-2023-title29-chap8-sec218.htm" target="_blank" rel="noopener noreferrer">29 U.S.C. § 218(a)</a>), and states set their own exemption tests under their own wage laws. Where a state requires more, you must meet the state standard.</p>

      <h2>California: $72,384 from January 1, 2027</h2>

      <p>California ties its exempt salary to the state minimum wage: an exempt employee must earn at least twice the state minimum wage for full-time work. On January 1, 2027, the statewide minimum wage rises to $17.40 an hour. According to the <a href="https://dir.ca.gov/DIRNews/2026/2026-66.html" target="_blank" rel="noopener noreferrer">Department of Industrial Relations</a>, that produces:</p>

      <ul>
        <li>$17.40 x 2 x 40 hours x 52 weeks = <strong>$72,384 a year</strong>, the minimum annual salary for exemption starting January 1, 2027.</li>
      </ul>

      <p>The Department adds the point owners skip: &ldquo;Employees must also satisfy the duties and other requirements applicable to the specific exemption.&rdquo; Meeting the federal duties test does not settle the California question, so check the state requirements for each role.</p>

      <h2>Washington: $92,196 or $82,976.40, depending on size</h2>

      <p>Washington&apos;s minimum wage rises to $17.73 an hour on January 1, 2027, and its exempt salary is a multiple of that wage that depends on employer size. Per the <a href="https://www.lni.wa.gov/news-events/article/26-17" target="_blank" rel="noopener noreferrer">Department of Labor &amp; Industries announcement</a> of September 30, 2026:</p>

      <ul>
        <li><strong>Employers with 51 or more employees:</strong> the multiplier rises from 2.25 to 2.5 times the minimum wage, so an exempt employee must earn at least <strong>$1,773.00 a week ($92,196.00 a year)</strong>.</li>
        <li><strong>Employers with up to 50 workers:</strong> the multiplier stays at 2.25 in 2027, so the floor is <strong>$1,595.70 a week ($82,976.40 a year)</strong>. L&amp;I says the small-employer multiplier is not scheduled to reach 2.5 until 2028.</li>
        <li><strong>Computer professionals paid hourly:</strong> 3.5 times the minimum wage regardless of employer size, which is <strong>$62.06 an hour</strong> in 2027.</li>
      </ul>

      <p>Washington&apos;s jump for larger employers is about 15 percent in one year, because the multiplier and the minimum wage both increase. A salary that cleared the line comfortably in 2026 may not clear it in 2027.</p>

      <h2>A worked example</h2>

      <p>Consider a Spokane property-management company with 60 employees. Its leasing manager earns a $85,000 salary, supervises three leasing agents, and has authority over hiring recommendations. Under federal law, she clears $684 a week easily. Under Washington law in 2026, at the large-employer multiplier of 2.25 times the current $17.13 minimum wage, she also cleared the floor of $80,168.40.</p>

      <p>On January 1, 2027, the floor for a 60-employee company becomes $92,196. Unless her salary rises by more than $7,000, she becomes non-exempt under Washington law, even though nothing about her job changed. From that day the company owes her overtime for hours over 40 in a workweek and must track her hours.</p>

      <p>Now move the same facts to a 40-employee company. The 2027 floor is $82,976.40, and her $85,000 salary still clears it for 2027. In 2028, when the small-employer multiplier is scheduled to rise to 2.5, she likely won&apos;t.</p>

      <h2>Your options before January 1</h2>

      <p>For each salaried employee near a new floor, you have four realistic choices:</p>

      <ul>
        <li><strong>Raise the salary</strong> to the new level, if the job meets the duties test and the role is worth it.</li>
        <li><strong>Convert to hourly</strong> and pay overtime. Many employers set the hourly rate so that expected annual pay, including typical overtime, stays close to the old salary. Start tracking hours on the conversion date.</li>
        <li><strong>Keep the salary but pay overtime.</strong> Salaried non-exempt employees are allowed. You must still track hours and pay overtime on top of the salary.</li>
        <li><strong>Revisit the duties.</strong> If the job never met the duties test, the salary level was never the real issue, and the fix is reclassification regardless of pay.</li>
      </ul>

      <p>Communicate the change in writing before it takes effect. Moving someone from exempt to non-exempt can feel like a demotion. Explaining that the law changed, not their value, goes a long way.</p>

      <h2>What a mistake costs</h2>

      <p>Under federal law, an employer that fails to pay required overtime owes the unpaid overtime &ldquo;and in an additional equal amount as liquidated damages,&rdquo; plus the employee&apos;s attorney&apos;s fees (<a href="https://www.govinfo.gov/content/pkg/USCODE-2023-title29/html/USCODE-2023-title29-chap8-sec216.htm" target="_blank" rel="noopener noreferrer">29 U.S.C. § 216(b)</a>). Claims generally reach back two years, and three years for willful violations (<a href="https://www.govinfo.gov/content/pkg/USCODE-2023-title29/html/USCODE-2023-title29-chap9-sec255.htm" target="_blank" rel="noopener noreferrer">29 U.S.C. § 255(a)</a>). State laws add their own remedies and penalties, and misclassification problems tend to involve groups of employees in the same role.</p>

      <p>For related classification questions, see our guides to <a href="/blog/1099-vs-w2-worker-classification">1099 versus W-2 classification</a> and <a href="/blog/how-to-hire-your-first-employee">hiring your first employee</a>. If you have employees in Washington, note that the same L&amp;I announcement also sets 2027 earnings thresholds for non-compete agreements ahead of the state&apos;s ban on non-competes, which takes effect in July 2027.</p>

      <h2>Frequently asked questions</h2>

      <h3>If I pay someone a salary above the threshold, are they automatically exempt?</h3>

      <p>No. The salary level is one of three requirements. The employee must also be paid on a salary basis and perform duties that fit a specific exemption. Job titles don&apos;t decide the question.</p>

      <h3>What is the federal exempt salary threshold for 2027?</h3>

      <p>As of November 2026, $684 a week (about $35,568 a year), the level restored after courts vacated the 2024 rule. No federal increase for 2027 had been published as of that date. State thresholds in California and Washington are much higher.</p>

      <h3>Does Washington count employees statewide or everywhere?</h3>

      <p>L&amp;I&apos;s announcement describes the tiers by employer size, 51 or more employees versus up to 50 workers. How to count part-time and out-of-state employees is a fact-specific question. Check L&amp;I&apos;s guidance or get advice before you rely on the smaller-employer figure.</p>

      <p><em>This article reflects 29 CFR Part 541 as shown on eCFR, the Department of Labor&apos;s May 15, 2026 technical amendment, the California Department of Industrial Relations&apos; 2027 minimum wage release, and the Washington Department of Labor &amp; Industries&apos; September 30, 2026 release, as of November 2026. Exemption rules vary by state and by occupation. This is general information, not legal advice for your situation.</em></p>
    </>
  ),
};
