import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, ChefHat, MapPin, Check, ArrowRight, Users, Award, ShieldCheck, Leaf } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { EnhancedScrollReveal } from '../common/EnhancedScrollReveal';
const tabs = [{
  id: 'process',
  label: 'Proceso Artesanal',
  icon: ChefHat,
  color: 'bg-orange-50 text-orange-600'
}, {
  id: 'science',
  label: 'Ciencia y Nutrición',
  icon: Microscope,
  color: 'bg-blue-50 text-blue-600'
}, {
  id: 'traceability',
  label: 'Trazabilidad',
  icon: MapPin,
  color: 'bg-emerald-50 text-emerald-600'
}, {
  id: 'team',
  label: 'Equipo Veterinario',
  icon: Users,
  color: 'bg-purple-50 text-purple-600'
}];
const content = {
  process: {
    title: 'Cocina lenta, nutrición máxima',
    description: 'Nuestro proceso de cocción al vacío a baja temperatura (Sous-Vide) preserva el 98% de los nutrientes originales, a diferencia de la extrusión a alta temperatura del pienso industrial.',
    points: ['Ingredientes frescos troceados a mano', 'Cocción suave a 80°C durante 45 minutos', 'Envasado al vacío inmediato', 'Abatimiento de temperatura para seguridad', 'Sin procesos industriales agresivos', 'Textura y sabor natural preservados'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000',
    stat: {
      value: '98%',
      label: 'Nutrientes Preservados'
    },
    badges: ['Sous-Vide', 'Grado Humano'],
    metric: 'Temp. Máx: 80°C'
  },
  science: {
    title: 'Formulado por veterinarios',
    description: 'Cada receta es desarrollada por nuestro equipo de nutricionistas clínicos siguiendo los estándares FEDIAF y NRC. Realizamos análisis constantes para garantizar el perfil nutricional exacto.',
    points: ['Balance perfecto Calcio/Fósforo (1.2:1)', 'Perfil de aminoácidos completo', 'Digestibilidad superior al 90%', 'Pruebas de palatabilidad éticas', 'Análisis de laboratorio por lote', 'Formulación basada en evidencia'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    stat: {
      value: '100%',
      label: 'Cumplimiento FEDIAF'
    },
    badges: ['FEDIAF', 'NRC Compliant'],
    metric: 'Digestibilidad: >90%'
  },
  traceability: {
    title: 'Del origen a tu puerta',
    description: 'Sabemos exactamente de dónde viene cada ingrediente. Trabajamos con proveedores locales certificados y auditamos cada lote para garantizar la seguridad alimentaria.',
    points: ['Código QR en cada paquete', 'Proveedores Km 0 certificados', 'Análisis microbiológico por lote', 'Transparencia total de ingredientes', 'Auditorías de bienestar animal', 'Sin intermediarios opacos'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000',
    stat: {
      value: 'Km 0',
      label: 'Origen Local'
    },
    badges: ['Sostenible', 'Local'],
    metric: 'Huella CO2: -40%'
  },
  team: {
    title: 'Expertos en salud animal',
    description: 'Nuestro equipo está liderado por veterinarios nutricionistas con décadas de experiencia en clínica y formulación de alimentos.',
    points: ['Dirección veterinaria colegiada', 'Nutricionistas especializados', 'Tecnólogos de alimentos', 'Asesoría continua a clientes', 'Investigación y desarrollo constante', 'Pasión por los animales'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000',
    stat: {
      value: '15+',
      label: 'Años de Experiencia'
    },
    badges: ['Colegiados', 'Especialistas'],
    metric: 'Publicaciones: 40+'
  }
};
export function QualityShowcase() {
  const [activeTab, setActiveTab] = useState<'process' | 'science' | 'traceability' | 'team'>('process');
  return <section className="py-24 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-50/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <EnhancedScrollReveal>
            <Badge variant="primary" className="mb-4">
              Calidad sin compromisos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif tracking-tight">
              Transparencia total en <br />
              <span className="text-primary-600 relative inline-block">
                cada receta
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-charcoal-600 font-light">
              Elevamos el estándar de la alimentación para mascotas combinando
              ciencia veterinaria, ingredientes de grado humano y procesos
              transparentes.
            </p>
          </EnhancedScrollReveal>
        </div>

        {/* Tabs Navigation */}
        <EnhancedScrollReveal delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className="relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
              {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-charcoal-900 rounded-full shadow-lg" transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.6
          }} />}
              <span className={`relative z-10 flex items-center gap-2 ${activeTab === tab.id ? 'text-white' : 'text-charcoal-600 hover:text-charcoal-900'}`}>
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-primary-400' : 'text-gray-400'}`} />
                {tab.label}
              </span>
            </button>)}
        </EnhancedScrollReveal>

        {/* Content Area */}
        <div className="relative min-h-[600px] lg:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.4,
            ease: 'easeOut'
          }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <div className="flex gap-2 mb-4">
                    {content[activeTab].badges.map((badge, idx) => <span key={idx} className="px-3 py-1 rounded-md bg-gray-100 text-charcoal-600 text-xs font-bold uppercase tracking-wider">
                        {badge}
                      </span>)}
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal-900 mb-4 font-serif">
                    {content[activeTab].title}
                  </h3>
                  <p className="text-lg text-charcoal-600 leading-relaxed font-light">
                    {content[activeTab].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content[activeTab].points.map((point, idx) => <motion.div key={idx} initial={{
                  opacity: 0,
                  x: -10
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.2 + idx * 0.05
                }} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary-700" strokeWidth={3} />
                      </div>
                      <span className="text-charcoal-800 text-sm font-medium leading-snug">
                        {point}
                      </span>
                    </motion.div>)}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-gray-100 mt-6">
                  <Button variant="primary" className="group shadow-lg shadow-primary-600/20">
                    Saber más
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="flex items-center gap-8 pl-0 sm:pl-6 sm:border-l border-gray-200">
                    <div className="flex flex-col">
                      <div className="text-4xl font-bold text-charcoal-900 font-serif">
                        {content[activeTab].stat.value}
                      </div>
                      <div className="text-xs font-bold text-charcoal-500 uppercase leading-tight">
                        {content[activeTab].stat.label}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-bold text-primary-600 font-serif">
                        {content[activeTab].metric}
                      </div>
                      <div className="text-xs font-bold text-charcoal-500 uppercase leading-tight">
                        Métrica Clave
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-primary-600/5 rounded-[2.5rem] transform rotate-3 scale-105" />
                <Card className="relative overflow-hidden rounded-[2rem] shadow-2xl border-none aspect-[4/3] group">
                  <img src={content[activeTab].image} alt={content[activeTab].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="white" className="backdrop-blur-md bg-white/90 shadow-sm">
                        <ShieldCheck className="w-3 h-3 mr-1.5 text-primary-600" />
                        Garantía de Calidad
                      </Badge>
                      <Badge variant="white" className="backdrop-blur-md bg-white/90 shadow-sm">
                        <Leaf className="w-3 h-3 mr-1.5 text-emerald-600" />
                        100% Natural
                      </Badge>
                    </div>
                  </div>
                </Card>

                {/* Floating decorative elements */}
                <motion.div animate={{
                y: [0, -10, 0]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }} className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                  <Award className="w-8 h-8 text-primary-500" />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>;
}