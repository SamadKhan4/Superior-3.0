import { ApplicationSlider } from './ApplicationSlider';
import { ApplicationsHero } from './ApplicationsHero';
import { ApplicationTimeline } from './ApplicationTimeline';

function Applications() {
  return (
    <>
      <ApplicationsHero />
      <ApplicationTimeline />
      <ApplicationSlider />
    </>
  );
}

export { Applications };
