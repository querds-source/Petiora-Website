import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
const faqs = [{
  category: 'Nutrición',
  question: '¿Cómo hago la transición a comida natural?',
  answer: 'La transición debe ser gradual durante 7-10 días. Mezcla nuestra comida con su dieta actual incrementando la proporción día a día: 25% días 1-3, 50% días 4-6, 75% días 7-9, 100% día 10.'
}, {
  category: 'Envíos',
  question: '¿Cómo se conserva la comida?',
  answer: 'Nuestras recetas llegan congeladas o refrigeradas. Debes guardarlas en el congelador y bajar a la nevera las raciones que vayas a usar 24h antes. En nevera duran hasta 5 días.'
}, {
  category: 'Nutrición',
  question: '¿Es apto para cachorros?',
  answer: '¡Sí! Tenemos recetas específicas para cachorros formuladas para apoyar su crecimiento. Nuestro algoritmo ajustará las porciones según su edad y peso.'
}, {
  category: 'Suscripción',
  question: '¿Tengo permanencia?',
  answer: 'Ninguna. Puedes pausar, cancelar o modificar tu suscripción en cualquier momento desde tu área de cliente sin coste alguno.'
}, {
  category: 'Salud',
  question: 'Mi perro tiene alergias, ¿puedo personalizar?',
  answer: 'Absolutamente. Durante el cuestionario inicial podrás indicar alergias e intolerancias. Nuestro sistema excluirá automáticamente los ingredientes no aptos.'
}, {
  category: 'Precios',
  question: '¿Cuánto cuesta al mes?',
  answer: 'El precio depende del tamaño y necesidades de tu mascota. Para un perro pequeño (5kg) desde 1.5€/día. Puedes calcular el precio exacto en nuestro cuestionario.'
}];
export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase()));
  return <section className="py-24 bg-white">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.span initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-charcoal-600 text-xs font-bold uppercase tracking-wider mb-4">
            Resolvemos tus dudas
          </motion.span>
          <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-serif">
            Preguntas <span className="text-primary-600">Frecuentes</span>
          </h2>

          <div className="max-w-md mx-auto relative">
            <Input placeholder="Buscar pregunta..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }}>
              <Card className={`cursor-pointer transition-all duration-300 ${openIndex === index ? 'border-primary-200 shadow-md' : 'hover:border-gray-300'}`} onClick={() => setOpenIndex(openIndex === index ? null : index)} padding="none">
                <div className="p-6">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded uppercase tracking-wider">
                        {faq.category}
                      </span>
                      <h3 className="font-bold text-charcoal-900 text-lg">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary-600 text-white' : 'bg-gray-100 text-charcoal-500'}`}>
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
                }} transition={{
                  duration: 0.3
                }} className="overflow-hidden">
                        <p className="pt-4 text-charcoal-600 leading-relaxed border-t border-gray-100 mt-4">
                          {faq.answer}
                        </p>
                      </motion.div>}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>)}
        </div>

        <div className="mt-12 text-center">
          <p className="text-charcoal-600 mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/faq">
              <Button variant="outline">
                Ver todas las FAQs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="ghost">
                Contactar Soporte
                <HelpCircle className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
}