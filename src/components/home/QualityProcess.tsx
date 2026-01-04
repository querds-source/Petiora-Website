import React from 'react';
import { motion } from 'framer-motion';
import { Search, Thermometer, Truck, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
const steps = [{
  title: 'Selección',
  desc: 'Solo ingredientes aptos para consumo humano de proveedores locales certificados.',
  icon: Search
}, {
  title: 'Cocción Lenta',
  desc: 'Cocinamos al vapor a baja temperatura (80°C) para matar patógenos pero preservar nutrientes.',
  icon: Thermometer
}, {
  title: 'Abatimiento',
  desc: 'Enfriamiento rápido y congelación inmediata para bloquear la frescura sin conservantes.',
  icon: CheckCircle
}, {
  title: 'Envío Frío',
  desc: 'Transporte en cajas isotérmicas que mantienen la cadena de frío hasta tu puerta.',
  icon: Truck
}];
export function QualityProcess() {
  return <section className="py-20 bg-[#FAF9F6]">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-serif">
              Obsesionados con la{' '}
              <span className="text-primary-600">Seguridad.</span>
            </h2>
            <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
              Tu perro es familia, y su comida debe ser tan segura como la tuya.
              Aplicamos estándares de seguridad alimentaria humana en cada paso
              del proceso.
            </p>

            <div className="space-y-6">
              {steps.map((step, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: idx * 0.1
            }} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm text-primary-600">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-900 text-lg">
                      {step.title}
                    </h4>
                    <p className="text-charcoal-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary-600/5 rounded-[3rem] transform rotate-3" />
            <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800" alt="Chef cocinando comida Petiora" className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-square" />
            <Card className="absolute -bottom-8 -left-8 p-6 max-w-xs animate-float hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-wide">
                  Cocina Activa
                </span>
              </div>
              <p className="text-xs text-charcoal-500">
                Nuestras cocinas en Madrid preparan lotes frescos diariamente
                bajo supervisión veterinaria.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}