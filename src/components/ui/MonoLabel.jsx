const tones = {
  molten: 'text-molten',
  steel: 'text-steel',
  ink: 'text-ink/55',
};
function MonoLabel({ children, className = '', tone = 'molten' }) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.22em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
export { MonoLabel };
