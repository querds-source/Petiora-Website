export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  petType: 'dog' | 'cat';
  image: string;
  rating: number;
  text: string;
  product?: string;
  verified?: boolean;
  date?: string;
  result?: string;
  petImage?: string;
}
export const testimonials: Testimonial[] = [{
  id: '1',
  name: 'María González',
  petName: 'Luna',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Desde que cambiamos a Petiora, el pelaje de Luna brilla como nunca. Además, me encanta saber que estoy eligiendo productos sostenibles. El asesoramiento nutricional fue clave para encontrar la dieta perfecta para ella.',
  product: 'VitalPaws Balance',
  verified: true,
  date: 'Hace 2 semanas',
  result: 'Pelaje brillante'
}, {
  id: '2',
  name: 'Carlos Rodríguez',
  petName: 'Michi',
  petType: 'cat',
  image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Michi es muy exigente con la comida, pero los productos de Petiora le encantan. La calidad se nota y el servicio de entrega sostenible es un plus que valoro muchísimo. ¡100% recomendado!',
  product: 'FelineFresco Delight',
  verified: true,
  date: 'Hace 1 mes',
  result: 'Mejor apetito'
}, {
  id: '3',
  name: 'Ana Martínez',
  petName: 'Rocky',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Rocky tenía problemas articulares y desde que toma los suplementos de Petiora ha mejorado muchísimo su movilidad. El equipo me ayudó a elegir los productos adecuados y el seguimiento ha sido excelente.',
  product: 'JointFlex Advanced',
  verified: true,
  date: 'Hace 3 semanas',
  result: 'Mayor movilidad'
}, {
  id: '4',
  name: 'Laura Sánchez',
  petName: 'Nala',
  petType: 'cat',
  image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=200&h=200&fit=crop',
  rating: 5,
  text: 'La suscripción mensual es comodísima. Nunca me quedo sin comida para Nala y el descuento del 15% se nota. Además, los envases son todos reciclables, algo que para mí es muy importante.',
  product: 'Suscripción Petiora+',
  verified: true,
  date: 'Hace 2 meses'
}, {
  id: '5',
  name: 'Pedro López',
  petName: 'Max',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Max es un cachorro muy activo y necesitaba una alimentación de calidad. El pienso para cachorros de Petiora tiene todo lo que necesita para crecer sano y fuerte. ¡Y le encanta el sabor!',
  product: 'PuppyGrow Formula',
  verified: true,
  date: 'Hace 1 semana',
  result: 'Crecimiento sano'
},
// NEW TESTIMONIALS
{
  id: '6',
  name: 'Sofía Ruiz',
  petName: 'Coco',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Coco sufría de picores constantes y el veterinario sospechaba de alergia al pollo. Probamos la fórmula de Salmón Grain-Free y en 3 semanas los picores desaparecieron por completo. Estamos felices.',
  product: 'PureNature Grain-Free',
  verified: true,
  date: 'Hace 3 días',
  result: 'Adiós alergias'
}, {
  id: '7',
  name: 'Javier M.',
  petName: 'Simba',
  petType: 'cat',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
  rating: 4,
  text: 'Mi gato Simba tenía sobrepeso y le costaba moverse. Con la dieta IndoorWhiskers ha perdido 500g en dos meses de forma saludable y está mucho más juguetón. La transición fue muy fácil.',
  product: 'IndoorWhiskers Blend',
  verified: true,
  date: 'Hace 2 semanas',
  result: 'Peso ideal'
}, {
  id: '8',
  name: 'Elena Torres',
  petName: 'Bimba',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Bimba es muy delicada del estómago y solía tener diarreas frecuentes. Desde que come DigestiveCare Pro sus heces son perfectas y tiene mucha más energía. Vale cada euro.',
  product: 'DigestiveCare Pro',
  verified: true,
  date: 'Hace 1 mes',
  result: 'Digestión perfecta'
}, {
  id: '9',
  name: 'Miguel Ángel',
  petName: 'Thor',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Hacemos agility con Thor y necesitaba un extra de energía. ActivePro ha sido un cambio radical, recupera mucho mejor después de los entrenamientos y mantiene su musculatura a tope.',
  product: 'ActivePro Performance',
  verified: true,
  date: 'Hace 5 días',
  result: 'Rendimiento top'
}, {
  id: '10',
  name: 'Carmen Vega',
  petName: 'Lola',
  petType: 'cat',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Increíble la diferencia en vitalidad. Lola tiene 14 años y estaba muy apática. Desde que cambiamos a Petiora Senior, parece que tiene 5 años. Come con ganas por primera vez en años.',
  product: 'SterilizedCare Salmon',
  verified: true,
  date: 'Hace 3 semanas',
  result: 'Rejuvenecida'
}, {
  id: '11',
  name: 'Roberto K.',
  petName: 'Bruno',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Los snacks dentales son mano de santo. A Bruno le encanta el sabor y en la última revisión el veterinario nos felicitó por lo limpios que tiene los dientes. Un 10.',
  product: 'DentalFresh Sticks',
  verified: true,
  date: 'Hace 1 semana',
  result: 'Dientes limpios'
}, {
  id: '12',
  name: 'Isabel P.',
  petName: 'Mía',
  petType: 'cat',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Mía es una gata persa y tenía muchos problemas con las bolas de pelo. Desde que toma la malta y el pienso Indoor, no ha vuelto a vomitar ni una sola vez. Estamos encantados.',
  product: 'IndoorWhiskers Blend',
  verified: true,
  date: 'Hace 2 meses',
  result: 'Sin bolas de pelo'
}, {
  id: '13',
  name: 'David F.',
  petName: 'Kira',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
  rating: 4,
  text: 'El aceite de salmón es fantástico. Kira tenía la piel muy seca y con caspa, y en dos semanas se le ha quitado todo. El dosificador es muy práctico.',
  product: 'PureSalmon Oil',
  verified: true,
  date: 'Hace 10 días',
  result: 'Piel hidratada'
}, {
  id: '14',
  name: 'Patricia L.',
  petName: 'Zeus',
  petType: 'dog',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Zeus es un Pastor Alemán con displasia leve. Los condroprotectores de Petiora le han dado una segunda juventud, ya no cojea al levantarse por las mañanas.',
  product: 'JointFlex Advanced',
  verified: true,
  date: 'Hace 1 mes',
  result: 'Sin dolor'
}, {
  id: '15',
  name: 'Lucía R.',
  petName: 'Nube',
  petType: 'cat',
  image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop',
  rating: 5,
  text: 'Adopté a Nube muy desnutrida y con el KittenStart ha cogido peso y fuerza rapidísimo. El veterinario está sorprendido con su evolución. Gracias Petiora.',
  product: 'KittenStart Growth',
  verified: true,
  date: 'Hace 3 semanas',
  result: 'Recuperación total'
}];