import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { principles, siteImages } from '../../data/site';
import { AnimatedText, FadeUp } from '../ui/AnimatedText';
import { MonoLabel } from '../ui/MonoLabel';
function WeldGrid() {
  const reduce = useReducedMotion();
  const cols = 7;
  const rows = 4;
  const nodes = Array.from({ length: cols * rows }, (_, i) => i);
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: cols }).map((_, c) => (
        <span
          key={`c-${c}`}
          className="absolute inset-y-0 w-px bg-metal/12"
          style={{ left: `${((c + 1) / (cols + 1)) * 100}%` }}
        />
      ))}
      {Array.from({ length: rows }).map((_, r) => (
        <span
          key={`r-${r}`}
          className="absolute inset-x-0 h-px bg-metal/12"
          style={{ top: `${((r + 1) / (rows + 1)) * 100}%` }}
        />
      ))}
      {!reduce &&
        nodes.map((n) => {
          const c = n % cols;
          const r = Math.floor(n / cols);
          return (
            <motion.span
              key={n}
              className="absolute h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-molten"
              style={{
                left: `${((c + 1) / (cols + 1)) * 100}%`,
                top: `${((r + 1) / (rows + 1)) * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.95, 0] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                repeatDelay: 7,
                delay: (n * 0.31) % 7,
                ease: 'easeOut',
              }}
            />
          );
        })}
    </div>
  );
}
function Manufacturing() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-ink py-24 lg:py-36"
      aria-labelledby="manufacturing-heading"
    >
      <div className="absolute inset-0">
        <motion.img
          src={siteImages.weld}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-[116%] w-full object-cover opacity-35"
          style={reduce ? void 0 : { y: imgY }}
        />
        <div className="absolute inset-0 bg-ink/75" />
      </div>
      <WeldGrid />
      <div className="relative mx-auto max-w-shell px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <MonoLabel>/ Manufacturing</MonoLabel>
              <span className="h-px w-24 bg-metal/25" />
            </div>
            <AnimatedText
              as="h2"
              lines={['Precision at', 'every intersection.']}
              className="font-display font-semibold uppercase leading-[0.96] tracking-tightest text-chalk text-[clamp(2.5rem,6vw,4.75rem)]"
            />
            <span id="manufacturing-heading" className="sr-only">
              Manufacturing precision
            </span>
          </div>
          <FadeUp className="lg:col-span-5 lg:pt-8">
            <p className="text-[16px] leading-relaxed text-chalk/75 lg:text-[18px]">
              Every mesh is only as dependable as the consistency behind every weld. Our
              manufacturing approach focuses on dimensional accuracy, dependable materials, quality
              control and repeatable production.
            </p>
          </FadeUp>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-x-10 gap-y-px sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <FadeUp
              key={principle.title}
              delay={i * 0.08}
              className="border-t border-metal/20 pt-6"
            >
              <MonoLabel>{`0${i + 1}`}</MonoLabel>
              <dt className="mt-4 font-display text-[21px] font-medium leading-tight tracking-tight text-chalk">
                {principle.title}
              </dt>
              <dd className="mt-3 max-w-xs text-[14px] leading-relaxed text-chalk/55">
                {principle.copy}
              </dd>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
}
export { Manufacturing };
