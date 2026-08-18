import React from 'react';
import { figures } from '../../data/site';
import { FadeUp } from '../ui/AnimatedText';
import { MonoLabel } from '../ui/MonoLabel';
import { StatCounter } from '../ui/StatCounter';

/** Bridges the cream editorial block into the dark manufacturing chapter. */
export function Figures() {
  return (
    <section
      className="relative w-full bg-bone pt-8 pb-0"
      aria-labelledby="figures-heading">
      
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="flex items-center gap-4 border-t border-ink/10 pt-8">
          <MonoLabel tone="ink">/ Since 2013</MonoLabel>
          <span className="h-px flex-1 bg-ink/10" />
          <MonoLabel tone="ink">SWPL / Nagpur</MonoLabel>
        </div>
        <h2 id="figures-heading" className="sr-only">
          Superior Weldmesh in numbers
        </h2>
        <dl className="grid grid-cols-2 gap-y-12 py-16 lg:grid-cols-4 lg:py-24">
          {figures.map((figure, i) =>
          <FadeUp
            key={figure.label}
            delay={i * 0.07}
            className={`px-2 lg:px-8 ${i > 0 ? 'lg:border-l lg:border-ink/12' : ''}`}>
            
              <dd className="font-display font-semibold leading-none tracking-tightest text-ink text-[clamp(2.75rem,6vw,4.5rem)]">
                <StatCounter
                value={figure.value}
                suffix={figure.suffix}
                staticLabel={figure.static} />
              
              </dd>
              <dt className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                {figure.label}
              </dt>
            </FadeUp>
          )}
        </dl>
      </div>
      {/* continuity: cream dissolves into charcoal for the product chapter */}
      <div
        aria-hidden="true"
        className="h-40 w-full"
        style={{
          background:
          'linear-gradient(to bottom, #F2F1EC 0%, #C9C7C1 45%, #2A2F33 82%, #0B0E10 100%)'
        }} />
      
    </section>);

}