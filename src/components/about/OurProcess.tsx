import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ChefHat, Thermometer, ShieldCheck, Package } from 'lucide-react';
export function OurProcess() {
  const steps = [{
    icon: Truck,
    title: 'Selección en Origen',
    description: 'Auditamos personalmente a cada proveedor local. Solo aceptamos ingredientes aptos para consumo humano.',
    color: 'bg-emerald-100 text-emerald-600'
  }, {
    icon: ChefHat,
    title: 'Preparación Artesanal',
    description: 'Picamos y mezclamos los ingredientes frescos diariamente en nuestra cocina central.',
    color: 'bg-amber-100 text-amber-600'
  }, {
    icon: Thermometer,
    title: 'Cocción Lenta',
    description: 'Cocinamos al vacío a baja temperatura (82°C) durante 4 horas para eliminar patógenos preservando nutrientes.',
    color: 'bg-rose-100 text-rose-600'
  }, {
    icon: ShieldCheck,
    title: 'Control de Calidad',
    description: 'Analizamos muestras de cada lote antes de liberarlo. Seguridad alimentaria ISO 22000.',
    color: 'bg-blue-100 text-blue-600'
  }, {
    icon: Package,
    title: 'Envío Refrigerado',
    description: 'Enviamos en cajas isotérmicas que mantienen la cadena de frío hasta 48h hasta llegar a tu puerta.',
    color: 'bg-primary-100 text-primary-600'
  }];
  return <section className="py-20 bg-white">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-4">
            Método Petiora
          </span>
          <h2 className="text-4xl font-bold text-charcoal-900 mb-4 font-serif">
            Del Campo a su Comedero
          </h2>
          <p className="text-charcoal-600 text-lg">
            Un proceso obsesivo diseñado para garantizar la máxima frescura,
            seguridad y valor nutricional.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-100 -z-10">
            <div className="h-full bg-gradient-to-r from-emerald-200 via-amber-200 to-primary-200 w-full opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }} className="relative flex flex-col items-center text-center group">
                <div className={`w-24 h-24 rounded-[2rem] ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-gray-100 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 border-4 border-white`}>
                  <step.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>

                <div className="absolute top-12 right-[-50%] hidden md:block w-full h-0.5 z-[-1]">
                  {/* Connector logic handled by parent absolute div */}
                </div>

                <div className="bg-white p-4 rounded-2xl border border-transparent group-hover:border-gray-100 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Paso 0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-3 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}