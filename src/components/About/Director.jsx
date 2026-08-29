function Director() {
  return (
    <section className="bg-graphite py-20 lg:py-28">
      <div className="mx-auto grid max-w-shell gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="relative overflow-hidden bg-ink lg:col-span-4">
          <img
            src="/image.png"
            alt="Mr. Sanjay Pugalia, Director of Superior Weldmesh"
            className="aspect-[4/5] h-full w-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
            / Our inspiration
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5.5vw,5.2rem)] font-semibold uppercase leading-[.88] tracking-tightest">
            Mr. Sanjay Pugalia <span className="text-chalk/55">/ Director</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-chalk/80">
            With industry experience since 1994, his leadership and market knowledge have helped
            guide Superior Weldmesh&apos;s growth as a brand.
          </p>
          <div className="mt-10 border-t border-metal/20 pt-7">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              Director&apos;s statement
            </p>
            <blockquote className="mt-4 max-w-3xl font-display text-2xl leading-tight text-chalk sm:text-3xl">
              “At Superior Weld Mesh, we strive to make every philosophy a reality by prioritising
              requirements over financial feasibility—working hard to construct a better world of
              infrastructure.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Director };
