import type { Destination, Region } from '../destinations';
import { DIMG } from '../destinations';

const TBD = 'To be confirmed — contact us for the current figure for this corridor.';

export const dstAsiaOceania: Destination[] = [
  {
    id: 'australia',
    regionId: 'asia-oceania',
    country: 'Australia',
    slug: 'moving-from-panama-to-australia',
    flag: '🇦🇺',
    metaTitle: 'Moving from Panama to Australia (Sydney, Melbourne) | PIM',
    metaDescription:
      `Moving from Panama to Sydney, Melbourne, or Brisbane: sea freight with strict biosecurity compliance and expert customs handling. Get your PIM quote today.`,
    heroTagline: `From Panama to Sydney or Melbourne, with Australia's strict biosecurity rules fully under control.`,
    heroImage: DIMG.port,
    intro: [
      `Australia is a dream destination for its quality of life, but it's also one of the most demanding countries in the world when it comes to biosecurity. We coordinate moves from Panama to Sydney, Melbourne, Brisbane, and other cities, primarily by sea freight, paying the closest attention to Australia's strict quarantine and inspection controls.`,
      `Experience on this corridor is essential: improper packing or an inaccurate declaration can lead to costly inspections, treatments, or outright rejections.`,
    ],
    sections: [
      {
        heading: `Biosecurity: the deciding factor`,
        body: [
          `Australia rigorously inspects personal effects to keep pests and contaminants out of the country. Items with traces of soil, untreated wood, food, seeds, or plant material can be treated, held, or destroyed. We prepare and declare your household goods in line with these rules to minimize risk.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Your move, handled by experts`,
        body: [
          `We pack with biosecurity in mind, prepare accurate documentation, and coordinate the inspection, customs clearance, and delivery with our agents in Australia. We'll tell you exactly what's worth shipping to this destination — and what isn't.`,
        ],
      },
      {
        heading: `Australia: the dream destination (and a demanding one)`,
        body: [
          `Year after year, Australia ranks among the best countries to live in, thanks to its quality of life, climate, safety, and opportunities. Sydney, Melbourne, Brisbane, and Perth draw families and professionals from around the world. But bringing your household there means complying with one of the strictest biosecurity regimes on the planet.`,
          `Experience on this corridor isn't optional — it's the difference between a smooth arrival and a costly inspection involving treatments or rejections. That's where we add value.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Tips for your move to Australia`,
        body: [
          `Avoid shipping items with soil, untreated wood, seeds, plants, food, or any organic material — these are exactly what Australian inspectors look for, and they can lead to treatment, hold, or destruction. Thoroughly clean footwear, garden tools, bicycles, and sports equipment before packing them.`,
          `We'll give you a clear guide on what to ship and what to leave behind, and we prepare and declare your household goods according to the rules to minimize inspection risk.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `Very strict biosecurity (quarantine) controls: inspection of soil, wood, food, and plant material. Careful, accurate declaration is essential.`,
      taxes: TBD,
    },
    faqs: [
      { q: `Why is Australia so strict about moves?`, a: `Because of its biosecurity regime, which protects its ecosystem from pests and disease. Personal effects are inspected, and certain items may require treatment or be rejected outright. We prepare your household goods in line with these rules.` },
      { q: `What shouldn't I ship to Australia?`, a: `Avoid items with soil, untreated wood, seeds, plants, or food. We'll give you a guide on what's worth shipping so you can clear inspection without a hitch.` },
    ],
    related: ['estados-unidos', 'reino-unido', 'canada'],
  },
  {
    id: 'nueva-zelanda',
    regionId: 'asia-oceania',
    country: 'New Zealand',
    slug: 'moving-from-panama-to-new-zealand',
    flag: '🇳🇿',
    metaTitle: 'Moving from Panama to New Zealand (Auckland) | PIM',
    metaDescription:
      `Moving from Panama to New Zealand: Auckland, Wellington. Sea freight with strict biosecurity controls and expert customs handling. Get a quote from PIM.`,
    heroTagline: `From Panama to Auckland or Wellington, with biosecurity fully under control.`,
    heroImage: DIMG.port,
    intro: [
      `New Zealand offers an exceptional quality of life, but like Australia, it enforces one of the strictest biosecurity regimes in the world. We coordinate moves from Panama to Auckland, Wellington, and other cities, primarily by sea freight, with the closest attention to inspection and quarantine requirements.`,
    ],
    sections: [
      { heading: `Biosecurity: the deciding factor`, body: [`New Zealand rigorously inspects personal effects to protect its ecosystem. Items with soil, untreated wood, food, or plant material can be treated, held, or rejected. We prepare and declare your household goods in line with these rules to minimize risk.`], image: DIMG.containers },
      { heading: `Handled by experts`, body: [`We pack with biosecurity in mind, prepare accurate documentation, and coordinate the inspection, customs clearance, and delivery with our agents in New Zealand. We'll tell you exactly what's worth shipping — and what isn't.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Very strict biosecurity (quarantine) controls: inspection of soil, wood, food, and plant material. Careful, accurate declaration is essential.`, taxes: TBD },
    faqs: [
      { q: `Is it as strict as Australia?`, a: `Yes, New Zealand applies very rigorous biosecurity controls. We prepare your household goods according to these rules to avoid treatment or rejection at inspection.` },
      { q: `What shouldn't I ship?`, a: `Avoid items with soil, untreated wood, seeds, plants, or food. We'll give you a guide on what's worth shipping so you can clear inspection without a hitch.` },
    ],
    related: ['australia', 'reino-unido', 'estados-unidos'],
  },
  {
    id: 'japon',
    regionId: 'asia-oceania',
    country: 'Japan',
    slug: 'moving-from-panama-to-japan',
    flag: '🇯🇵',
    metaTitle: 'Moving from Panama to Japan (Tokyo) | PIM',
    metaDescription:
      `Moving from Panama to Japan: Tokyo, Osaka, Yokohama. Sea or air freight with full customs handling and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Tokyo or Osaka, halfway around the world, handled with precision.`,
    heroImage: DIMG.plane,
    intro: [
      `Japan, a destination for professionals and families drawn by its culture and opportunities, is one of the longest corridors we operate. We coordinate moves from Panama to Tokyo, Osaka, Yokohama, and other cities, by sea or air freight, with the meticulous care this destination demands.`,
    ],
    sections: [
      { heading: `Your move to Japan`, body: [`We prepare your household goods with export-grade packing and a detailed inventory, manage the long-haul freight, and coordinate customs clearance and delivery with our agents in Japan. Keep the size of Japanese homes in mind when deciding what to bring.`], image: DIMG.containers },
      { heading: `Japanese customs`, body: [`Importing personal effects into Japan requires specific documentation and compliance with its customs regulations, with certain items restricted. We'll guide you through the requirements for a smooth clearance.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Its own customs regulations; personal-effects documentation and restricted items to verify. Check current requirements before shipping.`, taxes: TBD },
    faqs: [
      { q: `Should I bring all my furniture to Japan?`, a: `Japanese homes tend to be more compact, so it's worth evaluating which pieces of furniture will actually fit and are worth moving. We'll help you make that call.` },
      { q: `How long does the move take?`, a: `Since this is a long-haul corridor, sea transit takes longer; air freight is faster for anything urgent. We'll confirm the exact estimate in your quote.` },
    ],
    related: ['china', 'singapur', 'dubai'],
  },
  {
    id: 'china',
    regionId: 'asia-oceania',
    country: 'China',
    slug: 'moving-from-panama-to-china',
    flag: '🇨🇳',
    metaTitle: 'Moving from Panama to China (Shanghai, Beijing) | PIM',
    metaDescription:
      `Moving from Panama to China: Shanghai, Beijing, Guangzhou. Sea or air freight with full customs handling and door-to-door delivery. Get a quote from PIM.`,
    heroTagline: `From Panama to Shanghai or Beijing, with long-haul logistics you can rely on.`,
    heroImage: DIMG.port,
    intro: [
      `China, a global economic powerhouse, welcomes professionals and families relocating for work and business. We coordinate moves from Panama to Shanghai, Beijing, Guangzhou, and other cities, by sea or air freight, with the careful handling such a vast and tightly regulated destination requires.`,
    ],
    sections: [
      { heading: `How we do it`, body: [`We calculate your volume, pack with export-grade materials, and manage the long-haul freight. We coordinate customs clearance and final delivery with our agents in China, in your destination city.`], image: DIMG.containers },
      { heading: `Chinese customs`, body: [`Importing personal effects into China is tightly regulated and requires specific documentation, with restricted items you should be aware of. We'll walk you through the requirements to avoid delays in clearance.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Tightly regulated customs framework; personal-effects documentation and restricted items to verify. Check current requirements before shipping.`, taxes: TBD },
    faqs: [
      { q: `Which cities in China do you serve?`, a: `We coordinate deliveries to major cities and ports, including Shanghai, Beijing, Shenzhen, and Guangzhou, with final delivery through our network of agents.` },
      { q: `What documentation do I need?`, a: `Importing requires specific documentation, which we prepare on your behalf, and we'll inform you of any items restricted under Chinese regulations.` },
    ],
    related: ['japon', 'singapur', 'dubai'],
  },
  {
    id: 'dubai',
    regionId: 'asia-oceania',
    country: 'United Arab Emirates (Dubai)',
    slug: 'moving-from-panama-to-dubai',
    flag: '🇦🇪',
    metaTitle: 'Moving from Panama to Dubai (United Arab Emirates) | PIM',
    metaDescription:
      `Moving from Panama to Dubai and the UAE: sea or air freight with full customs handling and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Dubai, the beating business heart of the Middle East.`,
    heroImage: DIMG.port,
    intro: [
      `Dubai and the United Arab Emirates draw professionals from around the world with their business opportunities and quality of life. We coordinate moves from Panama to Dubai, Abu Dhabi, and other cities, by sea or air freight.`,
    ],
    sections: [
      { heading: `Your move to the Emirates`, body: [`We prepare your household goods with export-grade packing and a detailed inventory, manage the freight, and coordinate customs clearance and delivery with our agents in the Emirates. Careful document handling is key at this destination.`], image: DIMG.containers },
      { heading: `UAE customs`, body: [`Importing personal effects into the Emirates requires specific documentation and compliance with particular rules on certain items, including cultural and regulatory restrictions. We'll guide you through the details to avoid any issues.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Its own customs regulations with specific restrictions on certain items. Check current requirements and prohibited items before shipping.`, taxes: TBD },
    faqs: [
      { q: `Are there items I can't bring to Dubai?`, a: `Yes, the Emirates have specific restrictions on certain items for regulatory and cultural reasons. We'll tell you exactly what's allowed and what isn't before we move your household goods.` },
      { q: `Sea or air freight?`, a: `Sea freight is the most economical option for a full household; air freight is faster for small or urgent shipments.` },
    ],
    related: ['singapur', 'china', 'japon'],
  },
  {
    id: 'singapur',
    regionId: 'asia-oceania',
    country: 'Singapore',
    slug: 'moving-from-panama-to-singapore',
    flag: '🇸🇬',
    metaTitle: 'Moving from Panama to Singapore | PIM',
    metaDescription:
      `Moving from Panama to Singapore: sea or air freight with full customs handling and door-to-door delivery. One of Asia's largest logistics hubs. Get a quote.`,
    heroTagline: `From Panama to Singapore, hub to hub between two major logistics centers.`,
    heroImage: DIMG.port,
    intro: [
      `Singapore, one of Asia's largest financial and logistics hubs, welcomes professionals and families from around the world. We coordinate moves from Panama to Singapore by sea or air freight, connecting two of the planet's great logistics centers.`,
    ],
    sections: [
      { heading: `Hub to hub`, body: [`Both Panama and Singapore are top-tier logistics nodes, which translates into strong connections. We prepare your household goods with export-grade packing, manage the freight, and coordinate customs clearance and delivery with local agents.`], image: DIMG.containers },
      { heading: `Singapore customs`, body: [`Singapore enforces a strict, efficient customs framework, with clear controls and certain regulated items. We'll guide you through the requirements and documentation for a smooth clearance.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Strict, efficient customs framework; certain items regulated. Check current requirements before shipping.`, taxes: TBD },
    faqs: [
      { q: `Is Singapore an easy destination for moves?`, a: `Yes. As a top-tier logistics hub with efficient customs, clearance tends to go smoothly as long as the documentation is complete — which we handle for you.` },
      { q: `Which shipping method is best?`, a: `Sea freight for a full household; air freight for small or urgent shipments. We'll decide together based on your volume and timeline.` },
    ],
    related: ['china', 'japon', 'dubai'],
  },
];
