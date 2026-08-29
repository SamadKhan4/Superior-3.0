const ITEMS = [
  'MSME registered enterprise',
  'ISO 9001:2015 certified company',
  'IndiaMART TrustSEAL',
  'GeM government e-marketplace',
];

function Certifications() {
  return (
    <section className="bg-graphite py-20 lg:py-28">
      <div className="mx-auto grid max-w-shell gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
            / Quality & compliance
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
            Credentials that support confidence.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-steel">
            Certification and marketplace credentials supplied for Superior Weldmesh.
          </p>
        </div>
        <div className="grid gap-px border-t border-metal/15 sm:grid-cols-2 lg:col-span-8">
          {ITEMS.map((title, index) => (
            <article key={title} className="border-b border-metal/15 py-8 sm:border-r sm:px-7">
              <p className="font-mono text-[10px] text-molten">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-12 font-display text-2xl uppercase leading-none">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Certifications };
