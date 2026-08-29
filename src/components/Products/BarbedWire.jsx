import { useState } from 'react';
import { CheckCircle2Icon, ChevronDownIcon } from 'lucide-react';
import barbedWireHero from '../../assets/products/barbed-wire-hero.png';

const SPECS = [
  ['Barb distance', '75 mm', '75 mm', '75 mm'],
  ['Wire thickness', '12×12', '12×14', '14×14'],
  ['Length per kg', '6 m', '8 m', '12 m'],
  ['Standard roll', '40–45 kg', '40–45 kg', '40–45 kg'],
  ['Tensile strength', '550 N/m²', '550 N/m²', '550 N/m²'],
  ['IS standard', 'IS 278', 'IS 278', 'IS 278'],
];
const APPLICATIONS = [
  [
    'The military',
    'Barbed wire is used at military training sites and restricted boundaries where a visible, robust deterrent is required.',
  ],
  [
    'Security',
    'An effective perimeter addition for highways, railway tracks and infrastructure sites that require stronger trespass protection.',
  ],
  [
    'Agricultural and commercial land',
    'Used to help protect farms, orchards, vineyards, nurseries and commercial land from unwanted access and wildlife.',
  ],
];
const FEATURES = [
  [
    'Impenetrable security',
    'Sharp barbs and a strong twisted-wire structure create a durable physical deterrent.',
  ],
  [
    'Versatility',
    'Suitable for residential, commercial, industrial, agricultural and construction boundaries.',
  ],
  [
    'Cost-effectiveness',
    'A practical option where straightforward installation and dependable boundary protection are important.',
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

function BarbedWire({ product }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink pt-32 sm:pt-40 lg:pt-48">
        <img
          src={barbedWireHero}
          alt="Galvanized barbed wire coil"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[.24em] text-molten">
            / Products / {product.number}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.2rem,8vw,6.7rem)] font-semibold uppercase leading-[.88] tracking-tightest">
            Barbed wire.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/80 sm:text-lg">
            A traditional, cost-effective fencing solution with strong twisted wires and regularly
            spaced barbs.
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
              A proven boundary deterrent.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-ink/70">
              <p>
                Barbed wire is made from two longitudinal wires twisted together, with wire barbs
                positioned at regular intervals around one or both strands. The double-wire
                construction adds strength through contraction and expansion.
              </p>
              <p>
                It is widely chosen for its dimensional accuracy, long service life, straightforward
                installation and economical boundary protection.
              </p>
            </div>
          </div>
          <aside className="border-t border-ink/15 lg:col-span-4 lg:col-start-9">
            <p className="pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Available materials
            </p>
            {['Galvanized iron', 'PVC coated'].map((item) => (
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
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Specifications
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              Choose the wire pair.
            </h2>
          </div>
          <div className="overflow-x-auto lg:col-span-8">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className="bg-metal/15 font-mono text-[10px] uppercase tracking-[.14em] text-steel">
                <tr>
                  {['Specifications', '12×12', '12×14', '14×14'].map((label) => (
                    <th key={label} className="border border-metal/25 px-4 py-4">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPECS.map(([label, ...values]) => (
                  <tr key={label}>
                    {[label, ...values].map((value, index) => (
                      <td
                        key={`${label}-${value}`}
                        className={`border border-metal/20 px-4 py-4 ${index === 0 ? 'font-mono text-[10px] uppercase tracking-[.1em] text-steel' : 'text-chalk'}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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

export { BarbedWire };
