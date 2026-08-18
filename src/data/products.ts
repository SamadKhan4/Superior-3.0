export type Product = {
  id: string;
  number: string;
  name: string;
  description: string;
  spec: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
{
  id: 'welded-wire-mesh',
  number: '01',
  name: 'Welded Wire Mesh',
  description:
  'Precision welded mesh manufactured in mild steel, galvanized iron and stainless steel for industrial, construction, reinforcement, storage and security applications.',
  spec: 'WIRE 1.6–8.0 MM / MS · GI · SS',
  image: "/78858287-a104-445b-918f-89ec65d6734e.jpg",

  alt: 'Rolls and panels of precision welded wire mesh stacked in a warehouse'
},
{
  id: 'v-bend-fence',
  number: '02',
  name: 'V-Bend Fence',
  description:
  'Rigid architectural fencing with reinforced V-shaped bends combining strength, visibility and contemporary perimeter design.',
  spec: 'PANEL 2.0–3.0 M / POWDER COATED',
  image: "/44070e11-f14e-4955-ac07-ab19f1009ca3.jpg",

  alt: 'Powder coated V-bend rigid mesh fencing around a modern institutional building'
},
{
  id: 'anti-climb-fence',
  number: '03',
  name: 'Anti-Climb Fence',
  description:
  'High-security mesh engineered with closely spaced openings for demanding perimeter-security environments.',
  spec: 'APERTURE 76.2 × 12.7 MM / 358',
  image: "/730ab70a-ec1f-48b0-94b7-574569e9f0db.jpg",

  alt: 'High security 358 anti-climb fencing at an infrastructure facility perimeter'
},
{
  id: 'gabion-weldmesh',
  number: '04',
  name: 'Gabion Weldmesh',
  description:
  'Customizable welded gabion systems for retaining structures, landscaping, architecture and erosion-management applications.',
  spec: 'BASKET 1 × 1 × 1 M / HOT DIP GI',
  image: "/fa1afbc5-1cf0-4df0-baf4-4d5551a5ea08.jpg",

  alt: 'Architectural gabion wall built from welded mesh baskets filled with stone'
},
{
  id: 'rebar-tmt-weld-mesh',
  number: '05',
  name: 'Rebar / TMT Weld Mesh',
  description:
  'Engineered reinforcement mesh developed for concrete construction, roads and structural applications requiring consistency and installation efficiency.',
  spec: 'BAR 6–12 MM / FE 500 D',
  image: "/70ef911b-233c-42bd-80ac-1aebd4df8c4e.jpg",

  alt: 'Steel reinforcement weld mesh sheets laid across a concrete construction slab'
},
{
  id: 'chain-link-fence',
  number: '06',
  name: 'Chain Link Fence',
  description:
  'Versatile chain-link fencing systems manufactured for industrial, commercial, agricultural and perimeter applications.',
  spec: 'DIAMOND 25–75 MM / GI · PVC',
  image: "/904ff769-3c8a-47b8-9574-cbe5cb5e7147.jpg",

  alt: 'Galvanized chain link fence with an industrial plant behind it'
},
{
  id: 'concertina-razor-wire',
  number: '07',
  name: 'Concertina / Razor Wire',
  description:
  'High-security perimeter solutions engineered to provide additional protection for sensitive properties and infrastructure.',
  spec: 'COIL 600–900 MM / BTO-22',
  image: "/56229124-aeeb-447b-b6b8-0fc3f28c3666.jpg",

  alt: 'Concertina razor wire coil running along a concrete perimeter wall'
},
{
  id: 'barbed-wire',
  number: '08',
  name: 'Barbed Wire',
  description:
  'Reliable boundary fencing manufactured for industrial, agricultural and perimeter applications.',
  spec: 'IS 278 / 2 PLY · 4 POINT',
  image: "/e5f3b460-fb51-4a29-80d0-5bea87154874.jpg",

  alt: 'Barbed wire boundary fence strands against a dusk industrial landscape'
},
{
  id: 'temporary-barricades',
  number: '09',
  name: 'Temporary Barricades',
  description:
  'Portable galvanized mesh barricading systems designed for construction sites, events, crowd control and temporary site protection.',
  spec: 'PANEL 2.2 × 1.2 M / PORTABLE',
  image: "/3c32d04f-3a6f-4b25-804d-084bfdc02859.jpg",

  alt: 'Portable galvanized mesh barricade panels lined up at a construction site'
}];