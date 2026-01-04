import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChefHat, Thermometer, Microscope, PackageCheck, Truck, ArrowDown, ArrowRight, ClipboardCheck, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { EnhancedScrollReveal } from '../common/EnhancedScrollReveal';
const steps = [{
  id: 1,
  title: 'Selección de Ingredientes',
  description: 'Elegimos personalmente carnes frescas y vegetales de granjas locales sostenibles.',
  icon: Search,
  image: 'https://images.unsplash.com/photo-1606914469725-e39c37155490?auto=format&fit=crop&q=80&w=400',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50',
  border: 'border-emerald-100',
  detail: 'Certificación Km 0'
}, {
  id: 2,
  title: 'Preparación Artesanal',
  description: 'Troceamos los ingredientes a mano en nuestra cocina de grado humano.',
  icon: ChefHat,
  image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=400',
  color: 'text-orange-600',
  bg: 'bg-orange-50',
  border: 'border-orange-100',
  detail: 'Corte manual 2cm'
}, {
  id: 3,
  title: 'Cocción Lenta (Sous-vide)',
  description: 'Cocinamos a baja temperatura (80°C) para preservar nutrientes y sabor.',
  icon: Thermometer,
  image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
  color: 'text-rose-600',
  bg: 'bg-rose-50',
  border: 'border-rose-100',
  detail: '80°C / 45 min'
}, {
  id: 4,
  title: 'Control de Calidad',
  description: 'Analizamos cada lote en laboratorio para garantizar la seguridad alimentaria.',
  icon: Microscope,
  image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400',
  color: 'text-blue-600',
  bg: 'bg-blue-50',
  border: 'border-blue-100',
  detail: 'Test Microbiológico'
}, {
  id: 5,
  title: 'Abatimiento y Envasado',
  description: 'Enfriamos rápidamente y envasamos al vacío para mantener la frescura.',
  icon: PackageCheck,
  image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400',
  color: 'text-purple-600',
  bg: 'bg-purple-50',
  border: 'border-purple-100',
  detail: 'Vacío Seguro'
}, {
  id: 6,
  title: 'Envío Refrigerado',
  description: 'Tu pedido viaja en transporte frío (2-8°C) hasta tu puerta en 24h.',
  icon: Truck,
  image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=400',
  color: 'text-primary-600',
  bg: 'bg-primary-50',
  border: 'border-primary-100',
  detail: 'Cadena de Frío'
}];
export function ManufacturingProcess() {
  return <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
      backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}></div>

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <EnhancedScrollReveal>
            <Badge variant="primary" className="mb-6">
              Transparencia Total
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
              De la granja a su cuenco
            </h2>
            <p className="text-xl text-charcoal-600 font-light leading-relaxed">
              Controlamos cada paso del proceso para garantizar que tu mascota
              recibe la nutrición más fresca, segura y deliciosa posible.
            </p>
          </EnhancedScrollReveal>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[180px] left-0 w-full h-1 bg-gray-200 z-0">
            <div className="absolute inset-0 bg-primary-200 w-full h-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-24 relative z-10">
            {steps.map((step, index) => <EnhancedScrollReveal key={step.id} delay={index * 0.1} className="relative group">
                <div className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Image Area */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-charcoal-900 shadow-sm border border-white/50">
                      Paso 0{step.id}
                    </div>
                  </div>

                  {/* Icon & Content */}
                  <div className="flex-1 px-2 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${step.bg} ${step.border} border flex items-center justify-center shrink-0`}>
                        <step.icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-charcoal-900 font-serif leading-tight group-hover:text-primary-700 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-charcoal-600 text-sm leading-relaxed pl-[52px] mb-4">
                      {step.description}
                    </p>

                    <div className="pl-[52px]">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 text-xs font-bold text-charcoal-500 border border-gray-100">
                        <ClipboardCheck className="w-3 h-3" />
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && <div className="lg:hidden flex justify-center py-4">
                    <ArrowDown className="w-6 h-6 text-gray-300" />
                  </div>}

                {/* Desktop Arrow (between items in row) */}
                {index % 3 !== 2 && index < steps.length - 1 && <div className="hidden lg:block absolute top-[180px] -right-4 translate-x-1/2 -translate-y-1/2 z-20 bg-white p-1 rounded-full border border-gray-100 shadow-sm">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>}
              </EnhancedScrollReveal>)}
          </div>
        </div>

        {/* Safety Standards Bar */}
        <EnhancedScrollReveal delay={0.4} className="mt-20 flex flex-wrap justify-center gap-6 border-t border-gray-200 pt-12">
          <div className="flex items-center gap-2 text-sm font-bold text-charcoal-500">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Certificado HACCP
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-charcoal-500">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Normativa ISO 22000
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-charcoal-500">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Registro Sanitario UE
          </div>
        </EnhancedScrollReveal>
      </div>
    </section>;
}