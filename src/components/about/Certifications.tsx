import React from 'react';
import { ShieldCheck, Award, CheckCircle, Leaf, ExternalLink, Calendar, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
export function Certifications() {
  const certifications = [{
    icon: ShieldCheck,
    name: 'ISO 22000:2018',
    desc: 'Gestión de Seguridad Alimentaria',
    details: 'Certificación internacional que garantiza la seguridad alimentaria en toda la cadena de producción, desde la recepción de materias primas hasta el producto final.',
    auditDate: 'Última auditoría: Marzo 2024',
    renewalDate: 'Renovación: Marzo 2027',
    verificationUrl: '#'
  }, {
    icon: Leaf,
    name: 'Certificación Ecológica EU',
    desc: 'Ingredientes 100% Orgánicos',
    details: 'Todos nuestros ingredientes vegetales provienen de agricultura ecológica certificada según el Reglamento (UE) 2018/848. Sin pesticidas sintéticos ni fertilizantes químicos.',
    auditDate: 'Última auditoría: Enero 2024',
    renewalDate: 'Renovación anual',
    verificationUrl: '#'
  }, {
    icon: CheckCircle,
    name: 'FEDIAF Compliant',
    desc: 'Estándares Nutricionales Europeos',
    details: 'Cumplimos y superamos las directrices nutricionales de la Federación Europea de la Industria de Alimentos para Animales de Compañía para todas las etapas de vida.',
    auditDate: 'Verificación continua',
    renewalDate: 'Actualización anual',
    verificationUrl: '#'
  }, {
    icon: Award,
    name: 'Human Grade Certified',
    desc: 'Grado Apto para Consumo Humano',
    details: 'Nuestras instalaciones y procesos cumplen con los mismos estándares de seguridad alimentaria exigidos para la producción de alimentos destinados al consumo humano.',
    auditDate: 'Última auditoría: Febrero 2024',
    renewalDate: 'Auditorías trimestrales',
    verificationUrl: '#'
  }];
  return <section className="py-24 bg-gradient-to-br from-gray-50 to-white rounded-[3rem] my-16 relative overflow-hidden border border-gray-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 border-4 border-white shadow-lg">
            <ShieldCheck className="w-8 h-8" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            Certificaciones y Calidad
          </h2>
          <p className="text-xl text-charcoal-600 font-light leading-relaxed">
            No solo lo decimos nosotros. Cumplimos con los más altos estándares
            internacionales de seguridad y calidad alimentaria, verificados por
            organismos independientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-primary-100 transition-all duration-500 group">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-charcoal-900 mb-1 font-serif group-hover:text-primary-700 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                      {cert.desc}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <p className="text-charcoal-600 leading-relaxed mb-6 text-sm lg:text-base">
                  {cert.details}
                </p>

                {/* Audit Info */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-charcoal-500">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span className="font-medium">{cert.auditDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal-500">
                    <FileCheck className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium">{cert.renewalDate}</span>
                  </div>
                  <a href={cert.verificationUrl} className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group/link">
                    Verificar certificado
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>;
        })}
        </div>

        {/* Trust Footer */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-sm">
            <CheckCircle className="w-5 h-5" />
            Todas las certificaciones están vigentes y disponibles para consulta
            pública
          </div>
        </motion.div>
      </div>
    </section>;
}