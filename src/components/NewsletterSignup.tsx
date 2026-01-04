import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2, Sparkles, Gift, Dog, Cat, Heart, Bone, ShieldCheck, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import confetti from 'canvas-confetti';
export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) {
      setError('El email es obligatorio');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, introduce un email válido');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubscribed(true);
    // Celebration effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          y: 0.6
        },
        colors: ['#2563EB', '#10B981', '#F59E0B']
      });
    } catch (e) {
      console.error('Confetti error:', e);
    }
  };
  return <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
      {/* Animated Paw Prints Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="w-full h-full paw-pattern-light animate-float" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 animate-pulse-slow" style={{
      animationDelay: '2s'
    }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold mb-8 shadow-lg hover:bg-white/20 transition-colors cursor-default">
                <Heart className="w-4 h-4 text-secondary-400 fill-current" />
                <span className="tracking-wide">
                  Únete a la Familia Petiora
                </span>
              </motion.div>

              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
                Consejos para una <br />
                <span className="text-secondary-400 relative inline-block">
                  mascota más feliz
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-400 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </motion.h2>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="text-primary-100 text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-light">
                Recibe guías de nutrición, consejos veterinarios y ofertas
                exclusivas directamente en tu bandeja de entrada. Todo lo que
                necesitas para cuidar mejor de tu mejor amigo.
              </motion.p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-5 mb-10">
                {[{
                icon: Dog,
                text: 'Guías de Nutrición',
                subtext: 'Para perros y gatos'
              }, {
                icon: Sparkles,
                text: 'Ofertas Exclusivas',
                subtext: 'Solo para suscriptores'
              }, {
                icon: Gift,
                text: '10% Descuento',
                subtext: 'En tu primera compra'
              }, {
                icon: Bone,
                text: 'Consejos Expertos',
                subtext: 'De veterinarios'
              }].map((benefit, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2 + index * 0.1
              }} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group cursor-default hover:border-white/20">
                    <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-secondary-500/30">
                      <benefit.icon className="w-6 h-6 text-secondary-400" />
                    </div>
                    <div>
                      <div className="font-bold text-base mb-1 text-white group-hover:text-secondary-200 transition-colors">
                        {benefit.text}
                      </div>
                      <div className="text-xs text-primary-200 font-medium tracking-wide">
                        {benefit.subtext}
                      </div>
                    </div>
                  </motion.div>)}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 text-sm text-primary-200 font-medium opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary-400" />
                  <span>Sin spam, prometido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary-400" />
                  <span>Cancela cuando quieras</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <AnimatePresence mode="wait">
                {!isSubscribed ? <motion.div key="form" initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-white/10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[100px] -mr-10 -mt-10 z-0 transition-transform hover:scale-110 duration-700"></div>

                    <div className="relative z-10 text-center mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary-50 text-primary-600 mb-6 shadow-sm rotate-3 hover:rotate-0 transition-transform duration-300 border border-primary-100">
                        <Mail className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold text-charcoal-900 mb-3 font-serif">
                        Suscríbete Ahora
                      </h3>
                      <p className="text-charcoal-500 text-base">
                        Más de{' '}
                        <span className="font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
                          50,000 dueños
                        </span>{' '}
                        ya reciben nuestros consejos
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-charcoal-900 mb-2 ml-1">
                          Tu Email
                        </label>
                        <div className="relative">
                          <input id="email" type="email" value={email} onChange={e => {
                        setEmail(e.target.value);
                        setError('');
                      }} placeholder="tu@email.com" className={`
                              w-full h-16 px-6 rounded-2xl bg-gray-50 border-2 
                              text-charcoal-900 placeholder:text-charcoal-400 
                              focus:ring-4 focus:ring-primary-100 transition-all outline-none text-lg
                              ${error ? 'border-rose-300 focus:border-rose-500 bg-rose-50/30' : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'}
                            `} />
                          {error && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500">
                              <ShieldCheck className="w-5 h-5" />
                            </div>}
                        </div>
                        <AnimatePresence>
                          {error && <motion.p initial={{
                        opacity: 0,
                        y: -10,
                        height: 0
                      }} animate={{
                        opacity: 1,
                        y: 0,
                        height: 'auto'
                      }} exit={{
                        opacity: 0,
                        y: -10,
                        height: 0
                      }} className="mt-2 text-sm text-rose-500 font-medium flex items-center gap-1.5 ml-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                              {error}
                            </motion.p>}
                        </AnimatePresence>
                      </div>

                      <Button type="submit" size="xl" disabled={isSubmitting} className="w-full h-16 rounded-2xl text-lg font-bold bg-primary-600 hover:bg-primary-700 shadow-xl shadow-primary-900/20 hover:shadow-2xl hover:shadow-primary-900/30 transition-all hover:scale-[1.02]">
                        {isSubmitting ? <div className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Procesando...</span>
                          </div> : <>
                            Recibir Consejos Gratis
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>}
                      </Button>

                      <p className="text-xs text-charcoal-400 text-center mt-4">
                        Al suscribirte aceptas nuestra{' '}
                        <a href="/privacidad" className="text-primary-600 hover:underline font-bold hover:text-primary-700 transition-colors">
                          política de privacidad
                        </a>
                      </p>
                    </form>
                  </motion.div> : <motion.div key="success" initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.9
              }} className="bg-white rounded-[2.5rem] p-12 shadow-2xl text-center relative overflow-hidden h-full flex flex-col justify-center items-center border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-secondary-50 opacity-50"></div>
                    <div className="relative z-10">
                      <motion.div initial={{
                    scale: 0
                  }} animate={{
                    scale: 1,
                    rotate: [0, 10, -10, 0]
                  }} transition={{
                    delay: 0.2,
                    type: 'spring',
                    stiffness: 500
                  }} className="w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-secondary-900/20 border-4 border-white">
                        <CheckCircle2 className="h-12 w-12 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-charcoal-900 mb-4 font-serif">
                        ¡Bienvenido a la familia!
                      </h3>
                      <p className="text-charcoal-600 text-lg mb-8 leading-relaxed max-w-sm mx-auto">
                        Revisa tu email para confirmar tu suscripción y recibir
                        tu código de descuento del{' '}
                        <span className="font-bold text-secondary-600 bg-secondary-50 px-2 py-0.5 rounded-md">
                          10%
                        </span>
                        .
                      </p>
                      <div className="flex items-center justify-center gap-3 text-sm text-charcoal-500 font-medium bg-gray-50 py-3 px-6 rounded-full inline-flex border border-gray-100 shadow-sm">
                        <Dog className="w-5 h-5 text-primary-600" />
                        <span>Tu mascota te lo agradecerá</span>
                        <Cat className="w-5 h-5 text-primary-600" />
                      </div>
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>;
}