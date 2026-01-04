import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Bone, Heart, Zap, ShieldCheck, Check, ArrowRight, Star, Sparkles, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProductCard } from '../ProductCard';
import { products } from '../../data/products';
import { EnhancedScrollReveal } from '../common/EnhancedScrollReveal';
// Types
type CategoryId = 'all' | 'interactive' | 'chew' | 'plush' | 'training';
interface Category {
  id: CategoryId;
  label: string;
  icon: React.ElementType;
  description: string;
}
export function ToysShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  // Data Configuration
  const categories: Category[] = [{
    id: 'all',
    label: 'Ver Todo',
    icon: Sparkles,
    description: 'Catálogo completo'
  }, {
    id: 'interactive',
    label: 'Mente Activa',
    icon: Brain,
    description: 'Puzzles y retos'
  }, {
    id: 'chew',
    label: 'Dental',
    icon: Bone,
    description: 'Salud oral'
  }, {
    id: 'plush',
    label: 'Confort',
    icon: Heart,
    description: 'Apego y calma'
  }, {
    id: 'training',
    label: 'Deporte',
    icon: Zap,
    description: 'Aire libre'
  }];
  const benefits = [{
    title: 'Salud Cognitiva',
    description: 'Previene el deterioro mental y reduce la ansiedad por aburrimiento.',
    icon: Brain
  }, {
    title: 'Vínculo Emocional',
    description: 'El juego compartido libera oxitocina y fortalece vuestra relación.',
    icon: Heart
  }, {
    title: 'Higiene Dental',
    description: 'Texturas diseñadas para limpiar dientes y masajear encías.',
    icon: ShieldCheck
  }, {
    title: 'Equilibrio Físico',
    description: 'Canaliza el exceso de energía de forma constructiva y segura.',
    icon: Zap
  }];
  // Filter Logic
  const allToys = products.filter(p => p.category === 'toys');
  const displayedProducts = activeCategory === 'all' ? allToys.slice(0, 8) : allToys.filter(p => {
    if (activeCategory === 'interactive') return p.subcategory === 'interactive';
    if (activeCategory === 'chew') return p.subcategory === 'chew';
    if (activeCategory === 'plush') return p.subcategory === 'plush';
    if (activeCategory === 'training') return p.subcategory === 'training';
    return false;
  }).slice(0, 8);
  return <section className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Subtle Background Pattern - Noise/Grain could be added via CSS, using simple shapes here */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        {/* 1. Header Section - Clean & Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <EnhancedScrollReveal>
              <div className="flex items-center gap-3 mb-6 text-amber-700/80 font-medium tracking-wide uppercase text-xs">
                <span className="w-8 h-px bg-amber-700/40"></span>
                <span>Enriquecimiento Ambiental</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal-900 leading-[1.1] mb-6">
                Diseñados para <br />
                <span className="italic text-amber-700/90">
                  mentes curiosas.
                </span>
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed max-w-xl">
                Más que juguetes, creamos herramientas de bienestar. Cada pieza
                está seleccionada por etólogos para satisfacer instintos
                naturales y promover la calma.
              </p>
            </EnhancedScrollReveal>
          </div>

          <EnhancedScrollReveal delay={0.2} className="hidden lg:block">
            <Link to="/productos?category=toys" className="group flex items-center gap-2 text-charcoal-900 font-bold border-b-2 border-charcoal-900/10 pb-1 hover:border-amber-600 transition-colors">
              Explorar Colección
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-600" />
            </Link>
          </EnhancedScrollReveal>
        </div>

        {/* 2. Interactive Category Tabs - The "Anti-Slop" Interaction */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {categories.map(cat => <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className="relative px-6 py-3 rounded-full flex items-center gap-3 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                {activeCategory === cat.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-charcoal-900 rounded-full" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} />}
                <span className={`relative z-10 flex items-center gap-2 ${activeCategory === cat.id ? 'text-white' : 'text-charcoal-600 hover:text-charcoal-900'}`}>
                  <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-amber-400' : 'text-charcoal-400'}`} />
                  <span className="font-bold text-sm tracking-wide">
                    {cat.label}
                  </span>
                </span>
              </button>)}
          </div>
        </div>

        {/* 3. Product Grid - Staggered Reveal */}
        <div className="min-h-[400px] mb-24">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            <AnimatePresence mode="popLayout">
              {displayedProducts.map((product, index) => <motion.div key={product.id} layout initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.95
            }} transition={{
              duration: 0.3,
              delay: index * 0.05
            }}>
                  <ProductCard product={product} />
                </motion.div>)}
            </AnimatePresence>
          </motion.div>

          {displayedProducts.length === 0 && <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-stone-400" />
              </div>
              <p className="text-stone-500 font-medium">
                Pronto añadiremos más productos a esta categoría.
              </p>
            </div>}

          <div className="mt-12 text-center lg:hidden">
            <Link to="/productos?category=toys">
              <Button variant="outline" className="w-full">
                Ver Catálogo Completo
              </Button>
            </Link>
          </div>
        </div>

        {/* 4. "Science of Play" - Distinctive Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24 border-t border-stone-200 pt-24">
          <div className="lg:col-span-4">
            <EnhancedScrollReveal>
              <h3 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">
                La ciencia detrás <br /> del juego.
              </h3>
              <p className="text-charcoal-600 mb-8 leading-relaxed">
                El aburrimiento es la causa #1 de problemas de comportamiento.
                Nuestra colección está diseñada para activar los sistemas de
                búsqueda y recompensa del cerebro de tu mascota.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl font-serif">
                    "
                  </div>
                  <div>
                    <div className="font-bold text-charcoal-900">
                      Dr. Sarah Miller
                    </div>
                    <div className="text-xs text-charcoal-500 uppercase tracking-wider">
                      Etóloga Veterinaria
                    </div>
                  </div>
                </div>
                <p className="text-charcoal-700 italic text-sm leading-relaxed">
                  "Recomiendo estos juguetes porque priorizan la seguridad y la
                  estimulación mental real, no solo la estética. Son
                  herramientas clínicas disfrazadas de diversión."
                </p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                </div>
              </div>
            </EnhancedScrollReveal>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => <EnhancedScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group h-full p-8 bg-white rounded-2xl border border-stone-100 hover:border-amber-200 hover:shadow-soft-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-charcoal-900 mb-6 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
                    <benefit.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-charcoal-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </EnhancedScrollReveal>)}
          </div>
        </div>

        {/* 5. Trust & Safety - High Contrast Section */}
        <EnhancedScrollReveal>
          <div className="bg-charcoal-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Estándar de Seguridad Petiora</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Materiales seguros, <br /> sin excepciones.
                </h3>
                <p className="text-charcoal-200 text-lg mb-8 leading-relaxed">
                  Rechazamos el 95% de los juguetes del mercado. Si no es seguro
                  para un bebé, no es seguro para tu mascota. Sin ftalatos, sin
                  BPA, y con tintes 100% naturales.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Libre de BPA y Ftalatos', 'Costuras reforzadas', 'Tintes vegetales no tóxicos', 'Testado contra asfixia'].map((item, i) => <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-amber-400" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-charcoal-100">
                        {item}
                      </span>
                    </div>)}
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500 blur-2xl opacity-20 rounded-full"></div>
                  <Link to="/nosotros#calidad">
                    <Button size="lg" className="relative bg-white text-charcoal-900 hover:bg-amber-50 border-none px-8 py-6 h-auto text-base font-bold shadow-xl">
                      <Award className="w-5 h-5 mr-2 text-amber-600" />
                      Ver Certificaciones
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </EnhancedScrollReveal>
      </div>
    </section>;
}