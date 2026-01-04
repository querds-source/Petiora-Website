import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, HeartHandshake, Truck, CheckCircle2, HelpCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Accordion } from '../ui/Accordion';
const guarantees = [{
  icon: ShieldCheck,
  title: 'Garantía de Satisfacción 30 Días',
  description: 'Si a tu mascota no le encanta, te devolvemos el dinero. Sin preguntas complicadas.',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}, {
  icon: Truck,
  title: 'Entrega Refrigerada Garantizada',
  description: 'Si el producto no llega en perfectas condiciones de temperatura, lo reponemos gratis.',
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  icon: HeartHandshake,
  title: 'Soporte Veterinario Gratuito',
  description: 'Acceso directo a nuestro equipo de nutricionistas para resolver cualquier duda.',
  color: 'text-purple-600',
  bg: 'bg-purple-50'
}];
const faqs = [{
  question: '¿Cómo funciona la devolución de dinero?',
  answer: 'Simplemente contáctanos dentro de los 30 días posteriores a tu compra. Te enviaremos una etiqueta de devolución prepagada y procesaremos el reembolso completo en 24-48 horas tras recibir el producto.'
}, {
  question: '¿Qué pasa si mi perro no se adapta?',
  answer: 'Es normal que la transición lleve unos días. Nuestros nutricionistas te guiarán en el proceso. Si aun así no funciona, aplicamos la garantía de satisfacción sin coste alguno.'
}, {
  question: '¿Cubren los gastos de envío en devoluciones?',
  answer: 'Sí, absolutamente. Queremos que pruebes Petiora sin riesgos. Nosotros asumimos todos los costes logísticos de la devolución.'
}];
export function GuaranteesSection() {
  return <section className="py-24 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Guarantees */}
          <div>
            <Badge variant="primary" className="mb-6 bg-primary-500/20 text-primary-300 border-primary-500/30">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Compra Sin Riesgos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white">
              Tu tranquilidad es <br />
              <span className="text-primary-400">nuestra prioridad</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 font-light">
              Sabemos que cambiar la alimentación de tu mascota es una decisión
              importante. Por eso eliminamos todos los riesgos para que puedas
              probar con confianza.
            </p>

            <div className="space-y-6">
              {guarantees.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
                  <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex gap-5">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>)}
            </div>
          </div>

          {/* Right: Process & FAQ */}
          <div className="lg:pt-10">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 text-charcoal-900 shadow-2xl">
              <h3 className="text-2xl font-bold font-serif mb-8 flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-primary-600" />
                Proceso de Devolución Simple
              </h3>

              {/* Steps */}
              <div className="flex justify-between items-center mb-10 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-0" />
                {[{
                step: '1',
                label: 'Contacta'
              }, {
                step: '2',
                label: 'Etiqueta'
              }, {
                step: '3',
                label: 'Reembolso'
              }].map((s, i) => <div key={i} className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                    <div className="w-10 h-10 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center text-primary-700 font-bold shadow-sm">
                      {s.step}
                    </div>
                    <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                      {s.label}
                    </span>
                  </div>)}
              </div>

              {/* FAQ Accordion */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-charcoal-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Preguntas Frecuentes
                </h4>
                <div className="space-y-4">
                  {faqs.map((faq, i) => <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                      <h5 className="font-bold text-charcoal-800 mb-2 text-sm">
                        {faq.question}
                      </h5>
                      <p className="text-charcoal-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>)}
                </div>
              </div>

              <Button className="w-full rounded-xl py-4 font-bold shadow-lg shadow-primary-900/10">
                Ver Política Completa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}