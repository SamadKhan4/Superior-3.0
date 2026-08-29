import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRightIcon, CheckIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Cursor } from '../components/Cursor';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/sections/Footer';
import { EnquiryForm } from '../components/sections/EnquiryForm';
import { About } from '../components/About/About';
import { WeldedWireMesh } from '../components/Products/WeldedWireMesh';
import { ChainLinkMesh } from '../components/Products/ChainLinkMesh';
import { BarbedWire } from '../components/Products/BarbedWire';
import { GabionWeldmesh } from '../components/Products/GabionWeldmesh';
import { ConcertinaRazorWire } from '../components/Products/ConcertinaRazorWire';
import { AntiClimbMesh } from '../components/Products/AntiClimbMesh';
import { RebarTmtWeldMesh } from '../components/Products/RebarTmtWeldMesh';
import { TemporaryBarricades } from '../components/Products/TemporaryBarricades';
import { applications, siteImages } from '../data/site';
import { products } from '../data/products';

const COMPANY = {
  phones: ['(+91) 97642 70290', '(+91) 87665 06146'],
  emails: ['info@superiorweldmesh.com', 'sales@superiorweldmesh.com'],
  address: 'Plot No. 263, P.H. No. 27, Bhandara Road, Wadoda, Nagpur, Maharashtra 441104',
};

const PRODUCT_DETAILS = {
  'welded-wire-mesh': {
    intro:
      'Welded wire mesh is made by straightening and spot welding quality carbon wires at every intersection, creating a strong and consistent mesh structure for industrial, construction and security uses.',
    formats: ['Mild Steel', 'Galvanized Iron', 'Stainless Steel', 'Rolls, panels and screens'],
    specs: [
      ['Mesh size', '17–300 mm'],
      ['Wire diameter', '1.00–12.00 mm'],
      ['Width', '0.5–2.5 m'],
      ['Length', 'As required'],
      ['Coating', 'GI / polyester or epoxy powder coat'],
      ['Standard', 'IS 4948:2002'],
    ],
    uses: [
      'Perimeter security',
      'Property demarcation',
      'Warehouse storage and lockers',
      'Animal enclosures',
    ],
  },
  'chain-link-fence': {
    intro:
      'Chain link fencing is a versatile, open-view boundary system for industrial facilities, commercial sites, farms and general perimeter protection.',
    formats: ['Galvanized iron', 'PVC coated', 'Custom heights and apertures'],
    specs: [
      ['Mesh opening', '25–75 mm'],
      ['Wire finish', 'GI / PVC coated'],
      ['Height', 'As required'],
      ['Supply', 'Rolls and complete fence systems'],
    ],
    uses: [
      'Industrial boundaries',
      'Agricultural land',
      'Sports and institutional campuses',
      'Warehouses and utility areas',
    ],
  },
  'barbed-wire': {
    intro:
      'Barbed wire uses twisted longitudinal wires with regularly spaced sharp barbs to create an economical and dependable boundary and deterrent system.',
    formats: ['Galvanized iron', 'PVC coated', 'Standard rolls'],
    specs: [
      ['Barb distance', '75 mm'],
      ['Wire combinations', '12×12 / 12×14 / 14×14'],
      ['Standard', 'IS 278'],
      ['Tensile strength', '550 N/m²'],
    ],
    uses: [
      'Agricultural and commercial land',
      'Highway and railway boundaries',
      'Security perimeters',
      'Military training areas',
    ],
  },
  'gabion-weldmesh': {
    intro:
      'Welded gabions are high-tensile galvanized wire baskets filled with stone to form permeable, stable gravity structures for landscape, civil and architectural work.',
    formats: ['Gabion walls', 'Gabion pillars', 'Mattresses and baskets', 'Architectural gabions'],
    specs: [
      ['Mesh size', '50–300 mm'],
      ['Wire diameter', '3.00–6.00 mm'],
      ['Width / height / length', '0.5–3 m'],
      ['Coating', 'GI / polyester or epoxy powder coat'],
    ],
    uses: ['Landscaping', 'Retaining walls', 'Landslide mitigation', 'Temporary flood walls'],
  },
  'concertina-razor-wire': {
    intro:
      'Concertina and razor wire systems add a high-security deterrent layer to sensitive perimeters, critical infrastructure and restricted facilities.',
    formats: ['Concertina coils', 'Razor wire coils', 'Perimeter topping systems'],
    specs: [
      ['Coil diameter', '600–900 mm'],
      ['Blade profile', 'BTO-22'],
      ['Finish', 'Galvanized'],
      ['Supply', 'Coils and installation accessories'],
    ],
    uses: [
      'Critical infrastructure',
      'Industrial compounds',
      'Restricted areas',
      'Boundary reinforcement',
    ],
  },
  'v-bend-fence': {
    intro:
      'V-bend mesh panels use architectural V folds to reinforce a rigid welded panel, combining an open view with a strong, visually ordered boundary.',
    formats: ['Rigid welded panels', 'GI panels', 'Powder-coated panels'],
    specs: [
      ['Mesh size', '200 × 50 mm'],
      ['Wire diameter', '4.00 mm'],
      ['Width', '1.00–2.50 m'],
      ['Length', 'As required'],
      ['Coating', 'GI / polyester or epoxy powder coat'],
    ],
    uses: [
      'Buildings and townships',
      'Highways and parking areas',
      'Industries',
      'Schools, colleges and sports arenas',
    ],
  },
  'anti-climb-fence': {
    intro:
      'Anti-climb fencing uses closely spaced welded apertures to limit footholds and handholds while maintaining visibility around high-security sites.',
    formats: ['358 mesh panels', 'Security gates', 'Integrated perimeter systems'],
    specs: [
      ['Aperture', '76.2 × 12.7 mm'],
      ['Configuration', '358 anti-climb'],
      ['Finish', 'GI / powder coated'],
      ['Panel height', 'As required'],
    ],
    uses: [
      'Utilities',
      'Defence and secure sites',
      'Data and industrial facilities',
      'Critical perimeters',
    ],
  },
  'rebar-tmt-weld-mesh': {
    intro:
      'Rebar and TMT welded mesh provides consistently spaced reinforcement for concrete works, helping teams plan placement and speed repetitive slab and road work.',
    formats: ['Fe 500D reinforcement mesh', 'Custom sheet sizes', 'Project-specific spacing'],
    specs: [
      ['Bar diameter', '6–12 mm'],
      ['Steel grade', 'Fe 500D'],
      ['Sheet size', 'As required'],
      ['Use', 'Concrete reinforcement'],
    ],
    uses: ['Slabs and floors', 'Roads and pavements', 'Precast work', 'Structural construction'],
  },
  'temporary-barricades': {
    intro:
      'Portable mesh barricades provide a quick, reusable boundary for construction activity, events, crowd management and short-term site protection.',
    formats: ['Galvanized portable panels', 'Interlocking bases', 'Project-ready barriers'],
    specs: [
      ['Panel size', '2.2 × 1.2 m'],
      ['Finish', 'Galvanized'],
      ['Format', 'Portable'],
      ['Use', 'Temporary site protection'],
    ],
    uses: [
      'Construction sites',
      'Events and crowd control',
      'Temporary work zones',
      'Site access management',
    ],
  },
};

function PageFrame({ title, children }) {
  useEffect(() => {
    document.title = `${title} | Superior Weldmesh`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Cursor />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function PageHero({ eyebrow, title, copy, image = siteImages.hero }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 sm:pt-40 lg:pt-48">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-molten">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold uppercase leading-[0.9] tracking-tightest">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-chalk/75 sm:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageFrame title="About us">
      <About />
    </PageFrame>
  );
}

function ApplicationsPage() {
  return (
    <PageFrame title="Applications">
      <PageHero
        eyebrow="/ Applications"
        title="Engineered for demanding environments."
        copy="Our mesh and fencing solutions are used where durability, consistency and controlled access matter."
        image={siteImages.inspection}
      />
      <section className="bg-bone py-16 text-ink lg:py-24">
        <div className="mx-auto grid max-w-shell gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {applications.map((item) => (
            <article key={item.name} className="group relative min-h-72 overflow-hidden bg-ink">
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-mono text-[10px] text-molten">{item.number}</span>
                <h2 className="mt-2 font-display text-3xl uppercase leading-none text-chalk">
                  {item.name}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

function ProductsPage() {
  return (
    <PageFrame title="Products">
      <PageHero
        eyebrow="/ Product range"
        title="Mesh and fencing systems."
        copy="Explore the product range and open any product for specifications, applications and supply options."
        image={siteImages.weld}
      />
      <section className="bg-ink py-16 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-px px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group border border-metal/15 bg-graphite p-6 transition-colors hover:bg-metal/10"
            >
              <span className="font-mono text-[10px] text-molten">{product.number}</span>
              <h2 className="mt-9 font-display text-3xl uppercase leading-none text-chalk">
                {product.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-steel">{product.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-chalk">
                View product <ArrowUpRightIcon className="h-3.5 w-3.5 text-molten" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.id === slug);
  if (!product) return <Navigate to="/products" replace />;
  if (slug === 'welded-wire-mesh') {
    return (
      <PageFrame title={product.name}>
        <WeldedWireMesh product={product} />
      </PageFrame>
    );
  }
  if (slug === 'chain-link-fence') {
    return (
      <PageFrame title={product.name}>
        <ChainLinkMesh product={product} />
      </PageFrame>
    );
  }
  if (slug === 'barbed-wire') {
    return (
      <PageFrame title={product.name}>
        <BarbedWire product={product} />
      </PageFrame>
    );
  }
  if (slug === 'gabion-weldmesh') {
    return (
      <PageFrame title={product.name}>
        <GabionWeldmesh product={product} />
      </PageFrame>
    );
  }
  if (slug === 'concertina-razor-wire') {
    return (
      <PageFrame title={product.name}>
        <ConcertinaRazorWire product={product} />
      </PageFrame>
    );
  }
  if (slug === 'anti-climb-fence') {
    return (
      <PageFrame title={product.name}>
        <AntiClimbMesh product={product} />
      </PageFrame>
    );
  }
  if (slug === 'rebar-tmt-weld-mesh') {
    return (
      <PageFrame title={product.name}>
        <RebarTmtWeldMesh product={product} />
      </PageFrame>
    );
  }
  if (slug === 'temporary-barricades') {
    return (
      <PageFrame title={product.name}>
        <TemporaryBarricades product={product} />
      </PageFrame>
    );
  }
  const detail = PRODUCT_DETAILS[slug];
  return (
    <PageFrame title={product.name}>
      <PageHero
        eyebrow={`/ Products / ${product.number}`}
        title={product.name}
        copy={detail.intro}
        image={product.image}
      />
      <section className="bg-bone py-16 text-ink lg:py-24">
        <div className="mx-auto grid max-w-shell gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <img
              src={product.image}
              alt={product.alt}
              className="aspect-[16/10] w-full object-cover"
            />
            <h2 className="mt-10 font-display text-4xl uppercase leading-none">Available in</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {detail.formats.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-t border-ink/15 pt-3 text-ink/75"
                >
                  <CheckIcon className="h-4 w-4 text-molten" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Specifications
            </p>
            <dl className="mt-5 border-t border-ink/15">
              {detail.specs.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 gap-4 border-b border-ink/15 py-4 text-sm"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[.12em] text-ink/55">
                    {label}
                  </dt>
                  <dd className="text-right font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#enquiry"
              className="mt-8 inline-flex items-center gap-2 bg-molten px-5 py-4 font-mono text-[10px] uppercase tracking-[.16em] text-ink"
            >
              Request a quote <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>
      <section className="bg-graphite py-16 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-10 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Applications
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-none">Where it works.</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {detail.uses.map((item, index) => (
              <li key={item} className="flex items-center gap-4 border-t border-metal/20 py-4">
                <span className="font-mono text-[10px] text-molten">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-chalk/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="enquiry" className="bg-ink py-16 lg:py-24">
        <div className="mx-auto max-w-shell px-6 lg:px-10">
          <EnquiryForm />
        </div>
      </section>
    </PageFrame>
  );
}

function ContactPage() {
  return (
    <PageFrame title="Contact">
      <PageHero
        eyebrow="/ Contact"
        title="Let’s connect."
        copy="Tell us your required product, dimensions, wire diameter, finish and quantity. Our team will help you move the enquiry forward."
        image={siteImages.cta}
      />
      <section className="bg-bone py-16 text-ink lg:py-24">
        <div className="mx-auto grid max-w-shell gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-molten">
              / Contact details
            </p>
            <div className="mt-8 space-y-8">
              <div>
                <PhoneIcon className="h-5 w-5 text-molten" />
                <p className="mt-3 text-lg font-medium">
                  {COMPANY.phones[0]}
                  <br />
                  {COMPANY.phones[1]}
                </p>
              </div>
              <div>
                <MailIcon className="h-5 w-5 text-molten" />
                <p className="mt-3 text-lg font-medium">
                  {COMPANY.emails[0]}
                  <br />
                  {COMPANY.emails[1]}
                </p>
              </div>
              <p className="max-w-sm leading-relaxed text-ink/70">
                Superior Weldmesh Private Limited
                <br />
                {COMPANY.address}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function NotFoundPage() {
  return (
    <PageFrame title="Page not found">
      <PageHero
        eyebrow="/ 404"
        title="Page not found."
        copy="The page you requested is not available. Return to the product range or the homepage."
      />
      <div className="bg-bone px-6 py-16 text-ink lg:px-10">
        <Link to="/" className="font-mono text-xs uppercase tracking-[.18em]">
          ← Back to home
        </Link>
      </div>
    </PageFrame>
  );
}

export { AboutPage, ApplicationsPage, ContactPage, NotFoundPage, ProductDetailPage, ProductsPage };
