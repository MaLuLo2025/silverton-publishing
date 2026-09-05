import type { ReactNode } from "react";

export const batch4Content: Record<string, ReactNode> = {
  "llc-to-s-corp-conversion": (
    <>
      <p>
        The LLC-to-S-corp conversion is one of the most frequently recommended tax moves for
        self-employed business owners — and one of the most frequently misapplied. The savings are
        real, but they only materialize once your net profit crosses a certain threshold, and they
        come with administrative costs that erode the benefit at lower income levels.
      </p>
      <p>
        This article explains how S-corp taxation works, where the savings actually come from, how
        to run the break-even math for your situation, and what the conversion process looks like in
        practice.
      </p>

      <h2>How S-Corp Taxation Works</h2>
      <p>
        An S-corporation is a pass-through entity for income tax purposes — profits flow to
        shareholders and are taxed on their individual returns, not at the corporate level. That part
        is similar to an LLC taxed as a sole proprietorship or partnership.
      </p>
      <p>
        The difference is in how the IRS treats self-employment income. As an LLC owner taking all
        business profit as owner draws, you pay self-employment tax (15.3% up to the Social Security
        wage base, then 2.9% on income above that) on every dollar of net profit. That tax covers both
        the employee and employer portions of Social Security and Medicare.
      </p>
      <p>With an S-corp, you split your income into two buckets:</p>
      <ol>
        <li>
          <strong>Salary</strong> — a reasonable compensation for the work you do in the business,
          paid through payroll and subject to FICA taxes (the employment tax equivalent of SE tax)
        </li>
        <li>
          <strong>Distribution</strong> — remaining business profit paid to you as a shareholder
          distribution, which is not subject to self-employment or FICA taxes
        </li>
      </ol>
      <p>
        The savings come from the distribution portion. If the business earns $150,000 in net profit
        and you pay yourself a $75,000 salary, the other $75,000 is distributed without the 15.3% SE
        tax hit. On $75,000, that is roughly $11,475 in tax savings — minus the cost of running the
        S-corp structure.
      </p>

      <div className="callout">
        <p>
          The S-corp strategy works because distributions are not wages. You are not avoiding income
          tax — you are avoiding self-employment and payroll taxes on the portion of profit that flows
          out as a distribution rather than a salary. The IRS knows this strategy exists and accepts
          it, provided your salary is &quot;reasonable compensation.&quot;
        </p>
      </div>

      <h2>The Reasonable Compensation Requirement</h2>
      <p>
        The IRS requires S-corp owner-employees to pay themselves a reasonable salary for the
        services they provide to the business before taking distributions. &quot;Reasonable&quot;
        means what you would pay a comparable employee in the open market to do the same work.
      </p>
      <p>
        The IRS actively scrutinizes S-corps that pay very low or zero salaries to owner-operators who
        are clearly working in the business. Paying yourself $20,000 a year while taking $200,000 in
        distributions is the kind of structure that triggers audits and back-tax assessments.
        Reasonable compensation should be defensible — documented by reference to market salary data
        for your role and industry.
      </p>

      <h2>The Break-Even Math</h2>
      <p>Running an S-corp costs money that a single-member LLC does not. Those costs include:</p>
      <ul>
        <li>Payroll processing (typically $500–$2,400 per year depending on the provider and frequency)</li>
        <li>
          A separate S-corp tax return (Form 1120-S) — typically $800–$1,500 per year in CPA fees, on
          top of your personal return
        </li>
        <li>State filing fees and franchise taxes, which vary significantly by state</li>
        <li>
          Potential state-level S-corp taxes (California, for example, charges a 1.5% franchise tax
          on S-corp net income with a minimum of $800)
        </li>
      </ul>
      <p>
        When you add those costs together, a realistic annual overhead for maintaining an S-corp
        structure is $2,000–$4,000 per year in most states. In high-franchise-tax states, it runs
        higher.
      </p>
      <p>
        The savings from the S-corp election are roughly 15.3% of the distribution amount (the profit
        above your salary). So the break-even point is:
      </p>
      <p>
        <em>Distribution = Administrative Cost / 15.3%</em>
      </p>
      <p>
        At $3,000 in annual S-corp overhead, you need roughly $19,600 in distributions above your
        salary to break even. In practice, this means your total net profit needs to be high enough
        that you can pay a reasonable salary and still have meaningful distributions left over.
      </p>
      <p>
        The general heuristic used by most tax practitioners: the S-corp election typically makes
        sense when net profit consistently exceeds $40,000–$50,000 per year. Below that level, the
        administrative overhead tends to consume most or all of the tax savings.
      </p>

      <div className="callout">
        <p>
          Run the actual numbers with your CPA before making the election. The break-even point varies
          by your salary level, your state&apos;s tax rules, and your actual administrative costs. The
          $40–50K heuristic is a starting point for the conversation, not the answer.
        </p>
      </div>

      <h2>LLC Taxed as S-Corp vs. Actual S-Corp</h2>
      <p>There are two ways to achieve S-corp taxation:</p>
      <ol>
        <li>
          <strong>Keep your LLC and make an S-corp tax election</strong> — your entity remains an LLC
          under state law, but you elect to be taxed as an S-corp for federal (and usually state)
          income tax purposes. This is accomplished by filing Form 2553 with the IRS.
        </li>
        <li>
          <strong>Convert your LLC to a corporation and elect S-corp status</strong> — you change your
          legal entity from an LLC to a corporation, then make the S-corp election.
        </li>
      </ol>
      <p>
        Most small business owners choose Option 1 — retaining the LLC legal structure while electing
        S-corp tax treatment. This avoids the complexity of converting the entity type and preserves
        the LLC&apos;s operating flexibility and governance simplicity.
      </p>

      <h2>How to Make the S-Corp Election</h2>
      <p>
        The S-corp election is made by filing IRS Form 2553 (Election by a Small Business
        Corporation). For a new business, the election must be filed within 75 days of incorporation
        or the start of the tax year in which you want the election to take effect. For an existing
        entity, it must be filed by March 15 of the tax year in which you want the election to apply
        (for calendar-year taxpayers).
      </p>
      <p>
        If you miss the deadline, the IRS has a relief procedure for late elections under Revenue
        Procedure 2013-30, which allows retroactive elections in many cases. Your CPA can file the
        late election with a reasonable cause statement.
      </p>
      <p>To qualify for S-corp status, the entity must meet specific requirements:</p>
      <ul>
        <li>Be a domestic corporation (or LLC electing to be treated as one)</li>
        <li>Have no more than 100 shareholders</li>
        <li>Have only one class of stock</li>
        <li>
          Have only eligible shareholders — U.S. citizens, permanent residents, certain trusts and
          estates. No foreign shareholders and no other corporations or partnerships as shareholders
        </li>
      </ul>

      <h2>The Administrative Burden</h2>
      <p>
        Once you make the S-corp election, you must run payroll for yourself. This means setting up a
        payroll system, withholding federal and state income taxes plus FICA taxes on each paycheck,
        filing quarterly payroll tax returns (Form 941), and filing annual payroll filings (W-2 for
        yourself, Form 940 for federal unemployment). You cannot simply take money out of the business
        account as you could with an LLC and call it a draw.
      </p>
      <p>
        The S-corp also files its own federal income tax return — Form 1120-S — by March 15 of the
        following year. This is in addition to your personal return and typically requires a CPA
        familiar with pass-through entity taxation.
      </p>
      <p>
        For business owners who are not already running payroll and working with a CPA on their
        entity taxes, this is a meaningful increase in administrative overhead. For those already
        doing so, the incremental burden is lower.
      </p>

      <h2>State-Level Considerations</h2>
      <p>
        Most states recognize the federal S-corp election, but not all treat it identically.
        California charges S-corps a 1.5% franchise tax on net income (minimum $800) in addition to
        personal income tax on the pass-through. New York City does not recognize S-corp status and
        taxes S-corps as regular corporations for city tax purposes. Illinois imposes a personal
        property replacement tax on S-corp income.
      </p>
      <p>
        Some states have their own S-corp election forms separate from the federal Form 2553. Your CPA
        or tax attorney should confirm your state&apos;s specific rules before you make the election.
      </p>

      <div className="callout">
        <p>
          In California especially, the 1.5% franchise tax significantly reduces the net benefit of
          the S-corp election. Factor it into your break-even calculation — it changes the math
          materially compared to a state with no entity-level tax on pass-throughs.
        </p>
      </div>

      <h2>When the S-Corp Election Does Not Make Sense</h2>
      <p>
        Beyond the income threshold question, the S-corp election is less appropriate in these
        situations:
      </p>
      <ul>
        <li>
          You plan to bring on investors or multiple classes of equity — S-corps have rigid
          shareholder eligibility rules that limit capital structure flexibility
        </li>
        <li>
          You are in a state with high franchise taxes on S-corps that eliminate most of the federal
          SE tax savings
        </li>
        <li>Your income is irregular year-to-year and sometimes below the break-even threshold</li>
        <li>
          You have significant losses — the S-corp structure does not change how losses flow through,
          but it does create payroll compliance obligations even in loss years
        </li>
        <li>
          You are planning to sell the business soon — the S-corp election can complicate certain deal
          structures and asset sale treatment
        </li>
      </ul>
    </>
  ),

  "llc-vs-s-corp-vs-c-corp": (
    <>
      <p>
        This is probably the single most Googled question in all of entrepreneurship, and I get why.
        You&apos;re standing at the starting line of a new business and somebody — a blog post, your
        cousin, your accountant&apos;s receptionist — told you that you need to &quot;form an
        entity.&quot; So you start reading. And within about ten minutes you&apos;re drowning in
        acronyms and contradictions.
      </p>
      <p>Let me cut through it.</p>
      <p>
        The first thing you need to understand is that &quot;LLC,&quot; &quot;S-Corp,&quot; and
        &quot;C-Corp&quot; are not three parallel choices on the same menu. They&apos;re actually two
        different decisions happening at the same time, and most people mash them together because
        nobody explains this clearly.
      </p>

      <h2>The Two Decisions You&apos;re Actually Making</h2>
      <p>
        <strong>Decision one is about legal structure</strong> — what kind of entity are you forming
        with your state? Your choices here are really just a corporation or an LLC. (There are also
        sole proprietorships and partnerships, but those don&apos;t give you liability protection, so
        let&apos;s set them aside for now.) When you form an LLC, you file articles of organization
        with your state. When you form a corporation, you file articles of incorporation. Different
        documents, different rules, different levels of formality.
      </p>
      <p>
        <strong>Decision two is about tax treatment</strong> — how does the IRS see your company? This
        is where the &quot;S&quot; and &quot;C&quot; come in, and here&apos;s the part that confuses
        everyone: an LLC can be taxed as a sole proprietorship, a partnership, an S-Corp, or a C-Corp.
        A corporation, by default, is taxed as a C-Corp, but it can elect S-Corp treatment. So
        &quot;S-Corp&quot; isn&apos;t a type of entity you form — it&apos;s a tax election you make
        with the IRS after you&apos;ve already formed your entity.
      </p>
      <p>Once you separate those two decisions, the whole picture clears up.</p>

      <h2>The LLC: Flexibility Is the Whole Point</h2>
      <p>
        An LLC is the most popular business structure in America right now, and there&apos;s a reason
        for that. It gives you liability protection — meaning your personal assets are generally
        shielded if the business gets sued or can&apos;t pay its debts — without the operational
        overhead of running a corporation.
      </p>
      <p>
        There are no required annual meetings. No mandatory board of directors. No stock certificates.
        You run the business according to an operating agreement, which is basically a contract
        between you and your co-owners (or just you, if you&apos;re a single-member LLC) that says how
        decisions get made and how money flows.
      </p>
      <p>
        On the tax side, a single-member LLC is what the IRS calls a &quot;disregarded entity&quot; —
        it doesn&apos;t file its own tax return. The income passes through to your personal return,
        and you pay tax on it at your individual rate. A multi-member LLC is taxed as a partnership by
        default, which means the LLC files an informational return but the members pay tax
        individually.
      </p>
      <p>
        The catch? All of that income is subject to self-employment tax — currently 15.3% on the first
        chunk (for Social Security and Medicare), which is on top of your regular income tax.
        That&apos;s the main reason people start looking at the S-Corp election.
      </p>

      <h2>The S-Corp Election: Saving on Self-Employment Tax</h2>
      <p>
        Here&apos;s how it works. When you elect S-Corp tax treatment — whether your entity is an LLC
        or a corporation — the IRS requires you to pay yourself a &quot;reasonable salary&quot; for
        the work you actually do in the business. That salary gets hit with employment taxes, just
        like any job. But any profit above and beyond that salary can be distributed to you without
        self-employment tax.
      </p>
      <p>
        So if your business makes $200,000 in profit and you pay yourself a reasonable salary of
        $80,000, you pay employment taxes on the $80,000 but not on the remaining $120,000. That can
        save you $15,000 or more per year, depending on the numbers.
      </p>

      <div className="callout">
        <strong>The catch:</strong> &quot;Reasonable salary&quot; is a real requirement, not a
        suggestion. If you pay yourself $30,000 when market rate for your role is $90,000, the IRS can
        reclassify your distributions as salary and hit you with back taxes, interest, and penalties.
        Get this wrong and the savings disappear — plus some.
      </div>

      <p>
        The S-Corp election also comes with restrictions. You can&apos;t have more than 100
        shareholders, all shareholders must be U.S. citizens or permanent residents, and you can only
        have one class of stock. For most small businesses, those restrictions don&apos;t matter. But
        if you&apos;re planning to raise venture capital or issue different classes of stock to
        investors, the S-Corp doesn&apos;t work.
      </p>

      <h2>The C-Corp: When You Need Institutional Capital</h2>
      <p>
        C-Corps get a bad reputation because of &quot;double taxation&quot; — the corporation pays tax
        on its profits at the corporate rate (currently 21%), and then shareholders pay tax again on
        dividends. For a small business where the owner takes all the profit, that sounds like a raw
        deal.
      </p>
      <p>
        But in practice, most small C-Corp owners mitigate double taxation by paying themselves
        salaries and bonuses instead of dividends. Those payments are deductible to the corporation,
        so the money only gets taxed once — on the owner&apos;s personal return. Double taxation
        mainly becomes an issue when the company retains a lot of earnings or pays dividends.
      </p>
      <p>
        Where the C-Corp shines is in raising money. Venture capitalists and institutional investors
        overwhelmingly prefer C-Corps because they can issue multiple classes of stock (common for
        founders, preferred for investors, with different rights attached to each). That structure
        doesn&apos;t exist in an S-Corp, and while an LLC can theoretically create something similar
        with membership classes, most investors and their lawyers want to see a Delaware C-Corp.
        It&apos;s what they know, it&apos;s what their documents are built for, and deviating from it
        creates friction that can kill a deal.
      </p>
      <p>
        C-Corps also have a potential benefit for founders through Qualified Small Business Stock
        (QSBS) under Section 1202 of the tax code. If certain requirements are met, founders and early
        investors may be able to exclude up to $10 million in capital gains (or 10 times their
        investment) when they eventually sell their stock. That&apos;s a massive tax benefit — but it
        only applies to C-Corp stock, not S-Corps or LLCs.
      </p>

      <h2>So Which One Do You Pick?</h2>
      <p>There&apos;s no universal answer, but here&apos;s a practical framework that covers most situations:</p>
      <p>
        <strong>If you&apos;re a solo founder or small team, no outside investors, making under $50K
        or so in profit:</strong> Form an LLC, taxed as a disregarded entity or partnership. The
        simplicity is worth more than the tax savings at this income level. The cost and hassle of
        running payroll for the S-Corp election doesn&apos;t justify itself yet.
      </p>
      <p>
        <strong>If you&apos;re profitable — let&apos;s say $75K+ in annual profit — and you&apos;re
        actively working in the business:</strong> Form an LLC and elect S-Corp tax treatment. You get
        the flexibility of the LLC with the employment tax savings of the S-Corp. This is the sweet
        spot for a huge number of small businesses.
      </p>
      <p>
        <strong>If you&apos;re planning to raise venture capital, bring on institutional investors, or
        potentially go public someday:</strong> Form a C-Corp, almost certainly in Delaware. Your
        investors will insist on it, and the stock structure gives you the tools you need.
      </p>
      <p>
        <strong>If you&apos;re in a state with particularly favorable or unfavorable treatment of
        certain entities:</strong> Talk to a tax professional. Some states don&apos;t recognize
        S-Corps, some charge LLCs hefty franchise fees (California&apos;s $800 minimum comes to mind),
        and some have quirks that change the math entirely.
      </p>

      <div className="callout">
        <strong>The real advice:</strong> Don&apos;t let this decision paralyze you. The entity choice
        matters, but it&apos;s not permanent. LLCs can elect S-Corp treatment later. C-Corps can be
        formed when investors actually show up. The worst outcome isn&apos;t picking the
        &quot;wrong&quot; entity — it&apos;s not forming one at all and running your business as a
        sole proprietorship with zero liability protection while you debate acronyms.
      </div>

      <p>
        This is the kind of decision that&apos;s worth an hour with a good business attorney or CPA
        who knows your specific situation. Not a blog post — not even this one. But at least now you
        understand what you&apos;re actually choosing between.
      </p>
    </>
  ),

  "non-competes-after-ftc": (
    <>
      <p>In April 2024, the Federal Trade Commission issued a sweeping final rule that would have banned virtually all non-compete agreements nationwide. By August 2024, a federal district court in Texas had blocked it. By September 2025, the FTC had dismissed its own appeal. And in February 2026, the agency formally removed the rule from the Code of Federal Regulations &mdash; the administrative equivalent of acknowledging it&apos;s over.</p>

      <p>The blanket ban is dead. Non-compete agreements are alive. And what governs them now is what governed them before: a patchwork of state laws that ranges from total prohibition to a presumption of enforceability, with most states falling somewhere in between.</p>

      <p>For small businesses, this isn&apos;t a return to normal. The legal attention the FTC&apos;s rulemaking generated has accelerated state-level activity. Multiple states tightened their non-compete laws during the period the federal ban was under litigation, and several others have bills pending. The landscape is more fragmented, not less, than it was before the FTC acted.</p>

      <h2>The Current State-Law Spectrum</h2>

      <p>At one end, several states effectively ban most non-competes. California has prohibited them since 1872 &mdash; long before anyone was discussing federal action. Minnesota, North Dakota, and Oklahoma also broadly prohibit post-employment non-compete agreements, with narrow exceptions. In these states, a non-compete clause in an employment agreement is unenforceable regardless of how carefully it&apos;s drafted.</p>

      <p>At the other end, states like Florida and Kansas have enacted statutes creating a presumption of enforceability for non-compete agreements that meet specified criteria &mdash; reasonable time period, reasonable geographic scope, protection of a legitimate business interest. In these states, a well-drafted non-compete is not just enforceable but presumptively valid, shifting the burden to the employee to prove it&apos;s unreasonable.</p>

      <p>Most states fall between these poles. They&apos;ll enforce a non-compete if it&apos;s reasonable in scope, duration, and geographic reach, protects a legitimate business interest (trade secrets, customer relationships, specialized training), and doesn&apos;t impose an undue hardship on the employee. &ldquo;Reasonable&rdquo; is interpreted by courts on a case-by-case basis, which means enforceability depends as much on how a judge reads the facts as on what the contract says.</p>

      <h2>The FTC Isn&apos;t Done</h2>

      <p>The categorical ban failed, but the FTC retains authority under Section 5 of the FTC Act to challenge specific non-compete agreements it considers unfair methods of competition &mdash; on a case-by-case basis rather than by rule. The agency has signaled clearly that it intends to use this authority.</p>

      <p>In 2025, the FTC finalized a consent order against Rollins, Inc. (the parent company of Orkin), requiring the company to release approximately 18,000 employees from non-compete agreements the agency considered anticompetitive. The Rollins agreements applied to nearly all employees regardless of position, seniority, or access to confidential information &mdash; the kind of broad, blanket non-compete that courts and regulators have increasingly found indefensible.</p>

      <p>The Rollins case illustrates the FTC&apos;s current enforcement posture: it&apos;s not challenging non-competes that protect genuine trade secrets or customer relationships for senior employees. It&apos;s targeting agreements that restrict low-wage or mid-level workers from taking a job at a competitor, where the company can&apos;t articulate a legitimate business interest beyond &ldquo;we don&apos;t want them to leave.&rdquo;</p>

      <h2>What Actually Protects Your Business</h2>

      <p>For most small businesses, the question isn&apos;t whether non-competes are legal &mdash; in most states they are, if drafted properly. The question is whether a non-compete is the right tool for what you&apos;re actually trying to protect, and whether it would survive a challenge if tested.</p>

      <p>Non-disclosure agreements protect confidential information &mdash; pricing, customer lists, proprietary processes, business strategies &mdash; without restricting where someone can work. They&apos;re enforceable in virtually every state because they restrict what information can be used, not what jobs can be taken. For most small businesses, the information is what matters, not the employment restriction.</p>

      <p>Non-solicitation agreements prevent a departing employee from actively soliciting your customers or recruiting your other employees for a specified period. They&apos;re narrower than non-competes and more likely to be enforced because they target a specific competitive harm rather than imposing a blanket employment restriction.</p>

      <p>Garden leave clauses pay the employee during the non-compete period &mdash; the company continues salary in exchange for the restriction. Courts are substantially more willing to enforce a restriction that comes with continued compensation than one that simply prevents someone from earning a living. For a key employee who genuinely has access to competitive intelligence worth protecting, a funded restriction is both fairer and more defensible than an unfunded one.</p>

      <h2>How to Evaluate Your Current Agreements</h2>

      <p>If your business currently uses non-compete agreements, a practical review against the current landscape includes three questions.</p>

      <p>First, does the agreement protect a legitimate business interest that can be articulated specifically &mdash; not &ldquo;they know how we do things,&rdquo; but &ldquo;they have access to our customer pricing database and our product development roadmap&rdquo;? Courts increasingly require specificity about what&apos;s being protected, and vague or overbroad justifications weaken enforceability.</p>

      <p>Second, is the restriction proportionate to the interest? A two-year nationwide restriction for a regional sales representative is disproportionate in most courts&apos; analysis. A six-month restriction within the territory the employee actually served is more likely to survive scrutiny. Duration, geographic scope, and the scope of restricted activities all need to match the actual competitive risk, not the company&apos;s preference for maximum protection.</p>

      <p>Third, does the agreement comply with the law of the state where the employee works &mdash; which may not be the state where the company is incorporated or headquartered? Choice-of-law clauses don&apos;t always control, and courts in employee-friendly states may apply their own law regardless of what the contract specifies.</p>

      <h2>The Bottom Line</h2>

      <p>The federal non-compete ban&apos;s failure didn&apos;t return the landscape to a stable baseline. It left a patchwork that&apos;s more fragmented and more actively evolving than it was before the FTC&apos;s rulemaking focused national attention on the issue. For small businesses, the practical path forward is to understand your state&apos;s rules, evaluate whether your current agreements would survive scrutiny under those rules, and consider whether narrower protections &mdash; NDAs, non-solicitation, garden leave &mdash; accomplish what you actually need without the enforceability risk that broad non-competes increasingly carry.</p>
    </>
  ),

  "obbba-small-business-owners": (
    <>
      <p>
        The One Big Beautiful Bill Act (OBBBA), signed in 2025, is the most significant federal tax
        and fiscal legislation since the Tax Cuts and Jobs Act of 2017. Its provisions affect
        individual income taxes, business structures, estate planning, charitable deductions, and more
        — with several provisions that directly affect small business owners&apos; planning decisions
        for 2025, 2026, and beyond.
      </p>
      <p>
        This article focuses on the small business provisions. For your full picture, work with your
        CPA — the interactions between provisions are significant and individual-specific.
      </p>

      <div className="callout">
        <p>
          A client called me in late 2025 asking whether it made sense to accelerate the asset
          purchase she&apos;d been planning for early 2026. I didn&apos;t have a good answer until I
          read the OBBBA bonus depreciation provision. It did. The federal bonus depreciation rules
          restored under OBBBA meaningfully changed the calculation for the timing of major asset
          purchases. Two months later, she&apos;d bought the equipment she needed in 2025 rather than
          waiting, and the tax benefit was substantial. That conversation would have gone differently
          without the OBBBA context.
        </p>
      </div>

      <h2>Bonus Depreciation Restored</h2>
      <p>
        One of the most practically significant OBBBA provisions for small businesses is the
        restoration of 100% bonus depreciation for qualified property placed in service after a
        certain date.
      </p>
      <p>
        Under prior law (the Tax Cuts and Jobs Act of 2017), 100% bonus depreciation began phasing
        down: 80% in 2023, 60% in 2024, 40% in 2025, 20% in 2026, then zero. Many small business owners
        had planned capital purchases around this phase-down.
      </p>
      <p>
        The OBBBA reversed this. 100% bonus depreciation has been restored, allowing businesses to
        immediately deduct the full cost of qualifying property in the year it&apos;s placed in
        service rather than depreciating it over the asset&apos;s useful life.
      </p>
      <p>
        <strong>What this means:</strong> If you&apos;re planning to purchase equipment, machinery,
        vehicles (subject to limitations), or other qualifying property, the timing of that purchase
        has changed relative to what pre-OBBBA planning suggested. The first-year tax deduction is now
        back to full cost for qualifying property.
      </p>
      <p>
        The Section 179 small business expensing limits were also increased under OBBBA, providing
        additional immediate deduction capacity for businesses that don&apos;t qualify for full bonus
        depreciation on certain properties.
      </p>

      <h2>Qualified Small Business Stock (QSBS) Enhanced</h2>
      <p>
        The OBBBA enhanced the Section 1202 Qualified Small Business Stock exclusion, which allows
        eligible shareholders of qualifying C-corporations to exclude up to 100% of capital gains on
        the sale of QSBS from federal income tax.
      </p>
      <p>
        Under prior law, QSBS excluded up to 100% of gains for stock acquired after September 27,
        2010, held for more than five years, in a qualifying corporation with assets of $50 million or
        less at the time of issuance.
      </p>
      <p>
        The OBBBA increased the asset limit for qualifying corporations and made other adjustments
        that expand the pool of businesses and transactions eligible for the exclusion. If you&apos;re
        currently operating as an LLC or S-corp and have plans to sell within the next 3–7 years, the
        QSBS analysis may now favor converting to a C-corporation — the conversion starts your
        five-year holding clock, and the tax savings on sale can be extraordinary for a business that
        appreciates significantly.
      </p>
      <p>
        J.P. Morgan and other planning resources specifically flagged QSBS as a priority planning
        consideration for business owners in 2026.{" "}
        <strong>
          If you&apos;re thinking about exiting in the next 5–10 years and haven&apos;t had a QSBS
          conversation with your attorney and CPA, that conversation needs to happen now.
        </strong>
      </p>

      <h2>Charitable Deduction Changes</h2>
      <p>
        The OBBBA includes changes to charitable deduction limitations that affect business owners who
        use charitable giving as part of their planning. Specifically, changes to itemized deduction
        limitations will affect taxpayers who regularly donate. The changes take effect in 2026,
        making 2025 the last year under the prior charitable deduction framework for many taxpayers.
      </p>
      <p>
        For business owners who regularly make substantial charitable gifts and itemize deductions: if
        you&apos;ve been considering creating a Donor-Advised Fund (DAF) and front-loading future
        years&apos; charitable contributions, the window to do so under prior rules was 2025. If you
        haven&apos;t done this and are a significant charitable giver, the analysis for 2026 and
        beyond deserves attention.
      </p>

      <h2>Pass-Through Business Deduction (Section 199A) Extended</h2>
      <p>
        The Section 199A qualified business income (QBI) deduction — which allows owners of
        pass-through businesses (S-corps, LLCs, sole proprietorships) to deduct up to 20% of qualified
        business income — was scheduled to expire after 2025 under the TCJA. The OBBBA extended it
        permanently.
      </p>
      <p>
        For most small business owners operating as pass-throughs, this deduction has been a
        significant tax benefit since 2018. The extension removes the planning uncertainty that
        surrounded the 2025 sunset date.
      </p>
      <p>
        The 20% deduction remains subject to the same income limitations and qualified trade or
        business rules as under prior law. High-income owners in specified service trades or
        businesses (SSTBs — law, health, financial services, etc.) face phase-out ranges; these apply
        under the extended provisions.
      </p>

      <h2>Estate and Gift Tax Provisions</h2>
      <p>
        The OBBBA made permanent the elevated estate and gift tax exemption from the TCJA
        (approximately $14 million per individual, $28 million per married couple in 2025 dollars,
        indexed for inflation). Under prior law, this was scheduled to sunset after 2025 to roughly $7
        million per individual.
      </p>
      <p>
        For business owners with estates that might trigger estate tax at lower exemption levels, the
        OBBBA change reduces urgency on certain wealth transfer strategies that were being accelerated
        to beat the 2025 sunset. That said, existing plans that are already in motion should generally
        continue — strategies put in place under the elevated exemption are not being clawed back by
        the IRS for gifts made before the extended provisions.
      </p>

      <h2>What to Do With This Information</h2>
      <p>
        The OBBBA is comprehensive legislation with many interacting provisions. Individual impacts
        depend on your entity structure, income level, asset plans, and succession timeline. A few
        near-term action items worth discussing with your CPA and attorney:
      </p>
      <ul>
        <li>
          If you&apos;re planning major asset purchases, revisit the bonus depreciation analysis under
          the restored 100% rate
        </li>
        <li>
          If you&apos;re considering a business sale in the next 5–10 years, have a QSBS eligibility
          conversation now
        </li>
        <li>
          Review your business structure in light of the QSBS changes, especially if currently
          operating as an S-corp
        </li>
        <li>
          If you&apos;re a charitable giver with plans to itemize, understand how the 2026 deduction
          changes affect your giving strategy
        </li>
      </ul>
      <p>
        The OBBBA isn&apos;t just background noise — for many small business owners, it changes
        specific planning decisions in material ways.
      </p>
    </>
  ),

  "offshore-accounts-legal-illegal": (
    <>
      <p>
        One of the most persistent misconceptions in U.S. tax law is the idea that offshore accounts
        are inherently illegal. They are not. A U.S. citizen can lawfully open a bank account in
        Switzerland, hold investments through a Singapore brokerage, or maintain a retirement account
        in the U.K. None of those acts violates U.S. law. What violates U.S. law — and where the
        genuinely catastrophic penalties live — is failing to report those accounts to the U.S.
        government on the specific forms the law requires.
      </p>
      <p>
        This article walks through the U.S. reporting regime for offshore financial accounts, the
        penalty structure that has surprised more than one expat and inheritance recipient, and the
        basic compliance framework. It draws from{" "}
        <em>The Entrepreneur&apos;s Guide to Offshore Business, Tax Havens &amp; International Trusts</em>{" "}
        (Volume 12 of the Million Dollar Highway series), which covers international tax planning in
        greater depth.
      </p>

      <h2>The Citizenship-Based Tax System That Sets the Stage</h2>
      <p>
        Most countries tax based on residency. A French citizen who moves to Singapore typically stops
        owing French income tax once they establish Singapore residency. The United States is one of
        two countries in the world (along with Eritrea) that taxes based on citizenship. A U.S.
        citizen owes U.S. tax on worldwide income regardless of where they live, where they earn the
        income, or whether the income is also taxed by another country.
      </p>
      <p>
        That citizenship-based regime drives the offshore reporting system. A U.S. citizen with a bank
        account in Spain is in the same tax position as a U.S. citizen with a bank account in Texas —
        the income is reportable, the account itself is reportable, and the U.S. government wants
        visibility into both. The location of the asset does not exempt it from U.S. taxation. It only
        makes the asset harder for the IRS to see, which is why the reporting requirements are so
        specific and the penalties for missing them so severe.
      </p>

      <h2>FBAR: The Filing Most People Have Never Heard Of</h2>
      <p>
        The FBAR — Foreign Bank Account Report, technically{" "}
        <a
          href="https://www.fincen.gov/report-foreign-bank-and-financial-accounts"
          target="_blank"
          rel="noopener noreferrer"
        >
          FinCEN Form 114
        </a>{" "}
        — is the single most consequential offshore reporting requirement, and the one most commonly
        missed. It is not filed with the IRS. It is filed separately with the Financial Crimes
        Enforcement Network (FinCEN), a bureau of the Treasury Department. It has its own deadline,
        its own filing system, and its own penalty regime.
      </p>
      <p>
        <strong>Who must file:</strong> any U.S. person — including citizens, resident aliens,
        partnerships, corporations, LLCs, and trusts — with a financial interest in or signature
        authority over one or more foreign financial accounts whose aggregate maximum value exceeds
        $10,000 at any point during the calendar year.
      </p>
      <p>
        The $10,000 threshold is aggregate, not per-account. Three accounts with maximum balances of
        $4,000, $4,000, and $3,000 still trigger the FBAR requirement because their aggregate exceeded
        $10,000 at some point during the year. The threshold has nothing to do with taxable income. It
        is a reporting threshold for the financial accounts themselves. An account that earns zero
        interest, holds foreign currency without conversion, and has nothing tax-relevant happening in
        it must still be reported if the aggregate threshold is hit.
      </p>
      <p>
        <strong>The penalty structure</strong> is where most people&apos;s understanding of offshore
        accounts changes permanently. For non-willful violations — a person who genuinely didn&apos;t
        know about the requirement — the civil penalty can be up to $10,000 per violation. Courts have
        interpreted &quot;per violation&quot; to mean per account per year. A person with three
        foreign accounts who failed to file for three years is potentially exposed to $90,000 in
        penalties even if no tax was owed and no income was earned on the accounts.
      </p>
      <p>
        For willful violations — and the IRS only needs to prove the person was aware of the
        requirement, not that they intended to evade taxes — the penalty can be up to the greater of
        $100,000 or 50% of the account balance at the time of the violation, per violation. Per
        account, per year. Courts have upheld penalties that exceed the value of the accounts
        themselves. Criminal penalties for willful violations include imprisonment of up to ten years
        and fines up to $500,000.
      </p>
      <p>
        A representative case of how badly this can go: a U.S. person opened a foreign bank account
        years ago, deposited $15,000, and forgot about it. No income, no transactions, nothing
        reportable on a tax return. The account sat. If the IRS later determines those failures were
        willful, the penalty exposure is $7,500 per year (50% of the $15,000 balance) for every year of
        non-filing. Across ten years of dormancy, that&apos;s $75,000 in potential penalties on a
        $15,000 account that earned nothing.
      </p>

      <h2>Form 8938: The IRS Counterpart to FBAR</h2>
      <p>
        Separate from FBAR — and yes, both must be filed if the thresholds are met — Form 8938 is the
        FATCA reporting form filed with the federal income tax return. The thresholds are higher and
        the scope is broader.
      </p>
      <p>
        For U.S. residents: $50,000 at year-end or $75,000 at any point during the year (single or
        married filing separately); $100,000 at year-end or $150,000 at any point (married filing
        jointly). Thresholds for U.S. persons living abroad are higher. The scope includes interests
        in foreign entities not held through a financial account, foreign trusts, foreign stock or
        securities held outside a financial account, foreign partnership interests, and foreign
        retirement accounts.
      </p>
      <p>
        Penalty for failing to file Form 8938: $10,000, with an additional $10,000 for each 30-day
        period of continuing failure after IRS notification, up to a maximum of $50,000. If the
        failure results in an understatement of tax, an additional 40% accuracy penalty applies on the
        unpaid tax attributable to the undisclosed assets.
      </p>
      <p>
        The two forms — FBAR and Form 8938 — overlap substantially but not completely. Many U.S.
        persons with foreign accounts must file both. Filing one does not satisfy the requirement for
        the other. The deadlines are different. The agencies are different.
      </p>

      <h2>The Foreign Entity Reporting Ecosystem</h2>
      <p>
        Beyond bank accounts, the U.S. compliance regime extends to ownership of foreign business
        entities. The forms are obscure, the penalties are severe, and the population of people who
        unknowingly trigger them is larger than most expect:
      </p>
      <p>
        <strong>Form 5471.</strong> Required from any U.S. person who owns 10% or more of the voting
        power or value of a foreign corporation. The form requires disclosure of the corporation&apos;s
        balance sheet, income statement, accumulated earnings, transactions with related parties, and
        shareholder information. Penalty for failure: $10,000 per form per year, with additional
        $10,000 per 90-day period of continuing non-compliance after IRS notification, up to $50,000
        per year. Critically, the statute of limitations for tax purposes does not begin to run until
        the form is filed — meaning unfiled Forms 5471 keep prior tax years open indefinitely.
      </p>
      <p>
        <strong>Form 3520.</strong> Required from U.S. grantors of foreign trusts and U.S.
        beneficiaries receiving distributions from foreign trusts. Penalty: up to 35% of the amount
        transferred or received.
      </p>
      <p>
        <strong>Form 3520-A.</strong> Technically the foreign trust&apos;s filing obligation, but the
        U.S. grantor is responsible for ensuring it is filed. Penalty: 5% of the gross value of the
        trust&apos;s assets annually.
      </p>
      <p>
        <strong>Form 8865.</strong> Required from U.S. persons with 10%+ interest in foreign
        partnerships.
      </p>
      <p>
        <strong>Form 926.</strong> Required for transfers of property to foreign corporations.
      </p>
      <p>
        The compliance burden for a U.S. person with even a moderately complex offshore structure can
        involve five or more separate information returns annually, each with its own deadline and
        penalty structure.
      </p>

      <h2>The Anti-Deferral Regimes That Tax You Even Without Distribution</h2>
      <p>
        Before considering offshore structures for tax planning, U.S. persons need to understand that
        two anti-deferral regimes — Subpart F and GILTI — tax foreign corporate income to U.S.
        shareholders in the year earned, regardless of whether any distributions are made.
      </p>
      <p>
        <strong>Subpart F income.</strong> When a U.S. person owns 10% or more of a Controlled Foreign
        Corporation (a foreign corporation in which U.S. shareholders who each own at least 10%
        collectively own more than 50%), certain categories of the CFC&apos;s income are taxed to the
        U.S. shareholders currently. Subpart F categories include passive income (dividends, interest,
        rents, royalties) and certain services income.
      </p>
      <p>
        <strong>GILTI (Global Intangible Low-Taxed Income).</strong> Added by the 2017 Tax Cuts and
        Jobs Act, GILTI subjects U.S. shareholders of CFCs to current U.S. tax on the CFC&apos;s net
        income above a deemed 10% return on tangible assets deployed in the foreign business. For
        individual U.S. shareholders who own foreign corporations directly, there is no GILTI
        deduction, and GILTI is taxed at ordinary income rates — potentially as high as 37%.
      </p>
      <p>
        The cumulative effect: a U.S. citizen who owns a foreign business that earns income in a
        country with low or no corporate tax cannot simply leave the income offshore and defer U.S.
        tax. The U.S. tax accrues currently. The foreign tax-favored status of the offshore
        jurisdiction is largely defeated by the U.S. anti-deferral regime.
      </p>
      <p>
        This is why most &quot;offshore tax planning&quot; pitched to ordinary U.S. citizens does not
        work as advertised. The aggressive structures that historically reduced U.S. tax liability for
        high-net-worth individuals have been progressively closed off by FATCA, Subpart F, GILTI, and
        the foreign entity reporting regime. Legitimate offshore planning for U.S. persons exists, but
        it operates within a much narrower band than most marketing material suggests.
      </p>

      <h2>The PFIC Trap That Catches Expats and International Investors</h2>
      <p>
        One of the most dangerous offshore tax issues catches U.S. persons who have done nothing
        intentionally aggressive — they simply invested in foreign mutual funds or ETFs while living
        abroad. Passive Foreign Investment Companies (PFICs) — foreign corporations that earn
        primarily passive income or hold primarily passive assets — are subject to a punitive tax
        regime. PFIC income is taxed at the highest marginal rate plus an interest charge for the
        deemed deferral.
      </p>
      <p>
        The trap is that most non-U.S. mutual funds and ETFs are PFICs for U.S. tax purposes. A U.S.
        expat in Germany who invests $50,000 in a popular German equity index fund — exactly what the
        local financial advisor would recommend — has invested in a PFIC. Three years later, when the
        fund is sold at an $18,000 gain, the gain is allocated across the holding period and taxed at
        the highest ordinary income rate applicable to each year, plus interest. The effective tax
        rate can easily exceed 50% on a position that the investor reasonably thought would be taxed
        at the long-term capital gains rate.
      </p>
      <p>
        U.S. persons living abroad or investing internationally must verify the PFIC status of foreign
        investment vehicles before investing. The cleanest approach is to hold international exposure
        through U.S.-domiciled funds that invest in foreign assets — these are not PFICs because the
        fund itself is U.S.-registered. Alternatively, a Qualified Electing Fund (QEF) election on a
        true PFIC investment can include income currently at ordinary rates and avoid the worst of the
        regime, but requires annual financial information from the fund that most foreign funds do not
        provide.
      </p>

      <h2>Coming Into Compliance Without a Disaster</h2>
      <p>
        For U.S. persons who discover offshore reporting failures, the IRS has structured several
        voluntary disclosure paths designed to reduce penalties for taxpayers who come forward before
        being audited:
      </p>
      <p>
        <strong>Streamlined Filing Compliance Procedures.</strong> Available for taxpayers whose
        failures were non-willful. Streamlined Domestic Offshore Procedures (for U.S. residents) and
        Streamlined Foreign Offshore Procedures (for taxpayers living abroad) reduce the penalty
        exposure significantly compared to standard non-disclosure outcomes. The domestic version
        requires a 5% penalty on the highest aggregate value of foreign assets across the disclosure
        period; the foreign version waives most penalties.
      </p>
      <p>
        <strong>Delinquent FBAR Submission Procedures.</strong> For taxpayers who didn&apos;t file
        FBAR but didn&apos;t owe additional U.S. tax (the foreign accounts didn&apos;t generate
        reportable income or the income was already reported). This procedure can result in no
        penalties if the non-filing is determined to be reasonable cause and not willful.
      </p>
      <p>
        <strong>Voluntary Disclosure Practice.</strong> For taxpayers whose conduct may have been
        willful, the IRS Voluntary Disclosure Practice provides a path to reduced criminal exposure and
        structured civil penalties, but requires a much more thorough disclosure and typically results
        in significant tax and penalty payments.
      </p>
      <p>
        The wrong move is what&apos;s called a &quot;quiet disclosure&quot; — filing prior-year
        returns and FBARs without using a structured voluntary disclosure program. The IRS has
        identified quiet disclosures as a compliance focus, and the penalty exposure for a taxpayer
        caught quietly disclosing can exceed what they would have faced under a proper voluntary
        program.
      </p>
      <p>
        Anyone who has discovered offshore reporting issues should consult with an international tax
        attorney before taking any action. The path between bad facts and acceptable outcomes is
        narrow and depends on choosing the right disclosure vehicle for the specific situation.
      </p>

      <h2>The Practical Frame</h2>
      <p>
        The compliance regime for U.S. persons with offshore connections is genuinely burdensome, but
        the burden is administrable. The penalty structure is so disproportionate to the underlying
        tax exposure that even small technical violations can produce catastrophic outcomes. The two
        takeaways that hold across most situations:
      </p>
      <p>
        First, the offshore account itself is rarely the problem. The reporting failure is the
        problem. A U.S. person with foreign accounts who files FBAR, files Form 8938, reports income
        on Schedule B, and addresses any foreign entity reporting requirements is fully compliant
        regardless of where the accounts are located.
      </p>
      <p>
        Second, anyone with a foreign account, foreign business interest, foreign trust, or inherited
        foreign asset should verify their compliance history. The cost of having an international tax
        attorney review the file is small compared to the penalty exposure for unfiled returns. If
        gaps exist, voluntary disclosure programs exist for a reason — they&apos;re designed for
        taxpayers who didn&apos;t know what was required and want to come into compliance now.
      </p>

      <div className="faq-item">
        <h3>Do I have to report a foreign account if I&apos;m not a U.S. citizen but live in the United States?</h3>
        <p>
          U.S. residents for tax purposes — including green card holders, certain visa holders meeting
          the substantial presence test, and others meeting U.S. residency criteria — are subject to
          the same offshore reporting requirements as U.S. citizens. The FBAR requirement applies to
          &quot;U.S. persons,&quot; which includes resident aliens. The trigger is U.S. tax residency,
          not citizenship.
        </p>
      </div>
      <div className="faq-item">
        <h3>Is there a minimum interest threshold for FBAR filing or just the account balance?</h3>
        <p>
          The FBAR threshold is account balance only — specifically, the aggregate maximum value of
          all foreign financial accounts at any point during the year. The accounts can earn no
          interest, hold foreign currency without conversion, sit dormant — none of that matters. If
          aggregate balances exceed $10,000 at any point, FBAR filing is required.
        </p>
      </div>
      <div className="faq-item">
        <h3>What if I inherited a foreign account I didn&apos;t know about?</h3>
        <p>
          U.S. persons receiving distributions from foreign estates or trusts trigger Form 3520
          reporting requirements. The reporting requirements often surface when the recipient learns
          of the inheritance, regardless of when the underlying assets were originally accumulated.
          Inheritance situations are common scenarios for streamlined or voluntary disclosure programs
          because the recipient genuinely had no prior knowledge or control. Engage an international
          tax attorney early — the right initial filings preserve options that may not exist later.
        </p>
      </div>
      <div className="faq-item">
        <h3>Are Canadian RRSPs and similar retirement accounts reportable?</h3>
        <p>
          Yes for FBAR purposes if account balances are above the threshold. Canadian RRSPs are
          foreign financial accounts. Special U.S.-Canada tax treaty provisions historically affected
          the U.S. tax treatment of RRSP earnings, and the rules have shifted over time. The current
          rules generally allow the U.S. owner to defer U.S. tax on RRSP earnings until distribution
          under tax treaty provisions, but the FBAR and Form 8938 reporting requirements still apply on
          top of any tax treatment. Similar considerations apply to U.K. ISAs, Australian
          Superannuation accounts, and other foreign retirement vehicles.
        </p>
      </div>
      <div className="faq-item">
        <h3>Can I move to another country to escape U.S. tax obligations?</h3>
        <p>
          Not while remaining a U.S. citizen. U.S. citizenship-based taxation means U.S. citizens owe
          U.S. tax on worldwide income regardless of where they live. The Foreign Earned Income
          Exclusion (FEIE) reduces U.S. tax on certain earned income for U.S. citizens working abroad,
          and foreign tax credits offset U.S. tax for income already taxed by another country, but the
          underlying U.S. filing obligation persists. Renouncing U.S. citizenship is the only mechanism
          for escaping U.S. tax liability, and it triggers an exit tax for high-net-worth individuals
          plus permanent loss of U.S. citizenship rights — a step that requires careful, sustained
          planning rather than tactical decision-making.
        </p>
      </div>
    </>
  ),

  "operating-agreement-vs-shareholder-agreement": (
    <>
      <p>
        When you form a business with other people — co-founders, partners, investors — you are
        entering into a relationship that will eventually be tested. The business will have a good
        year and everyone will want a bigger cut. A co-founder will want to leave. An investor will
        want their money back. A key person will die or become incapacitated. How those moments
        resolve depends almost entirely on what you wrote down before they happened.
      </p>
      <p>
        Operating agreements and shareholder agreements are the documents that govern those moments.
        They are not the same document, and they are not interchangeable. Which one you need depends
        on your entity type — and sometimes you need both.
      </p>

      <h2>The Operating Agreement: For LLCs</h2>
      <p>
        An operating agreement is the governing document for a Limited Liability Company. It is the
        contract among the members (owners) of the LLC that defines how the company is managed, how
        profits and losses are allocated, and what happens when circumstances change.
      </p>

      <h3>What an Operating Agreement Covers</h3>
      <ul>
        <li><strong>Ownership structure</strong> — member names, percentage interests, and capital contributions</li>
        <li>
          <strong>Management</strong> — whether the LLC is member-managed (all owners participate in
          decisions) or manager-managed (a designated manager runs operations)
        </li>
        <li>
          <strong>Voting rights</strong> — which decisions require unanimous consent vs. majority vote
          vs. manager discretion
        </li>
        <li>
          <strong>Profit and loss allocation</strong> — how profits are distributed (which does not
          have to match ownership percentage) and how losses are allocated for tax purposes
        </li>
        <li><strong>Distributions</strong> — when and how cash is distributed to members</li>
        <li>
          <strong>Transfer restrictions</strong> — whether members can sell or transfer their
          membership interests, and under what conditions
        </li>
        <li><strong>Admission of new members</strong> — what vote or consent is required to add an owner</li>
        <li>
          <strong>Withdrawal and dissolution</strong> — what happens when a member wants to exit, and
          how the company winds down
        </li>
      </ul>

      <div className="callout">
        <p>
          Most states allow single-member LLCs to operate without a written operating agreement. That
          does not mean you should skip it. A written operating agreement strengthens your liability
          protection by demonstrating that the LLC is a separate entity, and it controls the outcome
          in situations where state default rules would otherwise apply.
        </p>
      </div>

      <h3>What Happens Without One</h3>
      <p>
        If you have no operating agreement, your LLC is governed by your state&apos;s default LLC
        statute. Those defaults were written to handle the average situation — not your specific
        ownership structure, not your specific compensation arrangements, not your specific buy-out
        terms. Default rules typically allocate profits equally among members regardless of capital
        contribution, require unanimous consent for most decisions, and provide no mechanism for
        forcing out a member who is no longer contributing.
      </p>
      <p>
        In a multi-member LLC with no operating agreement, a dispute among members almost always
        results in litigation — because there is no agreed-upon framework for resolving it.
      </p>

      <h2>The Shareholder Agreement: For Corporations</h2>
      <p>
        A shareholder agreement governs the relationship among shareholders in a corporation. It is
        separate from (and supplements) the corporate bylaws, which govern the corporation&apos;s
        internal procedures. The shareholder agreement focuses on equity ownership — who can own it,
        how it can be transferred, what happens in certain triggering events, and how control is
        maintained.
      </p>

      <h3>What a Shareholder Agreement Covers</h3>
      <ul>
        <li>
          <strong>Transfer restrictions</strong> — right of first refusal (existing shareholders get
          the first opportunity to buy shares before an owner can sell to a third party), lock-up
          periods, and permitted transfer exceptions
        </li>
        <li>
          <strong>Drag-along rights</strong> — majority shareholders can require minority shareholders
          to sell their shares in an acquisition on the same terms, preventing a minority holder from
          blocking a sale
        </li>
        <li>
          <strong>Tag-along rights</strong> — minority shareholders have the right to participate in a
          sale on the same terms as the majority, protecting them from being left behind
        </li>
        <li>
          <strong>Buy-sell provisions</strong> — what happens when a shareholder dies, becomes
          disabled, wants to exit, or is terminated as an employee. Typically structured as a
          formula-based buyout triggered by those events
        </li>
        <li>
          <strong>Board composition</strong> — how many board seats, who controls them, and whether
          any shareholder class has guaranteed representation
        </li>
        <li>
          <strong>Anti-dilution protections</strong> — provisions that protect existing shareholders
          from having their ownership percentage reduced by future equity issuances
        </li>
        <li>
          <strong>Information rights</strong> — which shareholders receive financial statements, board
          minutes, or audit reports
        </li>
        <li>
          <strong>Vesting schedules</strong> — whether founder shares are subject to a vesting schedule
          that can be accelerated on certain events
        </li>
      </ul>

      <h3>What Happens Without One</h3>
      <p>
        Without a shareholder agreement, a corporation operates under its bylaws and state corporate
        law. State law typically allows shareholders to freely transfer shares to third parties unless
        the charter or bylaws restrict it. That means a co-founder could sell their shares to someone
        you do not want as a co-owner — and you would have no contractual mechanism to stop it.
      </p>
      <p>
        It also means there is no agreed formula for buying out a departing shareholder. The company
        would need to negotiate a price in real time — often during a period of conflict — or go to
        court.
      </p>

      <h2>Key Differences Between the Two</h2>
      <p>
        The core distinction is entity type: operating agreements are for LLCs; shareholder agreements
        are for corporations. But there are structural differences beyond that.
      </p>
      <p>
        Operating agreements tend to cover more operational ground — management structure, profit
        allocation, and day-to-day governance — because LLCs have fewer mandatory governance
        requirements than corporations. Corporations are required to hold annual meetings, maintain a
        board of directors, and follow formal procedures; the shareholder agreement layers
        equity-specific protections on top of that required structure.
      </p>
      <p>
        In practice, a well-drafted operating agreement for a multi-member LLC often includes the same
        buy-sell mechanics, transfer restrictions, and equity protection provisions that a shareholder
        agreement provides for a corporation.
      </p>

      <h2>When an LLC Also Needs a Shareholder-Style Agreement</h2>
      <p>
        If your LLC has outside investors who hold membership interests, you may need buy-sell
        provisions, anti-dilution protections, and information rights that go beyond what a standard
        operating agreement addresses. These provisions can be incorporated directly into the
        operating agreement or drafted as a separate investor rights agreement alongside it.
      </p>
      <p>
        If your LLC is structured with different classes of membership interests — some with preferred
        economic rights, some with voting control — the operating agreement needs to address those
        distinctions explicitly. Failing to do so creates ambiguity that is expensive to resolve later.
      </p>

      <div className="callout">
        <p>
          The right question is not &quot;which document do I need&quot; but &quot;what situations do
          I need to have pre-resolved in writing.&quot; The document name matters less than whether the
          provisions governing your specific structure and your specific risk scenarios are clearly
          written and signed by everyone with skin in the game.
        </p>
      </div>

      <h2>Cost to Have an Attorney Draft One</h2>
      <p>
        A basic operating agreement for a two-member LLC with straightforward economics costs
        $1,500–$3,000 in attorney fees at most small business law firms. A more complex agreement with
        multiple members, different economic classes, or venture investment terms can run
        $5,000–$10,000 or more.
      </p>
      <p>
        A shareholder agreement for a small corporation with standard provisions — right of first
        refusal, drag-along/tag-along, basic buy-sell — typically runs $2,000–$5,000. More complex
        structures with multiple investor classes and governance controls run higher.
      </p>
      <p>
        Online templates are widely available and dramatically cheaper. They are also generalized —
        written for the average situation, not yours. Template agreements routinely miss provisions
        that matter in specific fact patterns, and the cost of resolving an ambiguity in litigation is
        orders of magnitude higher than the cost of having the document drafted correctly the first
        time.
      </p>
      <p>
        If you are forming a business with another person and equity is involved, the cost of a
        properly drafted agreement is not optional overhead. It is the structural foundation
        everything else is built on.
      </p>
    </>
  ),
};
