import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { products } from '../data/products';
import { navLinks } from '../data/site';
import { MonoLabel } from './ui/MonoLabel';
const EASE = [0.22, 1, 0.36, 1];
function Navigation() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-weld ${scrolled || megaOpen ? 'border-b border-metal/15 bg-ink/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'}`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div
        className={`mx-auto flex max-w-shell items-center justify-between px-5 transition-[padding] duration-300 ease-weld sm:px-6 lg:px-10 ${scrolled ? 'py-4' : 'py-6 lg:py-8'}`}
      >
        <a href="/" aria-label="Superior Weldmesh home" className="block">
          <img
            src="/logo-light.webp"
            alt="Superior Weldmesh"
            className={`w-auto max-w-[58vw] object-contain object-left transition-[height] duration-300 ease-weld ${scrolled ? 'h-8 sm:h-9 lg:h-11' : 'h-10 sm:h-11 lg:h-14'}`}
          />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isProducts = link.label === 'Products';
            return (
              <div
                key={link.label}
                onMouseEnter={() => setMegaOpen(isProducts)}
                className="relative"
              >
                <a
                  href={link.href}
                  aria-haspopup={isProducts || void 0}
                  aria-expanded={isProducts ? megaOpen : void 0}
                  className={`group relative block font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${isProducts && megaOpen ? 'text-molten' : 'text-chalk/75 hover:text-chalk'}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-molten transition-transform duration-300 ease-weld group-hover:scale-x-100" />
                </a>
              </div>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="group relative hidden items-center gap-2 overflow-hidden bg-molten px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink sm:inline-flex"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-bone transition-transform duration-300 ease-weld group-hover:scale-x-100" />
            <span className="relative z-10">Request a Quote</span>
            <ArrowUpRightIcon className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 ease-weld group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border border-metal/25 text-chalk lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Products mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="hidden border-t border-metal/15 bg-ink/95 backdrop-blur-md lg:block"
            initial={{ opacity: 0, y: reduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <div className="mx-auto grid max-w-shell grid-cols-12 gap-10 px-10 py-10">
              <div className="col-span-8">
                <MonoLabel>/ Engineered Product Range</MonoLabel>
                <ul className="mt-6 grid grid-cols-3 gap-x-8 gap-y-1">
                  {products.map((product) => (
                    <li key={product.id}>
                      <a
                        href={`/products/${product.id}`}
                        className="group flex items-baseline gap-3 border-b border-metal/10 py-3"
                      >
                        <span className="font-mono text-[10px] text-molten">{product.number}</span>
                        <span className="overflow-hidden">
                          <span className="block font-display text-[17px] text-chalk/80 transition-transform duration-300 ease-weld group-hover:-translate-y-0.5 group-hover:text-chalk">
                            {product.name}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={products[0].image}
                    alt={products[0].alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/30" />
                  <div className="absolute bottom-4 left-4">
                    <MonoLabel>/ Featured</MonoLabel>
                    <p className="mt-1 font-display text-xl text-chalk">Welded Wire Mesh</p>
                  </div>
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  MS · GI · SS / Custom Aperture
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : 16 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex items-center justify-between px-5 py-5 sm:px-6 sm:py-6">
              <img
                src="/logo-light.webp"
                alt="Superior Weldmesh"
                className="h-8 w-auto object-contain object-left"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center border border-metal/25 text-chalk"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-8 sm:px-6 sm:pb-10">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.label} className="border-b border-metal/12">
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 font-display text-[clamp(1.55rem,8vw,1.875rem)] uppercase tracking-tightest text-chalk sm:py-5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <MonoLabel>/ Products</MonoLabel>
                <ul className="mt-4 grid grid-cols-1 gap-y-2">
                  {products.map((p) => (
                    <li key={p.id}>
                      <a
                        href={`/products/${p.id}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-baseline gap-3 py-1 text-[15px] text-chalk/70"
                      >
                        <span className="font-mono text-[10px] text-molten">{p.number}</span>
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-10 flex w-full items-center justify-center gap-2 bg-molten px-6 py-5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink"
              >
                Request a Quote <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export { Navigation };
