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
      `Spain is one of the most frequent destinations for people moving out of Panama — a shared language, deep cultural ties, and a community already in place. Whether you are heading to Madrid, Barcelona, Valencia, or anywhere else, Panama International Movers coordinates your move door to door, on whichever route fits your volume and your timeline.`,
      `Most moves to Spain travel by sea in a container — [exclusive](/en/services/exclusive-container-fcl-shipping/) or [shared](/en/services/shared-container-lcl-shipping/) — while [air freight](/en/services/international-air-freight-moving/) is reserved for urgent or low-volume shipments.`,
      `This page will not give you a price or a date. Those two numbers depend on the real volume of your home and on the service available when you ship, and stating them up front would mean inventing them. What we can explain here is how the corridor works and what Spanish customs is going to ask you for, so you reach the quote knowing what is being discussed.`,
    ],
    sections: [
      {
        heading: `How we move your home to Spain`,
        body: [
          `We start with an inspection to calculate your volume and recommend an exclusive container (FCL), a shared container (LCL), or air freight. We pack with export-grade materials, handle the freight and the documentation, and coordinate with our network of agents in Spain for customs clearance and final delivery.`,
          `Volume is measured in cubic meters — **CBM** — and it is the number everything else hangs from: the route, the cost, the type of service. A one-bedroom apartment and a four-bedroom house do not travel the same way. That is why the inspection comes first: without a measured volume, any figure would be a guess.`,
          `With [door-to-door service](/en/services/door-to-door-international-moving/), you deal with neither ports nor customs. Your coordinator is accountable for the whole chain, right up to your new address.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Exclusive container, shared container, or air freight`,
        body: [
          `In an exclusive container (**FCL**, full container load) your goods travel alone. The container is loaded and sealed at your home and is not opened again until destination unless customs asks for it. It is the natural option for a complete household.`,
          `In a shared container (**LCL**, or groupage) your shipment shares space with other clients' cargo. It is consolidated at origin — grouped in a warehouse before sailing — and deconsolidated at destination, meaning it is separated again in another warehouse on arrival. It works out cheaper for smaller volumes, in exchange for depending on a consolidation schedule and adding two extra handlings.`,
          `Air freight is for what is urgent and what is small: documents, clothing, whatever you need in hand during the first week. It is rarely an alternative to the container; it is usually a complement. Plenty of families use both — the essentials by air, the household by sea.`,
        ],
      },
      {
        heading: `The change-of-residence relief for household goods`,
        body: [
          `The European Union provides a customs treatment for the personal property of someone transferring their normal residence from a country outside the Union. In plain terms: your used household is not a commercial import and is not treated as one. Spain applies that treatment.`,
          `The relief is not automatic. It depends on substantive conditions: that you held your normal residence outside the Union for a minimum continuous period; that the goods were in your possession and use before the move; that they arrive within the window tied to the change of residence; and that you do not sell or transfer them for a period after import. We confirm the exact deadlines for each of those conditions with the destination agent for your file, because they change and quoting them from memory is a bad idea.`,
          `There are classic exclusions: alcohol and tobacco, vehicles (which follow their own track), and anything that is not reasonably a household item. And there is a common-sense limit: the relief protects one person's home, not an inventory that looks like a shop's stock.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `The paperwork Spanish customs usually asks for`,
        body: [
          `What delays a move to Spain is rarely the ship. It is a missing document.`,
          `A typical change-of-residence file from Panama rests on three pieces. The first proves you were living outside the Union: usually the **certificado de baja consular**, issued by the Spanish consulate in Panama to those registered with it, or equivalent evidence of your prior residence. The second proves you now live in Spain: the **empadronamiento** at the town hall of your destination municipality, a lease, or the deed to the property. The third describes what is coming in: a valued inventory, written in Spanish and signed by you.`,
          `To that you add your passport and, depending on your situation, your NIE or residence card, the visa or permit covering your stay, and the transport documents (bill of lading or air waybill). Your coordinator builds the specific list when your file is opened and flags which items are worth arranging before you ship, because some of them cannot be obtained from a distance.`,
        ],
      },
      {
        heading: `Used household goods and new merchandise do not travel the same way`,
        body: [
          `This is the most expensive confusion in the process. The change-of-residence relief covers **used** personal property: your furniture, your clothes, your books, your appliances, your tools. It does not cover new articles.`,
          `A television bought last week, still in its sealed box with the receipt inside, is not household goods — it is merchandise. Customs can treat it as a commercial import, with the duties and VAT that its tariff line carries. Slipping it into the container "while we're at it" does not make it used.`,
          `The inventory is where this is settled or broken. Describing every carton precisely and by its real contents is what holds the declaration up if customs asks questions. An inventory that reads "box 14: miscellaneous" is an invitation to open it.`,
        ],
      },
      {
        heading: `Vehicles, pets, and what travels on its own track`,
        body: [
          `A car is not household goods. [Importing a vehicle](/en/services/car-shipping-in-container/) into Spain is a separate procedure, with its own clearance, its own technical homologation, and registration at destination, and with taxes that do not depend on the change-of-residence relief. There are scenarios where it can qualify for change-of-residence benefits, subject to their own conditions. It is assessed case by case before shipping, not after.`,
          `Pets do not travel in the container. Ever. They fly, on [their own health file](/en/services/international-pet-relocation/). On the Panamanian side, departure is arranged with the national animal health and public health authorities — **MIDA and MINSA**; on the European side, entry requires microchip identification, a valid rabies vaccination, and an official health certificate, and in certain cases a prior serological test. The sequence between microchip, vaccine, test, and travel is the part almost everyone discovers too late.`,
          `Artwork, antiques, pianos, wine collections, and declared-value items have their own crating, insurance, and sometimes permit requirements. Mention them during the inspection, not on packing day.`,
        ],
      },
      {
        heading: `Why so many people choose Spain`,
        body: [
          `Spain is one of the favorite destinations for people leaving Panama, and it is no coincidence: a shared language, deep historical and cultural ties, an established Latin American community, Mediterranean quality of life, and its role as a gateway to Europe all make it a natural choice. Cities like Madrid, Barcelona, and Valencia offer everything from professional opportunities to a slower pace of life.`,
          `Whether for work, studies, family reunification, or retirement, moving your home to Spain is an exciting step that deserves logistics to match.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Arrange here what can only be arranged here. The consular deregistration, if you are registered, is handled at the Spanish consulate in Panama; from abroad it gets complicated. The same goes for your pets' health documents and any certificate that depends on a Panamanian authority.`,
          `Check the voltage. The Spanish grid runs at 230 volts and 50 hertz; Panama's runs at 110 volts and 60 hertz, and the plugs are different. Much modern electronics accepts both ranges — it is printed on the power supply label — but large appliances with a motor or a heating element usually do not. A transformer for a clothes dryer rarely justifies what it cost to ship it.`,
          `Think about the door at the other end, not just the one you are leaving. Many older Spanish buildings have narrow staircases, small elevators, and streets where the truck cannot stop without a municipal permit. That can mean a **montamuebles** — an exterior hoist platform that lifts loads up the façade — and paperwork with the town hall beforehand. Give us the exact address when you request a quote and it is planned in from the start.`,
          `And decide what stays behind. Every cubic meter you ship is a cubic meter you pay for, insure, transport, and unpack. The cheapest move is always the lighter one.`,
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
      { q: `Can I bring my household goods without paying taxes?`, a: `Spain applies the European change-of-residence treatment, which lets you import used personal property without the tax burden of a commercial import. It is not automatic: it depends on proving prior residence outside the Union, that the goods were yours and in your use, that they arrive within the window tied to the move, and that you do not sell or transfer them for a period afterwards. We review your case and confirm the conditions in force before you ship.` },
      { q: `What paperwork will Spanish customs ask me for?`, a: `A typical file combines three things: proof that you were residing outside the European Union (usually the consular deregistration certificate or equivalent evidence), proof of your new residence in Spain (municipal registration, a lease, or the property deed), and a valued inventory in Spanish, signed by you. Add your passport, your NIE or residence permit as applicable, and the transport documents. We hand you the specific list when your file is opened.` },
      { q: `Can I put new items in the container?`, a: `You can, but they do not travel under the same treatment. Household goods are used personal property; a new, unused article in its original packaging can be treated by customs as merchandise, with the duties and VAT of a normal import. If you plan to bring something like that, tell us before we pack so it is declared correctly and there is no surprise at destination.` },
      { q: `Can I take my car or my pet with the move?`, a: `The car is not household goods: it is imported through its own procedure, with homologation and registration in Spain, assessed case by case before shipping. The pet never travels in the container; it flies, with departure arranged through MIDA and MINSA in Panama and entry subject to microchip, valid rabies vaccination, and an official health certificate. Both processes start well before the rest of the move.` },
      { q: `What if my flat in Spain has no elevator, or the truck cannot stop in the street?`, a: `More common than it sounds in older districts. The usual answer is a montamuebles — an exterior hoist platform — and, where the street requires it, a municipal permit to occupy the public way. It is solved beforehand, not on delivery day: give us the exact address when you request a quote and we plan it in.` },
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
      `France draws people in with its culture, its quality of life, and its central place in Europe. We coordinate moves from Panama to Paris, Lyon, Marseille, and other cities, by sea or air, within the European Union's customs framework.`,
      `Most of these moves travel by [sea in a container](/en/services/international-sea-freight-moving/) — exclusive or shared — entering through one of the major French ports or a neighboring country's, with inland trucking to your address. Air freight is kept for what is urgent and small.`,
    ],
    sections: [
      {
        heading: `Your move to France, step by step`,
        body: [
          `We calculate your volume, recommend the right route, and pack with export-grade materials. We handle the freight and the documentation, and coordinate with agents in France for customs clearance and final delivery to your home.`,
          `Volume is measured in cubic meters (**CBM**). The route and the cost both hang off that number: in an [exclusive container (FCL)](/en/services/exclusive-container-fcl-shipping/) your goods travel alone and are sealed at your home; in a [shared container (LCL or groupage)](/en/services/shared-container-lcl-shipping/) they share space with other cargo, are consolidated in a warehouse before sailing, and are deconsolidated in another one on arrival. Cheaper for small volumes, in exchange for extra handling and a consolidation schedule you depend on.`,
          `With door-to-door service you deal with neither the port nor customs: your coordinator is accountable for the whole chain.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `The EU household-goods regime`,
        body: [
          `France applies the common European Union customs framework: the used personal property of someone transferring their normal residence from outside the Union is not treated as a commercial import.`,
          `The relief is not automatic. It depends on proving prior residence outside the Union over a continuous period, on the goods having been in your possession and use before the move, on their arriving within the window tied to the change of residence, and on your not selling or transferring them for a period afterwards. We confirm the exact deadlines with the destination agent for your file: they change, and quoting them from memory is a bad idea.`,
          `The paperwork turns on three pieces: proof that you were residing outside the Union, proof of your new address in France, and a valued, signed inventory, usually translated into French. Add the passport, the visa or residence permit, and the transport documents. New articles, alcohol, and tobacco fall outside the regime and take their own tax treatment.`,
        ],
      },
      {
        heading: `Paris, Lyon, Marseille, and everything in between`,
        body: [
          `France takes in professionals, researchers, students, and families for its labor market, its education system, and its position at the center of Europe. Paris is the great magnet, but Lyon, Toulouse, Bordeaux, Nantes, and Marseille are drawing more arrivals every year, with different housing costs and a different city rhythm.`,
          `The city matters for the logistics, not only for the life: delivering into a new building on the outskirts of Lyon is not the same job as delivering to a fourth floor with no elevator in the old center of Bordeaux. That detail is settled at quoting time, not on delivery day.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Arrange in Panama what can only be obtained in Panama: consular certificates, [pet health documentation](/en/services/international-pet-relocation/), and any record that depends on a Panamanian authority. From abroad, all of it turns slow.`,
          `Check the voltage. The French grid runs at 230 volts and 50 hertz; Panama's at 110 volts and 60 hertz, and the plugs are different. Modern electronics usually accepts both ranges — the power supply label says so — but a large appliance with a motor or a heating element usually does not.`,
          `Think about access. Many older French buildings have narrow staircases and tiny elevators, and on plenty of streets the truck needs municipal authorization to park. The standard answer is the **monte-meubles**, an exterior hoist platform that lifts loads up the façade. It is booked in advance.`,
          `The car is not household goods: it is imported through its own procedure, with homologation and registration at destination. The pet never travels in the container: it leaves Panama with the process handled through **MIDA and MINSA** and enters Europe with a microchip, a valid rabies vaccination, and an official health certificate, plus a prior serological test in certain cases.`,
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
      { q: `What's the best shipping method from Panama to France?`, a: `A sea container for a full household and air freight for urgent or small shipments. We determine this based on your volume and timeline.` },
      { q: `Do household-goods exemptions apply?`, a: `Used household goods on a change of residence can qualify under the European regime subject to certain conditions: prior residence outside the Union, prior possession and use of the goods, arrival within the window tied to the move, and a commitment not to transfer them for a period. We review your case and confirm the conditions in force before you ship.` },
      { q: `What paperwork does French customs ask for?`, a: `Usually proof of your previous residence outside the European Union, proof of your new address in France, and a valued, signed inventory, normally in French, along with your passport and the permit covering your stay. We hand you the specific list when your file is opened.` },
      { q: `What if my flat in Paris has no elevator?`, a: `That is the norm in older buildings. It is solved with a monte-meubles — an exterior hoist platform — and, where the street requires it, a municipal parking permit. Give us the exact address when you request a quote and it is planned in.` },
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
      `Portugal has become one of the favorite destinations for expats, thanks to its climate, its safety, and its quality of life. We coordinate moves from Panama to Lisbon, Porto, and other cities, by sea or air, with European Union customs handling.`,
      `Nearly all of these moves travel by [sea in a container](/en/services/international-sea-freight-moving/). Air freight is used for what is urgent and small, normally as a complement to the container rather than a substitute for it.`,
    ],
    sections: [
      {
        heading: `How we move your home to Portugal`,
        body: [
          `After the volume inspection we recommend the best route and prepare your goods with export-grade packing and an inventory. We handle freight, documentation, and delivery through our local network in Portugal.`,
          `Volume is measured in cubic meters (**CBM**) and it defines the rest. In an [exclusive container (FCL)](/en/services/exclusive-container-fcl-shipping/) your goods travel alone, sealed from your home. In a [shared container (LCL or groupage)](/en/services/shared-container-lcl-shipping/) they share space with other cargo: consolidated in a warehouse before sailing, deconsolidated in another one on arrival. For a small apartment that is usually the sensible option, in exchange for depending on a consolidation schedule.`,
          `With door-to-door service you handle nothing with the port or with customs. Your coordinator is accountable for the whole chain, right to your front door.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Portuguese customs and the household-goods regime`,
        body: [
          `Portugal applies the common European Union customs framework: the used personal property of someone transferring their normal residence from outside the Union is not treated as a commercial import.`,
          `The relief comes with conditions. It depends on proving prior residence outside the Union over a continuous period, on the goods having been yours and in your use before the move, on their arriving within the window tied to the change of residence, and on their not being sold or transferred for a period afterwards. We verify the specific deadlines with the destination agent for your case.`,
          `In practice the file combines proof of your previous residence outside the Union, proof of your new residence in Portugal, and a valued, signed inventory, usually in Portuguese. It is also worth having your **NIF** — the Portuguese tax identification number — sorted out: in Portugal it is asked for almost everywhere, and not having it stalls procedures that have nothing to do with customs.`,
        ],
      },
      {
        heading: `Lisbon, Porto, and the rest of the country`,
        body: [
          `Portugal attracts through a combination that is hard to repeat: a temperate climate, safety, cities built to human scale, and an international community large enough to make arriving easy. Lisbon and Porto take most of the arrivals; the Algarve draws mainly retirees; Coimbra and Braga, students and families.`,
          `For someone coming from Panama there is one advantage worth naming: the language is not the same, but it is close enough that the first month is not a wall. The hard part of settling in Portugal is almost never the language — it is the paperwork.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Get ahead of the documents that depend on a Panamanian authority or a consulate: residence certificates, consular records, and all of your [pets' health paperwork](/en/services/international-pet-relocation/). Chasing them once you are already installed in Portugal costs weeks of mail and appointments.`,
          `Check the voltage. The Portuguese grid runs at 230 volts and 50 hertz; Panama's at 110 volts and 60 hertz, and the plugs are different. Modern electronics usually accepts both ranges — it is printed on the power supply — but large appliances with a motor or a heating element usually do not.`,
          `Think about access to your new home. Lisbon and Porto are full of old buildings on steep, narrow streets, with staircases that will not take a sofa and elevators that will not take a mattress. The usual answer is an exterior hoist platform and, where the street requires it, municipal authorization to park the truck. It is booked beforehand, not on delivery day.`,
          `The car travels on its own track, with homologation and registration at destination, and is assessed case by case before shipping. The pet never travels in the container: it leaves Panama with the process handled through **MIDA and MINSA** and enters Europe with a microchip, a valid rabies vaccination, and an official health certificate.`,
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
      { q: `How long does the move take?`, a: `Total time combines sea transit with origin and destination processes (packing, customs, and delivery). We confirm the exact estimate for this corridor in your quote.` },
      { q: `What paperwork does Portuguese customs ask for?`, a: `Usually proof of your previous residence outside the European Union, proof of your new residence in Portugal, and a valued, signed inventory, normally in Portuguese, along with your passport and the permit covering your stay. It is also worth having the Portuguese NIF. We hand you the specific list when your file is opened.` },
      { q: `Can I include appliances or furniture I just bought?`, a: `You can, but they do not travel under the same treatment. Household goods are used personal property; a new, unused article can be treated by customs as merchandise, with the taxes of a normal import. Tell us before we pack so it is declared correctly.` },
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
      `Switzerland attracts senior professionals with its quality of life, its safety, and its economy. We coordinate moves from Panama to Zurich, Geneva, Basel, and other cities, by sea or air. As a non-EU member, Switzerland has its own customs regime, which we handle with care.`,
      `This corridor has two particularities worth understanding from the start: Switzerland is landlocked, and it is not part of the European Union. Both change how your container arrives and how it is cleared.`,
    ],
    sections: [
      {
        heading: `A country with no coastline: how your container reaches Switzerland`,
        body: [
          `No ship docks in Switzerland. The [sea leg](/en/services/international-sea-freight-moving/) ends at a European port — northern or Mediterranean, depending on the service — and from there the cargo continues by road or rail to your city. That inland leg is part of the cost and the schedule, not an improvised extra at the end.`,
          `Volume is measured in cubic meters (**CBM**) and it defines the route. In an [exclusive container (FCL)](/en/services/exclusive-container-fcl-shipping/) your goods travel alone and are sealed at your home. In a shared container (LCL or groupage) they share space with other cargo: consolidated in a warehouse before sailing, deconsolidated in another one on arrival, ahead of the inland leg.`,
          `We prepare your goods with export-grade packing and a detailed inventory, and coordinate the freight, the clearance, and the delivery with local agents. Documentary precision matters especially in Swiss clearance.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Swiss customs: outside the European framework`,
        body: [
          `Unlike its neighbors, Switzerland is not a member of the European Union and applies its own customs rules. The fact that your move passes through a German, Belgian, or Italian port does not put it under the European regime: crossing the Swiss border starts a different clearance.`,
          `Switzerland provides for the import of removal goods — **Übersiedlungsgut**, or **effets de déménagement** — by someone transferring their domicile to the country. The treatment comes with conditions: that the goods were in your possession and use for a period before the move, that they are intended to go on being used in your new home, and that they are not transferred or sold for a period afterwards. We confirm the exact deadlines and thresholds with the destination agent for your file.`,
          `Documentation is the heart of the process: a valued, detailed, signed inventory — normally in German, French, or Italian depending on the canton — together with the residence permit or employment contract that justifies the move, the housing contract, and the passport. New articles, alcohol, and tobacco fall outside the regime and are handled separately. A vague inventory is not penalized with a warning; it is penalized with an inspection.`,
        ],
      },
      {
        heading: `Zurich, Geneva, Basel, and the rest`,
        body: [
          `Switzerland concentrates international organizations, banking, pharmaceuticals, and research, and takes in professionals from everywhere as a result. Geneva and Lausanne are French-speaking; Zurich, Bern, and Basel German-speaking; Ticino Italian-speaking. That division is not folklore: it determines the language of your customs file and of your housing paperwork.`,
          `It also determines the operation at destination. Swiss cities are orderly right down to the delivery: loading and unloading hours, street space reservations, and building rules that are followed without exception. It is a comfortable destination to operate in, as long as it is planned.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Have the document that justifies your move ready before you ship — residence permit, employment contract, or whatever applies. Swiss removal clearance rests on it, and without that paper the cargo waits.`,
          `Check the voltage and the plugs. The Swiss grid runs at 230 volts and 50 hertz against Panama's 110 volts and 60 hertz, and Switzerland also uses its own socket type, different from what you will find in France or Germany. Modern electronics usually accepts both voltage ranges, but large appliances with a motor or a heating element usually do not.`,
          `Think about access. Many buildings in Swiss old towns have narrow staircases and small elevators, and city-center streets generally require authorization to park the truck. The usual answer is an exterior hoist platform, booked in advance.`,
          `The car is not household goods: it is imported through its own procedure, with homologation and registration in Switzerland, assessed case by case before shipping. The [pet](/en/services/international-pet-relocation/) never travels in the container: it leaves Panama with the process handled through **MIDA and MINSA** and enters with a microchip, a valid rabies vaccination, and an official health certificate.`,
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
      { q: `Does Switzerland have different rules than the EU?`, a: `Yes. As a non-member of the European Union, Switzerland applies its own customs regime. The fact that your container enters Europe through a German or Italian port changes nothing: Swiss clearance begins at the Swiss border. We handle the specific documentation it requires for household goods.` },
      { q: `Do I need a detailed inventory?`, a: `Yes, and it is the centerpiece of the file. A valued, precise, signed inventory speeds up Swiss clearance; a vague one triggers an inspection. Our professional packing generates it as part of the service.` },
      { q: `How does my container reach a landlocked country?`, a: `The sea leg ends at a European port and from there the cargo continues by road or rail to your city. That inland leg is included in the door-to-door service and forms part of the cost and the schedule we confirm in your quote.` },
      { q: `What language does the documentation have to be in?`, a: `It depends on the destination canton: German, French, or Italian. We define it when your file is opened and prepare the inventory in the right language.` },
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
      `It is one of the easiest European destinations to operate from Panama. The part that catches people out is not the ship — it is the staircase in the building they are moving into.`,
    ],
    sections: [
      {
        heading: `Rotterdam, the way in`,
        body: [
          `We calculate your volume, recommend the route, and pack with export-grade materials. We handle the documentation and coordinate with Dutch agents for customs clearance and the last mile.`,
          `Volume is measured in cubic meters (**CBM**). In an [exclusive container (FCL)](/en/services/exclusive-container-fcl-shipping/) your goods travel alone and are sealed at your home; in a [shared container (LCL or groupage)](/en/services/shared-container-lcl-shipping/) they share space with other cargo, are consolidated in a warehouse before sailing, and are deconsolidated in another one on arrival. The density of services calling at Dutch ports makes the shared option a particularly reasonable one here for small volumes.`,
          `Rotterdam handles a very large share of Europe's container traffic, with the infrastructure and inland connections that implies. It promises no scheduling miracles, but it does reduce the bottlenecks that show up at smaller ports.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Dutch customs and the household-goods regime (EU framework)`,
        body: [
          `As an EU member state, the Netherlands applies the common customs framework: the used personal property of someone transferring their normal residence from outside the Union is not treated as a commercial import.`,
          `The relief comes with conditions: prior residence outside the Union over a continuous period, prior possession and use of the goods, arrival within the window tied to the move, and a commitment not to sell or transfer them for a period afterwards. We confirm the specific deadlines with the destination agent for your case.`,
          `The usual file brings together proof of your previous residence outside the Union, proof of your new Dutch address — normally your registration at the town hall of the municipality where you will live — and a valued, signed inventory. That municipal registration is worth sorting out early: in the Netherlands it opens the door to almost everything else, from the bank to health insurance.`,
        ],
      },
      {
        heading: `Amsterdam, The Hague, Rotterdam, Utrecht`,
        body: [
          `The Netherlands takes in professionals, researchers, and families for its international labor market, its level of English, and the friendly scale of its cities. Amsterdam is the most requested destination, The Hague concentrates international institutions, Rotterdam has the port and industrial pulse, and Eindhoven and Utrecht are growing on technology.`,
          `Living there changes habits fast. Plenty of families arriving from Panama end up using the bicycle as their main transport and discover that the car they shipped spends more time parked than on the road. It is worth thinking about before you [put it on a ship](/en/services/car-shipping-in-container/).`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Get ahead of the certificates that depend on a Panamanian authority or a consulate, and all of your pets' health paperwork. From a distance, each of those papers costs weeks.`,
          `Check the voltage. The Dutch grid runs at 230 volts and 50 hertz; Panama's at 110 volts and 60 hertz, and the plugs are different. Modern electronics usually accepts both ranges — the power supply label says so — but large appliances with a motor or a heating element usually do not.`,
          `And now the part nobody anticipates: the canal houses of Amsterdam, Utrecht, and Leiden have extremely narrow, steep staircases, built to carry people and not sofas. That is why so many façades still have a hoisting beam at the roofline, and why delivery is very often done with an exterior hoist platform that brings the load in through the window. It needs to be booked in advance and, in several cities, a municipal permit to occupy the street. Give us the exact address when you request a quote and we have it contracted from the start.`,
          `The car is not household goods: it is imported through its own procedure, with homologation and registration at destination. The [pet](/en/services/international-pet-relocation/) never travels in the container: it leaves Panama with the process handled through **MIDA and MINSA** and enters Europe with a microchip, a valid rabies vaccination, and an official health certificate.`,
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
      { q: `Does the Port of Rotterdam speed up my move?`, a: `Rotterdam is one of the largest and most efficient ports in the world, with excellent inland connections. It is a real logistical advantage for moves to the Netherlands, although the final schedule depends on the service contracted and is confirmed in your quote.` },
      { q: `Sea or air freight?`, a: `Sea freight for a full household; air freight for small or urgent shipments. We determine this based on your volume and timeline.` },
      { q: `How does furniture get up those narrow staircases?`, a: `Usually it does not go up the staircase at all. An exterior hoist platform brings the load in through the window, a standard method in canal houses. It has to be booked in advance and, in several cities, requires a municipal permit to occupy the street: we arrange it if you give us the exact address when you request a quote.` },
      { q: `What paperwork does Dutch customs ask for?`, a: `Usually proof of your previous residence outside the European Union, your registration at the town hall of your new municipality, and a valued, signed inventory, along with your passport and the permit covering your stay. We hand you the specific list when your file is opened.` },
    ],
    related: ['alemania', 'francia', 'reino-unido'],
  },
];
