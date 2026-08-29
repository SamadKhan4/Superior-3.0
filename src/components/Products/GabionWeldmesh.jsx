import { useState } from 'react';
import { CheckCircle2Icon, ChevronDownIcon } from 'lucide-react';
import gabionDiagram from '../../assests/Products/Gabion.png';

const SPECIFICATIONS = [
  ['Mesh size', '50 mm – 300 mm'],
  ['Wire diameter', '3.00 mm – 6.00 mm'],
  ['Width', '0.5 – 3 metre'],
  ['Height', '0.5 – 3 metre'],
  ['Length', '0.5 – 3 metre'],
  ['Coating', 'GI / polyester or epoxy powder coated'],
  ['IS standard', 'IS 16013:2012'],
];
const APPLICATIONS = [
  [
    'Landscaping',
    'Decorative architectural structures for gardens, farm houses and boundaries; gabion walls can also be built quickly for landslide mitigation on mountainous sites.',
  ],
  [
    'Gabion fence',
    'Gabion pillars combined with V-bend fencing create a more substantial and visually distinctive boundary.',
  ],
  [
    'Retaining walls',
    'A flexible gravity-wall solution with the strength to accommodate ground movement in suitable designs.',
  ],
  [
    'Temporary flood walls',
    'Permeable, durable baskets can support temporary flood-control and drainage-focused applications.',
  ],
];
const FEATURES = [
  [
    'Sustainable',
    'Gabions tolerate strain and compression while allowing water to pass through the structure, helping protect areas around bridge piers and similar works.',
  ],
  [
    'Creative on design',
    'The system can be adapted from decorative walls to landscape features and waterfalls.',
  ],
  [
    'Customizable',
    'Mesh size, wire diameter, panel dimensions and overall basket shape can be configured for the project.',
  ],
  [
    'Durable',
    'Galvanized and powder-coated finishes help protect the wire against weather exposure.',
  ],
  [
    'Water permeability',
    'Open stone-filled structures allow drainage and are not damaged by passing water in the same way as solid barriers.',
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

function GabionWeldmesh({ product }) {
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
            Weld mesh gabions.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
            Stone-filled welded baskets for landscape, retaining, architectural and civil-works
            applications.
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
              A permeable gravity system.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-ink/70">
              <p>
                Gabions are rectangular baskets made from high-tensile galvanized steel wire welded
                together. Filled with rock and stacked, they create gravity structures that resist
                hydraulic and earth forces.
              </p>
              <p>
                Individual stones interlock for internal stability while their combined mass
                provides the structural resistance. The permeable form also suits projects where
                drainage and landscape integration matter.
              </p>
            </div>
          </div>
          <aside className="border-t border-ink/15 lg:col-span-4 lg:col-start-9">
            <p className="pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Product line
            </p>
            {[
              'Gabion walls',
              'Gabion pillars',
              'Gabion mattress',
              'Gabion basket',
              'Gabion wire mesh',
              'Architectural gabions',
            ].map((item) => (
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
              / Specification guide
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              Dimensioned for the site.
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-steel">
              Select mesh, wire diameter, basket dimensions and protective finish around the
              intended load and environment.
            </p>
          </div>
          <div className="lg:col-span-7">
            <img
              src={gabionDiagram}
              alt="Weld mesh gabion grid and basket dimension diagram"
              className="w-full border border-metal/20 bg-chalk"
              loading="lazy"
            />
            <dl className="mt-6 border-t border-metal/20">
              {SPECIFICATIONS.map(([label, value]) => (
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

export { GabionWeldmesh };
