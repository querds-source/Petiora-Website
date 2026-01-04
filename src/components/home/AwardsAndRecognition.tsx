import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Medal, Crown, ShieldCheck, ThumbsUp, Heart } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
const awards = [{
  id: 1,
  title: 'Mejor Nutrición Veterinaria',
  year: '2023',
  institution: 'European Pet Food Awards',
  description: 'Reconocimiento a la excelencia en formulación clínica y resultados probados en salud animal.',
  icon: Trophy,
  color: 'text-amber-500',
  bg: 'bg-amber-50'
}, {
  id: 2,
  title: 'Innovación Sostenible',
  year: '2023',
  institution: 'Green Business Summit',
  description: 'Premio al modelo de producción circular y reducción de huella de carbono en un 67%.',
  icon: Leaf,
  color: 'text-emerald-500',
  bg: 'bg-emerald-50'
}, {
  id: 3,
  title: 'Excelencia en Calidad',
  year: '2022',
  institution: 'ISO Quality Standards',
  description: 'Certificación de máxima puntuación en auditorías de seguridad alimentaria y trazabilidad.',
  icon: ShieldCheck,
  color: 'text-blue-500',
  bg: 'bg-blue-50'
}, {
  id: 4,
  title: 'Marca del Año',
  year: '2022',
  institution: 'Pet Industry Federation',
  description: 'Elegida por consumidores y profesionales como la marca más confiable del sector.',
  icon: Crown,
  color: 'text-purple-500',
  bg: 'bg-purple-50'
}, {
  id: 5,
  title: 'Mejor Sabor Natural',
  year: '2021',
  institution: 'Taste Awards International',
  description: 'Galardón a la palatabilidad superior sin uso de saborizantes artificiales.',
  icon: Heart,
  color: 'text-rose-500',
  bg: 'bg-rose-50'
}, {
  id: 6,
  title: 'Top Startup FoodTech',
  year: '2021',
  institution: 'TechCrunch Disrupt',
  description: 'Reconocimiento a la tecnología aplicada en procesos de cocción a baja temperatura.',
  icon: Star,
  color: 'text-yellow-500',
  bg: 'bg-yellow-50'
}, {
  id: 7,
  title: 'Compromiso Ético',
  year: '2020',
  institution: 'Ethical Business Association',
  description: 'Premio por transparencia total en etiquetado y trato justo a proveedores locales.',
  icon: ThumbsUp,
  color: 'text-cyan-500',
  bg: 'bg-cyan-50'
}, {
  id: 8,
  title: 'Producto Revelación',
  year: '2020',
  institution: 'Feria Iberzoo+Propet',
  description: 'Lanzamiento más exitoso en la categoría de alimentación natural para mascotas.',
  icon: Medal,
  color: 'text-orange-500',
  bg: 'bg-orange-50'
}];
import { Leaf } from 'lucide-react';
export function AwardsAndRecognition() {
  return <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-50/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <Badge variant="secondary" size="md" className="mb-4 shadow-sm">
              <Trophy className="w-3.5 h-3.5 mr-1.5" />
              Reconocimiento Internacional
            </Badge>
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
        }} className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif tracking-tight">
            Excelencia certificada por <br />
            <span className="text-amber-500">líderes del sector</span>
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
        }} className="text-lg text-charcoal-600 font-light leading-relaxed">
            Nuestro compromiso con la calidad y la innovación ha sido reconocido
            por las instituciones más prestigiosas de la industria veterinaria y
            alimentaria.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => <motion.div key={award.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-gray-100 group hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl ${award.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <award.icon className={`w-6 h-6 ${award.color}`} />
                  </div>
                  <span className="text-xs font-bold text-charcoal-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-charcoal-900 mb-1 font-serif group-hover:text-primary-700 transition-colors">
                  {award.title}
                </h3>

                <div className="text-xs font-bold text-charcoal-500 uppercase tracking-wide mb-3">
                  {award.institution}
                </div>

                <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                  {award.description}
                </p>
              </Card>
            </motion.div>)}
        </div>

        {/* Trust Stats */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.6
      }} className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{
          label: 'Premios Totales',
          value: '15+'
        }, {
          label: 'Países Presentes',
          value: '8'
        }, {
          label: 'Certificaciones',
          value: '12'
        }, {
          label: 'Puntuación Media',
          value: '4.9/5'
        }].map((stat, i) => <div key={i}>
              <div className="text-3xl font-bold text-charcoal-900 font-serif mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-charcoal-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>)}
        </motion.div>
      </div>
    </section>;
}