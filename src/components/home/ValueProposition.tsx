import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Brain, Zap, Smile, AlertTriangle, CheckCircle2, XCircle, ThermometerSun, Droplets, Beef, ShieldAlert, Microscope, Clock, ArrowRight, FileText, BarChart3, HelpCircle, ChevronDown, ChevronUp, Star, Activity, Puzzle, Bone } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ComparisonIndicator } from '../ui/ComparisonIndicator';
import { EnhancedScrollReveal } from '../common/EnhancedScrollReveal';
import { InfoBadge } from '../ui/InfoBadge';
const healthOutcomes = [
// NUTRITION PILLAR
{
  icon: Zap,
  title: 'Energía Vital Sostenida',
  description: 'Al eliminar los picos glucémicos de los cereales, tu perro recupera una vitalidad constante. Estudios muestran un aumento significativo en actividad diaria.',
  stat: '+40% Actividad',
  source: 'J. Anim. Sci. 2023',
  link: '#',
  color: 'text-amber-600',
  bg: 'bg-amber-50',
  border: 'border-amber-100',
  pillar: 'Nutrición'
}, {
  icon: HeartPulse,
  title: 'Salud Física Total',
  description: 'Nutrición fresca para órganos sanos y sistema inmune fuerte. El combustible real que su cuerpo necesita para prevenir enfermedades.',
  stat: 'Peso Ideal',
  source: 'Vet. Med. Int. 2022',
  link: '#',
  color: 'text-rose-600',
  bg: 'bg-rose-50',
  border: 'border-rose-100',
  pillar: 'Nutrición'
},
// PLAY PILLAR
{
  icon: Brain,
  title: 'Agilidad Mental',
  description: 'Los retos cognitivos de nuestros juguetes previenen el envejecimiento cerebral y mantienen las conexiones neuronales activas y jóvenes.',
  stat: 'Neuroprotección',
  source: 'NeuroVet Journal',
  link: '#',
  color: 'text-purple-600',
  bg: 'bg-purple-50',
  border: 'border-purple-100',
  pillar: 'Juego'
}, {
  icon: Smile,
  title: 'Equilibrio Emocional',
  description: 'Masticar y resolver puzzles libera endorfinas y reduce el cortisol. Un perro entretenido es un perro tranquilo y sin ansiedad.',
  stat: '-50% Estrés',
  source: 'Behav. Vet. 2023',
  link: '#',
  color: 'text-indigo-600',
  bg: 'bg-indigo-50',
  border: 'border-indigo-100',
  pillar: 'Juego'
}];
const comparisonRows = [{
  label: 'Ingrediente Principal',
  petiora: {
    text: 'Carne Fresca Real',
    sub: 'Músculo y órganos nobles (60-80%)',
    icon: Beef
  },
  kibble: {
    text: 'Harinas Procesadas',
    sub: 'Restos y subproductos (<20%)'
  }
}, {
  label: 'Enriquecimiento',
  petiora: {
    text: 'Estimulación Mental',
    sub: 'Juguetes interactivos integrados',
    icon: Puzzle
  },
  kibble: {
    text: 'Solo Calorías',
    sub: 'Sin valor cognitivo añadido'
  }
}, {
  label: 'Hidratación',
  petiora: {
    text: 'Rica en Agua (70%)',
    sub: 'Protege riñones y tracto urinario',
    icon: Droplets
  },
  kibble: {
    text: 'Seco y Árido (<10%)',
    sub: 'Deshidratación crónica'
  }
}, {
  label: 'Procesamiento',
  petiora: {
    text: 'Mínimo y Natural',
    sub: 'Cocción lenta + Materiales seguros',
    icon: ShieldAlert
  },
  kibble: {
    text: 'Ultraprocesado',
    sub: 'Altas temperaturas y aditivos'
  }
}];
const timeline = [{
  week: 'Semana 1',
  result: 'Adaptación Positiva',
  detail: 'Mejor digestión por la comida fresca y curiosidad despertada por nuevos juguetes.',
  icon: CheckCircle2,
  color: 'text-emerald-600',
  bg: 'bg-emerald-100'
}, {
  week: 'Semana 3',
  result: 'Vitalidad Visible',
  detail: 'Más energía física y mayor calma en casa gracias a la estimulación mental.',
  icon: Zap,
  color: 'text-amber-600',
  bg: 'bg-amber-100'
}, {
  week: 'Semana 6',
  result: 'Transformación',
  detail: 'Peso optimizado, pelaje brillante y reducción de conductas destructivas.',
  icon: HeartPulse,
  color: 'text-rose-600',
  bg: 'bg-rose-100'
}, {
  week: 'Mes 3+',
  result: 'Bienestar Integral',
  detail: 'Salud física robusta y equilibrio emocional consolidado. Un perro feliz.',
  icon: Brain,
  color: 'text-purple-600',
  bg: 'bg-purple-100'
}];
const commonConcerns = [{
  question: '¿Por qué es importante combinar nutrición y juego?',
  answer: 'La salud no es solo física. Un perro bien alimentado pero aburrido puede desarrollar ansiedad y problemas de conducta. Combinar una dieta nutritiva con retos mentales crea un círculo virtuoso de bienestar: energía de calidad que se gasta de forma constructiva.'
}, {
  question: '¿Es más caro que el pienso tradicional?',
  answer: 'A corto plazo la inversión es mayor, pero ahorras significativamente en facturas veterinarias y adiestradores a largo plazo. Estás invirtiendo en prevención de salud física y mental.'
}, {
  question: '¿Cómo elijo el juguete adecuado?',
  answer: 'Nuestros expertos seleccionan los juguetes basándose en el tamaño, edad y estilo de juego de tu perro (destructor, buscador, pensador). En cada ficha de producto verás para qué perfil es ideal.'
}, {
  question: '¿Necesito suplementos adicionales?',
  answer: 'No. Nuestras recetas son completas y balanceadas según la FEDIAF. Y nuestros juguetes cubren la necesidad de masticación y limpieza dental, reduciendo la necesidad de snacks dentales procesados.'
}, {
  question: '¿Qué pasa si no le gusta?',
  answer: 'Ofrecemos nuestra Garantía "Plato Limpio & Cola Feliz". Si tu perro no ama nuestra comida o no interactúa con los juguetes en los primeros 30 días, te devolvemos el dinero.'
}];
const successCases = [{
  name: 'Max',
  breed: 'Golden Retriever',
  issue: 'Ansiedad y Alergias',
  result: 'Calmado y Piel Sana',
  image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80&w=200'
}, {
  name: 'Luna',
  breed: 'Border Collie',
  issue: 'Hiperactividad',
  result: 'Energía Canalizada',
  image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200'
}];
export function ValueProposition() {
  const [activeConcern, setActiveConcern] = useState<number | null>(null);
  return <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2D4A3E_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FAF9F6] to-transparent pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Scientific Benefits */}
          <div className="flex flex-col pt-4">
            <EnhancedScrollReveal>
              <Badge variant="outline" className="mb-6 border-primary-200 text-primary-800 bg-primary-50/50 shadow-sm px-4 py-1.5 text-xs font-bold tracking-wider">
                <Activity className="w-3.5 h-3.5 mr-2" />
                Bienestar 360°
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal-900 mb-6 leading-[1.1]">
                La ecuación perfecta:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-purple-700 decoration-4 decoration-primary-200 underline underline-offset-4">
                  Nutrición + Juego
                </span>
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-10 font-light text-pretty border-l-4 border-gray-200 pl-6">
                Abordamos la salud de tu mascota desde dos frentes inseparables.
                La biología requiere nutrientes de calidad, y la etología exige
                retos mentales.
                <strong className="font-bold text-charcoal-900">
                  {' '}
                  Solo juntos logran el verdadero bienestar.
                </strong>
              </p>
            </EnhancedScrollReveal>

            <div className="grid grid-cols-1 gap-6">
              {healthOutcomes.map((item, idx) => <EnhancedScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="flex gap-5 group p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100 relative overflow-hidden">
                    {/* Pillar Label */}
                    <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-wider ${item.pillar === 'Nutrición' ? 'bg-primary-100 text-primary-700' : 'bg-purple-100 text-purple-700'}`}>
                      {item.pillar}
                    </div>

                    <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2 pr-16">
                        <h3 className="text-xl font-bold text-charcoal-900 font-serif">
                          {item.title}
                        </h3>
                      </div>
                      <Badge variant="secondary" size="sm" className={`${item.bg} ${item.color} border-none font-bold mb-2`}>
                        {item.stat}
                      </Badge>
                      <p className="text-base text-charcoal-600 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-charcoal-400 uppercase tracking-wider">
                        <FileText className="w-3 h-3" />
                        Fuente:{' '}
                        <a href={item.link} className="hover:text-primary-600 underline decoration-dotted">
                          {item.source}
                        </a>
                      </div>
                    </div>
                  </div>
                </EnhancedScrollReveal>)}
            </div>

            {/* Timeline Preview - Enhanced */}
            <EnhancedScrollReveal delay={0.4} className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <div className="flex justify-between items-center mb-8 relative z-10">
                <h4 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-600" />
                  Evolución del Bienestar
                </h4>
                <InfoBadge label="Resultados Reales" tooltipContent="Promedio de resultados reportados por clientes que adoptaron el plan integral (comida + juego)." />
              </div>

              <div className="relative z-10">
                {/* Connecting Line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0 hidden sm:block">
                  <motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: '100%'
                }} transition={{
                  duration: 1.5,
                  delay: 0.5
                }} className="h-full bg-gradient-to-r from-primary-300 to-purple-300" />
                </div>
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 z-0 sm:hidden">
                  <motion.div initial={{
                  height: 0
                }} whileInView={{
                  height: '100%'
                }} transition={{
                  duration: 1.5,
                  delay: 0.5
                }} className="w-full bg-gradient-to-b from-primary-300 to-purple-300" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4 relative z-10">
                  {timeline.map((item, i) => <motion.div key={i} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.5 + i * 0.2
                }} className="flex sm:flex-col items-start sm:items-center text-left sm:text-center group pl-12 sm:pl-0 relative">
                      <div className={`absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-all z-10`}>
                        <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center`}>
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                      </div>

                      <div className="sm:mt-14 w-full">
                        <div className="bg-white px-3 py-1 rounded-lg border border-gray-100 shadow-sm inline-block mb-2">
                          <p className="text-[10px] font-bold text-charcoal-500 uppercase tracking-wide">
                            {item.week}
                          </p>
                        </div>
                        <p className="text-sm font-bold text-charcoal-900 leading-tight mb-1">
                          {item.result}
                        </p>
                        <p className="text-xs text-charcoal-500 leading-snug hidden lg:block">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>)}
                </div>
              </div>
            </EnhancedScrollReveal>
          </div>

          {/* Right: Detailed Comparison Table */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.98
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative lg:sticky lg:top-32">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100/40 via-transparent to-purple-100/40 rounded-[3rem] blur-3xl opacity-60" />

            <Card className="p-0 overflow-hidden border-none shadow-2xl shadow-charcoal-900/10 relative z-10 rounded-[2.5rem] bg-white ring-1 ring-black/5">
              {/* Header */}
              <div className="bg-charcoal-900 p-10 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                <h3 className="text-3xl font-serif font-bold mb-3 relative z-10">
                  La Diferencia Petiora
                </h3>
                <p className="text-charcoal-300 text-base relative z-10 font-medium max-w-md mx-auto">
                  Comparamos nuestro enfoque integral vs. la alimentación
                  tradicional.
                </p>
              </div>

              {/* Table Body */}
              <div className="p-6 sm:p-8 space-y-6 bg-white">
                {comparisonRows.map((row, idx) => <div key={idx} className="grid grid-cols-2 gap-4 relative group">
                    {/* Label Overlay */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-0.5 rounded-full border border-gray-100 shadow-sm text-[10px] font-bold uppercase tracking-widest text-charcoal-400 z-10 whitespace-nowrap">
                      {row.label}
                    </div>

                    {/* Petiora Side */}
                    <div className="bg-gradient-to-b from-primary-50/40 to-purple-50/40 rounded-2xl p-6 border border-primary-100 text-center relative group-hover:bg-primary-50 transition-colors duration-300">
                      <div className="absolute -top-3 -left-3 bg-white rounded-full p-1.5 shadow-md border border-gray-100 z-20">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-50" />
                      </div>
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary-700">
                          <row.petiora.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="font-bold text-charcoal-900 text-lg mb-1 leading-tight">
                        {row.petiora.text}
                      </div>
                      <div className="text-xs font-medium text-charcoal-600">
                        {row.petiora.sub}
                      </div>
                    </div>

                    {/* Kibble Side */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center relative opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0">
                      <div className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-md border border-gray-100 z-20">
                        <XCircle className="w-5 h-5 text-red-400 fill-red-50" />
                      </div>
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="font-bold text-charcoal-600 text-lg mb-1 leading-tight">
                        {row.kibble.text}
                      </div>
                      <div className="text-xs font-medium text-charcoal-400">
                        {row.kibble.sub}
                      </div>
                    </div>
                  </div>)}

                {/* Data Visualization - Enhanced Bar Chart */}
                <div className="pt-6 pb-2 border-t border-gray-100 mt-2">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-charcoal-400" />
                    <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                      Impacto en Calidad de Vida
                    </span>
                  </div>

                  <ComparisonIndicator label="Índice de Bienestar" usValue={95} themValue={60} usLabel="Petiora (Nutrición + Juego)" themLabel="Solo Pienso" highlight />

                  <div className="mt-3 flex justify-end">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      <Zap className="w-3 h-3" />
                      +35% Mejora Integral
                    </span>
                  </div>
                </div>

                {/* Success Cases - New Section */}
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-charcoal-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Star className="w-3 h-3" /> Casos de Éxito Reales
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {successCases.map((caseItem, idx) => <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <img src={caseItem.image} alt={caseItem.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-xs font-bold text-charcoal-900">
                            {caseItem.name}
                          </p>
                          <p className="text-[10px] text-charcoal-500">
                            {caseItem.breed}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span className="text-[10px] font-bold text-emerald-700">
                              {caseItem.result}
                            </span>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>

                {/* Common Concerns Accordion */}
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-charcoal-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <HelpCircle className="w-3 h-3" /> Dudas Frecuentes
                  </h4>
                  <div className="space-y-2">
                    {commonConcerns.map((concern, idx) => <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                        <button onClick={() => setActiveConcern(activeConcern === idx ? null : idx)} className="w-full flex justify-between items-center p-3 text-left bg-gray-50/50 hover:bg-gray-50 transition-colors">
                          <span className="text-sm font-bold text-charcoal-800">
                            {concern.question}
                          </span>
                          {activeConcern === idx ? <ChevronUp className="w-4 h-4 text-charcoal-400" /> : <ChevronDown className="w-4 h-4 text-charcoal-400" />}
                        </button>
                        <AnimatePresence>
                          {activeConcern === idx && <motion.div initial={{
                        height: 0
                      }} animate={{
                        height: 'auto'
                      }} exit={{
                        height: 0
                      }} className="overflow-hidden">
                              <div className="p-3 pt-0 text-xs text-charcoal-600 leading-relaxed bg-gray-50/50">
                                {concern.answer}
                              </div>
                            </motion.div>}
                        </AnimatePresence>
                      </div>)}
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <Button fullWidth size="xl" className="font-bold shadow-xl shadow-primary-900/10 bg-charcoal-900 hover:bg-black py-7 text-lg rounded-2xl transition-transform hover:scale-[1.02]">
                    Empezar el Cambio
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
}