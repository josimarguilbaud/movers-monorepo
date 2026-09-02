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
    /* No "land": the Darién Gap breaks the road between Panama and Colombia,
       which is the very point the page body makes. */
    metaDescription: `Moving from Panama to Colombia: Bogotá, Medellín, Cali, Cartagena. Sea or air freight with customs clearance and door-to-door delivery. Get a quote from PIM Panama.`,
    heroTagline: `From Panama to Bogotá, Medellín, or Cartagena, close and well connected.`,
    heroImage: DIMG.port,
    intro: [
      `The proximity and the strong ties between Panama and Colombia make this one of the most active corridors in the region. We coordinate moves to Bogotá, Medellín, Cali, Cartagena, and other cities by sea or air.`,
      `It is the closest destination we operate and, even so, one where people arrive with the wrong idea: that because the two countries are neighbors, their move can go by road. It cannot. That single fact defines the whole corridor.`,
    ],
    sections: [
      {
        heading: `Neighbors with no road: why your move goes by sea or air`,
        body: [
          `Panama and Colombia share a border, but there is no land route between the two countries: the **Darién Gap** breaks the Pan-American Highway. No truck leaves Panama City and arrives in Bogotá. Every move to Colombia goes out [by sea](/en/services/international-sea-freight-moving/) or [by air](/en/services/international-air-freight-moving/).`,
          `The good news is that proximity works in your favor anyway. Sea services to Colombian ports are frequent, and air freight is a realistic alternative here — not just an emergency measure — when the volume is moderate and time matters.`,
          `Volume is measured in cubic meters (**CBM**). In an exclusive container (FCL) your goods travel alone and are sealed at your home; in a shared container (LCL or groupage) they share space with other cargo, are consolidated in a warehouse before sailing, and are deconsolidated in another one on arrival. We advise you between the two based on your volume, and coordinate customs clearance and delivery with agents in Colombia.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Colombian customs and the household-goods regime`,
        body: [
          `In Colombia the customs authority is the **DIAN**. It is worth naming it precisely, because the industry frequently mixes up one country's authorities with another's: in Panama customs is the **ANA**, the Autoridad Nacional de Aduanas, and it has nothing to do with Colombian clearance.`,
          `Colombia provides a household-goods regime for someone establishing or re-establishing residence in the country. The treatment comes with conditions: proof of prior residence abroad over a continuous period, goods that are used and of domestic use, an import made within a time window tied to your arrival in the country, and a declaration made in a single operation. We confirm the exact deadlines and limits with the destination agent for your file.`,
          `Typical documentation includes your passport with the stamps backing up your entry and exit history, your visa or foreigner ID card depending on your immigration status, and a valued packing list, in Spanish, describing every carton by its real contents. New articles — those arriving unused and in their original packaging — do not fall under the household-goods regime: customs can treat them as merchandise.`,
        ],
      },
      {
        heading: `Bogotá, Medellín, Cali, Cartagena`,
        body: [
          `Colombia receives Panamanians and foreign residents of Panama every year for work, studies, business, and family. Bogotá concentrates corporate employment and head offices; Medellín attracts people looking for a stable climate and a large international community; Cali and Barranquilla have their own pulse; Cartagena combines tourism, port, and second homes.`,
          `Geography changes the last mile more than you would expect. Cargo entering through Cartagena or Barranquilla climbs inland on mountain roads; cargo bound for Cali usually enters through Buenaventura. The exact point of entry depends on the service and is confirmed in your quote, but the inland leg is always included in the door-to-door service.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Be clear about your immigration status before you move a single box. The Colombian household-goods regime rests on it, and a file that arrives with the visa still in process sits waiting at the port, generating storage costs that were never in the budget.`,
          `Here you have a little-known advantage: the Colombian grid runs at 110 volts and 60 hertz, the same as Panama's, and the plugs are the same. Your appliances work as they are. It is one of the few destinations where you do not have to do that math.`,
          `The car is a separate and difficult case. [Vehicle imports](/en/services/car-shipping-in-container/) into Colombia are heavily regulated and are not resolved within the household-goods regime. It is assessed case by case, before shipping, and in many situations the honest recommendation is to sell it in Panama.`,
          `The [pet](/en/services/international-pet-relocation/) never travels in the container. It leaves Panama with the process handled through **MIDA and MINSA**, and enters Colombia with the official health certificate and the current vaccinations required by the Colombian agricultural health authority. It starts long before the rest of the move.`,
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible benefits for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `Which Colombian cities do you deliver to?`, a: `We coordinate moves to major cities — Bogotá, Medellín, Cali, Cartagena, Barranquilla — with final door-to-door delivery through our network.` },
      { q: `Can I send my move by road if the countries are neighbors?`, a: `No. There is no land route between Panama and Colombia: the Darién Gap breaks the Pan-American Highway. Every move to Colombia travels by sea or by air.` },
      { q: `What's the most convenient shipping method?`, a: `Given the short distance, both sea and air freight are efficient. Sea freight is more economical for a full household; air freight is faster for smaller shipments or when time is the constraint.` },
      { q: `What does Colombian customs require for household goods?`, a: `The DIAN provides a household-goods regime for someone establishing residence in the country, conditional on prior residence abroad, on the goods being used and of domestic use, and on the import being made within the window tied to your arrival. It rests on your passport, your visa or foreigner ID card, and a valued packing list. We review your case before you ship.` },
      { q: `Do I have to replace my appliances?`, a: `No. Colombia uses 110 volts and 60 hertz, the same as Panama, with the same plugs. Your equipment works without a transformer or an adapter.` },
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
      `Argentina, with its cultural depth and its big cities, is a regular destination within the South American corridor. We coordinate moves from Panama to Buenos Aires, Córdoba, Rosario, and other cities, mainly by sea.`,
      `This is a corridor where the paperwork weighs more than the distance. The part you have to get right does not happen at the Argentine port — it happens in Panama, before the container leaves.`,
    ],
    sections: [
      {
        heading: `How we move your home to Argentina`,
        body: [
          `We calculate your volume, pack with export-grade materials, and handle the freight and the documentation. We coordinate customs clearance and final delivery with Argentine agents.`,
          `Volume is measured in cubic meters (**CBM**). In an [exclusive container (FCL)](/en/services/exclusive-container-fcl-shipping/) your goods travel alone, sealed from your home; in a shared container (LCL or groupage) they share space with other cargo, are consolidated in a warehouse before sailing, and are deconsolidated in another one on arrival. For a full household the exclusive container is almost always simpler to clear.`,
          `Cargo normally enters through the port area of Buenos Aires and, if your destination is Córdoba, Rosario, Mendoza, or anywhere inland, continues by road. That land leg is included in the door-to-door service.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Argentine customs and the inventory you sign before shipping`,
        body: [
          `Argentina provides a regime for the household goods of someone settling or resettling in the country. It comes with conditions: proof of prior residence abroad over a continuous period, goods that are used and of domestic use, and an import made within the window tied to your arrival. We confirm the exact deadlines with the destination agent for your file.`,
          `What makes this corridor distinctive is procedural, and it is worth knowing on day one: under the settlement-relief scenarios, the list of goods is usually presented to and endorsed by the Argentine consulate **before shipping**. In other words, the inventory stops being an internal moving document and becomes an official one. Anything not on that list, or described badly, is a problem that cannot be fixed later.`,
          `That is why our inventory for Argentina is written to a different standard: every carton described by its real contents, with a declared value, and no boxes labeled "miscellaneous". That preparation is the difference between an orderly clearance and cargo sitting still while storage charges accumulate. Our [professional packing service](/en/services/professional-packing-services/) generates it as part of the job.`,
        ],
      },
      {
        heading: `Buenos Aires and the interior`,
        body: [
          `Buenos Aires takes most of the arrivals, with a cultural and culinary life that explains much of the destination's appeal. Córdoba and Rosario have strong universities and a different cost of living; Mendoza attracts people looking for another pace; Patagonia attracts people looking for another country inside the country.`,
          `Argentine inland distance is real: delivering in Buenos Aires and delivering in Bariloche are neither the same operation nor the same schedule. The sooner you give us the exact address, the better the final leg is planned.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Start with the consulate. If your case goes through settlement relief, the consular endorsement of the inventory is done in Panama and it conditions your sailing date. Trying to resolve it once you are already installed in Argentina is the most expensive mistake on this corridor.`,
          `Check the voltage. The Argentine grid runs at 220 volts and 50 hertz; Panama's at 110 volts and 60 hertz, and the plugs are different. Modern electronics usually accepts both ranges — the power supply label says so — but large appliances with a motor or a heating element usually do not.`,
          `The car does not fall under household goods. [Vehicle imports](/en/services/car-shipping-in-container/) into Argentina are heavily regulated and assessed case by case before shipping; in many situations the honest recommendation is to sell it in Panama.`,
          `The [pet](/en/services/international-pet-relocation/) never travels in the container: it leaves Panama with the process handled through **MIDA and MINSA** and enters with the official health certificate and the current vaccinations required by the Argentine health authority. It is a separate file and it starts much earlier.`,
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible treatment for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `How long does a move to Argentina take?`, a: `Total time combines ocean transit with origin and destination processes (packing, customs, and delivery). We'll confirm the exact estimate for this corridor in your quote.` },
      { q: `What documentation do I need?`, a: `Importing household goods requires specific documentation, which we prepare for you: the valued, detailed inventory, your passport, the immigration paperwork supporting your settlement, and the transport documents. Under the relief scenarios, the consular endorsement of the inventory as well.` },
      { q: `Is it true the inventory goes to the consulate before shipping?`, a: `Under the settlement-relief scenarios, yes: the list of goods is usually endorsed at the Argentine consulate in Panama before the cargo sails. That is why the inventory is prepared with particular care and why it pays to open your file early.` },
      { q: `Can I include new items in the move?`, a: `The regime covers used goods of domestic use. A new, unused article in its original packaging can be treated by customs as merchandise, with the taxes of a normal import. Tell us before we pack so it is declared correctly.` },
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
      `Chile stands out for its stability and its quality of life, and welcomes professionals and families from across the region. We coordinate moves from Panama to Santiago, Valparaíso, Concepción, and other cities by sea or air.`,
      `It is a Pacific-to-Pacific corridor, comfortable from Panama. Its particular demand is not at customs — it is at the plant and animal health inspection, which Chile takes very seriously.`,
    ],
    sections: [
      {
        heading: `Your move to Chile, step by step`,
        body: [
          `We prepare your goods with [export-grade packing](/en/services/professional-packing-services/) and a full inventory, handle the freight, and coordinate customs clearance and delivery to your new address with Chilean agents.`,
          `Volume is measured in cubic meters (**CBM**). In an exclusive container (FCL) your goods travel alone and are sealed at your home; in a shared container (LCL or groupage) they share space with other cargo, are consolidated in a warehouse before sailing, and are deconsolidated in another one on arrival. The choice depends on your volume and your calendar.`,
          `Cargo enters through the Pacific ports — Valparaíso and San Antonio are the ones that serve Santiago best — and continues by road from there. Chile is a long, narrow country: the last mile north or south can be a considerable overland leg, and it is included in the door-to-door service.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Chilean customs and the SAG plant and animal health inspection`,
        body: [
          `Chile provides a treatment for the household goods of someone transferring their residence to the country, conditional on proving prior residence abroad, on the goods being used and of domestic use, and on the import being made within the window tied to your arrival and your immigration status. We confirm the exact deadlines with the destination agent.`,
          `But the filter that surprises people moving to Chile is not the customs one — it is the sanitary one. Chile is an agricultural country protected by natural barriers — desert, mountain range, and ocean — and it defends that condition with rigorous plant and animal health controls run by the **Servicio Agrícola y Ganadero (SAG)**. Personal effects are inspected for soil, untreated wood, seeds, plants, food, and organic material.`,
          `That changes how you pack. Plants and food stay behind. Garden tools, bicycles, hiking boots, sports and camping gear are cleaned thoroughly before they go in the box. Wooden furniture and wooden packaging must meet the required treatments. A single item with soil stuck to it can trigger treatment, detention, or destruction of what surrounds it.`,
        ],
      },
      {
        heading: `Santiago, Valparaíso, and the rest of the country`,
        body: [
          `Santiago concentrates corporate employment, the universities, and most of the arrivals, with the Andes as a backdrop and a dry climate that catches out anyone coming from the tropics. Valparaíso and Viña del Mar offer coastal life; Concepción is a university and industrial hub; the south is a whole other country.`,
          `One thing worth mentioning that people discover in winter: much Chilean housing is not built for cold the way it would be in Europe, and heating is solved house by house. If you are coming from Panama, that is the real adjustment — more than the move itself.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Clean before you pack. It is the most useful advice for this destination and the most ignored: footwear, tools, garden furniture, bicycles, and sports gear go through an inspection looking for exactly what stuck to the sole.`,
          `Have your immigration status resolved. The Chilean household-goods treatment rests on it, and cargo that arrives ahead of the visa waits at the port accumulating storage.`,
          `Check the voltage. The Chilean grid runs at 220 volts and 50 hertz; Panama's at 110 volts and 60 hertz, and the plugs are different. Modern electronics usually accepts both ranges, but large appliances with a motor or a heating element usually do not.`,
          `The car travels on its own track, under strict import rules, and is assessed case by case before shipping. The [pet](/en/services/international-pet-relocation/) never travels in the container: it leaves Panama with the process handled through **MIDA and MINSA** and enters Chile with the official health certificate the SAG requires.`,
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible benefits for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `Which ports does cargo arrive at in Chile?`, a: `Chile has major Pacific ports, such as Valparaíso and San Antonio, with strong connections to Santiago and the rest of the country. The exact port depends on the service contracted and is confirmed in your quote.` },
      { q: `Sea or air freight to Chile?`, a: `Sea freight is the most economical option for a full household; air freight is faster for smaller or urgent shipments.` },
      { q: `What is the SAG and why does it inspect my move?`, a: `The Servicio Agrícola y Ganadero is Chile's plant and animal health authority. It inspects personal effects to keep pests out: soil, untreated wood, seeds, plants, food, and organic material. We prepare and declare your household goods in line with those rules and tell you what is not worth shipping.` },
      { q: `What shouldn't I pack for Chile?`, a: `Plants, seeds, food, and anything carrying soil or plant residue. And clean footwear, garden tools, bicycles, and camping gear thoroughly before packing them: that is exactly what gets inspected.` },
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
      `Peru, with Lima as its great hub and a country of enormous cultural richness, is a frequent destination in the South American corridor. We coordinate moves from Panama to Lima, Arequipa, Cusco, and other cities by sea or air.`,
      `It is a Pacific-to-Pacific corridor with good connections from Panama. The part that demands planning is not the ship — it is the time window Peruvian customs ties to your arrival in the country.`,
    ],
    sections: [
      {
        heading: `How we move your home to Peru`,
        body: [
          `We calculate volume, pack with export-grade materials, and handle the freight and the documentation. We coordinate customs clearance and final delivery with Peruvian agents.`,
          `Volume is measured in cubic meters (**CBM**). In an [exclusive container (FCL)](/en/services/exclusive-container-fcl-shipping/) your goods travel alone and are sealed at your home; in a [shared container (LCL or groupage)](/en/services/shared-container-lcl-shipping/) they share space with other cargo, are consolidated in a warehouse before sailing, and are deconsolidated in another one on arrival. For an apartment the shared option usually makes sense; for a full household, the exclusive one.`,
          `Sea cargo normally enters through Callao, the port serving Lima, and continues by road if your destination is Arequipa, Trujillo, Cusco, or any other city. That land leg is included in the door-to-door service.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Peruvian customs and the household-goods regime`,
        body: [
          `In Peru the customs authority is **SUNAT**. It provides a household-goods regime for someone establishing residence in the country, conditional on proving prior residence abroad over a continuous period, on the goods being used and of domestic use, and on the import being carried out within a time window referenced to your arrival in Peru.`,
          `That window is the key to this corridor and the reason it pays to open your file before you travel. If your household goods leave Panama late, they can arrive outside the period the regime covers and end up treated as an ordinary import. The calculation runs backwards from what people assume: first your arrival date, then the sailing date.`,
          `Typical documentation includes your passport with the stamps backing up your immigration history, your foreigner ID card or visa depending on your status, and a valued packing list, in Spanish, with every carton described by its real contents. New, unused articles do not fall under the regime: customs can treat them as merchandise.`,
        ],
      },
      {
        heading: `Lima, Arequipa, Cusco, and the rest of the country`,
        body: [
          `Lima concentrates employment, corporate head offices, and most of the arrivals, with a grey, humid coastal climate for much of the year that surprises anyone expecting the tropics. Arequipa and Trujillo carry their own economic weight; Cusco lives on tourism and on an altitude worth factoring in.`,
          `Peruvian geography makes the last mile a real subject. Taking cargo up into the highlands is not the same job as delivering in Miraflores, and access in the historic centers of several cities is narrow. The sooner you give us the exact address, the better the final leg is resolved.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Coordinate the sailing date with the date you arrive in Peru. That is where this corridor is won or lost, and it is decided in the quote, not at the port.`,
          `Good news on the current: the Peruvian grid runs at 220 volts but at 60 hertz, the same frequency as Panama's. The difference is in the voltage, not the frequency, so equipment with a switching power supply usually works with nothing more than a plug change, while large appliances with a motor or a heating element normally need replacing. Check each appliance's label before deciding.`,
          `The car is a separate case: [vehicle imports](/en/services/car-shipping-in-container/) into Peru are regulated and are not resolved within the household-goods regime. It is assessed before shipping.`,
          `The [pet](/en/services/international-pet-relocation/) never travels in the container: it leaves Panama with the process handled through **MIDA and MINSA** and enters Peru with the official health certificate and the current vaccinations required by the Peruvian agricultural health authority.`,
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible treatment for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `Do you deliver outside of Lima?`, a: `We coordinate delivery to Lima and other cities across the country through our network and last-mile transport. Sea cargo usually enters through Callao and continues by road.` },
      { q: `How long does it take?`, a: `Total time combines sea transit with origin and destination processes (packing, customs, and delivery). We'll confirm the exact estimate for this corridor in your quote.` },
      { q: `Can I ship my household goods before I move?`, a: `It should be coordinated. SUNAT's household-goods regime rests on a time window referenced to your arrival in Peru: if the cargo arrives too early or too late relative to that date, it can fall outside the benefit. We plan the sailing around your travel date.` },
      { q: `What documentation do I need?`, a: `Usually your passport with the immigration stamps, your foreigner ID card or visa depending on your status, and a valued packing list in Spanish with every carton described by its real contents, plus the transport documents. We hand you the specific list when your file is opened.` },
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
      `Ecuador, increasingly popular among retirees and expats for its cost of living and its climate, is a regular destination on this corridor. We coordinate moves from Panama to Quito, Guayaquil, Cuenca, and other cities by sea or air.`,
      `For someone leaving Panama it is one of the friendliest destinations there is: same currency, same voltage, same plugs, and a short distance. The demanding part is the customs file, which rests on your immigration status.`,
    ],
    sections: [
      {
        heading: `Your move to Ecuador, step by step`,
        body: [
          `We prepare your goods with export-grade packing and a full inventory, handle the freight, and coordinate customs clearance and final delivery with Ecuadorian agents.`,
          `Volume is measured in cubic meters (**CBM**). In an [exclusive container (FCL)](/en/services/exclusive-container-fcl-shipping/) your goods travel alone and are sealed at your home; in a [shared container (LCL or groupage)](/en/services/shared-container-lcl-shipping/) they share space with other cargo, are consolidated in a warehouse before sailing, and are deconsolidated in another one on arrival. Given the short distance, both routes work well on this corridor.`,
          `Sea cargo usually enters through Guayaquil, the country's major port, and climbs by road to Quito, Cuenca, or Loja from there. That land leg — which in Quito's case means a considerable gain in altitude — is included in the door-to-door service.`,
        ],
        image: DIMG.containers,
      },
      {
        heading: `Ecuadorian customs and the household-goods regime`,
        body: [
          `In Ecuador the customs authority is **SENAE**. It provides a household-goods regime for someone establishing themselves as a resident in the country, with specific provisions for migrants, [retirees](/en/services/retiree-moving-services/), and returning nationals.`,
          `The treatment comes with conditions: proof of prior residence abroad over a continuous period, goods that are used and of domestic use, an import made within the time window referenced to your arrival in the country, and a declaration made in a single operation. We confirm the exact deadlines and limits with the destination agent for your file, because they change and they depend on the type of visa.`,
          `Documentation rests on the residence visa — the visa type carries more weight here than at other destinations — the passport with the immigration stamps, and a valued packing list, in Spanish, with every carton described by its real contents. New, unused articles do not fall under the regime: customs can treat them as merchandise.`,
        ],
      },
      {
        heading: `Quito, Guayaquil, Cuenca`,
        body: [
          `Ecuador has become one of the most chosen retirement destinations on the continent, and not only for the cost of living. Cuenca attracts people with its colonial center, its temperate climate, and its international community; Quito, as the capital and for the altitude that sets its rhythm; Guayaquil, for the port, the heat, and the commercial activity.`,
          `The altitude of Quito and Cuenca is a practical factor, not an anecdote: it changes how the first month feels, and it also changes how a delivery with stairs is planned. Worth keeping in mind when deciding what to bring.`,
        ],
        image: DIMG.port,
      },
      {
        heading: `Before you ship: what to settle in Panama`,
        body: [
          `Have your visa resolved before you ship. In Ecuador the household-goods regime rests on the visa type and on your arrival date; cargo that gets ahead of the immigration process ends up waiting at the port and accumulating storage.`,
          `Here you do not have to change anything electrical: the Ecuadorian grid runs at 110 volts and 60 hertz, the same as Panama's, and the plugs are the same. Your appliances work as they are. Ecuador also uses the US dollar, so there is no currency conversion to calculate either.`,
          `The car does not fall under household goods. [Vehicle imports](/en/services/car-shipping-in-container/) into Ecuador are regulated and assessed case by case before shipping.`,
          `The [pet](/en/services/international-pet-relocation/) never travels in the container: it leaves Panama with the process handled through **MIDA and MINSA** and enters Ecuador with the official health certificate and the current vaccinations required by the Ecuadorian health authority.`,
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: `Household goods requirements; possible benefits for used household goods when relocating residence. Check current conditions.`, taxes: TBD },
    faqs: [
      { q: `Is Ecuador a good destination for retirees?`, a: `It's one of the most popular retirement destinations thanks to its cost of living and climate. Many of our moves to Ecuador involve new residents and retirees, and SENAE's household-goods regime has specific provisions for that profile.` },
      { q: `Which shipping method is best?`, a: `Sea freight is the most economical option for a full household; air freight is faster for smaller shipments. We'll help you decide based on your volume and timeline.` },
      { q: `Do I have to replace my appliances?`, a: `No. Ecuador uses 110 volts and 60 hertz, the same as Panama, with the same plugs. Your equipment works without a transformer or an adapter.` },
      { q: `What paperwork does Ecuadorian customs ask for?`, a: `Usually the residence visa — the visa type determines the treatment — your passport with the immigration stamps, and a valued packing list in Spanish with every carton described by its real contents. We review your case and hand you the specific list when your file is opened.` },
    ],
    related: ['colombia', 'peru', 'mexico'],
  },
];
