import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
const faqs = [{
  question: '¿Es Petiora una dieta cruda (BARF) o cocinada?',
  answer: 'Petiora es una dieta cocinada suavemente al vapor (80°C). A diferencia del BARF, eliminamos el riesgo de patógenos como Salmonella o E. Coli, manteniendo la digestibilidad y los nutrientes de los ingredientes frescos. Es la opción más segura y nutritiva recomendada por veterinarios para la mayoría de perros.'
}, {
  question: '¿Cómo hago la transición desde el pienso?',
  answer: 'Recomendamos una transición gradual de 7 días para permitir que la microbiota de tu perro se adapte a la comida real. Día 1-2: 25% Petiora, Día 3-4: 50%, Día 5-6: 75%, Día 7: 100%. En tu primer pedido incluimos una guía detallada paso a paso.'
}, {
  question: '¿Necesito congelar la comida? ¿Cuánto dura?',
  answer: 'Nuestros menús llegan congelados para preservar su frescura sin conservantes artificiales. En el congelador duran hasta 6 meses. Una vez descongelado en la nevera, el paquete dura 4 días fresco. Recomendamos sacar un paquete del congelador a la nevera 24h antes de servir.'
}, {
  question: '¿Es completo o necesito añadir suplementos?',
  answer: "Petiora es una dieta 100% completa y balanceada según los estándares de la FEDIAF (Federación Europea de la Industria de Alimentos para Mascotas). Incluye nuestro 'Nutrient Mix' exclusivo con vitaminas y minerales esenciales. No necesitas añadir nada más, salvo que tu veterinario prescriba algo específico."
}, {
  question: '¿Es adecuado para cachorros o perros senior?',
  answer: 'Sí, tenemos fórmulas adaptadas. Para cachorros, aseguramos niveles óptimos de calcio y fósforo para el crecimiento. Para seniors, incluimos condroprotectores naturales y proteínas de fácil digestión para mantener la masa muscular sin sobrecargar los riñones.'
}, {
  question: '¿Qué pasa si a mi perro no le gusta?',
  answer: "Estamos tan seguros de que le encantará que ofrecemos una Garantía de 'Plato Limpio'. Si después de la transición tu perro no se lo come, te devolvemos el dinero de tu primer pedido. Sin preguntas. El 99% de los perros prefieren Petiora al pienso."
}];
export function DetailedFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container-custom max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-charcoal-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-primary-600" />
            Preguntas Frecuentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            Resolvemos tus dudas
          </h2>
          <p className="text-lg text-charcoal-600 font-light max-w-2xl mx-auto">
            Cambiar la alimentación de tu mejor amigo es una decisión
            importante. Aquí tienes las respuestas claras y transparentes que
            necesitas.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="text-lg font-bold text-charcoal-900 font-serif pr-8">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-primary-600 text-white' : 'bg-gray-100 text-charcoal-500'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <motion.div initial={false} animate={{
            height: openIndex === index ? 'auto' : 0,
            opacity: openIndex === index ? 1 : 0
          }} transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }} className="overflow-hidden">
                <div className="p-6 pt-0 text-charcoal-600 leading-relaxed border-t border-gray-50 mt-2">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>)}
        </div>

        <div className="mt-12 text-center">
          <p className="text-charcoal-600 mb-6">
            ¿Tienes más preguntas específicas sobre la salud de tu perro?
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/faq">
              <Button variant="outline" className="rounded-full px-8">
                Ver todas las FAQ
              </Button>
            </Link>
            <Link to="/contacto">
              <Button className="rounded-full px-8">
                Contactar con Nutricionista
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
}