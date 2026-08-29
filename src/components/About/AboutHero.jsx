import { ArrowDownRightIcon } from 'lucide-react';
import { siteImages } from '../../data/site';

function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[660px] items-end overflow-hidden bg-ink pt-32 sm:min-h-[720px] lg:min-h-[780px]">
      <img
        src={siteImages.about}
        alt="Welded wire mesh manufacturing equipment in Superior Weldmesh's production environment"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/65 to-ink/20" />
      <div className="mx-auto grid w-full max-w-shell gap-10 px-6 pb-12 lg:grid-cols-12 lg:px-10 lg:pb-16">
        <div className="lg:col-span-9">
          <p className="font-mono text-[10px] uppercase tracking-[.24em] text-molten">
            / About Superior Weldmesh
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(3.4rem,9.5vw,8rem)] font-semibold uppercase leading-[.86] tracking-tightest text-chalk">
            We make strength visible.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
            Engineered wire mesh and fencing systems, manufactured for the places that demand
            dependable boundaries, reinforcement and protection.
          </p>
        </div>
        <a
          href="#who-we-are"
          className="hidden self-end justify-self-end border border-metal/25 p-4 text-chalk transition hover:border-molten hover:text-molten lg:block"
          aria-label="Read about Superior Weldmesh"
        >
          <ArrowDownRightIcon className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}

export { AboutHero };
