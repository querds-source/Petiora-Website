import React, { useEffect, useState, Component } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ArrowRight, Heart, Users, CheckCircle2, Sparkles, Stethoscope, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
const stats = [{
  value: 50,
  suffix: 'k+',
  label: 'Familias Felices',
  sublabel: 'Confían en Petiora',
  icon: Users,
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  value: 98,
  suffix: '%',
  label: 'Mejora Digestiva',
  sublabel: 'En 30 días',
  icon: TrendingUp,
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}, {
  value: 4.9,
  suffix: '/5',
  label: 'Excelencia',
  sublabel: 'Trustpilot',
  icon: Star,
  color: 'text-amber-500',
  bg: 'bg-amber-50'
}, {
  value: 5,
  suffix: 'M+',
  label: 'Platos Servidos',
  sublabel: '100% Grado Humano',
  icon: Heart,
  color: 'text-rose-600',
  bg: 'bg-rose-50'
}];
const testimonials = [{
  id: 1,
  content: 'Thor tenía alergias constantes. Con Petiora, en 3 semanas dejó de rascarse. Su pelo ahora brilla y ha vuelto a ser el perro alegre de antes.',
  author: 'María González',
  location: 'Madrid',
  petName: 'Thor',
  petBreed: 'Bulldog Francés',
  petAge: '4 años',
  image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200',
  highlight: 'Adiós a las alergias',
  verified: true
}, {
  id: 2,
  content: 'A sus 12 años, Lola apenas quería pasear. Al cambiar a comida real, el cambio fue radical. Ha perdido peso y tiene energía para jugar.',
  author: 'Carlos Ruiz',
  location: 'Barcelona',
  petName: 'Lola',
  petBreed: 'Golden Retriever',
  petAge: '12 años',
  image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=200',
  highlight: 'Energía renovada',
  verified: true
}, {
  id: 3,
  content: "Era imposible que comiera pienso. Con Petiora, baila de emoción. Saber que le doy salud y no solo 'relleno' me da mucha paz mental.",
  author: 'Ana Pérez',
  location: 'Valencia',
  petName: 'Coco',
  petBreed: 'Mestizo',
  petAge: '2 años',
  image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=200',
  highlight: 'Devora su plato',
  verified: true
}];
const cases = [{
  pet: 'Max',
  breed: 'Labrador',
  age: '5 años',
  issue: 'Sobrepeso y Letargo',
  result: '-4kg y Energía Vital',
  timeframe: '3 meses',
  imageBefore: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&q=80&w=400',
  imageAfter: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400',
  quote: 'Pensábamos que era perezoso, pero solo estaba mal alimentado. Ahora es imparable.',
  tags: ['Pérdida de Peso', 'Articulaciones'],
  vetNote: 'Reducción de grasa corporal del 15% y mejora en movilidad articular.'
}, {
  pet: 'Bella',
  breed: 'Westie',
  age: '3 años',
  issue: 'Dermatitis Crónica',
  result: 'Piel Sana',
  timeframe: '5 semanas',
  imageBefore: 'https://images.unsplash.com/photo-1591856399436-1c210419359d?auto=format&fit=crop&q=80&w=400',
  imageAfter: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
  quote: 'Gastamos fortunas en veterinarios. La solución estaba en su comedero.',
  tags: ['Piel Sensible', 'Digestión'],
  vetNote: 'Remisión completa de eritema y recuperación de la barrera cutánea.'
}];
// Counter Component
const Counter = ({
  value,
  duration = 2
}: {
  value: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const {
    ref,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);
  return <span ref={ref}>
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
    </span>;
};
export function SocialProofSection() {
  return <section className="py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-primary-100/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        {/* Header & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="max-w-xl">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-charcoal-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              Historias Reales
            </motion.div>

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
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-6 font-serif tracking-tight leading-[1.1]">
              Transformando vidas,{' '}
              <span className="text-primary-700 relative inline-block">
                plato a plato.
              </span>
            </motion.h2>

            <motion.p initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-lg md:text-xl text-charcoal-600 font-light leading-relaxed mb-8">
              Detrás de cada pedido hay una historia de recuperación, alegría y
              salud. No solo vendemos comida, regalamos años de calidad junto a
              tu mejor amigo.
            </motion.p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                  </div>)}
              </div>
              <div className="text-sm">
                <p className="font-bold text-charcoal-900">
                  Únete a la comunidad
                </p>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  <span className="text-charcoal-500 text-xs ml-1">
                    4.9/5 Trustpilot
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3 + idx * 0.1,
            duration: 0.5
          }} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-charcoal-900 font-serif mb-1 tracking-tight">
                  <Counter value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm font-bold text-charcoal-800 uppercase tracking-wide mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-charcoal-500 font-medium">
                  {stat.sublabel}
                </div>
              </motion.div>)}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => <motion.div key={testimonial.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1,
            duration: 0.6
          }}>
                <Card className="h-full p-8 bg-white hover:shadow-xl transition-all duration-500 relative group border-gray-100 hover:-translate-y-2 flex flex-col rounded-[2rem]">
                  <Quote className="absolute top-8 right-8 w-10 h-10 text-primary-100 group-hover:text-primary-200 transition-colors fill-current" />

                  <div className="mb-6">
                    <Badge variant="secondary" className="mb-3 bg-primary-50 text-primary-800 border-primary-100 font-bold">
                      {testimonial.highlight}
                    </Badge>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>

                  <p className="text-charcoal-700 leading-relaxed mb-8 text-base flex-grow italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50 shadow-md" />
                    <div>
                      <div className="font-bold text-base text-charcoal-900 flex items-center gap-2">
                        {testimonial.petName}
                        {testimonial.verified && <CheckCircle2 className="w-4 h-4 text-primary-500" />}
                      </div>
                      <div className="text-xs text-charcoal-500 font-medium uppercase tracking-wide">
                        {testimonial.petBreed}, {testimonial.petAge}
                      </div>
                      <div className="text-xs text-charcoal-400 mt-0.5">
                        Dueño: {testimonial.author}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </div>
        </div>

        {/* Before / After Cases - Enhanced Storytelling */}
        <div className="bg-white rounded-[3rem] p-8 sm:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal-900 font-serif mb-4">
              Resultados Clínicos Visibles
            </h3>
            <p className="text-lg text-charcoal-600 font-light max-w-2xl mx-auto">
              No es milagro, es nutrición. Cuando alimentas el cuerpo con lo que
              realmente necesita, la recuperación es asombrosa y medible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {cases.map((item, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            scale: 0.98
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.2,
            duration: 0.6
          }} className="group">
                <div className="flex gap-4 mb-6 h-72">
                  <div className="flex-1 relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
                      ANTES
                    </div>
                    <img src={item.imageBefore} alt="Antes" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                    <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
                      DESPUÉS ({item.timeframe})
                    </div>
                    <img src={item.imageAfter} alt="Después" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map(tag => <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md border border-gray-200 text-charcoal-500">
                        {tag}
                      </span>)}
                  </div>

                  <h4 className="font-bold text-2xl text-charcoal-900 mb-2 font-serif">
                    {item.pet}, {item.breed}
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 text-sm">
                    <span className="text-rose-600 font-medium line-through decoration-rose-300 decoration-2">
                      {item.issue}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                    <span className="text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md">
                      <CheckCircle2 className="w-4 h-4" />
                      {item.result}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-charcoal-600 italic border-l-2 border-primary-200 pl-4 leading-relaxed">
                      "{item.quote}"
                    </p>

                    <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-100">
                      <Stethoscope className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wide">
                          Nota Veterinaria
                        </p>
                        <p className="text-xs text-charcoal-700 font-medium">
                          {item.vetNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>

          <div className="text-center mt-16 relative z-10">
            <Button variant="outline" size="lg" className="rounded-full px-12 py-5 border-2 shadow-sm hover:shadow-md transition-all bg-white text-lg font-bold">
              Ver más transformaciones
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
}