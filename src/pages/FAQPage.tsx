import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, Truck, Package, CreditCard, RefreshCw, Heart, User } from 'lucide-react';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
const faqCategories = [{
  id: 'products',
  title: 'Producto y Nutrición',
  icon: Package,
  questions: [{
    id: 'p1',
    title: '¿Cómo realizo la transición a la comida Petiora?',
    content: 'Recomendamos una transición gradual de 7 días para evitar problemas digestivos. Día 1-2: 25% Petiora, 75% comida anterior. Día 3-4: 50% de cada. Día 5-6: 75% Petiora. Día 7: 100% Petiora. Si tu mascota tiene el estómago sensible, extiende este proceso a 10-14 días.'
  }, {
    id: 'p2',
    title: '¿Es adecuada para cachorros o gatitos?',
    content: 'Sí, tenemos fórmulas específicas para crecimiento (PuppyGrow y KittenStart) que cubren las altas necesidades de energía, proteínas y calcio de esta etapa. Consulta la etiqueta para ver la guía de alimentación según la edad y peso esperado de adulto.'
  }, {
    id: 'p3',
    title: '¿Qué significa "Grado Humano"?',
    content: 'Significa que todos nuestros ingredientes provienen de la cadena de alimentación humana y son aptos para el consumo de personas antes de ser procesados para mascotas. No utilizamos subproductos, harinas cárnicas de baja calidad ni desperdicios.'
  }, {
    id: 'p4',
    title: '¿Cómo debo conservar el alimento?',
    content: 'El alimento seco debe guardarse en un lugar fresco y seco, preferiblemente en su envase original cerrado o en un contenedor hermético. La comida húmeda, una vez abierta, debe refrigerarse y consumirse en 48 horas.'
  }, {
    id: 'p5',
    title: 'Mi mascota tiene alergias, ¿qué puedo darle?',
    content: 'Contamos con una línea hipoalergénica y monoproteica (una sola fuente de carne) ideal para dietas de descarte. Nuestras fórmulas "Grain-Free" de Salmón o Conejo son las más recomendadas para perros con sensibilidades.'
  }, {
    id: 'p6',
    title: '¿Por qué cocináis a baja temperatura?',
    content: 'La cocción lenta a baja temperatura (<82°C) elimina patógenos peligrosos pero preserva la estructura de las proteínas y vitaminas que se destruirían con la extrusión a alta temperatura de los piensos convencionales.'
  }]
}, {
  id: 'shipping',
  title: 'Envíos y Entregas',
  icon: Truck,
  questions: [{
    id: 's1',
    title: '¿Cuánto tardará en llegar mi pedido?',
    content: 'Los pedidos realizados antes de las 14:00 se envían el mismo día. El tiempo de entrega en Península es de 24-48 horas laborables. Para Baleares son 48-72 horas.'
  }, {
    id: 's2',
    title: '¿Cuáles son los gastos de envío?',
    content: 'El envío es GRATUITO en pedidos superiores a 49€. Para pedidos inferiores, el coste es de 4,99€ en Península y 6,99€ en Baleares.'
  }, {
    id: 's3',
    title: '¿Hacéis envíos a Canarias, Ceuta o Melilla?',
    content: 'Actualmente no realizamos envíos a Canarias, Ceuta o Melilla debido a las dificultades logísticas para garantizar la cadena de frío y frescura de nuestros productos naturales.'
  }, {
    id: 's4',
    title: '¿Cómo puedo seguir mi pedido?',
    content: 'En cuanto tu pedido salga de nuestro almacén, recibirás un email con el número de seguimiento y un enlace directo a la web del transportista.'
  }, {
    id: 's5',
    title: '¿Qué pasa si no estoy en casa?',
    content: 'La empresa de transporte intentará la entrega una segunda vez o te contactará para acordar una nueva fecha. También puedes solicitar la entrega en un punto de recogida cercano.'
  }]
}, {
  id: 'returns',
  title: 'Devoluciones y Garantía',
  icon: RefreshCw,
  questions: [{
    id: 'r1',
    title: '¿Qué es la Garantía de Satisfacción de 30 días?',
    content: 'Si a tu mascota no le gusta nuestra comida o no ves los resultados esperados en 30 días, te devolvemos el dinero de tu primera compra. Queremos que pruebes Petiora sin riesgos.'
  }, {
    id: 'r2',
    title: '¿Cómo solicito una devolución?',
    content: 'Escríbenos a atencion@petiora.co con tu número de pedido. Te enviaremos una etiqueta de devolución prepagada. Una vez recibamos el producto, procesaremos el reembolso en 24-48h.'
  }, {
    id: 'r3',
    title: '¿Tengo que pagar los gastos de devolución?',
    content: 'No, las devoluciones son gratuitas para ti si el producto está defectuoso o si aplicas nuestra Garantía de Satisfacción en tu primera compra.'
  }]
}, {
  id: 'account',
  title: 'Mi Cuenta y Suscripciones',
  icon: User,
  questions: [{
    id: 'a1',
    title: '¿Cómo funciona la suscripción?',
    content: 'Eliges los productos y la frecuencia (cada 2, 4, 6 u 8 semanas). Nosotros te lo enviamos automáticamente con un 15% de descuento permanente. Puedes pausar, modificar o cancelar en cualquier momento desde tu área de cliente.'
  }, {
    id: 'a2',
    title: '¿Tengo permanencia en la suscripción?',
    content: 'Ninguna. Puedes cancelar después del primer pedido si lo deseas. Sin preguntas ni complicaciones.'
  }, {
    id: 'a3',
    title: 'He olvidado mi contraseña',
    content: 'Ve a "Iniciar Sesión" y pulsa en "¿Olvidaste tu contraseña?". Te enviaremos un email para restablecerla de forma segura.'
  }]
}];
export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('products');
  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => q.title.toLowerCase().includes(searchQuery.toLowerCase()) || q.content.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(cat => cat.questions.length > 0);
  return <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-charcoal-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            ¿Cómo podemos ayudarte?
          </h1>
          <p className="text-xl text-charcoal-300 mb-10 max-w-2xl mx-auto">
            Encuentra respuestas rápidas sobre nuestros productos, envíos y
            servicios.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input type="text" placeholder="Buscar una pregunta (ej: envío, ingredientes, devolución...)" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-14 pr-6 py-5 rounded-2xl text-charcoal-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary-500/30 text-lg shadow-xl" />
          </div>
        </div>
      </div>

      <div className="container-custom max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 space-y-2">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 sticky top-32">
              <h3 className="font-bold text-charcoal-900 mb-4 px-2 uppercase text-xs tracking-wider">
                Categorías
              </h3>
              {faqCategories.map(cat => <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left mb-1 ${activeCategory === cat.id ? 'bg-primary-50 text-primary-700 font-bold' : 'text-charcoal-600 hover:bg-gray-50'}`}>
                  <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? 'text-primary-600' : 'text-gray-400'}`} />
                  {cat.title}
                </button>)}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-8">
            {filteredCategories.length > 0 ? filteredCategories.map(cat => <div key={cat.id} id={cat.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-charcoal-900 font-serif">
                      {cat.title}
                    </h2>
                  </div>

                  <Accordion items={cat.questions.map(q => ({
              id: q.id,
              title: q.title,
              content: q.content
            }))} variant="bordered" />
                </div>) : <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                  No encontramos resultados
                </h3>
                <p className="text-charcoal-500">
                  Intenta con otros términos o contáctanos directamente.
                </p>
                <Link to="/contacto">
                  <Button variant="outline" className="mt-6">
                    Ir a Contacto
                  </Button>
                </Link>
              </div>}

            {/* Contact CTA */}
            <div className="bg-primary-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4">
                  ¿No encuentras lo que buscas?
                </h3>
                <p className="text-primary-100 mb-8 max-w-xl mx-auto text-lg">
                  Nuestro equipo de atención al cliente (y amantes de los
                  animales) está listo para ayudarte.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contacto">
                    <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50 border-none w-full sm:w-auto">
                      Contactar Soporte
                    </Button>
                  </Link>
                  <a href="https://wa.me/34666237446">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                      WhatsApp Directo
                    </Button>
                  </a>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}