import type { ReactNode } from "react";

// Blog-cycle 2026-10-26 additions.
export const batch18Content: Record<string, ReactNode> = {
  "ai-notetakers-recording-consent-otter-lawsuit-2026": (
    <>
      <p>AI notetakers spread through small businesses the way most software does now: one person connected one to a calendar, and soon a bot was showing up to every call with a customer, a candidate, or a lender. Few owners asked whether anyone on the other end agreed to be recorded, or what the vendor does with the recording afterward.</p>

      <p>A federal court in San Jose has started answering both questions. On August 13, 2026, Judge Eumi K. Lee issued an <a href="https://storage.courtlistener.com/recap/gov.uscourts.cand.454675/gov.uscourts.cand.454675.68.0.pdf" target="_blank" rel="noopener noreferrer">order granting in part and denying in part Otter.ai&apos;s motion to dismiss</a> in <em>In re Otter.AI Privacy Litigation</em>, No. 5:25-cv-06911 (N.D. Cal.). The federal wiretap claim, the California eavesdropping claim, and the Illinois biometric claims survived. Otter filed its <a href="https://storage.courtlistener.com/recap/gov.uscourts.cand.454675/gov.uscourts.cand.454675.80.0.pdf" target="_blank" rel="noopener noreferrer">answer</a> on September 17, 2026, denying the plaintiffs&apos; core allegations. Nothing has been proven, and no court has found Otter liable.</p>

      <p>The case is against the vendor. The consent rules it applies, though, are the same ones that govern you when you invite the bot.</p>

      <h2>What the plaintiffs say happened</h2>

      <p>The plaintiffs are seven people from California, Illinois, and Washington who were on Zoom, Microsoft Teams, or Google Meet calls where someone else had deployed the Otter Notetaker. They allege the bot joined as a &ldquo;silent participant,&rdquo; recorded and transcribed in real time without the consent of all participants, and kept the conversations, along with voiceprints, to train Otter&apos;s speech-recognition and machine-learning models. One plaintiff was talking with a medical provider. Others were discussing finances or work matters.</p>

      <p>Those are allegations. Otter denies them, and the court took them as true only because that is the rule at the motion-to-dismiss stage.</p>

      <h2>What the court decided, claim by claim</h2>

      <p><strong>Federal Wiretap Act: survived.</strong> Federal law is a one-party-consent regime. Under <a href="https://www.law.cornell.edu/uscode/text/18/2511" target="_blank" rel="noopener noreferrer">18 U.S.C. § 2511(2)(d)</a>, it isn&apos;t unlawful to intercept a communication you are a party to, or that one party consented to, &ldquo;unless such communication is intercepted for the purpose of committing any criminal or tortious act.&rdquo; Otter argued it was a party, or at least had its user&apos;s consent. The court held the plaintiffs had plausibly alleged a tortious purpose: using conversation data to train models &ldquo;for its own pecuniary gain.&rdquo; In the court&apos;s words, quoting an earlier case, &ldquo;committing a tort and seeking a profit are not mutually exclusive.&rdquo;</p>

      <p><strong>California Invasion of Privacy Act, § 631: survived.</strong> Section 631 targets third-party eavesdroppers. A software vendor that acts only as &ldquo;an extension&rdquo; of its customer, recording the customer&apos;s own calls for the customer&apos;s use, generally isn&apos;t a third party. But the court held that a vendor that &ldquo;independently collects, retains, and uses communications for its own commercial purposes&rdquo; can be one. That distinction matters most for the businesses using these tools: a notetaker that keeps your call data for its own model training looks less like your tape recorder and more like an outside listener.</p>

      <p><strong>California § 632: mixed.</strong> Section 632 bars recording a &ldquo;confidential communication&rdquo; without the consent of all parties. The plaintiff who described a medical conversation alleged enough. Two plaintiffs who called their conversations &ldquo;private&rdquo; or &ldquo;sensitive&rdquo; without saying more did not, at least in the current complaint.</p>

      <p><strong>Illinois BIPA: survived.</strong> The Biometric Information Privacy Act lists voiceprints as biometric identifiers and requires written notice and a written release before a private entity collects them. The plaintiffs alleged the notetaker captured voiceprints without either, and that was enough to proceed.</p>

      <p><strong>Dismissed, with leave to amend:</strong> among others, the federal computer fraud claim, the California computer-access claim, some plaintiffs&apos; intrusion claims, and a Washington privacy claim. The Washington claim failed because the plaintiff didn&apos;t allege enough about why his conversation was private. On consent, though, the court sided with him. Even if the bot &ldquo;appeared in the meeting as another participant,&rdquo; the court could not infer that he knew his words were being recorded, transcribed, and retained.</p>

      <p>That last point should change how you think about the little bot tile in the participant list. A visible attendee named &ldquo;Notetaker&rdquo; is not the same as informed consent.</p>

      <p>The case is in discovery. Under the <a href="https://storage.courtlistener.com/recap/gov.uscourts.cand.454675/gov.uscourts.cand.454675.79.0.pdf" target="_blank" rel="noopener noreferrer">amended scheduling order</a>, the deadline to move for class certification is May 13, 2027.</p>

      <h2>Why this is your problem, not just Otter&apos;s</h2>

      <p>California&apos;s eavesdropping statute applies to the person doing the recording, not just to vendors. The text of <a href="https://legiscan.com/CA/text/AB1671/id/1431536" target="_blank" rel="noopener noreferrer">Penal Code § 632(a)</a> (as amended in 2016) reaches anyone who, &ldquo;intentionally and without the consent of all parties to a confidential communication,&rdquo; uses a recording device to record it. &ldquo;Person&rdquo; expressly includes a business entity. A &ldquo;confidential communication&rdquo; is one &ldquo;carried on in circumstances as may reasonably indicate that any party to the communication desires it to be confined to the parties thereto.&rdquo;</p>

      <p>A call with a customer about their finances, a negotiation with a buyer, or an interview with a job candidate will often fit that definition.</p>

      <p>The civil remedy is the reason plaintiffs&apos; lawyers care. <a href="https://legiscan.com/CA/bill/SB690/2025" target="_blank" rel="noopener noreferrer">Penal Code § 637.2(a)</a> allows a civil action for the greater of $5,000 per violation or three times actual damages. California&apos;s SB 690, signed September 30, 2026 (Statutes of 2026, ch. 976), limits private suits over pen-register and trap-and-trace claims arising from websites and apps to the Attorney General. It doesn&apos;t touch §§ 631 or 632 claims over recorded conversations.</p>

      <p>California is not alone. Other states that require every party&apos;s consent include:</p>

      <ul>

        <li><strong>Washington</strong>, which requires &ldquo;the consent of all the participants&rdquo; to record a private communication (<a href="https://app.leg.wa.gov/RCW/default.aspx?cite=9.73.030" target="_blank" rel="noopener noreferrer">RCW 9.73.030</a>). Washington also offers a useful safe harbor: consent is obtained when one party announces &ldquo;in any reasonably effective manner&rdquo; that the conversation is about to be recorded, and the announcement is itself recorded.</li>

        <li><strong>Florida</strong>, which makes interception lawful when &ldquo;all of the parties to the communication have given prior consent&rdquo; (<a href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0934/Sections/0934.03.html" target="_blank" rel="noopener noreferrer">Fla. Stat. § 934.03</a>).</li>

      </ul>

      <p>Other states have their own rules, and some impose all-party requirements with different scope. Because you usually can&apos;t tell where every participant is sitting, the practical approach is to run every call as if the strictest rule applies.</p>

      <h2>A meeting protocol that holds up</h2>

      <p>Consider a 25-person financial planning firm with clients in California, Washington, and Arizona. Advisors use an AI notetaker on most client calls. Here is a protocol that fits most businesses with that profile.</p>

      <p><strong>1. Announce the recording at the start, out loud, every time.</strong> &ldquo;Before we begin, I use an AI notetaker that records and transcribes this call. Is that all right with you?&rdquo; Let the recording capture the answer. This tracks Washington&apos;s statutory safe harbor and gives you the best evidence of consent everywhere else.</p>

      <p><strong>2. Put it in writing before the call.</strong> Add a line to the calendar invite and your engagement letter or terms: calls may be recorded and transcribed by an AI service, and the participant can ask you to turn it off. Written notice doesn&apos;t replace the spoken announcement. It backs it up.</p>

      <p><strong>3. Turn it off when someone says no, and when the topic calls for it.</strong> Make &ldquo;no recording&rdquo; an easy answer. Some conversations shouldn&apos;t be recorded by a third-party service at all, including health information, attorney communications, and personnel investigations. Our piece on <a href="/blog/is-chatgpt-attorney-client-privilege">whether AI tool conversations are privileged</a> explains why sending a privileged discussion to an outside AI service is a risk on its own.</p>

      <p><strong>4. Stop the auto-join.</strong> The Otter complaint alleges that once an accountholder connects a calendar, the notetaker automatically joins and records every meeting on it. Otter denies that allegation, but the risk it describes is real for any calendar-connected tool. Configure the tool so it joins only when the host turns it on, and forbid connecting personal notetaker accounts to company calendars in your <a href="/blog/employee-ai-use-policy">employee AI use policy</a>.</p>

      <p><strong>5. Read the vendor&apos;s data terms, then negotiate them.</strong> The § 631 ruling turned on the allegation that the vendor used conversation data for its own purposes. Look for model training on customer content, retention periods, de-identification claims, and whether you can opt out at the account level. If the standard terms allow training on your content, ask for an enterprise setting or a contract term that prohibits it. Our <a href="/blog/ai-vendor-contract-negotiation-checklist">AI vendor contract checklist</a> lists the clauses to ask for.</p>

      <p><strong>6. Treat voiceprints as biometrics if you touch Illinois.</strong> If the tool identifies speakers by voice and any participant may be in Illinois, BIPA&apos;s written-notice and written-release requirements are in play. Ask the vendor how speaker identification works and whether it can be disabled.</p>

      <p><strong>7. Decide where transcripts live and when they die.</strong> A transcript is a business record, discoverable in litigation and subject to privacy laws. Give it a retention period in your <a href="/blog/ai-data-classification-policy-small-business">data classification policy</a> and stop keeping everything forever by default. The <a href="/blog/state-privacy-laws-small-business-2026">state privacy law overview</a> covers the broader consumer-data obligations.</p>

      <h2>Frequently asked questions</h2>

      <h3>We&apos;re in a one-party-consent state. Are we fine?</h3>

      <p>Only if everyone on the call is too, and only for your own recording. Calls cross state lines constantly, and the all-party state&apos;s law may apply to the participant located there. The federal one-party rule also has the &ldquo;criminal or tortious purpose&rdquo; exception the Otter court relied on.</p>

      <h3>Is the bot showing up in the participant list enough notice?</h3>

      <p>Don&apos;t rely on it. The Otter court refused to infer that a participant knew he was being recorded just because the notetaker appeared as an attendee. An out-loud announcement captured on the recording is much stronger evidence.</p>

      <h3>Does the Otter ruling mean Otter broke the law?</h3>

      <p>No. A ruling on a motion to dismiss decides only whether the allegations, assumed true, state a legal claim. Otter has denied the allegations, and the case is in discovery.</p>

      <p><em>This article reflects the August 13, 2026 order and the docket in In re Otter.AI Privacy Litigation, and the cited federal and state statutes, as of October 2026. Recording-consent rules vary by state and by the type of communication. This is general information, not legal advice for your situation.</em></p>
    </>
  ),
  "deepfake-wire-fraud-who-bears-loss-ucc-4a": (
    <>
      <p>Consider a 40-person distribution company. On a Thursday afternoon the controller gets a Teams call from the CEO, who is traveling. The face is right, the voice is right, and so is the impatience. A supplier deal is closing early, the CEO says, and $250,000 needs to go out today to a new account. Wire instructions follow by email. The controller logs into the bank portal, enters the payment, approves it with her token, and the money is gone by 4 p.m. The CEO was on a plane the whole time. The call was synthetic.</p>

      <p>The first question every owner asks is &ldquo;can&apos;t the bank just reverse it?&rdquo; The second, once they hear the answer, is &ldquo;how is this not the bank&apos;s problem?&rdquo; This article answers both, and then covers what actually moves money back into your account.</p>

      <h2>Why the bank is usually not liable</h2>

      <p>Business wire transfers are governed by Article 4A of the Uniform Commercial Code, as enacted in your state. States adopt the uniform text with occasional local variations, so the citations below are to the uniform version. Article 4A&apos;s loss rules turn on one question: was the payment order <em>authorized</em>?</p>

      <p><a href="https://www.law.cornell.edu/ucc/4A/4A-202" target="_blank" rel="noopener noreferrer">Section 4A-202(a)</a> answers it in one sentence. A payment order is the authorized order of the customer &ldquo;if that person authorized the order or is otherwise bound by it under the law of agency.&rdquo;</p>

      <p>In the hypothetical, the controller is your agent. She has authority to send wires. She logged in with her own credentials and approved the payment herself. Under ordinary agency law, that&apos;s your order, even though she was lied to. Article 4A treats the fraud as something that happened between you and the criminal, not as a failure of the bank.</p>

      <p>That matters because the rules most owners have heard about, the ones that make banks eat losses, are built for a different situation: an order sent in your name by someone who was <em>not</em> authorized, such as a hacker who took over the portal.</p>

      <ul>

        <li><strong><a href="https://www.law.cornell.edu/ucc/4A/4A-202" target="_blank" rel="noopener noreferrer">Section 4A-202(b)</a></strong> lets a bank hold you to an order &ldquo;whether or not authorized&rdquo; if the bank and customer agreed on a <strong>security procedure</strong>, the procedure is commercially reasonable, and the bank accepted the order in good faith and in compliance with it.</li>

        <li><strong><a href="https://www.law.cornell.edu/ucc/4A/4A-203" target="_blank" rel="noopener noreferrer">Section 4A-203</a></strong> then gives you an escape hatch, but only for an order that &ldquo;is not, under Section 4A-202(a), an authorized order.&rdquo; If you prove the order wasn&apos;t caused by someone entrusted with your payment duties or someone who got access to your systems or credentials through you, the bank can&apos;t keep the money.</li>

        <li><strong><a href="https://www.law.cornell.edu/ucc/4A/4A-204" target="_blank" rel="noopener noreferrer">Section 4A-204</a></strong> requires the bank to refund an order that was neither authorized nor effective against you, with interest.</li>

      </ul>

      <p>None of those three provisions helps when your own authorized employee pressed the button. The security procedure did exactly what it was designed to do: it confirmed that the order came from your controller. It did. The statute&apos;s definition is narrow on purpose. A <strong>security procedure</strong> under <a href="https://www.law.cornell.edu/ucc/4A/4A-201" target="_blank" rel="noopener noreferrer">Section 4A-201</a> is a procedure for verifying that an order &ldquo;is that of the customer,&rdquo; or for detecting errors in transmission or content. It is not a procedure for detecting that your employee was deceived.</p>

      <p>As of October 2026, there is little or no reported case law applying Article 4A to a deepfake-induced wire specifically. The analysis above comes from the statute&apos;s text, and it is the same analysis courts have long applied to ordinary impersonation and business email compromise. Better fakes don&apos;t change which box the payment falls into.</p>

      <h2>Consumer protections don&apos;t follow you to the business account</h2>

      <p>Owners sometimes assume the protections they have on a personal checking account apply here. They don&apos;t. Regulation E, the federal rule that limits a consumer&apos;s liability for unauthorized electronic transfers, defines an &ldquo;account&rdquo; as one &ldquo;established primarily for personal, family, or household purposes&rdquo; (<a href="https://www.law.cornell.edu/cfr/text/12/1005.2" target="_blank" rel="noopener noreferrer">12 CFR 1005.2</a>). It also excludes wire transfers through Fedwire or similar systems &ldquo;used primarily for transfers between financial institutions or between businesses&rdquo; (<a href="https://www.law.cornell.edu/cfr/text/12/1005.3" target="_blank" rel="noopener noreferrer">12 CFR 1005.3(c)(3)</a>). A business wire falls outside Regulation E on both counts.</p>

      <h2>How big the problem is</h2>

      <p>The FBI&apos;s Internet Crime Complaint Center tracks this category in its <a href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" target="_blank" rel="noopener noreferrer">2025 annual report</a>. In 2025 it received 22,364 complaints &ldquo;reporting AI-related information,&rdquo; with adjusted losses above $893 million. The report says voice cloning &ldquo;can also be used to request wire payment,&rdquo; and it puts business email compromise losses involving AI at more than $30 million.</p>

      <p>Put that $30 million next to total business email compromise losses for the year, about $3.05 billion, and the useful lesson is that most of these losses still come from ordinary impersonation. The deepfake is a stronger version of the same con, so the controls that stop a fake email also stop most fake calls, provided they don&apos;t depend on recognizing someone&apos;s face or voice.</p>

      <p>Banks have been warned too. FinCEN&apos;s <a href="https://www.fincen.gov/sites/default/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf" target="_blank" rel="noopener noreferrer">alert FIN-2024-Alert004</a> (November 13, 2024) described a rise in suspicious activity reports describing deepfake media used in fraud schemes. That alert is aimed at financial institutions&apos; reporting duties. It doesn&apos;t change the Article 4A allocation between a bank and its business customer.</p>

      <h2>The first 24 hours: where recoveries actually happen</h2>

      <p>Because the legal claim against your own bank is usually weak, the realistic path to getting money back is speed. The IC3 report&apos;s guidance is direct: &ldquo;If you discover a fraudulent transfer, time is of the essence.&rdquo; Contact your bank immediately and request a recall of the funds, then file at <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">ic3.gov</a> &ldquo;regardless of the amount lost,&rdquo; with full transaction details.</p>

      <p>The FBI&apos;s Recovery Asset Team runs what it calls the Financial Fraud Kill Chain, which coordinates with banks to freeze funds at the receiving institution. In 2025, the team initiated 3,900 of these incidents involving about $1.16 billion in attempted theft and froze about $679 million, a 58% success rate, per the <a href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" target="_blank" rel="noopener noreferrer">same report</a>. Those numbers depend on catching the money before it moves again. A same-day report is a different case from a report filed the following week.</p>

      <p>Your hour-one list:</p>

      <ul>

        <li>Call your bank&apos;s fraud or treasury line (not the branch) and ask for a recall and for the bank to contact the beneficiary&apos;s bank.</li>

        <li>File the IC3 complaint with the wire&apos;s date, amount, receiving bank, routing and account number, and the beneficiary name on the instructions.</li>

        <li>Preserve everything: the meeting invite, call logs, the email with the instructions, portal audit logs. Don&apos;t wipe or reimage the controller&apos;s laptop.</li>

        <li>Notify your insurance broker in writing the same day. Late notice is one of the easiest ways to lose coverage you actually have.</li>

      </ul>

      <h2>The other places money can come from</h2>

      <p><strong>The beneficiary&apos;s bank and the name mismatch.</strong> Fraudsters commonly send instructions that name your real supplier but list an account the fraudster controls. Under <a href="https://www.law.cornell.edu/ucc/4A/4A-207" target="_blank" rel="noopener noreferrer">Section 4A-207(b)(1)</a>, a beneficiary&apos;s bank that doesn&apos;t know the name and number refer to different people &ldquo;may rely on the number&rdquo; and &ldquo;need not determine whether the name and number refer to the same person.&rdquo; So a name mismatch alone usually won&apos;t create bank liability. Whether the receiving bank actually knew of a mismatch is a factual question worth asking a lawyer to explore, but don&apos;t build your recovery plan around it.</p>

      <p><strong>Insurance.</strong> Some losses are covered under a crime policy&apos;s social engineering or fraudulent-instruction endorsement, and some under a cyber policy. Many policies cap that coverage with a sublimit far below the policy limit, and many condition it on the insured having confirmed the request through a callback or similar step. Read the endorsement before you need it, and see our discussion of <a href="/blog/ai-insurance-coverage-gap-iso-exclusions-2026">AI exclusions creeping into business policies</a> for why &ldquo;it involved AI&rdquo; is now a question carriers ask. The <a href="/blog/business-insurance-types-guide">business insurance overview</a> covers which policy types to have.</p>

      <p><strong>The one-year deadline.</strong> If you believe a debit was not authorized (for example, the portal itself was compromised), <a href="https://www.law.cornell.edu/ucc/4A/4A-505" target="_blank" rel="noopener noreferrer">Section 4A-505</a> bars the objection unless you notify the bank &ldquo;within one year after the notification was received.&rdquo; Many bank agreements shorten reporting windows further. Read yours.</p>

      <h2>Controls that change the answer</h2>

      <p>You can&apos;t contract your way into making the bank liable for your employee&apos;s decision. You can make that decision much harder to fake.</p>

      <ol>

        <li><strong>Out-of-band callback to a known number.</strong> Any new payee or change to payment instructions gets confirmed by calling a number already on file, not one in the email or the meeting chat. Make it a written rule with no &ldquo;CEO exception.&rdquo; A deepfake works because the target believes the request is coming from the CEO.</li>

        <li><strong>Dual approval in the bank portal.</strong> Many business banking platforms let you require a second user to release wires above a set amount. Turn it on. A fake call has to fool two people instead of one.</li>

        <li><strong>Accept the bank&apos;s offered security procedures.</strong> Under <a href="https://www.law.cornell.edu/ucc/4A/4A-202" target="_blank" rel="noopener noreferrer">Section 4A-202(c)</a>, if you refuse a commercially reasonable procedure the bank offered and pick a weaker one, and expressly agree in writing to be bound, your chosen procedure is deemed commercially reasonable. Declining features like dual control or callback verification strengthens the bank&apos;s position in the hacked-account case, where you might otherwise have a claim.</li>

        <li><strong>A pause rule for new payees.</strong> A 24-hour hold on first-time beneficiaries kills the &ldquo;it has to go out today&rdquo; pressure that every one of these schemes relies on.</li>

        <li><strong>A code word, used sparingly.</strong> Some owners set a verbal passphrase for urgent payment requests. It helps, but treat it as a backstop to the callback, not a substitute. It can leak.</li>

        <li><strong>Train for the scenario that&apos;s actually happening.</strong> Your <a href="/blog/employee-ai-use-policy">employee AI use policy</a> should say plainly that a voice or video call is not verification, no matter who appears to be on it.</li>

      </ol>

      <h2>A note on who else might be liable</h2>

      <p>If the impersonation used a vendor&apos;s compromised email account, you may have claims against the vendor, and the vendor may have claims against you, depending on who was in the better position to prevent it. Those disputes are governed by your contracts and by state negligence law, and they get expensive fast. Our piece on <a href="/blog/when-is-my-business-liable-for-ai">when your business is liable for AI</a> covers the broader allocation questions. Check whether your <a href="/blog/what-should-be-in-every-business-contract">vendor contracts</a> say anything about payment-instruction changes. Most don&apos;t, and they should.</p>

      <h2>Frequently asked questions</h2>

      <h3>If the bank&apos;s fraud system should have flagged a $250,000 wire to a new account, isn&apos;t that negligence?</h3>

      <p>Article 4A sets detailed rules for who bears the loss on a funds transfer, and claims that try to work around those rules face an uphill fight. For an authorized order, the bank&apos;s job under Article 4A is mostly to carry out the order. A bank&apos;s internal fraud monitoring is not the security procedure you agreed to, so a missed flag rarely creates liability by itself.</p>

      <h3>Does it matter that the fake was AI-generated?</h3>

      <p>Not to the bank question. A payment your employee approved is authorized whether she was fooled by a cloned voice, a spoofed email, or a convincing phone call. It may matter to your insurer if your policy has an AI-related exclusion or a sublimit triggered by &ldquo;social engineering.&rdquo;</p>

      <h3>What if the fraudster got into our bank portal directly instead of tricking an employee?</h3>

      <p>That is the unauthorized-order case, and your position is meaningfully better. The bank then has to show a commercially reasonable security procedure that it followed in good faith, and Section 4A-203 may still let you recover if the breach didn&apos;t come through your people or systems.</p>

      <p><em>This article reflects the uniform text of UCC Article 4A, federal regulations, and FBI and FinCEN publications as of October 2026. Your state&apos;s enacted version of Article 4A and your bank agreement control the details. This is general information, not legal advice for your situation.</em></p>
    </>
  ),
  "form-1099-nec-2000-threshold-2027-filing": (
    <>
      <p>For as long as most owners have been filing 1099s, the number was $600. Pay a contractor $600 or more in a year and you owed them a Form 1099-NEC by January 31. For payments made in 2026, that number is gone.</p>

      <p>For payments made in 2026 and later, the basic reporting threshold is $2,000. The IRS&apos;s <a href="https://www.irs.gov/instructions/i1099mec" target="_blank" rel="noopener noreferrer">instructions for Forms 1099-MISC and 1099-NEC</a> put it this way: &ldquo;For tax years beginning after 2025, the minimum threshold amount for reporting certain payments ... increased to $2,000 and may be adjusted for inflation beginning in calendar year 2027.&rdquo; The change came from the 2025 tax law the IRS now calls the Working Families Tax Cuts (Public Law 119-21), which our <a href="/blog/obbba-small-business-owners">overview of the law for small business owners</a> covers more broadly.</p>

      <p>A higher threshold means fewer forms. It doesn&apos;t mean fewer rules, and a few of the old numbers survived. This piece walks through the January 2027 filing season in the order you&apos;ll actually do the work.</p>

      <h2>What changed and what didn&apos;t</h2>

      <p><strong>Moved to $2,000 (for 2026 payments):</strong></p>

      <ul>

        <li>Nonemployee compensation on Form 1099-NEC, box 1a: payments for services by someone who isn&apos;t your employee, &ldquo;including parts and materials.&rdquo;</li>

        <li>Attorneys&apos; fees for legal services, also reported in box 1a of Form 1099-NEC.</li>

        <li>On Form 1099-MISC: rents, prizes and awards, other income, medical and health care payments, crop insurance proceeds, and certain deferred-compensation amounts.</li>

        <li>Backup withholding. The same threshold applies to when backup withholding kicks in on these payments, per <a href="https://www.irs.gov/publications/p1099" target="_blank" rel="noopener noreferrer">Publication 1099</a>.</li>

      </ul>

      <p><strong>Still $600:</strong></p>

      <ul>

        <li>Gross proceeds paid to an attorney, such as a settlement payment that runs through a law firm&apos;s trust account, reported in box 10 of Form 1099-MISC. This is separate from fees for the attorney&apos;s own services.</li>

      </ul>

      <p><strong>Still $10:</strong></p>

      <ul>

        <li>Royalties, reported in box 2 of Form 1099-MISC.</li>

      </ul>

      <p><strong>Still $5,000:</strong></p>

      <ul>

        <li>Direct sales of consumer products for resale (the checkbox on 1099-NEC box 2 or 1099-MISC box 7).</li>

      </ul>

      <p><strong>No threshold at all:</strong></p>

      <ul>

        <li>Any payment from which you actually withheld federal income tax under the backup withholding rules. You file regardless of amount.</li>

      </ul>

      <p>The $600 attorney rule is the one most likely to trip people up. If your business pays a $1,500 taxable settlement to a claimant through the claimant&apos;s lawyer, you&apos;re below the $2,000 line for the claimant&apos;s 1099-MISC but over the $600 line for the gross-proceeds 1099-MISC to the lawyer.</p>

      <h2>October through December: clean up vendor files now</h2>

      <p>The filing deadline is driven by whatever information you have on hand in January. The work is in getting the information right before then.</p>

      <p><strong>Collect W-9s from everyone you might pay $2,000 or more.</strong> The threshold applies to each payee&apos;s total for the calendar year, so a vendor you&apos;ve paid $1,400 so far is one invoice away from crossing it. Get the W-9 before you pay the invoice that pushes them over, not in late January when they&apos;ve stopped answering email.</p>

      <p><strong>Use TIN matching.</strong> The IRS&apos;s TIN Matching program lets payers check name and taxpayer identification number combinations against IRS records before filing. Name and TIN mismatches lead to IRS notices after filing, and Publication 1099 says errors in a TIN or a payee&apos;s surname are never treated as &ldquo;inconsequential&rdquo; for penalty purposes.</p>

      <p><strong>Know when backup withholding applies.</strong> If a payee who will cross $2,000 refuses to give you a TIN, you&apos;re generally required to backup withhold at 24% on reportable payments. Most small businesses never do this and should handle it as an exception: get the W-9 or stop paying.</p>

      <p><strong>Separate how you paid from what you report.</strong> Payments you made by credit card, debit card, or through a third-party payment network are reported by the payment processor on Form 1099-K, and per the instructions are &ldquo;not subject to reporting on Form 1099-MISC or Form 1099-NEC.&rdquo; Check, ACH, wire, and cash payments are yours to report. Run your vendor totals by payment method so you don&apos;t double-report card payments.</p>

      <p><strong>Check entity type, with the attorney exception in mind.</strong> Payments to corporations are generally exempt from 1099-NEC reporting. That exemption &ldquo;does not apply to payments for legal services,&rdquo; so law firms organized as corporations still get a 1099 for fees of $2,000 or more and for gross proceeds of $600 or more.</p>

      <h2>The new boxes</h2>

      <p>The December 2026 revision of the forms adds boxes for two other provisions of the same law. Use this revision for 2026 information filed in early 2027.</p>

      <ul>

        <li><strong>Box 1b (cash tips) and box 1c (Treasury Tipped Occupation Code).</strong> These support the new tips deduction under section 70201 of Public Law 119-21. Box 1b reports cash tips included in box 1a. &ldquo;Cash tips include tips paid in cash or charged by customers.&rdquo; Box 1c takes up to two occupation codes from the IRS&apos;s list at <a href="https://www.irs.gov/ttoc" target="_blank" rel="noopener noreferrer">IRS.gov/TTOC</a>.</li>

        <li><strong>Box 1d (overtime compensation).</strong> This supports the overtime provision in section 70202(a). It reports &ldquo;qualified overtime compensation&rdquo; included in box 1a, defined by reference to section 7 of the Fair Labor Standards Act. The instructions give an example: &ldquo;only the &apos;half&apos; portion of &apos;time-and-a-half&apos; compensation would be reported in box 1d.&rdquo;</li>

      </ul>

      <p>Most businesses paying independent contractors will leave these new boxes blank. They are mostly for payers whose nonemployee workers receive tips through the payer. If you&apos;re entering FLSA overtime on a 1099-NEC, stop and ask whether that worker is really a contractor. Overtime under FLSA section 7 is an employee concept, and our guide to <a href="/blog/1099-vs-w2-worker-classification">worker classification</a> and the <a href="/blog/independent-contractor-classification-2026">2026 contractor classification rules</a> explain the tests.</p>

      <h2>The calendar for the 2027 filing season</h2>

      <p>The statutory deadline for Form 1099-NEC is January 31, for both filing with the IRS and furnishing the recipient&apos;s copy. When a due date falls on a weekend or legal holiday, it moves to the next business day. January 31, 2027 is a Sunday.</p>

      <ul>

        <li><strong>Monday, February 1, 2027:</strong> File Form 1099-NEC with the IRS and furnish copies to recipients. Furnish most Form 1099-MISC recipient copies by this date as well.</li>

        <li><strong>Mid-February 2027:</strong> Recipient copies of Form 1099-MISC reporting amounts in box 8 or box 10 (including attorney gross proceeds) are due February 15. February 15, 2027 is Presidents Day, a federal holiday, so the next-business-day rule moves it to Tuesday, February 16.</li>

        <li><strong>Monday, March 1, 2027:</strong> Paper Form 1099-MISC is due to the IRS (the February 28 deadline falls on a Sunday).</li>

        <li><strong>Wednesday, March 31, 2027:</strong> Electronically filed Form 1099-MISC is due to the IRS.</li>

      </ul>

      <p><strong>E-filing is probably mandatory for you.</strong> For information returns due on or after January 1, 2024, you must file electronically if you file 10 or more information returns in total, counting all types together. The IRS&apos;s <a href="https://www.irs.gov/iris" target="_blank" rel="noopener noreferrer">Information Returns Intake System (IRIS)</a> portal handles 1099-NEC and 1099-MISC filing if your accounting software doesn&apos;t.</p>

      <p><strong>Don&apos;t forget the states.</strong> Your state may require its own copy of Form 1099-NEC or 1099-MISC, and state reporting thresholds don&apos;t automatically follow federal changes. Check each state where you file before assuming $2,000 applies there.</p>

      <h2>A worked example</h2>

      <p>Consider a 15-person landscape design firm reviewing its 2026 vendor payments in December:</p>

      <ul>

        <li>A freelance CAD drafter, paid $1,850 by ACH. Under the new threshold, no 1099-NEC. Last year, at $600, she would have gotten one.</li>

        <li>A sole-proprietor irrigation subcontractor, paid $14,200 by check, including materials. 1099-NEC, box 1a, for the full $14,200.</li>

        <li>A web developer, paid $3,000, all by business credit card. The card processor reports this on Form 1099-K. The firm doesn&apos;t issue a 1099-NEC.</li>

        <li>An outside law firm organized as a professional corporation, paid $2,400 in fees. 1099-NEC, box 1a. The corporate exemption doesn&apos;t apply to legal services.</li>

        <li>A $1,200 payment of taxable damages to settle a contract dispute, paid to the claimant&apos;s attorney. The claimant gets no 1099-MISC (under $2,000), but the attorney gets a 1099-MISC for $1,200 in box 10 gross proceeds (over $600).</li>

        <li>An office lease paid to an individual landlord, $36,000 for the year. 1099-MISC, box 1, rents.</li>

      </ul>

      <p>That&apos;s four forms where the old rules would have produced six. The change matters less than most headlines suggest, because the payees who cross $2,000 tend to be the ones you were already reporting.</p>

      <h2>What to watch in 2027</h2>

      <p>The $2,000 figure applies to 2026 payments. Publication 1099 says the threshold &ldquo;will be adjusted for inflation beginning in calendar year 2027&rdquo; (the form instructions say &ldquo;may be&rdquo;). As of October 2026, the indexed figure for 2027 payments has not yet appeared in the 1099 instructions. If you set a vendor-onboarding rule for next year (&ldquo;get a W-9 from anyone we&apos;ll pay $2,000 or more&rdquo;), plan to update the number when the IRS publishes it.</p>

      <p>The penalty rules didn&apos;t change. Late and incorrect information returns are penalized per return, with lower annual maximums for small businesses with average gross receipts of $5 million or less. Current amounts are on the IRS&apos;s <a href="https://www.irs.gov/payments/information-return-penalties" target="_blank" rel="noopener noreferrer">information return penalties page</a>. Reasonable cause is a defense, but &ldquo;my software defaulted to $600&rdquo; or &ldquo;I thought the threshold went up for everything&rdquo; won&apos;t qualify.</p>

      <h2>Frequently asked questions</h2>

      <h3>Should I still send 1099s to contractors I paid between $600 and $1,999 in 2026?</h3>

      <p>You&apos;re no longer required to file them with the IRS for 2026 payments. Some businesses will send them anyway out of habit. If you do, they&apos;re voluntary, and your contractors are still required to report the income either way. Make sure your accounting software&apos;s threshold setting is updated so it doesn&apos;t generate required-looking forms by default.</p>

      <h3>Does the higher threshold change who counts as a contractor?</h3>

      <p>No. The threshold controls reporting, not classification. A worker you control like an employee is an employee whether you pay them $500 or $50,000.</p>

      <h3>Is this the same change as the Form 1099-K threshold?</h3>

      <p>No. The 1099-K rules apply to payment processors and online platforms and have their own thresholds. The $2,000 change applies to the 1099-NEC and 1099-MISC forms you file as a payer. For year-end steps that interact with filing season, see our <a href="/blog/year-end-tax-planning-small-business">year-end tax planning checklist</a>.</p>

      <p><em>This article reflects the IRS&apos;s December 2026 instructions for Forms 1099-MISC and 1099-NEC and Publication 1099 (2026) as of October 2026. Confirm thresholds and due dates against the current IRS instructions before filing. This is general information, not tax or legal advice for your situation.</em></p>
    </>
  ),
};
