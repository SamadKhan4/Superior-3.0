import { useEffect } from 'react';
import { Applications } from '../components/Applications/Applications';
import { Cursor } from '../components/Cursor';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/sections/Footer';

function ApplicationsPage() {
  useEffect(() => {
    document.title = 'Applications | Superior Weldmesh';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Cursor />
      <Navigation />
      <main>
        <Applications />
      </main>
      <Footer />
    </div>
  );
}

export { ApplicationsPage };
