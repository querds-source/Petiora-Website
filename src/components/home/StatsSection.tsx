import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Truck, Star, Award, Calendar, Utensils } from 'lucide-react';
const stats = [{
  id: 1,
  name: 'Mascotas Felices',
  value: 50000,
  suffix: '+',
  icon: Users,
  description: 'Familias que confían en nosotros',
  color: 'text-blue-200'
}, {
  id: 2,
  name: 'Envíos Mensuales',
  value: 12000,
  suffix: '+',
  icon: Truck,
  description: 'Entregas refrigeradas a tiempo',
  color: 'text-emerald-200'
}, {
  id: 3,
  name: 'Reseñas 5 Estrellas',
  value: 4800,
  suffix: '+',
  icon: Star,
  description: 'Satisfacción garantizada',
  color: 'text-amber-200'
}, {
  id: 4,
  name: 'Veterinarios',
  value: 150,
  suffix: '+',
  icon: Award,
  description: 'Colaboradores certificados',
  color: 'text-purple-200'
}, {
  id: 5,
  name: 'Años de Experiencia',
  value: 15,
  suffix: '+',
  icon: Calendar,
  description: 'Innovando en nutrición',
  color: 'text-rose-200'
}, {
  id: 6,
  name: 'Recetas Únicas',
  value: 50,
  suffix: '+',
  icon: Utensils,
  description: 'Formulaciones especializadas',
  color: 'text-orange-200'
}];
const Counter = ({
  value,
  duration = 2
}: {
  value: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalDuration = duration * 1000;
    const incrementTime = totalDuration / (end > 100 ? 100 : end);
    const step = Math.ceil(end / (totalDuration / incrementTime));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value, duration, isInView]);
  return <span ref={ref}>{count.toLocaleString()}</span>;
};
export function StatsSection() {
  return <section className="py-20 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full paw-pattern-light" />
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-900/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-900/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-primary-300 text-xs font-bold uppercase tracking-wider mb-4">
            Nuestro Impacto
          </motion.span>
          <motion.h2 initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-3xl md:text-4xl font-bold font-serif text-white">
            Cifras que respaldan nuestra calidad
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8">
          {stats.map((stat, index) => <motion.div key={stat.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="flex flex-col items-center text-center group">
              <div className="mb-5 p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/5 group-hover:scale-110 shadow-lg">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 font-serif tabular-nums text-white">
                <Counter value={stat.value} />
                <span className="text-primary-400 text-2xl ml-0.5">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-sm font-bold text-gray-200 mb-1 uppercase tracking-wide">
                {stat.name}
              </div>
              <div className="text-xs text-gray-400 font-medium max-w-[140px] leading-relaxed">
                {stat.description}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}