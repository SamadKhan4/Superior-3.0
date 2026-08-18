import React from 'react';

type MonoLabelProps = {
  children: React.ReactNode;
  className?: string;
  tone?: 'molten' | 'steel' | 'ink';
};

const tones: Record<string, string> = {
  molten: 'text-molten',
  steel: 'text-steel',
  ink: 'text-ink/55'
};

export function MonoLabel({
  children,
  className = '',
  tone = 'molten'
}: MonoLabelProps) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.22em] ${tones[tone]} ${className}`}>
      
      {children}
    </span>);

}