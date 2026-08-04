/* Reseñas reales de clientes de PIM (provistas por el cliente). */

export interface Testimonial {
  id: number;
  title: string;
  quote: string;
  author: string;
  context: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Testimonial[] = [
  { id: 1, rating: 5, title: 'Mudanza internacional sin estrés', author: 'Carlos M.', context: 'Panamá → Madrid', quote: 'Mi traslado desde Ciudad de Panamá hasta Madrid fue impecable. El equipo de Panamá International Movers S.A. se encargó de todo, desde el papeleo de aduanas hasta el embalaje. Mis muebles llegaron en perfecto estado. ¡Totalmente recomendados!' },
  { id: 2, rating: 5, title: 'Rápidos y muy cuidadosos', author: 'Laura G.', context: 'Mudanza local · Costa del Este', quote: 'Contraté sus servicios para una mudanza local hacia Costa del Este. Fueron extremadamente puntuales y embalaron toda mi cristalería con un cuidado impresionante. Ni un solo vaso roto. Un servicio de primera.' },
  { id: 3, rating: 5, title: 'Excelente servicio corporativo', author: 'Roberto D.', context: 'Mudanza corporativa · 50 empleados', quote: 'Mudar nuestra oficina de 50 empleados parecía una pesadilla, pero ellos lo hicieron parecer fácil. Trabajaron durante el fin de semana para asegurar que el lunes no tuviéramos interrupciones operativas. Gran nivel de organización.' },
  { id: 4, rating: 5, title: 'Profesionalismo de principio a fin', author: 'Ana P.', context: 'De la cotización a la entrega', quote: 'Desde la primera llamada para pedir la cotización hasta que entregaron la última caja, el trato fue excepcional. El personal es muy amable, respetuoso y sabe exactamente lo que hace.' },
  { id: 5, rating: 5, title: 'Precios justos y transparentes', author: 'Javier T.', context: 'Sin cargos ocultos', quote: 'A diferencia de otras compañías que te sorprenden con cargos ocultos de último momento, ellos cumplieron estrictamente con la cotización original. Recibí un servicio de cinco estrellas a un precio muy competitivo.' },
  { id: 6, rating: 5, title: 'Me salvaron a último minuto', author: 'Sofía R.', context: 'Mudanza express', quote: 'La empresa que había contratado originalmente me canceló a dos días de entregar mi apartamento. Llamé a Panamá International Movers y lograron acomodarme en su agenda de inmediato. Su respuesta rápida fue un alivio inmenso.' },
  { id: 7, rating: 5, title: 'El mejor servicio de almacenaje', author: 'Miguel A.', context: 'Almacenaje · 3 meses', quote: 'Necesitaba guardar mis muebles por tres meses mientras remodelaba mi nueva casa. Sus instalaciones de almacenaje son seguras, impecables y climatizadas. Todo se mantuvo en perfectas condiciones hasta el día de la entrega.' },
  { id: 8, rating: 5, title: 'Cuidado excepcional con objetos frágiles', author: 'Elena V.', context: 'Cuadros y piano', quote: 'Tenía mucho miedo de mudar mis cuadros y un piano de pared. El equipo llegó con cajas especiales, cobertores gruesos y materiales de embalaje de primera calidad. Maniobraron todo con una destreza increíble.' },
  { id: 9, rating: 5, title: 'Eficiencia y rapidez', author: 'Andrés F.', context: 'Apartamento de 3 habitaciones', quote: 'Terminaron de empacar y trasladar un apartamento de tres habitaciones en tiempo récord. Se nota que son un equipo súper coordinado y con muchísima experiencia. Nos quitaron un gran peso de encima.' },
  { id: 10, rating: 5, title: 'Una mudanza familiar muy llevadera', author: 'Carolina L.', context: 'Mudanza familiar', quote: 'Mudar a una familia con tres niños pequeños es un caos total, pero los chicos de la mudanza fueron muy pacientes, educados y organizados. Etiquetaron cada caja por habitación, lo que nos facilitó muchísimo el proceso de desempacar.' },
  { id: 11, rating: 5, title: 'Comunicación constante y clara', author: 'Patricia M.', context: 'Panamá → Estados Unidos', quote: 'Durante mi mudanza a Estados Unidos, me mantuvieron informada en cada etapa del proceso marítimo. Siempre supe dónde estaban mis pertenencias y cuándo llegarían a mi nueva puerta. Ese nivel de atención al cliente da mucha tranquilidad.' },
  { id: 12, rating: 5, title: 'Mi empresa de mudanzas de confianza', author: 'Diego S.', context: 'Cliente recurrente', quote: 'Es la tercera vez que utilizo los servicios de Panamá International Movers S.A. (dos mudanzas locales y una internacional) y la calidad nunca baja. Siguen siendo los mejores del país por su dedicación y compromiso con el cliente.' },
];

export const featuredTestimonials = (ids: number[]) =>
  ids.map((id) => testimonials.find((t) => t.id === id)!).filter(Boolean);
