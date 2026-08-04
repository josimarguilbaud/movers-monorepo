import type { Destination, Region } from '../destinations';
import { DIMG } from '../destinations';

const TBD = `To be confirmed — contact us for the current figure for this corridor.`;

export const regionsEn: Region[] = [
  {
    id: 'europa',
    title: `Moving to Europe`,
    blurb: `Spain, the United Kingdom, Germany, Italy, and more. Sea and air corridors with full customs handling.`,
  },
  {
    id: 'america',
    title: `Moving to the Americas`,
    blurb: `The United States, Canada, Mexico, and all of South America. The busiest corridor out of Panama.`,
  },
  {
    id: 'asia-oceania',
    title: `Moving to Asia & Oceania`,
    blurb: `Australia, New Zealand, Japan, China, and the Middle East. Demanding destinations, handled by experts.`,
  },
];

export const dstEuropa: Destination[] = [
  {
    id: 'espana',
    regionId: 'europa',
    country: 'Spain',
    slug: 'moving-from-panama-to-spain',
    flag: '🇪🇸',
    metaTitle: `Moving from Panama to Spain | Sea & Air Freight | PIM`,
    metaDescription: `International moves from Panama to Spain (Madrid, Barcelona, Valencia): sea container or air shipping, full customs clearance, and door-to-door delivery. Get a quote from PIM.`,
    heroTagline: `From Panama to Madrid, Barcelona, or Valencia — everything handled.`,
    heroImage: DIMG.port,
    intro: [
      `Spain is one of the most popular destinations for people relocating from Panama, thanks to cultural ties, a shared language, and an established community. Whether you're moving to Madrid, Barcelona, Valencia, or any other city, Panama International Movers coordinates your move door to door, choosing the route that best fits your volume and timeline.`,
      `Most moves to Spain travel by sea in a container — exclusive or shared — while air freight is reserved for urgent or low-volume shipments.`,
    ],
    sections: [
      {
        heading: `How we move your home to Spain`,
        body: [
          `We start with an inspection to calculate your volume and recommend an exclusive container (FCL), a shared container (LCL), or air freight. We pack with export-grade materials, handle freight and documentation, and coordinate with our network of agents in Spain for customs clearance and final delivery.`,
          `With our door-to-door service, you never have to deal with ports or customs yourself — your coordinator is accountable for the entire chain, all the way to your new address.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Customs and household goods`,
        body: [
          `Spain offers benefits for importing used household goods when relocating your residence, subject to specific conditions and documentation (such as proof of the residence change). We walk you through the current requirements so you can take advantage of applicable exemptions and avoid unnecessary charges.`,
        ],
      },
      {
        heading: `Why so many people choose Spain`,
        body: [
          `Spain is one of the favorite destinations for people leaving Panama, and it's no coincidence: a shared language, deep historical and cultural ties, an established Latin American community, Mediterranean quality of life, and its role as a gateway to Europe all make it a natural choice. Cities like Madrid, Barcelona, and Valencia offer everything from professional opportunities to a more relaxed pace of life.`,
          `Whether for work, studies, family reunification, or retirement, moving your home to Spain is an exciting step that deserves logistics to match.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Tips for your move to Spain`,
        body: [
          `Plan ahead to take advantage of household-goods exemptions for a change of residence, which require specific documentation. Keep in mind voltage and plug differences for some appliances, and factor in your destination city's climate when deciding what to bring.`,
          `Your coordinator supports you through the entire process, including coordination with agents in Spain for smooth delivery and customs clearance.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `Possible benefits for used household goods on a change of residence (subject to conditions). Verify current requirements before you move.`,
      taxes: TBD,
    },
    faqs: [
      { q: `How long does a move from Panama to Spain take?`, a: `Total time combines sea transit with origin and destination processes (packing, customs, and delivery). We confirm the exact estimate for this corridor in your quote.` },
      { q: `Can I bring my household goods without paying taxes?`, a: `Spain allows exemptions for used household goods on a change of residence under certain conditions. We review your case and the documentation needed to apply them.` },
    ],
    related: ['reino-unido', 'alemania', 'italia'],
  },
  {
    id: 'reino-unido',
    regionId: 'europa',
    country: 'United Kingdom',
    slug: 'moving-from-panama-to-united-kingdom',
    flag: '🇬🇧',
    metaTitle: `Moving from Panama to the UK (London) | PIM`,
    metaDescription: `Moving from Panama to the United Kingdom (London and beyond): sea or air freight with post-Brexit customs handling and door-to-door delivery. Get a quote from PIM.`,
    heroTagline: `From Panama to London and across the UK, with post-Brexit customs handled.`,
    heroImage: DIMG.port,
    intro: [
      `The United Kingdom remains an attractive destination for studies, work, and family life. We coordinate moves from Panama to London and other British cities by sea or air, paying special attention to customs procedures, which changed after the UK's exit from the European Union (Brexit).`,
      `Our experience with this corridor helps you avoid the documentation errors that commonly cause delays today.`,
    ],
    sections: [
      {
        heading: `Special attention to post-Brexit customs`,
        body: [
          `Since Brexit, importing personal effects into the UK follows its own customs procedures, with specific forms and requirements (such as the ToR — Transfer of Residence — process for a household-goods exemption). A single error can mean delays or unexpected charges, so we handle the paperwork with care.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Your door-to-door move`,
        body: [
          `We pack your belongings, handle international freight, and coordinate with agents in the UK for customs clearance and final delivery to your home, backed by a single coordinator.`,
        ],
      },
      {
        heading: `London and beyond`,
        body: [
          `The United Kingdom continues to attract professionals, students, and families with its prestigious universities, job market, and cultural richness. London is the biggest draw, but cities like Manchester, Edinburgh, and Birmingham also welcome new residents from around the world.`,
          `Moving to the United Kingdom from Panama is an exciting project that today also requires careful customs handling because of post-Brexit changes. That's where our experience makes the difference.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Tips for your move to the United Kingdom`,
        body: [
          `Learn about the ToR (Transfer of Residence) process, which lets you import your household goods tax-free when relocating your residence, provided you meet certain conditions; handling it correctly is key to avoiding overpayment. Post-Brexit procedures require precise documentation, so getting ahead of it is your best ally.`,
          `Our team handles the paperwork, including the ToR process when it applies, so your move clears British customs without the delays many people face when they handle it on their own.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `Post-Brexit procedures; possible household-goods exemption via the ToR (Transfer of Residence) process. Verify current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `Does Brexit complicate my move to the UK?`, a: `It adds specific customs procedures, but with the right documentation the process runs smoothly. We handle the paperwork, including the ToR process for a household-goods exemption when it applies.` },
      { q: `What is the ToR process?`, a: `Transfer of Residence: the UK mechanism that lets you import household goods tax-free when relocating your residence, subject to certain conditions. We help you apply for it.` },
    ],
    related: ['espana', 'alemania', 'italia'],
  },
  {
    id: 'alemania',
    regionId: 'europa',
    country: 'Germany',
    slug: 'moving-from-panama-to-germany',
    flag: '🇩🇪',
    metaTitle: `Moving from Panama to Germany (Berlin, Munich) | PIM`,
    metaDescription: `Moving from Panama to Germany: Berlin, Munich, Frankfurt. Sea or air freight with full customs handling and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Berlin, Munich, or Frankfurt, with German precision.`,
    heroImage: DIMG.port,
    intro: [
      `Germany, Europe's economic engine, welcomes professionals and families from around the world. We coordinate moves from Panama to Berlin, Munich, Frankfurt, and other cities, by sea or air, with documentation in order for smooth customs clearance.`,
      `As an EU member state, Germany shares the common European customs framework, with specific requirements for importing household goods.`,
    ],
    sections: [
      {
        heading: `Your move to Germany`,
        body: [
          `After the inspection, we recommend the right shipping method and prepare your belongings with export-grade packing and a detailed inventory — highly valued in German customs clearance. We handle freight, documentation, and delivery through our local network.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Customs and household goods`,
        body: [
          `Importing used household goods for a change of residence into the European Union can qualify for exemptions under certain conditions (proof of the residence change, a valued inventory of goods). We walk you through the current requirements.`,
        ],
      },
      {
        heading: `Germany, the engine of Europe`,
        body: [
          `Germany is one of the continent's biggest magnets for talent, with a strong economy, skilled employment, and cities with an outstanding quality of life like Berlin, Munich, and Frankfurt. Every year, professionals and families from around the world relocate their homes there.`,
          `As an EU member state, Germany shares the common customs framework, which brings predictability to the process as long as your documentation — something German customs officers value highly — is impeccable.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Tips for your move to Germany`,
        body: [
          `Prepare a detailed, valued inventory: German customs officers appreciate it and it speeds up clearance. Take advantage, where applicable, of EU household-goods exemptions for a change of residence, which require proof of the relocation.`,
          `Our professional packing generates that inventory as part of the service, and we coordinate with local agents for smooth, hassle-free entry.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `EU customs framework; possible household-goods exemptions for a change of residence (subject to conditions). Verify current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `Do I need a detailed inventory for Germany?`, a: `Yes, a detailed, valued inventory speeds up German customs clearance. Our professional packing generates it as part of the service.` },
      { q: `Do EU household-goods exemptions apply?`, a: `Used household goods for a change of residence can qualify for exemptions under certain conditions. We review your case and the documentation needed.` },
    ],
    related: ['espana', 'italia', 'reino-unido'],
  },
  {
    id: 'italia',
    regionId: 'europa',
    country: 'Italy',
    slug: 'moving-from-panama-to-italy',
    flag: '🇮🇹',
    metaTitle: `Moving from Panama to Italy (Rome, Milan) | PIM`,
    metaDescription: `Moving from Panama to Italy: Rome, Milan, Naples. Sea or air freight with full customs handling and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Rome, Milan, or Naples, with care worthy of la dolce vita.`,
    heroImage: DIMG.port,
    intro: [
      `Italy combines history, culture, and quality of life, and is a destination for family reunions and new chapters. We coordinate moves from Panama to Rome, Milan, Naples, and other cities, by sea or air, with customs handling under the European Union framework.`,
      `We take special care with furniture and valuables, so common in households moving to Italy.`,
    ],
    sections: [
      {
        heading: `How we move your home to Italy`,
        body: [
          `We calculate your volume, recommend the right shipping method, and pack with export-grade materials. We handle freight and documentation, and coordinate with Italian agents for customs clearance and final delivery.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Customs (EU framework)`,
        body: [
          `As an EU member state, Italy applies the common customs framework: used household goods for a change of residence can qualify for exemptions under certain conditions. We inform you about the applicable requirements and documentation.`,
        ],
      },
      {
        heading: `La dolce vita as a destination`,
        body: [
          `Italy combines history, art, cuisine, and a quality of life that's hard to match. Rome, Milan, Florence, and Naples welcome people seeking family reunions, professional opportunities, or simply a new chapter in one of the most beautiful countries in the world.`,
          `Many households moving to Italy bring furniture and sentimental valuables with them; we handle them with the care they deserve so they arrive intact at your new home.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Tips for your move to Italy`,
        body: [
          `Take advantage of EU household-goods exemptions for a change of residence, which require specific documentation. If you're moving antiques, artwork, or valuable furniture — common among households heading to Italy — consider our specialized crating and declared-value insurance.`,
          `We coordinate with Italian agents on customs clearance and delivery, so your arrival is as pleasant as the destination itself.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `EU customs framework; possible household-goods exemptions for a change of residence (subject to conditions). Verify current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `What's the best shipping method from Panama to Italy?`, a: `A sea freight container for a full household and air freight for urgent or small shipments. We determine this based on your volume and timeline.` },
      { q: `Can I bring antique or valuable furniture?`, a: `Yes. We offer specialized packing and custom crating for antiques and artwork, with declared-value insurance.` },
    ],
    related: ['espana', 'alemania', 'reino-unido'],
  },
  {
    id: 'francia',
    regionId: 'europa',
    country: 'France',
    slug: 'moving-from-panama-to-france',
    flag: '🇫🇷',
    metaTitle: `Moving from Panama to France (Paris) | PIM`,
    metaDescription: `Moving from Panama to France: Paris, Lyon, Marseille. Sea or air freight with EU customs handling and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Paris, Lyon, or Marseille, with the elegance of a move done right.`,
    heroImage: DIMG.port,
    intro: [
      `France draws people in with its culture, quality of life, and central role in Europe. We coordinate moves from Panama to Paris, Lyon, Marseille, and other cities, by sea or air, within the European Union's customs framework.`,
    ],
    sections: [
      {
        heading: `Your move to France, step by step`,
        body: [
          `We calculate your volume, recommend the right shipping method, and pack with export-grade materials. We handle freight and documentation, and coordinate with agents in France for customs clearance and final delivery to your home.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Customs (EU framework)`,
        body: [
          `As an EU member state, France applies the common customs framework: used household goods for a change of residence can qualify for exemptions under certain conditions. We walk you through the applicable requirements and documentation.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `EU customs framework; possible household-goods exemptions for a change of residence (subject to conditions). Verify current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `What's the best shipping method from Panama to France?`, a: `A sea freight container for a full household and air freight for urgent or small shipments. We determine this based on your volume and timeline.` },
      { q: `Do household-goods exemptions apply?`, a: `Used household goods for a change of residence can qualify for exemptions within the EU under certain conditions. We review your case and the documentation.` },
    ],
    related: ['espana', 'italia', 'alemania'],
  },
  {
    id: 'portugal',
    regionId: 'europa',
    country: 'Portugal',
    slug: 'moving-from-panama-to-portugal',
    flag: '🇵🇹',
    metaTitle: `Moving from Panama to Portugal (Lisbon) | PIM`,
    metaDescription: `Moving from Panama to Portugal: Lisbon, Porto. Sea or air freight with EU customs handling and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Lisbon or Porto, an increasingly popular destination.`,
    heroImage: DIMG.port,
    intro: [
      `Portugal has become one of the favorite destinations for expats, thanks to its climate, safety, and quality of life. We coordinate moves from Panama to Lisbon, Porto, and other cities, by sea or air, with European Union customs handling.`,
    ],
    sections: [
      {
        heading: `How we move your home to Portugal`,
        body: [
          `After the volume inspection, we recommend the optimal shipping method and prepare your belongings with export-grade packing and an inventory. We handle freight, documentation, and delivery through our local network in Portugal.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Customs and household goods`,
        body: [
          `Portugal, as an EU member state, allows exemptions for used household goods on a change of residence under specific conditions. We inform you about current requirements so you can take advantage of applicable benefits.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `EU customs framework; possible household-goods exemptions for a change of residence. Verify current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `Why do so many people choose Portugal?`, a: `For its climate, safety, relatively affordable cost of living, and attractive programs for foreign residents. It's a booming destination for expats.` },
      { q: `How long does the move take?`, a: `Total time combines transit with origin and destination processes. We confirm the exact estimate for this corridor in your quote.` },
    ],
    related: ['espana', 'francia', 'italia'],
  },
  {
    id: 'suiza',
    regionId: 'europa',
    country: 'Switzerland',
    slug: 'moving-from-panama-to-switzerland',
    flag: '🇨🇭',
    metaTitle: `Moving from Panama to Switzerland (Zurich) | PIM`,
    metaDescription: `Moving from Panama to Switzerland: Zurich, Geneva, Basel. Sea or air freight with full customs handling and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Zurich or Geneva, with Swiss precision.`,
    heroImage: DIMG.port,
    intro: [
      `Switzerland attracts high-level professionals with its quality of life, safety, and economy. We coordinate moves from Panama to Zurich, Geneva, Basel, and other cities, by sea or air. As a non-EU member, Switzerland has its own customs regime, which we handle with care.`,
    ],
    sections: [
      {
        heading: `Your move to Switzerland`,
        body: [
          `We prepare your belongings with export-grade packing and a detailed inventory, and coordinate freight and delivery with local agents. Documentation precision is especially important for Swiss customs clearance.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Swiss customs (outside the EU)`,
        body: [
          `Unlike its neighbors, Switzerland is not a member of the European Union and applies its own customs regulations, with the possibility of importing used household goods for a change of residence under certain conditions. We walk you through the current requirements.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `Its own customs regime (outside the EU); possible household-goods exemption for a change of residence. Verify current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `Does Switzerland have different rules than the EU?`, a: `Yes. Since it's not an EU member, Switzerland applies its own customs regime. We handle the specific documentation it requires for household goods.` },
      { q: `Do I need a detailed inventory?`, a: `Yes, a detailed, valued inventory speeds up Swiss customs clearance. Our professional packing generates it as part of the service.` },
    ],
    related: ['alemania', 'francia', 'italia'],
  },
  {
    id: 'paises-bajos',
    regionId: 'europa',
    country: 'Netherlands',
    slug: 'moving-from-panama-to-netherlands',
    flag: '🇳🇱',
    metaTitle: `Moving from Panama to the Netherlands (Amsterdam) | PIM`,
    metaDescription: `Moving from Panama to the Netherlands: Amsterdam, Rotterdam, The Hague. Sea or air freight with EU customs and door-to-door delivery. Get a quote from PIM.`,
    heroTagline: `From Panama to Amsterdam or Rotterdam, tapping into Europe's great port.`,
    heroImage: DIMG.port,
    intro: [
      `The Netherlands combines international openness, quality of life, and a strategic location: Rotterdam is one of the largest ports in the world. We coordinate moves from Panama to Amsterdam, Rotterdam, The Hague, and other cities, by sea or air.`,
    ],
    sections: [
      {
        heading: `How we do it`,
        body: [
          `We calculate your volume, recommend the shipping method, and pack with export-grade materials. We handle documentation and coordinate with Dutch agents for customs clearance and last-mile delivery.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Customs (EU framework)`,
        body: [
          `As an EU member state, the Netherlands applies the common customs framework, with possible exemptions for used household goods on a change of residence under certain conditions. We inform you about the applicable requirements.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `EU customs framework; possible household-goods exemptions for a change of residence. Verify current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `Does the Port of Rotterdam speed up my move?`, a: `Rotterdam is one of the largest and most efficient ports in the world, with excellent connections. It's a logistical advantage for moves to the Netherlands.` },
      { q: `Sea or air freight?`, a: `Sea freight for a full household; air freight for small or urgent shipments. We determine this based on your volume and timeline.` },
    ],
    related: ['alemania', 'francia', 'reino-unido'],
  },
];
