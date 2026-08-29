import { useState } from 'react';
import { CheckCircle2Icon, ChevronDownIcon } from 'lucide-react';
import chainLinkDiagram from '../../assests/Products/chainlink.png';

const SPECIFICATIONS = [
  ['Mesh size', '30 mm – 125 mm'],
  ['Wire thickness', '1.60 mm – 5.00 mm'],
  ['Height', '600 mm – 3000 mm'],
  ['Coating', 'GI / PVC / PP'],
  ['Process', 'Automatic'],
  ['Standard length', '15 metres'],
  ['Tensile strength', '550 N/m²'],
];
const APPLICATIONS = [
  [
    'Chain link fence',
    'A balance of security and transparency for a wide range of perimeter requirements, with multiple gauges, colours and fence heights.',
  ],
  [
    'Suitable for demarcation',
    'A clear and practical boundary for residential, commercial, industrial and agricultural properties.',
  ],
  [
    'Vertical gardening',
    'An open mesh support structure that can guide climbers and green-wall planting systems.',
  ],
  [
    'Privacy',
    'Can be paired with screening or planting where added visual separation is required.',
  ],
  [
    'Animal enclosures',
    'A durable boundary option for enclosures that need visibility, airflow and defined access.',
  ],
];
const FEATURES = [
  [
    'Quick installation',
    'Chain link fences are straightforward to install, helping projects create secure boundaries quickly.',
  ],
  [
    'Low maintenance and easy repair',
    'The open fabric is practical to inspect and individual areas can be repaired without replacing an entire run.',
  ],
  ['Durability', 'Appropriate wire and coating combinations support regular outdoor use.'],
  [
    'Affordability',
    'An efficient material and installation format for a wide range of boundary requirements.',
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

function ChainLinkMesh({ product }) {
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
          <h1 className="mt-5 font-display text-[clamp(3.2rem,8vw,6.7rem)] font-semibold uppercase leading-[.88] tracking-tightest">
            Chain-link mesh.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
            A flexible diamond-pattern mesh system engineered for secure, open and practical
            boundaries.
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
              Flexible by design.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-ink/70">
              <p>
                Chain-link mesh runs vertically and bends into a zig-zag pattern, linking with
                adjacent wires to form its familiar diamond structure. The open pattern delivers
                linear strength while allowing visibility and airflow.
              </p>
              <p>
                It can be made in galvanized iron and other finishes to suit different environments.
                Top and bottom fabric edges can be knuckled, twisted or combined depending on the
                desired security level.
              </p>
            </div>
          </div>
          <aside className="border-t border-ink/15 lg:col-span-4 lg:col-start-9">
            <p className="pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Offered in
            </p>
            {['Knuckled chain link mesh', 'Twisted chain link mesh'].map((item) => (
              <p key={item} className="flex items-center gap-3 border-b border-ink/15 py-4 text-sm">
                <CheckCircle2Icon className="h-4 w-4 text-molten" />
                {item}
              </p>
            ))}
            <p className="pt-7 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
              Categories
            </p>
            {['Galvanized iron', 'Poly vinyl chloride', 'Stainless steel'].map((item) => (
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
              Configure the edge.
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-steel">
              Choose mesh opening, wire thickness, height, coating and edge treatment for the level
              of security required.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-[180px_1fr] lg:col-span-7">
            <img
              src={chainLinkDiagram}
              alt="Chain link mesh knuckle-knuckle and twisted-twisted edge options"
              className="w-full justify-self-center border border-metal/20 bg-chalk"
              loading="lazy"
            />
            <dl className="border-t border-metal/20">
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

export { ChainLinkMesh };
