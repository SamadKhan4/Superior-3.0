import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform } from
'framer-motion';
import { heroStats, siteImages } from '../../data/site';
import { Button } from '../ui/Button';
import { MeshBackdrop } from '../ui/MeshBackdrop';

const EASE = [0.22, 1, 0.36, 1] as const;

type HeroProps = {ready: boolean;};

export function Hero({ ready }: HeroProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);

  const show = ready;
  const line = (i: number) => ({
    initial: reduce ? { opacity: 0 } : { y: '100%' },
    animate: show ?
    reduce ?
    { opacity: 1 } :
    { y: 0 } :
    reduce ?
    { opacity: 0 } :
    { y: '100%' },
    transition: { duration: 0.9, ease: EASE, delay: 0.25 + i * 0.11 }
  });

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex h-[88vh] min-h-[620px] w-full flex-col justify-end overflow-hidden bg-ink lg:h-screen">
      
      {/* Background photograph, revealed through a vertical mask */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0% 0% 100% 0%)' }}
        animate={
        show ?
        reduce ?
        { opacity: 1 } :
        { clipPath: 'inset(0% 0% 0% 0%)' } :
        undefined
        }
        transition={{ duration: 1.1, ease: EASE }}>
        
        <motion.img
          src={siteImages.hero}
          alt="Close-up of galvanized welded wire mesh panels on the factory floor"
          className="h-[112%] w-full object-cover"
          style={reduce ? undefined : { scale, y: imageY }} />
        
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </motion.div>

      <MeshBackdrop className="opacity-70" cell={72} welds={9} />

      {/* Crosshair micro detail */}
      <div
        aria-hidden="true"
        className="absolute right-10 top-28 hidden items-center gap-2 lg:flex">
        
        <span className="h-px w-8 bg-molten/70" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
          India / 21.1458°N
        </span>
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-shell px-6 pb-10 lg:px-10 lg:pb-14"
        style={reduce ? undefined : { y: contentY }}>
        
        <motion.p
          className="mb-6 font-mono text-[10px] uppercase tracking-[0.24em] text-molten sm:text-[11px]"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={show ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}>
          
          / Manufacturer &amp; Exporter of Wire Mesh + Fencing Systems
        </motion.p>

        <h1 className="font-display font-semibold uppercase leading-[0.94] tracking-tightest text-chalk text-[clamp(3rem,9.2vw,6.9rem)]">
          <span className="block overflow-hidden pb-[0.04em]">
            <motion.span className="block" {...line(0)}>
              Engineered Mesh.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.04em]">
            <motion.span className="block" {...line(1)}>
              Built for{' '}
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: '1.5px rgba(244,123,32,0.95)'
                }}>
                
                Strength.
              </span>
            </motion.span>
          </span>
          <span className="sr-only">
            Wire Mesh &amp; Fencing Solutions Engineered for Strength
          </span>
        </h1>

        <motion.p
          className="mt-7 max-w-2xl text-[15px] leading-relaxed text-chalk/70 sm:text-[17px]"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={show ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}>
          
          Precision-manufactured wire mesh, reinforcement and fencing solutions
          engineered for infrastructure, construction, security and demanding
          industrial applications.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3"
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.09, delayChildren: 0.75 } }
          }}>
          
          {[
          <Button key="a" href="#products" variant="primary" arrow="right">
              Explore Products
            </Button>,
          <Button key="b" href="#contact" variant="outline" arrow="diagonal">
              Request a Quote
            </Button>].
          map((btn, i) =>
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: EASE }
              }
            }}>
            
              {btn}
            </motion.div>
          )}
        </motion.div>

        <motion.dl
          className="mt-12 grid grid-cols-1 gap-y-6 border-t border-metal/15 pt-8 sm:grid-cols-3 lg:mt-16"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : undefined}
          transition={{ duration: 0.7, ease: EASE, delay: 1 }}>
          
          {heroStats.map((stat) =>
          <div key={stat.index} className="flex items-start gap-4">
              <span className="mt-1 font-mono text-[10px] text-molten">
                {stat.index}
              </span>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-[26px] font-medium leading-none tracking-tight text-chalk sm:text-[30px]">
                  {stat.value}
                </dd>
              </div>
            </div>
          )}
        </motion.dl>
      </motion.div>
    </section>);

}