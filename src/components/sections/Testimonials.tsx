import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { testimonials } from '../../data/site';
import { AnimatedText } from '../ui/AnimatedText';
import { MonoLabel } from '../ui/MonoLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const go = (dir: 1 | -1) =>
  setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative w-full bg-ink py-24 lg:py-32"
      aria-labelledby="testimonials-heading">
      
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <MonoLabel>/ Client Relationships</MonoLabel>
              <span className="h-px w-24 bg-metal/25" />
            </div>
            <AnimatedText
              as="h2"
              lines={['Trust is built', 'one delivery at a time.']}
              className="font-display font-semibold uppercase leading-[0.98] tracking-tightest text-chalk text-[clamp(2.1rem,4.6vw,3.5rem)]" />
            
            <span id="testimonials-heading" className="sr-only">
              Client relationships
            </span>
          </div>
          <div className="flex items-start justify-start gap-3 lg:col-span-3 lg:col-start-10 lg:justify-end lg:pt-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              data-cursor="left"
              onClick={() => go(-1)}
              className="inline-flex h-12 w-12 items-center justify-center border border-metal/25 text-chalk transition-colors duration-200 hover:border-molten hover:text-molten">
              
              <ArrowLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              data-cursor="right"
              onClick={() => go(1)}
              className="inline-flex h-12 w-12 items-center justify-center border border-metal/25 text-chalk transition-colors duration-200 hover:border-molten hover:text-molten">
              
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          className="relative mt-16 min-h-[320px] border-t border-metal/15 pt-12 lg:mt-20 lg:min-h-[380px]"
          aria-live="polite">
          
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -40 }}
              transition={{ duration: 0.45, ease: EASE }}>
              
              <blockquote className="max-w-5xl font-display font-medium leading-[1.12] tracking-tight text-chalk text-[clamp(1.6rem,3.8vw,3rem)]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-display text-[19px] text-chalk">
                  {item.name}
                  <span className="text-steel"> — {item.company}</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                  {item.meta}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-molten">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="relative h-px flex-1 bg-metal/20">
            <motion.span
              className="absolute inset-y-0 left-0 bg-molten"
              animate={{
                width: `${(index + 1) / testimonials.length * 100}%`
              }}
              transition={{ duration: 0.4, ease: EASE }} />
            
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] text-steel">
            {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>);

}