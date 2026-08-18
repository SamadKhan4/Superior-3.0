import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
const V_LINES = [18, 34, 50, 66, 82];
const H_LINES = [34, 50, 66];

type LoaderProps = {onDone: () => void;};

/** ~1.1s welded-mesh intro: steel lines draw in, intersect, then split to reveal the page. */
export function Loader({ onDone }: LoaderProps) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const total = reduce ? 200 : 1150;
    const t = window.setTimeout(() => {
      setVisible(false);
      onDone();
    }, total);
    return () => window.clearTimeout(t);
  }, [onDone, reduce]);

  return (
    <AnimatePresence>
      {visible &&
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        aria-hidden="true">
        
          {!reduce &&
        <>
              {V_LINES.map((left, i) =>
          <motion.span
            key={`v-${left}`}
            className="absolute top-0 w-px bg-metal/25"
            style={{ left: `${left}%` }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }} />

          )}
              {H_LINES.map((top, i) =>
          <motion.span
            key={`h-${top}`}
            className="absolute left-0 h-px bg-metal/25"
            style={{ top: `${top}%` }}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 0.55,
              ease: EASE,
              delay: 0.15 + i * 0.05
            }} />

          )}
              {H_LINES.map((top) =>
          V_LINES.map((left, i) =>
          <motion.span
            key={`p-${top}-${left}`}
            className="absolute h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-molten"
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 0.15], scale: [0.4, 1.5, 1] }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.5 + i * 0.04
            }} />

          )
          )}
            </>
        }

          <div className="relative text-center">
            <motion.div
            className="font-display text-[13vw] font-semibold leading-none tracking-tightest text-chalk sm:text-[86px]"
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}>
            
              SWPL
            </motion.div>
            <motion.div
            className="mt-3 font-mono text-[10px] uppercase tracking-[0.4em] text-steel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}>
            
              Engineered for Strength
            </motion.div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}