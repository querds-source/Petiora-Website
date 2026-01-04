import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, Mail, Download, FileText, BookOpen, Video, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { BlogCard } from '../BlogCard';
import { blogPosts } from '../../data/blog';
const faqs = [{
  question: '¿Cómo hago la transición a comida natural?',
  answer: 'La transición debe ser gradual durante 7-10 días para permitir que la microbiota de tu mascota se adapte. Mezcla nuestra comida con su dieta actual incrementando la proporción día a día: 25% días 1-3, 50% días 4-6, 75% días 7-9, 100% día 10. Incluimos una guía detallada en tu primer pedido.'
}, {
  question: '¿Cómo se conserva la comida?',
  answer: 'Nuestras recetas llegan congeladas o refrigeradas en transporte isotérmico. Debes guardar las bolsas en el congelador y bajar a la nevera las raciones que vayas a usar 24h antes. Una vez descongelado en nevera, el producto se mantiene fresco hasta 5 días. Nunca vuelvas a congelar un producto descongelado.'
}, {
  question: '¿Es apto para cachorros?',
  answer: '¡Sí! Tenemos recetas específicas para cachorros (Puppy Growth) formuladas con niveles más altos de proteína y calcio para apoyar su crecimiento óseo y muscular. Nuestro algoritmo ajustará las porciones automáticamente según su edad, peso actual y peso adulto estimado.'
}, {
  question: '¿Qué pasa si a mi perro no le gusta?',
  answer: 'Es muy raro (¡les suele encantar!), pero ofrecemos una Garantía de Transición Feliz. Si en los primeros 14 días tu perro no se adapta, te devolvemos el dinero de tu primer pedido. Queremos que pruebes sin riesgos.'
}];
const guides = [{
  title: 'Guía de Transición',
  desc: 'Paso a paso para cambiar de pienso a comida real.',
  icon: FileText,
  color: 'bg-blue-50 text-blue-600'
}, {
  title: 'Nutrición Cachorros',
  desc: 'Todo lo que necesitas saber para su crecimiento.',
  icon: BookOpen,
  color: 'bg-amber-50 text-amber-600'
}, {
  title: 'Webinar: Alergias',
  desc: 'Charla con la Dra. Ruiz sobre picores y dieta.',
  icon: Video,
  color: 'bg-rose-50 text-rose-600'
}];
export function ResourcesHub() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const latestPost = blogPosts[0];
  return <section className="py-24 bg-white">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ Column */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-charcoal-600 text-xs font-bold uppercase tracking-wider mb-4">
              Ayuda y Soporte
            </span>
            <h2 className="text-4xl font-bold text-charcoal-900 mb-8 font-serif">
              Resuelve tus dudas
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => <Card key={index} className={`cursor-pointer transition-all duration-300 ${openIndex === index ? 'border-primary-200 shadow-md' : 'hover:border-gray-300'}`} onClick={() => setOpenIndex(openIndex === index ? null : index)} padding="md">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-charcoal-900 text-lg">
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${openIndex === index ? 'bg-primary-600 text-white' : 'bg-gray-100 text-charcoal-500'}`}>
                      {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: 'auto',
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} className="overflow-hidden">
                        <p className="pt-4 text-charcoal-600 leading-relaxed border-t border-gray-100 mt-4 text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>}
                  </AnimatePresence>
                </Card>)}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/faq">
                <Button variant="outline" className="pl-6 pr-6">
                  Ver todas las preguntas
                </Button>
              </Link>
              <Button variant="ghost" className="text-primary-700">
                <Download className="w-4 h-4 mr-2" />
                Guía de Transición PDF
              </Button>
            </div>

            {/* Downloadable Resources */}
            <div className="mt-12">
              <h3 className="font-bold text-lg text-charcoal-900 mb-4">
                Recursos Gratuitos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {guides.map((guide, idx) => <div key={idx} className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className={`w-10 h-10 rounded-lg ${guide.color} flex items-center justify-center mb-3`}>
                      <guide.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-charcoal-900 mb-1 group-hover:text-primary-700 transition-colors">
                      {guide.title}
                    </h4>
                    <p className="text-xs text-charcoal-500 leading-snug">
                      {guide.desc}
                    </p>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Blog & Newsletter Column */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-50 text-secondary-700 text-xs font-bold uppercase tracking-wider mb-4">
                    Petiora Academy
                  </span>
                  <h2 className="text-4xl font-bold text-charcoal-900 font-serif">
                    Aprende con expertos
                  </h2>
                </div>
                <Link to="/blog" className="hidden sm:block">
                  <Button variant="outline" size="sm">
                    Ver Blog
                  </Button>
                </Link>
              </div>
              {latestPost && <BlogCard post={latestPost} index={0} />}

              <div className="mt-4 text-right sm:hidden">
                <Link to="/blog" className="text-sm font-bold text-primary-600 flex items-center justify-end gap-1">
                  Ver todos los artículos <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Newsletter Mini */}
            <div className="bg-charcoal-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl mt-auto">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <h3 className="font-bold text-xl">Únete a la familia</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Recibe consejos veterinarios semanales, acceso anticipado a
                  nuevos productos y ofertas exclusivas para suscriptores. Sin
                  spam.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Tu email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary-500" />
                  <Button variant="primary" className="whitespace-nowrap">
                    Suscribirse
                  </Button>
                </div>
                <p className="text-[10px] text-gray-500 mt-3 flex items-center gap-1">
                  <FileText className="w-3 h-3" /> Política de privacidad
                  aceptada al suscribirse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}