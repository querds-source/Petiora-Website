import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../ui/Button';
export function SuccessStories() {
  return <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-charcoal-600 text-xs font-bold uppercase tracking-wider mb-4">
              Caso de Éxito
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6 font-serif">
              La transformación de Luna
            </h2>
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />)}
            </div>
            <blockquote className="text-xl text-charcoal-600 font-light italic mb-8 leading-relaxed">
              "Luna sufría de dermatitis atópica severa. Gastábamos cientos de
              euros en veterinarios y medicación. Tras 4 semanas con la dieta de
              Pavo Hipoalergénico, su piel está perfecta y ha dejado la
              cortisona."
            </blockquote>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-xs text-charcoal-500 uppercase tracking-wider mb-1">
                  Peso
                </div>
                <div className="text-2xl font-bold text-charcoal-800">
                  24kg{' '}
                  <span className="text-sm text-emerald-500 font-normal">
                    (-2kg)
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-xs text-charcoal-500 uppercase tracking-wider mb-1">
                  Síntomas
                </div>
                <div className="text-2xl font-bold text-charcoal-800">
                  Remisión{' '}
                  <span className="text-sm text-emerald-500 font-normal">
                    100%
                  </span>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg" className="rounded-full px-8">
              Ver más historias
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800&h=600" alt="Golden Retriever feliz" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-charcoal-800 shadow-lg">
                Luna, 5 años • Golden Retriever
              </div>
            </div>

            {/* Before photo floating */}
            <motion.div initial={{
            opacity: 0,
            x: 20,
            y: 20
          }} whileInView={{
            opacity: 1,
            x: 0,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-3">
              <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=400&h=400" alt="Luna antes" className="w-full h-full object-cover grayscale opacity-80" />
              <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                Antes
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}