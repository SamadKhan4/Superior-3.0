import React, { useEffect, useState } from 'react';
import { Cursor } from '../components/Cursor';
import { Loader } from '../components/Loader';
import { Navigation } from '../components/Navigation';
import { About } from '../components/sections/About';
import { Applications } from '../components/sections/Applications';
import { Configurator } from '../components/sections/Configurator';
import { Differentiators } from '../components/sections/Differentiators';
import { Figures } from '../components/sections/Figures';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Footer } from '../components/sections/Footer';
import { Hero } from '../components/sections/Hero';
import { Manufacturing } from '../components/sections/Manufacturing';
import { ProductShowcase } from '../components/sections/ProductShowcase';
import { ProductTicker } from '../components/sections/ProductTicker';
import { Quality } from '../components/sections/Quality';
import { StatementMarquee } from '../components/sections/StatementMarquee';
import { Testimonials } from '../components/sections/Testimonials';
import { WeightCalculator } from '../components/sections/WeightCalculator';

export function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.title =
    'Superior Weldmesh — Wire Mesh & Fencing Solutions Engineered for Strength';
  }, []);

  return (
    <div className="w-full bg-ink">
      <Loader onDone={() => setReady(true)} />
      <Cursor />
      <Navigation />
      <main>
        <Hero ready={ready} />
        <StatementMarquee />
        <About />
        <Figures />
        <ProductShowcase />
        <Manufacturing />
        <Quality />
        <Applications />
        <Configurator />
        <WeightCalculator />
        <Differentiators />
        <ProductTicker />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>);

}