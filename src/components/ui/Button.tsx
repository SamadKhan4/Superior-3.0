import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon, ArrowRightIcon } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'light';
  arrow?: 'diagonal' | 'right' | 'none';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const base =
'group relative inline-flex max-w-full items-center justify-center gap-3 overflow-hidden px-6 py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-offset-4 sm:px-7';

const variants: Record<string, string> = {
  primary: 'bg-molten text-ink hover:text-ink',
  outline: 'border border-metal/35 text-chalk hover:text-ink',
  light: 'border border-ink/25 text-ink hover:text-bone'
};

const fills: Record<string, string> = {
  primary: 'bg-bone',
  outline: 'bg-bone',
  light: 'bg-ink'
};

export function Button({
  children,
  href,
  variant = 'primary',
  arrow = 'none',
  className = '',
  type = 'button',
  onClick
}: ButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) / rect.width * 10,
      y: (e.clientY - (rect.top + rect.height / 2)) / rect.height * 6
    });
  };

  const content =
  <>
      <span
      aria-hidden="true"
      className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${fills[variant]}`} />
    
      <span className="relative z-10 translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[2px]">
        {children}
      </span>
      {arrow === 'diagonal' &&
    <ArrowUpRightIcon
      aria-hidden="true"
      className="relative z-10 h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />

    }
      {arrow === 'right' &&
    <ArrowRightIcon
      aria-hidden="true"
      className="relative z-10 h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />

    }
    </>;


  return (
    <motion.div
      ref={ref}
      className="inline-block"
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.4 }}>
      
      {href ?
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
          {content}
        </a> :

      <button
        type={type}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${className}`}>
        
          {content}
        </button>
      }
    </motion.div>);

}
