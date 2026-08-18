import React from 'react';
import { AnimatedText } from './AnimatedText';
import { MonoLabel } from './MonoLabel';

type SectionHeadingProps = {
  label: string;
  lines: React.ReactNode[];
  tone?: 'dark' | 'light';
  className?: string;
  headingClassName?: string;
  as?: 'h2' | 'h3';
};

export function SectionHeading({
  label,
  lines,
  tone = 'dark',
  className = '',
  headingClassName = '',
  as = 'h2'
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="mb-6 flex items-center gap-4">
        <MonoLabel>{label}</MonoLabel>
        <span
          className={`h-px flex-1 max-w-[120px] ${tone === 'dark' ? 'bg-metal/25' : 'bg-ink/15'}`} />
        
      </div>
      <AnimatedText
        as={as}
        lines={lines}
        className={`font-display font-semibold uppercase leading-[0.98] tracking-tightest text-[clamp(2.5rem,6vw,4.75rem)] ${
        tone === 'dark' ? 'text-chalk' : 'text-ink'} ${
        headingClassName}`} />
      
    </div>);

}