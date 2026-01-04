import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Info, MapPin, Leaf, Beef, Carrot, Pill } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Tooltip } from '../ui/Tooltip';
import { Button } from '../ui/Button';
const ingredients = [{
  id: 1,
  name: 'Pollo de Corral',
  type: 'protein',
  origin: 'Galicia, España',
  benefits: ['Músculo magro', 'Alta digestibilidad', 'Aminoácidos esenciales'],
  nutrients: {
    protein: '28%',
    fat: '12%',
    moisture: '65%'
  },
  description: 'Pechuga y muslo de pollo criado en libertad, sin antibióticos ni hormonas. Fuente principal de proteína de alto valor biológico.',
  image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400'
}, {
  id: 2,
  name: 'Salmón Salvaje',
  type: 'protein',
  origin: 'Atlántico Norte',
  benefits: ['Omega-3', 'Piel sana', 'Pelaje brillante'],
  nutrients: {
    protein: '22%',
    fat: '15%',
    moisture: '60%'
  },
  description: 'Salmón capturado de forma sostenible. Rico en ácidos grasos EPA y DHA fundamentales para la salud cardiovascular y cognitiva.',
  image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=400'
}, {
  id: 3,
  name: 'Batata Dulce',
  type: 'vegetable',
  origin: 'Valencia, España',
  benefits: ['Energía lenta', 'Fibra prebiótica', 'Betacarotenos'],
  nutrients: {
    protein: '2%',
    fat: '0.5%',
    carbs: '20%'
  },
  description: 'Carbohidrato complejo de bajo índice glucémico. Aporta energía sostenida y fibra para una digestión saludable.',
  image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&q=80&w=400'
}, {
  id: 4,
  name: 'Espinacas Frescas',
  type: 'vegetable',
  origin: 'Murcia, España',
  benefits: ['Hierro', 'Vitaminas A, C, K', 'Antioxidantes'],
  nutrients: {
    protein: '3%',
    fat: '0%',
    fiber: '2%'
  },
  description: 'Superalimento cargado de micronutrientes esenciales. Fortalece el sistema inmunológico y combate el estrés oxidativo.',
  image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400'
}, {
  id: 5,
  name: 'Aceite de Coco',
  type: 'supplement',
  origin: 'Filipinas (Cert. Bio)',
  benefits: ['Energía rápida', 'Salud cerebral', 'Antibacteriano'],
  nutrients: {
    fat: '100%',
    mct: '60%'
  },
  description: 'Fuente de triglicéridos de cadena media (MCT) que proporcionan energía inmediata y apoyan la función cognitiva.',
  image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400'
}, {
  id: 6,
  name: 'Cúrcuma',
  type: 'supplement',
  origin: 'India (Comercio Justo)',
  benefits: ['Antiinflamatorio', 'Articulaciones', 'Digestión'],
  nutrients: {
    curcumin: '5%',
    fiber: '20%'
  },
  description: 'Potente antiinflamatorio natural. Ayuda a mantener la salud articular y mejora la digestión de las grasas.',
  image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400'
}];
const filters = [{
  id: 'all',
  label: 'Todos',
  icon: Search
}, {
  id: 'protein',
  label: 'Proteínas',
  icon: Beef
}, {
  id: 'vegetable',
  label: 'Vegetales',
  icon: Carrot
}, {
  id: 'supplement',
  label: 'Suplementos',
  icon: Pill
}];
export function IngredientExplorer() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const filteredIngredients = activeFilter === 'all' ? ingredients : ingredients.filter(i => i.type === activeFilter);
  return <section className="py-24 lg:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="primary" size="md" className="mb-4 shadow-sm">
            <Leaf className="w-3.5 h-3.5 mr-1.5" />
            Ingredientes Transparentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif tracking-tight">
            Explora nuestra <span className="text-primary-600">despensa</span>
          </h2>
          <p className="text-lg text-charcoal-600 font-light leading-relaxed">
            No tenemos nada que ocultar. Conoce cada ingrediente, su origen y
            por qué lo incluimos en nuestras recetas. Calidad humana, nutrición
            animal.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeFilter === filter.id ? 'bg-charcoal-900 text-white shadow-lg scale-105' : 'bg-white text-charcoal-600 hover:bg-gray-50 border border-gray-200'}`}>
              <filter.icon className={`w-4 h-4 ${activeFilter === filter.id ? 'text-primary-400' : 'text-gray-400'}`} />
              {filter.label}
            </button>)}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredIngredients.map(item => <motion.div key={item.id} layout initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.3
          }} onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-none group relative bg-white">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.origin}
                      </div>
                      <h3 className="text-xl font-bold font-serif">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-charcoal-600 text-sm leading-relaxed mb-6 min-h-[60px]">
                      {item.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-2">
                          Beneficios Clave
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.benefits.map((benefit, i) => <span key={i} className="text-xs font-bold bg-primary-50 text-primary-700 px-2 py-1 rounded-md border border-primary-100">
                              {benefit}
                            </span>)}
                        </div>
                      </div>

                      {/* Nutritional Mini-Graph (Visible on Hover) */}
                      <div className={`overflow-hidden transition-all duration-300 ${hoveredId === item.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-4 border-t border-gray-100">
                          <div className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-2">
                            Perfil Nutricional
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {Object.entries(item.nutrients).map(([key, value], i) => <div key={i} className="text-center bg-gray-50 rounded-lg p-1.5">
                                  <div className="text-[10px] text-charcoal-500 capitalize">
                                    {key}
                                  </div>
                                  <div className="text-sm font-bold text-charcoal-900">
                                    {value}
                                  </div>
                                </div>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full px-8 border-2">
            Ver Lista Completa de Ingredientes
          </Button>
        </div>
      </div>
    </section>;
}