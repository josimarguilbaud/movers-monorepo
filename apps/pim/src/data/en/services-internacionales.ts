import type { Service, ServiceCategory } from '../services';
import { IMG } from '../services';

/* ---------------- Categories (9) for the hub — English ---------------- */
export const categoriesEn: ServiceCategory[] = [
  { id: 'internacionales', title: `International Moving`, slug: 'international-moving', icon: 'fa6-solid:plane-departure', image: IMG.port, blurb: `Sea freight (FCL/LCL), air freight, and door-to-door service to any destination worldwide.` },
  { id: 'vehiculos', title: `Vehicle Shipping`, slug: 'vehicle-shipping', icon: 'fa6-solid:car', image: IMG.containers, blurb: `Cars, motorcycles, and classic vehicles shipped by container or Ro-Ro, with all permits handled.` },
  { id: 'mascotas', title: `Pet Relocation`, slug: 'pet-relocation', icon: 'fa6-solid:paw', image: IMG.team, blurb: `International relocation for dogs, cats, and more, with veterinary and customs management handled for you.` },
  { id: 'contenedores', title: `Containers & Logistics`, slug: 'containers-logistics', icon: 'fa6-solid:box', image: IMG.containers, blurb: `20- and 40-foot containers, doorstep drop-off, and temporary storage.` },
  { id: 'locales', title: `Local & National Moving`, slug: 'local-national-moving', icon: 'fa6-solid:truck-fast', image: IMG.boxes, blurb: `Within the city, between provinces, and express last-minute service.` },
  { id: 'cliente', title: `Moving by Client Type`, slug: 'moving-by-client-type', icon: 'fa6-solid:users', image: IMG.team, blurb: `Residential, corporate, expat, student, and retiree moves.` },
  { id: 'especiales', title: `Special & High-Value Items`, slug: 'special-high-value-items', icon: 'fa6-solid:gem', image: IMG.packing, blurb: `Fine art, pianos, wine collections, and sports equipment with custom-built packing.` },
  { id: 'complementarios', title: `Additional Services`, slug: 'additional-services', icon: 'fa6-solid:boxes-stacked', image: IMG.warehouse, blurb: `Professional packing, insurance, storage, customs handling, and final cleaning.` },
  { id: 'casillero', title: `Mailbox & Courier`, slug: 'mailbox-courier', icon: 'fa6-solid:box-archive', image: IMG.containers, blurb: `A Miami mailbox for your US purchases plus international door-to-door courier service.` },
];

/* ---------------- Services (Batch 1: International) — English ---------------- */
export const svcInternacionales: Service[] = [
  {
    id: 'maritimas',
    categoryId: 'internacionales',
    slug: 'international-sea-freight-moving',
    icon: 'fa6-solid:ship',
    title: `International Sea Freight Moving`,
    metaTitle: `International Sea Freight Moving from Panama | PIM`,
    metaDescription: `International sea freight moving from Panama: exclusive (FCL) or shared (LCL) containers, freight rates, transit times, and door-to-door customs handling.`,
    heroTagline: `The most affordable way to move an entire household between continents.`,
    heroImage: IMG.port,
    intro: [
      `Sea freight is, by a wide margin, the preferred option for moving an entire household between countries. An ocean container offers the best balance of volume, protection, and cost: it can hold everything from a one-bedroom apartment's furnishings to a multi-bedroom house, traveling sealed and insured from port to port.`,
      `At Panama International Movers, we coordinate every sea freight move from start to finish — export packing, loading, documentation, international freight, and customs clearance at destination — so all you have to worry about is arriving at your new home. Our location at the logistics hub of the Americas gives us privileged access to shipping lines and sailings to every continent.`,
    ],
    sections: [
      {
        heading: `How does a sea freight move work?`,
        body: [
          `It all starts with a survey — in person or by video call — where we calculate the actual volume of your shipment in cubic meters (CBM). That figure determines whether an exclusive or shared container makes more sense for you, and it's the basis for an accurate quote, with no surprises.`,
          `On moving day, our crew packs your belongings with export-quality materials, draws up a detailed inventory, and loads the cargo so it makes use of every inch of the container while traveling fully secured. We then arrange the freight booking with the shipping line, issue the Bill of Lading, and handle the export and import documentation.`,
          `Upon arrival, our network of local agents handles customs clearance, last-mile ground transport, and — if you've booked our door-to-door service — delivery, basic unpacking, and removal of leftover packing material at your new home.`,
        ],
        image: IMG.containers,
      },
      {
        heading: `Freight rates and what drives the price`,
        body: [
          `The cost of a sea freight move depends mainly on three variables: volume (m³ or container type), the origin-destination route, and any additional services you choose (packing, insurance, storage, door-to-door). The larger the volume, the lower the cost per cubic meter, which is why loading efficiently is key to saving money.`,
          `There are surcharges worth knowing about in advance: port fees, terminal handling, possible customs inspections, and storage if the cargo isn't picked up on time. Your coordinator walks you through all of them clearly in the quote, so the budget you receive is the one you actually pay.`,
        ],
      },
      {
        heading: `Transit times`,
        body: [
          `The total time for a sea freight move combines the vessel's transit with origin and destination processes (packing, consolidation, customs, and delivery). Ocean transit varies by route and the shipping line's connections; customs procedures and last-mile delivery add extra days that depend on each country.`,
          `On each destination's page, you'll find the estimated times for that specific corridor. As a general rule, a door-to-door move should be planned several weeks in advance to secure space with the shipping line at the best rates.`,
        ],
      },
      {
        heading: `Which container do you need: 20 or 40 feet?`,
        body: [
          `Choosing the right container is the decision that most affects the cost of a sea freight move. A standard 20-foot container typically holds the furnishings of an apartment or a small one- to two-bedroom home; a 40-foot container — and its taller High Cube version — doubles that capacity and is ideal for homes with three or more bedrooms, or when you're shipping a car along with your household goods.`,
          `Overloading a smaller container forces a second shipment; booking one that's too large means paying for empty space. That's why the volume survey matters so much: we recommend exactly what you need — no more, no less — and make the most of every inch with professional loading.`,
        ],
        image: IMG.port,
      },
      {
        heading: `Panama: a unique logistics advantage`,
        body: [
          `Few cities in the world are as well positioned for an international move as Panama. With the Canal, the ports of Balboa (Pacific) and Colón (Atlantic), and one of the region's largest concentrations of shipping lines, Panama offers regular sailings to the Americas, Europe, Asia, and Oceania.`,
          `That connectivity translates into more routing options, better rates, and competitive transit times. As a Panamanian company with more than three decades operating in this hub, we know exactly how to put that advantage to work for you.`,
        ],
      },
      {
        heading: `Documentation and the security of your shipment`,
        body: [
          `Every sea freight move is backed by formal documentation: a detailed inventory of your belongings, the Bill of Lading issued by the shipping line, and the export and import documents we handle at origin and destination. This paperwork isn't a minor formality — it's what speeds up customs and supports your insurance coverage.`,
          `Your container travels sealed from origin, with a numbered security seal, and isn't opened again until it reaches its destination (except for random customs inspections). Combined with all-risk insurance coverage, this gives you the peace of mind that your belongings are protected throughout the entire journey.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:sack-dollar', title: `The most affordable option`, text: `The lowest cost per cubic meter for medium and large volumes.` },
      { icon: 'fa6-solid:box', title: `Ideal for full households`, text: `A single container comfortably holds the contents of an entire home.` },
      { icon: 'fa6-solid:shield-halved', title: `Sealed and insured cargo`, text: `Your container travels sealed, fully inventoried, and covered by all-risk insurance.` },
      { icon: 'fa6-solid:earth-americas', title: `Global coverage`, text: `Regular sailings to the Americas, Europe, Asia, and Oceania from Panama.` },
      { icon: 'fa6-solid:anchor', title: `The Panama hub advantage`, text: `The ports of Balboa and Colón, with shipping lines connecting to the entire world.` },
      { icon: 'fa6-solid:car', title: `Room for your vehicle`, text: `Combine your household goods and car in a single 40-foot container.` },
    ],
    faqs: [
      { q: `Exclusive or shared container?`, a: `If you're moving an entire household, an exclusive container (FCL) is usually more convenient and faster. If you're only shipping a few pieces of furniture or boxes, a shared container (LCL) lets you pay only for the space you use. During the survey, we'll recommend the best option for your volume.` },
      { q: `How far in advance should I book?`, a: `We recommend starting the process 4 to 6 weeks before your target date. This secures space with the shipping line, allows time for the survey and packing, and lets you arrange insurance on the best terms.` },
      { q: `Is insurance included?`, a: `Insurance is quoted separately because it depends on the declared value of your household goods. We offer all-risk, door-to-door policies through international insurers and can advise you on the value to declare.` },
      { q: `Can I ship my vehicle by sea?`, a: `Yes. You can ship it inside a container (sharing it with your household goods or on its own) or via the Ro-Ro system. We'll advise you on the best option based on your vehicle and destination.` },
      { q: `What happens if customs inspects my container?`, a: `Random inspections are a normal part of international trade. Because your cargo is properly packed and inventoried, the process goes smoothly; our agent at destination handles the inspection and keeps clearance moving.` },
    ],
    related: ['fcl', 'lcl', 'aereas', 'puerta-a-puerta'],
  },
  {
    id: 'fcl',
    categoryId: 'internacionales',
    slug: 'exclusive-container-fcl-shipping',
    icon: 'fa6-solid:box',
    title: `Exclusive Container (FCL)`,
    metaTitle: `Exclusive FCL Container Shipping | PIM Panama`,
    metaDescription: `Exclusive FCL containers, 20 or 40 feet, for international moves of entire households: privacy, speed, and less handling. Get a quote from PIM Panama.`,
    heroTagline: `Your entire home in a container of its own, sealed at origin and opened only at destination.`,
    heroImage: IMG.containers,
    intro: [
      `FCL (Full Container Load) means you book an entire container exclusively for your move. It's the preferred option when relocating the contents of an entire home, because it combines privacy, speed, and minimal handling of your belongings: the container is sealed at your origin address and isn't opened again until it reaches its destination.`,
      `At Panama International Movers, we work with standard 20-foot and 40-foot containers (including the taller 40-foot High Cube), and we'll advise you on which one fits your volume so you don't pay for extra space or come up short.`,
    ],
    sections: [
      {
        heading: `When does an exclusive container make sense?`,
        body: [
          `FCL is the natural choice for moving homes with two or more bedrooms, families relocating all of their furniture, or when a vehicle is shipped alongside the household goods. Since you're not sharing space with other clients' cargo, there's no consolidation wait time, and the risk of handling damage is reduced.`,
          `As a general reference, a 20-foot container usually accommodates the furnishings of an apartment or small home, while a 40-foot or 40-foot High Cube is suited to larger homes or when a car is being shipped inside the same container.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: `Advantages over a shared container`,
        body: [
          `The main advantage of FCL is that your cargo travels alone: less handling, less risk, and more predictable transit times, since it doesn't depend on a groupage load being completed. On top of that, sealing at origin adds security and streamlines customs procedures.`,
          `If your volume is small, however, an exclusive container can mean paying for space you don't use; in that case, LCL (shared) is usually more economical. Your coordinator will help you make the right call.`,
        ],
      },
      {
        heading: `20 feet, 40 feet, or 40-foot High Cube: which to choose`,
        body: [
          `A 20-foot container offers about 33 cubic meters of capacity, enough for the furnishings of an apartment or a small home. A 40-foot container doubles that space, and the High Cube variant adds roughly 30 cm (about a foot) of extra height, ideal for tall furniture, large appliances, or gaining extra stackable volume.`,
          `As a rule of thumb: a one- to two-bedroom home usually fits in a 20-foot container; a home with three or more bedrooms needs a 40-foot or 40-foot High Cube. If you're also shipping a vehicle, the 40-foot container is almost always the right choice. During the survey, we calculate your exact volume so you never pay for more than you need.`,
        ],
        image: IMG.containers,
      },
      {
        heading: `Sealing at origin: your best guarantee`,
        body: [
          `What defines FCL is that your container is closed and sealed at your origin address with a numbered security seal, and isn't opened again until it reaches its destination (except for a customs inspection). No one else handles your cargo along the way.`,
          `This doesn't just dramatically reduce the risk of damage and loss — it also simplifies customs procedures, because an intact seal confirms that the contents match the declared inventory. It's the ultimate peace of mind for anyone moving a lifetime's worth of belongings.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:lock', title: `Total privacy`, text: `Your cargo travels alone, sealed from your home all the way to its destination.` },
      { icon: 'fa6-solid:gauge-high', title: `Faster transit`, text: `No waiting for a groupage load to consolidate; more predictable transit times.` },
      { icon: 'fa6-solid:hand-holding-heart', title: `Less handling`, text: `Lower risk of damage since your cargo never mixes with other clients' shipments.` },
      { icon: 'fa6-solid:car', title: `Room for a vehicle`, text: `You can combine your household goods with a car in the same container.` },
    ],
    faqs: [
      { q: `What fits in a 20-foot container?`, a: `As a reference point, the furnishings of an apartment or a small one- to two-bedroom home. We determine your exact volume during the survey.` },
      { q: `Can I ship my car in the same container?`, a: `Yes. In a 40-foot container, it's common to combine household goods with a vehicle to optimize costs. We secure and load it so it travels fully protected.` },
    ],
    related: ['maritimas', 'lcl', 'puerta-a-puerta'],
  },
  {
    id: 'lcl',
    categoryId: 'internacionales',
    slug: 'shared-container-lcl-shipping',
    icon: 'fa6-solid:layer-group',
    title: `Shared Container (LCL / Groupage)`,
    metaTitle: `Shared Container Moving (LCL/Groupage) | PIM Panama`,
    metaDescription: `International moves via shared container (LCL/groupage): pay only for the space you use. Ideal for a few pieces of furniture, students, and small shipments.`,
    heroTagline: `Pay only for the space you use — perfect for small shipments.`,
    heroImage: IMG.warehouse,
    intro: [
      `LCL (Less than Container Load), also called groupage or consolidated cargo, lets you share a single container with other clients' shipments. **You pay only for the volume you use**, measured in cubic meters, which makes it the most economical option for small moves.`,
      `It's the ideal choice for students, people moving with just a few pieces of furniture, top-up shipments for a previous move, or anyone relocating only personal belongings and boxes. At Panama International Movers, we consolidate your cargo securely and with a full inventory inside the shared container.`,
    ],
    sections: [
      {
        heading: `How consolidation (groupage) works`,
        body: [
          `In an LCL shipment, your cargo is grouped with other clients' shipments inside the same container, at a consolidation warehouse. Every lot is packed, labeled, inventoried and identified by client, so it never gets mixed up with the rest. On arrival the container is deconsolidated — opened, with each lot separated out — and your shipment carries on its way.`,
          `That container doesn't sail because you are ready. It sails when the consolidation toward your destination is complete. That is the underlying logic of LCL: **you are not renting space, you are joining space that is already going**. The savings come from there, and so do the timing quirks we explain below.`,
        ],
        image: IMG.warehouse,
      },
      {
        heading: `How LCL is billed: volume, weight and fixed charges`,
        body: [
          `Unlike an [exclusive container](/en/services/exclusive-container-fcl-shipping/), LCL is billed by volume (cubic meters) or by weight, whichever is greater. The rule exists because a container fills up either by space or by tonnage, whichever comes first: a box of books weighs a lot in very little volume, a sofa takes up a lot of volume and weighs almost nothing. That is why good packing has a direct effect on what you pay.`,
          `There is a second component worth understanding from the outset: **the fixed charges**. Terminal handling, deconsolidation at destination, documentation and customs clearance cost practically the same whether you ship two cubic meters or eight. On very small shipments those charges can weigh more than the freight itself. We tell you that before, not after.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `Timing: why groupage usually takes longer`,
        body: [
          `LCL almost always takes longer than an exclusive container, and it isn't the ship's fault. It takes longer because of two extra steps: at origin the cargo waits for the consolidation toward your destination to be completed, and at destination it has to be deconsolidated before your lot is released. Neither step exists in an FCL, which travels sealed from door to door.`,
          `Total time combines the ocean transit with the origin and destination processes (packing, customs, and delivery). We confirm the exact estimate for your corridor in your quote. If your date is rigid — the start of a school year, a handover on a lease — say so from the beginning: it can change what we recommend.`,
        ],
      },
      {
        heading: `LCL or FCL: where the break-even point sits`,
        body: [
          `There is a volume above which an exclusive container costs less per cubic meter than a shared one. That break-even point is not fixed: it moves with the route, the season and each country's destination charges. Which is why we are not going to hand you a magic number here that later fails to hold.`,
          `What we do instead is run both scenarios with your real volume and your specific corridor, and put them side by side in the quote. Sometimes the surprise is a pleasant one: there are cases where a 20-foot container costs almost the same as an overgrown LCL, and on top of that it arrives sooner and gets handled less.`,
        ],
      },
      {
        heading: `Who is a shared container ideal for?`,
        body: [
          `LCL shines when the volume doesn't justify an entire container: a [student heading abroad for the academic year](/en/services/student-moving-services/), someone taking only the contents of their bedroom, or anyone topping up an earlier move with a few extra boxes.`,
          `It is also the natural route for people who move light on purpose — they take what's personal and buy the furniture at destination — and for the top-up shipment: that box of books, tools or keepsakes that didn't fit the first time and doesn't justify air freight either.`,
        ],
      },
      {
        heading: `How to pack so you pay less`,
        body: [
          `Because LCL is billed by volume, **good packing turns straight into savings**: well-built boxes, no dead space, standard dimensions that stack cleanly. Taking bulky furniture apart also cuts cubic meters, and it is often the line item where the most comes off.`,
          `The other half of the advice is what to leave behind. Low-value, high-volume furniture, appliances with the wrong voltage for your destination, and things that are cheap to replace over there usually cost more to ship than to buy again. Our team advises you on what's worth sending and how to pack it, without compromising protection. That is the difference between an efficient shipment and one that pays to ship air.`,
        ],
      },
      {
        heading: `The cheapest quote isn't always the cheapest move`,
        body: [
          `When you're hunting for a cheap move it's easy to stop at the lowest number on the list. The problem is that the number is usually just the freight. The destination charges — deconsolidation, terminal, [customs clearance](/en/services/customs-clearance-management/), final delivery — turn up later, are billed at the other end, and are what blows up a lot of people's budgets.`,
          `When you compare, always ask for the estimated total door-to-door cost and for what is left out. That is how we present it from the first proposal, with the line items separated. We would rather our quote look higher at the start and be the real one at the end.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:coins', title: `Pay only for your space`, text: `Billed by cubic meter — ideal for small volumes.` },
      { icon: 'fa6-solid:graduation-cap', title: `Perfect for students`, text: `The most common option for anyone moving with just a few boxes.` },
      { icon: 'fa6-solid:list-check', title: `Fully inventoried cargo`, text: `Every lot is labeled and identified inside the groupage load.` },
      { icon: 'fa6-solid:earth-americas', title: `Same global routes`, text: `Frequent consolidations to all major destinations.` },
      { icon: 'fa6-solid:ruler-combined', title: `Packing guidance`, text: `We help you bring billable volume down without losing protection.` },
      { icon: 'fa6-solid:receipt', title: `Total cost in plain view`, text: `Freight and destination charges itemized from the first proposal.` },
    ],
    faqs: [
      { q: `Is LCL cheaper than FCL?`, a: `For small volumes, yes: you pay only for the space you use. As the volume grows, an exclusive container becomes more efficient per cubic meter, and exactly where the two cross depends on the route and on the destination charges. We calculate both options with your real volume.` },
      { q: `Does my cargo get mixed in with everyone else's?`, a: `It shares a container, but your cargo travels packed, labeled and inventoried, separated and identified from the rest of the groupage. At the consolidation warehouse each lot is handled as a unit of its own, and that is how it is delivered at destination.` },
      { q: `Is there a minimum volume for LCL?`, a: `In practice there is almost always a billable minimum, because below a certain size the fixed charges make the shipment stop being economically sensible. If your volume is very small, we'll tell you frankly whether [air freight](/en/services/international-air-freight-moving/) or an [international courier](/en/services/international-courier-service/) suits you better.` },
      { q: `Can I ship my car or motorcycle in a shared container?`, a: `A vehicle doesn't travel in standard groupage: it needs a setup of its own, either inside a container or on a Ro-Ro vessel, with its own documentation and customs process. If you need to move household goods and a vehicle, we'll propose the combination that works out best.` },
      { q: `Is shared cargo handled more? Should I insure it?`, a: `Yes, it is handled more: there's consolidation at origin and deconsolidation at destination, steps an FCL doesn't have. That's why professional packing matters even more here, and why we always recommend taking [insurance](/en/services/international-moving-insurance/) on the declared value. It's quoted separately and we advise you on how to declare.` },
      { q: `When does air freight beat LCL?`, a: `When the volume is genuinely small and the urgency is high. On very small shipments the price gap between sea and air narrows, and air arrives in a fraction of the time. We compare both routes in the same quote so you can decide with the numbers in front of you.` },
    ],
    related: ['maritimas', 'fcl', 'aereas'],
  },
  {
    id: 'aereas',
    categoryId: 'internacionales',
    slug: 'international-air-freight-moving',
    icon: 'fa6-solid:plane-departure',
    title: `International Air Freight Moving`,
    metaTitle: `International Air Freight Moving from Panama | PIM`,
    metaDescription: `International air freight moving from Panama: the fastest option for urgent or low-volume shipments. Specialized packing and door-to-door customs handling.`,
    heroTagline: `When time matters most: your move in days, not weeks.`,
    heroImage: IMG.plane,
    intro: [
      `Air freight is the fastest way to move your belongings between countries. Although its cost per kilogram is higher than sea freight, it's irreplaceable when time is tight: urgent job relocations, documents and equipment you need right away, or low-volume shipments where speed pays off.`,
      `At Panama International Movers, we handle your air freight move with specialized packing to minimize weight and volume, coordination with cargo airlines, and all export and import documentation, including customs clearance at destination.`,
    ],
    sections: [
      {
        heading: `When should you choose air freight?`,
        body: [
          `Air freight makes sense when you need your belongings urgently or when the volume is small: a single bedroom's worth of items, extra luggage, professional equipment, or valuables you'd rather have travel quickly and with less handling.`,
          `Many families combine both modes: they send what's essential for the first few weeks by air and the rest of their household goods by sea. Your coordinator helps you decide what to send by each method to optimize time and budget.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: `Packing and weight: the key to air freight cost`,
        body: [
          `Air transport is billed on whichever is greater — actual weight or volumetric weight — which makes efficient packing critical. Our team packs to protect your belongings while cutting unnecessary weight and volume.`,
          `Just as with sea freight, we handle documentation and customs at both origin and destination, and we can offer door-to-door service so you receive your shipment in the comfort of your new home.`,
        ],
      },
      {
        heading: `Actual weight vs. volumetric weight: understand your rate`,
        body: [
          `There's a concept worth understanding in air transport: the airline charges whichever is greater — the actual weight (what it weighs on the scale) or the volumetric weight (the space it takes up, converted to weight using a formula). A shipment that's light but bulky — like cushions or lamps — may be billed by its volume rather than its actual weight.`,
          `That's why professional packing is decisive for air freight: we compress and protect at the same time, eliminating air and unnecessary volume so your rate is as low as possible without putting your belongings at risk.`,
        ],
        image: IMG.plane,
      },
      {
        heading: `The smart strategy: combining air and sea freight`,
        body: [
          `Many experienced families don't choose between plane and ship — they use both. They send a "first weeks kit" by air — clothing, essentials, a bit of household goods — so it's ready as soon as they arrive, and the bulk of the household by sea, arriving weeks later without any rush.`,
          `This combination offers the best of both worlds: speed where it matters and economy for the larger volume. Your coordinator helps you decide what to send by each method to optimize time and budget.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:bolt', title: `The fastest option`, text: `Days instead of weeks to have your belongings at destination.` },
      { icon: 'fa6-solid:feather', title: `Ideal for small volumes`, text: `Perfect for small or top-up shipments.` },
      { icon: 'fa6-solid:briefcase', title: `Urgent relocations`, text: `The best ally for expats facing an immediate job relocation.` },
      { icon: 'fa6-solid:file-shield', title: `Customs fully handled`, text: `Documentation and customs clearance coordinated by us.` },
    ],
    faqs: [
      { q: `Is it much more expensive than sea freight?`, a: `The cost per kilogram is higher, but for small volumes or urgent shipments, the difference is justified by the speed. For entire households, sea freight remains the most economical option.` },
      { q: `Can I combine air and sea freight?`, a: `Yes, it's very common. We send what's essential for your first few weeks by air and the rest of your household goods by sea, optimizing both time and cost.` },
    ],
    related: ['maritimas', 'lcl', 'puerta-a-puerta'],
  },
  {
    id: 'puerta-a-puerta',
    categoryId: 'internacionales',
    slug: 'door-to-door-international-moving',
    icon: 'fa6-solid:house-chimney-window',
    title: `Door-to-Door International Moving`,
    metaTitle: `Door-to-Door International Moving Service | PIM`,
    metaDescription: `Turnkey door-to-door moving: we collect at your current home and deliver to your new one. Door-to-port and port-to-port options available too.`,
    heroTagline: `The turnkey service: from your current living room to your new one, without lifting a finger.`,
    heroImage: IMG.team,
    intro: [
      `Door-to-door moving is our most complete and convenient service: we take care of absolutely everything, from packing at your origin address to delivery, basic unpacking, and removal of packing material at your new home. You never have to coordinate with ports, shipping lines, or customs agents — a single point of contact, your PIM coordinator, is responsible for the entire chain.`,
      `For clients who prefer to handle part of the process themselves, we also offer door-to-port (we deliver to the destination port) and port-to-port service, which lower costs in exchange for you taking on certain steps.`,
    ],
    sections: [
      {
        heading: `What's included in the door-to-door service?`,
        body: [
          `Door-to-door covers the survey and quote, the supply of materials, [professional export packing](/en/services/professional-packing-services/), the inventory, loading, the international freight (sea or air), all documentation and customs at origin and destination, last-mile transport, and delivery with basic unpacking. It is, quite literally, a turnkey move.`,
          `It's worth being precise about what **basic unpacking** means, because the term gets used loosely in this industry. We open the boxes, place the furniture where you tell us, reassemble what we took apart at origin, and take away the leftover material. It does not include putting your clothes away or mounting the television on the wall: that kind of help exists and is quoted separately.`,
          `It's the option families and expats prefer when they value their time, because it removes the logistical complexity and concentrates the responsibility in a single provider.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `Door-to-door, door-to-port and port-to-port: where responsibility ends`,
        body: [
          `The three options differ on one criterion only: the point at which the carrier stops answering and you start. Door-to-door answers all the way to the door of your new home. Door-to-port reaches the destination port, and from there you take on clearance and final transport. Port-to-port covers only the leg between ports: packing at origin and everything at destination is on you.`,
          `That "on you" means hiring a local customs broker, presenting a valued inventory in the language of the country, paying whatever duties apply, arranging deconsolidation of the cargo at the terminal and finding a truck for the last mile. None of it is impossible. But you do it in a country you have just arrived in.`,
          `Hence a warning: when you compare quotes, check where each one ends. **A noticeably cheaper proposal usually covers less of the journey, not a better freight rate**, and the difference comes back as destination costs nobody warned you about. We give you all three options with their scope in writing.`,
        ],
      },
      {
        heading: `One point of contact, from start to finish`,
        body: [
          `The biggest advantage of door-to-door isn't just logistical — it's human. Instead of coordinating on your own with the packing company, the shipping line, the customs agent at origin, the one at destination, and the last-mile carrier — each with its own timeline and its own language — you have a single personal coordinator responsible for the entire chain.`,
          `The difference shows most clearly when something goes off script, which on an international move happens more often than the industry admits: a shipping line reschedules a sailing, a random inspection comes up, a local holiday nobody had on the calendar. With one point of contact, you get a call telling you what happened and what the plan is. Without one, you get the silence of five suppliers passing the responsibility between them.`,
        ],
        image: IMG.team,
      },
      {
        heading: `How a door-to-door move moves forward`,
        body: [
          `The first phase is the survey. We walk through your home — in person or by video call — and measure the real volume of the shipment in cubic meters (CBM), the unit the whole industry quotes in. Out of that come the recommended route, the [container type](/en/services/exclusive-container-fcl-shipping/) and a closed quote. It's free and commits you to nothing.`,
          `The second is origin. Our crew packs to export standard, builds the inventory piece by piece, and stows the cargo: arranges and immobilizes it inside the container so nothing shifts in transit. It is closed with a numbered seal, the security seal that is only legitimately broken at customs. In parallel we file the export documentation.`,
          `The third is destination: our network receives the cargo, handles customs clearance, coordinates the last mile and delivers at your new home. Total time combines the ocean transit with the origin and destination processes (packing, customs, and delivery). We confirm the exact estimate for your corridor in your quote.`,
        ],
      },
      {
        heading: `Destination customs: the leg you'll be gladdest to delegate`,
        body: [
          `Of the whole chain, customs is where a door-to-door service pays for itself. Every country has its own household goods regime, and the cost of getting it wrong is charged as daily storage while the shipment sits held at the terminal.`,
          `Panama illustrates the point. Panama recognizes a one-time household goods exemption of B/.25,000 in customs value for a foreign national who can prove they are coming to take up residence, and for a Panamanian who has lived abroad for two years or more (Article 216 of Cabinet Decree No. 41 of 2002). It's a real benefit, but it requires proving you qualify and declaring the household goods correctly. Anything above the exemption has no flat rate: it is assessed by tariff heading, plus ITBMS. And the law requires a licensed customs broker to intervene.`,
          `That kind of detail changes the outcome of a move and can't be improvised from another country. In door-to-door it's already included and it already has someone answering for it — the same [customs clearance work](/en/services/customs-clearance-management/) we handle as a standalone service.`,
        ],
        image: IMG.port,
      },
      {
        heading: `What door-to-door can't promise you`,
        body: [
          `A turnkey service covers the whole chain, but it doesn't suspend the rules of international trade. There are three things no serious company can guarantee. The first is the exact delivery date: we commit to a solid estimate and tell you about any change, but a vessel's departure and the pace of a customs office are not ours to control.`,
          `The second is that your container won't be inspected; random checks are a normal part of the system. What we do control is turning up prepared, with an inventory that adds up and paperwork in order: that turns an inspection into a matter of hours rather than a problem of weeks.`,
          `The third is that we can take everything. Every country keeps its own list of prohibited and restricted items: perishables, plants, certain liquids and aerosols, weapons, flammables. During the survey we go through your inventory with that list in hand.`,
        ],
      },
      {
        heading: `Who is the turnkey service ideal for?`,
        body: [
          `Door-to-door is the natural choice for families, professionals and executives who value their time and peace of mind above the marginal saving of handling part of the process themselves. Whether you're moving [to the United States](/en/destinations/moving-from-panama-to-united-states/) or [to Spain](/en/destinations/moving-from-panama-to-spain/), if this is your first international move, if you don't speak the language at your destination, or if you'd simply rather focus on your new life, this is the option for you.`,
          `Door-to-port and port-to-port, on the other hand, fit better with those who have import experience or local support at destination. In your quote, we show you all three options with their costs and responsibilities, so you can decide with complete clarity.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:hand-sparkles', title: `Zero worries`, text: `We handle everything; all you have to do is arrive at your new home.` },
      { icon: 'fa6-solid:user-tie', title: `One point of contact`, text: `Your coordinator is responsible for the entire chain, from start to finish.` },
      { icon: 'fa6-solid:scale-balanced', title: `Options tailored to you`, text: `Door-to-port and port-to-port to fine-tune cost and control.` },
      { icon: 'fa6-solid:boxes-packing', title: `Unpacking included`, text: `We deliver, unpack the basics, and remove the packing material.` },
      { icon: 'fa6-solid:file-signature', title: `Customs handled`, text: `Clearance at origin and destination managed by our own network.` },
      { icon: 'fa6-solid:receipt', title: `Scope in writing`, text: `You know exactly where each option ends before you sign.` },
    ],
    faqs: [
      { q: `What's the difference from port-to-port?`, a: `Door-to-door covers everything, from your current home to your new one. Port-to-port covers only the leg between ports: you handle the packing, destination customs and final transport. Door-to-port is the middle ground: we take the cargo to the destination port and you take on clearance and the last mile.` },
      { q: `Is door-to-door much more expensive?`, a: `It includes more services, so its price is higher than port-to-port. But a good part of that difference doesn't disappear in the other options: it comes back at destination as the customs broker, local transport and storage you pay for separately.` },
      { q: `Do I have to be there on packing day?`, a: `It's strongly advisable that you or someone you trust is there at the start and at the close. The inventory is built piece by piece and it's worth reviewing and signing it yourself. It's also the moment to set aside what travels with you: documents, medication, jewelry and anything irreplaceable.` },
      { q: `Can I include my vehicle?`, a: `Yes. It can travel inside the same container along with your household goods or separately, depending on the volume and the destination. It needs documentation and a customs process of its own, which we also handle, and we quote it [as part of the same project](/en/services/car-shipping-in-container/).` },
      { q: `What if my new home isn't ready when the cargo arrives?`, a: `It happens often and it has a solution: [temporary storage](/en/services/storage-solutions-panama/) at destination until you can receive. Tell us as soon as you suspect it, because planned storage costs a good deal less than cargo held at the terminal running up demurrage.` },
      { q: `How do I know where my move is?`, a: `Your coordinator reports at every milestone: inventory closed, container sailed, arrival at destination, customs clearance started, delivery being scheduled. You don't have to chase anyone to find out where your home is.` },
    ],
    related: ['maritimas', 'fcl', 'aereas'],
  },
];
