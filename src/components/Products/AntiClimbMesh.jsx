import { useState } from 'react';
import { CheckCircle2Icon, ChevronDownIcon } from 'lucide-react';
import antiClimbDiagram from '../../assests/Products/anticlimb.png';

const SPECS = [
  ['Mesh size', '76.20 mm × 12.70 mm'],
  ['Wire diameter', '4.00 mm'],
  ['Width', '1.00 – 2.50 metre'],
  ['Length', 'As per requirement'],
  ['Coating', 'GI / polyester or epoxy powder coated'],
];
const SECTORS = ['Airports', 'Banks and embassies', 'Borders', 'Defence', 'Prisons', 'Societies'];
const FEATURES = [
  [
    'Rigid design',
    'The closely welded structure creates a rigid panel with limited handholds and footholds, suited to sites that need controlled access.',
  ],
  [
    'Higher security',
    'The 358 aperture pattern is engineered to deter cutting and climbing while preserving a clear line of sight.',
  ],
  [
    'Customization',
    'Panel dimensions, coating, posts and gate integration can be configured around the perimeter requirement.',
  ],
  [
    'Anti-corrosion',
    'Galvanized and powder-coated finish options help protect the panel against weather exposure.',
  ],
];

function FeatureList() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-bone py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <h2 className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-semibold uppercase leading-none tracking-tightest">
          Features
        </h2>
        <div className="mt-7 border-t border-ink/15">
          {FEATURES.map(([label, copy], index) => (
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
      </div>
    </section>
  );
}

function AntiClimbMesh({ product }) {
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
            Anti-climb / 358 mesh.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
            A high-security welded panel system designed to discourage climbing, cutting and
            unauthorised access.
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
              Visibility without vulnerability.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-ink/70">
              <p>
                Anti-climb mesh is a high-security product that maintains a guarded display of
                visual screening while balancing the need to delay and deter attack. Its close-woven
                pattern discourages cutting and climbing from a framework that supports secure
                perimeter control.
              </p>
              <p>
                The rigid welded structure can be combined with razor or barbed wire, security
                spikes and other perimeter measures for high-end applications such as airports,
                prisons, military facilities, public utilities and industrial complexes.
              </p>
              <p>
                Panel options can also provide a temporary separation barrier where a strong,
                moveable site boundary is required.
              </p>
            </div>
          </div>
          <aside className="border-t border-ink/15 lg:col-span-4 lg:col-start-9">
            <p className="pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Security intent
            </p>
            {[
              'Deter climbing',
              'Limit cutting access',
              'Maintain clear visibility',
              'Integrate with secure gates',
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
              / Panel specification
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              A tighter aperture.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-[220px_1fr] lg:col-span-7">
            <img
              src={antiClimbDiagram}
              alt="Anti-climb 358 mesh aperture diagram"
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
      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
            / Applications
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold uppercase leading-[.9] tracking-tightest">
            Made for critical perimeters.
          </h2>
          <div className="mt-14 grid gap-px border-t border-metal/15 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, index) => (
              <div key={sector} className="border-b border-r border-metal/15 p-6">
                <span className="font-mono text-[10px] text-molten">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-12 font-display text-2xl uppercase">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeatureList />
    </>
  );
}

export { AntiClimbMesh };
