import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { EnhancedScrollReveal } from './common/EnhancedScrollReveal';
import { Badge } from './ui/Badge';
const testimonials = [{
  id: 1,
  name: 'Laura Méndez',
  role: 'Dueña de Thor (Golden Retriever)',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  content: 'Thor tenía problemas de piel desde cachorro. Después de 3 semanas con Petiora, los picores desaparecieron y su pelo brilla como nunca. La diferencia es abismal.',
  rating: 5,
  verified: true,
  date: 'Hace 2 semanas'
}, {
  id: 2,
  name: 'Carlos Ruiz',
  role: 'Dueño de Luna (Bulldog Francés)',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  content: 'Increíble servicio. La comida llega congelada y en perfectas condiciones. A Luna le encanta y sus digestiones han mejorado muchísimo. Ya no tiene gases.',
  rating: 5,
  verified: true,
  date: 'Hace 1 mes'
}, {
  id: 3,
  name: 'Ana García',
  role: 'Dueña de Max (Mestizo)',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
  content: 'Max era muy especial para comer, se cansaba enseguida del pienso. Con Petiora limpia el plato en segundos. Me da tranquilidad saber que come comida real.',
  rating: 5,
  verified: true,
  date: 'Hace 3 semanas'
}];
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };
  return <section className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-900/40 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-900/20 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <EnhancedScrollReveal>
            <Badge variant="outline" className="mb-6 border-white/20 text-white bg-white/5 backdrop-blur-sm">
              Historias de la Manada
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Resultados que se ven y se sienten
            </h2>
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm font-medium">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span>4.9/5 basado en +2,500 reseñas verificadas</span>
            </div>
          </EnhancedScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-24 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all hover:scale-110 hidden md:flex items-center justify-center z-20 border border-white/10" aria-label="Anterior testimonio">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-24 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all hover:scale-110 hidden md:flex items-center justify-center z-20 border border-white/10" aria-label="Siguiente testimonio">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Content */}
          <div className="relative h-[400px] sm:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div key={currentIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{
              x: {
                type: 'spring',
                stiffness: 300,
                damping: 30
              },
              opacity: {
                duration: 0.2
              }
            }} className="absolute inset-0 w-full">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 h-full flex flex-col items-center text-center justify-center relative">
                  <Quote className="w-12 h-12 text-primary-500/20 absolute top-8 left-8" />

                  <div className="w-20 h-20 rounded-full border-4 border-charcoal-800 overflow-hidden mb-6 shadow-xl">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />)}
                  </div>

                  <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed mb-8 max-w-2xl">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <div className="flex items-center justify-center gap-2 text-sm text-white/50">
                      <span>{testimonials[currentIndex].role}</span>
                      {testimonials[currentIndex].verified && <span className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide">
                          <CheckCircle2 className="w-3 h-3" />
                          Verificado
                        </span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => <button key={idx} onClick={() => {
            setDirection(idx > currentIndex ? 1 : -1);
            setCurrentIndex(idx);
          }} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary-500' : 'w-2 bg-white/20 hover:bg-white/40'}`} aria-label={`Ir al testimonio ${idx + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
}