import { useState } from 'react';
import { ChevronDownIcon, CheckCircle2Icon } from 'lucide-react';
import orderDiagram from '../../assests/Products/weldmesh.png';

const SPECIFICATIONS = [
  ['Mesh size', '17 mm – 300 mm'],
  ['Wire diameter', '1.00 mm – 12.00 mm'],
  ['Width', '0.5 – 2.5 metre'],
  ['Length', 'As per requirement'],
  ['Coating', 'GI / polyester or epoxy powder coated'],
  ['IS standard', 'IS 4948:2002'],
];

const APPLICATIONS = [
  [
    'Perimeter security',
    'A rigid, welded structure for security perimeters, including sensitive industrial and infrastructure environments.',
  ],
  [
    'Demarcation',
    'For agricultural properties, construction sites, industries, warehouses, workshops and controlled enclosures.',
  ],
  [
    'Storage lockers',
    'Used to create racking, warehouse storage and supermarket protection systems with clear visibility.',
  ],
  [
    'Animal enclosures',
    'Stainless-steel mesh options support animal farms, veterinary facilities and shelters.',
  ],
];

const FEATURES = [
  [
    'Durability',
    'A welded structure and appropriate coating provide a strong, long-lasting mesh system for demanding conditions.',
  ],
  [
    'Anti-climb structure',
    'Closely spaced welded wires can reduce footholds and handholds where additional perimeter protection is needed.',
  ],
  [
    'Variety of applications',
    'Panels can be configured for perimeter fencing, generator enclosures, bin depots and more.',
  ],
  [
    'Visually appealing',
    'An ordered mesh pattern keeps boundaries open and neat while retaining practical performance.',
  ],
];

function ExpandList({ title, items }) {
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

function WeldedWireMesh({ product }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink pt-32 sm:pt-40 lg:pt-48">
        <img
          src={product.image}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[.24em] text-molten">
            / Products / {product.number}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,8vw,6.7rem)] font-semibold uppercase leading-[.88] tracking-tightest">
            Welded wire mesh.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
            A precision-welded mesh system for construction, security, storage, reinforcement and
            industrial use.
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
              Precision at every intersection.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-ink/70">
              <p>
                Welded wire mesh is made by straightening and spot welding quality carbon wires
                together. Its consistent structure, practical format and easy handling make it
                suitable across a broad range of uses.
              </p>
              <p>
                Available in a choice of aperture sizes and wire diameters, the mesh can be
                developed around the stiffness, longevity and configuration a project requires.
              </p>
            </div>
          </div>
          <aside className="border-t border-ink/15 lg:col-span-4 lg:col-start-9">
            <p className="pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Materials
            </p>
            {['Mild steel', 'Galvanized iron', 'Stainless steel'].map((item) => (
              <p key={item} className="flex items-center gap-3 border-b border-ink/15 py-4 text-sm">
                <CheckCircle2Icon className="h-4 w-4 text-molten" />
                {item}
              </p>
            ))}
            <p className="pt-7 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Manufactured in
            </p>
            {['Rolls', 'Panels', 'Screens'].map((item) => (
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
              Specify it your way.
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-steel">
              Rectangular or square mesh can be supplied with the dimensions, aperture and edge
              condition suited to the requirement.
            </p>
          </div>
          <div className="lg:col-span-7">
            <img
              src={orderDiagram}
              alt="Welded wire mesh ordering guide showing rectangular and square mesh dimensions and trim options"
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
          <ExpandList title="Applications" items={APPLICATIONS} />
          <ExpandList title="Features" items={FEATURES} />
        </div>
      </section>
    </>
  );
}

export { WeldedWireMesh };
