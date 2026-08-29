import { tickerItems } from '../../data/site';
function ProductTicker() {
  const run = (
    <span className="flex shrink-0 items-center">
      {tickerItems.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.28em] text-chalk/70 sm:text-[12px]">
            {item}
          </span>
          <span aria-hidden="true" className="mx-6 h-[6px] w-[6px] shrink-0 bg-molten sm:mx-8" />
        </span>
      ))}
    </span>
  );
  return (
    <div className="w-full overflow-hidden border-y border-metal/15 bg-ink py-5">
      <h2 className="sr-only">Product range</h2>
      <div className="mask-fade-x flex w-max animate-marquee-right">
        {run}
        {run}
      </div>
    </div>
  );
}
export { ProductTicker };
