import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2, Clock, PlayCircle, Activity, Utensils, Award, Info, ShieldCheck, Puzzle, Brain, Bone } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Tooltip } from '../ui/Tooltip';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { InfoBadge } from '../ui/InfoBadge';
import { CertificationBadge } from '../ui/CertificationBadge';
const testimonials = [{
  name: 'María G.',
  text: 'Increíble cambio en el pelaje de Luna.',
  rating: 5,
  role: 'Cliente Verificado'
}, {
  name: 'Carlos R.',
  text: 'Por fin Thor come con ganas.',
  rating: 5,
  role: 'Dueño de Golden'
}, {
  name: 'Laura M.',
  text: 'Adiós a las alergias de mi bulldog.',
  rating: 5,
  role: 'Cliente desde 2022'
}];
const pressLogos = [{
  name: 'Vogue',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Vogue_logo.svg/2560px-Vogue_logo.svg.png'
}, {
  name: 'Forbes',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/2560px-Forbes_logo.svg.png'
}, {
  name: 'Elle',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Elle_logo.svg/2560px-Elle_logo.svg.png'
}];
export function HeroSection() {
  const {
    scrollY
  } = useScroll();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  return <section className="relative bg-[#FAF9F6] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[95vh] flex items-center">
      {/* Background Elements - Subtle & Organic */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full paw-pattern-animated" />
      </div>

      <motion.div style={{
      y: y1,
      opacity
    }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none mix-blend-multiply" />
      <motion.div style={{
      y: y2,
      opacity
    }} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none mix-blend-multiply" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
            {/* Trust Indicators - Enhanced */}
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="flex items-center gap-3 bg-white/80 px-5 py-2.5 rounded-full border border-gray-100 shadow-soft-sm backdrop-blur-md hover:bg-white transition-all duration-300 cursor-default hover:shadow-soft-md max-w-full overflow-hidden group">
              <div className="flex -space-x-3 shrink-0">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm ring-1 ring-gray-100">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Happy Customer" className="w-full h-full object-cover" />
                  </div>)}
              </div>
              <div className="flex flex-col items-start pl-2 overflow-hidden border-l border-gray-200 ml-1">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold text-charcoal-900">
                    4.9/5
                  </span>
                </div>
                <div className="h-4 relative w-56 text-left">
                  <AnimatePresence mode="wait">
                    <motion.span key={currentTestimonial} initial={{
                    y: 10,
                    opacity: 0
                  }} animate={{
                    y: 0,
                    opacity: 1
                  }} exit={{
                    y: -10,
                    opacity: 0
                  }} className="text-[10px] font-medium text-charcoal-500 block truncate absolute inset-0">
                      <span className="font-bold text-charcoal-700">
                        {testimonials[currentTestimonial].name}
                      </span>
                      : "{testimonials[currentTestimonial].text}"
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="space-y-6 max-w-2xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-charcoal-900 leading-[1.05] tracking-tight text-balance">
                Nutrición y juego para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-purple-700 relative inline-block">
                  una vida plena
                  <motion.svg initial={{
                  pathLength: 0,
                  opacity: 0
                }} animate={{
                  pathLength: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: 'easeOut'
                }} className="absolute -bottom-2 left-0 w-full h-3 text-secondary-300/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </motion.svg>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-charcoal-600 font-light leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
                El bienestar integral requiere dos pilares:
                <span className="font-semibold text-primary-800">
                  {' '}
                  alimentación fresca
                </span>{' '}
                para el cuerpo y
                <span className="font-semibold text-purple-700">
                  {' '}
                  enriquecimiento ambiental
                </span>{' '}
                para la mente. En Petiora unimos ambos mundos.
              </p>
            </div>

            {/* Key Stats - Balanced Nutrition & Play */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-lg border-t border-gray-200/60 pt-8">
              <InfoBadge label="" variant="ghost" className="w-full" expandable details={<div className="flex flex-col items-center lg:items-start group cursor-help transition-all duration-300 hover:opacity-100 opacity-90 w-full">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-primary-700 font-serif group-hover:scale-105 transition-transform duration-300">
                        +<AnimatedCounter value={3} />
                      </span>
                      <span className="text-lg font-bold text-primary-600">
                        años
                      </span>
                    </div>
                    <span className="text-xs text-charcoal-500 font-bold uppercase tracking-wide mt-1 flex items-center gap-1.5">
                      Esperanza de vida
                      <Info className="w-3 h-3 opacity-50" />
                    </span>
                  </div>} source={{
              name: 'Lippert & Sapy Study',
              year: '2003',
              link: 'https://www.ukrmb.co.uk/images/LippertSapySummary.pdf'
            }} />

              <InfoBadge label="" variant="ghost" className="w-full border-l border-gray-200 pl-6 sm:pl-8" expandable details={<div className="flex flex-col items-center lg:items-start group cursor-help transition-all duration-300 hover:opacity-100 opacity-90 w-full">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-purple-700 font-serif group-hover:scale-105 transition-transform duration-300">
                        <AnimatedCounter value={50} />
                      </span>
                      <span className="text-lg font-bold text-purple-600">
                        %
                      </span>
                    </div>
                    <span className="text-xs text-charcoal-500 font-bold uppercase tracking-wide mt-1 flex items-center gap-1.5">
                      Menos ansiedad
                      <Info className="w-3 h-3 opacity-50" />
                    </span>
                  </div>} source={{
              name: 'Estudio Enriquecimiento Ambiental',
              year: '2022'
            }} />

              <InfoBadge label="" variant="ghost" className="w-full border-l border-gray-200 pl-6 sm:pl-8" expandable details={<div className="flex flex-col items-center lg:items-start group cursor-help transition-all duration-300 hover:opacity-100 opacity-90 w-full">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-secondary-600 font-serif group-hover:scale-105 transition-transform duration-300">
                        100
                      </span>
                      <span className="text-lg font-bold text-secondary-500">
                        %
                      </span>
                    </div>
                    <span className="text-xs text-charcoal-500 font-bold uppercase tracking-wide mt-1 flex items-center gap-1.5">
                      Felicidad
                      <Info className="w-3 h-3 opacity-50" />
                    </span>
                  </div>} source={{
              name: 'Garantía Petiora',
              year: '2024'
            }} />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Link to="/productos" className="w-full sm:w-auto">
                <Button size="xl" variant="gradient" pulse className="w-full sm:w-auto rounded-full shadow-soft-xl hover:shadow-soft-2xl hover:shadow-primary-900/20 font-bold px-10 py-6 text-lg group transition-all duration-300">
                  Ver Catálogo Completo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/nosotros" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-full border-2 font-bold bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 text-charcoal-800 px-8 py-6 text-lg group">
                  <PlayCircle className="mr-2 w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform" />
                  Filosofía Dual
                </Button>
              </Link>
            </div>

            {/* Guarantee & Press */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs text-charcoal-600 font-medium pt-4">
                <Tooltip content={<div className="flex flex-col gap-1">
                      <span className="font-bold">
                        Garantía de Satisfacción Total
                      </span>
                      <span className="text-gray-200 text-[10px]">
                        Si tu perro no ama nuestra comida o juguetes en los
                        primeros 30 días, te devolvemos el importe íntegro.
                      </span>
                    </div>} variant="success">
                  <motion.span initial={{
                  opacity: 0,
                  x: -10
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.4
                }} className="flex items-center gap-2 cursor-help hover:text-primary-700 transition-colors bg-white/50 px-3 py-1.5 rounded-full border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Garantía 30 Días
                  </motion.span>
                </Tooltip>

                <Tooltip content="Entrega rápida para que empiece la diversión y nutrición cuanto antes." variant="info">
                  <motion.span initial={{
                  opacity: 0,
                  x: -10
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.5
                }} className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-gray-100 cursor-help">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Envío 24h
                  </motion.span>
                </Tooltip>

                <CertificationBadge type="veterinary" size="sm" className="bg-white/50 border border-gray-100 px-3 py-1.5" />
              </div>

              {/* Press Logos */}
              <div className="border-t border-gray-200/50 pt-5 mt-2">
                <p className="text-[10px] text-charcoal-400 uppercase tracking-widest font-bold mb-4 text-center lg:text-left">
                  Recomendado por expertos en
                </p>
                <div className="flex justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {pressLogos.map((logo, i) => <img key={i} src={logo.url} alt={logo.name} className="h-5 object-contain hover:scale-105 transition-transform duration-300" />)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visuals - Balanced Dual Representation */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }} style={{
          scale: heroScale
        }} className="relative hidden lg:block h-[700px] perspective-1000">
            {/* Main Image Frame */}
            <div className="relative w-full h-full flex items-center justify-center transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out-expo group">
              <div className="relative w-[85%] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-900/10 border-[8px] border-white bg-white z-10">
                {/* Split Image or Dual Concept */}
                <img src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&q=80&w=1200" alt="Golden Retriever feliz con juguete" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[3s] ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-700" />

                {/* Minimalist Overlay */}
                <div className="absolute bottom-10 left-8 right-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out-expo">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="success" className="bg-emerald-500/90 text-white border-none backdrop-blur-md px-3 py-1 text-xs font-bold shadow-lg" animate>
                      Caso Real: Max
                    </Badge>
                  </div>
                  <p className="font-serif text-2xl font-bold leading-tight drop-shadow-md">
                    "Energía renovada gracias a la dieta fresca y mente ágil con
                    los puzzles."
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Nutrition (Top Right) */}
              <motion.div initial={{
              opacity: 0,
              x: 40,
              y: 20
            }} animate={{
              opacity: 1,
              x: 0,
              y: 0
            }} transition={{
              delay: 0.6,
              duration: 0.8,
              type: 'spring'
            }} className="absolute top-24 -right-4 z-20">
                <Card variant="premium" interactive={true} className="p-4 rounded-2xl w-72 hover:scale-105 transition-transform duration-300 shadow-soft-xl border-white/50 backdrop-blur-sm bg-white/90">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 shadow-inner mt-1">
                      <Utensils className="w-6 h-6 fill-current" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-charcoal-900 leading-tight mb-1">
                        Nutrición Celular
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-medium text-charcoal-500">
                          <span>Absorción de nutrientes</span>
                          <span className="text-primary-600 font-bold">
                            +92%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <motion.div initial={{
                          width: 0
                        }} animate={{
                          width: '92%'
                        }} transition={{
                          duration: 1.5,
                          delay: 1,
                          ease: [0.22, 1, 0.36, 1]
                        }} className="h-full bg-primary-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Floating Card 2: Play/Enrichment (Bottom Left) - EQUAL PROMINENCE */}
              <motion.div initial={{
              opacity: 0,
              x: -40,
              y: -20
            }} animate={{
              opacity: 1,
              x: 0,
              y: 0
            }} transition={{
              delay: 0.8,
              duration: 0.8,
              type: 'spring'
            }} className="absolute bottom-32 -left-8 z-20">
                <Card variant="premium" interactive={true} className="p-4 rounded-2xl w-72 hover:scale-105 transition-transform duration-300 shadow-soft-xl border-white/50 backdrop-blur-sm bg-white/90">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 shadow-inner">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-charcoal-900 leading-tight mb-1">
                        Estimulación Cognitiva
                      </p>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Badge variant="secondary" size="sm" className="bg-purple-100 text-purple-700 border-none">
                          Nivel Experto
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Puzzle className="w-3 h-3 text-purple-400" />
                        <p className="text-xs text-charcoal-500 font-medium">
                          Resolución de problemas
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}