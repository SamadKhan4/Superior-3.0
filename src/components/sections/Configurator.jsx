import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedText, FadeUp } from '../ui/AnimatedText';
import { Button } from '../ui/Button';
import { MonoLabel } from '../ui/MonoLabel';
const EASE = [0.22, 1, 0.36, 1];
const CONTROLS = [
  { key: 'material', label: 'Material', options: ['MS', 'GI', 'Stainless Steel'] },
  { key: 'pattern', label: 'Mesh Pattern', options: ['Square', 'Rectangular'] },
  { key: 'form', label: 'Form', options: ['Roll', 'Panel', 'Screen'] },
  { key: 'coating', label: 'Coating', options: ['GI', 'Powder Coated'] },
];
const WIRE_TONE = {
  MS: '#7C858B',
  GI: '#ABB2B7',
  'Stainless Steel': '#D6DBDE',
};
function Configurator() {
  const reduce = useReducedMotion();
  const [config, setConfig] = useState({
    material: 'GI',
    pattern: 'Square',
    form: 'Panel',
    coating: 'GI',
  });
  const stroke = config.coating === 'Powder Coated' ? '#F47B20' : WIRE_TONE[config.material];
  const cellW = config.pattern === 'Rectangular' ? 64 : 40;
  const cellH = 40;
  const opacity = config.form === 'Screen' ? 0.95 : config.form === 'Roll' ? 0.7 : 0.85;
  return (
    <section
      className="relative w-full overflow-hidden bg-graphite py-24 lg:py-32"
      aria-labelledby="configurator-heading"
    >
      <div className="relative mx-auto grid max-w-shell grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="mb-6 flex items-center gap-4">
            <MonoLabel>/ Custom Specification</MonoLabel>
            <span className="h-px w-24 bg-metal/25" />
          </div>
          <AnimatedText
            as="h2"
            lines={['Your requirement.', 'Our configuration.']}
            className="font-display font-semibold uppercase leading-[0.98] tracking-tightest text-chalk text-[clamp(2.3rem,5vw,4rem)]"
          />
          <span id="configurator-heading" className="sr-only">
            Mesh configurator
          </span>
          <FadeUp className="mt-8 max-w-md">
            <p className="text-[15px] leading-relaxed text-chalk/65">
              Adjust the variables the way a project drawing would. Material, aperture, form and
              coating all change what we set up on the line — dimensions are engineered to your
              specification.
            </p>
          </FadeUp>
          <div className="mt-10 space-y-7">
            {CONTROLS.map((control) => (
              <fieldset key={control.key}>
                <legend className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
                  {control.label}
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {control.options.map((option) => {
                    const selected = config[control.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={selected}
                        onClick={() =>
                          setConfig((prev) => ({
                            ...prev,
                            [control.key]: option,
                          }))
                        }
                        className={`border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 ${selected ? 'border-molten bg-molten text-ink' : 'border-metal/25 text-chalk/70 hover:border-metal/50 hover:text-chalk'}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
                Dimensions
              </p>
              <p className="mt-3 font-display text-[22px] text-chalk">Custom — to drawing</p>
            </div>
          </div>
          <FadeUp delay={0.1} className="mt-10">
            <Button href="#contact" variant="primary" arrow="diagonal">
              Discuss Your Requirement
            </Button>
          </FadeUp>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-square w-full overflow-hidden border border-metal/15 bg-ink">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 400"
              role="img"
              aria-label={`Mesh preview: ${config.material}, ${config.pattern} pattern, ${config.form} form, ${config.coating} coating`}
            >
              <motion.g animate={{ opacity }} transition={{ duration: 0.3, ease: EASE }}>
                {Array.from({ length: Math.ceil(400 / cellW) + 1 }).map((_, i) => (
                  <motion.line
                    key={`v${i}`}
                    x1={i * cellW}
                    y1={0}
                    x2={i * cellW}
                    y2={400}
                    stroke={stroke}
                    strokeWidth={config.form === 'Screen' ? 1 : 1.8}
                    initial={false}
                    animate={{ x1: i * cellW, x2: i * cellW }}
                    transition={{ duration: 0.35, ease: EASE }}
                  />
                ))}
                {Array.from({ length: Math.ceil(400 / cellH) + 1 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1={0}
                    y1={i * cellH}
                    x2={400}
                    y2={i * cellH}
                    stroke={stroke}
                    strokeWidth={config.form === 'Screen' ? 1 : 1.8}
                  />
                ))}
                {/* weld points at intersections */}
                {Array.from({ length: Math.ceil(400 / cellW) + 1 }).map((_, c) =>
                  Array.from({ length: Math.ceil(400 / cellH) + 1 }).map((_2, r) => (
                    <motion.circle
                      key={`p${c}-${r}`}
                      cx={c * cellW}
                      cy={r * cellH}
                      r={2.2}
                      fill="#F47B20"
                      initial={{ opacity: 0 }}
                      animate={reduce ? { opacity: 0.35 } : { opacity: [0, 0.9, 0.15] }}
                      transition={{
                        duration: 1.2,
                        repeat: reduce ? 0 : Infinity,
                        repeatDelay: 6,
                        delay: ((c + r) * 0.18) % 5,
                        ease: 'easeOut',
                      }}
                    />
                  ))
                )}
              </motion.g>
            </svg>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-chalk/70">
              <span className="text-molten">Preview</span>
              <span>{config.material}</span>
              <span>{config.pattern}</span>
              <span>{config.form}</span>
              <span>{config.coating}</span>
            </div>
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="h-3 w-px bg-molten" aria-hidden="true" />
              <span className="h-px w-3 bg-molten" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                Mesh Geometry
              </span>
            </div>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
            Indicative visualisation / final specification confirmed on enquiry
          </p>
        </div>
      </div>
    </section>
  );
}
export { Configurator };
