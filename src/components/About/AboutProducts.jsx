import { ArrowUpRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

function AboutProducts() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Product range
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              The right mesh for the job.
            </h2>
          </div>
          <Link
            to="/products"
            className="font-mono text-[10px] uppercase tracking-[.2em] text-chalk/70 hover:text-molten"
          >
            View all products →
          </Link>
        </div>
        <div className="mt-14 grid gap-px border-t border-metal/15 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group border-b border-r border-metal/15 p-6 transition-colors hover:bg-graphite"
            >
              <span className="font-mono text-[10px] text-molten">{product.number}</span>
              <h3 className="mt-12 font-display text-3xl uppercase leading-none text-chalk">
                {product.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-steel">{product.spec}</p>
              <ArrowUpRightIcon className="mt-8 h-4 w-4 text-molten transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { AboutProducts };
