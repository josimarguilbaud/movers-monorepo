import type { Service, ServiceCategory } from '../services';
import { IMG } from '../services';

export const svcEspecialesComplementarios: Service[] = [
  {
    id: 'especiales-arte',
    categoryId: 'especiales',
    slug: 'fine-art-antiques-shipping',
    icon: 'fa6-solid:palette',
    title: 'Fine Art and Antiques Shipping',
    metaTitle: 'Fine Art and Antiques Shipping | PIM Panama',
    metaDescription:
      `International packing and shipping for fine art and antiques: custom wood crating, climate control, and specialty insurance. Museum-grade handling for collectors.`,
    heroTagline: `Irreplaceable pieces deserve museum-grade handling.`,
    heroImage: IMG.packing,
    intro: [
      `Paintings, sculptures, antiques, and collectible objects call for a very different approach than a standard move. The smallest oversight can mean irreversible damage, so we apply museum-level packing techniques: custom wood crates, acid-free materials, and, when the piece calls for it, climate control.`,
      `Every item is documented, protected, and insured for its true value, so it arrives exactly as it left.`,
    ],
    sections: [
      {
        heading: 'Custom crates and specialty materials',
        body: [
          `We build wood crates engineered for each piece, with internal padding, corner protection, and anti-vibration systems. For sensitive items we use acid-free materials and, when needed, humidity-controlled packing.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Documentation and specialized insurance',
        body: [
          `We photograph and document the condition of every piece before packing, and arrange declared-value coverage — ideally backed by an appraisal — suited to fine art and antiques.`,
        ],
      },
      {
        heading: 'Museum-standard handling',
        body: [
          `The same techniques museums use to move their collections guide our work with art and antiques: gloves, acid-free materials, internal supports that immobilize without pressing, and wood crates built to the exact dimensions of each piece. Nothing touches the surface of the work directly.`,
          `For significant collections, we can even arrange climate-controlled conditions in transit, protecting paintings, sculptures, and furniture sensitive to humidity and temperature.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'Collectors, galleries, and family estates',
        body: [
          `We serve the collector relocating a personal collection, the gallery moving an exhibition, and the family inheriting valuable pieces who wants to bring them together in a new home, all with the same standard: every object is irreplaceable and is treated that way.`,
          `We also guide you through the administrative side — documentation, appraisal, insurance — so the move of your artwork is as secure legally as it is physically.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:box-open', title: 'Custom-built crates', text: `A wood crate engineered for each piece.` },
      { icon: 'fa6-solid:temperature-half', title: 'Climate control', text: `Humidity protection for sensitive items.` },
      { icon: 'fa6-solid:camera', title: 'Documented condition', text: `Photographic record before packing.` },
      { icon: 'fa6-solid:gem', title: 'True-value insurance', text: `Coverage matched to the piece's real worth.` },
    ],
    faqs: [
      { q: 'Do you build custom crates for large paintings?', a: `Yes. We build wood crates specific to each piece, regardless of size, with internal anti-vibration protection.` },
      { q: 'Can I insure my art for its appraised value?', a: `Yes, and we recommend it. We arrange declared-value coverage, ideally backed by a recent appraisal.` },
    ],
    related: ['especiales-pianos', 'especiales-vinos', 'complementarios-seguros'],
  },
  {
    id: 'especiales-pianos',
    categoryId: 'especiales',
    slug: 'piano-musical-instrument-moving',
    icon: 'fa6-solid:music',
    title: 'Piano and Musical Instrument Moving',
    metaTitle: 'Piano and Musical Instrument Moving | PIM Panama',
    metaDescription:
      `Specialized transport for pianos and musical instruments: dedicated equipment and packing techniques for grand pianos, uprights, and more, moved with care.`,
    heroTagline: `Heavy, delicate, and finely tuned: pianos demand expert hands.`,
    heroImage: IMG.packing,
    intro: [
      `A piano combines enormous weight with intricate internal delicacy, and moving one — especially a grand — calls for specific equipment and technique. A poorly executed move can throw off the action, damage the case, or ruin the tuning. That's why we treat it as the precision instrument it is.`,
      `We also move other instruments — strings, brass and woodwinds, percussion — with packing designed to protect both their structure and their sound.`,
    ],
    sections: [
      {
        heading: 'Technique and equipment for pianos',
        body: [
          `We use skid boards, straps, padded protection, and, for grand pianos, professional removal of legs and lyre when needed. The goal is to distribute the weight and avoid any impact on the action.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Other instruments',
        body: [
          `Guitars, violins, brass and woodwinds, and electronic music gear receive cases and packing that cushion impact and control humidity, protecting both structure and sound.`,
        ],
      },
      {
        heading: 'Why a piano is not just another piece of furniture',
        body: [
          `A piano combines massive weight — hundreds of pounds — with an internal mechanism made of thousands of precision parts. Moving it carelessly doesn't just scratch the case: it can misalign the action, damage the pinblock, or harm the soundboard, compromising the tone. That's why piano moving is a specialized trade, not a job for brute force.`,
          `Our team uses skid boards, straps, and padded protection, and, on grand pianos, professional removal of legs and lyre, distributing the weight so no component is stressed during the move.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'Tuning and the climate at destination',
        body: [
          `It's normal for a piano to need tuning after a move: the change in location, humidity, and temperature affects the strings and the wood. We recommend letting the instrument acclimate for a few days in its new environment before tuning it.`,
          `We'll guide you through this aftercare so your piano finds its best sound again in its new home as soon as possible.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:screwdriver-wrench', title: 'Expert disassembly', text: `Legs and lyre removed on grand pianos, when needed.` },
      { icon: 'fa6-solid:shield-halved', title: 'Action protected', text: `Handling that safeguards case, strings, and tuning.` },
      { icon: 'fa6-solid:people-carry-box', title: 'Specialized equipment', text: `Skid boards, straps, and dedicated protection.` },
      { icon: 'fa6-solid:music', title: 'Every instrument', text: `Strings, winds, percussion, and electronics.` },
    ],
    faqs: [
      { q: 'Do you move grand pianos?', a: `Yes. Grand pianos require professional removal of legs and lyre and specialized handling, which we carry out with the right equipment and technique.` },
      { q: 'Will my piano need tuning afterward?', a: `Most pianos need tuning after a move because of the change in location and climate. We move it with full protection of the action to minimize the impact.` },
    ],
    related: ['especiales-arte', 'especiales-deportivo', 'complementarios-embalaje'],
  },
  {
    id: 'especiales-vinos',
    categoryId: 'especiales',
    slug: 'wine-collection-cellar-shipping',
    icon: 'fa6-solid:wine-bottle',
    title: 'Wine Cellar and Fine Wine Shipping',
    metaTitle: 'Wine Cellar and Fine Wine Shipping | PIM Panama',
    metaDescription:
      `International shipping for wine collections and cellars: temperature control, specialized packing, and careful handling. Your collection, kept intact.`,
    heroTagline: `Your wine collection deserves to travel in optimal condition.`,
    heroImage: IMG.packing,
    intro: [
      `Fine wine is sensitive to temperature, vibration, and light — the wrong conditions in transit can damage a valuable collection. We move cellars and collections with specialized packing and, when the corridor allows it, temperature control to preserve every bottle.`,
      `We care for your wine investment with the same rigor we bring to any high-value item.`,
    ],
    sections: [
      {
        heading: 'Packing and climate',
        body: [
          `We use dividers and boxes designed for bottles, which absorb vibration and keep bottles stable. For sensitive collections, we evaluate options with temperature control in transit.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Customs considerations',
        body: [
          `International shipping of alcohol can be subject to specific permits and duties depending on the country. We advise you on your destination's requirements before your collection moves.`,
        ],
      },
      {
        heading: "Wine's three enemies in transit",
        body: [
          `Three factors threaten a wine collection in transit: temperature (heat accelerates aging and can ruin a bottle), vibration (which stirs up sediment and stresses the liquid), and light. Our packing and, where the corridor allows, temperature control, are designed to neutralize all three.`,
          `We transport bottles in a stable position, with dividers that absorb vibration, so your wine investment arrives in the same condition it left.`,
        ],
        image: IMG.containers,
      },
      {
        heading: "Permits and duties: don't improvise with alcohol",
        body: [
          `Alcohol is one of the most heavily regulated categories in international trade. Many countries require specific permits and apply particular duties on wine imports, even when it's part of a household move. Overlooking this can mean holds or fines.`,
          `Before moving your collection, we review your destination's exact regulations and explain clearly what's allowed, what requires a permit, and what duties might apply, so there are no surprises.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:temperature-half', title: 'Temperature control', text: `Climate-controlled options for sensitive collections.` },
      { icon: 'fa6-solid:box', title: 'Anti-vibration packing', text: `Dividers and boxes designed for bottles.` },
      { icon: 'fa6-solid:file-contract', title: 'Customs guidance', text: `We advise you on permits and duties.` },
      { icon: 'fa6-solid:wine-glass', title: 'Collection kept intact', text: `Every bottle cared for as an investment.` },
    ],
    faqs: [
      { q: 'Can you keep the wine at temperature during transit?', a: `For sensitive collections we evaluate temperature-controlled solutions depending on the corridor. Not every route offers it; we'll confirm in your quote.` },
      { q: 'Do I need permits to move wine to another country?', a: `International alcohol shipments usually require permits and duties depending on the destination. We advise you on the requirements that apply.` },
    ],
    related: ['especiales-arte', 'complementarios-aduanas', 'complementarios-seguros'],
  },
  {
    id: 'especiales-deportivo',
    categoryId: 'especiales',
    slug: 'sports-equipment-shipping',
    icon: 'fa6-solid:bicycle',
    title: 'Sports Equipment Shipping',
    metaTitle: 'International Sports Equipment Shipping | PIM Panama',
    metaDescription:
      `International shipping for bicycles, surfboards, ski gear, and golf clubs: custom packing for bulky or delicate sports equipment. Get a quote from PIM.`,
    heroTagline: `Bikes, boards, skis, and clubs: your gear arrives ready for action.`,
    heroImage: IMG.packing,
    intro: [
      `Sports equipment tends to be bulky, delicate, or awkwardly shaped: bicycles, surfboards, ski gear, golf clubs. Each requires its own packing solution to travel without damage. We prepare your gear with custom boxes and protection so it arrives at destination in perfect condition.`,
      `Ideal for athletes, travelers, and anyone moving with their favorite pastime in tow.`,
    ],
    sections: [
      {
        heading: 'Packing by sport',
        body: [
          `We partially disassemble bicycles to box them safely, protect surfboards with rigid covers and padding, and secure skis and golf clubs in reinforced cases. Every discipline gets its own solution.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Shipped alone or with your move',
        body: [
          `You can ship your sports equipment on its own or include it within your household move. We'll recommend the most convenient option based on volume and destination.`,
        ],
      },
      {
        heading: 'A solution for every discipline',
        body: [
          `Every sport presents its own packing challenge. A bicycle gets partially disassembled (handlebars, pedals, sometimes wheels) and boxed; a surfboard or ski needs rigid covers and edge and tip protection; golf clubs travel in reinforced cases; diving or fishing gear requires care with delicate components.`,
          `We prepare each piece of equipment with the technique and materials suited to its shape and fragility, so it arrives ready to use at your destination.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'For athletes, travelers, and enthusiasts alike',
        body: [
          `You don't have to be a professional athlete to need this service. Families moving with everyone's bicycles, enthusiasts who won't part with their board, athletes traveling to a competition with their gear — all find a secure solution here.`,
          `And if your equipment is high-value, we apply the same care and the same insurance options as any specialty item.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:box-open', title: 'Custom packing', text: `A specific solution for each type of equipment.` },
      { icon: 'fa6-solid:screwdriver-wrench', title: 'Safe disassembly', text: `We box bicycles and bulky equipment properly.` },
      { icon: 'fa6-solid:shield-halved', title: 'Reinforced protection', text: `Covers and cases that cushion impact.` },
      { icon: 'fa6-solid:box', title: 'Alone or with your move', text: `Shipped individually or inside your container.` },
    ],
    faqs: [
      { q: 'How do you pack a bicycle for international shipping?', a: `We partially disassemble it (handlebars, pedals, sometimes wheels) and box it with protection so it travels safely, ready to reassemble at destination.` },
      { q: 'Can you ship multiple boards or sets of equipment together?', a: `Yes. We consolidate multiple pieces of sports equipment with individual protection, optimizing the shipment.` },
    ],
    related: ['especiales-pianos', 'lcl', 'aereas'],
  },

  /* ============ Complementary Services ============ */
  {
    id: 'complementarios-embalaje',
    categoryId: 'complementarios',
    slug: 'professional-packing-services',
    icon: 'fa6-solid:box-open',
    title: 'Professional Packing Services',
    metaTitle: 'Professional Packing Services for Moving | PIM Panama',
    metaDescription:
      `Professional export-grade packing: standard boxes, custom wood crating, bubble wrap, and premium materials to protect every item in your move. Get a quote.`,
    heroTagline: `90% of your move's protection comes down to the packing.`,
    heroImage: IMG.packing,
    intro: [
      `Good packing is the best insurance policy against damage. Our professional service uses export-grade materials and item-specific techniques: corrugated cardboard, bubble wrap, kraft paper, corner protectors, and custom wood crates for the most fragile pieces.`,
      `We pack with judgment, inventory everything, and optimize volume to protect your belongings and make the most of every inch of the shipment.`,
    ],
    sections: [
      {
        heading: 'Export-grade materials and techniques',
        body: [
          `Every object calls for its own method: china in dish-pack dividers, framed art in padded flat boxes, electronics in their original packaging or the equivalent, furniture wrapped and corner-protected. For critical pieces, custom-built wood crates.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Inventory and labeling',
        body: [
          `Everything we pack is inventoried and labeled by room and content. This speeds up customs, supports your insurance claim if needed, and keeps unpacking at destination organized and loss-free.`,
        ],
      },
      {
        heading: 'Packing is your first insurance policy',
        body: [
          `Before any coverage kicks in, the best protection for your belongings is a job well packed. Most damage in a move doesn't come from dramatic accidents — it comes from vibration, pressure, and friction accumulated over weeks in transit. Professional packing neutralizes those quiet forces.`,
          `That's why we invest in export-grade materials and technique: it's what separates a move that arrives intact from one full of unpleasant surprises.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'Full or partial packing — your call',
        body: [
          `You can hire full professional packing — we handle everything — or just the fragile and valuable items, packing the rest yourself. We also supply quality materials if you'd rather do it yourself, with our guidance.`,
          `On international moves, though, professional packing is often required by customs and insurers, so we'll let you know exactly what's mandatory for your corridor.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:box', title: 'Premium materials', text: `Export-grade quality for maximum protection.` },
      { icon: 'fa6-solid:cube', title: 'Custom crates', text: `Wood crates for the most fragile or valuable items.` },
      { icon: 'fa6-solid:list-check', title: 'Fully inventoried', text: `Room-by-room labeling that speeds up customs and claims.` },
      { icon: 'fa6-solid:maximize', title: 'Optimized volume', text: `Efficient packing that lowers freight costs.` },
    ],
    faqs: [
      { q: 'Is professional packing mandatory?', a: `For international moves, customs and insurers usually require it, to guarantee the contents match the inventory and are properly protected. For local moves, it's optional.` },
      { q: 'Can I just buy the materials?', a: `Yes. If you'd rather pack yourself, we supply quality boxes and materials and provide guidance to do it right.` },
    ],
    related: ['complementarios-seguros', 'complementarios-almacenaje', 'maritimas'],
  },
  {
    id: 'complementarios-seguros',
    categoryId: 'complementarios',
    slug: 'international-moving-insurance',
    icon: 'fa6-solid:file-shield',
    title: 'International Moving Insurance',
    metaTitle: 'International Moving Insurance (All-Risk) | PIM Panama',
    metaDescription:
      `All-risk insurance policies for international moves: door-to-door coverage against theft, damage, and loss. Guidance on declared value. PIM Panama.`,
    heroTagline: `Total peace of mind: your belongings protected door to door.`,
    heroImage: IMG.packing,
    intro: [
      `No matter how much care is taken, no international shipment is immune to the unexpected — handling at ports, sea conditions, delays. An all-risk, door-to-door policy turns that uncertainty into peace of mind, protecting the value of your household goods against damage, theft, and loss.`,
      `We work with well-established international insurers and advise you on the value to declare, so your coverage is fair and sufficient.`,
    ],
    sections: [
      {
        heading: 'All-risk coverage',
        body: [
          `The all-risk policy covers the full journey, from your origin home to your destination home, including handling at ports and airports. It's the most complete protection available for an international move.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Declared value is the key',
        body: [
          `Cost and coverage depend on the value you declare for your household goods. We help you estimate it accurately — neither too high nor too low — so any claim is settled fairly.`,
        ],
      },
      {
        heading: 'How to put together a valued inventory',
        body: [
          `The foundation of good insurance is a valued inventory: a list of your belongings with a value assigned to each one. It's not about inflating figures or underestimating to save on premium — it's about reflecting the real replacement value, so a claim, if needed, lets you actually replace what was lost.`,
          `We guide you through this exercise, paying special attention to your highest-value items — electronics, artwork, jewelry — which are worth declaring in detail.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'What to do if something arrives damaged',
        body: [
          `Incidents are rare with proper packing, but it's important to know how to act. When you receive your shipment, check the inventory and the condition of your items; if you find damage, report it to your coordinator right away and document it with photos. The sooner it's reported, the faster the claim process moves.`,
          `We stand with you through the process with the insurer so your claim is resolved as quickly and fairly as possible.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:shield-halved', title: 'All-risk coverage', text: `Complete door-to-door protection.` },
      { icon: 'fa6-solid:building-columns', title: 'Top-tier insurers', text: `Backed by recognized international companies.` },
      { icon: 'fa6-solid:scale-balanced', title: 'Fair valuation', text: `We advise you on the value to declare.` },
      { icon: 'fa6-solid:face-smile', title: 'Peace of mind', text: `Travel without worrying about the unexpected.` },
    ],
    faqs: [
      { q: 'What does all-risk insurance cover?', a: `Damage, theft, and loss throughout the entire international journey, including handling at ports and airports. It's the most complete coverage available.` },
      { q: 'How do I know how much value to declare?', a: `We help you build a valued inventory of your household goods so you declare a realistic figure, ensuring the claim payout is adequate if something happens.` },
    ],
    related: ['complementarios-embalaje', 'complementarios-aduanas', 'maritimas'],
  },
  {
    id: 'complementarios-almacenaje',
    categoryId: 'complementarios',
    slug: 'storage-solutions-panama',
    icon: 'fa6-solid:warehouse',
    title: 'Storage Solutions',
    metaTitle: 'Storage Solutions for Moving in Panama | PIM Panama',
    metaDescription:
      `Secure storage in Panama for your move: short- and long-term deposit, monitored facilities, and bonded customs warehousing. Store your belongings with confidence.`,
    heroTagline: `A safe space for your things, for as long as you need it.`,
    heroImage: IMG.warehouse,
    intro: [
      `Sometimes the timing of a move doesn't line up perfectly: the destination home isn't ready yet, there's a gap between residences, or part of your household goods needs to wait. That's where our secure storage in Panama comes in, available short- or long-term, in monitored facilities.`,
      `Your belongings stay inventoried, protected, and available whenever you need them, with the flexibility your situation calls for.`,
    ],
    sections: [
      {
        heading: 'Short- and long-term storage',
        body: [
          `Whether it's a few days between homes or several months while you plan your next step, we tailor storage to your needs. Your household goods are kept packed and inventoried for protection and control.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Bonded customs warehousing',
        body: [
          `For international cargo in transit, bonded warehousing keeps your shipment under customs control until paperwork is complete. We advise you if your case requires it.`,
        ],
      },
      {
        heading: 'When you might need storage',
        body: [
          `Storage solves one of the most common problems in moving: timing that doesn't line up. The destination home isn't ready yet, there's a gap between leaving one residence and moving into the next, or part of your household goods has to wait for a second stage. In every case, secure storage gives you flexibility.`,
          `We adapt the timeframe to your needs — a few days or several months — and keep your household goods packed and inventoried, ready to deliver whenever you ask.`,
        ],
        image: IMG.warehouse,
      },
      {
        heading: 'Your belongings, protected while they wait',
        body: [
          `Storing your things doesn't mean leaving them to chance. Your belongings are kept in monitored facilities, properly packed to prevent damage during storage, and covered by an inventory that lets you know exactly what's in deposit.`,
          `If you'd like, we can add insurance coverage for the storage period, so your peace of mind never has to pause while your move is on hold.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:shield-halved', title: 'Secure facilities', text: `Monitored spaces for your peace of mind.` },
      { icon: 'fa6-solid:calendar', title: 'Flexible terms', text: `Short- or long-term, whichever you need.` },
      { icon: 'fa6-solid:list-check', title: 'Fully inventoried', text: `Everything logged for your control and protection.` },
      { icon: 'fa6-solid:file-contract', title: 'Bonded warehousing', text: `An option for international cargo in transit.` },
    ],
    faqs: [
      { q: 'Can I store my belongings between moves?', a: `Yes. We offer short- and long-term storage for those periods when the destination home isn't ready yet or you're in transition between residences.` },
      { q: 'Is my property insured while in storage?', a: `We can include insurance coverage for the storage period. We'll detail it along with your storage quote.` },
    ],
    related: ['complementarios-embalaje', 'contenedor-almacenamiento', 'complementarios-seguros'],
  },
  {
    id: 'complementarios-aduanas',
    categoryId: 'complementarios',
    slug: 'customs-clearance-management',
    icon: 'fa6-solid:file-contract',
    title: 'Customs Clearance Management',
    metaTitle: 'Customs Clearance Management for Moving | PIM Panama',
    metaDescription:
      `Customs management for international moves: documentation, tariff classification, household goods exemptions, and clearance at origin and destination. PIM Panama.`,
    heroTagline: `Customs bureaucracy, handled by experts.`,
    heroImage: IMG.packing,
    intro: [
      `Customs is where most moves run into trouble: incomplete paperwork, misclassified goods, or unfamiliarity with available exemptions can cause delays and unexpected costs. Our customs management team handles all the paperwork and communication with authorities, at both origin and destination.`,
      `We know the import regimes for used household goods and the exemptions that apply, so your move clears customs as smoothly and affordably as possible.`,
    ],
    sections: [
      {
        heading: 'Documentation and classification',
        body: [
          `We prepare and file the required documentation, correctly classify the goods, and apply, where applicable, the used-household-goods benefits that many countries offer to people relocating their residence.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Exemptions and duties',
        body: [
          `Many destinations allow used household goods to be imported with full or partial exemption from duties under certain conditions (for example, tied to specific residency visas). We'll let you know what applies in your case so you avoid unnecessary payments.`,
        ],
      },
      {
        heading: 'Why customs trips up so many moves',
        body: [
          `Customs is the point where most moves get stuck, and it's almost always for the same reasons: incomplete or incorrect documentation, misclassified goods, or not knowing about available benefits. The result is delays, unplanned storage charges, and sometimes payments that could have been avoided.`,
          `Our customs management exists precisely to eliminate that risk: we prepare the paperwork with precision and anticipate each country's requirements before your shipment arrives.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'One point of contact for origin and destination',
        body: [
          `An international move involves customs at both the origin country and the destination country, each with its own rules. Instead of you dealing with separate agents in two countries, we coordinate both ends through our network, serving as your single point of contact.`,
          `That way, clearance moves forward in a coordinated way, and you always have one person to ask about the status of your paperwork.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:file-lines', title: 'Complete paperwork', text: `We prepare and file all required documentation.` },
      { icon: 'fa6-solid:percent', title: 'Exemptions applied', text: `We make the most of used-goods benefits.` },
      { icon: 'fa6-solid:earth-americas', title: 'Origin and destination', text: `Customs management on both ends of the corridor.` },
      { icon: 'fa6-solid:gauge-high', title: 'No delays', text: `We prevent holdups caused by paperwork errors.` },
    ],
    faqs: [
      { q: 'Can I import my household goods without paying duties?', a: `Many countries allow used household goods to be imported with full or partial exemption under certain conditions (often tied to visa type). We verify what applies at your destination.` },
      { q: 'Do you handle the process, or do I need to hire a separate agent?', a: `We coordinate customs management at both origin and destination through our network of agents, so you have a single point of contact.` },
    ],
    related: ['complementarios-seguros', 'maritimas', 'puerta-a-puerta'],
  },
  {
    id: 'complementarios-limpieza',
    categoryId: 'complementarios',
    slug: 'move-out-cleaning-service',
    icon: 'fa6-solid:broom',
    title: 'Move-Out Cleaning Service',
    metaTitle: 'Move-Out Cleaning Service | PIM Panama',
    metaDescription:
      `Move-out cleaning service after your move: hand over your home spotless for the landlord or new owner. A small add-on that saves you time and effort.`,
    heroTagline: `Hand over your home spotless, without lifting a finger.`,
    heroImage: IMG.packing,
    intro: [
      `After a move, an empty home almost always needs a deep clean, whether to return it to the landlord in good condition or hand it over ready for the new owner. Our move-out cleaning service saves you that final effort at a moment when your energy is focused elsewhere.`,
      `A small add-on that closes out your move on a high note and saves you an exhausting chore.`,
    ],
    sections: [
      {
        heading: "What's included?",
        body: [
          `Deep cleaning of already-empty spaces: floors, bathrooms, kitchen, interior windows, and surfaces. We leave the home presentable for handover, based on the scope we agree on.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: 'The perfect close to your move',
        body: [
          `We schedule the cleaning right after the furniture is removed, so you hand over the home spotless without having to go back or hire a separate provider.`,
        ],
      },
      {
        heading: 'Ideal for getting your security deposit back',
        body: [
          `If you're leaving a rental, a final cleaning is often the condition for getting your security deposit back. A spotless handover avoids deductions and disputes with the landlord or property manager. Our service leaves the home inspection-ready.`,
          `For those selling or handing over a home they own, a deep clean also improves the new owner's first impression. It's the professional close to your move.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Coordinated with your move, no third parties',
        body: [
          `The advantage of booking cleaning with us is coordination: it happens right after we remove the furniture, without you needing to schedule a separate provider, wait around in an empty house, or make an extra trip.`,
          `One team, one point of contact, and a clean finish with no loose ends, so your move ends, literally, with a spotless home.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:broom', title: 'Deep cleaning', text: `Floors, bathrooms, kitchen, and surfaces of the empty home.` },
      { icon: 'fa6-solid:clock', title: 'Saves you time', text: `One less task during an already busy stretch.` },
      { icon: 'fa6-solid:handshake', title: 'Spotless handover', text: `Return the home in top condition.` },
      { icon: 'fa6-solid:list-check', title: 'One provider for everything', text: `Coordinated with your move, no third parties.` },
    ],
    faqs: [
      { q: 'Is the cleaning done before or after the furniture is moved?', a: `After the furniture is removed, on the already-empty home, so every space can be cleaned thoroughly.` },
      { q: 'Can I book only the cleaning service?', a: `This service is offered as an add-on to a move to coordinate scheduling; contact us with your case and we'll let you know availability.` },
    ],
    related: ['complementarios-embalaje', 'locales', 'cliente-residenciales'],
  },
];
