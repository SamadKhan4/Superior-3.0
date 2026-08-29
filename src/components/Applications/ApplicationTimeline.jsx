import { motion, useReducedMotion } from 'framer-motion';

const USES = [
  {
    title: 'Customizable mesh clip board',
    copy: 'An adaptable home and workspace organiser for study areas and offices: lightweight, low-maintenance and easy to customise.',
    image: '/ac9a9c3b-1e2e-42f8-a997-e51a0e3b6e94.jpg',
  },
  {
    title: 'Outdoor gabion walls',
    copy: 'An innovative landscape solution for green fencing, lawns, residences and public places—combining stone, structure and permeability.',
    image: '/fa1afbc5-1cf0-4df0-baf4-4d5551a5ea08.jpg',
  },
  {
    title: 'Wire net green walls',
    copy: 'A lighter, more adaptable support system for green walls, available in custom configurations for project requirements.',
    image: '/3b1dcbe7-6f3f-4a64-a5bf-c1e472357ead.jpg',
  },
  {
    title: 'Weldmesh shed',
    copy: 'A multipurpose enclosure approach for pet houses, outdoor seating areas, store houses and temporary shelters.',
    image: '/c4cd0941-b26b-4a42-863e-f8c5ae2b1237.jpg',
  },
  {
    title: 'U-shaped precast weldmesh',
    copy: 'A practical reinforcement option for construction cable trays, roadside and street drainage structures.',
    image: '/70ef911b-233c-42bd-80ac-1aebd4df8c4e.jpg',
  },
  {
    title: 'Classic racks',
    copy: 'Wire-mesh rack systems can organise cutlery, book shelves and accessories while keeping spaces open and easy to maintain.',
    image: '/9ca1d155-d3f6-419e-9d8d-f7e17e16d820.jpg',
  },
  {
    title: 'Concrete reinforcing mesh',
    copy: 'A rectangular or square welded-mesh fabric used to reinforce concrete work, helping improve bond and limit shrinkage cracking.',
    image: '/70ef911b-233c-42bd-80ac-1aebd4df8c4e.jpg',
  },
];

function ApplicationTimeline() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-bone py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
            / Application timeline
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold uppercase leading-[.9] tracking-tightest">
            One material. Many possibilities.
          </h2>
        </div>
        <div className="relative mt-16 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-ink/15 lg:before:left-1/2">
          {USES.map((item, index) => (
            <motion.article
              key={item.title}
              className={`relative grid gap-6 pb-14 last:pb-0 lg:grid-cols-2 lg:gap-16 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              initial={reduce ? false : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute left-0 top-3 h-6 w-6 rounded-full border border-molten bg-bone lg:left-1/2 lg:-translate-x-1/2" />
              <div className={index % 2 ? 'lg:text-right' : ''}>
                <span className="font-mono text-[10px] text-molten">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-3xl uppercase leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70 lg:ml-auto">
                  {item.copy}
                </p>
              </div>
              <div className="ml-10 overflow-hidden bg-ink lg:ml-0">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/9] h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ApplicationTimeline };
