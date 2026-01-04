import React from 'react';
import { motion } from 'framer-motion';
import { User, ClipboardList, Truck, Heart, BarChart3, RefreshCw } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
const journeySteps = [{
  icon: User,
  title: 'Perfil Personalizado',
  description: 'Completa un cuestionario de 2 minutos sobre tu mascota',
  details: ['Edad, peso y nivel de actividad', 'Condiciones de salud existentes', 'Preferencias y alergias conocidas', 'Objetivos nutricionales específicos'],
  time: '2 min',
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  icon: ClipboardList,
  title: 'Plan Nutricional',
  description: 'Nuestro algoritmo veterinario crea tu plan personalizado',
  details: ['Fórmula específica para sus necesidades', 'Cálculo exacto de calorías diarias', 'Recomendaciones de suplementos', 'Guía de transición alimentaria'],
  time: 'Instantáneo',
  color: 'text-primary-600',
  bg: 'bg-primary-50'
}, {
  icon: Truck,
  title: 'Entrega Refrigerada',
  description: 'Recibe tu pedido en transporte frío en 24-48h',
  details: ['Embalaje isotérmico profesional', 'Cadena de frío garantizada', 'Raciones individuales etiquetadas', 'Instrucciones de conservación'],
  time: '24-48h',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}, {
  icon: Heart,
  title: 'Transición Guiada',
  description: 'Te acompañamos durante el cambio de dieta',
  details: ['Protocolo de 7 días paso a paso', 'Soporte veterinario por WhatsApp', 'Seguimiento de adaptación digestiva', 'Ajustes si es necesario'],
  time: '7 días',
  color: 'text-rose-600',
  bg: 'bg-rose-50'
}, {
  icon: BarChart3,
  title: 'Seguimiento Activo',
  description: 'Monitorizamos la evolución de tu mascota',
  details: ['Check-ins mensuales automatizados', 'Ajustes de plan según progreso', 'Alertas de reabastecimiento', 'Historial nutricional completo'],
  time: 'Continuo',
  color: 'text-purple-600',
  bg: 'bg-purple-50'
}, {
  icon: RefreshCw,
  title: 'Optimización Continua',
  description: 'Adaptamos el plan a medida que tu mascota evoluciona',
  details: ['Cambios por edad o actividad', 'Ajustes por condiciones de salud', 'Rotación de proteínas si deseas', 'Feedback constante del equipo'],
  time: 'Siempre',
  color: 'text-amber-600',
  bg: 'bg-amber-50'
}];
export function CustomerJourney() {
  return <section className="py-24 lg:py-32 bg-[#FAF7F2] overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-charcoal-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            Tu Experiencia Petiora
          </motion.span>

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
            De la primera visita a <br />
            <span className="text-primary-600">cliente de por vida</span>
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
        }} className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            No vendemos comida, creamos relaciones a largo plazo. Así es como
            cuidamos de tu mascota en cada etapa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: idx * 0.1
        }}>
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2 border-transparent hover:border-primary-100">
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-charcoal-400 font-bold text-sm group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-charcoal-900 font-serif group-hover:text-primary-700 transition-colors">
                      {step.title}
                    </h3>
                    <Badge variant="outline" size="sm" className="text-[10px]">
                      {step.time}
                    </Badge>
                  </div>
                  <p className="text-charcoal-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Details List */}
                <ul className="space-y-3">
                  {step.details.map((detail, i) => <li key={i} className="flex items-start gap-2 text-sm text-charcoal-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${step.bg.replace('50', '400')} mt-1.5 flex-shrink-0`} />
                      <span>{detail}</span>
                    </li>)}
                </ul>

                {/* Connector Line (except last) */}
                {idx < journeySteps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-400" />
                  </div>}
              </Card>
            </motion.div>)}
        </div>

        {/* Bottom Stats */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[{
          value: '97%',
          label: 'Satisfacción del Cliente',
          desc: 'Índice de recomendación NPS'
        }, {
          value: '4.2 años',
          label: 'Relación Media',
          desc: 'Duración de la suscripción'
        }, {
          value: '<4h',
          label: 'Tiempo de Respuesta',
          desc: 'Soporte al cliente'
        }].map((stat, i) => <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-primary-600 mb-2 font-serif">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-charcoal-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-charcoal-500">{stat.desc}</div>
            </div>)}
        </motion.div>
      </div>
    </section>;
}