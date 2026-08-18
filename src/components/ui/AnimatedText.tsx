import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type AnimatedTextProps = {
  lines: React.ReactNode[];
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  className?: string;
  lineClassName?: string;
  delay?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Overflow-clipped line reveal used for every large heading on the page.
 * Each line rises from translateY(100%) with a short stagger.
 */
export function AnimatedText({
  lines,
  as = 'h2',
  className = '',
  lineClassName = '',
  delay = 0
}: AnimatedTextProps) {
  const Tag = motion[as];
  const reduce = useReducedMotion();

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}>
      
      {lines.map((line, i) =>
      <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
          className={`block ${lineClassName}`}
          variants={{
            hidden: reduce ? { opacity: 0 } : { y: '100%' },
            visible: reduce ?
            { opacity: 1, transition: { duration: 0.3 } } :
            {
              y: 0,
              transition: {
                duration: 0.85,
                ease: EASE,
                delay: delay + i * 0.1
              }
            }
          }}>
          
            {line}
          </motion.span>
        </span>
      )}
    </Tag>);

}

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function FadeUp({
  children,
  className = '',
  delay = 0,
  distance = 24
}: FadeUpProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE, delay }}>
      
      {children}
    </motion.div>);

}