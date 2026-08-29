import { siteImages } from '../../data/site';

function ApplicationsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 sm:pt-40 lg:pt-48">
      <img
        src={siteImages.weld}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <p className="font-mono text-[10px] uppercase tracking-[.24em] text-molten">
          / Applications
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.3rem,8vw,6.5rem)] font-semibold uppercase leading-[.88] tracking-tightest">
          Beyond the boundary.
        </h1>
        <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
          From practical site systems to architectural and landscape uses, wire mesh helps make
          spaces stronger, more ordered and more useful.
        </p>
      </div>
    </section>
  );
}

export { ApplicationsHero };
