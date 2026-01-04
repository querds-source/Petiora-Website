import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChefHat, Thermometer, Microscope, PackageCheck, Truck, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
const steps = [{
  id: 1,
  title: 'Selección',
  description: 'Ingredientes frescos de granjas locales sostenibles.',
  icon: Search,
  color: 'text-emerald-600',
  bg: 'bg-emerald-50',
  image: 'https://images.unsplash.com/photo-1606914469725-e39c37155490?auto=format&fit=crop&q=80&w=400'
}, {
  id: 2,
  title: 'Preparación',
  description: 'Troceado manual en cocina de grado humano.',
  icon: ChefHat,
  color: 'text-orange-600',
  bg: 'bg-orange-50',
  image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=400'
}, {
  id: 3,
  title: 'Cocción',
  description: 'Sous-vide a 80°C para preservar nutrientes.',
  icon: Thermometer,
  color: 'text-rose-600',
  bg: 'bg-rose-50',
  image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400'
}, {
  id: 4,
  title: 'Control',
  description: 'Análisis de laboratorio de cada lote.',
  icon: Microscope,
  color: 'text-blue-600',
  bg: 'bg-blue-50',
  image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400'
}, {
  id: 5,
  title: 'Envasado',
  description: 'Sellado al vacío y abatimiento rápido.',
  icon: PackageCheck,
  color: 'text-purple-600',
  bg: 'bg-purple-50',
  image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400'
}, {
  id: 6,
  title: 'Envío',
  description: 'Transporte refrigerado en 24h.',
  icon: Truck,
  color: 'text-primary-600',
  bg: 'bg-primary-50',
  image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=400'
}];
export function ManufacturingJourney() {
  return <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="secondary" className="mb-6">
            Transparencia Total
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            De la granja a su cuenco
          </h2>
          <p className="text-xl text-charcoal-600 font-light leading-relaxed">
            Controlamos cada paso del proceso para garantizar que tu mascota
            recibe la nutrición más fresca, segura y deliciosa posible.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => <motion.div key={step.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="relative group">
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center relative z-10">
                  <div className="relative mb-4 w-full aspect-square rounded-xl overflow-hidden">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${step.bg} flex items-center justify-center shadow-lg border-2 border-white z-20`}>
                      <step.icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                  </div>

                  <div className="mt-2 pt-2">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Paso {step.id}
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-900 mb-2 font-serif group-hover:text-primary-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 md:rotate-0" />
                  </div>}
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}