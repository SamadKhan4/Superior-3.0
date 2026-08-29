import { useState } from 'react';
import { CheckCircle2Icon, ChevronDownIcon } from 'lucide-react';
import rebarDiagram from '../../assests/Products/rebar.png';

const SPECS = [
  ['Mesh size', '75 mm – 300 mm'],
  ['Wire diameter', '6.00 mm – 12.00 mm'],
  ['Width', '0.5 – 6 metre'],
  ['Height', '0.5 – 6 metre'],
  ['Length', '0.5 – 6 metre'],
];
const APPLICATIONS = [
  [
    'Highways',
    'TMT weld mesh is commonly used in highway and flyover work, supporting public structures that need durability and improved resistance to seismic and shock loading.',
  ],
  [
    'Retaining structures',
    'Suitable for reinforcement in retaining structures, including walls and related civil works where controlled steel placement matters.',
  ],
  [
    'Buildings',
    'A practical reinforcement format for slabs, masonry walls and concrete structural elements.',
  ],
];
const FEATURES = [
  [
    'Cost reduction / ready-to-use sheet',
    'Pre-constructed mesh sheets reduce cutting and placement time, supporting more efficient site work.',
  ],
  [
    'Creative on design',
    'Square and rectangular meshes can be selected with spacing that suits a reinforcement layout.',
  ],
  [
    'Deterrent',
    'A rigid welded reinforcement pattern helps create a stable supporting framework within concrete work.',
  ],
  [
    'Increase in speed of construction',
    'Ready-to-place mesh can shorten repetitive reinforcement work and reduce on-site handling.',
  ],
];

function Accordion({ title, items }) {
  const [open, setOpen] = useState(0);
  return (
    <section>
      <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.2rem)] font-semibold uppercase leading-none tracking-tightest">
        {title}
      </h2>
      <div className="mt-7 border-t border-ink/15">
        {items.map(([label, copy], index) => (
          <div key={label} className="border-b border-ink/15">
            <button
              type="button"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-display text-xl uppercase">{label}</span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 transition-transform ${open === index ? 'rotate-180 text-molten' : ''}`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${open === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-5 leading-relaxed text-ink/70">{copy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RebarTmtWeldMesh({ product }) {
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
          <h1 className="mt-5 font-display text-[clamp(3.2rem,8vw,6.7rem)] font-semibold uppercase leading-[.88] tracking-tightest">
            Rebar / TMT weld mesh.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
            Ready-to-use reinforcement mesh developed for faster, more consistent concrete
            construction.
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
              Reinforcement, pre-engineered.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-ink/70">
              <p>
                The ribbed Rebar / TMT mesh design creates a strong bond with concrete or cement,
                providing additional support and helping improve the life and durability of the
                structure. Its tensile strength and flexibility make it useful for earthquake-prone
                areas.
              </p>
              <p>
                Weld mesh holds concrete together while reducing cutting and placement time. Mesh
                can be specified in square or rectangular layouts: common square openings include
                200×200 mm and 100×100 mm, with panels developed around the project requirement.
              </p>
              <p>
                Heavy and light bar types can be selected according to bar size, helping project
                teams balance structural demand, handling and installation speed.
              </p>
            </div>
          </div>
          <aside className="border-t border-ink/15 lg:col-span-4 lg:col-start-9">
            <p className="pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Offered in
            </p>
            {['Branded rebars', 'Commercial rebars'].map((item) => (
              <p key={item} className="flex items-center gap-3 border-b border-ink/15 py-4 text-sm">
                <CheckCircle2Icon className="h-4 w-4 text-molten" />
                {item}
              </p>
            ))}
          </aside>
        </div>
      </section>
      <section className="bg-graphite py-20 lg:py-28">
        <div className="mx-auto grid max-w-shell gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Mesh specification
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              Set the grid.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-[220px_1fr] lg:col-span-7">
            <img
              src={rebarDiagram}
              alt="Ribbed rebar welded mesh detail"
              className="w-full justify-self-center border border-metal/20 bg-chalk"
              loading="lazy"
            />
            <dl className="border-t border-metal/20">
              {SPECS.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-1 gap-2 border-b border-metal/20 py-4 text-sm sm:grid-cols-2"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[.14em] text-steel">
                    {label}
                  </dt>
                  <dd className="text-chalk sm:text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-bone py-20 text-ink lg:py-28">
        <div className="mx-auto grid max-w-shell gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <Accordion title="Applications" items={APPLICATIONS} />
          <Accordion title="Features" items={FEATURES} />
        </div>
      </section>
    </>
  );
}

export { RebarTmtWeldMesh };
