import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Microscope, GraduationCap, FlaskConical, Syringe, Stethoscope } from 'lucide-react';
const partners = [{
  name: 'Universidad Veterinaria de Madrid',
  icon: GraduationCap
}, {
  name: 'Laboratorios NutriScience',
  icon: Microscope
}, {
  name: 'Asociación Española de Veterinarios',
  icon: Stethoscope
}, {
  name: 'BioQuality Control',
  icon: FlaskConical
}, {
  name: 'Granjas Sostenibles Galicia',
  icon: Building2
}, {
  name: 'Instituto de Salud Animal',
  icon: Syringe
}];
export function PartnersSection() {
  return <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold text-charcoal-500 uppercase tracking-widest">
            Colaboradores Científicos y Partners
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => <motion.div key={index} initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group flex flex-col items-center gap-3 cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-300 group-hover:text-primary-600 group-hover:border-primary-200 group-hover:shadow-soft-md transition-all duration-300">
                <partner.icon className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-wide group-hover:text-primary-700 transition-colors max-w-[120px]">
                {partner.name}
              </span>
            </motion.div>)}
        </div>
      </div>
    </section>;
}