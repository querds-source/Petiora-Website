import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, PackageCheck, Truck, Smile, Dog, Cat, Bone, Fish } from 'lucide-react';
const steps = [{
  icon: MousePointerClick,
  petIcon: Dog,
  title: 'Selecciona',
  description: 'Elige entre nuestra gama de productos formulados por veterinarios para tu mejor amigo.',
  color: 'bg-blue-50 text-blue-600',
  petColor: 'text-blue-400'
}, {
  icon: PackageCheck,
  petIcon: Bone,
  title: 'Personaliza',
  description: 'Adapta el pedido a las necesidades específicas, edad y raza de tu mascota.',
  color: 'bg-purple-50 text-purple-600',
  petColor: 'text-purple-400'
}, {
  icon: Truck,
  petIcon: Cat,
  title: 'Recibe',
  description: 'Envío refrigerado en 24/48h. Llega fresco y listo para servir.',
  color: 'bg-emerald-50 text-emerald-600',
  petColor: 'text-emerald-400'
}, {
  icon: Smile,
  petIcon: Fish,
  title: 'Disfruta',
  description: 'Observa cómo mejora la salud, el pelaje y la vitalidad de tu compañero.',
  color: 'bg-amber-50 text-amber-600',
  petColor: 'text-amber-400'
}];
export function PurchaseProcess() {
  return <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="paw-pattern-process" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M10,10 Q11,9 12,10 T14,10 T12,12 T10,12 T8,10 T10,8 Z" fill="currentColor" className="text-charcoal-900" />
            <path d="M30,30 Q31,29 32,30 T34,30 T32,32 T30,32 T28,30 T30,28 Z" fill="currentColor" className="text-charcoal-900" />
          </pattern>
          <rect width="100" height="100" fill="url(#paw-pattern-process)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-4 font-serif">
            Tu experiencia Petiora
          </h2>
          <p className="text-charcoal-600 text-lg">
            Hemos simplificado el proceso para que cuidar de tu mascota sea más
            fácil que nunca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10 border-t-2 border-dashed border-gray-200" />

          {steps.map((step, index) => {
          const PetIcon = step.petIcon;
          return <motion.div key={index} initial={{
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
                <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10 bg-white border-4 border-white ring-4 ring-opacity-50 ring-${step.color.split('-')[1]}-100`}>
                  <step.icon className="w-10 h-10" strokeWidth={1.5} />

                  {/* Floating Pet Icon */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center ${step.petColor}`}>
                    <PetIcon className="w-4 h-4" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-charcoal-800 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md border-2 border-white">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-charcoal-800 mb-3 font-serif">
                  {step.title}
                </h3>
                <p className="text-charcoal-500 leading-relaxed text-sm px-4">
                  {step.description}
                </p>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}