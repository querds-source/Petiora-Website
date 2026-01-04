import React from 'react';
import { motion } from 'framer-motion';
import { Heart, TreePine, Recycle, Users } from 'lucide-react';
export function ImpactDashboard() {
  const metrics = [{
    icon: Heart,
    value: '50,000+',
    label: 'Mascotas Alimentadas',
    sub: 'Mejorando vidas diariamente',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  }, {
    icon: TreePine,
    value: '500t',
    label: 'CO2 Ahorrado',
    sub: 'Gracias a proveedores locales',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  }, {
    icon: Recycle,
    value: '100%',
    label: 'Envases Reciclables',
    sub: 'Compromiso Zero Waste',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  }, {
    icon: Users,
    value: '250+',
    label: 'Refugios Ayudados',
    sub: 'Donamos el 1% de beneficios',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  }];
  return <div className="bg-charcoal-900 rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-900/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
            Nuestro Impacto Positivo
          </h2>
          <p className="text-charcoal-300 max-w-2xl mx-auto text-lg">
            No solo hacemos comida para mascotas. Trabajamos para crear un
            futuro más sostenible y ético para todos los animales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 transition-colors group">
              <div className={`w-14 h-14 mx-auto rounded-2xl ${metric.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className={`w-7 h-7 ${metric.color}`} />
              </div>
              <div className="text-4xl font-bold text-white mb-2 font-serif tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-primary-300 uppercase tracking-wider mb-2">
                {metric.label}
              </div>
              <div className="text-xs text-charcoal-400">{metric.sub}</div>
            </motion.div>)}
        </div>
      </div>
    </div>;
}