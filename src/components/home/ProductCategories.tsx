import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dog, Cat, Cookie, Sparkles, ArrowRight, Puzzle, Utensils, Brain, Bone, Zap } from 'lucide-react';
import { EnhancedScrollReveal } from '../common/EnhancedScrollReveal';
import { Button } from '../ui/Button';
const nutritionCategories = [{
  id: 'dog-food',
  name: 'Perros',
  icon: Dog,
  link: '/productos?category=dog-food',
  color: 'text-orange-600',
  bg: 'bg-orange-50'
}, {
  id: 'cat-food',
  name: 'Gatos',
  icon: Cat,
  link: '/productos?category=cat-food',
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  id: 'snacks',
  name: 'Snacks',
  icon: Cookie,
  link: '/productos?category=snacks',
  color: 'text-amber-600',
  bg: 'bg-amber-50'
}, {
  id: 'care',
  name: 'Suplementos',
  icon: Sparkles,
  link: '/productos?category=care',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}];
const toyFeatures = [{
  name: 'Puzzles Interactivos',
  icon: Brain
}, {
  name: 'Mordedores Resistentes',
  icon: Bone
}, {
  name: 'Juguetes de Entrenamiento',
  icon: Zap
}];
export function ProductCategories() {
  return <section className="py-20 bg-white border-y border-gray-50 relative overflow-hidden">
      {/* Background split effect */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-primary-50/30" />
        <div className="w-full lg:w-1/2 bg-purple-50/30" />
      </div>

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <EnhancedScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mb-4">
              Dos mundos, un objetivo: Bienestar
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Explora nuestras dos grandes áreas de especialización.
            </p>
          </EnhancedScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Pillar 1: Nutrition */}
          <EnhancedScrollReveal delay={0.1} className="h-full">
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-soft-xl border border-primary-100 h-full flex flex-col relative overflow-hidden group hover:border-primary-200 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-700 shadow-sm">
                  <Utensils className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal-900">
                    Nutrición Consciente
                  </h3>
                  <p className="text-sm text-charcoal-500 font-medium">
                    Alimentación fresca y natural
                  </p>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-md group-hover:shadow-lg transition-shadow">
                <img src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&q=80&w=800" alt="Comida fresca para perros" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium text-sm leading-relaxed">
                    Recetas cocinadas a baja temperatura para preservar
                    nutrientes y sabor. Sin procesados.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                {nutritionCategories.map(cat => <Link key={cat.id} to={cat.link} className="group/item">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all">
                      <div className={`w-10 h-10 rounded-full ${cat.bg} flex items-center justify-center ${cat.color} group-hover/item:scale-110 transition-transform`}>
                        <cat.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-charcoal-700 text-sm group-hover/item:text-primary-700 transition-colors">
                        {cat.name}
                      </span>
                    </div>
                  </Link>)}
              </div>
            </div>
          </EnhancedScrollReveal>

          {/* Pillar 2: Play/Enrichment */}
          <EnhancedScrollReveal delay={0.2} className="h-full">
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-soft-xl border border-purple-100 h-full flex flex-col relative overflow-hidden group hover:border-purple-200 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 shadow-sm">
                  <Puzzle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal-900">
                    Juego & Enriquecimiento
                  </h3>
                  <p className="text-sm text-charcoal-500 font-medium">
                    Estimulación mental y física
                  </p>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-md group-hover:shadow-lg transition-shadow">
                <img src="https://images.unsplash.com/photo-1585837575652-2c9168b04386?auto=format&fit=crop&q=80&w=800" alt="Perro jugando con puzzle interactivo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium text-sm leading-relaxed">
                    Juguetes diseñados por etólogos para desafiar su mente y
                    reducir el estrés.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-3 mb-6">
                  {toyFeatures.map((feat, i) => <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
                      <feat.icon className="w-3.5 h-3.5" />
                      {feat.name}
                    </span>)}
                </div>

                <Link to="/productos?category=toys" className="block">
                  <Button fullWidth variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 py-6 text-base font-bold group/btn">
                    Ver Catálogo de Juguetes
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </EnhancedScrollReveal>
        </div>
      </div>
    </section>;
}