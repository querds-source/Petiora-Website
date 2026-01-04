import React from 'react';
import { motion } from 'framer-motion';
import { Package, Utensils, Zap, Heart, Calendar } from 'lucide-react';
const steps = [{
  day: 'Día 1',
  title: 'Llegada a Casa',
  description: 'Recibes tu caja refrigerada. Organiza los paquetes en el congelador y baja uno a la nevera para mañana.',
  icon: Package,
  color: 'bg-blue-500'
}, {
  day: 'Semana 1',
  title: 'Transición y Sabor',
  description: 'Tu perro descubre nuevos sabores. Empiezas a notar que disfruta más comiendo y deja el plato limpio.',
  icon: Utensils,
  color: 'bg-emerald-500'
}, {
  day: 'Semana 2-3',
  title: 'Digestión y Energía',
  description: 'Las heces son más pequeñas y firmes. Se reducen los gases. Notas un aumento en su vitalidad y ganas de jugar.',
  icon: Zap,
  color: 'bg-amber-500'
}, {
  day: 'Mes 1+',
  title: 'Salud Visible',
  description: 'Pelo más brillante, piel sana, peso ideal y una salud de hierro. ¡Bienvenido a su mejor versión!',
  icon: Heart,
  color: 'bg-rose-500'
}];
export function CustomerJourneyTimeline() {
  return <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Calendar className="w-3.5 h-3.5" />
            Tu Viaje con Petiora
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            ¿Qué esperar los primeros 30 días?
          </h2>
          <p className="text-lg text-charcoal-600 font-light max-w-2xl mx-auto">
            El cambio a comida real es un proceso transformador. Así es como
            evolucionará la salud de tu perro.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-3xl ${step.color} text-white flex items-center justify-center shadow-lg shadow-gray-200 mb-8 relative group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -bottom-4 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm text-xs font-bold text-charcoal-900 whitespace-nowrap">
                    {step.day}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-charcoal-900 mb-3 font-serif">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}