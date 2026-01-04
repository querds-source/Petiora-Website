import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Microscope, Thermometer, AlertCircle, CheckCircle2 } from 'lucide-react';
const checks = [{
  title: 'Análisis Microbiológico',
  desc: 'Ausencia garantizada de Salmonella, E. coli y Listeria.',
  status: 'Pass',
  icon: Microscope
}, {
  title: 'Control de Temperatura',
  desc: 'Monitorización continua de la cadena de frío.',
  status: 'Pass',
  icon: Thermometer
}, {
  title: 'Balance Nutricional',
  desc: 'Verificación de niveles de proteína y grasa por lote.',
  status: 'Pass',
  icon: ClipboardCheck
}, {
  title: 'Detección de Metales',
  desc: 'Escaneado de seguridad final antes del envío.',
  status: 'Pass',
  icon: AlertCircle
}];
export function QualityControl() {
  return <section className="py-20 bg-white border-b border-gray-100">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="bg-charcoal-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid-qc" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid-qc)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-6">
                Seguridad Alimentaria
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Más estricto que la normativa humana
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                No dejamos nada al azar. Cada lote de producción pasa por un
                protocolo de 4 fases de verificación antes de salir de nuestras
                instalaciones.
              </p>

              <div className="flex items-center gap-4 text-sm font-medium text-primary-200">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-800 border-2 border-charcoal-900 flex items-center justify-center text-[10px]">
                    ISO
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-700 border-2 border-charcoal-900 flex items-center justify-center text-[10px]">
                    HACCP
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-600 border-2 border-charcoal-900 flex items-center justify-center text-[10px]">
                    IFS
                  </div>
                </div>
                <span>Certificaciones Internacionales Vigentes</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checks.map((check, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <check.icon className="w-6 h-6 text-primary-400" />
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wide border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {check.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    {check.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-snug">
                    {check.desc}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}