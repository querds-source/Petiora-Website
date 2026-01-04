import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, ShieldCheck, Award, Users, Quote, Clock, Truck, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { CertificationBadge } from '../ui/CertificationBadge';
import { EnhancedScrollReveal } from '../common/EnhancedScrollReveal';
const metrics = [{
  id: 1,
  value: 50000,
  suffix: '+',
  label: 'Mascotas Alimentadas',
  sub: 'Diariamente en España',
  icon: Users,
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  id: 2,
  value: 4.9,
  suffix: '/5',
  label: 'Valoración Media',
  sub: 'Basado en 2,500+ reseñas',
  icon: Star,
  color: 'text-yellow-500',
  bg: 'bg-yellow-50'
}, {
  id: 3,
  value: 100,
  suffix: '%',
  label: 'Grado Humano',
  sub: 'Ingredientes Certificados',
  icon: ShieldCheck,
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}, {
  id: 4,
  value: 6,
  suffix: '+',
  label: 'Años Investigando',
  sub: 'I+D Nutricional',
  icon: Award,
  color: 'text-purple-600',
  bg: 'bg-purple-50'
}];
const logos = [{
  name: 'Forbes',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/2560px-Forbes_logo.svg.png'
}, {
  name: 'Vogue',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Vogue_logo.svg/2560px-Vogue_logo.svg.png'
}, {
  name: 'El País',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1ef/El_Pa%C3%ADs_logo.svg/2560px-El_Pa%C3%ADs_logo.svg.png'
}, {
  name: 'Elle',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Elle_logo.svg/2560px-Elle_logo.svg.png'
}, {
  name: 'National Geographic',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/National_Geographic_Logo.svg/2560px-National_Geographic_Logo.svg.png'
}];
const guarantees = [{
  icon: ThumbsUp,
  title: 'Garantía de Gusto',
  desc: 'Devolución si no le encanta'
}, {
  icon: Truck,
  title: 'Envíos Refrigerados',
  desc: 'Gratis en pedidos >49€'
}, {
  icon: ShieldCheck,
  title: 'Veterinarios 24/7',
  desc: 'Consultas incluidas'
}, {
  icon: Clock,
  title: 'Flexibilidad Total',
  desc: 'Cancela en 1 clic'
}];
const testimonial = {
  quote: 'Desde que cambiamos a Petiora, los problemas digestivos de Luna desaparecieron por completo. Su energía ha vuelto y su pelaje brilla como nunca. Es increíble ver la diferencia que hace la comida real.',
  author: 'María González',
  role: 'Cliente Verificado',
  pet: 'Dueña de Luna (Bulldog Francés)',
  image: 'https://randomuser.me/api/portraits/women/44.jpg'
};
function Counter({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <span>
      {count % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>;
}
export function TrustIndicators() {
  return <section className="py-20 bg-white border-y border-gray-100">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-20">
          {metrics.map((metric, index) => <EnhancedScrollReveal key={metric.id} delay={index * 0.1} className="text-center group p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="flex justify-center mb-4">
                <div className={`w-14 h-14 rounded-full ${metric.bg} ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <metric.icon className="w-7 h-7" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-2 font-serif">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-charcoal-700 uppercase tracking-wide mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {metric.sub}
              </div>
            </EnhancedScrollReveal>)}
        </div>

        {/* Certifications Bar - Enhanced */}
        <EnhancedScrollReveal className="flex flex-col items-center mb-20">
          <p className="text-xs font-bold text-charcoal-400 uppercase tracking-widest mb-6">
            Certificaciones de Calidad y Seguridad
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <CertificationBadge type="veterinary" size="lg" />
            <CertificationBadge type="organic" size="lg" />
            <CertificationBadge type="quality" size="lg" />
            <CertificationBadge type="health" size="lg" />
          </div>
        </EnhancedScrollReveal>

        {/* Testimonial & Press Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Featured Testimonial */}
          <EnhancedScrollReveal direction="left" className="bg-[#FAF7F2] rounded-[2rem] p-8 sm:p-12 relative overflow-hidden shadow-soft-lg border border-primary-100/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

            <Quote className="w-12 h-12 text-primary-200 absolute top-8 left-8 fill-current" />

            <div className="relative z-10 pt-8">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>

              <p className="text-lg sm:text-xl text-charcoal-800 font-serif italic leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-charcoal-100 pt-6">
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                    <div className="font-bold text-charcoal-900">
                      {testimonial.author}
                    </div>
                    <div className="text-xs font-medium text-charcoal-500">
                      {testimonial.pet}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Trustpilot_logo.png" alt="Trustpilot" className="h-5 opacity-90" />
                  <span className="text-xs font-bold text-charcoal-900">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
          </EnhancedScrollReveal>

          {/* Press Logos & Guarantees */}
          <EnhancedScrollReveal direction="right" className="flex flex-col justify-center">
            <div className="mb-12">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 text-center lg:text-left">
                Destacados en Prensa
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-10 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {logos.map((logo, index) => <img key={index} src={logo.url} alt={logo.name} className="h-6 sm:h-7 object-contain hover:opacity-100 transition-opacity" />)}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h4 className="font-bold text-charcoal-900 mb-6 font-serif text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary-600" />
                Nuestra Garantía de Felicidad
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guarantees.map((item, idx) => <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-primary-600 group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-charcoal-900 block group-hover:text-primary-700 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-xs text-charcoal-500 font-medium">
                        {item.desc}
                      </span>
                    </div>
                  </div>)}
              </div>
            </div>
          </EnhancedScrollReveal>
        </div>
      </div>
    </section>;
}