import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ChefHat, Thermometer, Truck, Heart, Package } from 'lucide-react';
const steps = [{
  icon: ShoppingCart,
  title: 'Selección',
  desc: 'Compra diaria de ingredientes frescos en mercados locales.',
  color: 'bg-blue-100 text-blue-600'
}, {
  icon: ChefHat,
  title: 'Preparación',
  desc: 'Troceado manual y mezcla de ingredientes según receta.',
  color: 'bg-orange-100 text-orange-600'
}, {
  icon: Thermometer,
  title: 'Cocción',
  desc: 'Cocinado lento al vacío a 80°C para preservar nutrientes.',
  color: 'bg-red-100 text-red-600'
}, {
  icon: Package,
  title: 'Envasado',
  desc: 'Abatimiento rápido de temperatura y envasado seguro.',
  color: 'bg-purple-100 text-purple-600'
}, {
  icon: Truck,
  title: 'Envío Frío',
  desc: 'Transporte refrigerado hasta la puerta de tu casa.',
  color: 'bg-emerald-100 text-emerald-600'
}, {
  icon: Heart,
  title: 'Disfrute',
  desc: 'Tu mascota disfruta de salud real en cada bocado.',
  color: 'bg-pink-100 text-pink-600'
}];
export function ProductionProcess() {
  return <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 font-serif">
            De nuestra cocina a{' '}
            <span className="text-primary-600">tu casa</span>
          </h2>
          <p className="text-charcoal-600 max-w-2xl mx-auto">
            Un proceso transparente y artesanal, escalado con tecnología para
            garantizar la seguridad.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-1 bg-gray-100 hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="flex flex-col items-center text-center group">
                <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-sm border-4 border-white relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -bottom-2 bg-white px-2 py-0.5 rounded-full text-xs font-bold shadow-sm border border-gray-100 text-charcoal-500">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-charcoal-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}