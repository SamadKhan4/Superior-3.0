import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedText, FadeUp } from '../ui/AnimatedText';
import { Button } from '../ui/Button';
import { MonoLabel } from '../ui/MonoLabel';
const FIELDS = [
  { key: 'diameter', label: 'Wire Diameter', unit: 'mm' },
  { key: 'opening', label: 'Mesh Opening', unit: 'mm' },
  { key: 'width', label: 'Width', unit: 'm' },
  { key: 'length', label: 'Length', unit: 'm' },
  { key: 'quantity', label: 'Quantity', unit: 'nos' },
];
const STEEL_DENSITY = 7850;
function WeightCalculator() {
  const [fields, setFields] = useState({
    diameter: '4',
    opening: '100',
    width: '2.4',
    length: '6',
    quantity: '10',
  });
  const result = useMemo(() => {
    const d = parseFloat(fields.diameter) / 1e3;
    const o = parseFloat(fields.opening) / 1e3;
    const w = parseFloat(fields.width);
    const l = parseFloat(fields.length);
    const q = parseFloat(fields.quantity);
    if ([d, o, w, l, q].some((n) => !Number.isFinite(n) || n <= 0)) return null;
    const area = (Math.PI * d * d) / 4;
    const wiresAcross = Math.floor(w / o) + 1;
    const wiresAlong = Math.floor(l / o) + 1;
    const totalLength = wiresAcross * l + wiresAlong * w;
    const perSheet = totalLength * area * STEEL_DENSITY;
    return { perSheet, total: perSheet * q };
  }, [fields]);
  const update = (key, value) => setFields((prev) => ({ ...prev, [key]: value }));
  return (
    <section
      id="calculator"
      className="relative w-full bg-bone py-24 lg:py-36"
      aria-labelledby="calculator-heading"
    >
      <div className="mesh-grid-light pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-shell grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5 lg:pt-6">
          <div className="mb-6 flex items-center gap-4">
            <MonoLabel>/ Engineering Tool</MonoLabel>
            <span className="h-px w-24 bg-ink/15" />
          </div>
          <AnimatedText
            as="h2"
            lines={['Calculate before', 'you specify.']}
            className="font-display font-semibold uppercase leading-[0.98] tracking-tightest text-ink text-[clamp(2.3rem,5vw,4rem)]"
          />
          <span id="calculator-heading" className="sr-only">
            Weight calculator
          </span>
          <FadeUp className="mt-8 max-w-md">
            <p className="text-[16px] leading-relaxed text-ink/70">
              Quickly estimate wire mesh weight based on your dimensional requirements — useful
              before you finalise quantities, freight or a tender submission.
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-10">
            <Button href="#calculator" variant="light" arrow="right">
              Open Weight Calculator
            </Button>
          </FadeUp>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="relative border border-ink/12 bg-chalk p-6 sm:p-9">
            {/* animated measurement lines */}
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px bg-molten"
              initial={{ width: 0 }}
              whileInView={{ width: '38%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute bottom-0 right-0 w-px bg-molten"
              initial={{ height: 0 }}
              whileInView={{ height: '32%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <MonoLabel tone="ink">Mesh Weight Estimator</MonoLabel>
              <MonoLabel>SWPL / Tool 01</MonoLabel>
            </div>
            <form
              className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
              onSubmit={(e) => e.preventDefault()}
            >
              {FIELDS.map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={`calc-${field.key}`}
                    className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50"
                  >
                    {field.label}
                  </label>
                  <div className="mt-2 flex items-baseline gap-2 border-b border-ink/20 pb-2 transition-colors duration-200 focus-within:border-molten">
                    <input
                      id={`calc-${field.key}`}
                      type="number"
                      min="0"
                      step="any"
                      inputMode="decimal"
                      value={fields[field.key]}
                      onChange={(e) => update(field.key, e.target.value)}
                      className="w-full bg-transparent font-mono text-[18px] text-ink outline-none placeholder:text-ink/30"
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                      {field.unit}
                    </span>
                  </div>
                </div>
              ))}
            </form>
            <div className="mt-10 border-t border-ink/12 pt-8">
              <MonoLabel tone="ink">Estimated Weight</MonoLabel>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-display font-semibold leading-none tracking-tightest text-ink text-[clamp(2.25rem,10vw,3.75rem)]">
                {result ? result.total.toFixed(1) : '\u2014'}
                <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-molten">
                  kg total
                </span>
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                {result
                  ? `${result.perSheet.toFixed(2)} kg per sheet \xB7 ${fields.quantity} nos \xB7 density 7850 kg/m\xB3`
                  : 'Enter positive dimensions to calculate'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { WeightCalculator };
