import { AboutHero } from './AboutHero';
import { AboutProducts } from './AboutProducts';
import { Certifications } from './Certifications';
import { Director } from './Director';
import { Services } from './Services';
import { WhoWeAre } from './WhoWeAre';

function About() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <Director />
      <AboutProducts />
      <Certifications />
      <Services />
    </>
  );
}

export { About };
