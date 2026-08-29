const PHRASES = ['Precision', 'Security', 'Durability', 'Quality', 'Custom Engineering'];
function MeshMark() {
  return (
    <span
      aria-hidden="true"
      className="mx-8 inline-grid h-6 w-6 shrink-0 grid-cols-2 grid-rows-2 gap-[3px] align-middle"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="block bg-molten" />
      ))}
    </span>
  );
}
function StatementMarquee() {
  const run = (
    <span className="flex shrink-0 items-center">
      {PHRASES.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="whitespace-nowrap font-display text-[13vw] font-semibold uppercase leading-none tracking-tightest text-ink sm:text-[8.5vw]">
            {phrase}
          </span>
          <MeshMark />
        </span>
      ))}
    </span>
  );
  return (
    <section className="relative w-full overflow-hidden bg-bone py-10 lg:py-14">
      <h2 className="sr-only">Precision, security, durability, quality and custom engineering</h2>
      <div className="mask-fade-x flex w-max animate-marquee-left">
        {run}
        {run}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-ink/10" />
    </section>
  );
}
export { StatementMarquee };
