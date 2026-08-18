import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type StatCounterProps = {
  value: number;
  suffix?: string;
  staticLabel?: string | null;
  duration?: number;
  className?: string;
};

export function StatCounter({
  value,
  suffix = '',
  staticLabel = null,
  duration = 1500,
  className = ''
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(staticLabel ? 0 : 0);

  useEffect(() => {
    if (!inView || staticLabel) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduce, staticLabel]);

  return (
    <span ref={ref} className={className}>
      {staticLabel ?? `${display}${suffix}`}
    </span>);

}