import type { Service, ServiceCategory } from '../services';
import { IMG } from '../services';

export const svcClienteCasillero: Service[] = [
  {
    id: 'cliente-residenciales',
    categoryId: 'cliente',
    slug: 'residential-moving-services',
    icon: 'fa6-solid:house-chimney',
    title: 'Residential Moving Services',
    metaTitle: 'Residential Moving Services (Homes & Apartments) | PIM',
    metaDescription:
      `Residential moving for houses and apartments, local or international, with professional packing and a personal coordinator. Your home in expert hands.`,
    heroTagline: `Your home is one of a kind. Your move should be too.`,
    heroImage: IMG.packing,
    intro: [
      `Moving a house or apartment is about far more than transporting furniture — it's relocating a family's everyday life. Our residential service covers everything from studios to large homes, with a plan tailored to each household and a personal coordinator who stays with you through the entire process.`,
      `Whether it's a local or an international move, we handle every item with the same care you took when you chose it for your home.`,
    ],
    sections: [
      {
        heading: `A plan built around your home`,
        body: [
          `We start with an inspection to size up the volume and the specifics: fragile pieces, furniture that needs to be disassembled, appliances, artwork. From there we design a packing and transport plan that fits your home.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: `Packing that protects what matters`,
        body: [
          `We use quality materials and specific techniques for china, artwork, electronics and delicate furniture. Everything is inventoried and labeled so that setting up again at your destination is organized and loss-free.`,
        ],
      },
      {
        heading: `No two homes are alike`,
        body: [
          `Residential moving isn't a one-size-fits-all service. A single professional's studio, a family home with kids, a retired couple's apartment — each one has different needs, different pacing, different objects that matter. That's why we start by listening: what's most valuable, what's fragile, what needs to arrive first, what concerns you have.`,
          `With that information we build a plan around your home and your family, not a generic service. That personalization is what turns a stressful move into a calm experience.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `Settling back into normal at your destination`,
        body: [
          `Our job isn't done once the boxes are delivered. At your destination, we unpack the essentials, reassemble furniture, place items where you want them, and haul away all the leftover packing material. The goal is for your family to feel at home again as quickly as possible.`,
          `When you're moving an entire life, those first days in the new house matter a great deal. We make sure they start with order and calm, not a mountain of boxes.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:user-tie', title: 'Personal coordinator', text: 'One single point of contact for your entire move.' },
      { icon: 'fa6-solid:box-open', title: 'Professional packing', text: 'Techniques and materials suited to every type of item.' },
      { icon: 'fa6-solid:list-check', title: 'Organized inventory', text: 'Everything labeled for a loss-free setup at destination.' },
      { icon: 'fa6-solid:earth-americas', title: 'Local or international', text: 'The same standard nearby or across the world.' },
    ],
    faqs: [
      { q: `Can I pack some things myself?`, a: `Yes — though for international moves, professional packing is usually required by customs and insurance. For local moves, you can combine your own packing with ours.` },
      { q: `Do you set furniture back up at the destination?`, a: `Yes. We deliver, unpack the essentials, reassemble furniture, and remove the leftover packing material.` },
    ],
    related: ['cliente-corporativas', 'cliente-jubilados', 'complementarios-embalaje'],
  },
  {
    id: 'cliente-corporativas',
    categoryId: 'cliente',
    slug: 'corporate-office-moving',
    icon: 'fa6-solid:building',
    title: 'Corporate & Office Moving',
    metaTitle: 'Corporate & Office Moving Services | PIM Panama',
    metaDescription:
      `Corporate and office moves in Panama: relocate furniture, servers and confidential files while keeping your company's downtime to a minimum.`,
    heroTagline: `We relocate your office while keeping downtime to a minimum.`,
    heroImage: IMG.team,
    intro: [
      `Moving an office is a logistics project where every hour of downtime has a cost. We plan corporate moves so your operation is interrupted as little as possible: we work in phases, on low-impact schedules, with a rigorous inventory of furniture, equipment and confidential documentation.`,
      `From a small office to an entire floor, we coordinate the move with the discretion and precision your company needs. A single coordinator sits down with your operations, IT or HR team and answers for the whole project, from the first visit to the last workstation reassembled.`,
    ],
    sections: [
      {
        heading: `A project, not just a move`,
        body: [
          `Moving an office means running a project with several variables at once: people, furniture, technology, deadlines and business continuity. We assign a coordinator who works with your team to build a detailed plan: inventory by area, a phased schedule, and a map of the new premises so every workstation has its place before anything is loaded.`,
          `That upfront planning is what lets moving day flow and gets your company producing again as soon as possible. **The difference between an orderly corporate move and a lost weekend is almost never the truck: it's the plan made three weeks earlier.**`,
        ],
        image: IMG.packing,
      },
      {
        heading: `The schedule rules: how a phased move works`,
        body: [
          `We design a schedule that respects your operation. The usual approach is to move by area rather than all at once: first archives and storage, which nobody uses daily; then the support areas; and last the critical operation and the executives, in the lowest-impact window. That way no part of the company is unable to work for longer than planned.`,
          `The schedule also accounts for what isn't ours to control: the real handover date of the premises, the state of the fit-out, the cabling and network install. If those pieces move, the plan is adjusted beforehand and not on the day itself. That's why we insist on setting verifiable milestones with your contractor and your IT provider.`,
        ],
      },
      {
        heading: `Smart labeling for a fast setup`,
        body: [
          `Every box, piece of furniture and piece of equipment is labeled for its destination in the new office: area, desk and floor. So instead of a chaotic pile of boxes, your team finds each thing where it belongs and can resume work almost immediately.`,
          `The labeling is built on the floor plan of the new premises, which we map with you before anything moves. Each employee also gets a set of boxes marked with their name and their destination desk, which avoids the classic Monday-morning scene: twenty people hunting for their monitor among anonymous boxes.`,
        ],
      },
      {
        heading: `Servers, IT equipment and technical continuity`,
        body: [
          `Technology gets [specialized packing](/en/services/professional-packing-services/): antistatic protection, cushioning and boxes sized so nothing shifts along the way. Each unit travels inventoried by serial number, so the handover is verified one by one against the list and not from memory.`,
          `Here it's worth being clear about scope. **We disconnect, pack, transport and physically reinstall the equipment at its new position. The logical disconnection, the network configuration and bringing servers back up belong to your IT team or your provider, and we work alongside them inside the same schedule.** Be wary of anyone who promises to take care of all of it without asking about your infrastructure.`,
        ],
        image: IMG.team,
      },
      {
        heading: `Confidential documentation and chain of custody`,
        body: [
          `Contracts, personnel files, financial and client information: in many companies this is the most sensitive asset in the whole move. That material travels in sealed, numbered boxes, with a record of what each one holds, who handed it over and who received it. That is what a chain of custody is: a documented trail of who was responsible, not a verbal promise.`,
          `Where your sector requires it, we arrange for someone you designate to accompany the critical material and sign for it on arrival. If your company has an internal information-handling policy, we review it beforehand and fit the procedure to it.`,
        ],
      },
      {
        heading: `Furniture, partitions and what usually catches people out`,
        body: [
          `A good share of the surprises in an office move aren't in the boxes but in the fixed furniture: modular partitions that come apart panel by panel, mobile shelving, safes, boardroom tables that won't fit through the lift door. All of it is spotted during the on-site survey and quoted from the start.`,
          `**The building is the other front. Booking the freight lift, the hours the building management allows, floor and wall protection, dock access and equipment exit permits usually have rules of their own at origin and at destination. We handle those arrangements with both building managements ahead of the appointed day.**`,
        ],
      },
      {
        heading: `What we need in order to quote you properly`,
        body: [
          `A corporate move isn't quoted over the phone or by square meters. We need a visit to the current premises and, if possible, to the new one: it's the only way to count workstations, measure furniture, look at access and find what nobody mentioned. The survey is free and commits you to nothing.`,
          `It helps a great deal to have the floor plan of the new site with the intended layout, the headcount per area, an approximate equipment inventory and the committed handover date. With that we give you a proposal with the scope and schedule in writing, which is what your management needs in order to approve without later surprises. If the project also involves bringing people in from abroad, we coordinate it with their [executive and expat relocations](/en/services/executive-expat-relocation/).`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:business-time', title: 'Minimal downtime', text: 'Phased planning and low-impact scheduling.' },
      { icon: 'fa6-solid:server', title: 'Protected equipment', text: 'Antistatic packing and inventory by serial number.' },
      { icon: 'fa6-solid:file-shield', title: 'Secure documents', text: 'Sealed boxes and a documented chain of custody.' },
      { icon: 'fa6-solid:clipboard-list', title: 'Rigorous inventory', text: 'Labeled by area, desk and floor against the floor plan.' },
      { icon: 'fa6-solid:user-tie', title: 'A single coordinator', text: 'One contact for operations, IT and facilities.' },
      { icon: 'fa6-solid:building-shield', title: 'Building coordination', text: 'Lifts, permitted hours and permits at origin and destination.' },
    ],
    faqs: [
      { q: `Can you move an office over the weekend?`, a: `Yes. We work on low-impact schedules — nights or weekends — so your team finds everything ready when they resume work. It's worth deciding early, because it also drives the permits and hours the building management will authorize.` },
      { q: `How do you handle confidential information?`, a: `With sealed, numbered boxes, a record of contents and of who was responsible, and a documented chain of custody end to end. If your company has an internal information-handling policy, we fit the procedure to it, and the person you designate can accompany the material and sign for it on arrival.` },
      { q: `Do you disconnect and reconnect the servers?`, a: `We disconnect, pack, transport and physically reinstall the equipment at its new position. The logical configuration, the network and bringing servers back up belong to your IT team or your provider; we work alongside them inside the same schedule.` },
      { q: `Can you move us in stages if the new premises aren't ready?`, a: `Yes, and it's a common situation when the fit-out runs late. We can move first whatever doesn't interrupt the operation and keep the rest in [temporary storage](/en/services/storage-solutions-panama/) until the space is usable. Planning that costs considerably less than improvising it.` },
      { q: `Do you dismantle and reassemble workstations and partitions?`, a: `Yes. Dismantling and reassembling desks, modular partitions and office furniture is part of the service and is measured during the on-site survey. It's precisely the line item that rushed quotes tend to leave out and then bill separately.` },
      { q: `How far in advance should we start?`, a: `The sooner the better: the planning is the part that actually protects your operation. Ideally, contact us as soon as you've settled on the new premises, even if the date isn't fixed yet, so we can build the inventory and the schedule without rushing. We answer every request in under 24 hours.` },
    ],
    related: ['cliente-expatriados', 'especiales-arte', 'complementarios-almacenaje'],
  },
  {
    id: 'cliente-expatriados',
    categoryId: 'cliente',
    slug: 'executive-expat-relocation',
    icon: 'fa6-solid:passport',
    title: 'Executive & Expat Relocation',
    metaTitle: 'Executive & Expat Relocation Services | PIM Panama',
    metaDescription:
      `VIP relocation for executives and expatriates: door-to-door international moving plus landing support in your new country. Fully integrated coordination.`,
    heroTagline: `A soft landing in your new country, start to finish.`,
    heroImage: IMG.team,
    intro: [
      `Relocating an executive or their family to another country goes beyond the physical move: it means coordinating timelines with the company, handling every detail, and easing the adjustment to a new destination. Our VIP relocation service combines door-to-door international moving with support designed specifically for expatriates.`,
      `The goal is for the professional to focus on their new role while we make sure their life arrives in order.`,
    ],
    sections: [
      {
        heading: `Moving and paperwork, fully integrated`,
        body: [
          `We coordinate the relocation of your household goods together with customs clearance and your onboarding timeline. A dedicated coordinator acts as the liaison between the executive, their company, and our agents at the destination.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `Support at your destination`,
        body: [
          `Through our network and local partnerships, we can facilitate landing orientation — housing, essential services, initial paperwork — depending on the needs of each corridor and corporate client.`,
        ],
      },
      {
        heading: `Corporate mobility: an ally for HR`,
        body: [
          `For companies, relocating talent is a strategic investment, and a poorly managed move can undermine a key executive's onboarding. We work as an extension of your mobility or Human Resources department: one single provider, clear reporting, and a coordinator who handles the details so the employee can arrive focused on their new role, not on boxes.`,
          `We handle one-off assignments as well as recurring programs, with the discretion and professionalism that executive-level relocation demands.`,
        ],
        image: IMG.team,
      },
      {
        heading: `Letting the executive focus on what matters`,
        body: [
          `The value of a well-managed relocation is measured in peace of mind. While we orchestrate the move, customs clearance and coordination at the destination, the professional and their family can focus on the personal transition — settling in, getting to know the country, starting the new chapter on the right foot.`,
          `That's the purpose of our VIP service: removing the logistical complexity so the move becomes a launchpad, not an obstacle.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:user-tie', title: 'VIP service', text: 'Dedicated, discreet attention for the executive.' },
      { icon: 'fa6-solid:handshake-angle', title: 'Company liaison', text: 'We coordinate timelines with HR and mobility teams.' },
      { icon: 'fa6-solid:earth-americas', title: 'Global network', text: 'Agents at destination for a smooth landing.' },
      { icon: 'fa6-solid:house-circle-check', title: 'Arrival support', text: 'Orientation to help you settle into your new country.' },
    ],
    faqs: [
      { q: `Do you work with companies to relocate their employees?`, a: `Yes. We support corporate mobility programs, acting as the liaison between the employee, HR, and our agents at destination.` },
      { q: `Do you help with housing or paperwork at the destination?`, a: `Through local partnerships we can provide landing orientation. The scope is defined by the corridor and the client's needs.` },
    ],
    related: ['cliente-corporativas', 'puerta-a-puerta', 'cliente-estudiantes'],
  },
  {
    id: 'cliente-estudiantes',
    categoryId: 'cliente',
    slug: 'student-moving-services',
    icon: 'fa6-solid:graduation-cap',
    title: 'Student Moving Services',
    metaTitle: 'Student Moving Services Abroad | PIM Panama',
    metaDescription:
      `Moving services for students heading abroad: small shipments by shared container (LCL) or air, affordable and well coordinated. Get a quote from PIM.`,
    heroTagline: `Head abroad with what you need, without overspending.`,
    heroImage: IMG.boxes,
    intro: [
      `Studying abroad usually means moving a small volume — clothes, books, a few personal items and belongings. For that, the most affordable option is a shared container (LCL) or a light air shipment of a few boxes, where you pay only for the space or weight you use.`,
      `We help the student and their family move the essentials simply, safely, and within budget.`,
    ],
    sections: [
      {
        heading: `The most affordable option`,
        body: [
          `We consolidate your boxes into a shared container or coordinate a light air shipment, depending on urgency and budget. We'll advise you on what's worth bringing and what's better to buy at your destination.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `Simple for the family`,
        body: [
          `We handle the packing, the paperwork and the coordination to keep the process light. The student can focus on this new chapter while the family travels — or stays behind — at ease.`,
        ],
      },
      {
        heading: `What's worth bringing, and what to buy there`,
        body: [
          `The key to an affordable student move is bringing little, and choosing well. Clothing suited to the climate, books and study materials, personal items, and some household basics if the housing isn't furnished. Bulky, inexpensive furniture is almost always better purchased at your destination.`,
          `We help you decide what's worth shipping by weighing freight cost against the cost of replacing it there, so you neither overspend nor arrive short on essentials.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: `Peace of mind for parents`,
        body: [
          `Sending a child to study abroad already brings plenty of emotion; the logistics of their belongings shouldn't add to it. We handle the packing, the paperwork and the shipment tracking, and keep the family informed every step of the way.`,
          `The student receives their belongings without complications, and the family travels — or stays home — knowing everything is in good hands.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:coins', title: 'Affordable', text: 'You pay only for the space or weight you use.' },
      { icon: 'fa6-solid:layer-group', title: 'LCL or air', text: 'We choose the mode based on urgency and budget.' },
      { icon: 'fa6-solid:box', title: 'Packing included', text: 'Materials and packing for your boxes.' },
      { icon: 'fa6-solid:heart', title: 'Peace of mind for the family', text: 'Complete coordination from start to finish.' },
    ],
    faqs: [
      { q: `Is it worth shipping furniture, or buying it there?`, a: `For a small load, it's almost always better to ship only personal items and buy furniture at your destination. We'll help you decide what's worth moving.` },
      { q: `How long does a student shipment take?`, a: `Air shipping takes a matter of days; a shared container takes longer. We choose based on your start date and budget.` },
    ],
    related: ['lcl', 'aereas', 'cliente-expatriados'],
  },
  {
    id: 'cliente-jubilados',
    categoryId: 'cliente',
    slug: 'retiree-moving-services',
    icon: 'fa6-solid:mug-hot',
    title: 'Moving Services for Retirees',
    metaTitle: 'Moving Services for Retirees | PIM Panama',
    metaDescription:
      `Moving services for retirees, built around care: disassembly, special packing and patient, attentive support. Panama, a top retirement destination, in good hands.`,
    heroTagline: `A new chapter deserves a calm, carefully handled move.`,
    heroImage: IMG.team,
    intro: [
      `Panama is one of the most popular retirement destinations in the world, and many retiree moves involve relocating items of deep sentimental value accumulated over a lifetime. Our service puts the focus on care, patience and close, personal support.`,
      `We take on the heavy lifting — disassembly, special packing, loading — so this new chapter can begin without effort or stress.`,
    ],
    sections: [
      {
        heading: `Care and patience`,
        body: [
          `We treat every item — and every memory — with care. Our team works at the client's pace, explaining the process and answering questions with kindness every step of the way.`,
        ],
        image: IMG.packing,
      },
      {
        heading: `All the heavy lifting, handled for you`,
        body: [
          `We disassemble furniture, pack the fragile and the valuable, load everything, and — at the destination — deliver, reassemble and place everything where it belongs. The retiree doesn't have to lift a finger.`,
        ],
      },
      {
        heading: `Panama, a retirement destination`,
        body: [
          `Year after year, Panama is one of the most sought-after retirement destinations in the world, thanks to its climate, cost of living, and the benefits of its Pensionado Visa. That means many of our retiree moves are arrivals — families bringing the home of a lifetime to begin their best chapter here.`,
          `We know this profile and its needs well: care with sentimental items, a patient pace, and guidance on importing household goods. We make the arrival as calm as the destination promises to be.`,
        ],
        image: IMG.team,
      },
      {
        heading: `Care for what carries a story`,
        body: [
          `Over a lifetime, people accumulate objects that are more than just things: the china from family holidays, the paintings, the books, the inherited furniture. Each of those pieces receives the reinforced packing and gentle handling it deserves from our team.`,
          `We take the time to do it right, explaining the process with kindness and respecting the — often immeasurable — value of what we're moving.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:hand-holding-heart', title: 'Personal, caring service', text: 'Patience and support at every step.' },
      { icon: 'fa6-solid:screwdriver-wrench', title: 'Effortless for you', text: 'We handle all of the heavy lifting.' },
      { icon: 'fa6-solid:box-open', title: 'Special packing', text: 'Extra care for items of sentimental value.' },
      { icon: 'fa6-solid:house-circle-check', title: 'Set up at destination', text: 'We reassemble and place everything in your new home.' },
    ],
    faqs: [
      { q: `Will you take care of everything so I don't have to lift anything?`, a: `Yes. We disassemble, pack, load, and at the destination we deliver, reassemble and place everything. You just supervise at your own pace.` },
      { q: `Do you take special care with sentimental items?`, a: `Absolutely. Fragile and valuable pieces receive reinforced packing and especially careful handling.` },
    ],
    related: ['cliente-residenciales', 'especiales-arte', 'complementarios-embalaje'],
  },
  {
    id: 'casillero-miami',
    categoryId: 'casillero',
    slug: 'miami-mail-forwarding-package-locker',
    icon: 'fa6-solid:cart-shopping',
    title: 'Miami Package Locker (Shop in the USA)',
    metaTitle: 'Miami Package Locker | Shop the USA, Receive in Panama | PIM',
    metaDescription:
      `Panama International Movers' Miami package locker: shop Amazon and US stores, we consolidate your packages and ship them to Panama. Sign up for free.`,
    heroTagline: `Shop any US store and receive it in Panama — even if they don't ship internationally.`,
    heroImage: IMG.containers,
    intro: [
      `Many US retailers — from Amazon to brands that don't ship outside the country — offer prices and selection you can't always find locally. With our Miami package locker, you get a physical US address to receive your purchases, and we take care of getting them to Panama.`,
      `It's the simplest way to shop in the US as if you lived there: register your locker, use that address at checkout, and your packages arrive at our Miami warehouse, where we consolidate them and ship them to your door.`,
    ],
    sections: [
      {
        heading: `How the package locker works`,
        body: [
          `The process is simple: when you sign up, we assign you a personal address in Miami, complete with your name and a locker number. Whenever you shop at any US retailer, you use that address as the shipping destination. The store ships to our Miami warehouse, we receive the package, log it, and notify you.`,
          `From there, it's your call — ship it right away, or wait to accumulate a few purchases and consolidate them into a single shipment to save. We move it to Panama and deliver it to you.`,
        ],
        image: IMG.warehouse,
      },
      {
        heading: `Consolidation: the key to saving`,
        body: [
          `Shipping five packages separately costs far more than shipping them together. Our consolidation service combines all your purchases arriving in Miami into a single shipment to Panama, significantly cutting the freight cost per item.`,
          `You control when to consolidate and ship from your account, optimizing each shipment based on what you've bought.`,
        ],
      },
      {
        heading: `Shop any store in the United States`,
        body: [
          `Amazon, eBay, tech retailers, clothing brands, parts suppliers, items you can't find in Panama or that cost far more here — with a US address, the entire American retail catalog is within reach, even from stores that don't ship internationally.`,
          `Ideal for frequent shoppers, small businesses that import product, and expats used to shopping online in the US.`,
        ],
      },
      {
        heading: `Duties and customs clearance, handled`,
        body: [
          `Imported purchases are subject to Panama's customs rules and duties. We handle customs clearance and clearly explain the applicable charges based on the value and type of product, so there are no surprises when you receive your package.`,
          `With our experience in international logistics, your purchase clears customs smoothly and reaches your hands without complications.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:location-dot', title: 'Your Miami address', text: 'Receive US purchases even if the store won\'t ship abroad.' },
      { icon: 'fa6-solid:boxes-stacked', title: 'Consolidation', text: 'Combine several purchases into one shipment and save on freight.' },
      { icon: 'fa6-solid:cart-shopping', title: 'The entire US catalog', text: 'Amazon, eBay and thousands of stores within reach.' },
      { icon: 'fa6-solid:file-contract', title: 'Customs handled', text: 'Clearance and clear charges, no surprises.' },
    ],
    faqs: [
      { q: `How do I get my Miami address?`, a: `When you register for the package locker, we assign you a personal Miami address with your name and locker number. Use it as your shipping destination when shopping at any US store.` },
      { q: `How much do I save by consolidating?`, a: `It depends on the number and size of your packages, but combining several purchases into one shipment notably reduces the freight cost per item compared to shipping them separately.` },
      { q: `Do I pay duties on my purchases?`, a: `Imports are subject to Panama's customs duties based on the value and type of product. We explain the charges clearly and handle customs clearance for you.` },
    ],
    related: ['courier-internacional', 'maritimas', 'aereas'],
  },
  {
    id: 'courier-internacional',
    categoryId: 'casillero',
    slug: 'international-courier-service',
    icon: 'fa6-solid:truck-fast',
    title: 'International Courier Service',
    metaTitle: 'Door-to-Door International Courier from Panama | PIM',
    metaDescription:
      `Door-to-door international courier service from Panama: express shipping of documents and packages worldwide, with tracking and customs handling.`,
    heroTagline: `Send documents and packages anywhere in the world, fast and trackable.`,
    heroImage: IMG.plane,
    intro: [
      `When you need to send an important document, a sample, or a package abroad quickly, our international courier service delivers it door to door anywhere in the world. It's the solution for shipments that can't wait for the timeline of a full move or a consolidated shipment.`,
      `We pick up at your home or office, handle the paperwork and customs, and deliver at destination with tracking at every stage.`,
    ],
    sections: [
      {
        heading: `Express door-to-door shipping`,
        body: [
          `Our courier service is built for speed: we pick up your shipment and dispatch it by air to its international destination, with direct delivery to the recipient's address. Ideal for legal documents, contracts, commercial samples, urgent parts, or personal packages.`,
          `You don't have to visit any office or handle any paperwork — we coordinate everything from pickup to final delivery.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: `Documents and packages, fully tracked`,
        body: [
          `Whether it's an envelope with documents or a box of products, every shipment travels identified and with a tracking number, so you and the recipient always know where it is. That traceability brings peace of mind when what you're sending matters or is time-sensitive.`,
          `We advise you on the right packaging for your contents, so it arrives in perfect condition.`,
        ],
      },
      {
        heading: `Customs and paperwork, without the hassle`,
        body: [
          `International shipments pass through customs both at origin and at destination. We prepare the necessary documentation and manage clearance so your courier shipment moves without holdups, keeping you informed of any requirement or charge that applies at the destination country.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:bolt', title: 'Fast', text: 'Express air shipping anywhere in the world.' },
      { icon: 'fa6-solid:house', title: 'Door to door', text: 'We pick up and deliver at the address you specify.' },
      { icon: 'fa6-solid:location-crosshairs', title: 'Fully tracked', text: 'Track your shipment at every stage of the journey.' },
      { icon: 'fa6-solid:file-shield', title: 'Customs handled', text: 'Paperwork and clearance taken care of for you.' },
    ],
    faqs: [
      { q: `What can I send by courier?`, a: `Documents, commercial samples, parts, personal packages and most goods, subject to the destination country's customs restrictions. We'll tell you what can't be sent to a given destination.` },
      { q: `Can I track my shipment?`, a: `Yes. Every courier shipment travels with a tracking number so you and the recipient always know its location and status.` },
    ],
    related: ['casillero-miami', 'aereas', 'complementarios-aduanas'],
  },
];
