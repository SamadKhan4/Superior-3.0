import { useEffect, useMemo, useState } from 'react';
import { RotateCcwIcon } from 'lucide-react';
import { Cursor } from '../components/Cursor';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/sections/Footer';
import { MeshBackdrop } from '../components/ui/MeshBackdrop';
import { MonoLabel } from '../components/ui/MonoLabel';

const FEET_TO_METRES = 0.3048;
const WIRE_WEIGHT_DIVISOR = 162.2;
const INITIAL_FIELDS = {
  linePitch: '',
  lineDiameter: '',
  crossPitch: '',
  crossDiameter: '',
  rollHeight: '',
  rollLength: '',
};

function toPositiveNumber(value) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function CalculatorInput({ id, label, unit, value, onChange }) {
  return (
    <label htmlFor={id} className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
        {label} ({unit})
      </span>
      <div className="mt-2 flex items-center border border-ink/20 bg-chalk transition-colors focus-within:border-molten">
        <input
          id={id}
          type="number"
          min="0"
          step="any"
          inputMode="decimal"
          value={value}
          placeholder="0.00"
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent px-4 py-3 font-mono text-base text-ink outline-none placeholder:text-ink/35"
        />
        <span className="border-l border-ink/15 px-3 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
          {unit}
        </span>
      </div>
    </label>
  );
}

function WeightCalculatorPage() {
  const [fields, setFields] = useState(INITIAL_FIELDS);

  useEffect(() => {
    document.title = 'Weight Calculator | Superior Weldmesh';
    window.scrollTo(0, 0);
  }, []);

  const result = useMemo(() => {
    const linePitch = toPositiveNumber(fields.linePitch);
    const lineDiameter = toPositiveNumber(fields.lineDiameter);
    const crossPitch = toPositiveNumber(fields.crossPitch);
    const crossDiameter = toPositiveNumber(fields.crossDiameter);
    const rollHeightFeet = toPositiveNumber(fields.rollHeight);
    const rollLengthFeet = toPositiveNumber(fields.rollLength);

    if (
      !linePitch ||
      !lineDiameter ||
      !crossPitch ||
      !crossDiameter ||
      !rollHeightFeet ||
      !rollLengthFeet
    ) {
      return null;
    }

    const rollHeightMetres = rollHeightFeet * FEET_TO_METRES;
    const rollLengthMetres = rollLengthFeet * FEET_TO_METRES;
    const lineWireCount = Math.floor((rollHeightMetres * 1000) / linePitch) + 1;
    const crossWireCount = Math.floor((rollLengthMetres * 1000) / crossPitch) + 1;
    const lineWireWeight =
      lineWireCount * rollLengthMetres * (lineDiameter ** 2 / WIRE_WEIGHT_DIVISOR);
    const crossWireWeight =
      crossWireCount * rollHeightMetres * (crossDiameter ** 2 / WIRE_WEIGHT_DIVISOR);

    return lineWireWeight + crossWireWeight;
  }, [fields]);

  const updateField = (key, value) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  const resetCalculator = () => setFields(INITIAL_FIELDS);

  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Cursor />
      <Navigation />
      <main>
        <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 sm:pt-40 lg:pb-24 lg:pt-48">
          <MeshBackdrop className="opacity-45" cell={60} welds={7} />
          <div className="relative mx-auto max-w-shell px-6 lg:px-10">
            <MonoLabel>/ Engineering Tool</MonoLabel>
            <h1 className="mt-5 max-w-5xl font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold uppercase leading-[0.9] tracking-tightest">
              Weldmesh weight calculator.
            </h1>
            <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/70 sm:text-lg">
              Enter the line wire, cross wire and roll dimensions to estimate the total steel weight
              of one roll.
            </p>
          </div>
        </section>

        <section className="relative bg-bone py-16 text-ink lg:py-24">
          <div className="mesh-grid-light pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-shell px-6 lg:px-10">
            <form
              className="border border-ink/15 bg-bone shadow-[0_24px_70px_rgba(11,14,16,0.08)]"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 px-5 py-5 sm:px-8">
                <div>
                  <MonoLabel tone="ink">Mesh Weight Estimator</MonoLabel>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    All dimensions must be greater than zero.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="inline-flex items-center gap-2 border border-ink/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-molten hover:text-molten"
                >
                  <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Reset
                </button>
              </div>

              <div className="grid lg:grid-cols-[minmax(220px,0.75fr)_minmax(0,1.25fr)]">
                <div className="border-b border-ink/15 px-5 py-7 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-molten">
                    01 / Line Wire to Line Wire
                  </span>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
                    Wires running along the roll length and spaced across the roll height.
                  </p>
                </div>
                <div className="grid gap-6 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:py-10">
                  <CalculatorInput
                    id="line-wire-pitch"
                    label="Pitch"
                    unit="MM"
                    value={fields.linePitch}
                    onChange={(value) => updateField('linePitch', value)}
                  />
                  <CalculatorInput
                    id="line-wire-diameter"
                    label="Diameter of Wire"
                    unit="MM"
                    value={fields.lineDiameter}
                    onChange={(value) => updateField('lineDiameter', value)}
                  />
                </div>
              </div>

              <div className="grid border-t border-ink/15 lg:grid-cols-[minmax(220px,0.75fr)_minmax(0,1.25fr)]">
                <div className="border-b border-ink/15 px-5 py-7 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-molten">
                    02 / Cross Wire to Cross Wire
                  </span>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
                    Wires running across the roll height and spaced along the roll length.
                  </p>
                </div>
                <div className="grid gap-6 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:py-10">
                  <CalculatorInput
                    id="cross-wire-pitch"
                    label="Pitch"
                    unit="MM"
                    value={fields.crossPitch}
                    onChange={(value) => updateField('crossPitch', value)}
                  />
                  <CalculatorInput
                    id="cross-wire-diameter"
                    label="Diameter of Wire"
                    unit="MM"
                    value={fields.crossDiameter}
                    onChange={(value) => updateField('crossDiameter', value)}
                  />
                </div>
              </div>

              <div className="grid border-t border-ink/15 gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:py-10">
                <CalculatorInput
                  id="roll-height"
                  label="Height of Roll"
                  unit="Feet"
                  value={fields.rollHeight}
                  onChange={(value) => updateField('rollHeight', value)}
                />
                <CalculatorInput
                  id="roll-length"
                  label="Length of Roll"
                  unit="Feet"
                  value={fields.rollLength}
                  onChange={(value) => updateField('rollLength', value)}
                />
                <div aria-live="polite">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                    Total Weight (KG/Roll)
                  </span>
                  <div className="mt-2 flex min-h-[50px] items-center border border-molten bg-ink px-4 py-3">
                    <strong className="min-w-0 flex-1 font-display text-2xl font-semibold text-chalk">
                      {result === null ? '0.00' : result.toFixed(2)}
                    </strong>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-molten">
                      KG/Roll
                    </span>
                  </div>
                </div>
              </div>
            </form>

            <p className="mt-5 max-w-3xl text-xs leading-relaxed text-ink/50">
              This is an estimated theoretical weight based on steel wire dimensions. Actual roll
              weight can vary with manufacturing tolerances, coating and edge configuration.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export { WeightCalculatorPage };
