export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  petType: 'dog' | 'cat' | 'both';
  author: string;
  date: string;
  readTime: string;
}
export const blogPosts: BlogPost[] = [{
  id: 'alimentacion-natural-perros',
  title: 'Guía Completa de Alimentación Natural para Perros',
  excerpt: 'Descubre los beneficios de una dieta natural y cómo elegir los mejores alimentos para tu perro según su edad y necesidades.',
  content: `La alimentación natural para perros se ha convertido en una tendencia creciente entre los dueños conscientes de la salud de sus mascotas. En esta guía, exploraremos los fundamentos de una dieta equilibrada y natural.

Los perros son omnívoros facultativos, lo que significa que aunque pueden digerir vegetales, su sistema digestivo está optimizado para procesar proteínas animales. Una dieta natural debe incluir:

- Proteínas de alta calidad (pollo, pavo, pescado, cordero)
- Carbohidratos complejos (arroz integral, patata dulce)
- Grasas saludables (aceite de salmón, aceite de coco)
- Frutas y verduras (zanahoria, manzana, espinacas)

Es importante adaptar las porciones y los ingredientes según la edad, tamaño y nivel de actividad de tu perro. Los cachorros necesitan más proteínas y calorías para su crecimiento, mientras que los perros senior pueden beneficiarse de dietas más ligeras con suplementos articulares.`,
  image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=400&fit=crop',
  category: 'Nutrición',
  petType: 'dog',
  author: 'Dra. María García',
  date: '2024-01-15',
  readTime: '8 min'
}, {
  id: 'cuidado-pelaje-gatos',
  title: 'Secretos para un Pelaje Brillante en Gatos',
  excerpt: 'Aprende cómo la alimentación y los cuidados adecuados pueden transformar el pelaje de tu gato.',
  content: `El pelaje de un gato es un indicador directo de su salud general. Un pelo brillante, suave y sin nudos refleja una buena nutrición y bienestar.

Factores clave para un pelaje saludable:

1. Nutrición rica en Omega-3 y Omega-6
Los ácidos grasos esenciales son fundamentales para la salud de la piel y el pelo. El aceite de salmón y el aceite de linaza son excelentes fuentes.

2. Proteínas de calidad
El pelo está compuesto principalmente de queratina, una proteína. Asegúrate de que la dieta de tu gato incluya proteínas animales de alta calidad.

3. Hidratación adecuada
Los gatos tienden a beber poca agua. Considera alimentación húmeda o fuentes de agua para fomentar la hidratación.

4. Cepillado regular
Además de la alimentación, el cepillado estimula la producción de aceites naturales y elimina el pelo muerto.`,
  image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=400&fit=crop',
  category: 'Cuidados',
  petType: 'cat',
  author: 'Carlos Martínez',
  date: '2024-01-10',
  readTime: '6 min'
}, {
  id: 'suplementos-articulares',
  title: 'Suplementos Articulares: ¿Cuándo y Por Qué?',
  excerpt: 'Todo lo que necesitas saber sobre la suplementación para la salud articular de perros y gatos.',
  content: `Las articulaciones de nuestras mascotas sufren desgaste con el tiempo, especialmente en razas grandes y animales senior. Los suplementos articulares pueden marcar una gran diferencia en su calidad de vida.

¿Cuándo considerar suplementos articulares?

- Perros de razas grandes (desde los 2-3 años como prevención)
- Mascotas senior (a partir de 7-8 años)
- Animales con displasia de cadera o codo
- Mascotas muy activas o deportistas
- Después de cirugías articulares

Ingredientes clave a buscar:

1. Glucosamina: Ayuda a reconstruir el cartílago
2. Condroitina: Mejora la elasticidad del cartílago
3. MSM: Antiinflamatorio natural
4. Ácido hialurónico: Lubrica las articulaciones
5. Colágeno: Fortalece tendones y ligamentos

La suplementación debe ser constante para ver resultados. Generalmente, las mejoras se notan a partir de las 4-6 semanas de uso continuado.`,
  image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=400&fit=crop',
  category: 'Salud',
  petType: 'both',
  author: 'Dra. Ana López',
  date: '2024-01-05',
  readTime: '7 min'
}, {
  id: 'transicion-alimentaria',
  title: 'Cómo Cambiar la Alimentación de tu Mascota sin Problemas',
  excerpt: 'Guía paso a paso para realizar una transición alimentaria segura y evitar problemas digestivos.',
  content: `Cambiar la alimentación de tu mascota de forma brusca puede causar problemas digestivos como diarrea, vómitos o rechazo del nuevo alimento. Una transición gradual es clave para el éxito.

Plan de transición de 7-10 días:

Días 1-2: 75% alimento antiguo + 25% alimento nuevo
Días 3-4: 50% alimento antiguo + 50% alimento nuevo
Días 5-6: 25% alimento antiguo + 75% alimento nuevo
Días 7-10: 100% alimento nuevo

Consejos para una transición exitosa:

- Mantén los horarios de comida habituales
- Observa las heces de tu mascota durante el proceso
- Si hay problemas digestivos, ralentiza la transición
- Asegúrate de que el nuevo alimento esté a temperatura ambiente
- No mezcles alimento seco con húmedo si no lo hacías antes

En mascotas con estómagos sensibles, la transición puede extenderse hasta 2-3 semanas. La paciencia es fundamental.`,
  image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=400&fit=crop',
  category: 'Nutrición',
  petType: 'both',
  author: 'Pedro Sánchez',
  date: '2023-12-28',
  readTime: '5 min'
}, {
  id: 'alimentacion-gatitos',
  title: 'Alimentación del Gatito: De 0 a 12 Meses',
  excerpt: 'Todo sobre la nutrición en las diferentes etapas de crecimiento de tu gatito.',
  content: `Los primeros meses de vida son cruciales para el desarrollo de un gatito. Una nutrición adecuada sentará las bases de su salud futura.

Etapas de alimentación:

0-4 semanas: Leche materna exclusiva
La leche materna proporciona todos los nutrientes y anticuerpos necesarios. Si el gatito es huérfano, usar leche maternizada específica para gatos.

4-8 semanas: Inicio del destete
Introducir gradualmente alimento húmedo para gatitos, mezclado con leche maternizada para facilitar la transición.

8-12 semanas: Alimentación sólida
El gatito ya puede comer alimento seco o húmedo específico para gatitos. Ofrecer 4 comidas al día.

3-6 meses: Crecimiento acelerado
Mantener 3-4 comidas diarias con alimento de alta calidad rico en proteínas y DHA para el desarrollo cerebral.

6-12 meses: Consolidación
Reducir a 2-3 comidas diarias. Continuar con alimento para gatitos hasta el año de edad.`,
  image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=400&fit=crop',
  category: 'Nutrición',
  petType: 'cat',
  author: 'Dra. María García',
  date: '2023-12-20',
  readTime: '9 min'
}, {
  id: 'sostenibilidad-mascotas',
  title: 'Cómo Ser un Dueño de Mascotas Eco-Responsable',
  excerpt: 'Consejos prácticos para reducir la huella ambiental del cuidado de tu mascota.',
  content: `Nuestras mascotas también tienen una huella de carbono. Afortunadamente, hay muchas formas de cuidarlas de manera más sostenible sin comprometer su bienestar.

Alimentación sostenible:
- Elige marcas con ingredientes de origen sostenible
- Opta por envases reciclables o compostables
- Considera proteínas alternativas como insectos (para perros)
- Compra en formatos grandes para reducir packaging

Accesorios eco-friendly:
- Camas de materiales reciclados
- Juguetes de fibras naturales (cáñamo, algodón orgánico)
- Comederos de bambú o acero inoxidable
- Collares y correas de materiales sostenibles

Higiene responsable:
- Bolsas biodegradables para recoger excrementos
- Champús y productos de limpieza ecológicos
- Arena para gatos biodegradable (madera, maíz, papel)

Cada pequeño cambio suma. Al elegir productos sostenibles, no solo cuidas de tu mascota, sino también del planeta que compartimos.`,
  image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=400&fit=crop',
  category: 'Sostenibilidad',
  petType: 'both',
  author: 'Laura Fernández',
  date: '2023-12-15',
  readTime: '6 min'
}, {
  id: 'obesidad-mascotas',
  title: 'Obesidad en Mascotas: Prevención y Soluciones',
  excerpt: 'La obesidad es el problema nutricional más común en mascotas. Aprende a prevenirla y tratarla.',
  content: `Se estima que más del 50% de perros y gatos en países desarrollados tienen sobrepeso u obesidad. Este exceso de peso puede reducir significativamente su esperanza y calidad de vida.

Cómo saber si tu mascota tiene sobrepeso:
- No puedes sentir sus costillas fácilmente
- No tiene cintura visible desde arriba
- El abdomen cuelga o está muy redondeado
- Tiene dificultad para moverse o jugar

Causas comunes:
- Sobrealimentación (porciones excesivas)
- Demasiados premios y snacks
- Falta de ejercicio
- Esterilización (reduce el metabolismo)
- Alimentación inadecuada para su etapa de vida

Plan de acción:
1. Consulta con tu veterinario para descartar problemas de salud
2. Calcula las calorías diarias necesarias
3. Mide las porciones con precisión
4. Reduce o elimina los premios calóricos
5. Aumenta gradualmente el ejercicio
6. Considera alimentos específicos para control de peso

La pérdida de peso debe ser gradual: 1-2% del peso corporal por semana es lo ideal.`,
  image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=400&fit=crop',
  category: 'Salud',
  petType: 'both',
  author: 'Dr. Javier Ruiz',
  date: '2023-12-10',
  readTime: '8 min'
}, {
  id: 'snacks-saludables',
  title: 'Snacks Saludables: Premiar sin Culpa',
  excerpt: 'Descubre cómo elegir los mejores snacks para tu mascota y cuántos darle sin afectar su dieta.',
  content: `Los snacks son una herramienta fantástica para el entrenamiento y para fortalecer el vínculo con tu mascota. Sin embargo, deben usarse con moderación y elegirse con criterio.

Regla del 10%:
Los snacks no deben superar el 10% de las calorías diarias de tu mascota. Si tu perro necesita 500 kcal/día, los snacks no deben aportar más de 50 kcal.

Características de un buen snack:
- Ingredientes naturales y reconocibles
- Sin azúcares añadidos
- Sin colorantes ni conservantes artificiales
- Bajo en grasas
- Tamaño adecuado para tu mascota

Snacks recomendados:
Para perros:
- Tiras de pollo o pavo deshidratado
- Zanahorias crudas
- Manzana (sin semillas)
- Snacks dentales naturales

Para gatos:
- Pescado liofilizado
- Pollo deshidratado
- Hierba gatera (como premio sensorial)

Evita:
- Snacks con alto contenido en sal
- Productos con subproductos animales
- Snacks muy calóricos
- Alimentos humanos procesados`,
  image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=800&h=400&fit=crop',
  category: 'Nutrición',
  petType: 'both',
  author: 'Carlos Martínez',
  date: '2023-12-05',
  readTime: '5 min'
},
// NEW ARTICLES
{
  id: 'alergias-alimentarias',
  title: 'Cómo Detectar Alergias Alimentarias en Perros',
  excerpt: 'Picor, problemas digestivos, otitis recurrentes... Aprende a identificar si tu perro sufre de alergias a algún ingrediente.',
  content: `Las alergias alimentarias son una respuesta inmune exagerada a ciertas proteínas presentes en la dieta. Aunque a menudo se confunden con intolerancias, las alergias suelen manifestarse con síntomas dermatológicos.

Síntomas comunes:
- Picor intenso (prurito) no estacional
- Lamido excesivo de patas
- Otitis (infecciones de oído) recurrentes
- Enrojecimiento de la piel
- Vómitos o diarrea crónica

Alérgenos más frecuentes:
Contrario a la creencia popular, los cereales no son la causa principal. Las proteínas animales son los desencadenantes más comunes:
1. Vacuno
2. Lácteos
3. Pollo
4. Trigo
5. Cordero

Diagnóstico:
La única forma fiable de diagnosticar una alergia alimentaria es mediante una dieta de eliminación estricta durante 8-12 semanas, utilizando una fuente de proteína novel (que el perro nunca haya comido antes) o hidrolizada.`,
  image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&h=400&fit=crop',
  category: 'Salud',
  petType: 'dog',
  author: 'Dra. Elena Martínez',
  date: '2024-02-01',
  readTime: '10 min'
}, {
  id: 'dieta-barf-vs-pienso',
  title: 'Dieta BARF vs. Pienso Tradicional: Análisis Objetivo',
  excerpt: 'Comparamos los beneficios y riesgos de la alimentación cruda frente a los alimentos procesados comerciales.',
  content: `La dieta BARF (Biologically Appropriate Raw Food) se basa en alimentar a perros y gatos con carne cruda, huesos carnosos, vísceras y vegetales, imitando la dieta de sus ancestros salvajes.

Beneficios reportados de BARF:
- Heces más pequeñas y menos olorosas
- Pelaje más brillante y piel sana
- Dientes más limpios (por masticar huesos)
- Mayor energía y vitalidad
- Mejor control de peso

Riesgos potenciales:
- Desequilibrios nutricionales si no se formula correctamente
- Riesgo bacteriano (Salmonella, E. coli) para mascotas y humanos
- Obstrucciones o perforaciones por huesos
- Coste y tiempo de preparación elevados

El pienso tradicional (extrusionado):
Es cómodo, equilibrado y seguro, pero el procesamiento a alta temperatura puede reducir la biodisponibilidad de nutrientes y a menudo contiene altos niveles de carbohidratos.

La alternativa Petiora:
Ofrecemos lo mejor de ambos mundos: comida cocinada a baja temperatura (para seguridad y digestibilidad) con ingredientes frescos de grado humano, lista para servir.`,
  image: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&h=400&fit=crop',
  category: 'Nutrición',
  petType: 'both',
  author: 'Sofía Chen',
  date: '2024-02-10',
  readTime: '12 min'
}, {
  id: 'gatos-senior',
  title: 'Nutrición para Gatos Senior: Qué Cambia a los 7 Años',
  excerpt: 'A medida que tu gato envejece, sus necesidades nutricionales cambian. Descubre cómo adaptar su dieta para una vejez saludable.',
  content: `A partir de los 7 años, los gatos comienzan a considerarse "maduros" y a los 11 "senior". El metabolismo y la capacidad de digestión cambian significativamente en esta etapa.

Cambios fisiológicos clave:
- Reducción de la capacidad digestiva (especialmente grasas y proteínas)
- Disminución de la masa muscular (sarcopenia)
- Posible reducción de la función renal
- Menor actividad física
- Problemas dentales

Ajustes dietéticos recomendados:
1. Proteína de alta calidad y fácil digestión: Contrario al mito antiguo, los gatos senior sanos necesitan MÁS proteína para mantener su masa muscular, no menos.
2. Control de fósforo: Para proteger la función renal.
3. Ácidos grasos Omega-3: Para apoyar las articulaciones y la función cognitiva.
4. Texturas más suaves: Si hay dolor dental, la comida húmeda o rehidratada es ideal.
5. Antioxidantes: Vitamina E y C para combatir el envejecimiento celular.`,
  image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=400&fit=crop',
  category: 'Salud',
  petType: 'cat',
  author: 'Dra. María García',
  date: '2024-02-18',
  readTime: '8 min'
}, {
  id: 'leer-etiquetas',
  title: 'Cómo Leer Etiquetas de Alimentos para Mascotas',
  excerpt: 'Aprende a descifrar la lista de ingredientes y el análisis garantizado para saber realmente qué está comiendo tu mascota.',
  content: `Las etiquetas de alimentos para mascotas pueden ser confusas y engañosas. Aquí tienes las claves para interpretarlas como un experto.

1. El orden importa
Los ingredientes se listan por peso en orden descendente ANTES de cocinar. Ten en cuenta que la carne fresca contiene mucha agua (70%), por lo que al deshidratarse puede bajar puestos en la lista real de nutrientes.

2. Nombres específicos vs. genéricos
Busca "Pollo", "Hígado de vacuno" o "Grasa de pato". Evita términos vagos como "Carne y subproductos animales", "Grasa animal" o "Cereales".

3. "Con" vs. "Sabor a"
- "Receta de Pollo": Debe contener al menos un 25% de pollo.
- "Con Pollo": Solo requiere un 3%.
- "Sabor a Pollo": Puede no contener pollo, solo saborizantes.

4. Análisis Garantizado
Indica los mínimos de proteína y grasa, y los máximos de fibra y humedad. Para comparar alimentos secos y húmedos, debes convertir a "materia seca".

5. Aditivos
Busca conservantes naturales (tocoferoles, extracto de romero) y evita los artificiales (BHA, BHT, Etoxiquina) y colorantes.`,
  image: 'https://images.unsplash.com/photo-1604542031658-579824d1f579?w=800&h=400&fit=crop',
  category: 'Nutrición',
  petType: 'both',
  author: 'Carlos Rodríguez',
  date: '2024-02-25',
  readTime: '15 min'
}, {
  id: 'ingredientes-toxicos',
  title: '10 Ingredientes Tóxicos que Debes Evitar',
  excerpt: 'Algunos alimentos humanos comunes pueden ser mortales para tu mascota. Revisa esta lista de seguridad.',
  content: `Compartir comida con nuestra mascota es tentador, pero ciertos alimentos inofensivos para nosotros pueden ser peligrosos para ellos.

1. Chocolate: Contiene teobromina, tóxica para el corazón y sistema nervioso.
2. Xilitol: Edulcorante presente en chicles y postres "sin azúcar". Causa hipoglucemia severa y fallo hepático rápido.
3. Uvas y Pasas: Pueden causar fallo renal agudo en perros, incluso en pequeñas cantidades.
4. Cebolla y Ajo: Dañan los glóbulos rojos causando anemia.
5. Alcohol: Extremadamente tóxico, causa depresión del sistema nervioso.
6. Nueces de Macadamia: Afectan a los músculos y sistema nervioso.
7. Aguacate: Contiene persina, que puede ser tóxica en grandes cantidades.
8. Huesos cocinados: Se astillan fácilmente y pueden perforar el intestino.
9. Cafeína: Similar al chocolate, afecta al corazón.
10. Masa de pan cruda: Se expande en el estómago y produce alcohol al fermentar.

Si sospechas que tu mascota ha ingerido alguno de estos, contacta a tu veterinario inmediatamente.`,
  image: 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=800&h=400&fit=crop',
  category: 'Salud',
  petType: 'both',
  author: 'Dra. Elena Martínez',
  date: '2024-03-05',
  readTime: '6 min'
}];
export const blogCategories = [{
  id: 'all',
  name: 'Todos'
}, {
  id: 'nutrition',
  name: 'Nutrición'
}, {
  id: 'health',
  name: 'Salud'
}, {
  id: 'care',
  name: 'Cuidados'
}, {
  id: 'sustainability',
  name: 'Sostenibilidad'
}];
export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}
export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}
export function getBlogPostsByPetType(petType: 'dog' | 'cat' | 'both'): BlogPost[] {
  return blogPosts.filter(post => post.petType === petType || post.petType === 'both');
}