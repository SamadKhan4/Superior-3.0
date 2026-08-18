import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { qualityItems, siteImages } from '../../data/site';
import { AnimatedText, FadeUp } from '../ui/AnimatedText';
import { MonoLabel } from '../ui/MonoLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Quality() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const item = qualityItems[active];

  return (
    <section
      id="quality"
      className="relative w-full bg-bone py-24 lg:py-36"
      aria-labelledby="quality-heading">
      
      <div className="mesh-grid-light pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-shell grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="mb-6 flex items-center gap-4">
            <MonoLabel>/ Quality First</MonoLabel>
            <span className="h-px w-24 bg-ink/15" />
          </div>
          <AnimatedText
            as="h2"
            lines={["Quality isn't a claim.", "It's a process."]}
            className="font-display font-semibold uppercase leading-[0.98] tracking-tightest text-ink text-[clamp(2.4rem,5.2vw,4.25rem)]" />
          
          <span id="quality-heading" className="sr-only">
            Quality assurance
          </span>
          <FadeUp className="mt-8 max-w-md">
            <p className="text-[16px] leading-relaxed text-ink/70">
              Quality on a mesh order is decided long before dispatch — in the
              wire we accept, the machine settings we hold, and the checks we run
              between batches. Each stage below is a fixed part of how an order
              moves through our plant.
            </p>
          </FadeUp>

          <div className="relative mt-10 hidden aspect-[4/3] w-full overflow-hidden bg-graphite lg:block">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={active % 2 === 0 ? siteImages.inspection : siteImages.about}
                alt="Quality inspection of welded wire mesh"
                loading="lazy"
                className="h-full w-full object-cover"
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }} />
              
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-ink/60 px-3 py-1.5">
              <span className="h-[5px] w-[5px] bg-molten" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-chalk">
                Quality / Inspected
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
          <ul className="relative">
            {qualityItems.map((entry, i) =>
            <li key={entry.number} className="relative">
                <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={active === i}
                className="group w-full border-b border-ink/12 py-6 text-left">
                
                  <div className="flex items-baseline gap-5">
                    <span
                    className={`font-mono text-[11px] transition-colors duration-200 ${
                    active === i ? 'text-molten' : 'text-ink/35'}`
                    }>
                    
                      {entry.number}
                    </span>
                    <span
                    className={`font-display text-[clamp(1.35rem,2.6vw,2rem)] font-medium uppercase tracking-tight transition-[color,transform] duration-300 ease-weld ${
                    active === i ?
                    'translate-x-1 text-ink' :
                    'text-ink/45 group-hover:text-ink/75'}`
                    }>
                    
                      {entry.title}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {active === i &&
                  <motion.p
                    className="max-w-lg overflow-hidden pl-10 text-[14px] leading-relaxed text-ink/60"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.28, ease: EASE }}>
                    
                        {entry.copy}
                      </motion.p>
                  }
                  </AnimatePresence>
                </button>
              </li>
            )}
          </ul>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
            {item.number} / {qualityItems.length} — {item.title}
          </p>
        </div>
      </div>
    </section>);

}