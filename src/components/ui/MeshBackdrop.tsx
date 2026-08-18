import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type MeshBackdropProps = {
  className?: string;
  cell?: number;
  /** number of welding-point flashes distributed across the grid */
  welds?: number;
  tone?: 'dark' | 'light';
};

/**
 * The signature wire-mesh device: a 1px welded grid whose intersections
 * briefly flash molten orange, as if the mesh were being welded on screen.
 */
export function MeshBackdrop({
  className = '',
  cell = 56,
  welds = 8,
  tone = 'dark'
}: MeshBackdropProps) {
  const reduce = useReducedMotion();

  const points = React.useMemo(
    () =>
    Array.from({ length: welds }, (_, i) => ({
      left: `${i * 37 % 9 * 11 + 6}%`,
      top: `${i * 53 % 7 * 13 + 8}%`,
      delay: i * 0.9 % 6
    })),
    [welds]
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      
      <div
        className={tone === 'dark' ? 'absolute inset-0' : 'absolute inset-0'}
        style={{
          backgroundImage:
          tone === 'dark' ?
          'linear-gradient(to right, rgba(171,178,183,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(171,178,183,0.10) 1px, transparent 1px)' :
          'linear-gradient(to right, rgba(11,14,16,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,14,16,0.07) 1px, transparent 1px)',
          backgroundSize: `${cell}px ${cell}px`
        }} />
      
      {!reduce &&
      points.map((p, i) =>
      <motion.span
        key={i}
        className="absolute h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-molten"
        style={{ left: p.left, top: p.top }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] }}
        transition={{
          duration: 1.1,
          times: [0, 0.35, 1],
          ease: 'easeOut',
          repeat: Infinity,
          repeatDelay: 5.5,
          delay: p.delay
        }} />

      )}
    </div>);

}