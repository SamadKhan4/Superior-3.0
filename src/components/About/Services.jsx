import { ArrowUpRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  'Dedicated QA team and defect-free material checks',
  'Third-party material inspection at our plant',
  'Products matched to customer requirements',
  'Technically qualified engineering support',
  'Timely deliveries',
  'Products in conformance with specified standards',
];

function Services() {
  return (
    <section className="bg-bone py-20 text-ink lg:py-28">
      <div className="mx-auto grid max-w-shell gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">/ Services</p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-semibold uppercase leading-[.9] tracking-tightest">
            From enquiry to dispatch.
          </h2>
          <p className="mt-7 max-w-md leading-relaxed text-ink/70">
            Technical detail is handled early, so manufacturing and delivery can follow a clearer
            path.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-molten px-5 py-4 font-mono text-[10px] uppercase tracking-[.18em] text-ink"
          >
            Start an enquiry <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <ol className="border-t border-ink/15 lg:col-span-6 lg:col-start-7">
          {SERVICES.map((service, index) => (
            <li
              key={service}
              className="flex items-center justify-between border-b border-ink/15 py-5"
            >
              <span className="font-mono text-[10px] text-molten">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-xl uppercase">{service}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export { Services };
