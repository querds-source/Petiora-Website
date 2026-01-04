import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Thermometer, Clock, ShieldCheck, CheckCircle2, ArrowRight, ClipboardCheck, Snowflake, Info } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';
const steps = [{
  id: 1,
  title: 'Recepción y Análisis',
  description: 'Control estricto de temperatura y calidad de las materias primas frescas al llegar al obrador.',
  data: 'Temp < 4°C',
  icon: ClipboardCheck,
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  id: 2,
  title: 'Corte Artesanal',
  description: 'Troceamos carnes y vegetales a mano. Sin pastas mecánicas ni emulsiones industriales.',
  data: 'Corte 2cm',
  icon: Factory,
  color: 'text-orange-600',
  bg: 'bg-orange-50'
}, {
  id: 3,
  title: 'Cocción Sous-Vide',
  description: 'Cocinamos al vacío a baja temperatura para pasteurizar manteniendo intactos los nutrientes.',
  data: '80°C / 45min',
  icon: Thermometer,
  color: 'text-rose-600',
  bg: 'bg-rose-50'
}, {
  id: 4,
  title: 'Abatimiento Rápido',
  description: 'Enfriamos a 3°C en menos de 90 minutos para garantizar la seguridad alimentaria total.',
  data: 'Seguridad ISO',
  icon: Snowflake,
  color: 'text-cyan-600',
  bg: 'bg-cyan-50'
}];
const certifications = ['HACCP Implementado', 'Trazabilidad Total', 'Análisis Microbiológico', 'Sin Contaminación Cruzada'];
export function ManufacturingTransparency() {
  return <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <Badge variant="primary" size="md" className="mb-6 shadow-sm">
              <Factory className="w-3.5 h-3.5 mr-1.5" />
              Transparencia Radical
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif leading-tight">
              Nuestra cocina es <br />
              <span className="text-primary-600">tu laboratorio</span>
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8 text-pretty font-light">
              Combinamos el cuidado de una cocina casera con la seguridad de una
              planta farmacéutica. Cada lote es cocinado, analizado y probado
              antes de salir.
            </p>

            <div className="space-y-8 mb-10 relative">
              {/* Connecting Line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-100 -z-10" />

              {steps.map((step, index) => <motion.div key={step.id} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex gap-5 group">
                  <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center shrink-0 z-10 shadow-sm border border-white group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} strokeWidth={1.5} />
                  </div>

                  <div className="pb-2 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-charcoal-900 font-serif">
                        {step.title}
                      </h3>
                      <Badge variant="outline" size="sm" className="font-mono text-xs bg-white">
                        {step.data}
                      </Badge>
                    </div>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>)}
            </div>

            <Button size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-gray-50">
              Ver Certificados de Calidad{' '}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Visuals */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white bg-white aspect-[4/5] group">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000" alt="Cocina Petiora" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Certifications Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                  <h4 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Protocolo de Seguridad
                  </h4>
                  <Tooltip content="Cumplimos con normativas ISO 22000 y HACCP para garantizar la máxima seguridad alimentaria.">
                    <Info className="w-4 h-4 text-charcoal-400 cursor-help hover:text-primary-600 transition-colors" />
                  </Tooltip>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, i) => <div key={i} className="flex items-center gap-2 text-xs font-medium text-charcoal-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      {cert}
                    </div>)}
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] hidden md:block animate-float">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-charcoal-400 uppercase">
                  Estado Actual
                </span>
              </div>
              <div className="text-3xl font-bold text-primary-600 font-serif mb-1">
                100%
              </div>
              <div className="text-xs font-bold text-charcoal-500 uppercase leading-tight">
                Trazabilidad Garantizada
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}