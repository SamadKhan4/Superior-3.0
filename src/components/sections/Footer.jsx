const COLUMNS = [
  {
    title: 'Company',
    links: ['About', 'Quality', 'Certifications', 'Applications', 'Contact'],
  },
  {
    title: 'Products',
    links: [
      'Welded Wire Mesh',
      'V-Bend Fence',
      'Anti-Climb Fence',
      'Gabion Weldmesh',
      'TMT Weld Mesh',
      'Chain Link',
      'Security Wire',
      'Barricades',
    ],
  },
  {
    title: 'Tools',
    links: ['Weight Calculator', 'Standard Wire Gauge'],
  },
  {
    title: 'Connect',
    links: ['Call', 'Email', 'Location'],
  },
];
function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-metal/15 bg-ink">
      <div className="relative mx-auto max-w-shell px-6 pt-20 lg:px-10 lg:pt-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 min-[400px]:grid-cols-2 md:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-molten">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-[14px] text-chalk/60 transition-colors duration-200 hover:text-chalk"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-metal/15 pt-10 md:grid-cols-2">
          <div>
            <img
              src="/logo-light.webp"
              alt="Superior Weldmesh"
              className="h-10 w-auto object-contain object-left"
              loading="lazy"
            />
            <p className="mt-4 font-display text-[20px] font-medium text-chalk">
              Superior Weldmesh Private Limited
            </p>
            <p className="mt-2 text-[14px] text-steel">Nagpur, Maharashtra, India</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-molten md:text-right">
            Engineered for Strength / Built for Reliability
          </p>
        </div>
        {/* oversized faint wordmark */}
        <div aria-hidden="true" className="pointer-events-none mt-14 select-none overflow-hidden">
          <span className="block whitespace-nowrap font-display font-semibold uppercase leading-[0.8] tracking-tightest text-chalk/[0.045] text-[22vw]">
            Superior
          </span>
        </div>
        <div className="flex flex-col gap-4 border-t border-metal/15 py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
            © {/* @__PURE__ */ new Date().getFullYear()} Superior Weldmesh Pvt. Ltd. — Wire mesh
            manufacturer &amp; exporter, India
          </p>
          <ul className="flex flex-wrap gap-6">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <li key={item}>
                <a
                  href="#top"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel transition-colors duration-200 hover:text-chalk"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
