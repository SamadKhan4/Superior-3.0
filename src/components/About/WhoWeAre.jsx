const STATS = [
  ['2011', 'Established'],
  ['600+', 'Satisfied clients'],
  ['20+', 'Professionals'],
  ['Custom', 'Sizes & specifications'],
];

function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-bone py-20 text-ink lg:py-32">
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Who we are
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              Practical engineering, built to last.
            </h2>
          </div>
          <div className="space-y-6 text-[16px] leading-relaxed text-ink/70 lg:col-span-6 lg:col-start-7">
            <p>
              Established in 2011, Superior Weld Mesh Private Limited began its operating journey in
              early 2013. From Nagpur, Maharashtra, we manufacture welded mesh, reinforcement and
              perimeter-fencing systems for infrastructure, construction, security and industrial
              applications.
            </p>
            <p>
              Competence, continuous development and integrity guide how we work. Every requirement
              starts with the right variables: aperture, wire diameter, panel dimensions, coating
              and intended use, helping us deliver a project-specific solution and build dependable,
              long-term client relationships.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-px border-y border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div key={label} className="border-ink/15 py-7 sm:border-r sm:px-7 sm:last:border-r-0">
              <p className="font-display text-4xl leading-none">{value}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[.18em] text-ink/55">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WhoWeAre };
