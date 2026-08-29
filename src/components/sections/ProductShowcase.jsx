import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { products } from '../../data/products';
import { AnimatedText, FadeUp } from '../ui/AnimatedText';
import { MonoLabel } from '../ui/MonoLabel';
import { MeshBackdrop } from '../ui/MeshBackdrop';
const EASE = [0.22, 1, 0.36, 1];
function ProductShowcase() {
  return (
    <section id="products" className="relative w-full bg-ink" aria-labelledby="products-heading">
      <div className="mx-auto max-w-shell px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <MonoLabel>/ Engineered Product Range</MonoLabel>
              <span className="h-px w-24 bg-metal/25" />
            </div>
            <AnimatedText
              as="h2"
              lines={['Solutions built', 'for real-world demands.']}
              className="font-display font-semibold uppercase leading-[0.98] tracking-tightest text-chalk text-[clamp(2.4rem,5.4vw,4.5rem)]"
            />
            <span id="products-heading" className="sr-only">
              Engineered product range
            </span>
          </div>
          <FadeUp className="lg:col-span-4 lg:col-start-9 lg:pt-6">
            <p className="text-[15px] leading-relaxed text-chalk/60 sm:text-[16px]">
              From structural reinforcement to advanced perimeter protection, explore engineered
              mesh and fencing systems manufactured for demanding environments.
            </p>
          </FadeUp>
        </div>
      </div>
      <DesktopStory />
      <MobileList />
    </section>
  );
}
function DesktopStory() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(products.length - 1, Math.max(0, Math.floor(p * products.length)));
    setActive(next);
  });
  const product = products[active];
  return (
    <div
      ref={ref}
      className="relative hidden lg:block"
      style={{ height: `${products.length * 85}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center">
        <MeshBackdrop className="opacity-50" cell={64} welds={6} />
        <div className="relative mx-auto grid w-full max-w-shell grid-cols-12 items-center gap-10 px-10">
          {/* Index */}
          <div className="col-span-3">
            <MonoLabel tone="steel">
              {String(active + 1).padStart(2, '0')} / {products.length}
            </MonoLabel>
            <ul className="mt-6 space-y-0">
              {products.map((p, i) => (
                <li key={p.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex w-full items-baseline gap-3 border-b border-metal/10 py-2.5 text-left transition-colors duration-200 ${i === active ? 'text-chalk' : 'text-chalk/35 hover:text-chalk/70'}`}
                  >
                    <span
                      className={`font-mono text-[10px] ${i === active ? 'text-molten' : 'text-steel/60'}`}
                    >
                      {p.number}
                    </span>
                    <span className="font-display text-[15px]">{p.name}</span>
                  </button>
                  {i === active && (
                    <motion.span
                      layoutId="product-active-line"
                      className="absolute -left-4 top-1/2 h-6 w-[2px] -translate-y-1/2 bg-molten"
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Story */}
          <div className="col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <div className="font-display text-[52px] font-semibold leading-none tracking-tightest text-molten">
                  {product.number}
                </div>
                <h3 className="mt-4 font-display text-[34px] font-semibold uppercase leading-[1.02] tracking-tightest text-chalk">
                  {product.name}
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-chalk/65">
                  {product.description}
                </p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                  {product.spec}
                </p>
                <a
                  href={`/products/${product.id}`}
                  className="group mt-8 inline-flex items-center gap-2 border-b border-metal/30 pb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk transition-colors duration-200 hover:border-molten hover:text-molten"
                >
                  Explore Product
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 ease-weld group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Visual */}
          <div className="col-span-5">
            <div
              data-cursor="view"
              className="relative aspect-[4/5] w-full overflow-hidden bg-graphite"
            >
              <AnimatePresence>
                <motion.img
                  key={product.id}
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.06 }}
                  animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-ink/15" />
              <div className="mesh-grid-dense pointer-events-none absolute inset-0 opacity-25" />
              <div className="pointer-events-none absolute inset-0 border border-molten/0 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="h-[5px] w-[5px] bg-molten" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-chalk/80">
                  Mesh System / {product.number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function MobileList() {
  const reduce = useReducedMotion();
  return (
    <div className="mt-14 lg:hidden">
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border-t border-metal/12">
            <article className="px-5 py-10 sm:px-6">
              <div className="flex min-w-0 items-baseline gap-3">
                <span className="font-mono text-[11px] text-molten">{product.number}</span>
                <h3 className="min-w-0 break-words font-display text-[clamp(1.35rem,7vw,1.625rem)] font-semibold uppercase leading-[1.05] tracking-tightest text-chalk">
                  {product.name}
                </h3>
              </div>
              <motion.div
                className="mt-6 overflow-hidden"
                initial={reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0% 0% 0%)' }}
                whileInView={reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>
              <p className="mt-5 text-[15px] leading-relaxed text-chalk/65">
                {product.description}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                {product.spec}
              </p>
              <a
                href={`/products/${product.id}`}
                className="mt-6 inline-flex items-center gap-2 border-b border-metal/30 pb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk"
              >
                Explore Product <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
export { ProductShowcase };
