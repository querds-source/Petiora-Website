import React from 'react';
import { ShieldCheck, Award, Leaf, CheckCircle, FlaskConical, Sparkles, FileCheck, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
interface CertificationsProps {
  variant?: 'hero' | 'grid' | 'compact';
  className?: string;
}
export function Certifications({
  variant = 'grid',
  className = ''
}: CertificationsProps) {
  const certifications = [{
    icon: FlaskConical,
    title: 'Laboratorio Certificado ISO 17025',
    description: 'Análisis de pureza y control de calidad en laboratorio acreditado internacional.',
    details: 'Laboratorio Acreditado',
    regNumber: 'LAB-ISO-17025-2024',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    badge: 'Lab'
  }, {
    icon: Award,
    title: 'ISO 22000:2018',
    description: 'Estándar internacional de gestión de seguridad alimentaria certificado.',
    details: 'Auditoría: Ene 2024',
    regNumber: 'Cert. ES-2024-001234',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    badge: 'ISO'
  }, {
    icon: Leaf,
    title: 'Certificación Ecológica EU',
    description: 'Ingredientes de agricultura ecológica sin pesticidas ni químicos.',
    details: 'Agricultura UE',
    regNumber: 'ES-ECO-001-AN',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    badge: 'Eco'
  }, {
    icon: FlaskConical,
    title: 'Análisis de Laboratorio',
    description: 'Control de calidad lote a lote para garantizar pureza y seguridad.',
    details: 'Labs. Echevarne',
    regNumber: 'Informe Nº LB-9928',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    badge: 'Lab'
  }, {
    icon: ShieldCheck,
    title: 'HACCP Certified',
    description: 'Sistema de Análisis de Peligros y Puntos Críticos de Control.',
    details: 'Seguridad Alimentaria',
    regNumber: 'Reg. SA-2023-88',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    badge: 'Safety'
  }, {
    icon: Globe,
    title: 'Welfare Quality®',
    description: 'Certificación europea de bienestar animal en granja.',
    details: 'Bienestar Animal',
    regNumber: 'WQ-2023-PRO',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    badge: 'Ético'
  }];
  if (variant === 'hero') {
    return <div className={`flex flex-wrap justify-center gap-4 md:gap-6 ${className}`}>
        {certifications.slice(0, 4).map((cert, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: idx * 0.1
      }} className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-default">
            <div className={`w-10 h-10 rounded-xl ${cert.bg} flex items-center justify-center`}>
              <cert.icon className={`w-5 h-5 ${cert.color}`} />
            </div>
            <div>
              <div className="text-sm font-bold text-charcoal-800 leading-tight">
                {cert.title}
              </div>
              <div className="text-[10px] font-medium text-charcoal-500 mt-0.5 flex items-center gap-1">
                <FileCheck className="w-3 h-3" />
                {cert.regNumber}
              </div>
            </div>
          </motion.div>)}
      </div>;
  }
  if (variant === 'compact') {
    return <div className={`flex flex-wrap gap-3 ${className}`}>
        {certifications.slice(0, 3).map((cert, idx) => <div key={idx} className="flex items-center gap-2 text-xs font-bold text-charcoal-700 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
            <cert.icon className={`w-3.5 h-3.5 ${cert.color}`} />
            <span>{cert.title}</span>
          </div>)}
      </div>;
  }
  return <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {certifications.map((cert, idx) => <motion.div key={idx} initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      delay: idx * 0.1
    }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
          {/* Badge */}
          <div className="absolute top-6 right-6">
            <div className={`${cert.bg} ${cert.color} text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 border ${cert.border}`}>
              <Sparkles className="w-3 h-3" />
              {cert.badge}
            </div>
          </div>

          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl ${cert.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${cert.border}`}>
            <cert.icon className={`w-8 h-8 ${cert.color}`} strokeWidth={1.5} />
          </div>

          {/* Content */}
          <h3 className="font-bold text-charcoal-800 mb-3 text-lg font-serif leading-tight group-hover:text-primary-700 transition-colors">
            {cert.title}
          </h3>
          <p className="text-sm text-charcoal-600 leading-relaxed mb-6 flex-grow">
            {cert.description}
          </p>

          {/* Details */}
          <div className="pt-5 border-t border-gray-50 mt-auto space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-charcoal-500">
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${cert.color}`} />
                <span>{cert.details}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-charcoal-400 bg-gray-50 px-3 py-2 rounded-lg">
              <span className="font-mono">{cert.regNumber}</span>
              <ExternalLink className="w-3 h-3 hover:text-primary-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Hover Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t ${cert.bg.replace('bg-', 'from-')}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
        </motion.div>)}
    </div>;
}