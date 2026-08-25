import type { ReactNode } from "react";

export const batch9Content: Record<string, ReactNode> = {
  "employee-ai-use-policy": (
    <>
      <p>Ask a small-business owner whether their employees use AI at work and you will usually get one of two answers. Some say no. Most of those are wrong. The rest say yes, and when you ask which tools, for what, and with what data, the answer stops being specific.</p>

      <p>This is the ordinary condition of AI adoption in a small business. Nobody approved it. Nobody rolled it out. An employee tried a tool, it saved an hour, they kept using it, and they told a colleague. By the time anyone at the ownership level thinks about governance, the tools are already embedded in how work gets done, and the business has no record of what has been entered into them.</p>

      <p>An employee AI use policy is the document that converts that situation into a governed one. It is not a compliance formality and it is not something you adopt because a vendor questionnaire asked for it. It does specific legal work, and understanding what that work is tells you what belongs in the document.</p>

      <h2>What the policy actually does legally</h2>

      <p>A written policy that employees have acknowledged does four things that an informal understanding cannot.</p>

      <p><strong>It preserves trade secret status.</strong> This is the exposure most owners miss. Trade secret protection under both state law and the federal Defend Trade Secrets Act depends on the owner taking reasonable measures to keep the information secret. That is not a formality &mdash; it is an element of the claim. If an employee pastes your customer list, pricing model, supplier terms, or proprietary process into a consumer AI tool whose terms permit training on user inputs, you have a real problem arguing you took reasonable measures. The information may not have leaked anywhere visible. The argument that you protected it is what weakens.</p>

      <p><strong>It keeps you inside your own confidentiality obligations.</strong> Most businesses have promised confidentiality to somebody &mdash; customers, vendors, partners, sometimes in an NDA the owner signed and never re-read. Those obligations usually restrict disclosure to third parties. A consumer AI platform is a third party. An employee summarizing a client agreement in a chatbot may be breaching a contract the employee has never seen.</p>

      <p><strong>It creates the record that supports discipline.</strong> If an employee does something with an AI tool that costs you money, your ability to respond depends on having told them not to. Without a written rule and an acknowledgment, termination for that conduct is harder to defend and the employee has a plausible account in which nobody ever said it was off limits.</p>

      <p><strong>It gives you an answer when someone asks.</strong> Enterprise customers, insurers, lenders, and acquirers have all started asking whether the business has an AI governance policy. In an acquisition, the diligence question is not whether you use AI &mdash; it is whether you can describe how you control it. &ldquo;No policy&rdquo; is a finding.</p>

      <h2>What goes in it</h2>

      <p>The document does not need to be long. It needs to be specific enough that an employee reading it knows what to do on a Tuesday afternoon without asking.</p>

      <p><strong>A definition broad enough to survive the next tool.</strong> Do not write a policy about chatbots. Write it about tools that generate, summarize, classify, or make recommendations from data. Otherwise the policy does not cover the AI feature that appears inside software your team already uses, which is where most unmanaged exposure now sits.</p>

      <p><strong>Approval by category, not by product name.</strong> A list of approved products is out of date within a quarter. Define tiers instead &mdash; tools cleared for general use, tools cleared for specific functions, tools that require approval before first use &mdash; and name a person who grants approval. The person matters more than the list.</p>

      <p><strong>Data rules stated as categories, with examples.</strong> This is the section that does the most work and the one most often written uselessly. &ldquo;Do not enter confidential information&rdquo; means nothing to an employee who does not think of a customer email as confidential. Name the categories: customer personal data, employee personal data, financial records, anything received under an NDA, credentials, trade secrets, unreleased plans. Then give three or four concrete examples drawn from your actual business.</p>

      <p><strong>A human review requirement scaled to consequence.</strong> Not everything needs review. Draft marketing copy does not carry the same risk as a customer-facing commitment, a financial figure, or anything touching a hiring or credit decision. State which outputs require a named human to check them before use, and require that the reviewer be someone competent to catch the error &mdash; a reviewer who cannot evaluate the output is a formality, not a control.</p>

      <p><strong>Rules on the uses that carry independent legal exposure.</strong> Some applications are governed by law regardless of what your policy says. Employment decisions are the clearest: the EEOC has stated that Title VII applies to <a href="https://www.eeoc.gov/ai" target="_blank" rel="noopener noreferrer">algorithmic employment decisions</a>, and a screening tool that produces disparate impact is actionable without any discriminatory intent. Credit and lending decisions carry adverse action notice obligations. If your business touches either, the policy should require sign-off before any AI tool is used in that process.</p>

      <p><strong>A documentation requirement for creative work.</strong> Where AI contributes to material you intend to own &mdash; brand assets, published content, software &mdash; require the employee to record what the human contributed. This is not busywork. Copyright requires human authorship, and the ability to show which creative decisions a person made is what determines whether anything is protectable. The <a href="https://www.copyright.gov/ai/" target="_blank" rel="noopener noreferrer">Copyright Office&apos;s guidance on AI</a> is the reference point, and the same problem arises with outside help &mdash; see <a href="/blog/who-owns-ai-generated-contractor-work">who owns AI-generated work your contractor delivers</a>.</p>

      <p><strong>An acknowledgment.</strong> A policy nobody signed is a draft. Collect signatures, keep them, and re-collect when the policy changes.</p>

      <h2>Three ways these policies fail</h2>

      <p><strong>Prohibition.</strong> A blanket ban is the most common first instinct and the one that reliably backfires. Employees who find the tools useful keep using them and stop mentioning it. You trade visible, governable use for invisible use, and you lose the productivity as a matter of official record while keeping every bit of the exposure.</p>

      <p><strong>Borrowed language.</strong> Policies copied from a template or a larger company describe controls that do not exist in your business &mdash; approval workflows nobody administers, review boards with no members, logging nobody performs. A policy that describes controls you do not have is worse than no policy, because it establishes a standard you are visibly failing to meet.</p>

      <p><strong>Adoption without inventory.</strong> Writing the policy before finding out what is actually in use produces a document aimed at the wrong problem. Do the inventory first. Ask people directly, and ask in a way that does not sound like the answer will get them in trouble, because it will determine whether you learn anything.</p>

      <h2>How to put it in place</h2>

      <p>Inventory first: what tools, used by whom, for what, with what data. Draft the policy against what you find rather than against a hypothetical. Circulate it with a short plain-language explanation of why each rule exists &mdash; a rule an employee understands is one they follow when nobody is watching. Collect acknowledgments. Then set a review date, because the tools and the law will both move.</p>

      <p>If you employ people, this belongs alongside the rest of your employment documentation from the start &mdash; see <a href="/blog/how-to-hire-your-first-employee">hiring your first employee</a> for what else sits in that stack.</p>

      <p>None of this requires a large document. A well-drafted AI use policy for a small business runs two to four pages. What matters is that it reflects your actual operations, that your people have read it, and that you can produce it and the acknowledgments when someone asks. The businesses that get hurt here are rarely the ones that adopted AI aggressively. They are the ones that adopted it without noticing, and had nothing to point to afterward.</p>

      <p>For the wider picture of where AI exposure sits across a business &mdash; hiring, vendors, copyright, and insurance &mdash; see <a href="/blog/when-is-my-business-liable-for-ai">when your business is liable for AI</a>.</p>
    </>
  ),
};
