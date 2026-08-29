import { useEffect, useState } from 'react';
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

function ScrollOverlap({ children, layer, first = false }) {
  return (
    <div
      className={`relative ${first ? '' : '-mt-6 sm:-mt-8 lg:-mt-12'}`}
      style={{ zIndex: layer }}
    >
      {children}
    </div>
  );
}

function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    document.title =
      'Superior Weldmesh \u2014 Wire Mesh & Fencing Solutions Engineered for Strength';
  }, []);
  return (
    <div className="w-full bg-ink">
      <Loader onDone={() => setReady(true)} />
      <Cursor />
      <Navigation />
      <main>
        <ScrollOverlap first layer={0}>
          <Hero ready={ready} />
        </ScrollOverlap>
        <ScrollOverlap layer={1}>
          <StatementMarquee />
        </ScrollOverlap>
        <ScrollOverlap layer={2}>
          <About />
        </ScrollOverlap>
        <ScrollOverlap layer={3}>
          <Figures />
        </ScrollOverlap>
        <ScrollOverlap layer={4}>
          <ProductShowcase />
        </ScrollOverlap>
        <ScrollOverlap layer={5}>
          <Manufacturing />
        </ScrollOverlap>
        <ScrollOverlap layer={6}>
          <Quality />
        </ScrollOverlap>
        <ScrollOverlap layer={7}>
          <Applications />
        </ScrollOverlap>
        <ScrollOverlap layer={8}>
          <Configurator />
        </ScrollOverlap>
        <ScrollOverlap layer={9}>
          <WeightCalculator />
        </ScrollOverlap>
        <ScrollOverlap layer={10}>
          <Differentiators />
        </ScrollOverlap>
        <ScrollOverlap layer={11}>
          <ProductTicker />
        </ScrollOverlap>
        <ScrollOverlap layer={12}>
          <Testimonials />
        </ScrollOverlap>
        <ScrollOverlap layer={13}>
          <FinalCTA />
        </ScrollOverlap>
      </main>
      <ScrollOverlap layer={14}>
        <Footer />
      </ScrollOverlap>
    </div>
  );
}
export { Home };
