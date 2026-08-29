import { useState } from 'react';
import { CheckCircle2Icon, ChevronDownIcon } from 'lucide-react';
import razorDiagram from '../../assests/Products/concerntina.png';

const SPECS = [
  ['Wire thickness', '2.45 mm – 3.20 mm'],
  ['Strip thickness', '0.45 mm – 0.60 mm'],
  ['Blade height', '5 mm'],
  ['Blade width', '10 mm – 17 mm'],
  ['Coil width', '300 mm – 1000 mm'],
  ['Standard length', '6.00 metres'],
  ['Tensile strength', '550 N/m²'],
];
const APPLICATIONS = [
  [
    'Poultry farms',
    'A practical containment and boundary system for farms, helping keep livestock within defined areas.',
  ],
  [
    'Protection',
    'Adds a clear physical deterrent for facilities that need more secure perimeter control.',
  ],
  [
    'Demarcation between properties',
    'A visible boundary treatment for controlled land and site edges.',
  ],
  [
    'Deterrents',
    'Sharp, closely spaced blades create an additional obstacle at high-security perimeters.',
  ],
];
const FEATURES = [
  [
    'Reliable and secure',
    'Manufactured from galvanized or stainless steel materials for locations where restricted access and security are the highest concern.',
  ],
  [
    'Versatile',
    'Suitable for a range of security boundaries, stockrooms and controlled properties.',
  ],
  [
    'Quick installation',
    'Coil systems can be deployed efficiently as part of a wider perimeter solution.',
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

function ConcertinaRazorWire({ product }) {
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
            Concertina razor wire.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
            A high-security fencing material that strengthens sensitive perimeters with a sharp,
            visible deterrent.
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
              Designed to deter.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-ink/70">
              <p>
                Razor wire, also known as concertina wire, is a present-day security fencing
                material made from hot-dipped galvanized or stainless-steel sheet and high-tensile
                wire.
              </p>
              <p>
                Its sharp edges, high tensile center wire and simple coil format make it suitable
                for sensitive sites, stockrooms, military fields and other locations that require
                serious fencing security.
              </p>
            </div>
          </div>
          <aside className="border-t border-ink/15 lg:col-span-4 lg:col-start-9">
            <p className="pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Categories
            </p>
            {['Galvanized iron', 'Stainless steel'].map((item) => (
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
              / Blade profile
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              Specified for the perimeter.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <img
              src={razorDiagram}
              alt="Concertina razor wire blade dimension diagram"
              className="w-full border border-metal/20 bg-chalk"
              loading="lazy"
            />
            <dl className="mt-6 border-t border-metal/20">
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

export { ConcertinaRazorWire };
