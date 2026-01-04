import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle, Info } from 'lucide-react';
const comparisonData = [{
  feature: 'Fuente de Proteína',
  petiora: {
    value: 'Músculo Entero Fresco',
    status: 'optimal'
  },
  kibble: {
    value: 'Harinas Cárnicas / Subproductos',
    status: 'warning'
  },
  raw: {
    value: 'Carne Cruda (Riesgo Patógenos)',
    status: 'danger'
  }
}, {
  feature: 'Procesamiento',
  petiora: {
    value: 'Cocción Sous-Vide (<80°C)',
    status: 'optimal'
  },
  kibble: {
    value: 'Extrusión Alta Temp (>140°C)',
    status: 'warning'
  },
  raw: {
    value: 'Sin Procesar',
    status: 'neutral'
  }
}, {
  feature: 'Humedad',
  petiora: {
    value: '70-75% (Hidratación Natural)',
    status: 'optimal'
  },
  kibble: {
    value: '<10% (Deshidratante)',
    status: 'danger'
  },
  raw: {
    value: '70-75%',
    status: 'optimal'
  }
}, {
  feature: 'Conservantes',
  petiora: {
    value: 'Ninguno (Ultracongelación)',
    status: 'optimal'
  },
  kibble: {
    value: 'Sintéticos (BHA/BHT)',
    status: 'danger'
  },
  raw: {
    value: 'Ninguno',
    status: 'optimal'
  }
}, {
  feature: 'Carbohidratos',
  petiora: {
    value: 'Complejos (Vegetales)',
    status: 'optimal'
  },
  kibble: {
    value: 'Refinados (Maíz/Trigo)',
    status: 'warning'
  },
  raw: {
    value: 'Mínimos',
    status: 'optimal'
  }
}, {
  feature: 'Seguridad',
  petiora: {
    value: 'Pasteurización Controlada',
    status: 'optimal'
  },
  kibble: {
    value: 'Alta (pero baja nutrición)',
    status: 'neutral'
  },
  raw: {
    value: 'Riesgo Bacteriológico',
    status: 'danger'
  }
}];
export function ScientificComparison() {
  return <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-charcoal-500 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Análisis Comparativo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-6 font-serif">
            ¿Por qué Petiora es diferente?
          </h2>
          <p className="text-lg text-charcoal-600 font-light">
            Una comparativa técnica basada en hechos nutricionales, no en
            marketing.
          </p>
        </div>

        <div className="overflow-x-auto pb-6 -mx-6 px-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
          <div className="min-w-[800px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-charcoal-900 text-white p-6 items-center">
              <div className="font-bold text-sm uppercase tracking-wider text-gray-400 pl-4">
                Parámetro
              </div>
              <div className="text-center">
                <div className="font-serif font-bold text-xl text-primary-300">
                  Petiora
                </div>
                <div className="text-[10px] text-primary-100/70 uppercase tracking-wide">
                  Nutrición Clínica
                </div>
              </div>
              <div className="text-center opacity-60">
                <div className="font-serif font-bold text-lg">
                  Pienso Premium
                </div>
                <div className="text-[10px] uppercase tracking-wide">
                  Procesado
                </div>
              </div>
              <div className="text-center opacity-60">
                <div className="font-serif font-bold text-lg">Dieta BARF</div>
                <div className="text-[10px] uppercase tracking-wide">Crudo</div>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {comparisonData.map((row, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05
            }} className="grid grid-cols-4 p-6 items-center hover:bg-gray-50 transition-colors">
                  <div className="font-bold text-charcoal-800 pl-4 flex items-center gap-2">
                    {row.feature}
                    <div className="group relative">
                      <Info className="w-3.5 h-3.5 text-gray-300 cursor-help" />
                      <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-48 bg-charcoal-800 text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                        Detalle técnico sobre {row.feature.toLowerCase()}
                      </div>
                    </div>
                  </div>

                  {/* Petiora Column */}
                  <div className="flex justify-center">
                    <div className={`
                      px-4 py-2 rounded-xl text-sm font-bold text-center w-full max-w-[200px] flex items-center justify-center gap-2 shadow-sm
                      ${row.petiora.status === 'optimal' ? 'bg-primary-50 text-primary-700 border border-primary-100' : ''}
                      ${row.petiora.status === 'neutral' ? 'bg-gray-100 text-gray-600' : ''}
                    `}>
                      {row.petiora.status === 'optimal' && <Check className="w-4 h-4" />}
                      {row.petiora.value}
                    </div>
                  </div>

                  {/* Kibble Column */}
                  <div className="flex justify-center">
                    <div className={`
                      text-sm font-medium text-center text-charcoal-600 flex items-center justify-center gap-2
                      ${row.kibble.status === 'warning' ? 'text-amber-600' : ''}
                      ${row.kibble.status === 'danger' ? 'text-rose-600' : ''}
                    `}>
                      {row.kibble.status === 'warning' && <AlertCircle className="w-4 h-4" />}
                      {row.kibble.status === 'danger' && <X className="w-4 h-4" />}
                      {row.kibble.value}
                    </div>
                  </div>

                  {/* Raw Column */}
                  <div className="flex justify-center">
                    <div className={`
                      text-sm font-medium text-center text-charcoal-600 flex items-center justify-center gap-2
                      ${row.raw.status === 'warning' ? 'text-amber-600' : ''}
                      ${row.raw.status === 'danger' ? 'text-rose-600' : ''}
                      ${row.raw.status === 'optimal' ? 'text-emerald-600' : ''}
                    `}>
                      {row.raw.status === 'danger' && <AlertCircle className="w-4 h-4" />}
                      {row.raw.status === 'optimal' && <Check className="w-4 h-4" />}
                      {row.raw.value}
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}