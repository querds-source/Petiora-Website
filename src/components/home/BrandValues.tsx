import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Search, Stethoscope, PawPrint, CheckCircle2, TrendingUp, Globe, Award, QrCode } from 'lucide-react';
const values = [{
  icon: Heart,
  title: 'Bienestar Animal',
  description: 'Trabajamos exclusivamente con proveedores certificados que garantizan una vida digna a los animales de granja.',
  metric: '100% Certificado',
  detail: 'Auditorías anuales',
  color: 'text-rose-500',
  bg: 'bg-rose-50',
  border: 'border-rose-100',
  progress: {
    label: 'Cumplimiento',
    value: 100
  }
}, {
  icon: Leaf,
  title: 'Sostenibilidad',
  description: 'Envases reciclables y cadena de suministro de kilómetro cero para minimizar nuestra huella de carbono.',
  metric: '-40% Huella CO2',
  detail: 'vs Industria estándar',
  color: 'text-emerald-500',
  bg: 'bg-emerald-50',
  border: 'border-emerald-100',
  progress: {
    label: 'Reducción',
    value: 40
  }
}, {
  icon: Stethoscope,
  title: 'Rigor Clínico',
  description: 'Fórmulas validadas por estudios de digestibilidad y análisis nutricionales constantes en laboratorio.',
  metric: '12 Estudios',
  detail: 'Investigación propia',
  color: 'text-primary-600',
  bg: 'bg-primary-50',
  border: 'border-primary-100',
  progress: {
    label: 'Validación',
    value: 100
  }
}, {
  icon: Search,
  title: 'Transparencia',
  description: 'Publicamos los análisis de laboratorio de cada lote. Sabrás exactamente qué hay en el plato de tu perro.',
  metric: 'Blockchain',
  detail: 'Trazabilidad total',
  color: 'text-blue-500',
  bg: 'bg-blue-50',
  border: 'border-blue-100',
  progress: {
    label: 'Lotes Trazados',
    value: 100
  }
}];
export function BrandValues() {
  return <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="w-full h-full paw-pattern-bg" />
      </div>

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold mb-6 shadow-sm uppercase tracking-wider">
                <PawPrint className="w-3.5 h-3.5" />
                Nuestros Valores
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6 font-serif leading-tight">
                Ética, Ciencia y <br />
                <span className="text-primary-600 relative inline-block">
                  Compromiso Real
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-secondary-300 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed max-w-lg mb-8">
                No somos solo una marca de alimentación. Somos un movimiento
                hacia una industria más honesta, transparente y científicamente
                rigurosa.
              </p>

              <div className="flex gap-4 items-center">
                <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                  Certificado B-Corp (En trámite)
                </div>
                <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                  Socio WWF
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {values.map((value, index) => {
              const Icon = value.icon;
              return <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="flex flex-col items-start group">
                    <div className={`w-14 h-14 rounded-2xl ${value.bg} ${value.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon className={`w-7 h-7 ${value.color}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-charcoal-800 text-lg mb-3 font-serif group-hover:text-primary-700 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed mb-4 min-h-[60px]">
                      {value.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full mb-4">
                      <div className="flex justify-between text-xs font-bold text-charcoal-400 mb-1 uppercase tracking-wide">
                        <span>{value.progress.label}</span>
                        <span>{value.progress.value}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{
                      width: 0
                    }} whileInView={{
                      width: `${value.progress.value}%`
                    }} transition={{
                      duration: 1,
                      delay: 0.5 + index * 0.1
                    }} className={`h-full rounded-full ${value.color.replace('text-', 'bg-')}`} />
                      </div>
                    </div>

                    <div className="mt-auto w-full pt-4 border-t border-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-charcoal-700">
                          <TrendingUp className="w-3.5 h-3.5 text-secondary-500" />
                          {value.metric}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal-400 mt-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {value.detail}
                      </div>
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>

          {/* Right Image Composition */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0">
            {/* Main Image */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white w-full max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-700 group bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" alt="Perro y gato felices con nutrición saludable" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />

              {/* Floating Stats Card */}
              <motion.div initial={{
              y: 20,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.5
            }} className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 z-20">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-charcoal-800 font-bold text-sm">
                        Impacto Global
                      </div>
                      <div className="text-xs text-charcoal-500 font-medium uppercase tracking-wider">
                        Reporte 2024
                      </div>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-amber-400 fill-current" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-charcoal-600">
                      Mascotas Saludables
                    </span>
                    <span className="font-bold text-charcoal-900">50,482</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-primary-500 h-1.5 rounded-full w-[85%]"></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-charcoal-600">
                      Satisfacción Cliente
                    </span>
                    <span className="font-bold text-charcoal-900">98.7%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-secondary-500 h-1.5 rounded-full w-[98%]"></div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-charcoal-500">
                    <QrCode className="w-3 h-3" />
                    <span>Verificar en blockchain</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-secondary-200 rounded-full blur-[80px] -z-10 opacity-50 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-200 rounded-full blur-[100px] -z-10 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>;
}