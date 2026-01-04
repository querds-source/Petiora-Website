import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Leaf, FileCheck, Microscope, CheckCircle2 } from 'lucide-react';
const certifications = [{
  icon: FileCheck,
  name: 'FEDIAF',
  label: 'Cumplimiento Europeo',
  description: 'Estándares nutricionales estrictos',
  color: 'text-blue-600',
  bg: 'bg-blue-50',
  border: 'border-blue-100'
}, {
  icon: Microscope,
  name: 'Vet Formulated',
  label: 'Fórmula Veterinaria',
  description: 'Desarrollado por expertos',
  color: 'text-primary-600',
  bg: 'bg-primary-50',
  border: 'border-primary-100'
}, {
  icon: Award,
  name: 'Human Grade',
  label: 'Calidad Humana 100%',
  description: 'Ingredientes aptos consumo humano',
  color: 'text-amber-600',
  bg: 'bg-amber-50',
  border: 'border-amber-100'
}, {
  icon: ShieldCheck,
  name: 'ISO 22000',
  label: 'Seguridad Alimentaria',
  description: 'Control de calidad riguroso',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50',
  border: 'border-emerald-100'
}];
export function TrustBar() {
  return <section className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-100 to-transparent opacity-50" />

      <div className="container-custom max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-charcoal-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary-500" />
            Calidad Certificada
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
        }} className="text-3xl md:text-4xl font-serif font-bold text-charcoal-900">
            Respaldado por Ciencia y Certificaciones
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((cert, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: idx * 0.1,
          duration: 0.5
        }} className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100 group hover:shadow-soft-lg">
              <div className={`w-16 h-16 rounded-2xl ${cert.bg} ${cert.border} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 mb-6 shadow-sm`}>
                <cert.icon className={`w-8 h-8 ${cert.color}`} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-charcoal-900 font-serif leading-tight group-hover:text-primary-700 transition-colors">
                  {cert.name}
                </span>
                <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wide mb-2">
                  {cert.label}
                </span>
                <span className="text-sm text-charcoal-500 leading-relaxed font-medium">
                  {cert.description}
                </span>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}