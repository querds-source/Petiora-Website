// Extended product information for richer detail pages
export const productEnrichment = {
  'vitalpaws-balance': {
    detailedIngredients: [{
      name: 'Pollo de Corral Fresco',
      percentage: 42,
      origin: 'Granjas certificadas de Galicia',
      benefits: ['Proteína de alto valor biológico', 'Aminoácidos esenciales', 'Bajo en grasa'],
      processing: 'Deshuesado manual, cocción sous-vide 80°C'
    }, {
      name: 'Batata Dulce',
      percentage: 18,
      origin: 'Valencia, España',
      benefits: ['Energía sostenida', 'Fibra prebiótica', 'Vitamina A'],
      processing: 'Cocción al vapor, triturado grueso'
    }, {
      name: 'Zanahoria Ecológica',
      percentage: 8,
      origin: 'Murcia, España',
      benefits: ['Betacarotenos', 'Fibra digestiva', 'Antioxidantes'],
      processing: 'Rallado fino, cocción suave'
    }, {
      name: 'Aceite de Salmón Salvaje',
      percentage: 5,
      origin: 'Atlántico Norte (MSC)',
      benefits: ['Omega-3 EPA/DHA', 'Piel y pelaje', 'Antiinflamatorio'],
      processing: 'Prensado en frío, sin refinar'
    }, {
      name: 'Espinacas Frescas',
      percentage: 4,
      origin: 'Almería, España',
      benefits: ['Hierro', 'Vitaminas K, A, C', 'Folato'],
      processing: 'Blanqueado rápido, picado'
    }],
    nutritionalAnalysis: {
      guaranteedAnalysis: {
        crudeProtein: {
          min: 28,
          max: 32,
          unit: '%'
        },
        crudeFat: {
          min: 14,
          max: 18,
          unit: '%'
        },
        crudeFiber: {
          max: 3.5,
          unit: '%'
        },
        moisture: {
          max: 10,
          unit: '%'
        },
        ash: {
          max: 7,
          unit: '%'
        },
        calcium: {
          min: 1.2,
          max: 1.8,
          unit: '%'
        },
        phosphorus: {
          min: 0.9,
          max: 1.4,
          unit: '%'
        },
        omega3: {
          min: 0.8,
          unit: '%'
        },
        omega6: {
          min: 2.5,
          unit: '%'
        }
      },
      metabolizableEnergy: 3650,
      digestibility: 92
    },
    feedingGuide: {
      puppy: [{
        weightKg: 5,
        gramsPerDay: 120,
        meals: 3
      }, {
        weightKg: 10,
        gramsPerDay: 200,
        meals: 3
      }, {
        weightKg: 20,
        gramsPerDay: 340,
        meals: 2
      }, {
        weightKg: 30,
        gramsPerDay: 460,
        meals: 2
      }],
      adult: [{
        weightKg: 5,
        gramsPerDay: 85,
        meals: 2
      }, {
        weightKg: 10,
        gramsPerDay: 145,
        meals: 2
      }, {
        weightKg: 20,
        gramsPerDay: 245,
        meals: 2
      }, {
        weightKg: 30,
        gramsPerDay: 335,
        meals: 2
      }, {
        weightKg: 40,
        gramsPerDay: 420,
        meals: 2
      }],
      senior: [{
        weightKg: 5,
        gramsPerDay: 75,
        meals: 2
      }, {
        weightKg: 10,
        gramsPerDay: 130,
        meals: 2
      }, {
        weightKg: 20,
        gramsPerDay: 220,
        meals: 2
      }, {
        weightKg: 30,
        gramsPerDay: 300,
        meals: 2
      }]
    },
    qualityControls: ['Test microbiológico (Salmonella, E.coli, Listeria)', 'Análisis de metales pesados (Pb, Cd, Hg, As)', 'Verificación de micotoxinas (Aflatoxinas)', 'Control de humedad y actividad de agua', 'Análisis nutricional completo (proteína, grasa, minerales)', 'Test de palatabilidad con panel canino'],
    shelfLife: {
      unopened: '12 meses desde fabricación',
      opened: '30 días en envase cerrado',
      storage: 'Lugar fresco y seco (&lt;25°C), protegido de luz directa'
    }
  },
  // TOY ENRICHMENT DATA
  'toy-smart-feeder-puzzle': {
    specifications: {
      dimensions: '25cm x 25cm x 5cm',
      weight: '500g',
      material: 'Plástico alimentario libre de BPA',
      colors: ['Azul', 'Verde'],
      difficultyLevel: 'Medio (Nivel 2)'
    },
    safetyInfo: {
      certifications: ['BPA Free', 'Food Safe', 'Non-toxic'],
      ageRecommendation: 'Todas las edades (supervisado para cachorros)',
      sizeRecommendation: 'Todos los tamaños',
      chokingHazard: false
    },
    behavioralBenefits: {
      mentalStimulation: 'Alta',
      anxietyReduction: 'Media',
      exerciseLevel: 'Baja',
      bondingOpportunity: 'Media',
      description: 'Ralentiza la ingesta, estimula la resolución de problemas y reduce el aburrimiento.'
    },
    careInstructions: {
      washable: true,
      dishwasherSafe: true,
      durability: 'Alta - diseñado para uso diario',
      replacementParts: 'No necesarias'
    },
    usageTips: ['Empieza con los compartimentos fáciles abiertos', 'Usa premios de alto valor al principio', 'Supervisa los primeros usos', 'Limpia después de cada uso']
  },
  'toy-tough-rope-tug': {
    specifications: {
      dimensions: '35cm largo x 4cm grosor',
      weight: '300g',
      material: '100% Algodón natural trenzado',
      colors: ['Multicolor natural'],
      difficultyLevel: 'Fácil'
    },
    safetyInfo: {
      certifications: ['Non-toxic dyes', 'Natural Fiber'],
      ageRecommendation: 'Adultos (dientes permanentes)',
      sizeRecommendation: 'Medianos y Grandes',
      chokingHazard: false
    },
    behavioralBenefits: {
      mentalStimulation: 'Media',
      anxietyReduction: 'Alta',
      exerciseLevel: 'Alta',
      bondingOpportunity: 'Muy Alta',
      description: 'Ideal para juego interactivo de tirón, fortalece el vínculo y limpia los dientes mecánicamente.'
    },
    careInstructions: {
      washable: true,
      dishwasherSafe: false,
      durability: 'Muy Alta - trenzado reforzado',
      replacementParts: 'No aplicable'
    },
    usageTips: ['Úsalo para juegos de tirar y aflojar', 'No dejes que el perro lo mastique sin supervisión', 'Revisa si hay hilos sueltos regularmente', 'Lava en lavadora con agua fría']
  },
  'toy-eco-plush-bear': {
    specifications: {
      dimensions: '20cm x 15cm',
      weight: '150g',
      material: 'Tela reciclada de botellas PET',
      colors: ['Marrón suave'],
      difficultyLevel: 'Fácil'
    },
    safetyInfo: {
      certifications: ['Recycled Materials', 'Child Safe Standards'],
      ageRecommendation: 'Todas las edades',
      sizeRecommendation: 'Pequeños y Medianos',
      chokingHazard: false
    },
    behavioralBenefits: {
      mentalStimulation: 'Baja',
      anxietyReduction: 'Muy Alta',
      exerciseLevel: 'Baja',
      bondingOpportunity: 'Baja',
      description: 'Proporciona confort emocional y seguridad, ideal para dormir o momentos de estrés.'
    },
    careInstructions: {
      washable: true,
      dishwasherSafe: false,
      durability: 'Media - costuras reforzadas',
      replacementParts: 'No aplicable'
    },
    usageTips: ['Ideal para la cama o transportín', 'Si se rompe, retíralo inmediatamente', 'Lava en ciclo delicado', 'Seca al aire libre']
  },
  'toy-laser-chase-pro': {
    specifications: {
      dimensions: '10cm x 10cm x 18cm',
      weight: '200g',
      material: 'ABS resistente',
      colors: ['Blanco'],
      difficultyLevel: 'Automático'
    },
    safetyInfo: {
      certifications: ['Class 2 Laser Safe', 'CE Certified'],
      ageRecommendation: 'Todas las edades',
      sizeRecommendation: 'Todos los gatos',
      chokingHazard: false
    },
    behavioralBenefits: {
      mentalStimulation: 'Alta',
      anxietyReduction: 'Baja',
      exerciseLevel: 'Muy Alta',
      bondingOpportunity: 'Baja (juego independiente)',
      description: 'Activa el instinto de caza, proporciona ejercicio intenso y combate el sedentarismo.'
    },
    careInstructions: {
      washable: false,
      dishwasherSafe: false,
      durability: 'Alta',
      replacementParts: 'Cable de carga incluido'
    },
    usageTips: ['Usa sesiones de 15 minutos máximo', 'Termina el juego con un juguete físico o premio', 'No apuntes a los ojos directamente', 'Coloca en superficie plana y estable']
  }
};
export const productFAQs = {
  'vitalpaws-balance': [{
    question: '¿Es apto para perros con estómago sensible?',
    answer: 'Sí, completamente. La cocción suave y los ingredientes limitados facilitan la digestión. El 94% de perros con sensibilidad digestiva mejoran en 2 semanas.'
  }, {
    question: '¿Puedo mezclar con su pienso actual?',
    answer: 'Sí, pero recomendamos transición gradual en 7 días para adaptar la microbiota intestinal y evitar molestias digestivas.'
  }, {
    question: '¿Contiene conservantes artificiales?',
    answer: 'No. Usamos únicamente tocoferoles naturales (vitamina E) como antioxidante. Sin BHA, BHT ni etoxiquina.'
  }, {
    question: '¿Cómo se conserva después de abrir?',
    answer: 'Cierra bien el envase con el zip y guarda en lugar fresco y seco. Consume en 30 días. Para máxima frescura, puedes refrigerar.'
  }],
  // TOY FAQS
  'toy-smart-feeder-puzzle': [{
    question: '¿Es difícil de limpiar?',
    answer: 'No, es apto para lavavajillas (bandeja superior) o se puede lavar fácilmente con agua tibia y jabón.'
  }, {
    question: '¿Mi perro se frustrará?',
    answer: 'El diseño es progresivo. Empieza fácil y aumenta la dificultad. Si ves frustración, ayúdale las primeras veces.'
  }, {
    question: '¿Sirve para comida húmeda?',
    answer: 'Sí, los compartimentos son estancos y sirven tanto para pienso seco como para comida húmeda o paté.'
  }],
  'toy-tough-rope-tug': [{
    question: '¿Es seguro para los dientes?',
    answer: 'Sí, las fibras de algodón son suaves con las encías y ayudan a limpiar los dientes al penetrar entre ellos.'
  }, {
    question: '¿Cuánto dura?',
    answer: 'Depende de la intensidad de masticación, pero está diseñado con trenzado reforzado para durar meses incluso con uso diario.'
  }]
};
export const productReviews = {
  'vitalpaws-balance': [{
    id: 'r1',
    author: 'María González',
    rating: 5,
    date: '2024-01-15',
    verified: true,
    petName: 'Luna',
    petAge: 3,
    petBreed: 'Golden Retriever',
    title: 'Cambio radical en su energía',
    review: 'Llevamos 2 meses con VitalPaws y Luna está irreconocible. Antes dormía todo el día, ahora pide jugar constantemente. Su pelaje brilla como nunca y las heces son perfectas. Vale cada euro.',
    helpful: 24,
    images: []
  }, {
    id: 'r2',
    author: 'Carlos Ruiz',
    rating: 5,
    date: '2024-01-10',
    verified: true,
    petName: 'Max',
    petAge: 7,
    petBreed: 'Pastor Alemán',
    title: 'Adiós a las alergias',
    review: 'Max sufría dermatitis atópica severa desde cachorro. Probamos todo: corticoides, champús, dietas de eliminación... Nada funcionó hasta Petiora. En 3 semanas dejó de rascarse. Milagro.',
    helpful: 18,
    images: []
  }],
  // TOY REVIEWS
  'toy-smart-feeder-puzzle': [{
    id: 't1',
    author: 'Laura M.',
    rating: 5,
    date: '2024-02-20',
    verified: true,
    petName: 'Toby',
    petAge: 2,
    petBreed: 'Beagle',
    title: '¡Por fin come despacio!',
    review: 'Toby engullía su comida en 30 segundos. Con este puzzle tarda 15 minutos y se divierte. Ha dejado de tener gases y se le ve más relajado después de comer.',
    helpful: 12,
    images: []
  }, {
    id: 't2',
    author: 'Pedro S.',
    rating: 4,
    date: '2024-02-15',
    verified: true,
    petName: 'Kira',
    petAge: 5,
    petBreed: 'Border Collie',
    title: 'Buen reto mental',
    review: 'Kira es muy lista y lo resolvió rápido, pero le encanta. Lo usamos para la cena todos los días. Material muy resistente.',
    helpful: 8,
    images: []
  }]
};