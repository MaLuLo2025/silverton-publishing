import type { ReactNode } from "react";

// Blog-cycle 2026-10-12 additions.
export const batch16Content: Record<string, ReactNode> = {
  "eu-ai-act-timeline-us-small-business-2026": (
    <>
      <p>Consider a twelve-person e-commerce company in Austin that sells handmade leather goods. About a fifth of its orders ship to Germany, France, and the Netherlands. Its website runs a support chatbot built on a large language model through a vendor&apos;s API, under the company&apos;s own brand. The marketing team uses an image generator for product lifestyle shots, and the owner uses an AI tool to screen job applicants for a remote customer-service role open to EU residents.</p>

      <p>Is this company subject to the EU AI Act? In part, yes. And the parts that apply are not the ones most US coverage focuses on.</p>

      <p>The headlines have been about delay. In July 2026 the EU adopted the <a href="https://eur-lex.europa.eu/eli/reg/2026/1744/oj" target="_blank" rel="noopener noreferrer">Digital Omnibus on AI, Regulation (EU) 2026/1744</a>, published in the Official Journal on July 24 and in force since July 27, 2026. It pushed back the heaviest &ldquo;high-risk&rdquo; obligations. It did not delay the transparency rules that a small company with a chatbot is most likely to trip over, and some of those already apply.</p>

      <h2>Three questions decide whether the Act reaches you</h2>

      <p>The <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer">AI Act (Regulation (EU) 2024/1689)</a> is extraterritorial, but not without limit. <a href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2" target="_blank" rel="noopener noreferrer">Article 2</a> covers three groups that matter here:</p>

      <ul>
        <li><strong>Providers</strong> that place an AI system on the market or put it into service in the EU, &ldquo;irrespective of whether those providers are established or located within the Union or in a third country.&rdquo;</li>
        <li><strong>Deployers</strong> that are established or located in the EU.</li>
        <li><strong>Providers and deployers located outside the EU</strong> &ldquo;where the output produced by the AI system is used in the Union.&rdquo;</li>
      </ul>

      <p>So the three questions are:</p>

      <p><strong>1. Are you a provider or a deployer?</strong> Under <a href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-3" target="_blank" rel="noopener noreferrer">Article 3</a>, a <em>provider</em> develops an AI system, or has one developed, and places it on the market or puts it into service under its own name or trademark, whether for payment or free. A <em>deployer</em> is anyone using an AI system under its authority in a professional capacity. Buying a subscription to an AI writing tool and using it at work makes you a deployer. Wiring a vendor&apos;s model into a customer-facing chatbot that you put into service under your own name can make you the provider of that chatbot system, even though you didn&apos;t build the underlying model. The definition turns on whose name the system goes out under, so a branded integration is the case to think hardest about.</p>

      <p><strong>2. Does the system or its output reach the EU?</strong> Offering a chatbot to EU visitors, or sending AI-generated content to EU customers, puts you inside Article 2&apos;s reach. A US company using AI purely for internal US operations, with no output used in the EU, generally is not.</p>

      <p><strong>3. What kind of AI use is it?</strong> The Act&apos;s obligations depend on the category: prohibited practices, high-risk systems, systems with transparency duties, and general-purpose AI models. Most small-business uses fall into the transparency category or into none.</p>

      <h2>What is already in force</h2>

      <h3>Since February 2, 2025: prohibitions and AI literacy</h3>

      <p>The banned practices in Article 5 (manipulative techniques, social scoring, certain biometric uses, emotion recognition in workplaces and schools, and others) have applied since February 2, 2025. A normal small business is unlikely to be doing any of them. The one to watch is emotion recognition in the workplace, which some HR and call-center analytics products claim to offer.</p>

      <p>The AI literacy duty in Article 4 applied from the same date, and the Omnibus rewrote it. As amended, providers and deployers must &ldquo;take measures to support the development of AI literacy of their staff,&rdquo; and the amended text says this &ldquo;does not require providers or deployers to guarantee any specific level of AI literacy of any individual.&rdquo; That is softer than the original &ldquo;ensure a sufficient level&rdquo; wording. It is still a duty, and a short written training and acceptable-use policy for staff who use AI tools is the simplest way to show you took it seriously.</p>

      <h3>Since August 2, 2025: general-purpose AI models</h3>

      <p>Obligations for providers of general-purpose AI models, along with most of the Act&apos;s penalty provisions, have applied since August 2, 2025. These bind the companies that build foundation models, not businesses that use them. What you should do is read your AI vendor&apos;s terms and documentation and confirm they say they comply. Our <a href="/blog/ai-vendor-contract-negotiation-checklist">AI vendor contract checklist</a> covers what to ask for.</p>

      <h3>Since August 2, 2026: transparency under Article 50</h3>

      <p>This is the part that reaches ordinary businesses. <a href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" target="_blank" rel="noopener noreferrer">Article 50</a> applies from August 2, 2026:</p>

      <ul>
        <li><strong>Chatbots (Art. 50(1), provider duty):</strong> AI systems intended to interact directly with people must be designed so users are told they&apos;re dealing with AI, unless that is obvious to a reasonably well-informed person. Under Art. 50(5), the information must come at the latest at the first interaction.</li>
        <li><strong>Marking synthetic content (Art. 50(2), provider duty):</strong> Providers of systems that generate synthetic audio, image, video, or text must mark outputs in a machine-readable format so they can be detected as AI-generated, with exceptions for systems that only assist standard editing or don&apos;t substantially alter the input.</li>
        <li><strong>Deepfakes and public-interest text (Art. 50(4), deployer duty):</strong> Deployers that publish deepfake image, audio, or video content must disclose that it is artificially generated or manipulated. Clearly artistic, satirical, or fictional works get a lighter disclosure duty. AI-generated text published to inform the public on matters of public interest must be disclosed unless it has gone through human review and someone holds editorial responsibility.</li>
      </ul>

      <p>The Commission published <a href="https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems" target="_blank" rel="noopener noreferrer">guidelines on the Article 50 transparency obligations</a> on July 20, 2026. Article 50(5) itself requires the information to be given &ldquo;in a clear and distinguishable manner&rdquo; no later than the first interaction or exposure, so a disclosure buried in terms and conditions is a poor bet. Having the bot answer honestly when a user asks whether it is an AI is a sensible practice on top of that.</p>

      <h2>What the Digital Omnibus changed</h2>

      <p>The Omnibus amended the AI Act&apos;s application dates in <a href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113" target="_blank" rel="noopener noreferrer">Article 113</a> and made several substantive changes:</p>

      <ul>
        <li><strong>High-risk systems under Annex III</strong> (the stand-alone list, including AI used in employment decisions, credit scoring, education, and access to essential services): obligations now apply from <strong>December 2, 2027</strong>, instead of August 2, 2026.</li>
        <li><strong>High-risk systems under Annex I</strong> (AI that is a safety component of products already regulated by EU product-safety law): obligations now apply from <strong>August 2, 2028</strong>.</li>
        <li><strong>Content marking grace period:</strong> Providers of generative systems placed on the market before August 2, 2026 have until <strong>December 2, 2026</strong> to comply with Article 50(2). Systems placed on the market after August 2, 2026 had to comply from that date. The chatbot disclosure in Article 50(1) and the deepfake disclosure in Article 50(4) were not deferred.</li>
        <li><strong>Two new prohibitions from December 2, 2026:</strong> AI systems that generate or manipulate realistic intimate images, video, or audio of an identifiable person without consent, and AI systems that generate child sexual abuse material.</li>
        <li><strong>AI literacy:</strong> Article 4 was rewritten as described above.</li>
        <li><strong>SMEs and small mid-caps:</strong> The Omnibus adds a defined category of &ldquo;small mid-cap enterprises&rdquo; and extends to them some of the simplifications SMEs already had, such as streamlined documentation. SMEs already get fines capped at the lower of the fixed amount or the percentage of turnover. Small mid-caps now get the same lower-of cap for most fines, though not for fines for prohibited practices.</li>
      </ul>

      <p>The deferral affects only the high-risk chapter. Nothing in the Omnibus pushed back Article 50(1) or 50(4).</p>

      <h2>Back to the Austin company</h2>

      <p>Here is how the Act maps onto the leather-goods seller:</p>

      <ul>
        <li><strong>The support chatbot.</strong> If the company integrated the model into its own branded chatbot, it is likely the provider of that system for Article 50(1) purposes. The bot needs a clear &ldquo;you&apos;re chatting with an AI assistant&rdquo; disclosure at the start of the conversation, and it should answer honestly when asked. That has applied since August 2, 2026. Many US states have their own versions of this rule, collected in our <a href="/blog/website-chatbot-disclosure-laws-2026">chatbot disclosure law guide</a>.</li>
        <li><strong>AI product images.</strong> The company is a deployer of the image generator. The marking duty in Article 50(2) falls on the image tool&apos;s provider. The company&apos;s own exposure is under Article 50(4), and only if an image is a deepfake, meaning content that resembles real people, objects, places, or events and would falsely appear authentic. Styled lifestyle shots of a bag usually aren&apos;t. A fabricated &ldquo;customer&rdquo; photo of a real-looking person would be riskier.</li>
        <li><strong>The hiring screener.</strong> AI used to evaluate job candidates is listed in Annex III. Because the company is outside the EU, the question is whether the tool&apos;s output is &ldquo;used in the Union.&rdquo; Screening EU-resident applicants for a role they would perform from the EU is a fair candidate for that. The deployer duties for high-risk systems don&apos;t apply until December 2, 2027, which leaves time to press the vendor on documentation and human oversight.</li>
        <li><strong>AI literacy.</strong> Staff who use these tools should get basic training now.</li>
      </ul>

      <h2>A practical checklist for a US small business with EU customers</h2>

      <ol>
        <li><strong>Inventory your AI uses.</strong> List every tool, who uses it, and whether its output reaches EU users or customers.</li>
        <li><strong>Label each one provider or deployer.</strong> If you put a model behind your own brand, assume you may be the provider of that system.</li>
        <li><strong>Fix chatbot disclosures now.</strong> First-interaction disclosure, and an honest answer to &ldquo;am I talking to a bot?&rdquo;</li>
        <li><strong>Confirm content marking with vendors.</strong> Ask your generative AI vendors how they mark outputs under Article 50(2) and whether legacy products will be compliant by December 2, 2026.</li>
        <li><strong>Write a short AI literacy and acceptable-use policy.</strong> Train the staff who actually use the tools.</li>
        <li><strong>Flag anything that touches hiring, credit, education, or access to services.</strong> Those uses may be Annex III high-risk. Use the time before December 2, 2027 to get vendor documentation.</li>
        <li><strong>Remember the GDPR.</strong> Personal data processed through AI tools is still governed by the GDPR, and our <a href="/blog/state-privacy-laws-small-business-2026">overview of privacy laws</a> covers the US side.</li>
      </ol>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>Does the EU AI Act apply to a US business with no EU office?</h3>
        <p>It can. Article 2 reaches providers placing AI systems on the EU market wherever they are established, and providers and deployers outside the EU when their AI system&apos;s output is used in the EU. A US company with no EU customers or users and no EU-facing output is generally outside it.</p>
      </div>

      <div className="faq-item">
        <h3>Did the Digital Omnibus delay the chatbot disclosure rule?</h3>
        <p>No. The Omnibus deferred the high-risk obligations and gave legacy generative AI systems until December 2, 2026 to meet the content-marking rule in Article 50(2). The chatbot disclosure in Article 50(1) and the deepfake disclosure in Article 50(4) apply from August 2, 2026.</p>
      </div>

      <div className="faq-item">
        <h3>Is using ChatGPT-style tools inside my company &ldquo;high-risk&rdquo;?</h3>
        <p>Usually not. High-risk status depends on the use case, such as employment decisions, creditworthiness, education, or access to essential services, not on the tool itself. Drafting emails or summarizing documents is not an Annex III use.</p>
      </div>

      <div className="faq-item">
        <h3>What does &ldquo;AI literacy&rdquo; require after the Omnibus?</h3>
        <p>Providers and deployers must take measures to support the development of their staff&apos;s AI literacy. The amended text says it doesn&apos;t require guaranteeing any particular level of literacy for any individual. Documented training proportionate to how staff use AI is a sensible way to meet it.</p>
      </div>

      <h2>For ongoing tracking</h2>

      <p>The Commission published its final <a href="https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content" target="_blank" rel="noopener noreferrer">Code of Practice on Transparency of AI-generated Content</a> on June 10, 2026. It is voluntary, and the Article 50 duties themselves are binding. The Commission is still issuing guidance under the AI Act, and the Omnibus dates may generate further guidance before December 2026. We track developments at <a href="/ai-current">silvertonpublishing.com/ai-current</a>.</p>

      <p><em>This article reflects the EU AI Act, as amended by Regulation (EU) 2026/1744, as of October 2026. EU implementation guidance is still arriving, and national enforcement practice has barely begun. Confirm the current consolidated text and Commission guidance before relying on it. Nothing in this article is legal advice for your specific situation.</em></p>
    </>
  ),

  "connecticut-cart-act-ai-subscriptions-2026": (
    <>
      <p>Connecticut&apos;s big 2026 AI law covers frontier model safety, hiring tools, content provenance, AI companions, social media, and more. Most of it won&apos;t touch a small business. If you&apos;ve read early coverage saying it regulates every AI subscription sold to Connecticut residents, that coverage is out of date. The legislature narrowed the subscription rule before it took effect.</p>

      <h2>How the law got here</h2>

      <p>The law started as Substitute Senate Bill 5. It became <a href="https://www.cga.ct.gov/2026/ACT/PA/PDF/2026PA-00015-R00SB-00005-PA.PDF" target="_blank" rel="noopener noreferrer">Public Act 26-15</a>, formally titled &ldquo;An Act Concerning Online Safety.&rdquo; Its sponsors call it the Connecticut Artificial Intelligence Responsibility and Transparency Act, or CART Act. The legislative record, compiled on <a href="https://legiscan.com/CT/bill/SB00005/2026" target="_blank" rel="noopener noreferrer">LegiScan&apos;s SB 5 page</a>, shows Governor Ned Lamont signed it on May 27, 2026. He held a <a href="https://www.senatedems.ct.gov/happening-today-ai-bill-signing-ceremony" target="_blank" rel="noopener noreferrer">public signing ceremony on June 2, 2026</a>, which is why some coverage gives the later date.</p>

      <p>June 2 matters for another reason. That same day, the Governor signed House Bill 5222, which became Public Act 26-100. According to the Office of Legislative Research&apos;s <a href="https://www.cga.ct.gov/2026/SUM/PDF/2026SUM00100-R02HB-05222-SUM.PDF" target="_blank" rel="noopener noreferrer">public act summary of PA 26-100</a>, that act repealed Section 1 of the CART Act, the subscription rule, and substituted &ldquo;substantially similar provisions&rdquo; with a much narrower scope. The original Section 1 never took effect.</p>

      <h2>The dates that matter to a small business</h2>

      <ul>
        <li><strong>October 1, 2026:</strong> The replacement AI subscription rule takes effect. So do the frontier-developer whistleblower protections and a new requirement that employers say whether a WARN layoff notice is related to AI.</li>
        <li><strong>January 1, 2027:</strong> The AI companion rules take effect. Large frontier developers must also have an anonymous internal reporting process in place by this date.</li>
        <li><strong>October 1, 2027:</strong> According to law-firm summaries of the act, the principal obligations for automated employment decision tools apply from this date, although the statutory framework took effect a year earlier.</li>
        <li><strong>January 1, 2028:</strong> The provisions for social media platforms and minors take effect.</li>
      </ul>

      <h2>Question one: &ldquo;We sell an AI product on a subscription. Are we covered?&rdquo;</h2>

      <p>For most small businesses, no.</p>

      <p>As originally enacted, Section 1 of the CART Act would have reached almost anyone. It applied to a &ldquo;subscription-based provider,&rdquo; defined as a person doing business in Connecticut who provides, or offers to provide, &ldquo;an artificial intelligence technology to a consumer pursuant to a subscription.&rdquo; A scheduling app with an AI-drafting feature would have been covered.</p>

      <p>The replacement rule in PA 26-100 is far narrower. The OLR summary says the disclosure requirements now apply to &ldquo;publicly accessible generative AI systems for personal use with more than a million monthly users.&rdquo; It defines generative AI as &ldquo;any technology that uses machine learning to generate images, audio, or video.&rdquo; Law-firm summaries of the enrolled text, including <a href="https://www.insideprivacy.com/consumer-protection/connecticut-extends-ai-regulation-to-subscriptions/" target="_blank" rel="noopener noreferrer">Covington&apos;s analysis</a>, describe a covered provider as one that creates or produces the generative AI system and offers it to consumers by subscription.</p>

      <p>Put those pieces together and three filters knock most small businesses out:</p>

      <ul>
        <li><strong>Scale.</strong> The system needs more than one million monthly users. A small company selling its own tool will rarely be anywhere near that.</li>
        <li><strong>Creating the system.</strong> The rule targets the company that creates or produces the generative AI system. A business that resells or builds a thin product layer on top of a large vendor&apos;s model raises a harder question. The most natural reading is that the vendor, not the reseller, is the covered provider, but that point should be confirmed against the enrolled text.</li>
        <li><strong>Output type.</strong> The definition names images, audio, and video. Whether a text-only product, such as a chat-based writing assistant, falls inside it is not clear from the summaries. Treat that as an open question rather than an exemption.</li>
      </ul>

      <p>Two other limits carry over from the original. The rule protects only a &ldquo;consumer,&rdquo; meaning an individual who is a Connecticut resident, so business-to-business subscriptions fall outside it. And it is specific to AI. Ordinary subscriptions, including AI subscriptions that fall outside the narrow rule, remain subject to Connecticut&apos;s general automatic-renewal law, which was overhauled by legislation that took effect October 1, 2023.</p>

      <h3>What the notice has to say, if you are covered</h3>

      <p>For the large platforms that are covered, the rule is a notice-and-acceptance requirement. Before entering into or renewing a covered subscription, or collecting a fee for one, the provider must give the consumer written notice of the subscription&apos;s key terms and conditions, and the consumer must give written acceptance. The notice must give a reasonable consumer enough material information to decide whether to buy or keep the subscription, including:</p>

      <ul>
        <li>quantitative or qualitative limits on use, such as caps on tokens, generated images, or transcription, including limits triggered by the consumer&apos;s own conduct, and</li>
        <li>whether the provider has discretion to limit or remove access to functionality, or to reduce its quantity or quality.</li>
      </ul>

      <p>At renewal, the notice must identify limits and provider discretion that are new for the renewal term, or that existed before but have changed.</p>

      <p>Connecticut is targeting the &ldquo;unlimited plan that quietly throttles you&rdquo; problem.</p>

      <h3>Consider a typical scenario</h3>

      <p>Consider a four-person software company in Ohio that sells a monthly AI writing assistant to freelancers nationwide. It has about 30,000 subscribers, a few hundred of them in Connecticut. The product is built on a large model provider&apos;s API. Its terms of service say the company &ldquo;may modify features at any time,&rdquo; and its fair-use policy caps generations per day.</p>

      <p>On the October 2026 law, this company is very likely outside the AI subscription rule. It is nowhere near one million monthly users, its product generates text rather than images, audio, or video, and it did not create the underlying model. What it cannot ignore is Connecticut&apos;s general automatic-renewal law and federal consumer protection law, which govern how it discloses renewal terms and handles cancellation.</p>

      <p>Even so, it would be wise to put the generation cap and the &ldquo;may modify features&rdquo; discretion in a clear summary at checkout. Undisclosed throttling is the kind of thing a state attorney general can pursue as a deceptive practice without any AI-specific statute.</p>

      <h3>Who enforces it</h3>

      <p>A violation of the subscription rule is an unfair or deceptive trade practice under the Connecticut Unfair Trade Practices Act (CUTPA). Enforcement is solely by the Attorney General, and the provision creates no private right of action. That limits class-action risk. It does not limit state enforcement. Under the <a href="https://www.cga.ct.gov/current/pub/chap_735a.htm#sec_42-110o" target="_blank" rel="noopener noreferrer">general CUTPA framework</a>, the state can seek injunctions, and courts can impose civil penalties of up to $5,000 for willful violations.</p>

      <h2>Question two: &ldquo;We have a chatbot on our website. Is that an &apos;AI companion&apos;?&rdquo;</h2>

      <p>For most businesses, no, but read the definition and exclusions carefully.</p>

      <p>Under Section 4 of the CART Act, an AI companion is an AI system with a natural-language interface that provides adaptive, human-like responses to user inputs and is able to sustain a relationship across multiple interactions. The act then excludes several categories, including:</p>

      <ul>
        <li>chatbots used for business operations, customer service, internal research, and similar purposes that are not marketed to consumers as companions,</li>
        <li>video game chatbots limited to game-related replies that cannot discuss mental health, self-harm, sexually explicit conduct, or unrelated topics,</li>
        <li>standalone voice-command speakers that don&apos;t sustain a relationship or generate outputs likely to elicit emotional attachment,</li>
        <li>narrowly tailored educational tools that aren&apos;t designed for open-ended companionship,</li>
        <li>health care tools limited to clinical or treatment support that don&apos;t present as human, use anthropomorphic features, or aim to meet social or emotional needs,</li>
        <li>narrow, task-specific tools whose primary function isn&apos;t discussing mental health, and</li>
        <li>developers or licensors that don&apos;t solely determine the use case, user interface, or deployment context.</li>
      </ul>

      <p>A bot that answers shipping questions or books appointments sits comfortably inside the business-operations exclusion, as long as you don&apos;t market it as a companion. The risk sits with products that drift: a &ldquo;wellness buddy&rdquo; in a fitness app, a named persona that remembers users and checks in on how they&apos;re feeling, or a coaching bot sold as &ldquo;someone to talk to.&rdquo; Those features look a lot like sustaining a relationship, and marketing them that way can take you out of the exclusion.</p>

      <h3>What operators of AI companions must do starting January 1, 2027</h3>

      <p>If your product is an AI companion, Section 5 requires the operator to:</p>

      <ul>
        <li>adopt a protocol, using evidence-based methods, to detect user expressions clearly indicating a risk of suicide, self-harm, or imminent physical violence, and to prevent outputs that encourage that conduct,</li>
        <li>refer at-risk users to mental health resources, including the <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer">988 Suicide &amp; Crisis Lifeline</a>, and to mental health services if those expressions continue after a referral,</li>
        <li>post the protocol in a prominent, publicly accessible place on the operator&apos;s website,</li>
        <li>take reasonable measures to stop the companion from claiming to be human, including when a user asks directly, and</li>
        <li>where a reasonable person could believe they&apos;re talking to a human, give a clear AI disclosure. That can be a static notice visible throughout the interaction, or a notice at the start of the first interaction in any 24-hour period that repeats at least every three hours of continuous interaction for adults and at least hourly for minors.</li>
      </ul>

      <p>Section 6 adds protections when the operator knows or has reason to believe the user is a minor, including limits on romantic or sexual interactions and engagement-maximizing manipulation, and tools for managing screen time and account settings. Both sections are enforced by the Attorney General under CUTPA.</p>

      <p>Even if your support bot is not a companion, your disclosure duties don&apos;t disappear. Other states have their own bot-disclosure rules, collected in our <a href="/blog/website-chatbot-disclosure-laws-2026">guide to website chatbot disclosure laws</a>.</p>

      <h2>Question three: &ldquo;Do the whistleblower provisions apply to us as an employer?&rdquo;</h2>

      <p>Almost certainly not.</p>

      <p>The whistleblower rules in Section 2 apply to &ldquo;frontier developers,&rdquo; meaning persons doing business in Connecticut that train, or intend to train, a foundation model using more than 10^26 integer or floating-point operations of computing power, counting fine-tuning and other material modifications. That is the scale of the largest model labs. A business that uses an AI model, or builds an app on top of one, is not a frontier developer.</p>

      <p>For the companies that are covered:</p>

      <ul>
        <li>Frontier developers may not prevent or retaliate against covered employees for reporting catastrophic-risk concerns.</li>
        <li>&ldquo;Large frontier developers,&rdquo; those that, with affiliates, had more than $500 million in annual gross revenue in the prior calendar year, must have an anonymous internal reporting process by January 1, 2027, and share reports with officers and directors at least quarterly.</li>
        <li>The Attorney General may seek civil penalties of up to $1,000 per violation.</li>
      </ul>

      <p>The employment provision that midsize employers are more likely to meet is Section 26. Starting October 1, 2026, an employer that serves a federal WARN Act notice on the Connecticut Labor Department must also disclose whether the layoffs relate to its use of AI or other technological change. WARN generally reaches only larger employers, but if you&apos;re at that size and automating roles, plan for the disclosure.</p>

      <h2>How this fits with the rest of the patchwork</h2>

      <p>Colorado <a href="/blog/colorado-ai-act-repealed-replaced-sb-189-2026">repealed and replaced its AI Act</a> this year, and <a href="/blog/state-privacy-laws-small-business-2026">state privacy laws</a> already govern much of the data flowing through AI tools. Connecticut&apos;s subscription rule, as narrowed, is aimed at the largest consumer generative AI platforms. The Future of Privacy Forum&apos;s <a href="https://fpf.org/blog/sb-5-in-five-what-to-know-about-connecticuts-new-ai-law/" target="_blank" rel="noopener noreferrer">overview of SB 5</a> maps the remaining provisions, though it predates the June 2 amendment.</p>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>I read that the CART Act covers any subscription to a product with AI in it. Is that wrong?</h3>
        <p>It described the original Section 1. PA 26-100 repealed that section upon passage and replaced it, effective October 1, 2026, with the narrower rule. Commentary published before June 2026 generally doesn&apos;t reflect the change.</p>
      </div>

      <div className="faq-item">
        <h3>Is a customer-service chatbot regulated as an AI companion?</h3>
        <p>Not if it is used for business operations or customer service and isn&apos;t marketed to consumers as a companion. That exclusion is in the act&apos;s definition. A bot with a persona built to form an ongoing emotional relationship with users is a different matter and should be reviewed against the January 1, 2027 requirements.</p>
      </div>

      <div className="faq-item">
        <h3>Can a customer sue me under the new law?</h3>
        <p>The subscription rule and Section 5 of the companion rules expressly create no private right of action, and Section 6 is enforced solely by the Attorney General. Some summaries have described a private remedy for the companion rules. The act text points to AG enforcement, though counsel should watch for any court reading it differently. The separate social media provisions taking effect in 2028 are a different story and are reported to carry a private right of action.</p>
      </div>

      <h2>For ongoing tracking</h2>

      <p>State AI laws are changing quickly, and Connecticut amended this one within days of signing it. We track developments at <a href="/ai-current">silvertonpublishing.com/ai-current</a>.</p>

      <p><em>This article reflects Connecticut Public Acts 26-15 and 26-100 as of October 2026. State AI law is moving quickly, and Connecticut has already amended this act once. Confirm the current text of both acts and any guidance from the Connecticut Attorney General before relying on it. Nothing in this article is legal advice for your specific situation.</em></p>
    </>
  ),

  "fbar-fatca-foreign-accounts-business-owners-2026": (
    <>
      <p>Holding money outside the United States is legal. Not reporting it is where the trouble starts. For a small-business owner, the duty usually arrives quietly: the company opens an account in Mexico to pay a manufacturer, or the owner keeps a euro balance in a fintech app because the exchange rates are better.</p>

      <p>Two separate reports can apply, filed with two different agencies. Most expensive mistakes come from assuming one covers the other.</p>

      <h2>Two reports, two agencies</h2>

      <p><strong>The FBAR</strong> is FinCEN Form 114, the Report of Foreign Bank and Financial Accounts. It is a Bank Secrecy Act filing, made to the Financial Crimes Enforcement Network through the BSA E-Filing System, not attached to your tax return. Under the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" target="_blank" rel="noopener noreferrer">IRS&apos;s FBAR overview</a>, a US person must file if they have a financial interest in, or signature or other authority over, at least one financial account located outside the United States, and the aggregate value of those accounts exceeded $10,000 at any time during the calendar year.</p>

      <p><strong>Form 8938</strong>, the Statement of Specified Foreign Financial Assets, comes from FATCA, the Foreign Account Tax Compliance Act. It is an IRS form, attached to your income tax return, with much higher thresholds and a different list of covered assets.</p>

      <p>The IRS&apos;s <a href="https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements" target="_blank" rel="noopener noreferrer">comparison of Form 8938 and the FBAR</a> is the most useful page on this topic, and it confirms that Form 8938 does not replace the FBAR.</p>

      <h2>The FBAR: what counts and who files</h2>

      <h3>The $10,000 test is aggregate</h3>

      <p>The $10,000 threshold is measured across all your foreign accounts combined. Three accounts that each peaked at $4,000 put you over the line, and once you&apos;re over, every account gets reported.</p>

      <h3>&ldquo;US person&rdquo; includes your company</h3>

      <p>The FBAR regulation, <a href="https://www.law.cornell.edu/cfr/text/31/1010.350" target="_blank" rel="noopener noreferrer">31 CFR 1010.350</a>, defines a US person to include entities formed under US federal or state law. Your LLC, corporation, or partnership is a US person in its own right. If the company owns a foreign account over the threshold, the company files its own FBAR.</p>

      <p>The owner may have to file too. The regulation treats you as having a financial interest in an account owned by an entity in which you own, directly or indirectly, more than 50 percent. So a sole owner of an LLC with a foreign operating account typically has two FBARs to think about: the company&apos;s and her own. The regulation includes a consolidated-reporting option for an entity that owns more than 50 percent of another reporting entity, which can simplify things in a parent-subsidiary structure.</p>

      <h3>Signature authority counts even without ownership</h3>

      <p>Signature or other authority means the power to control the disposition of money in the account by direct communication with the bank. An employee who can wire funds from the company&apos;s foreign account has an FBAR filing obligation for that account, even with no ownership stake.</p>

      <p>FinCEN has repeatedly extended the deadline for a narrow group of individuals who have signature authority but no financial interest. Its most recent notice, <a href="https://www.fincen.gov/system/files/2025-12/FBAR-FBAR-Filing-Requirement-for-Certain-Financial-Professionals.pdf" target="_blank" rel="noopener noreferrer">FIN-2025-NTC3</a>, pushed reporting for calendar year 2025 to April 15, 2027 for the individuals covered by its prior notice. That group is defined by a chain of earlier notices, and a bookkeeper at a small private company should not assume she is in it without checking.</p>

      <h3>What counts as a foreign financial account</h3>

      <p>The regulation covers bank accounts, securities accounts, and &ldquo;other financial accounts,&rdquo; including cash-value insurance and annuity policies and foreign mutual funds, at financial institutions located outside the United States. A few categories that trip up business owners:</p>

      <ul>
        <li><strong>Supplier and operating accounts.</strong> An account your company opens abroad to pay vendors or collect from customers is a foreign financial account. A supplier&apos;s own account is not yours to report.</li>
        <li><strong>Accounts at a foreign branch of a US bank.</strong> These are FBAR-reportable, because the account is located outside the United States. They are not reportable on Form 8938.</li>
        <li><strong>Fintech and online payment accounts.</strong> The regulation doesn&apos;t name payment platforms. The question is where the account is maintained and by what kind of institution. A US-dollar balance with a US-based payment company is generally not a foreign account. A euro or pound balance that a fintech provider holds through a foreign entity or foreign partner bank may be. FinCEN has not published a rule specific to these platforms, so the answer depends on the provider&apos;s structure and your account terms. When in doubt, many practitioners report.</li>
        <li><strong>Crypto.</strong> In <a href="https://www.fincen.gov/sites/default/files/shared/Notice-Virtual%20Currency%20Reporting%20on%20the%20FBAR%20123020.pdf" target="_blank" rel="noopener noreferrer">FinCEN Notice 2020-2</a>, dated December 31, 2020, FinCEN said the FBAR regulations do not currently define a foreign account holding virtual currency as a reportable account, unless it also holds reportable assets. In the same notice, FinCEN said it intends to propose amending the regulations to make virtual currency accounts reportable. As of October 2026, no final rule doing that has been issued. A foreign exchange account that also holds fiat currency is reportable.</li>
      </ul>

      <h3>Due dates</h3>

      <p>The FBAR is due April 15 following the calendar year being reported. There is an automatic extension to October 15. You don&apos;t have to request it. Keep records of each account, including its maximum value, for five years from the due date.</p>

      <h2>Form 8938: higher thresholds, different assets</h2>

      <p>Form 8938 applies to &ldquo;specified individuals&rdquo; and, since 2016, to certain &ldquo;specified domestic entities.&rdquo; The thresholds, per the IRS comparison page:</p>

      <ul>
        <li><strong>Unmarried, living in the US:</strong> more than $50,000 on the last day of the tax year, or more than $75,000 at any time during the year.</li>
        <li><strong>Married filing jointly, living in the US:</strong> more than $100,000 on the last day, or more than $150,000 at any time.</li>
        <li><strong>Living abroad:</strong> $200,000 / $300,000 if unmarried, and $400,000 / $600,000 if married filing jointly.</li>
        <li><strong>Specified domestic entities:</strong> more than $50,000 on the last day, or more than $75,000 at any time.</li>
      </ul>

      <p>The entity rule is narrower than it sounds. Under the <a href="https://www.irs.gov/instructions/i8938" target="_blank" rel="noopener noreferrer">Form 8938 instructions</a>, a domestic corporation or partnership qualifies only if a specified individual owns at least 80 percent of it and at least half its gross income or assets are passive. Most operating businesses fail the passive test. A family holding company of foreign investments may not.</p>

      <p>Two other points matter for owners:</p>

      <ul>
        <li><strong>Signature authority alone is not an interest for Form 8938.</strong> The bookkeeper who files an FBAR for the company account usually has nothing to report on her own Form 8938.</li>
        <li><strong>Disregarded entities pass through.</strong> If your single-member LLC is disregarded for tax purposes, the regulations treat you as holding the LLC&apos;s specified foreign financial assets directly. Those assets count toward your personal Form 8938 threshold.</li>
      </ul>

      <p>Form 8938 is due with your tax return, including extensions.</p>

      <h2>Consider a typical scenario</h2>

      <p>Consider a Michigan furniture company organized as a single-member LLC that is disregarded for tax purposes. The owner, who files jointly with her spouse, keeps a euro account at a Portuguese bank to pay a hardware supplier. The balance peaked at $140,000 in 2025 and ended the year at $60,000. Her office manager can initiate wires from that account. Separately, the owner holds a personal euro balance in a fintech app that peaked at $6,000.</p>

      <p>Here is how the filings likely sort out for calendar year 2025:</p>

      <ul>
        <li><strong>The LLC</strong> is a US person and files an FBAR for the Portuguese account.</li>
        <li><strong>The owner</strong> has a financial interest through her more-than-50-percent ownership, so she reports the Portuguese account on her own FBAR. If the fintech balance is held at a foreign institution, it goes on her FBAR too. Her aggregate is well over $10,000 either way.</li>
        <li><strong>The office manager</strong> has signature authority with no financial interest and has her own FBAR filing duty for the Portuguese account, subject to checking whether any FinCEN extension reaches her.</li>
        <li><strong>Form 8938:</strong> Because the LLC is disregarded, the owner is treated as holding the Portuguese account. The account peaked at $140,000, under the $150,000 any-time threshold for joint filers living in the US, and ended at $60,000, under the $100,000 year-end threshold. Even if the fintech balance also counts, the combined maximum values ($146,000) stay under $150,000. On these numbers, no Form 8938 is required, but a modestly larger peak balance would change that. Run the math with your tax preparer every year.</li>
      </ul>

      <p>With the automatic extension, those 2025 FBARs are due by October 15, 2026, days after this article&apos;s date.</p>

      <h2>Penalties: what the law actually says</h2>

      <p>Claims that the IRS &ldquo;tightened FBAR penalties for 2026&rdquo; don&apos;t match the primary sources.</p>

      <p><strong>Non-willful FBAR violations.</strong> The statutory maximum is $10,000 per violation, adjusted for inflation. Under <a href="https://www.govinfo.gov/content/pkg/FR-2025-01-17/html/2025-01374.htm" target="_blank" rel="noopener noreferrer">FinCEN&apos;s January 2025 inflation adjustment</a>, the maximum is $16,536 for penalties assessed on or after January 17, 2025. The Office of Management and Budget cancelled the 2026 inflation adjustments for all agencies in Memorandum M-26-11 (April 17, 2026), because October 2025 price data wasn&apos;t produced during the government shutdown. As of October 2026, the 2025 amounts remain in effect. The statute also provides a reasonable-cause exception for non-willful violations when the account is properly reported.</p>

      <p><strong>Per report, not per account.</strong> In <a href="https://www.law.cornell.edu/supremecourt/text/21-1195" target="_blank" rel="noopener noreferrer">Bittner v. United States</a>, decided February 28, 2023, the Supreme Court held 5-4 that the non-willful penalty applies per report, not per account. The government had assessed $2.72 million against Mr. Bittner, at $10,000 for each of 272 accounts across five late annual reports. He argued for one penalty per report, which across five reports meant a maximum of $50,000, and the Court agreed with his reading of the statute. For an owner with several foreign accounts, that is the difference between ruinous and manageable, if the conduct was non-willful.</p>

      <p><strong>Willful violations.</strong> The maximum is the greater of the inflation-adjusted amount ($165,353 under the January 2025 adjustment) or 50 percent of the account balance at the time of the violation. Bittner does not change the willful penalty. Criminal penalties are also possible.</p>

      <p><strong>Form 8938.</strong> The penalty is $10,000 for failing to file, plus up to $50,000 more for continued failure after IRS notice. A 40 percent accuracy-related penalty applies to underpayments tied to undisclosed foreign assets, and the statute of limitations on the return can stay open.</p>

      <h2>If you missed filings: what changed in 2026</h2>

      <p>For years, the IRS published &ldquo;Delinquent FBAR Submission Procedures,&rdquo; which said the IRS would not penalize a late FBAR if the taxpayer had reported and paid tax on all the income and hadn&apos;t been contacted about an exam. As reported by <a href="https://taxnews.ey.com/news/2026-1516-irs-removes-published-penalty-relief-guidance-for-certain-delinquent-fbar-fincen-form-114-filings" target="_blank" rel="noopener noreferrer">EY</a> and other advisers, the IRS removed that page on July 1, 2026 without a formal announcement. The FBAR rules themselves didn&apos;t change. What&apos;s gone is the published assurance of no penalty.</p>

      <p>The IRS&apos;s FBAR page now tells late filers to file &ldquo;as soon as possible to keep potential penalties to a minimum,&rdquo; following FinCEN&apos;s instructions for explaining a late filing. If a missing FBAR is the only problem and all income was reported, prompt filing with a clear explanation remains the usual path, but the penalty decision now rests on examiner discretion rather than a published safe harbor.</p>

      <p>Other options, depending on the facts:</p>

      <ul>
        <li><strong>Streamlined Filing Compliance Procedures.</strong> As of the <a href="https://www.irs.gov/individuals/international-taxpayers/streamlined-filing-compliance-procedures" target="_blank" rel="noopener noreferrer">IRS streamlined page</a> (last updated July 2026), these remain available for individuals and estates whose failures were non-willful and who are not under civil examination or criminal investigation. US residents file three years of amended returns and six years of FBARs and pay a 5 percent miscellaneous offshore penalty. Note that the program is for individuals. A business entity&apos;s own late FBARs aren&apos;t filed through it.</li>
        <li><strong>IRS Criminal Investigation Voluntary Disclosure Practice.</strong> This is for willful conduct. The IRS proposed revisions in December 2025. As of October 2026, check the <a href="https://www.irs.gov/compliance/criminal-investigation/irs-criminal-investigation-voluntary-disclosure-practice" target="_blank" rel="noopener noreferrer">VDP page</a> for current terms before relying on either version.</li>
      </ul>

      <p>Whether the conduct was willful decides which path fits, so make that call with a tax lawyer before filing anything. For background on where legitimate offshore structures end and illegal concealment begins, see <a href="/blog/offshore-accounts-legal-illegal">our guide to offshore accounts</a>.</p>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>Do I report a foreign account if I only have signature authority?</h3>
        <p>For the FBAR, yes, subject to narrow exceptions and any FinCEN extension that covers you. For Form 8938, signature authority alone is not an interest, so it generally doesn&apos;t go on that form.</p>
      </div>

      <div className="faq-item">
        <h3>Is a Wise, Revolut, or PayPal balance a foreign account?</h3>
        <p>It depends on which legal entity holds your balance and where. Check your account agreement for the contracting entity. When the answer is unclear, reporting is the cautious choice.</p>
      </div>

      <div className="faq-item">
        <h3>Is crypto on a foreign exchange reportable?</h3>
        <p>Not on the FBAR under current regulations, unless the account also holds fiat or other reportable assets, per FinCEN Notice 2020-2. FinCEN has said it intends to change that. Form 8938 and income reporting are separate questions to raise with your tax preparer.</p>
      </div>

      <p><em>This article reflects FBAR and Form 8938 rules as of October 2026. Agency guidance in this area changes without much notice, as the July 2026 removal of the delinquent FBAR procedures showed, and FinCEN&apos;s pending virtual-currency rule could change crypto reporting. Confirm current IRS and FinCEN guidance and your own filing thresholds before relying on it. Nothing in this article is legal advice for your specific situation.</em></p>
    </>
  ),

};
