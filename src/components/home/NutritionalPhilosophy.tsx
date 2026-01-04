import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, ShieldCheck, Award, CheckCircle2, XCircle, Utensils, Thermometer, Droplets, Wheat, AlertTriangle } from 'lucide-react';
import { Card } from '../ui/Card';
export function NutritionalPhilosophy() {
  return <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Side */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold mb-6 shadow-sm uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" />
              Nuestra Filosofía
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif leading-tight">
              Nutrición evolutiva, <br />
              <span className="text-primary-600 relative inline-block">
                respaldada por la ciencia
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>

            <div className="space-y-6 text-charcoal-600 text-lg leading-relaxed font-light text-pretty">
              <p>
                En Petiora, creemos que la nutrición es la medicina más potente.
                Nuestro enfoque se basa en la{' '}
                <strong className="text-primary-800 font-semibold">
                  nutrición evolutiva
                </strong>
                : formular dietas que respetan la biología ancestral de perros y
                gatos, utilizando ingredientes que sus cuerpos están diseñados
                para procesar y asimilar eficientemente.
              </p>
              <p>
                A diferencia de la industria convencional, que prioriza la
                conveniencia y el coste mediante el uso de subproductos y
                carbohidratos de relleno, nosotros priorizamos la{' '}
                <strong className="text-primary-800 font-semibold">
                  biodisponibilidad y la salud a largo plazo
                </strong>
                . Cada receta es un equilibrio preciso de macro y
                micronutrientes, validado por estudios clínicos.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card variant="flat" padding="sm" className="flex gap-4 items-start hover:bg-primary-50/30 transition-colors border border-transparent hover:border-primary-100">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 mt-1 text-primary-600 shadow-sm border border-primary-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal-900 mb-1 text-lg">
                    Sin Procesados
                  </h4>
                  <p className="text-sm text-charcoal-600 leading-snug">
                    Eliminamos harinas cárnicas, conservantes artificiales
                    (BHA/BHT) y extrusionados a alta temperatura que generan
                    acrilamidas.
                  </p>
                </div>
              </Card>
              <Card variant="flat" padding="sm" className="flex gap-4 items-start hover:bg-secondary-50/30 transition-colors border border-transparent hover:border-secondary-100">
                <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center shrink-0 mt-1 text-secondary-600 shadow-sm border border-secondary-100">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal-900 mb-1 text-lg">
                    Grado Humano
                  </h4>
                  <p className="text-sm text-charcoal-600 leading-snug">
                    Ingredientes 100% aptos para consumo humano, cocinados en
                    cocinas con certificación de seguridad alimentaria (HACCP).
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Visual Side - Comparison Table */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="relative">
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative z-10">
              <div className="bg-charcoal-900 p-8 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-charcoal-900 opacity-90"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-serif mb-1">
                    Comparativa de Calidad
                  </h3>
                  <p className="text-charcoal-300 text-sm font-medium">
                    Petiora vs. Industria Tradicional
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-4 mb-6 border-b border-gray-100 pb-4 text-xs font-bold text-charcoal-400 uppercase tracking-widest text-center">
                  <div className="text-left pl-2">Criterio</div>
                  <div className="text-primary-600 bg-primary-50 rounded-lg py-1">
                    Petiora
                  </div>
                  <div className="text-charcoal-500 py-1">Otros</div>
                </div>

                {[{
                label: 'Proteína',
                icon: Utensils,
                petiora: 'Carne Fresca Real (60-80%)',
                others: 'Harinas / Subproductos',
                highlight: true
              }, {
                label: 'Procesamiento',
                icon: Thermometer,
                petiora: 'Cocción Lenta (<80°C)',
                others: 'Extrusión (>150°C)',
                highlight: true
              }, {
                label: 'Humedad',
                icon: Droplets,
                petiora: 'Natural (70-80%)',
                others: 'Deshidratado (10%)',
                highlight: false
              }, {
                label: 'Carbohidratos',
                icon: Wheat,
                petiora: 'Bajo Índice Glucémico',
                others: 'Cereales de Relleno',
                highlight: false
              }, {
                label: 'Conservantes',
                icon: AlertTriangle,
                petiora: 'Naturales / Congelación',
                others: 'BHA / BHT / Artificiales',
                highlight: false
              }].map((row, idx) => <div key={idx} className={`grid grid-cols-3 gap-4 py-4 border-b border-gray-50 last:border-0 items-center text-center group hover:bg-gray-50/50 rounded-lg transition-colors ${row.highlight ? 'bg-primary-50/10' : ''}`}>
                    <div className="text-left font-bold text-charcoal-900 text-sm sm:text-base flex items-center gap-2 pl-2">
                      <row.icon className="w-4 h-4 text-charcoal-400" />
                      {row.label}
                    </div>
                    <div className="text-primary-700 font-bold bg-primary-50/80 py-1.5 px-2 rounded-lg text-xs sm:text-sm shadow-sm border border-primary-100 flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {row.petiora}
                    </div>
                    <div className="text-charcoal-500 text-xs sm:text-sm flex items-center justify-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-charcoal-300" />
                      {row.others}
                    </div>
                  </div>)}
              </div>
              <div className="bg-gray-50 p-4 text-center text-xs text-charcoal-500 border-t border-gray-100 font-medium">
                *Basado en análisis promedio de marcas líderes de pienso seco
                premium.
              </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-100/40 to-secondary-100/40 blur-3xl rounded-full pointer-events-none animate-pulse-slow" />
          </motion.div>
        </div>
      </div>
    </section>;
}