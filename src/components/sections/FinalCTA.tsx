import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform } from
'framer-motion';
import { siteImages } from '../../data/site';
import { AnimatedText, FadeUp } from '../ui/AnimatedText';
import { Button } from '../ui/Button';
import { MonoLabel } from '../ui/MonoLabel';
import { EnquiryForm } from './EnquiryForm';

/** A single orange pulse travelling along the mesh, echoing a weld running down a wire. */
function TravellingWeld() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <motion.span
        className="absolute top-[28%] h-px w-24 bg-molten"
        initial={{ left: '-15%', opacity: 0 }}
        animate={{ left: '110%', opacity: [0, 1, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.5, ease: 'linear' }} />
      
      <motion.span
        className="absolute left-[62%] w-px bg-molten"
        style={{ height: 96 }}
        initial={{ top: '-10%', opacity: 0 }}
        animate={{ top: '105%', opacity: [0, 1, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 3.5,
          delay: 1.6,
          ease: 'linear'
        }} />
      
    </div>);

}

export function FinalCTA() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-ink"
      aria-labelledby="cta-heading">
      
      <div className="absolute inset-0">
        <motion.img
          src={siteImages.cta}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-[112%] w-full object-cover"
          style={reduce ? undefined : { y }} />
        
        <div className="absolute inset-0 bg-ink/82" />
      </div>
      <div className="mesh-grid pointer-events-none absolute inset-0 opacity-70" />
      <TravellingWeld />

      <div className="relative mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-4">
              <MonoLabel>/ Start a Conversation</MonoLabel>
              <span className="h-px w-24 bg-metal/25" />
            </div>
            <AnimatedText
              as="h2"
              lines={['Have a project?', "Let's engineer it."]}
              className="font-display font-semibold uppercase leading-[0.96] tracking-tightest text-chalk text-[clamp(2.5rem,6vw,4.75rem)]" />
            
            <span id="cta-heading" className="sr-only">
              Contact Superior Weldmesh
            </span>
            <FadeUp className="mt-8 max-w-lg">
              <p className="text-[16px] leading-relaxed text-chalk/70 lg:text-[18px]">
                Share your specifications, quantities or project requirements and
                connect with the Superior Weldmesh team.
              </p>
            </FadeUp>
            <FadeUp delay={0.1} className="mt-10 flex flex-wrap gap-3">
              <Button href="#contact" variant="primary">
                Request a Quote
              </Button>
              <Button href="#contact" variant="outline" arrow="diagonal">
                Contact Sales
              </Button>
            </FadeUp>

            <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-metal/20 pt-8 sm:grid-cols-3">
              {[
              { k: 'Call', v: '+91 712 000 0000' },
              { k: 'Email', v: 'sales@superiorweldmesh.com' },
              { k: 'Location', v: 'Nagpur, Maharashtra' }].
              map((row) =>
              <div key={row.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                    {row.k}
                  </dt>
                  <dd className="mt-2 text-[14px] text-chalk/85">{row.v}</dd>
                </div>
              )}
            </dl>
          </div>

          <FadeUp className="lg:col-span-6" delay={0.08}>
            <EnquiryForm />
          </FadeUp>
        </div>
      </div>
    </section>);

}