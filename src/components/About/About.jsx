import { AboutHero } from './AboutHero';
import { AboutProducts } from './AboutProducts';
import { Certifications } from './Certifications';
import { CompanyStrengths } from './CompanyStrengths';
import { Director } from './Director';
import { MissionVision } from './MissionVision';
import { Services } from './Services';
import { WhoWeAre } from './WhoWeAre';

function About() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <Director />
      <MissionVision />
      <CompanyStrengths />
      <AboutProducts />
      <Certifications />
      <Services />
    </>
  );
}

export { About };
