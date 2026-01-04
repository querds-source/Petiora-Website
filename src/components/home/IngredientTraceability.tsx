import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Fish, Beef, Wheat, Carrot, QrCode, Clock, Leaf, Award, ArrowRight, CheckCircle2, Tractor, Sprout, Factory } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
const sources = [{
  id: 'chicken',
  name: 'Pollo de Corral',
  farm: 'Granja Los Alcores',
  location: 'Lalín, Galicia',
  distance: '< 400km',
  icon: Beef,
  coords: {
    top: '20%',
    left: '30%'
  },
  certifications: ['Bienestar Animal Welfair™', 'Sin Antibióticos'],
  story: 'La familia Rodríguez cría pollos en libertad desde 1985, con acceso diario a pastos y alimentación 100% vegetal.',
  freshness: '12h desde sacrificio',
  color: 'text-amber-600',
  bg: 'bg-amber-50'
}, {
  id: 'fish',
  name: 'Pescado Azul',
  farm: 'Cofradía de Burela',
  location: 'Costa de Lugo',
  distance: '< 200km',
  icon: Fish,
  coords: {
    top: '15%',
    left: '45%'
  },
  certifications: ['Pesca Sostenible MSC', 'Amigo del Mar'],
  story: 'Captura diaria de sardina y caballa mediante artes de pesca selectivas que respetan el fondo marino.',
  freshness: '6h desde lonja',
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  id: 'veg',
  name: 'Vegetales Frescos',
  farm: 'Huerta del Ebro',
  location: 'Tudela, Navarra',
  distance: '< 300km',
  icon: Carrot,
  coords: {
    top: '35%',
    left: '65%'
  },
  certifications: ['Agricultura Ecológica', 'Global G.A.P.'],
  story: 'Zanahorias, calabazas y espinacas recolectadas en su punto óptimo de maduración para maximizar vitaminas.',
  freshness: '24h desde cosecha',
  color: 'text-orange-600',
  bg: 'bg-orange-50'
}, {
  id: 'rice',
  name: 'Arroz Integral',
  farm: 'Cooperativa del Delta',
  location: 'Delta del Ebro',
  distance: '< 500km',
  icon: Wheat,
  coords: {
    top: '50%',
    left: '75%'
  },
  certifications: ['DOP Arroz del Delta', 'Cultivo Sostenible'],
  story: 'Variedades autóctonas cultivadas en el parque natural, respetando los ciclos de las aves migratorias.',
  freshness: 'Molido semanal',
  color: 'text-yellow-600',
  bg: 'bg-yellow-50'
}];
const timelineSteps = [{
  icon: Tractor,
  label: 'Origen',
  time: '0h',
  desc: 'Recolección en granja'
}, {
  icon: Factory,
  label: 'Cocina',
  time: '+12h',
  desc: 'Recepción y control'
}, {
  icon: Clock,
  label: 'Cocción',
  time: '+14h',
  desc: 'Sous-vide suave'
}, {
  icon: Sprout,
  label: 'Tu Casa',
  time: '+24h',
  desc: 'Envío refrigerado'
}];
export function IngredientTraceability() {
  const [activeSource, setActiveSource] = useState(sources[0]);
  return <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full paw-pattern-bg" />
      </div>

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.span initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            Del Origen a tu Comedero
          </motion.span>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-6 font-serif leading-tight">
            Transparencia Radical: <br />
            <span className="text-emerald-600 relative inline-block">
              Conoce a quien alimenta a tu mascota
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
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
          delay: 0.2
        }} className="text-lg sm:text-xl text-charcoal-600 font-light leading-relaxed text-pretty">
            No hay secretos. Escanea el código QR de tu envase y descubre el
            viaje exacto de cada ingrediente, desde la granja local hasta el
            plato. Sin intermediarios opacos, solo comida real.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Map & List */}
          <div className="lg:col-span-7 space-y-8">
            {/* Map Visualization (Abstract) */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="relative aspect-[16/9] bg-emerald-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
              <div className="absolute inset-0 opacity-20">
                {/* Abstract map SVG */}
                <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M150 100 Q 250 50 400 150 T 650 100" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                  <path d="M200 300 Q 350 350 500 250 T 700 300" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                  {/* Map outlines could go here */}
                </svg>
              </div>

              {/* Map Points */}
              {sources.map(source => <motion.button key={source.id} style={{
              top: source.coords.top,
              left: source.coords.left
            }} className={`absolute transform -translate-x-1/2 -translate-y-1/2 group/point focus:outline-none`} onClick={() => setActiveSource(source)} whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                  <div className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${activeSource.id === source.id ? 'bg-white text-emerald-600 scale-110 ring-4 ring-emerald-400/50' : 'bg-white/20 text-white hover:bg-white hover:text-emerald-600 backdrop-blur-sm'}`}>
                    <source.icon className="w-6 h-6" />
                    {activeSource.id === source.id && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></span>}
                  </div>
                  <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-xl text-xs font-bold text-charcoal-800 whitespace-nowrap transition-all duration-300 ${activeSource.id === source.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover/point:opacity-100 group-hover/point:translate-y-0'}`}>
                    {source.location}
                  </div>
                </motion.button>)}

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-emerald-500 border-4 border-white shadow-2xl flex items-center justify-center z-10 animate-pulse-slow">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white font-bold text-sm whitespace-nowrap drop-shadow-md">
                  Cocina Central Madrid
                </div>
              </div>
            </motion.div>

            {/* Source List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sources.map(source => <button key={source.id} onClick={() => setActiveSource(source)} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 text-left ${activeSource.id === source.id ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-colors ${activeSource.id === source.id ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-charcoal-400'}`}>
                    <source.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-charcoal-900">
                      {source.name}
                    </div>
                    <div className="text-xs text-charcoal-500 font-medium">
                      {source.farm}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Badge variant={activeSource.id === source.id ? 'success' : 'secondary'} size="sm">
                      {source.distance}
                    </Badge>
                  </div>
                </button>)}
            </div>
          </div>

          {/* Right Column: Detailed Info Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div key={activeSource.id} initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} exit={{
              opacity: 0,
              x: -20
            }} transition={{
              duration: 0.4
            }}>
                <Card padding="none" className="overflow-hidden border-0 shadow-2xl ring-1 ring-black/5 h-full bg-white">
                  {/* Header Image/Color */}
                  <div className={`h-32 ${activeSource.bg} relative`}>
                    <div className="absolute inset-0 opacity-10 pattern-grid-lg" />
                    <div className="absolute -bottom-10 left-8">
                      <div className="w-20 h-20 rounded-2xl bg-white shadow-lg p-4 flex items-center justify-center border border-gray-100">
                        <activeSource.icon className={`w-10 h-10 ${activeSource.color}`} />
                      </div>
                    </div>
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-white/90 backdrop-blur-sm shadow-sm" variant="outline">
                        <MapPin className="w-3 h-3 mr-1" />
                        {activeSource.location}
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-14 px-8 pb-8">
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-2 font-serif">
                      {activeSource.name}
                    </h3>
                    <p className="text-sm font-bold text-emerald-700 mb-6 flex items-center gap-2">
                      <Tractor className="w-4 h-4" />
                      Proveedor: {activeSource.farm}
                    </p>

                    <p className="text-charcoal-600 leading-relaxed mb-8 text-sm">
                      {activeSource.story}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-3">
                          Certificaciones
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeSource.certifications.map((cert, idx) => <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-bold text-charcoal-700">
                              <Award className="w-3.5 h-3.5 text-emerald-500" />
                              {cert}
                            </span>)}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-3">
                          Frescura Garantizada
                        </h4>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                          <Clock className="w-5 h-5 text-emerald-600" />
                          <div>
                            <div className="text-sm font-bold text-charcoal-900">
                              {activeSource.freshness}
                            </div>
                            <div className="text-xs text-charcoal-500">
                              Tiempo medio hasta cocina
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Carbon Footprint Comparison */}
                      <div>
                        <h4 className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-3">
                          Huella de Carbono (Transporte)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-bold text-emerald-700">
                                Petiora (Local)
                              </span>
                              <span className="font-bold text-emerald-700">
                                12g CO2
                              </span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[15%] rounded-full" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-medium text-charcoal-500">
                                Industria (Importado)
                              </span>
                              <span className="font-medium text-charcoal-500">
                                180g CO2
                              </span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-gray-300 w-[85%] rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline & QR Section */}
        <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center border-t border-gray-100 pt-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-8 font-serif">
              Cronología de la Frescura
            </h3>
            <div className="relative">
              {/* Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-100 hidden sm:block" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {timelineSteps.map((step, idx) => <div key={idx} className="relative z-10 text-center sm:text-left">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm mb-4 mx-auto sm:mx-0">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-charcoal-900 mb-1">
                      {step.label}
                    </div>
                    <div className="text-xs font-bold text-emerald-600 mb-1">
                      {step.time}
                    </div>
                    <div className="text-xs text-charcoal-500">{step.desc}</div>
                  </div>)}
              </div>
            </div>
          </div>

          <div className="bg-charcoal-900 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-white p-3 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <QrCode className="w-16 h-16 text-charcoal-900" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Pruébalo tú mismo</h4>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  Cada envase incluye un QR único. Escanéalo para ver el lote,
                  analíticas y origen.
                </p>
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white hover:text-charcoal-900">
                  Ver Ejemplo <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}