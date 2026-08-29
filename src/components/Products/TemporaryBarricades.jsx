import { CheckCircle2Icon } from 'lucide-react';

const BENEFITS = [
  [
    'Flexible isolation',
    'A portable boundary for temporary isolation, partitioning and enclosure where the layout may need to change.',
  ],
  [
    'Rapid deployment',
    'Mobile panels can be placed and linked quickly for construction activity, events, gatherings and crowd control.',
  ],
  [
    'Clear visibility',
    'The transparent welded-mesh panel keeps the protected area visible while defining a controlled edge.',
  ],
];

function TemporaryBarricades({ product }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink pt-32 sm:pt-40 lg:pt-48">
        <img
          src={product.image}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[.24em] text-molten">
            / Products / {product.number}
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(3.2rem,8vw,6.7rem)] font-semibold uppercase leading-[.88] tracking-tightest">
            Temporary wire mesh barricades.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
            Mobile welded-wire panels for temporary isolation, crowd control and practical site
            protection.
          </p>
        </div>
      </section>
      <section className="bg-bone py-20 text-ink lg:py-28">
        <div className="mx-auto grid max-w-shell gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Overview
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              A mobile edge for changing spaces.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-ink/70">
              <p>
                Temporary wire mesh barricades—also called mobile fences, temporary barricades or
                mobile safety fences—are suitable for temporary isolation, partitioning and
                enclosure. Their flexible, portable format supports sites that need an adaptable
                boundary.
              </p>
              <p>
                Built with galvanized steel tubing as a frame and welded wire mesh infill, the
                panels are used for construction sites, fairs, gatherings, festivals, sports events
                and other temporary situations that need to maintain order.
              </p>
              <p>
                The transparent panel is designed to provide a clear line of sight while marking a
                controlled work area. Its lightweight, low-cost construction makes it a practical
                portable-fence option tailored to individual site needs.
              </p>
            </div>
          </div>
          <aside className="overflow-hidden bg-ink lg:col-span-4 lg:col-start-9">
            <img
              src={product.image}
              alt={product.alt}
              className="aspect-[4/5] h-full w-full object-cover"
              loading="lazy"
            />
          </aside>
        </div>
      </section>
      <section className="bg-graphite py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">/ Site use</p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
            Built for temporary control.
          </h2>
          <div className="mt-14 grid gap-px border-t border-metal/15 md:grid-cols-3">
            {BENEFITS.map(([title, copy], index) => (
              <article key={title} className="border-b border-r border-metal/15 p-7">
                <span className="font-mono text-[10px] text-molten">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-12 font-display text-2xl uppercase leading-none">{title}</h3>
                <p className="mt-4 leading-relaxed text-steel">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-bone py-20 text-ink lg:py-28">
        <div className="mx-auto grid max-w-shell gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Suitable for
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              Order without permanent construction.
            </h2>
          </div>
          <ul className="border-t border-ink/15 lg:col-span-6 lg:col-start-7">
            {[
              'Construction sites',
              'Fairs and festivals',
              'Sports events',
              'Crowd management',
              'Temporary work zones',
              'Access control',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-ink/15 py-4">
                <CheckCircle2Icon className="h-4 w-4 text-molten" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export { TemporaryBarricades };
