import type { Service, ServiceCategory } from '../services';
import { IMG } from '../services';

export const svcVehiculosMascotas: Service[] = [
  /* ============ Vehicle Shipping ============ */
  {
    id: 'auto-contenedor',
    categoryId: 'vehiculos',
    slug: 'car-shipping-in-container',
    icon: 'fa6-solid:box',
    title: 'Car Shipping in Container',
    metaTitle: 'International Car Shipping in Container | PIM Panama',
    metaDescription:
      `Ship your car internationally in a container from Panama: maximum protection, ideal for new, luxury, or classic vehicles. Paperwork and insurance included.`,
    heroTagline: `The safest way to ship your vehicle abroad: sealed and protected.`,
    heroImage: IMG.containers,
    intro: [
      `Shipping a car inside a container is the safest way to cross borders. The vehicle travels immobilized, shielded from the elements and from any outside handling, which makes it ideal for new, luxury, sports, or classic cars whose value justifies maximum protection.`,
      `At Panama International Movers we insure, load, and strap down your vehicle using professional tie-down points, and we handle all export and import paperwork so it arrives at destination ready to drive.`,
    ],
    sections: [
      {
        heading: 'Exclusive or shared container for your car',
        body: [
          `You can ship your vehicle in an exclusive container or share it with your household goods to optimize costs: in a 40-foot container it's common to combine the car with the boxes and furniture from your move.`,
          `It's also possible to consolidate your vehicle with other clients' cargo (several cars per container), a more economical alternative when you're not shipping household goods.`,
        ],
        image: IMG.port,
      },
      {
        heading: 'Documentation and permits',
        body: [
          `International vehicle shipping requires specific documentation: title of ownership, invoice, and compliance with the destination country's import rules, which sometimes limit vehicle age, emissions, or require homologation. Our team advises you on the requirements for your specific corridor.`,
        ],
      },
      {
        heading: 'Can I load boxes inside the car?',
        body: [
          `Unlike Ro-Ro, where the vehicle travels empty, many countries allow loading a properly inventoried car with household goods inside a container, making use of the interior space. It's a smart way to optimize your shipment when you're also moving your home.`,
          `The possibility and its limits depend on the shipping line and the destination country's regulations, so we confirm this for your specific corridor before planning the load.`,
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Preparing your vehicle before it ships',
        body: [
          `Every vehicle is prepared for international travel: the fuel level is reduced to the minimum required for safety, its condition is documented with a photographic record, loose items are removed, and the interior is cleaned (essential for destinations with biosecurity checks). It's then secured and strapped inside the container with professional tie-down points.`,
          `This preparation protects your vehicle, speeds up the customs inspection, and supports your insurance claim if needed. Nothing is left to chance.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:shield-halved', title: 'Maximum protection', text: `Travels sealed, with no exposure to weather or outside handling.` },
      { icon: 'fa6-solid:gem', title: 'Ideal for high-value cars', text: `The best option for new, luxury, or classic vehicles.` },
      { icon: 'fa6-solid:box', title: 'Combine with your move', text: `Make the most of the container by adding your household shipment.` },
      { icon: 'fa6-solid:file-contract', title: 'Paperwork included', text: `We handle export, import, and permits.` },
    ],
    faqs: [
      { q: 'Can I put boxes inside the car?', a: `It depends on the destination country and the shipping line; in many cases a properly inventoried load is allowed inside the vehicle. We'll confirm this for your route.` },
      { q: 'Which is safer, container or Ro-Ro?', a: `The container offers greater protection because the car travels closed and sealed. Ro-Ro is more economical, but the vehicle travels on an open roll-on/roll-off deck.` },
    ],
    related: ['auto-roro', 'motos', 'clasicos'],
  },
  {
    id: 'auto-roro',
    categoryId: 'vehiculos',
    slug: 'roll-on-roll-off-car-shipping',
    icon: 'fa6-solid:car',
    title: 'Roll-on/Roll-off (Ro-Ro) Car Shipping',
    metaTitle: 'Ro-Ro Car Shipping (Roll-on/Roll-off) | PIM Panama',
    metaDescription:
      `Roll-on/Roll-off (Ro-Ro) vehicle shipping: the most affordable way to ship your car abroad. The vehicle drives directly onto the vessel. Get a quote with PIM.`,
    heroTagline: `The most affordable alternative: your car drives straight onto the ship.`,
    heroImage: IMG.port,
    intro: [
      `The Roll-on/Roll-off (Ro-Ro) system is the most economical way to ship a vehicle by sea. Instead of loading it into a container, the car is driven on and off the vessel under its own power via ramps, aboard ships specifically designed for wheeled cargo.`,
      `It's an excellent option for operational, standard-value vehicles when the main goal is to reduce freight cost, while still keeping a professional, insured transport process.`,
    ],
    sections: [
      {
        heading: 'How does Ro-Ro work?',
        body: [
          `The vehicle is delivered to the port terminal, where specialized staff drive it into the vessel and secure it on a deck built for cars. On arrival, it's unloaded the same way and becomes available for customs clearance.`,
          `Because it travels on an open deck (not sealed in a container), Ro-Ro is recommended for vehicles in good operating condition, and personal items are generally not shipped inside.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Ro-Ro vs. container: which to choose',
        body: [
          `Choose Ro-Ro if you're after the lowest cost and your vehicle is of standard value. Choose a container if your car is new, luxury, or classic, or if you want to combine it with your household move. We'll show you both quotes so you can decide with confidence.`,
        ],
      },
      {
        heading: 'What happens at the port',
        body: [
          `For a Ro-Ro shipment, you deliver the vehicle to the port terminal within the agreed window, with the documentation in order. Specialized staff drive it into the vessel and secure it on a deck built for wheeled cargo. On arrival, it's unloaded the same way and becomes available for customs clearance.`,
          `Our team coordinates every step and gives you precise timing and document requirements so drop-off and pickup go smoothly.`,
        ],
        image: IMG.port,
      },
      {
        heading: 'Insurance and vehicle condition',
        body: [
          `Even though Ro-Ro is budget-friendly, we don't skip protection: we offer coverage for the international voyage and document the vehicle's condition with a photographic record before it ships. That way, should anything come up, you're covered.`,
          `Because it travels on an open deck (not sealed in a container), Ro-Ro is recommended for operational, standard-value vehicles; for high-value cars, a container remains the best option.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:sack-dollar', title: 'The most affordable option', text: `The lowest freight cost for shipping your vehicle by sea.` },
      { icon: 'fa6-solid:gauge-high', title: 'Fast process', text: `Quick loading and unloading: the car drives straight on and off.` },
      { icon: 'fa6-solid:ship', title: 'Purpose-built vessels', text: `Ships specifically designed for wheeled cargo.` },
      { icon: 'fa6-solid:file-shield', title: 'Insured', text: `We offer coverage for the international voyage.` },
    ],
    faqs: [
      { q: 'Can I ship items inside the car on Ro-Ro?', a: `Personal items generally aren't allowed on Ro-Ro shipments, since the vehicle doesn't travel sealed. If you need to ship belongings, a container is the right option.` },
      { q: 'Does my car need to be drivable?', a: `Yes, the vehicle must be able to drive on and off the ship under its own power. For non-operational vehicles, container alternatives are available.` },
    ],
    related: ['auto-contenedor', 'motos', 'clasicos'],
  },
  {
    id: 'motos',
    categoryId: 'vehiculos',
    slug: 'international-motorcycle-shipping',
    icon: 'fa6-solid:motorcycle',
    title: 'International Motorcycle Shipping',
    metaTitle: 'International Motorcycle Shipping | PIM Panama',
    metaDescription:
      `International motorcycle shipping from Panama: custom wooden crating or consolidated container shipping, with paperwork and insurance. Get a quote today.`,
    heroTagline: `Your bike travels protected, in a custom crate or consolidated in a container.`,
    heroImage: IMG.packing,
    intro: [
      `Shipping a motorcycle to another country requires careful packing to protect the bodywork, tank, and components during ocean or air transit. At Panama International Movers we prepare your bike in a custom wooden crate or consolidate it securely inside a container.`,
      `We handle export and import paperwork and insurance, so your motorcycle arrives in the same condition you handed it over.`,
    ],
    sections: [
      {
        heading: 'Packing options',
        body: [
          `A custom wooden crate is the most protective option: the bike is fixed to a base, immobilized, and boxed in to withstand port handling. To cut costs, we also consolidate motorcycles inside a shared container, properly secured.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Preparation before shipping',
        body: [
          `Before loading, safety rules usually require reducing the fuel in the tank and disconnecting the battery. Our team takes care of getting the bike ready for international transport.`,
        ],
      },
      {
        heading: 'Sea or air freight for your motorcycle',
        body: [
          `Most motorcycles travel by sea, either crated or consolidated, since it's the most economical option. When time is tight — a race, an urgent relocation — air freight is possible: faster, though at a higher cost and with even stricter packing requirements.`,
          `We help you choose based on urgency, budget, and destination, and prepare the bike to meet the requirements of each mode.`,
        ],
        image: IMG.plane,
      },
      {
        heading: 'Multiple bikes or alongside your move',
        body: [
          `If you're a collector or moving with more than one motorcycle, we consolidate them in the same container to reduce the cost per unit. And if you're also relocating your household, we can include the bike alongside your belongings, optimizing the shipment into a single freight.`,
          `Each motorcycle travels immobilized and individually protected, no matter how many share the space.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:box-open', title: 'Custom crate', text: `A wooden crate designed for your motorcycle model.` },
      { icon: 'fa6-solid:layer-group', title: 'Consolidated option', text: `A budget-friendly alternative inside a shared container.` },
      { icon: 'fa6-solid:shield-halved', title: 'Full protection', text: `Professional immobilization against impact and vibration.` },
      { icon: 'fa6-solid:file-contract', title: 'Paperwork and insurance', text: `Customs documentation and coverage included.` },
    ],
    faqs: [
      { q: 'Do I need to empty the gas tank?', a: `Sea and air safety rules usually require reducing fuel to a minimum and, for air freight, disconnecting the battery. We prepare the bike according to the regulations.` },
      { q: 'Can I ship several motorcycles together?', a: `Yes, we consolidate multiple motorcycles in the same container, optimizing the cost per unit.` },
    ],
    related: ['auto-contenedor', 'auto-roro', 'clasicos'],
  },
  {
    id: 'clasicos',
    categoryId: 'vehiculos',
    slug: 'classic-and-high-value-vehicle-shipping',
    icon: 'fa6-solid:award',
    title: 'Classic and High-Value Vehicle Shipping',
    metaTitle: 'Classic & High-Value Car Shipping | PIM Panama',
    metaDescription:
      `International shipping for classic, collector, and high-value vehicles: exclusive container, specialized tie-down, and insurance at declared value. PIM Panama.`,
    heroTagline: `For irreplaceable pieces: an exclusive container and a collector's care.`,
    heroImage: IMG.containers,
    intro: [
      `A classic or collector's car isn't just another vehicle — it's a valuable, sometimes irreplaceable piece that demands specialized handling. For these cases we always recommend an exclusive container, with gentle tie-down that protects the body and suspension, and insurance at declared value.`,
      `At Panama International Movers we treat every high-value vehicle for what it is: an investment that must arrive flawless.`,
    ],
    sections: [
      {
        heading: 'Collector-grade handling',
        body: [
          `We anchor over the wheels (not the chassis) to avoid stressing the suspension, use materials that won't mark the paint, and add protective covers when appropriate. The goal is zero contact and zero risk throughout the entire journey.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'Insurance at declared value',
        body: [
          `Unlike a standard car, coverage here is sized to the piece's real value — often backed by an appraisal — guaranteeing protection that matches its importance.`,
        ],
      },
      {
        heading: 'Condition report and appraisal',
        body: [
          `Before moving a collector's piece, we meticulously document its condition: detailed photographs, a record of existing imperfections, and an inventory of accessories. This file protects both the client and the process, and forms the basis for insurance at declared value, ideally backed by a recent appraisal.`,
          `For high-value vehicles, this documentation isn't an extra — it's an essential part of responsible, professional handling.`,
        ],
        image: IMG.containers,
      },
      {
        heading: 'Discreet, tailored coordination',
        body: [
          `Moving a classic or high-value vehicle deserves different treatment. We assign a dedicated coordinator who plans every detail — timing, route, container conditions, port handling — and maintains discreet, constant communication with you.`,
          `We understand you're not just moving a mode of transport, but an investment and, often, a passion. We treat it accordingly.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:lock', title: 'Exclusive container', text: `No shared space: full control of the environment.` },
      { icon: 'fa6-solid:hand-holding-heart', title: 'Gentle tie-down', text: `Wheel-anchored securing that respects body and suspension.` },
      { icon: 'fa6-solid:gem', title: 'Insurance at real value', text: `Coverage sized to your collector's value.` },
      { icon: 'fa6-solid:user-tie', title: 'Dedicated coordinator', text: `Personalized follow-up from start to finish.` },
    ],
    faqs: [
      { q: 'Do I need a vehicle appraisal?', a: `To insure at declared value, a recent appraisal is highly recommended. We'll guide you on how to document your piece's value.` },
      { q: 'Do you use special covers or protection?', a: `Yes. Depending on the vehicle, we apply covers, contact-point protection, and anchoring that won't damage the paint or chassis.` },
    ],
    related: ['auto-contenedor', 'motos', 'especiales-arte'],
  },

  /* ============ Pet Relocation ============ */
  {
    id: 'mascotas-internacional',
    categoryId: 'mascotas',
    slug: 'international-pet-relocation',
    icon: 'fa6-solid:paw',
    title: 'International Pet Relocation',
    metaTitle: 'International Pet Relocation Services | PIM Panama',
    metaDescription:
      `International pet relocation from Panama: requirements, IATA-approved crates, veterinary certificates, and customs handling so your pet travels safe.`,
    heroTagline: `A family member deserves to travel safe and stress-free.`,
    heroImage: IMG.team,
    intro: [
      `Relocating a pet to another country is a delicate process that combines veterinary, health, and customs requirements that vary by destination. A single documentation error can mean delays or even quarantine, which is why planning ahead with experts matters.`,
      `At Panama International Movers we coordinate your pet's international relocation from start to finish — from choosing the right crate to certificates and permits — always looking out for your pet's well-being.`,
    ],
    sections: [
      {
        heading: 'General requirements',
        body: [
          `Most countries require a microchip for identification, an up-to-date rabies vaccination (often applied a set amount of time in advance), a health certificate issued by a licensed veterinarian, and, in some cases, antibody titer tests or specific import permits.`,
          `Each destination has its own list; our team checks it against your move's exact corridor so nothing gets missed.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'IATA-approved crate and animal welfare',
        body: [
          `Air transport requires a crate that meets IATA standards: the right size so your pet can stand and turn around comfortably, proper ventilation, and secure construction. We help you choose and prepare it to reduce travel stress.`,
        ],
      },
      {
        heading: 'Quarantine: what to expect by country',
        body: [
          `One of the factors that varies most between destinations is quarantine. Some countries don't require it if the documentation is complete and correct; others, like Australia or New Zealand, apply very strict controls that can include mandatory quarantine periods. Anticipating this is key to planning ahead and avoiding surprises.`,
          `We review your destination's exact regime and explain clearly what to expect, so you can make informed decisions about timing and your pet's well-being.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'Travel day, step by step',
        body: [
          `We coordinate the day's logistics: delivering your pet to the cargo terminal within the appropriate window, its last feeding and hydration, and having the documentation ready to present. At destination, our network handles receiving your pet, the health inspection, and the reunion with your family.`,
          `Our goal is to make the journey as short and calm as possible, with your pet cared for at every point along the way.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:clipboard-check', title: 'Requirements by country', text: `We check every document against the exact destination.` },
      { icon: 'fa6-solid:box', title: 'IATA-approved crate', text: `Guidance on the right crate and its preparation.` },
      { icon: 'fa6-solid:stethoscope', title: 'Veterinary coordination', text: `Managing certificates, microchip, and vaccines.` },
      { icon: 'fa6-solid:heart', title: 'Welfare first', text: `Everything designed to reduce your pet's stress.` },
    ],
    faqs: [
      { q: 'How far in advance should I start?', a: `Ideally several weeks or months, since some vaccines and antibody tests must be given a minimum amount of time before travel. The earlier we start, the safer the process.` },
      { q: 'Will there be quarantine at the destination?', a: `It depends on the country. Some destinations (like Australia) are very strict; others don't require quarantine if the documentation is complete. We'll confirm this for your route.` },
    ],
    related: ['mascotas-perros', 'mascotas-gatos', 'mascotas-exoticos'],
  },
  {
    id: 'mascotas-perros',
    categoryId: 'mascotas',
    slug: 'international-dog-relocation',
    icon: 'fa6-solid:dog',
    title: 'International Dog Relocation',
    metaTitle: 'International Dog Relocation | Pet Relocation PIM Panama',
    metaDescription:
      `International dog shipping from Panama: microchip, rabies vaccination, health certificate, and IATA-approved crate. We coordinate everything for a safe trip.`,
    heroTagline: `Your dog arrives safe and sound at your new home, wherever it is.`,
    heroImage: IMG.team,
    intro: [
      `Dog relocation is the most common type of international pet relocation, and also one with very well-defined requirements: microchip identification, an up-to-date rabies vaccination, and a health certificate. Some brachycephalic (short-snout) breeds face air travel restrictions due to their respiratory sensitivity.`,
      `We coordinate every detail so your dog travels safely, in compliance with the destination country's rules.`,
    ],
    sections: [
      {
        heading: 'What your dog needs',
        body: [
          `A microchip, an up-to-date vaccination record including current rabies vaccine, a recent health certificate, and, depending on the destination, an antibody titer test or deworming treatment. We verify the exact list for your corridor.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'Breeds and the right crate',
        body: [
          `The crate must let the dog stand and turn around comfortably. For large breeds we prepare reinforced crates; for brachycephalic breeds, we check airline policies, which sometimes limit cargo-hold transport.`,
        ],
      },
      {
        heading: 'Cabin, hold, or cargo? How your dog travels',
        body: [
          `Dogs can travel three ways depending on their size and the airline: in the cabin (only small pets that fit under the seat), in a pressurized, climate-controlled cargo hold (most medium and large dogs), or as cargo (for shipments not accompanying a passenger). Each option has different crate and documentation requirements.`,
          `The cargo hold, though it may sound unsettling, is a pressurized, temperature-controlled compartment designed for the safe transport of animals. We explain which option applies to your dog and what to expect in each case.`,
        ],
        image: IMG.team,
      },
      {
        heading: 'Preparing your dog for the trip',
        body: [
          `A well-prepared dog travels much better. We recommend familiarizing them with the crate weeks in advance, keeping up their exercise routine so they arrive tired and relaxed, and following the feeding guidelines for flight day. Sedation is generally discouraged due to the risks at altitude.`,
          `We provide a concrete preparation guide tailored to your dog's age, breed, and temperament, so the relocation is a safe experience.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:clipboard-check', title: 'Complete documentation', text: `Microchip, rabies vaccine, and health certificate.` },
      { icon: 'fa6-solid:box', title: 'The right crate', text: `Sized and built to suit your dog.` },
      { icon: 'fa6-solid:triangle-exclamation', title: 'Restriction alerts', text: `We flag breeds with air travel limitations.` },
      { icon: 'fa6-solid:heart', title: 'Care and welfare', text: `We minimize stress at every stage of the trip.` },
    ],
    faqs: [
      { q: 'Can my brachycephalic dog (bulldog, pug) travel?', a: `Many airlines restrict cargo-hold transport for short-snout breeds due to their respiratory sensitivity. We look into alternatives and airlines that do allow it depending on your route.` },
      { q: 'Can my dog travel in the cabin with me?', a: `It depends on the dog's size and the airline's policy. Small dogs sometimes travel in the cabin; others travel in a pressurized, climate-controlled cargo hold.` },
    ],
    related: ['mascotas-internacional', 'mascotas-gatos', 'mascotas-exoticos'],
  },
  {
    id: 'mascotas-gatos',
    categoryId: 'mascotas',
    slug: 'international-cat-relocation',
    icon: 'fa6-solid:cat',
    title: 'International Cat Relocation',
    metaTitle: 'International Cat Relocation | Pet Relocation PIM Panama',
    metaDescription:
      `International cat shipping from Panama with all health and customs requirements handled. Comfortable crate and full coordination for a stress-free trip.`,
    heroTagline: `Discreet and sensitive: we prepare every detail for their peace of mind.`,
    heroImage: IMG.team,
    intro: [
      `Cats are especially sensitive to change, so their international relocation requires careful planning and a comfortable crate that gives them a sense of security. Health requirements are similar to those for dogs — microchip, rabies vaccine, health certificate — with the particulars of each destination.`,
      `We coordinate the process so your cat travels with as little stress as possible while meeting every requirement.`,
    ],
    sections: [
      {
        heading: 'Requirements and documentation',
        body: [
          `An identification microchip, an up-to-date rabies vaccination, and a health certificate issued by a licensed veterinarian. Some destinations require additional tests; we verify the exact list for your corridor.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'Reducing travel stress',
        body: [
          `We recommend familiarizing your cat with the crate days ahead, using blankets with their scent, and, when the veterinarian advises it, anti-anxiety support. We give you concrete guidelines for a smoother trip.`,
        ],
      },
      {
        heading: 'Why cats need special care',
        body: [
          `Cats are territorial and sensitive to changes in environment; a relocation pulls them out of their comfort zone more than it does a dog. That's why the crate needs to be a familiar, secure refuge, and preparation beforehand makes a huge difference in their stress level during the trip.`,
          `Many cats also hide discomfort, which is why a prior veterinary checkup is especially important to confirm they're in optimal condition to fly.`,
        ],
        image: IMG.team,
      },
      {
        heading: 'Tricks for a calm traveling cat',
        body: [
          `Familiarize them with the crate weeks in advance by leaving it open at home with a blanket carrying their scent; feed them near or inside it to build a positive association. On travel day, avoid heavy meals and stay calm during the goodbye.`,
          `On sedation: it's generally discouraged in flight due to the risks at altitude. Always follow your veterinarian's guidance; in most cases, good preparation is more effective and safer than any medication.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:clipboard-check', title: 'Up-to-date requirements', text: `Complete health documentation for each destination.` },
      { icon: 'fa6-solid:box', title: 'Comfortable crate', text: `Secure and cozy to reduce anxiety.` },
      { icon: 'fa6-solid:stethoscope', title: 'Veterinary support', text: `Coordination of certificates and recommendations.` },
      { icon: 'fa6-solid:heart', title: 'Feline well-being', text: `Guidelines to minimize the stress of change.` },
    ],
    faqs: [
      { q: 'Can I sedate my cat for the flight?', a: `Sedation in flight is generally discouraged due to respiratory risks at altitude. Your veterinarian will recommend the best alternative; we follow their guidance.` },
      { q: 'How many cats can travel in one crate?', a: `For welfare and regulatory reasons, generally one animal per crate, with exceptions for kittens with their mother. We advise you based on your specific case.` },
    ],
    related: ['mascotas-internacional', 'mascotas-perros', 'mascotas-exoticos'],
  },
  {
    id: 'mascotas-exoticos',
    categoryId: 'mascotas',
    slug: 'exotic-bird-and-animal-relocation',
    icon: 'fa6-solid:dove',
    title: 'Exotic Bird and Animal Relocation',
    metaTitle: 'Exotic Bird & Animal Relocation | PIM Panama',
    metaDescription:
      `International shipping of exotic birds and animals from Panama: CITES permits, health requirements, and specialized handling. Discuss your case with PIM.`,
    heroTagline: `Special cases that require permits and expert handling: we've got you.`,
    heroImage: IMG.team,
    intro: [
      `Relocating exotic birds and animals internationally is the most complex form of pet relocation, since it often involves species protection agreements (CITES), special permits, and strict health requirements. Not every animal can be relocated, and each species has its own rules.`,
      `At Panama International Movers we evaluate your specific case, identify the necessary permits, and coordinate specialized handling that prioritizes the animal's well-being and legal compliance.`,
    ],
    sections: [
      {
        heading: 'CITES permits and protected species',
        body: [
          `Many exotic birds and animals are subject to the CITES convention, which regulates their international trade and relocation. We check whether your species requires a permit and guide you on how to obtain it, avoiding legal issues at origin and destination.`,
        ],
        image: IMG.packing,
      },
      {
        heading: 'Specialized handling',
        body: [
          `Each species has particular needs for temperature, ventilation, and containment. We coordinate appropriate crates and, when needed, veterinary accompaniment for a safe relocation.`,
        ],
      },
      {
        heading: 'Every species is a unique case',
        body: [
          `Relocating a bird is nothing like relocating a reptile or a small exotic mammal. Birds require temperature control and minimal stimuli; reptiles need very specific thermal conditions; and all of them require containment suited to their behavior. That's why every exotic animal relocation starts with an individual feasibility and requirements assessment.`,
          `That assessment determines whether the relocation is possible, what permits it requires, what type of crate and conditions it needs, and whether specialized veterinary accompaniment is advisable.`,
        ],
        image: IMG.team,
      },
      {
        heading: 'Legality and welfare, no shortcuts',
        body: [
          `Relocating exotic species operates in delicate legal territory. A mistake with CITES permits or a country's regulations can mean the animal is held or serious legal trouble. We don't cut corners: we verify legality from start to finish and always prioritize the animal's welfare.`,
          `If a relocation can't be done legally and safely, we'll tell you honestly. Your peace of mind and your pet's well-being matter more than closing a deal.`,
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:file-shield', title: 'CITES permits', text: `We identify and manage the required permits.` },
      { icon: 'fa6-solid:magnifying-glass', title: 'Species-by-species assessment', text: `We analyze the feasibility and rules for your animal.` },
      { icon: 'fa6-solid:temperature-half', title: 'Specialized handling', text: `Crates and conditions tailored to the species.` },
      { icon: 'fa6-solid:heart', title: 'Welfare and legality', text: `Compliance and care at every step.` },
    ],
    faqs: [
      { q: 'What is CITES and why does it matter?', a: `It's the international convention that regulates the trade and relocation of protected species. If your animal is listed, you'll need specific permits to legally export and import it.` },
      { q: 'Can any exotic animal be relocated?', a: `No. Some are prohibited or heavily restricted. We assess your specific case before committing to a relocation.` },
    ],
    related: ['mascotas-internacional', 'mascotas-perros', 'mascotas-gatos'],
  },
];
