// Shared section wrapper for the policy pages, following the same pattern
// as the Select portfolio's local `Section` helper (e.g.
// goldsilverselect/src/app/privacy/page.tsx), recolored for Silverton's
// dark palette instead of GSS's light one.
export default function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2
        className="font-serif text-xl font-semibold mb-3"
        style={{ color: "var(--gold)" }}
      >
        {title}
      </h2>
      <div
        className="font-sans text-[14.5px] leading-relaxed"
        style={{ color: "var(--body)" }}
      >
        {children}
      </div>
    </section>
  );
}
