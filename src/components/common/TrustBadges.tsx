import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Award, Heart, CheckCircle2, Globe, Zap, Stethoscope, Wheat, Microscope, Star, Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Tooltip } from '../ui/Tooltip';
interface TrustBadge {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
  color: string;
  bg: string;
  borderColor: string;
  verified: boolean;
  year?: string;
}
const badges: TrustBadge[] = [{
  icon: Award,
  title: 'ISO 9001:2015',
  description: 'Gestión de Calidad',
  details: 'Sistema de gestión de calidad certificado internacionalmente',
  color: 'text-blue-600',
  bg: 'bg-blue-50',
  borderColor: 'border-blue-100',
  verified: true,
  year: '2020'
}, {
  icon: ShieldCheck,
  title: 'HACCP',
  description: 'Seguridad Alimentaria',
  details: 'Análisis de Peligros y Puntos Críticos de Control',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50',
  borderColor: 'border-emerald-100',
  verified: true,
  year: '2019'
}, {
  icon: Leaf,
  title: 'Certificado Ecológico',
  description: 'Ingredientes Bio',
  details: 'Agricultura ecológica certificada por la UE',
  color: 'text-green-600',
  bg: 'bg-green-50',
  borderColor: 'border-green-100',
  verified: true,
  year: '2021'
}, {
  icon: Award,
  title: 'Human Grade',
  description: 'Grado Humano',
  details: 'Ingredientes aptos para consumo humano',
  color: 'text-purple-600',
  bg: 'bg-purple-50',
  borderColor: 'border-purple-100',
  verified: true
}, {
  icon: Wheat,
  title: 'Grain Free',
  description: 'Sin Cereales',
  details: 'Libre de cereales y rellenos innecesarios',
  color: 'text-amber-600',
  bg: 'bg-amber-50',
  borderColor: 'border-amber-100',
  verified: true
}, {
  icon: Heart,
  title: 'Cruelty Free',
  description: 'Ética Animal',
  details: 'No testado en animales, producción ética',
  color: 'text-rose-600',
  bg: 'bg-rose-50',
  borderColor: 'border-rose-100',
  verified: true
}, {
  icon: Globe,
  title: 'Carbon Neutral',
  description: 'Huella Cero',
  details: 'Producción con compensación total de CO₂',
  color: 'text-teal-600',
  bg: 'bg-teal-50',
  borderColor: 'border-teal-100',
  verified: true,
  year: '2022'
}, {
  icon: Stethoscope,
  title: 'Vet Approved',
  description: 'Aval Veterinario',
  details: 'Formulado y aprobado por nutricionistas veterinarios',
  color: 'text-primary-600',
  bg: 'bg-primary-50',
  borderColor: 'border-primary-100',
  verified: true
}, {
  icon: Microscope,
  title: 'Lab Tested',
  description: 'Análisis de Laboratorio',
  details: 'Cada lote analizado en laboratorio independiente',
  color: 'text-indigo-600',
  bg: 'bg-indigo-50',
  borderColor: 'border-indigo-100',
  verified: true
}, {
  icon: Zap,
  title: 'Fresh Daily',
  description: 'Frescura Diaria',
  details: 'Producción diaria sin congelación previa',
  color: 'text-cyan-600',
  bg: 'bg-cyan-50',
  borderColor: 'border-cyan-100',
  verified: true
}];
export function TrustBadges() {
  return <div className="w-full">
      <div className="text-center mb-12">
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          Certificaciones y Garantías
        </motion.div>

        <motion.h3 initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.1
      }} className="text-3xl md:text-4xl font-bold text-charcoal-900 font-serif mb-4">
          Excelencia{' '}
          <span className="text-primary-600 relative inline-block">
            Certificada
            <svg className="absolute -bottom-1 left-0 w-full h-2 text-primary-200" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </motion.h3>

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
      }} className="text-charcoal-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Cumplimos con los estándares internacionales más rigurosos para
          garantizar la máxima seguridad, calidad y transparencia en cada
          producto.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {badges.map((badge, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: index * 0.05,
        duration: 0.6
      }}>
            <Tooltip content={badge.details}>
              <Card className={`h-full p-6 flex flex-col items-center text-center hover:shadow-soft-xl transition-all duration-500 border ${badge.borderColor} group cursor-default hover:-translate-y-1 relative overflow-hidden`}>
                {/* Decorative gradient */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${badge.bg} rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:opacity-70 transition-opacity`} />

                {/* Verified Badge */}
                {badge.verified && <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>}

                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${badge.bg} border ${badge.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-sm`}>
                    <badge.icon className={`w-8 h-8 ${badge.color}`} />
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-charcoal-900 mb-1 leading-tight">
                    {badge.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-charcoal-600 leading-tight mb-3 font-medium">
                    {badge.description}
                  </p>

                  {/* Year Badge */}
                  {badge.year && <Badge variant="outline" size="sm" className="font-bold text-[10px]">
                      Desde {badge.year}
                    </Badge>}
                </div>
              </Card>
            </Tooltip>
          </motion.div>)}
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
      delay: 0.6
    }} className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-100">
          <div className="flex -space-x-2">
            {[Award, ShieldCheck, Leaf].map((Icon, idx) => <div key={idx} className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-sm">
                <Icon className="w-4 h-4 text-primary-600" />
              </div>)}
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-charcoal-900">
              +10 Certificaciones Internacionales
            </p>
            <p className="text-xs text-charcoal-600 font-medium">
              Auditadas anualmente por organismos independientes
            </p>
          </div>
        </div>
      </motion.div>
    </div>;
}