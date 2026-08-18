import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { differentiators } from '../../data/site';
import { AnimatedText } from '../ui/AnimatedText';
import { MonoLabel } from '../ui/MonoLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Differentiators() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative w-full bg-graphite py-24 lg:py-32"
      aria-labelledby="why-heading">
      
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-4">
          <MonoLabel>/ Why Superior</MonoLabel>
          <span className="h-px w-24 bg-metal/25" />
        </div>
        <AnimatedText
          as="h2"
          lines={['Why projects', 'choose Superior.']}
          className="font-display font-semibold uppercase leading-[0.96] tracking-tightest text-chalk text-[clamp(2.4rem,5.6vw,4.5rem)]" />
        
        <span id="why-heading" className="sr-only">
          Why projects choose Superior
        </span>

        <ul className="mt-16 lg:mt-20">
          {differentiators.map((item) =>
          <li key={item.number} className="relative">
              <motion.span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px bg-metal/30"
              initial={{ width: reduce ? '100%' : 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: EASE }} />
            
              <div className="group grid grid-cols-1 items-baseline gap-4 py-9 md:grid-cols-12 md:gap-8 lg:py-12">
                <motion.span
                className="font-mono text-[12px] text-molten md:col-span-1"
                initial={{ opacity: 0, x: reduce ? 0 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: EASE }}>
                
                  {item.number}
                </motion.span>
                <div className="overflow-hidden md:col-span-6">
                  <motion.h3
                  className="font-display font-medium uppercase leading-[1.02] tracking-tightest text-chalk text-[clamp(1.75rem,3.6vw,2.75rem)] transition-colors duration-300 group-hover:text-molten"
                  initial={reduce ? { opacity: 0 } : { y: '100%' }}
                  whileInView={reduce ? { opacity: 1 } : { y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.06 }}>
                  
                    {item.title}
                  </motion.h3>
                </div>
                <motion.p
                className="max-w-sm text-[15px] leading-relaxed text-chalk/55 md:col-span-5"
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}>
                
                  {item.copy}
                </motion.p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>);

}