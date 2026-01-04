import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
const cases = [{
  id: 1,
  petName: 'Thor',
  breed: 'Bulldog Francés',
  problem: 'Dermatitis atópica severa y picores constantes',
  solution: 'Dieta Hipoalergénica de Pavo',
  duration: '4 semanas',
  result: 'Piel recuperada y fin del rascado',
  imageBefore: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600',
  imageAfter: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
  owner: 'Laura M.',
  quote: 'Habíamos probado todo, cremas, pastillas... Solo la comida real de Petiora funcionó. Thor es otro perro.'
}, {
  id: 2,
  petName: 'Luna',
  breed: 'Gato Común Europeo',
  problem: 'Sobrepeso y falta de actividad',
  solution: 'Plan Control de Peso Felino',
  duration: '3 meses',
  result: '-1.5kg y vitalidad recuperada',
  imageBefore: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600',
  imageAfter: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=600',
  owner: 'Carlos R.',
  quote: 'Luna apenas se movía. Ahora juega como si fuera un cachorro. La transformación ha sido increíble.'
}];
export function BeforeAfterCases() {
  const [activeCase, setActiveCase] = useState(0);
  const nextCase = () => {
    setActiveCase(prev => (prev + 1) % cases.length);
  };
  const prevCase = () => {
    setActiveCase(prev => (prev - 1 + cases.length) % cases.length);
  };
  const current = cases[activeCase];
  return <section className="py-20 bg-charcoal-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <Badge variant="primary" className="mb-4 bg-primary-500/20 text-primary-300 border-primary-500/30">
              Transformaciones Reales
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Historias de Éxito
            </h2>
            <p className="text-charcoal-300 max-w-xl text-lg">
              Ver para creer. Estos son los resultados que se consiguen cuando
              cambias ultraprocesados por comida real.
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={prevCase} className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextCase} className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCase} initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.4
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white z-10">
                    ANTES
                  </div>
                  <img src={current.imageBefore} alt={`${current.petName} antes`} className="w-full aspect-[4/5] object-cover rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500" />
                </div>
                <div className="relative group">
                  <div className="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white z-10">
                    DESPUÉS
                  </div>
                  <img src={current.imageAfter} alt={`${current.petName} después`} className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl shadow-primary-900/50 transform translate-y-8 lg:translate-y-12 border-4 border-charcoal-800" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-10">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-bold font-serif">
                  {current.petName}
                </h3>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium">
                  {current.breed}
                </span>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-1">
                    Problema
                  </div>
                  <div className="text-white font-medium">
                    {current.problem}
                  </div>
                </div>

                <div className="bg-primary-900/30 rounded-xl p-5 border border-primary-500/30">
                  <div className="text-xs font-bold text-primary-300 uppercase tracking-wider mb-1">
                    Solución Petiora
                  </div>
                  <div className="text-white font-bold text-lg">
                    {current.solution}
                  </div>
                </div>

                <div className="flex gap-6">
                  <div>
                    <div className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-1">
                      Tiempo
                    </div>
                    <div className="text-xl font-bold text-white">
                      {current.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-1">
                      Resultado
                    </div>
                    <div className="text-xl font-bold text-emerald-400">
                      {current.result}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary-600 py-2">
                <Quote className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary-600 bg-charcoal-900 p-1" />
                <p className="text-lg italic text-charcoal-200 mb-4">
                  "{current.quote}"
                </p>
                <div className="text-sm font-bold text-white">
                  {current.owner}
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" className="bg-white text-charcoal-900 hover:bg-gray-100 font-bold">
                  Ver Plan Recomendado <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>;
}