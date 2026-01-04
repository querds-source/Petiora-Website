import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Globe, Star, TrendingUp } from 'lucide-react';
const milestones = [{
  year: '2019',
  title: 'Nace Petiora',
  description: 'Fundada por veterinarios con la misión de revolucionar la nutrición canina.',
  icon: Star,
  color: 'bg-primary-100 text-primary-600'
}, {
  year: '2020',
  title: 'Certificación ISO',
  description: 'Obtenemos nuestra primera certificación de calidad internacional.',
  icon: Award,
  color: 'bg-secondary-100 text-secondary-600'
}, {
  year: '2021',
  title: '10,000 Familias',
  description: 'Alcanzamos el hito de 10k mascotas alimentadas saludablemente.',
  icon: Users,
  color: 'bg-emerald-100 text-emerald-600'
}, {
  year: '2022',
  title: 'Expansión Nacional',
  description: 'Abrimos nuevos centros de distribución para cubrir todo el territorio.',
  icon: Globe,
  color: 'bg-amber-100 text-amber-600'
}, {
  year: '2023',
  title: 'Línea Felina',
  description: 'Lanzamos nuestras primeras recetas formuladas específicamente para gatos.',
  icon: TrendingUp,
  color: 'bg-purple-100 text-purple-600'
}];
export function CompanyTimeline() {
  return <section className="py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            Nuestra <span className="text-primary-600">Historia</span>
          </motion.h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Un viaje de pasión por la salud animal que comenzó en una pequeña
            cocina y hoy alimenta a miles.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-12 md:space-y-24 relative">
            {milestones.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className="flex-1 w-full md:w-auto text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-5xl font-bold text-gray-200 font-serif mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-600 max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}