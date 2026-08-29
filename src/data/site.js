const heroStats = [
  { index: '01', label: 'Established', value: '2013' },
  { index: '02', label: 'Customers', value: '600+' },
  { index: '03', label: 'Solutions', value: 'Custom Engineered' },
];
const figures = [
  { value: 2013, suffix: '', label: 'Founded', static: null },
  { value: 600, suffix: '+', label: 'Satisfied Clients', static: null },
  { value: 20, suffix: '+', label: 'Professionals', static: null },
  { value: 0, suffix: '', label: 'Sizes & Specifications', static: 'Custom' },
];
const principles = [
  {
    title: 'Quality Control',
    copy: 'System-driven processes focused on dependable output.',
  },
  {
    title: 'Manufacturing Precision',
    copy: 'Controlled dimensions, wire specifications and finishing.',
  },
  {
    title: 'Custom Engineering',
    copy: 'Mesh sizes, dimensions, coatings and configurations developed around project needs.',
  },
  {
    title: 'Reliable Delivery',
    copy: 'Structured production and service designed around customer timelines.',
  },
];
const qualityItems = [
  {
    number: '01',
    title: 'Dedicated QA Team',
    copy: 'A team assigned to dimensional checks, weld integrity and finishing across every production batch.',
  },
  {
    number: '02',
    title: 'Product Inspection',
    copy: 'Wire diameter, aperture and panel geometry verified against the approved specification before dispatch.',
  },
  {
    number: '03',
    title: 'Third-Party Inspection Support',
    copy: 'We coordinate with client-appointed agencies and inspection bodies through the production window.',
  },
  {
    number: '04',
    title: 'Standards-Based Manufacturing',
    copy: 'Production planned around recognised material and reinforcement standards for each application.',
  },
  {
    number: '05',
    title: 'Technical Guidance',
    copy: 'Specification support on mesh selection, coating and installation efficiency at the enquiry stage.',
  },
  {
    number: '06',
    title: 'Timely Delivery',
    copy: 'Production sequencing and logistics planned against committed project timelines.',
  },
  {
    number: '07',
    title: 'Modern Machinery',
    copy: 'Multi-point welding lines maintained for repeatable output across long production runs.',
  },
];
const IMG = {
  infrastructure: '/6b8275f0-759e-48b8-9a8f-03b6d30658e8.jpg',
  warehouse: '/c4cd0941-b26b-4a42-863e-f8c5ae2b1237.jpg',
  security: '/3b1dcbe7-6f3f-4a64-a5bf-c1e472357ead.jpg',
  architecture: '/ac9a9c3b-1e2e-42f8-a997-e51a0e3b6e94.jpg',
  industrial: '/016ca7a0-8884-4189-9d78-c8775d086807.jpg',
  highway: '/72e1f884-d759-40de-b4f2-3e6ac73f74a0.jpg',
  rebar: '/70ef911b-233c-42bd-80ac-1aebd4df8c4e.jpg',
  gabion: '/fa1afbc5-1cf0-4df0-baf4-4d5551a5ea08.jpg',
  vbend: '/44070e11-f14e-4955-ac07-ab19f1009ca3.jpg',
  anticlimb: '/730ab70a-ec1f-48b0-94b7-574569e9f0db.jpg',
};
const applications = [
  {
    number: '01',
    name: 'Infrastructure',
    image: IMG.infrastructure,
    alt: 'Concrete highway bridge under construction with steel reinforcement mesh',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    number: '02',
    name: 'Construction',
    image: IMG.rebar,
    alt: 'Reinforcement weld mesh laid across a construction slab',
    span: 'md:col-span-2',
  },
  {
    number: '03',
    name: 'Industrial Facilities',
    image: IMG.industrial,
    alt: 'Industrial steel plant with mesh safety enclosures at dusk',
    span: 'md:col-span-2',
  },
  {
    number: '04',
    name: 'Perimeter Security',
    image: IMG.security,
    alt: 'Perimeter security fencing around an electrical substation at blue hour',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    number: '05',
    name: 'Defence',
    image: IMG.anticlimb,
    alt: 'High security anti-climb fencing at a restricted facility',
    span: 'md:col-span-2',
  },
  {
    number: '06',
    name: 'Architecture',
    image: IMG.architecture,
    alt: 'Contemporary building facade clad in welded mesh screens',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    number: '07',
    name: 'Highways',
    image: IMG.highway,
    alt: 'Highway with steel mesh crash barrier fencing along both sides',
    span: 'md:col-span-2',
  },
  {
    number: '08',
    name: 'Institutional Campuses',
    image: IMG.vbend,
    alt: 'V-bend fencing enclosing an institutional campus',
    span: 'md:col-span-2',
  },
  {
    number: '09',
    name: 'Warehouses',
    image: IMG.warehouse,
    alt: 'Warehouse interior with welded mesh storage partitions',
    span: 'md:col-span-4',
  },
  {
    number: '10',
    name: 'Landscaping',
    image: IMG.gabion,
    alt: 'Landscaped gabion retaining wall built from welded mesh baskets',
    span: 'md:col-span-2',
  },
];
const differentiators = [
  {
    number: '01',
    title: 'Manufacturing Expertise',
    copy: 'Products engineered around industrial requirements.',
  },
  {
    number: '02',
    title: 'Custom Specifications',
    copy: 'Flexible sizing, material and coating options.',
  },
  {
    number: '03',
    title: 'Quality Assurance',
    copy: 'Structured quality processes and inspection capability.',
  },
  {
    number: '04',
    title: 'Reliable Partnerships',
    copy: 'Focused on long-term relationships rather than transactional supply.',
  },
];
const tickerItems = [
  'WELDED MESH',
  'V-BEND',
  '358 ANTI-CLIMB',
  'GABIONS',
  'REINFORCEMENT MESH',
  'CHAIN LINK',
  'RAZOR WIRE',
  'BARBED WIRE',
  'BARRICADES',
];
const testimonials = [
  {
    quote:
      'Panel dimensions arrived exactly as specified across three consignments. That consistency is what keeps our reinforcement schedule on track.',
    name: 'Rajesh Kulkarni',
    company: 'Deshmukh Infra Projects',
    meta: 'Nagpur / Infrastructure Contracting',
  },
  {
    quote:
      'They engineered an anti-climb configuration around our substation drawings instead of pushing a standard panel at us.',
    name: 'Ananya Sharma',
    company: 'Vidarbha Power Transmission',
    meta: 'Maharashtra / Utilities',
  },
  {
    quote:
      'The gabion baskets held their geometry through installation on a difficult slope. Finishing quality was better than what we had been sourcing before.',
    name: 'Firoz Merchant',
    company: 'Atelier Ground Studio',
    meta: 'Mumbai / Landscape Architecture',
  },
  {
    quote:
      'Repeat orders have been straightforward for four years. Technical queries get answered by people who understand wire, not a call centre.',
    name: 'Suresh Iyer',
    company: 'Konkan Warehousing LLP',
    meta: 'Pune / Industrial Storage',
  },
];
const enquiryProducts = [
  'Welded Wire Mesh',
  'Chain Link',
  'Barbed Wire',
  'Gabion Weldmesh',
  'Concertina / Razor Wire',
  'V-Bend Fence',
  'Anti-Climb Fence',
  'Rebar / TMT Weld Mesh',
  'Temporary Barricades',
  'Other',
];
const siteImages = {
  hero: '/5d7e6e7d-3452-43d4-8e14-fb2b88a4bb90.jpg',
  about: '/4f12f0e9-34ad-421c-a491-3a48b82e9ab5.jpg',
  weld: '/9ca1d155-d3f6-419e-9d8d-f7e17e16d820.jpg',
  cta: '/dbe79c62-4afd-4651-b464-e9fdc003fc58.jpg',
  inspection: '/a89d2d62-3260-4785-bac1-8ebd35cf6803.jpg',
};
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#applications' },
  { label: 'Quality', href: '#quality' },
  { label: 'Weight Calculator', href: '#calculator' },
  { label: 'Contact', href: '#contact' },
];
export {
  applications,
  differentiators,
  enquiryProducts,
  figures,
  heroStats,
  navLinks,
  principles,
  qualityItems,
  siteImages,
  testimonials,
  tickerItems,
};
