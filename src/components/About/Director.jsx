function Director() {
  return (
    <section className="bg-graphite py-20 lg:py-28">
      <div className="mx-auto grid max-w-shell gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="relative overflow-hidden bg-ink lg:col-span-4">
          <img
            src="/image.png"
            alt="Mr. Sanjay Pugalia, Director of Superior Weld Mesh"
            className="aspect-[4/5] h-full w-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
            / Leadership
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5.5vw,5.2rem)] font-semibold uppercase leading-[.88] tracking-tightest">
            Mr. Sanjay Pugalia <span className="text-chalk/55">/ Director</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-chalk/80">
            His business insight and domain knowledge have guided Superior Weld Mesh&apos;s growth
            and helped the company build a distinct position in the market.
          </p>
          <div className="mt-10 border-t border-metal/20 pt-7">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Managing Director
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase leading-none text-chalk sm:text-4xl">
              Mr. Manish Pugalia
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-chalk/70">
              A passionate innovator and compassionate team leader, he champions integrity in the
              company&apos;s intent and the strong, reliable bonds it maintains with clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Director };
