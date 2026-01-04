import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, ArrowRight, HelpCircle } from 'lucide-react';
import { PageTransition } from '../components/common/PageTransition';
import { ContactForm } from '../components/ContactForm';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
const contactMethods = [{
  icon: Mail,
  title: 'Escríbenos',
  detail: 'hola@petiora.com',
  sub: 'Respondemos en < 24h',
  action: 'Enviar email',
  link: 'mailto:hola@petiora.com',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}, {
  icon: MessageCircle,
  title: 'Chat Veterinario',
  detail: 'Chat en vivo',
  sub: 'Disponible para clientes',
  action: 'Iniciar chat',
  link: '#',
  color: 'text-amber-600',
  bg: 'bg-amber-50'
}];
const faqs = [{
  question: '¿Dónde está mi pedido?',
  answer: 'Puedes seguir tu pedido en tiempo real desde tu área de cliente o usando el enlace de seguimiento que enviamos a tu email cuando el pedido sale de nuestras cocinas.'
}, {
  question: '¿Hacéis envíos a Canarias?',
  answer: 'Actualmente realizamos envíos a toda la Península y Baleares. Estamos trabajando para llegar a Canarias, Ceuta y Melilla muy pronto.'
}, {
  question: '¿Puedo cambiar mi suscripción?',
  answer: 'Sí, tienes total flexibilidad. Puedes pausar, cancelar o modificar las recetas y frecuencia de tu suscripción en cualquier momento desde tu perfil.'
}];
export function ContactPage() {
  return <PageTransition>
      <div className="bg-[#FAF9F6] min-h-screen pb-20">
        {/* Hero Section */}
        <section className="bg-charcoal-900 text-white pt-32 pb-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Estamos aquí para ayudarte
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              ¿Tienes dudas sobre la nutrición de tu mascota o sobre tu pedido?
              Nuestro equipo de expertos está listo para escucharte.
            </p>
          </div>
        </section>

        <div className="container-custom -mt-12 relative z-20">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-2xl mx-auto">
            {contactMethods.map((method, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: idx * 0.1
          }}>
                <Card className="h-full flex flex-col items-center text-center p-8 hover:shadow-soft-xl transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${method.bg} flex items-center justify-center mb-6`}>
                    <method.icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-charcoal-700 mb-1">
                    {method.detail}
                  </p>
                  <p className="text-sm text-charcoal-500 mb-6">{method.sub}</p>
                  <Button variant="outline" className="mt-auto w-full" onClick={() => window.location.href = method.link}>
                    {method.action}
                  </Button>
                </Card>
              </motion.div>)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-serif text-charcoal-900 mb-6">
                Envíanos un mensaje
              </h2>
              <p className="text-charcoal-600 mb-8">
                Completa el formulario y te responderemos en menos de 24 horas
                laborables.
              </p>
              <ContactForm />
            </div>

            {/* FAQ & Office Info */}
            <div className="space-y-12">
              {/* FAQ Preview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold font-serif text-charcoal-900">
                    Preguntas Frecuentes
                  </h2>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => <Accordion key={idx} title={faq.question} content={faq.answer} />)}
                </div>
                <Link to="/faq" className="inline-flex items-center gap-2 text-primary-600 font-bold mt-4 hover:text-primary-800 transition-colors">
                  Ver todas las preguntas <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Office Location */}
              <Card className="p-0 overflow-hidden border-none shadow-lg">
                <div className="h-48 bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Office Map" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="primary" className="shadow-xl">
                      <MapPin className="w-4 h-4 mr-2" />
                      Ver en Google Maps
                    </Button>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-lg mb-2">Oficinas Centrales</h3>
                  <p className="text-charcoal-600 text-sm mb-4">
                    Calle de la Ciencia 12, Parque Tecnológico
                    <br />
                    28000 Madrid, España
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                    <Clock className="w-4 h-4" />
                    Lunes - Viernes: 9:00 - 18:00
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>;
}