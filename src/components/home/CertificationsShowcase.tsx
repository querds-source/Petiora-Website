import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FlaskConical, FileCheck } from 'lucide-react';
const certifications = [{
  name: 'ISO 22000',
  description: 'Seguridad Alimentaria',
  detail: 'Certificación internacional de gestión de inocuidad',
  icon: ShieldCheck,
  color: 'text-blue-600',
  bg: 'bg-blue-50',
  border: 'border-blue-100'
}, {
  name: 'FEDIAF',
  description: 'Cumplimiento Normativo',
  detail: 'Estándares nutricionales europeos verificados',
  icon: FileCheck,
  color: 'text-emerald-600',
  bg: 'bg-emerald-50',
  border: 'border-emerald-100'
}, {
  name: 'Human Grade',
  description: 'Calidad de Ingredientes',
  detail: 'Apto para consumo humano en origen',
  icon: Award,
  color: 'text-amber-600',
  bg: 'bg-amber-50',
  border: 'border-amber-100'
}, {
  name: 'Lab Certified',
  description: 'Análisis de Pureza',
  detail: 'Control de calidad en laboratorio certificado',
  icon: FlaskConical,
  color: 'text-cyan-600',
  bg: 'bg-cyan-50',
  border: 'border-cyan-100'
}];
export function CertificationsShowcase() {
  return <section className="py-20 bg-white border-y border-gray-100">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-charcoal-900 font-serif mb-4">
              Excelencia Certificada
            </h3>
            <p className="text-charcoal-600 text-lg leading-relaxed font-light">
              No solo lo decimos nosotros. Nuestra calidad está auditada y
              certificada por los organismos más exigentes del sector.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {certifications.map((cert, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className={`w-14 h-14 rounded-2xl ${cert.bg} ${cert.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={`w-7 h-7 ${cert.color}`} strokeWidth={1.5} />
                </div>
                <div className="font-bold text-charcoal-900 text-base mb-1">
                  {cert.name}
                </div>
                <div className="text-[10px] text-charcoal-500 uppercase tracking-wider font-bold">
                  {cert.description}
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}