import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { applications } from '../../data/site';

function ApplicationSlider() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const item = applications[active];
  const go = (direction) =>
    setActive((current) => (current + direction + applications.length) % applications.length);
  return (
    <section className="overflow-hidden bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Sector focus
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold uppercase leading-[.9] tracking-tightest">
              Designed for real environments.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center border border-metal/25 text-chalk transition hover:border-molten hover:text-molten"
              aria-label="Previous application"
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center border border-metal/25 text-chalk transition hover:border-molten hover:text-molten"
              aria-label="Next application"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.image}
                src={item.image}
                alt={item.alt}
                className="aspect-[16/10] w-full object-cover"
                initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? {} : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-[10px] text-molten">
              {item.number} / {String(applications.length).padStart(2, '0')}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? {} : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="mt-5 font-display text-5xl uppercase leading-[.9] tracking-tightest">
                  {item.name}
                </h3>
                <p className="mt-6 leading-relaxed text-steel">
                  Wire mesh and fencing systems configured to support demanding spaces, access
                  requirements and long-term use.
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex flex-wrap gap-2">
              {applications.map((entry, index) => (
                <button
                  key={entry.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2 w-8 transition ${active === index ? 'bg-molten' : 'bg-metal/25 hover:bg-metal/60'}`}
                  aria-label={`Show ${entry.name}`}
                  aria-current={active === index ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ApplicationSlider };
