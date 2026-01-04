import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, ClipboardCheck, ShieldAlert, CheckCircle } from 'lucide-react';
const protocols = [{
  title: 'Análisis Microbiológico',
  desc: 'Test de patógenos (Salmonella, E. Coli) en cada lote.',
  icon: Microscope
}, {
  title: 'Control Nutricional',
  desc: 'Verificación de niveles de proteína, grasa y humedad.',
  icon: ClipboardCheck
}, {
  title: 'Detección de Metales',
  desc: 'Escaneo por rayos X para cuerpos extraños.',
  icon: ShieldAlert
}, {
  title: 'Cata de Palatabilidad',
  desc: 'Aprobación final por nuestro panel de mascotas.',
  icon: CheckCircle
}];
export function QualityAssurance() {
  return <section className="py-20 bg-charcoal-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-charcoal-800/50 skew-x-12 transform origin-top"></div>

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Obsesionados con la seguridad
            </h2>
            <p className="text-charcoal-300 text-lg font-light mb-8">
              Aplicamos los mismos protocolos de seguridad que la industria
              farmacéutica. Si un lote no es perfecto, no sale de nuestra
              fábrica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {protocols.map((proto, idx) => <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center shrink-0 text-primary-400">
                    <proto.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{proto.title}</h4>
                    <p className="text-sm text-charcoal-400">{proto.desc}</p>
                  </div>
                </div>)}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <span className="font-bold text-primary-400">
                  Informe de Calidad Lote #4829
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                  APROBADO
                </span>
              </div>
              <div className="space-y-4 font-mono text-sm text-charcoal-300">
                <div className="flex justify-between">
                  <span>Salmonella spp.</span>
                  <span className="text-emerald-400">Negativo</span>
                </div>
                <div className="flex justify-between">
                  <span>Listeria m.</span>
                  <span className="text-emerald-400">Negativo</span>
                </div>
                <div className="flex justify-between">
                  <span>Proteína Bruta</span>
                  <span className="text-white">14.2% (Obj: 14%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Humedad</span>
                  <span className="text-white">72.1% (Obj: 72%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}