import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, Trophy, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
const awards = [{
  title: 'Mejor Startup FoodTech',
  organization: 'Food Innovation Awards',
  year: '2023',
  icon: Trophy,
  color: 'text-amber-500',
  bg: 'bg-amber-50'
}, {
  title: 'Producto del Año',
  organization: 'Pet Industry Federation',
  year: '2022',
  icon: Star,
  color: 'text-primary-600',
  bg: 'bg-primary-50'
}, {
  title: 'Excelencia Nutricional',
  organization: 'Veterinary Association',
  year: '2023',
  icon: Award,
  color: 'text-secondary-600',
  bg: 'bg-secondary-50'
}, {
  title: 'Sostenibilidad',
  organization: 'Green Business Awards',
  year: '2023',
  icon: LeafIcon,
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}];
const certifications = [{
  name: 'ISO 9001',
  desc: 'Gestión de Calidad'
}, {
  name: 'FEDIAF',
  desc: 'Estándares Europeos'
}, {
  name: 'HACCP',
  desc: 'Seguridad Alimentaria'
}, {
  name: 'Organic',
  desc: 'Ingredientes Bio'
}];
function LeafIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>;
}
export function AwardsRecognition() {
  return <section className="py-20 bg-white border-t border-gray-100">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Awards Grid */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-charcoal-900 font-serif mb-4">
                Reconocidos por la industria
              </h2>
              <p className="text-charcoal-600">
                Nuestra obsesión por la calidad ha sido premiada por expertos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {awards.map((award, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: idx * 0.1
            }}>
                  <Card className="p-6 hover:shadow-lg transition-shadow border-gray-100">
                    <div className={`w-12 h-12 rounded-xl ${award.bg} flex items-center justify-center mb-4`}>
                      <award.icon className={`w-6 h-6 ${award.color}`} />
                    </div>
                    <h3 className="font-bold text-charcoal-900 mb-1">
                      {award.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 uppercase tracking-wide font-bold mb-2">
                      {award.organization}
                    </p>
                    <span className="inline-block px-2 py-1 rounded bg-gray-100 text-xs font-bold text-charcoal-600">
                      {award.year}
                    </span>
                  </Card>
                </motion.div>)}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-charcoal-900 rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-8 h-8 text-primary-400" />
                <h3 className="text-2xl font-bold font-serif">
                  Certificaciones Oficiales
                </h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, idx) => <motion.div key={idx} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2 + idx * 0.1
              }} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0">
                    <div>
                      <p className="font-bold text-lg">{cert.name}</p>
                      <p className="text-gray-400 text-sm">{cert.desc}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary-400" />
                    </div>
                  </motion.div>)}
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-gray-400">
                  Auditados anualmente por organismos independientes para
                  garantizar la máxima seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}