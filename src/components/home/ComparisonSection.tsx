import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle } from 'lucide-react';
const comparisonData = [{
  feature: 'Calidad de Ingredientes',
  petiora: '100% Grado Humano',
  traditional: 'Subproductos y Harinas',
  description: 'Usamos solo ingredientes aptos para consumo humano.'
}, {
  feature: 'Procesamiento',
  petiora: 'Cocción Suave al Vacío',
  traditional: 'Extrusión a Alta Temp.',
  description: 'La cocción suave preserva nutrientes y sabor natural.'
}, {
  feature: 'Conservantes',
  petiora: '100% Naturales',
  traditional: 'Artificiales / Químicos',
  description: 'Sin BHA, BHT ni etoxiquina. Solo tocoferoles naturales.'
}, {
  feature: 'Transparencia',
  petiora: 'Trazabilidad Total',
  traditional: 'Origen Desconocido',
  description: 'Sabes exactamente de dónde viene cada ingrediente.'
}, {
  feature: 'Personalización',
  petiora: 'Plan Veterinario Único',
  traditional: 'Talla Única',
  description: 'Adaptado a las necesidades específicas de tu mascota.'
}];
export function ComparisonSection() {
  return <section className="py-24 lg:py-32 bg-charcoal-900 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            La diferencia es evidente
          </motion.h2>
          <p className="text-lg text-charcoal-300 font-light">
            Compara tú mismo. La mayoría de piensos comerciales priorizan el
            coste y la vida útil. Nosotros priorizamos la salud y la longevidad
            de tu mascota.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 bg-white/5">
            <div className="col-span-4 md:col-span-5 font-bold text-charcoal-400 uppercase tracking-wider text-xs flex items-center">
              Característica
            </div>
            <div className="col-span-4 md:col-span-3 text-center font-bold text-primary-400 text-lg">
              Petiora
            </div>
            <div className="col-span-4 md:col-span-4 text-center font-bold text-charcoal-500 text-sm md:text-base">
              Pienso Tradicional
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            x: -10
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-white/5 transition-colors group">
                <div className="col-span-4 md:col-span-5">
                  <div className="font-bold text-white mb-1">{row.feature}</div>
                  <div className="text-xs text-charcoal-400 hidden md:block">
                    {row.description}
                  </div>
                </div>

                <div className="col-span-4 md:col-span-3 flex justify-center">
                  <div className="flex items-center gap-2 text-primary-300 font-bold text-sm md:text-base text-center">
                    <Check className="w-5 h-5 shrink-0 text-primary-500" />
                    <span>{row.petiora}</span>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-4 flex justify-center">
                  <div className="flex items-center gap-2 text-charcoal-500 text-sm text-center">
                    <X className="w-4 h-4 shrink-0 opacity-50" />
                    <span>{row.traditional}</span>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}