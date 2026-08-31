const PILLARS = ['Trust', 'Quality', 'Reliability'];

function MissionVision() {
  return (
    <section className="bg-bone py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="grid gap-px overflow-hidden border border-ink/15 lg:grid-cols-2">
          <article className="bg-chalk/45 p-7 sm:p-10 lg:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Mission
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold uppercase leading-[.92] tracking-tightest">
              Make execution faster.
            </h2>
            <p className="mt-7 max-w-xl leading-relaxed text-ink/70">
              To pioneer high-performance, ready-to-use welded wire mesh and fencing solutions that
              turn time-consuming construction into streamlined, efficient execution through
              management excellence, advanced manufacturing and relentless dedication.
            </p>
          </article>
          <article className="bg-ink p-7 text-chalk sm:p-10 lg:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">/ Vision</p>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold uppercase leading-[.92] tracking-tightest">
              Raise the standard.
            </h2>
            <p className="mt-7 max-w-xl leading-relaxed text-chalk/70">
              To drive innovation and raise standards across infrastructure, safety and security,
              anchored by three enduring pillars.
            </p>
            <ul className="mt-9 grid grid-cols-3 gap-px border-y border-metal/20">
              {PILLARS.map((pillar, index) => (
                <li key={pillar} className="py-5 text-center">
                  <span className="block font-mono text-[9px] text-molten">0{index + 1}</span>
                  <span className="mt-2 block font-display text-base uppercase sm:text-xl">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export { MissionVision };
