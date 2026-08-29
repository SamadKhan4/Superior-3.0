import { ArrowUpRightIcon } from 'lucide-react';
import { applications } from '../../data/site';
import { AnimatedText, FadeUp } from '../ui/AnimatedText';
import { MonoLabel } from '../ui/MonoLabel';
function Applications() {
  return (
    <section
      id="applications"
      className="relative w-full bg-ink py-24 lg:py-36"
      aria-labelledby="applications-heading"
    >
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <MonoLabel>/ Applications</MonoLabel>
              <span className="h-px w-24 bg-metal/25" />
            </div>
            <AnimatedText
              as="h2"
              lines={['Built for the places', "that can't compromise."]}
              className="font-display font-semibold uppercase leading-[0.96] tracking-tightest text-chalk text-[clamp(2.4rem,5.6vw,4.5rem)]"
            />
            <span id="applications-heading" className="sr-only">
              Applications
            </span>
          </div>
          <FadeUp className="lg:col-span-4 lg:pt-8">
            <p className="text-[15px] leading-relaxed text-chalk/60">
              Our mesh ends up where failure is expensive — substations, highway corridors,
              warehouses, campuses and defence perimeters.
            </p>
          </FadeUp>
        </div>
        <ul className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-6 lg:mt-20">
          {applications.map((app, i) => (
            <li key={app.name} className={`${app.span} h-full`}>
              <FadeUp delay={(i % 3) * 0.06} className="h-full">
                <a
                  href="#contact"
                  data-cursor="view"
                  className="group relative flex h-full min-h-[220px] w-full items-end overflow-hidden bg-graphite"
                >
                  <img
                    src={app.image}
                    alt={app.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-steel group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 bg-ink/45 transition-colors duration-300 group-hover:bg-ink/65" />
                  <span className="mesh-grid-dense absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
                  <span className="absolute right-4 top-4 font-mono text-[10px] text-molten opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {app.number}
                  </span>
                  <span className="relative z-10 flex w-full items-center justify-between gap-3 p-5">
                    <span className="font-display text-[19px] font-medium uppercase leading-tight tracking-tight text-chalk transition-transform duration-300 ease-weld group-hover:-translate-y-0.5 sm:text-[22px]">
                      {app.name}
                    </span>
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 translate-x-2 text-molten opacity-0 transition-[transform,opacity] duration-300 ease-weld group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                </a>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export { Applications };
