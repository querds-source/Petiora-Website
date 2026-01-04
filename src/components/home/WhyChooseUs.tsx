import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Truck, ShieldCheck, Leaf, Scale, Microscope, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
export function WhyChooseUs() {
  const benefits = [{
    icon: Microscope,
    title: 'Ciencia Veterinaria',
    description: 'Fórmulas clínicas que cumplen estrictamente los estándares europeos (FEDIAF) y americanos (NRC) de nutrición.',
    stat: '100% Clínico',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    borderColor: 'border-primary-100'
  }, {
    icon: ChefHat,
    title: 'Tecnología Sous-Vide',
    description: 'Cocinamos al vacío a baja temperatura (80°C) para preservar vitaminas que la extrusión industrial destruye.',
    stat: '95% Nutrientes',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    borderColor: 'border-amber-100'
  }, {
    icon: ShieldCheck,
    title: 'Calidad Humana (HGC)',
    description: 'Ingredientes aptos para consumo humano. Solo músculo entero y órganos frescos, sin subproductos animales.',
    stat: 'Grado Humano',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    borderColor: 'border-emerald-100'
  }, {
    icon: Scale,
    title: 'Raciones Personalizadas',
    description: 'Nuestro algoritmo calcula las calorías exactas según la actividad y metabolismo de tu perro para evitar la obesidad.',
    stat: 'A Medida',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-100'
  }, {
    icon: Truck,
    title: 'Logística de Frío',
    description: 'Del obrador a tu nevera manteniendo la cadena de frío. Sin conservantes artificiales, solo frío.',
    stat: 'Entrega 24h',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    borderColor: 'border-indigo-100'
  }, {
    icon: Leaf,
    title: 'Ética y Sostenibilidad',
    description: 'Ingredientes de Km 0 y pesca sostenible. Priorizamos el bienestar animal en toda nuestra cadena.',
    stat: 'Km 0',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    borderColor: 'border-teal-100'
  }];
  return <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-charcoal-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />
              Estándar de Calidad
            </motion.div>

            <motion.h2 initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="text-4xl md:text-5xl font-bold text-charcoal-900 font-serif tracking-tight leading-[1.1]">
              Por qué los veterinarios <br />
              <span className="text-primary-600">nos recomiendan</span>
            </motion.h2>
          </div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="hidden md:block">
            <p className="text-lg text-charcoal-600 max-w-md text-right leading-relaxed font-light">
              Elevamos el estándar de la industria combinando ciencia
              nutricional con ingredientes reales. Sin atajos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05 + 0.2,
          duration: 0.5
        }}>
              <Card className={`h-full p-8 hover:shadow-soft-xl transition-all duration-300 border-gray-100 bg-white group hover:-translate-y-1`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} strokeWidth={1.5} />
                  </div>
                  <Badge variant="secondary" size="sm" className="bg-gray-50 text-charcoal-600 border-gray-100 font-bold">
                    {benefit.stat}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-charcoal-900 mb-3 font-serif group-hover:text-primary-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed text-sm font-medium opacity-80">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>)}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary-900/10">
            Conoce a nuestro equipo veterinario{' '}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>;
}