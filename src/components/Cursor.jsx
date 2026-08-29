import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState('default');
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 550, damping: 40, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 550, damping: 40, mass: 0.35 });
  useEffect(() => {
    const fine =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add('no-native-cursor');
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target;
      const holder = target?.closest?.('[data-cursor]');
      setMode(holder?.dataset.cursor || 'default');
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('no-native-cursor');
    };
  }, [x, y]);
  if (!enabled) return null;
  const expanded = mode !== 'default';
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[95] flex items-center justify-center rounded-full"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-molten bg-molten/95 font-mono text-[10px] uppercase tracking-[0.18em] text-ink"
        animate={{
          width: expanded ? 76 : 12,
          height: expanded ? 76 : 12,
          opacity: 1,
        }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      >
        {mode === 'view' && <span>View</span>}
        {mode === 'left' && <ArrowLeftIcon className="h-4 w-4" />}
        {mode === 'right' && <ArrowRightIcon className="h-4 w-4" />}
      </motion.div>
    </motion.div>
  );
}
export { Cursor };
