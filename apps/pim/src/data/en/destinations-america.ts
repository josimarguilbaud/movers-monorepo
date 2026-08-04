import type { Destination, Region } from '../destinations';
import { DIMG } from '../destinations';

const TBD = 'To be confirmed — contact us for the current figure for this corridor.';

export const dstAmerica: Destination[] = [
  {
    id: 'estados-unidos',
    regionId: 'america',
    country: 'United States',
    slug: 'moving-from-panama-to-united-states',
    flag: '🇺🇸',
    metaTitle: 'Moving from Panama to the US (Miami, NY) | PIM',
    metaDescription:
      `Moving from Panama to the United States: Miami, New York, California, Texas. Sea container or air freight, customs clearance and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `Our busiest corridor: from Panama to Miami, New York, California, or Texas.`,
    heroImage: DIMG.port,
    intro: [
      `The United States is, along with Spain, one of the most traveled corridors from Panama, thanks to its proximity, frequent sailings, and the deep ties between both countries. We coordinate door-to-door moves to Miami, New York, California, Texas, and any other state.`,
      `That proximity, combined with a high frequency of carrier sailings, makes this one of the most efficient corridors we operate.`,
    ],
    sections: [
      {
        heading: `A fast, frequent corridor`,
        body: [
          `Thanks to the short distance and regular ocean connections, moves from Panama to the US typically enjoy strong departure frequencies. We help you choose between an exclusive container, a shared container, or air freight based on your volume and timeline.`,
          `Our network of agents in major US cities handles customs clearance and final delivery to your new home.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `US customs`,
        body: [
          `Importing household goods into the US requires specific documentation and compliance with CBP (Customs and Border Protection) regulations. Certain items are restricted. We guide you through the requirements and paperwork for a smooth clearance.`,
        ],
      },
      {
        heading: `The region's busiest corridor`,
        body: [
          `The United States accounts for a huge share of international moves out of Panama. Geographic proximity, an extremely high frequency of sea and air connections, and the family, professional, and academic ties between both countries make this one of the most efficient and cost-effective corridors we operate.`,
          `Whether you're headed to Miami — the most popular destination — New York, Houston, Los Angeles, or any other state, we have the experience and the agent network to deliver right to your door.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Tips for your move to the United States`,
        body: [
          `Get familiar with CBP restrictions: certain foods, plant products, and other items are prohibited or regulated. If you're planning to ship a vehicle, keep in mind that the US applies strict import standards (EPA and DOT) that not every car meets.`,
          `Because this corridor is so active, good planning can optimize both timing and cost. We'll advise you on the best route and shipping window for your move.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `Import regulated by CBP; household goods documentation and restricted items to verify. Check current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `Which US cities do you deliver to?`, a: `We coordinate moves to major cities and ports — Miami, New York, Houston, Los Angeles, and more — with final door-to-door delivery through our agent network.` },
      { q: `Can I ship my car to the United States?`, a: `Shipping vehicles to the US is subject to specific import regulations (EPA, DOT). We assess whether your vehicle qualifies before moving forward.` },
    ],
    related: ['canada', 'mexico', 'espana'],
  },
  {
    id: 'canada',
    regionId: 'america',
    country: 'Canada',
    slug: 'moving-from-panama-to-canada',
    flag: '🇨🇦',
    metaTitle: 'Moving from Panama to Canada (Toronto, Vancouver) | PIM',
    metaDescription:
      `Moving from Panama to Canada: Toronto, Vancouver, Montreal. Sea container or air freight with customs clearance and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Toronto, Vancouver, or Montreal, hassle-free.`,
    heroImage: DIMG.port,
    intro: [
      `Canada draws new residents every year with its quality of life and opportunities. We coordinate moves from Panama to Toronto, Vancouver, Montreal, and other cities, mainly by sea container, with air freight available for urgent shipments.`,
      `Our team handles the packing, international logistics, and coordination with local agents for delivery at destination.`,
    ],
    sections: [
      {
        heading: `Your move to Canada, step by step`,
        body: [
          `After a volume inspection, we recommend the best shipping method and prepare your belongings with export-grade packing and a full inventory. We handle freight, documentation, and customs clearance through our Canadian network.`,
          `With our door-to-door service, we deliver, unpack the essentials, and remove the packing materials from your new home.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Canadian customs (CBSA)`,
        body: [
          `Importing personal effects into Canada is handled through the CBSA (Canada Border Services Agency) and generally requires a detailed goods list (often the "goods to follow" form). We guide you through the paperwork for a smooth entry.`,
        ],
      },
      {
        heading: `Canada: a quality of life that attracts`,
        body: [
          `Canada has become one of the most sought-after destinations for people relocating abroad, thanks to its quality of life, safety, education system, and job opportunities. Toronto, Vancouver, and Montreal welcome new residents from around the world every year, including many arriving from Panama.`,
          `Moving your home to Canada is the first step toward that new life, and we're here to make sure that step is solid and free of logistical headaches.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Tips for your move to Canada`,
        body: [
          `Carefully prepare the detailed goods list the CBSA requires, including the "goods to follow" form for items arriving later. Consider the climate: if you're moving in winter, plan to have seasonal clothing and essentials on hand, since the container can take weeks to arrive.`,
          `Our team helps you prepare the paperwork correctly and coordinates with Canadian agents for smooth clearance and entry.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `Import handled through the CBSA; a detailed goods list is generally required. Check current requirements.`,
      taxes: TBD,
    },
    faqs: [
      { q: `What documentation does Canadian customs require?`, a: `Generally a detailed list of the goods entering the country and of those arriving later (goods to follow), along with household goods documentation. We help you prepare it correctly.` },
      { q: `What's the best shipping method to Canada?`, a: `For a full household, sea container is the most practical option. For urgent or small shipments, air freight. We'll help you decide based on your volume and timeline.` },
    ],
    related: ['estados-unidos', 'mexico', 'reino-unido'],
  },
  {
    id: 'mexico',
    regionId: 'america',
    country: 'Mexico',
    slug: 'moving-from-panama-to-mexico',
    flag: '🇲🇽',
    metaTitle: 'Moving from Panama to Mexico | Sea & Air Freight | PIM',
    metaDescription:
      `Moving from Panama to Mexico (Mexico City, Guadalajara, Monterrey): sea container or air freight, customs clearance, and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Mexico City, Guadalajara, or Monterrey.`,
    heroImage: DIMG.port,
    intro: [
      `Mexico is a common destination within the Latin American corridor, with strong commercial and cultural ties to Panama. We coordinate moves to Mexico City, Guadalajara, Monterrey, and other cities by sea or air.`,
      `We handle the entire process — packing, freight, customs, and delivery — so your move is smooth and free of surprises.`,
    ],
    sections: [
      {
        heading: `How we do it`,
        body: [
          `We calculate your volume, recommend the right shipping method, and prepare your belongings with export-grade packing. We handle the documentation and coordinate with agents in Mexico for customs clearance and last-mile delivery.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Mexican customs`,
        body: [
          `Importing household goods into Mexico comes with specific requirements and, in certain cases, benefits for used household goods belonging to people relocating their residence. We inform you about the documentation and steps that apply to your situation.`,
        ],
      },
      {
        heading: `Mexico: a close, familiar destination`,
        body: [
          `Mexico combines cultural closeness, a dynamic economy, and cities with a great quality of life such as Mexico City, Guadalajara, and Monterrey. The strong commercial and personal ties with Panama make this a common corridor, for professionals and families alike.`,
          `Moving to Mexico from Panama is a change that's both ambitious and familiar, and our logistics make sure the household transition is the easiest part.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Tips for your move to Mexico`,
        body: [
          `Learn about how used household goods are treated, since certain cases qualify for benefits for people changing their residence. Gather your documentation ahead of time to avoid delays in clearance.`,
          `We guide you through the requirements that apply to your situation and coordinate with our agents in Mexico for customs clearance and delivery to your new address.`,
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: `Household goods requirements; possible benefits for used household goods when relocating residence. Check current conditions.`,
      taxes: TBD,
    },
    faqs: [
      { q: `Can I import used household goods into Mexico with any benefits?`, a: `In certain cases, used household goods belonging to people changing their residence receive favorable treatment. We review your case and the applicable requirements.` },
      { q: `Sea or air freight to Mexico?`, a: `It depends on your volume and timeline. Sea freight is the most economical option for a full household; air freight is the fastest for smaller shipments.` },
    ],
    related: ['estados-unidos', 'canada', 'espana'],
  },
  {
    id: 'colombia',
    regionId: 'america',
    country: 'Colombia',
    slug: 'moving-from-panama-to-colombia',
    flag: '🇨🇴',
    metaTitle: 'Moving from Panama to Colombia (Bogotá, Medellín) | PIM',
    metaDescription: `Moving from Panama to Colombia: Bogotá, Medellín, Cali, Cartagena. Sea, air, or land freight with customs clearance and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Bogotá, Medellín, or Cartagena, close and well connected.`,
    heroImage: DIMG.port,
    intro: [
      `The proximity and strong ties between Panama and Colombia make this one of the most active corridors in the region. We coordinate moves to Bogotá, Medellín, Cali, Cartagena, and other cities by sea or air.`,
    ],
    sections: [
      { heading: `A close, frequent corridor`, body: [`The short distance means regular connections and competitive lead times. We help you choose between an exclusive container, a shared container, or air freight based on your volume, and coordinate with agents in Colombia for customs clearance and delivery.`], image: DIMG.containers },
      { heading: `Colombian customs`, body: [`Importing household goods into Colombia comes with requirements and, in certain cases, benefits for used household goods belonging to people relocating their residence. We inform you about the documentation that applies to your situation.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible benefits for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `Which Colombian cities do you deliver to?`, a: `We coordinate moves to major cities — Bogotá, Medellín, Cali, Cartagena, Barranquilla — with final door-to-door delivery through our network.` },
      { q: `What's the most convenient shipping method?`, a: `Given the short distance, both sea and air freight are efficient. Sea freight is more economical for a full household; air freight is faster for smaller shipments.` },
    ],
    related: ['mexico', 'ecuador', 'estados-unidos'],
  },
  {
    id: 'argentina',
    regionId: 'america',
    country: 'Argentina',
    slug: 'moving-from-panama-to-argentina',
    flag: '🇦🇷',
    metaTitle: 'Moving from Panama to Argentina (Buenos Aires) | PIM',
    metaDescription: `Moving from Panama to Argentina: Buenos Aires, Córdoba, Rosario. Sea container or air freight with customs clearance and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Buenos Aires, Córdoba, or Rosario, with logistics you can trust.`,
    heroImage: DIMG.port,
    intro: [
      `Argentina, with its rich culture and major cities, is a common destination within the South American corridor. We coordinate moves from Panama to Buenos Aires, Córdoba, Rosario, and other cities, mainly by sea.`,
    ],
    sections: [
      { heading: `How we move your home to Argentina`, body: [`We calculate your volume, pack with export-grade materials, and handle freight and documentation. We coordinate with agents in Argentina for customs clearance and final delivery.`], image: DIMG.containers },
      { heading: `Argentine customs`, body: [`Importing household goods into Argentina comes with specific requirements and, in certain cases, special treatment for used household goods belonging to people relocating their residence. We guide you through the applicable documentation.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible treatment for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `How long does a move to Argentina take?`, a: `Total time combines ocean transit with origin and destination processes. We'll confirm the exact estimate for this corridor in your quote.` },
      { q: `What documentation do I need?`, a: `Importing household goods requires specific documentation, which we prepare for you, including whatever supports the used-goods treatment when it applies.` },
    ],
    related: ['chile', 'colombia', 'peru'],
  },
  {
    id: 'chile',
    regionId: 'america',
    country: 'Chile',
    slug: 'moving-from-panama-to-chile',
    flag: '🇨🇱',
    metaTitle: 'Moving from Panama to Chile (Santiago) | PIM',
    metaDescription: `Moving from Panama to Chile: Santiago, Valparaíso, Concepción. Sea container or air freight with customs clearance and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Santiago or Valparaíso, along the Pacific coast.`,
    heroImage: DIMG.port,
    intro: [
      `Chile stands out for its stability and quality of life, welcoming professionals and families from across the region. We coordinate moves from Panama to Santiago, Valparaíso, Concepción, and other cities by sea or air.`,
    ],
    sections: [
      { heading: `Your move to Chile`, body: [`We prepare your belongings with export-grade packing and a full inventory, handle freight, and coordinate with agents in Chile for customs clearance and delivery to your new address.`], image: DIMG.containers },
      { heading: `Chilean customs`, body: [`Importing household goods into Chile comes with requirements and, in certain cases, benefits for used household goods belonging to people relocating their residence. We inform you about the applicable documentation.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible benefits for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `Which ports does cargo arrive at in Chile?`, a: `Chile has major ports on the Pacific, such as Valparaíso and San Antonio, with strong connections to Santiago and the rest of the country.` },
      { q: `Sea or air freight to Chile?`, a: `Sea freight is the most economical option for a full household; air freight is faster for smaller or urgent shipments.` },
    ],
    related: ['argentina', 'peru', 'colombia'],
  },
  {
    id: 'peru',
    regionId: 'america',
    country: 'Peru',
    slug: 'moving-from-panama-to-peru',
    flag: '🇵🇪',
    metaTitle: 'Moving from Panama to Peru (Lima) | PIM',
    metaDescription: `Moving from Panama to Peru: Lima, Arequipa, Cusco. Sea container or air freight with customs clearance and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Lima and throughout Peru, handled by experts.`,
    heroImage: DIMG.port,
    intro: [
      `Peru, with Lima as its major hub and a country of enormous cultural richness, is a frequent destination in the South American corridor. We coordinate moves from Panama to Lima, Arequipa, Cusco, and other cities by sea or air.`,
    ],
    sections: [
      { heading: `How we do it`, body: [`We calculate volume, pack with export-grade materials, and handle freight and documentation. We coordinate with agents in Peru for customs clearance and final delivery.`], image: DIMG.containers },
      { heading: `Peruvian customs`, body: [`Importing household goods into Peru comes with specific requirements and, in certain cases, special treatment for used household goods belonging to people relocating their residence. We guide you through the applicable documentation.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible treatment for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `Do you deliver outside of Lima?`, a: `We coordinate delivery to Lima and other cities across the country through our network and last-mile transport.` },
      { q: `How long does it take?`, a: `Total time combines transit with origin and destination processes; we'll confirm the exact estimate in your quote.` },
    ],
    related: ['chile', 'ecuador', 'colombia'],
  },
  {
    id: 'ecuador',
    regionId: 'america',
    country: 'Ecuador',
    slug: 'moving-from-panama-to-ecuador',
    flag: '🇪🇨',
    metaTitle: 'Moving from Panama to Ecuador (Quito, Guayaquil) | PIM',
    metaDescription: `Moving from Panama to Ecuador: Quito, Guayaquil, Cuenca. Sea container or air freight with customs clearance and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Quito, Guayaquil, or Cuenca, a close destination.`,
    heroImage: DIMG.port,
    intro: [
      `Ecuador, increasingly popular among retirees and expats for its cost of living and climate, is a regular destination on this corridor. We coordinate moves from Panama to Quito, Guayaquil, Cuenca, and other cities by sea or air.`,
    ],
    sections: [
      { heading: `Your move to Ecuador`, body: [`We prepare your belongings with export-grade packing and a full inventory, handle freight, and coordinate with agents in Ecuador for customs clearance and final delivery.`], image: DIMG.containers },
      { heading: `Ecuadorian customs`, body: [`Importing household goods into Ecuador comes with requirements and, in certain cases, benefits for used household goods when relocating residence (relevant for retirees and new residents). We inform you about what applies to your case.`] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible benefits for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `Is Ecuador a good destination for retirees?`, a: `It's one of the most popular retirement destinations thanks to its cost of living and climate. Many of our moves to Ecuador involve new residents and retirees.` },
      { q: `Which shipping method is best?`, a: `Sea freight is the most economical option for a full household; air freight is faster for smaller shipments. We'll help you decide based on your volume and timeline.` },
    ],
    related: ['colombia', 'peru', 'mexico'],
  },
];
