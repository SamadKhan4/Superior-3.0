import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { siteImages } from '../../data/site';
import { AnimatedText, FadeUp } from '../ui/AnimatedText';
import { Button } from '../ui/Button';
import { MonoLabel } from '../ui/MonoLabel';
const ANNOTATIONS = [
  'Material / MS \xB7 GI \xB7 SS',
  'Application / Industrial',
  'Process / Precision Welding',
];
function About() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const labelY = useTransform(scrollYProgress, [0, 1], ['-14%', '14%']);
  return (
    <section
      id="about"
      className="relative w-full bg-bone py-24 lg:py-36"
      aria-labelledby="about-heading"
    >
      <div className="mesh-grid-light pointer-events-none absolute inset-0 opacity-60" />
      <div
        ref={ref}
        className="relative mx-auto grid max-w-shell grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10"
      >
        <div className="lg:col-span-6 lg:pt-10">
          <div className="mb-6 flex items-center gap-4">
            <MonoLabel>/ Who We Are</MonoLabel>
            <span className="h-px w-24 bg-ink/15" />
          </div>
          <AnimatedText
            as="h2"
            lines={['Built on precision.', 'Driven by reliability.']}
            className="font-display font-semibold uppercase leading-[0.98] tracking-tightest text-ink text-[clamp(2.4rem,5.4vw,4.5rem)]"
          />
          <div id="about-heading" className="sr-only">
            About Superior Weldmesh
          </div>
          <div className="mt-10 max-w-xl space-y-6 text-[16px] leading-relaxed text-ink/70">
            <FadeUp>
              <p>
                Superior Weldmesh has been manufacturing engineered wire mesh and fencing solutions
                since 2013, serving requirements across infrastructure, construction, architecture,
                industrial and perimeter-security applications.
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p>
                Our production is built around consistency: controlled wire specifications,
                repeatable weld integrity and finishing that holds up in the field. Most orders we
                take are not catalogue items — they are drawn from a project specification,
                engineered around an aperture, coating or panel size, and produced to that drawing.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p>
                That approach has built long-running relationships with contractors, exporters,
                architects and industrial buyers who need a mesh supplier that executes reliably
                rather than approximately.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2} className="mt-10">
            <Button href="#products" variant="light" arrow="diagonal">
              Discover Superior
            </Button>
          </FadeUp>
        </div>
        <div className="relative lg:col-span-5 lg:col-start-8">
          <motion.div className="relative overflow-hidden" style={reduce ? void 0 : { y: imageY }}>
            <motion.img
              src={siteImages.about}
              alt="Automated welding machine producing welded wire mesh on the production floor"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
              initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0% 0% 100% 0%)' }}
              whileInView={reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* measurement ticks along the image edge */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 flex w-3 flex-col justify-between py-6"
            >
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className={`block h-px ${i % 4 === 0 ? 'w-3 bg-molten' : 'w-1.5 bg-bone/70'}`}
                />
              ))}
            </div>
          </motion.div>
          <motion.ul
            className="mt-6 space-y-2 lg:absolute lg:-left-28 lg:bottom-16 lg:mt-0 lg:space-y-3"
            style={reduce ? void 0 : { y: labelY }}
          >
            {ANNOTATIONS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 bg-bone/90 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60"
              >
                <span className="h-[5px] w-[5px] bg-molten" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
export { About };
