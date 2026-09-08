const products = [
  {
    id: 'welded-wire-mesh',
    number: '01',
    name: 'Welded Wire Mesh',
    description:
      'Precision welded mesh manufactured in mild steel, galvanized iron and stainless steel for industrial, construction, reinforcement, storage and security applications.',
    spec: 'WIRE 1.6\u20138.0 MM / MS \xB7 GI \xB7 SS',
    image: '/78858287-a104-445b-918f-89ec65d6734e.jpg',
    alt: 'Rolls and panels of precision welded wire mesh stacked in a warehouse',
  },
  {
    id: 'v-bend-fence',
    number: '02',
    name: 'V-Bend Fence',
    description:
      'Rigid architectural fencing with reinforced V-shaped bends combining strength, visibility and contemporary perimeter design.',
    spec: 'PANEL 2.0\u20133.0 M / POWDER COATED',
    image: '/44070e11-f14e-4955-ac07-ab19f1009ca3.jpg',
    alt: 'Powder coated V-bend rigid mesh fencing around a modern institutional building',
  },
  {
    id: 'anti-climb-fence',
    number: '03',
    name: 'Anti-Climb Fence',
    description:
      'High-security mesh engineered with closely spaced openings for demanding perimeter-security environments.',
    spec: 'APERTURE 76.2 \xD7 12.7 MM / 358',
    image: '/730ab70a-ec1f-48b0-94b7-574569e9f0db.jpg',
    alt: 'High security 358 anti-climb fencing at an infrastructure facility perimeter',
  },
  {
    id: 'gabion-weldmesh',
    number: '04',
    name: 'Gabion Weldmesh',
    description:
      'Customizable welded gabion systems for retaining structures, landscaping, architecture and erosion-management applications.',
    spec: 'BASKET 1 \xD7 1 \xD7 1 M / HOT DIP GI',
    image: '/fa1afbc5-1cf0-4df0-baf4-4d5551a5ea08.jpg',
    alt: 'Architectural gabion wall built from welded mesh baskets filled with stone',
  },
  {
    id: 'rebar-tmt-weld-mesh',
    number: '05',
    name: 'Rebar / TMT Weld Mesh',
    description:
      'Engineered reinforcement mesh developed for concrete construction, roads and structural applications requiring consistency and installation efficiency.',
    spec: 'BAR 6\u201312 MM / FE 500 D',
    image: '/70ef911b-233c-42bd-80ac-1aebd4df8c4e.jpg',
    alt: 'Steel reinforcement weld mesh sheets laid across a concrete construction slab',
  },
  {
    id: 'chain-link-fence',
    number: '06',
    name: 'Chain Link Fence',
    description:
      'Versatile chain-link fencing systems manufactured for industrial, commercial, agricultural and perimeter applications.',
    spec: 'DIAMOND 25\u201375 MM / GI \xB7 PVC',
    image: '/904ff769-3c8a-47b8-9574-cbe5cb5e7147.jpg',
    alt: 'Galvanized chain link fence with an industrial plant behind it',
  },
  {
    id: 'concertina-razor-wire',
    number: '07',
    name: 'Concertina / Razor Wire',
    description:
      'High-security perimeter solutions engineered to provide additional protection for sensitive properties and infrastructure.',
    spec: 'COIL 600\u2013900 MM / BTO-22',
    image: '/56229124-aeeb-447b-b6b8-0fc3f28c3666.jpg',
    alt: 'Concertina razor wire coil running along a concrete perimeter wall',
  },
  {
    id: 'barbed-wire',
    number: '08',
    name: 'Barbed Wire',
    description:
      'Reliable boundary fencing manufactured for industrial, agricultural and perimeter applications.',
    spec: 'IS 278 / 2 PLY \xB7 4 POINT',
    image: '/e5f3b460-fb51-4a29-80d0-5bea87154874.jpg',
    alt: 'Barbed wire boundary fence strands against a dusk industrial landscape',
  },
  {
    id: 'temporary-barricades',
    number: '09',
    name: 'Crowd Control Barricades',
    description:
      'Portable galvanized mesh barricading systems designed for construction sites, events, crowd control and temporary site protection.',
    spec: 'PANEL 2.2 \xD7 1.2 M / PORTABLE',
    image: '/3c32d04f-3a6f-4b25-804d-084bfdc02859.jpg',
    alt: 'Portable galvanized mesh barricade panels lined up at a construction site',
  },
  {
    id: 'seven-fence',
    number: '10',
    name: 'Seven Fence (P-Bend / BRC)',
    description:
      'Rolled-top welded mesh fencing with safe, smooth edges and clear through-vision for safety-conscious boundaries.',
    spec: '100 x 50 MM / 4.5-5 MM WIRE',
    image: '/44070e11-f14e-4955-ac07-ab19f1009ca3.jpg',
    alt: 'Rigid welded mesh fence panel with a safe rolled edge',
  },
  {
    id: 'twin-wire-fence',
    number: '11',
    name: 'Twin Wire Fence',
    description:
      'An ultra-rigid perimeter fence using dual horizontal wires for commercial, industrial and institutional security.',
    spec: '150 x 50 MM / 5-6 MM WIRE',
    image: '/730ab70a-ec1f-48b0-94b7-574569e9f0db.jpg',
    alt: 'High-security twin wire welded mesh perimeter fence',
  },
  {
    id: 'hot-dip-gi-welded-mesh',
    number: '12',
    name: 'Hot-Dip GI Welded Mesh',
    description:
      'Hot-dip galvanized welded mesh for corrosion-resistant outdoor, agricultural and industrial applications.',
    spec: '17-300 MM / 1-6 MM WIRE',
    image: '/78858287-a104-445b-918f-89ec65d6734e.jpg',
    alt: 'Hot-dip galvanized welded wire mesh roll',
  },
  {
    id: 'ms-welded-mesh',
    number: '13',
    name: 'MS Welded Mesh',
    description:
      'Economical ungalvanized mild-steel welded mesh for fabrication, structural embedment and indoor applications.',
    spec: '17-300 MM / 1-6 MM WIRE',
    image: '/78858287-a104-445b-918f-89ec65d6734e.jpg',
    alt: 'Mild steel welded wire mesh for fabrication',
  },
  {
    id: 'poultry-welded-wire-mesh',
    number: '14',
    name: 'Poultry Welded Wire Mesh',
    description:
      'Rigid welded hardware cloth for poultry coops, runs, cages, ventilation and protected enclosures.',
    spec: '12.7-150 MM / 3-6 MM WIRE',
    image: '/78858287-a104-445b-918f-89ec65d6734e.jpg',
    alt: 'Rigid welded wire mesh for poultry enclosures',
  },
  {
    id: 'custom-weld-mesh-panels',
    number: '15',
    name: 'Custom Weld Mesh Panels',
    description:
      'Made-to-order welded mesh panels tailored to project aperture, wire diameter, dimensions and finish.',
    spec: '25-300 MM / 2-12 MM WIRE',
    image: '/78858287-a104-445b-918f-89ec65d6734e.jpg',
    alt: 'Custom welded mesh panels ready for fabrication',
  },
  {
    id: 'knotted-fence',
    number: '16',
    name: 'Knotted Fence',
    description:
      'High-tensile knotted fencing with graduated apertures for livestock, crop protection and long rural boundaries.',
    spec: 'HIGH-TENSILE GI / GRADUATED MESH',
    image: '/904ff769-3c8a-47b8-9574-cbe5cb5e7147.jpg',
    alt: 'High-tensile knotted agricultural fence',
  },
  {
    id: 'welded-mesh-decking-panels',
    number: '17',
    name: 'Welded Mesh Decking & Rack Panels',
    description:
      'Reinforced wire-mesh decking panels for pallet racks, storage systems and safer warehouse operations.',
    spec: '50 x 100 MM / 4-5 MM WIRE',
    image: '/c4cd0941-b26b-4a42-863e-f8c5ae2b1237.jpg',
    alt: 'Welded wire mesh decking panels on industrial storage racks',
  },
  {
    id: 'weld-mesh-cable-trays',
    number: '18',
    name: 'Weld Mesh Cable Trays',
    description:
      'Open-grid basket trays for routing, supporting and maintaining power, control and data cables.',
    spec: '100 x 50 MM / 100-1000 MM WIDTH',
    image: '/016ca7a0-8884-4189-9d78-c8775d086807.jpg',
    alt: 'Open-grid welded mesh cable tray in an industrial installation',
  },
  {
    id: 'rapid-deployment-defensive-barriers',
    number: '19',
    name: 'Rapid-Deployment Defensive Barriers',
    description:
      'Multi-cell welded-mesh and geotextile barriers for flood control, fortification and critical infrastructure protection.',
    spec: '50 / 75 MM / 600-2500 MM HEIGHT',
    image: '/fa1afbc5-1cf0-4df0-baf4-4d5551a5ea08.jpg',
    alt: 'Welded mesh defensive barrier filled for flood and perimeter protection',
  },
];
export { products };
