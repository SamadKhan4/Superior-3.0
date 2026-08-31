const STRENGTHS = [
  {
    title: 'Strategic Location',
    copy: 'Headquartered in Nagpur at the geographical centre of India, supporting efficient logistics and seamless PAN-India distribution.',
  },
  {
    title: 'Production Capacity',
    copy: 'Infrastructure developed from a single-machine setup into a high-capacity, fully automated plant with specialised heavy-duty machinery.',
  },
  {
    title: 'Complete Portfolio',
    copy: 'Ready-to-use industrial weldmesh, TMT and rebar mesh, gabions, 3D V-bend fencing and anti-climb 358 security mesh.',
  },
  {
    title: 'Stringent Quality Control',
    copy: 'Dedicated inspection protocols keep products aligned with precise technical benchmarks for structural, commercial and architectural demands.',
  },
  {
    title: 'Industry Leadership',
    copy: 'Decades of promoter-level sector experience support adaptability, informed decisions and reliable large-scale project execution.',
  },
];

function CompanyStrengths() {
  return (
    <section className="bg-graphite py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Company strengths
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              Built to deliver at scale.
            </h2>
          </div>
          <ol className="border-t border-metal/20 lg:col-span-7 lg:col-start-6">
            {STRENGTHS.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 border-b border-metal/20 py-6 sm:grid-cols-[3rem_1fr]"
              >
                <span className="font-mono text-[10px] text-molten">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl uppercase leading-none text-chalk">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export { CompanyStrengths };
