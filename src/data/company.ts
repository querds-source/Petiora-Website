import { Heart, Leaf, Users, Award, ShieldCheck, Truck, Globe, Zap } from 'lucide-react';
export const teamMembers = [{
  id: 1,
  name: 'Dra. Elena Martínez',
  role: 'Directora Médica Veterinaria',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  bio: 'Doctora en Veterinaria (Universidad Complutense, 2008) especializada en Nutrición Clínica Animal (Royal Veterinary College, Londres). Con 15 años de experiencia clínica documentando más de 3,000 casos de patologías nutricionales, Elena lidera nuestro equipo científico en el desarrollo de fórmulas hipoalergénicas y terapéuticas. Ha publicado 12 artículos en revistas científicas sobre biodisponibilidad de proteínas y es ponente habitual en congresos internacionales de nutrición veterinaria. Bajo su dirección, Petiora ha logrado una tasa de mejora clínica del 94% en casos de alergias alimentarias.',
  petName: 'Max (Golden Retriever de 8 años, rescatado)',
  linkedin: '#',
  email: 'elena@petiora.co'
}, {
  id: 2,
  name: 'Carlos Rodríguez',
  role: 'Director de Cadena de Suministro',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
  bio: 'Ingeniero Industrial (UPC Barcelona) con MBA en Logística Sostenible (ESADE). Carlos diseñó desde cero nuestra cadena de suministro de radio corto, estableciendo relaciones directas con 47 productores locales certificados en un radio de 150km de nuestra planta. Ha implementado un sistema de trazabilidad blockchain que permite rastrear cada ingrediente hasta su origen exacto. Gracias a su gestión, hemos reducido nuestra huella de carbono logística en un 67% y garantizamos frescura máxima con tiempos de tránsito campo-fábrica inferiores a 48 horas.',
  petName: 'Luna (Siamesa de 5 años, adoptada)',
  linkedin: '#',
  email: 'carlos@petiora.co'
}, {
  id: 3,
  name: 'Sofía Chen',
  role: 'Jefa de I+D+i',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  bio: 'Ingeniera de Alimentos (ETH Zürich) con Doctorado en Biotecnología Alimentaria. Sofía ha desarrollado 8 patentes en procesos de conservación natural sin conservantes sintéticos. Lidera un equipo de 6 investigadores en nuestro laboratorio, donde supervisa más de 200 análisis de calidad mensuales y coordina estudios de estabilidad a largo plazo. Su innovación más destacada: un proceso de deshidratación a baja temperatura que preserva el 98% de los nutrientes termosensibles, superando los estándares industriales del 75%. Ha conseguido certificaciones de calidad en 12 países europeos.',
  petName: 'Rocky (Bulldog Francés de 4 años, con sensibilidades alimentarias)',
  linkedin: '#',
  email: 'sofia@petiora.co'
}, {
  id: 4,
  name: 'Marc Torres',
  role: 'Responsable de Impacto Social',
  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
  bio: 'Licenciado en Trabajo Social con especialización en Bienestar Animal. Marc coordina nuestro programa "Nutrición Solidaria" que ha donado más de 15 toneladas de alimento a 23 protectoras en España. Gestiona alianzas estratégicas con veterinarios, educadores caninos y refugios, creando una red de apoyo integral. Ha implementado nuestro sistema de atención al cliente personalizada, logrando un índice de satisfacción del 97% y un tiempo de respuesta promedio de 4 horas. Bajo su liderazgo, nuestra comunidad ha crecido a más de 15,000 familias activas.',
  petName: 'Nala (Mestiza de 6 años, rescatada de protectora)',
  linkedin: '#',
  email: 'marc@petiora.co'
}];
export const timelineEvents = [{
  year: '2018',
  title: 'Investigación Inicial',
  description: 'La Dra. Martínez inicia un estudio clínico prospectivo de 18 meses sobre alergias alimentarias en 500 caninos, identificando que el 73% de las reacciones adversas eran evitables con ingredientes de mayor calidad. Desarrolla los primeros prototipos de fórmulas monoproteicas con una sola fuente de proteína animal, logrando una tasa de remisión del 89% en casos de dermatitis atópica.',
  icon: Heart
}, {
  year: '2019',
  title: 'Fundación de Petiora',
  description: 'Lanzamiento oficial con una inversión inicial de 500,000€ y un equipo fundador de 8 profesionales. Obtenemos la certificación de "Grado Humano" (Human Grade) para todos nuestros procesos, convirtiéndonos en una de las primeras marcas españolas con este estándar. Primeros 1,000 clientes en los 6 meses iniciales, con una tasa de recompra del 78%.',
  icon: Zap
}, {
  year: '2020',
  title: 'Certificación Sostenible',
  description: 'Implementación del sistema "Zero Waste" que elimina el 100% de residuos a vertedero mediante compostaje industrial y reciclaje. Establecemos contratos directos con 47 productores locales certificados, reduciendo nuestra huella de carbono logística en un 67%. Inauguramos nuestra planta de producción con energía 100% renovable (solar + eólica), evitando 120 toneladas de CO2 anuales.',
  icon: Leaf
}, {
  year: '2022',
  title: 'Reconocimiento del Sector',
  description: 'Galardonados con el Premio Nacional a la Innovación Veterinaria por nuestra línea hipoalergénica. Inauguración de nuestro centro logístico eco-eficiente de 2,000m² con sistema de refrigeración natural y flota de vehículos híbridos. Alcanzamos 25,000 clientes activos y expandimos el equipo a 35 profesionales. Publicamos nuestro primer estudio científico en el Journal of Animal Nutrition.',
  icon: Award
}, {
  year: '2024',
  title: 'Expansión Internacional',
  description: 'Apertura de mercados en Portugal, Francia e Italia con certificaciones locales. Lanzamiento de nuestra línea clínica especializada para patologías renales, hepáticas y cardíacas, desarrollada en colaboración con la Universidad Autónoma de Barcelona. Superamos los 50,000 clientes y donamos 15 toneladas de alimento a protectoras. Implementamos trazabilidad blockchain para transparencia total del origen de ingredientes.',
  icon: Globe
}];
export const impactMetrics = [{
  icon: Users,
  value: '50,000+',
  label: 'Pacientes Atendidos',
  description: 'Mascotas con mejora clínica comprobada.',
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  icon: Leaf,
  value: '100%',
  label: 'Trazabilidad Natural',
  description: 'Ingredientes certificados sin aditivos.',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}, {
  icon: Truck,
  value: '24/48h',
  label: 'Logística Eficiente',
  description: 'Cadena de frío garantizada en envíos.',
  color: 'text-amber-600',
  bg: 'bg-amber-50'
}, {
  icon: ShieldCheck,
  value: 'ISO 22000',
  label: 'Seguridad Alimentaria',
  description: 'Estándares de calidad internacional.',
  color: 'text-purple-600',
  bg: 'bg-purple-50'
}];
export const faqs = [{
  category: 'Logística y Envíos',
  items: [{
    question: '¿Cuáles son los tiempos de tránsito?',
    answer: 'Los pedidos confirmados antes de las 14:00 se procesan el mismo día. El tiempo de entrega estándar en península es de 24-48 horas laborables, garantizando la frescura del producto.'
  }, {
    question: '¿Cuál es su política de garantía?',
    answer: 'Ofrecemos una Garantía de Satisfacción Total. Si el producto no cumple con las expectativas nutricionales o de palatabilidad, gestionamos la devolución sin coste durante los primeros 30 días.'
  }, {
    question: '¿Realizan envíos insulares?',
    answer: 'Sí, cubrimos Baleares con un tiempo de tránsito de 48-72h. Actualmente, la logística a Canarias, Ceuta y Melilla está en fase de desarrollo para garantizar la conservación óptima.'
  }]
}, {
  category: 'Nutrición y Producto',
  items: [{
    question: '¿Cómo realizar la transición dietética?',
    answer: 'Sugerimos un protocolo gradual de 7 días para adaptar la microbiota: días 1-2 (25% Petiora), días 3-4 (50%), días 5-6 (75%), día 7 (100%). Esto minimiza el estrés digestivo.'
  }, {
    question: '¿Son aptos para cuadros alérgicos?',
    answer: 'Nuestras fórmulas son hipoalergénicas por diseño, utilizando fuentes de proteína novel y excluyendo alérgenos comunes como cereales, soja y lácteos. Ideales para dietas de exclusión.'
  }, {
    question: '¿Cuál es el protocolo de conservación?',
    answer: 'El alimento seco debe mantenerse en ambiente fresco y seco. La línea húmeda natural no requiere refrigeración hasta su apertura; posteriormente, refrigerar y consumir en 48h máximo.'
  }]
}];
export const contactInfo = {
  phone: {
    display: '+34 666 23 74 46',
    value: 'tel:+34666237446',
    hours: 'Lun-Vie, 9:00 - 19:00'
  },
  email: {
    display: 'attention@petiora.co',
    value: 'mailto:attention@petiora.co',
    responseTime: 'Respuesta en < 24h'
  },
  whatsapp: {
    display: '+34 666 23 74 46',
    value: 'https://wa.me/34666237446',
    label: 'Soporte técnico directo'
  },
  address: {
    street: 'Parque Tecnológico, Edificio Innovación',
    city: 'Madrid',
    zip: '28001',
    country: 'España',
    mapUrl: 'https://maps.google.com'
  }
};