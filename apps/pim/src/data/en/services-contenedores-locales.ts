import type { Service, ServiceCategory } from '../services';
import { IMG } from '../services';

export const svcContenedoresLocales: Service[] = [
  {
    id: 'contenedor-20',
    categoryId: 'contenedores',
    slug: '20-foot-container',
    icon: 'fa6-solid:box',
    title: '20-Foot Container (Standard)',
    metaTitle: '20-Foot Container Rental & Shipping | PIM Panama',
    metaDescription: `20-foot container for moving and international freight: capacity, dimensions, and uses. Ideal for apartments and small homes. Get a quote from PIM Panama.`,
    heroTagline: `The workhorse of logistics: ideal for apartments and small homes.`,
    heroImage: IMG.containers,
    intro: [
      `The 20-foot container is the industry standard and the most common choice for moderate-sized moves. Its capacity is a great match for the furnishings of an apartment or small house, striking an excellent balance between volume and cost.`,
      `At Panama International Movers we coordinate your international shipment — or its temporary placement for loading or storage — depending on what you need.`,
    ],
    sections: [
      {
        heading: `What fits in a 20-foot container?`,
        body: [
          `As a general reference, it holds the furnishings of an apartment or a one- to two-bedroom house: living room, dining room, bedrooms, and appliances. The exact volume depends on the type of furniture; during the inspection we calculate whether a 20-footer is enough or a 40-footer makes more sense.`,
        ],
        image: IMG.port,
      },
      {
        heading: `Uses and availability`,
        body: [
          `Beyond door-to-door international moving, the 20-foot container also works for consolidating cargo, temporary storage, or loading at your own pace with our drop-off service at your home. We'll advise you on the best setup.`,
        ],
      },
      {
        heading: `20-foot dimensions and capacity`,
        body: [
          `The standard 20-foot container offers roughly 33 cubic meters of usable volume, with interior dimensions of about 5.9 m long, 2.35 m wide, and 2.39 m high. In moving terms, that's roughly equivalent to the furnishings of an apartment or a small one- to two-bedroom house.`,
          `The actual volume your move will take up depends on your furniture and how efficiently it's loaded. That's why the inspection matters: we'll confirm whether the 20-footer is enough or whether it's worth stepping up to the 40-foot.`,
        ],
        image: IMG.port,
      },
      {
        heading: `Load it at your own pace with drop-off`,
        body: [
          `If you'd rather pack on your own schedule, we can leave the 20-foot container at your home for an agreed period so you can load it without rushing. We provide packing materials and loading guidance, and once you're done we pick it up and continue with the international shipment.`,
          `It's a flexible option that's often more affordable for those with the space and time to load it themselves.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:scale-balanced', title: `Balanced volume and cost`, text: `The most versatile size in the industry.` },
      { icon: 'fa6-solid:house', title: `Ideal for small homes`, text: `Perfect for apartments and 1-2 bedroom homes.` },
      { icon: 'fa6-solid:earth-americas', title: `Global routes`, text: `Available to all major destinations.` },
      { icon: 'fa6-solid:truck', title: `Drop-off available`, text: `We can drop it at your home so you can load at your own pace.` },
    ],
    faqs: [
      { q: `Is a 20-foot container enough for my house?`, a: `For apartments and small homes, it's usually ideal. For larger homes, or if you're including a car, the 40-foot container is a better fit. We'll confirm during the inspection.` },
      { q: `Can I load it myself?`, a: `With our drop-off service, we leave the container at your home so you can load at your own pace, or our team can pack and load it for you.` },
    ],
    related: ['contenedor-40', 'drop-off', 'maritimas'],
  },
  {
    id: 'contenedor-40',
    categoryId: 'contenedores',
    slug: '40-foot-high-cube-container',
    icon: 'fa6-solid:boxes-stacked',
    title: '40-Foot Container (High Cube)',
    metaTitle: '40-Foot High Cube Container | PIM Panama Moving',
    metaDescription: `40-foot and 40 High Cube containers for large moves: full households or furniture plus a vehicle. Extra height and capacity. Get a quote from PIM.`,
    heroTagline: `Double the space: for large homes or furniture combined with a vehicle.`,
    heroImage: IMG.port,
    intro: [
      `The 40-foot container — and its High Cube version, with extra height — doubles the capacity of the 20-footer and is the natural choice for moving large homes. It also lets you combine your entire household with a vehicle in a single shipment, optimizing costs.`,
      `We coordinate your door-to-door international shipment with professional loading to make the most of every inch.`,
    ],
    sections: [
      {
        heading: `40-foot vs. 40 High Cube`,
        body: [
          `Both have the same floor space; the High Cube adds extra height, ideal for tall furniture or for stacking more volume. We'll recommend the best variant for your load.`,
        ],
        image: IMG.containers,
      },
      {
        heading: `Full household or furniture plus a car`,
        body: [
          `It's the preferred choice for homes with three or more bedrooms. If you'd also like to bring your vehicle, it fits alongside your household goods, properly secured, so you avoid paying for two separate shipments.`,
        ],
      },
      {
        heading: `How much really fits in a 40-foot container`,
        body: [
          `The 40-foot container offers about 67 cubic meters of usable volume — nearly double the 20-footer. The High Cube variant adds close to 30 cm of extra height, useful for tall furniture, large appliances, or stacking more cargo safely.`,
          `As a reference, it comfortably holds the furnishings of a three- or four-bedroom home. And if you have space to spare, it's the ideal moment to include a vehicle and save on a separate shipment.`,
        ],
        image: IMG.containers,
      },
      {
        heading: `The most cost-efficient container per cubic meter`,
        body: [
          `Here's a golden rule of logistics: the larger the volume, the lower the cost per cubic meter. A well-loaded 40-foot container usually offers the best value per unit of space, as long as you actually fill it.`,
          `Our professional loading squeezes every inch out of the container so your investment goes further, without empty space driving up the cost.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:maximize', title: `Maximum capacity`, text: `Double the space for large homes.` },
      { icon: 'fa6-solid:car', title: `Household plus vehicle`, text: `Combine your move with a car in a single shipment.` },
      { icon: 'fa6-solid:arrows-up-to-line', title: `High Cube`, text: `Extra height for tall furniture and more volume.` },
      { icon: 'fa6-solid:sack-dollar', title: `Better cost per m³`, text: `The larger the volume, the lower the unit cost.` },
    ],
    faqs: [
      { q: `When should I choose a 40-foot over a 20-foot container?`, a: `When you're moving a home with three or more bedrooms, or if you want to combine your household goods with a vehicle. The 40 High Cube adds extra height to make even better use of the space.` },
      { q: `Can I ship my car and furniture together?`, a: `Yes. In a 40-foot container it's common to load the vehicle alongside your household goods, secured and separated, saving you an additional shipment.` },
    ],
    related: ['contenedor-20', 'auto-contenedor', 'maritimas'],
  },
  {
    id: 'contenedor-almacenamiento',
    categoryId: 'contenedores',
    slug: 'storage-containers-job-site',
    icon: 'fa6-solid:warehouse',
    title: 'Containers for Job Sites or Temporary Storage',
    metaTitle: 'Job-Site & Temporary Storage Containers | PIM Panama',
    metaDescription: `Container rental for job sites or temporary storage in Panama: secure on-site space for tools, materials, or furniture. Get a quote from PIM.`,
    heroTagline: `Secure space wherever and whenever you need it, with nothing to build.`,
    heroImage: IMG.warehouse,
    intro: [
      `Sometimes the challenge isn't moving — it's storing: during a renovation, a construction project, or a transition between homes. Our temporary storage container offers a secure, enclosed, street-level space to hold tools, materials, or furniture without relying on an outside warehouse.`,
      `At Panama International Movers we place the container wherever you need it and coordinate its pickup once you're done.`,
    ],
    sections: [
      {
        heading: `Common uses`,
        body: [
          `Storing furniture during a renovation, keeping tools and materials safe on a job site, or holding your belongings temporarily while you sort out a move. It's a flexible, affordable alternative to renting a warehouse.`,
        ],
        image: IMG.containers,
      },
      {
        heading: `Security and flexibility`,
        body: [
          `The container arrives clean, in good condition, and with a secure lock. You control access and how long you use it; we handle the logistics of placement and pickup.`,
        ],
      },
      {
        heading: `Advantages over renting a warehouse`,
        body: [
          `An on-site storage container has concrete advantages over renting an outside warehouse: your belongings aren't moved twice (no loading, hauling, and unloading somewhere else), it sits right at your job site or home, and you control access at any hour. For renovations and moving transitions, it's usually more practical and more affordable.`,
          `And if your project timeline shifts, you simply extend how long you keep it — no rigid warehouse lease to worry about.`,
        ],
        image: IMG.containers,
      },
      {
        heading: `Placement: what your site needs`,
        body: [
          `Receiving the container requires a firm, level surface and enough access room for the delivery truck. Before drop-off, we assess the site conditions to ensure a safe, viable placement.`,
          `We handle all the logistics of transport, placement, and later pickup, so all you have to do is load and unload at your own pace.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:lock', title: `Secure space`, text: `Enclosed and locked, under your control.` },
      { icon: 'fa6-solid:location-dot', title: `Right on your site`, text: `We place it wherever you need it, street-level.` },
      { icon: 'fa6-solid:calendar', title: `Flexible timeline`, text: `Use it for as many days or months as you need.` },
      { icon: 'fa6-solid:sack-dollar', title: `Cost-effective`, text: `A practical alternative to renting a warehouse.` },
    ],
    faqs: [
      { q: `How long can I keep the container?`, a: `The timeline is flexible — from a few days to several months, depending on your project. We coordinate placement and pickup around your schedule.` },
      { q: `Is it safe for storing furniture?`, a: `Yes. The container is enclosed with a secure lock. For extra protection, we can combine it with professional furniture packing.` },
    ],
    related: ['drop-off', 'complementarios-almacenaje', 'contenedor-20'],
  },
  {
    id: 'drop-off',
    categoryId: 'contenedores',
    slug: 'container-drop-off-service',
    icon: 'fa6-solid:truck-ramp-box',
    title: 'Drop-Off Service (Container at Your Home)',
    metaTitle: 'Container Drop-Off Service at Your Home | PIM Panama',
    metaDescription: `Drop-off service: we leave the container at your home so you can load at your own pace. Total flexibility for your international move. Get a quote from PIM.`,
    heroTagline: `Load at your own pace: we drop the container right at your door.`,
    heroImage: IMG.boxes,
    intro: [
      `Our drop-off service delivers the container to your home and leaves it there for an agreed period, so you can load your belongings calmly and at your own pace. It's the ideal option for those who'd rather pack on their own or need scheduling flexibility.`,
      `When you're done, we pick up the container and continue with the international shipment and paperwork all the way to your destination.`,
    ],
    sections: [
      {
        heading: `How does drop-off work?`,
        body: [
          `We coordinate delivering the container to your home, taking access and available space into account. You load it during the agreed window; if you'd like, we provide packing materials and loading guidance to help you stack it correctly.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `Advantages of loading it yourself`,
        body: [
          `Beyond the potential savings, drop-off gives you complete control over what goes in and how it's arranged. If you'd rather not handle it, full professional packing remains available.`,
        ],
      },
      {
        heading: `What you need to receive the container`,
        body: [
          `Drop-off requires a firm surface to place the container on and enough maneuvering room for the delivery truck. We assess your home beforehand to confirm the placement is viable, taking access, ramps, and any community regulations into account.`,
          `We coordinate delivery and pickup on dates that work for you, giving you maximum flexibility to load at your own pace.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: `With or without our packing service`,
        body: [
          `Drop-off is as flexible as you need it to be. You can load entirely on your own — we provide quality boxes and materials, plus loading guidance — or split the work: you pack the simple items and our team handles anything fragile or bulky.`,
          `Whichever route you choose, we'll show you how to make the most of the space and protect your belongings so the international shipment that follows is secure.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:clock', title: `At your own pace`, text: `Load without rushing, on the days you choose.` },
      { icon: 'fa6-solid:house', title: `At your home`, text: `The container arrives right at your door.` },
      { icon: 'fa6-solid:hand', title: `Full control`, text: `You decide what goes in and how it's arranged.` },
      { icon: 'fa6-solid:boxes-packing', title: `With or without packing`, text: `We provide materials or pack it for you.` },
    ],
    faqs: [
      { q: `Do I need a lot of space to receive the container?`, a: `You'll need access and a firm surface to place it on. We assess your home beforehand to confirm a viable placement.` },
      { q: `Can I request packing materials?`, a: `Yes. We provide boxes, bubble wrap, and other materials, and guide you on how to load safely and make the most of the space.` },
    ],
    related: ['contenedor-20', 'contenedor-40', 'complementarios-embalaje'],
  },
  {
    id: 'locales',
    categoryId: 'locales',
    slug: 'local-moving-panama-city',
    icon: 'fa6-solid:truck-fast',
    title: 'Local Moving in Panama City',
    metaTitle: 'Local Moving in Panama City | PIM',
    metaDescription: `Local moves in Panama City with international-grade standards: professional packing, furniture care, and an expert crew. Fast, safe, and stress-free.`,
    heroTagline: `The same international-grade care, now right here in the city.`,
    heroImage: IMG.boxes,
    intro: [
      `Moving within Panama City doesn't have to be a headache. We apply the same standard of care from our international moves to local relocations: professional packing, furniture protection, and a crew that treats your belongings like their own.`,
      `Whether it's an apartment or a house, we coordinate your local move to be fast, organized, and secure.`,
    ],
    sections: [
      {
        heading: `International-grade standards, right at home`,
        body: [
          `We protect floors and corners, pack fragile items carefully, disassemble and reassemble furniture, and transport everything in properly equipped vehicles. The experience of moving households between continents shows in every local detail.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `Fast and hassle-free`,
        body: [
          `We coordinate the logistics — building access, elevators, scheduling windows — so your move goes smoothly and you can get back to your life in your new home as soon as possible.`,
        ],
      },
      {
        heading: `Coordinating buildings and access`,
        body: [
          `In Panama City, many moves take place in buildings with their own rules: approved time windows, service elevator reservations, common-area protection, and access sign-in. We handle coordinating all these details with building management so there are no surprises on moving day.`,
          `We protect floors, walls, and elevators throughout the move, taking care of both your belongings and the building's common areas.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: `A clear quote, no surprises`,
        body: [
          `Before the move, we assess the volume, distance, access, and any additional services you need (packing, furniture disassembly, materials) to give you a transparent quote. You'll know exactly what's included and what it costs, with no last-minute hidden fees.`,
          `We apply that same rigor from our international moves to your local relocation: serious planning and clear communication from start to finish.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:award', title: `Premium care`, text: `The same standard as an international move.` },
      { icon: 'fa6-solid:screwdriver-wrench', title: `Disassembly and reassembly`, text: `We take apart and reassemble your furniture.` },
      { icon: 'fa6-solid:shield-halved', title: `Everything protected`, text: `Packing and protection for floors and corners.` },
      { icon: 'fa6-solid:bolt', title: `Fast and organized`, text: `Coordinated logistics for a stress-free move.` },
    ],
    faqs: [
      { q: `Do you offer packing for local moves?`, a: `Yes. You can hire full professional packing or just for fragile items; we also provide materials if you'd rather pack yourself.` },
      { q: `Do you disassemble and reassemble furniture?`, a: `Yes, our team takes apart and reassembles any furniture that requires it, leaving it ready in your new home.` },
    ],
    related: ['nacionales', 'express', 'cliente-residenciales'],
  },
  {
    id: 'nacionales',
    categoryId: 'locales',
    slug: 'domestic-moving-panama',
    icon: 'fa6-solid:road',
    title: 'Domestic Moving in Panama',
    metaTitle: 'Domestic Moving in Panama | Interior of the Country | PIM',
    metaDescription: `Domestic moves in Panama: from the capital to the interior and between provinces. Safe long-distance transport with professional packing and care.`,
    heroTagline: `From one province to another, your move in expert hands.`,
    heroImage: IMG.boxes,
    intro: [
      `Moving your household from one city to another within Panama takes route planning, long-distance transport, and packing that can withstand the trip. We coordinate domestic moves between the capital and the interior of the country, and between provinces, with the same professional care as always.`,
      `You focus on your new chapter; we make sure everything arrives in order.`,
    ],
    sections: [
      {
        heading: `Long-distance transport`,
        body: [
          `We use the right vehicles and loading techniques built for long trips, minimizing how much the cargo shifts. We give special protection to fragile items, which are the most exposed on road journeys.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `Route planning`,
        body: [
          `We coordinate timing, access, and logistics at both ends so delivery is on time and surprise-free, no matter where in the country you're moving to.`,
        ],
      },
      {
        heading: `Destinations we cover in Panama`,
        body: [
          `We coordinate domestic moves between Panama City and the interior of the country: David and Chiriquí, Colón, Coronado and the Pacific coast, Santiago, Chitré and the Azuero Peninsula, Boquete and the highlands, Bocas del Toro, and more. Wherever in Panama you're headed, we plan the route and the timing.`,
          `Tell us where you're moving and we'll confirm the logistics and the best timing for the move based on distance and road conditions.`,
        ],
        image: IMG.port,
      },
      {
        heading: `Reinforced protection for the road`,
        body: [
          `A long domestic trip subjects cargo to hours of constant vibration, which is where fragile items suffer most. That's why we reinforce packing, secure the load against movement, and pay special attention to dishware, electronics, and delicate furniture.`,
          `If you'd like, we can include insurance for the domestic trip, giving you the same peace of mind as an international move, right within your own country.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:route', title: `Nationwide coverage`, text: `From the capital to the interior and between provinces.` },
      { icon: 'fa6-solid:box', title: `Road-ready packing`, text: `Reinforced protection for long trips.` },
      { icon: 'fa6-solid:clock', title: `On-time delivery`, text: `Coordinated route planning and timing.` },
      { icon: 'fa6-solid:shield-halved', title: `Insured cargo`, text: `Optional insurance for the domestic trip.` },
    ],
    faqs: [
      { q: `Do you reach anywhere in Panama?`, a: `We coordinate moves to the main cities and the interior of the country. Tell us your destination and we'll confirm the logistics.` },
      { q: `How do you protect fragile items on long trips?`, a: `With reinforced packing, anti-shift loading, and optional cargo insurance if you'd like. Fragile items get special attention since they're the most exposed on the road.` },
    ],
    related: ['locales', 'express', 'cliente-residenciales'],
  },
  {
    id: 'express',
    categoryId: 'locales',
    slug: 'express-last-minute-moving',
    icon: 'fa6-solid:bolt',
    title: 'Express / Last-Minute Moving',
    metaTitle: 'Express & Last-Minute Moving in Panama | PIM',
    metaDescription: `Express and last-minute moves in Panama: we respond fast when time is tight, without cutting corners on care. Check availability today.`,
    heroTagline: `When there's no time to lose, we respond fast and with care.`,
    heroImage: IMG.boxes,
    intro: [
      `An unexpected turn, a change of plans, or an opportunity that won't wait — sometimes a move has to happen right now. Our express service moves your relocation to the front of the line and mobilizes the crew quickly, without sacrificing the care that defines Panama International Movers.`,
      `Check availability with us: when it's possible, we make it happen.`,
    ],
    sections: [
      {
        heading: `Speed without cutting corners on quality`,
        body: [
          `Even on a tight deadline, we maintain proper packing and furniture protection. Speed can't come at the cost of damage — that's why our express service relies on an experienced crew that works fast and works well.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `How we make it happen`,
        body: [
          `We rearrange the schedule to prioritize your move and line up resources ahead of time. Availability depends on the date and the volume; the sooner you reach out, the more likely we are to meet your deadline.`,
        ],
      },
      {
        heading: `When an express move is possible`,
        body: [
          `Whether an express service is feasible depends on three factors: the date you need, the volume being moved, and our crew availability at that moment. Last-minute local moves are almost always possible; express international moves also depend on space with airlines or shipping lines and customs timing.`,
          `That's why the first step is a call: we assess your situation right away and tell you honestly whether we can meet your deadline, and under what conditions.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: `Speed that never compromises quality`,
        body: [
          `Our promise with the express service is simple: speed never means carelessness. Even on a tight deadline, we maintain proper packing, furniture protection, and a full inventory. An experienced crew can work fast and well at the same time.`,
          `We'd rather be upfront about what's possible than promise something that puts your belongings at risk. Your trust is worth more than a reckless delivery.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:bolt', title: `Fast response`, text: `We prioritize your move when time is tight.` },
      { icon: 'fa6-solid:shield-halved', title: `Care never cut`, text: `Speed with the same standard of protection.` },
      { icon: 'fa6-solid:users', title: `Experienced crew`, text: `Professionals who work fast and well.` },
      { icon: 'fa6-solid:phone', title: `Quick coordination`, text: `We confirm availability right away.` },
    ],
    faqs: [
      { q: `How much notice do I need for an express move?`, a: `It depends on the date and volume. Contact us as soon as possible — we'll check the schedule and confirm whether we can meet your deadline.` },
      { q: `Does express cost more?`, a: `Prioritizing your move usually involves a surcharge for reorganizing resources. We'll spell that out transparently in your quote.` },
    ],
    related: ['locales', 'nacionales', 'complementarios-embalaje'],
  },
];
