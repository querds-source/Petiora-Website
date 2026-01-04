import React from 'react';
import { motion } from 'framer-motion';
import { Search, Thermometer, Microscope, PackageCheck, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
const steps = [{
  id: 1,
  title: 'Selección de Materia Prima',
  description: 'Solo aceptamos ingredientes de proveedores certificados con estándares de grado humano. Cada lote se inspecciona a su llegada.',
  icon: Search,
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  id: 2,
  title: 'Análisis de Laboratorio',
  description: 'Muestreo aleatorio para detectar patógenos, metales pesados y verificar valores nutricionales antes de cocinar.',
  icon: Microscope,
  color: 'text-purple-600',
  bg: 'bg-purple-50'
}, {
  id: 3,
  title: 'Cocción Controlada',
  description: 'Monitorización digital de temperatura (82°C) para asegurar la eliminación de bacterias sin destruir nutrientes.',
  icon: Thermometer,
  color: 'text-rose-600',
  bg: 'bg-rose-50'
}, {
  id: 4,
  title: 'Envasado Aséptico',
  description: 'Sellado al vacío en sala blanca ISO 7 para prevenir contaminación cruzada y oxidación.',
  icon: PackageCheck,
  color: 'text-amber-600',
  bg: 'bg-amber-50'
}, {
  id: 5,
  title: 'Cuarentena y Test Final',
  description: 'El producto terminado permanece en cuarentena hasta superar un segundo análisis microbiológico de seguridad.',
  icon: ShieldCheck,
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}, {
  id: 6,
  title: 'Cadena de Frío',
  description: 'Control telemático de temperatura durante el almacenamiento y transporte hasta tu puerta.',
  icon: Truck,
  color: 'text-indigo-600',
  bg: 'bg-indigo-50'
}];
export function QualityControlProcess() {
  return <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Seguridad Alimentaria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 font-serif">
            Obsesionados con la Calidad
          </h2>
          <p className="text-charcoal-600 text-lg leading-relaxed">
            Nuestro protocolo de seguridad de 6 puntos supera los estándares de
            la industria para garantizar que cada bocado sea seguro y nutritivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => <motion.div key={step.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider border border-gray-200 px-2 py-0.5 rounded">
                      Paso {step.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-charcoal-500 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Certificación ISO 22000</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Análisis APPCC (HACCP)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Trazabilidad Blockchain</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Auditorías Trimestrales</span>
          </div>
        </div>
      </div>
    </section>;
}