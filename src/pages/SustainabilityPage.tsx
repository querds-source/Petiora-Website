import React from 'react';
import { Leaf, Recycle, Sun, Droplets, Wind, Sprout, Globe, Truck, Heart, ShieldCheck, BarChart3, ArrowRight, CheckCircle2, TreePine, Factory, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
export function SustainabilityPage() {
  const roadmap = [{
    year: '2020',
    title: 'Inicio Zero Waste',
    desc: 'Eliminación de plásticos de un solo uso en oficinas y almacenes. Implementación de sistemas de reciclaje integral.',
    status: 'completed'
  }, {
    year: '2022',
    title: 'Energía 100% Renovable',
    desc: 'Transición completa a energía solar y eólica en nuestra fábrica de Madrid. Instalación de paneles solares propios.',
    status: 'completed'
  }, {
    year: '2023',
    title: 'Certificación Carbon Neutral',
    desc: 'Compensación del 100% de las emisiones de alcance 1 y 2 mediante proyectos de reforestación en Galicia.',
    status: 'completed'
  }, {
    year: '2024',
    title: 'Flota Eléctrica',
    desc: 'Implementación de vehículos eléctricos para reparto de última milla en grandes ciudades (Madrid, Barcelona, Valencia).',
    status: 'in-progress'
  }, {
    year: '2025',
    title: 'Packaging 100% Compostable',
    desc: 'Sustitución total de plásticos reciclables por materiales bio-basados compostables en casa.',
    status: 'planned'
  }, {
    year: '2030',
    title: 'Circularidad Total',
    desc: '100% de productos y envases provenientes de economía circular. Cero residuos a vertedero en toda la cadena.',
    status: 'planned'
  }];
  const metrics = [{
    label: 'Envases Reciclables',
    value: '98%',
    desc: 'Nuestro objetivo es llegar al 100% en 2025.',
    icon: Recycle,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  }, {
    label: 'Reducción de CO2',
    value: '450t',
    desc: 'Toneladas de CO2 evitadas este año.',
    icon: Wind,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  }, {
    label: 'Ingredientes Locales',
    value: '85%',
    desc: 'Provenientes de menos de 100km de nuestra fábrica.',
    icon: Map,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  }, {
    label: 'Árboles Plantados',
    value: '12k+',
    desc: 'En colaboración con proyectos de reforestación.',
    icon: Sprout,
    color: 'text-green-600',
    bg: 'bg-green-50'
  }];
  return <div className="bg-white min-h-screen pt-24 sm:pt-32 pb-20 overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative mb-24">
        <div className="absolute inset-0 bg-[#2C3333] z-0">
          <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2500&auto=format&fit=crop" alt="Naturaleza" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2C3333]/90"></div>
        </div>

        <div className="container-custom relative z-10 pt-20 pb-32 text-center text-white">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <span className="inline-block py-1 px-3 rounded-full bg-[#7C9885]/20 border border-[#7C9885]/50 text-[#7C9885] font-bold text-xs sm:text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
              Informe de Sostenibilidad 2024
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Un futuro más verde <br />
              <span className="text-[#7C9885]">para todos</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 px-4">
              No solo alimentamos mascotas, nutrimos el planeta. Nuestra misión
              es liderar la industria hacia un modelo regenerativo, ético y
              transparente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button size="lg" className="bg-[#7C9885] hover:bg-[#6a8573] text-white px-8 h-14 text-lg w-full sm:w-auto">
                Ver Informe Completo
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 h-14 text-lg w-full sm:w-auto">
                Nuestros Objetivos
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Metrics */}
        <div className="container-custom relative z-20 -mt-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((metric, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-gray-900/5 border border-gray-100">
                <div className={`w-12 h-12 rounded-xl ${metric.bg} ${metric.color} flex items-center justify-center mb-4`}>
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#2C3333] mb-2">
                  {metric.value}
                </div>
                <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                  {metric.label}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-snug">
                  {metric.desc}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3333] mb-6 font-serif">
              Nuestra Estrategia Integral
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
              Abordamos la sostenibilidad desde tres frentes fundamentales para
              asegurar un impacto positivo real y medible en cada etapa de
              nuestro proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {[{
            title: 'Abastecimiento Ético',
            desc: 'Trabajamos directamente con agricultores y ganaderos locales que practican agricultura regenerativa. Priorizamos ingredientes de temporada y proximidad.',
            icon: Leaf,
            stats: ['100% Carne de pasto', '0% OGM', 'Trato justo'],
            image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
          }, {
            title: 'Producción Consciente',
            desc: 'Nuestras instalaciones operan con energía 100% renovable. Utilizamos sistemas de recuperación de agua y calor para minimizar el desperdicio.',
            icon: Sun,
            stats: ['-40% Consumo agua', '0 Residuos a vertedero', 'Energía Solar'],
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
          }, {
            title: 'Logística Verde',
            desc: 'Optimizamos rutas de entrega y utilizamos vehículos eléctricos para la última milla. Compensamos el 100% de las emisiones inevitables.',
            icon: Truck,
            stats: ['Flota híbrida', 'Rutas IA', 'Packaging compacto'],
            image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=800'
          }].map((pillar, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.2
          }} className="group">
                <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden mb-6 sm:mb-8 shadow-lg">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                    <pillar.icon className="h-6 w-6 text-[#7C9885]" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C3333] mb-3 sm:mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  {pillar.desc}
                </p>
                <ul className="space-y-2">
                  {pillar.stats.map((stat, i) => <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-[#7C9885]" />
                      {stat}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Deep Dive: Packaging */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <span className="text-[#7C9885] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">
                Innovación en Materiales
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3333] mb-6 font-serif">
                Adiós al plástico virgen
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Hemos rediseñado completamente nuestro packaging. Ahora
                utilizamos materiales biodegradables, compostables y reciclados.
                Nuestro objetivo es eliminar cualquier rastro de plástico de un
                solo uso para 2025.
              </p>

              <div className="space-y-6">
                {[{
                label: 'Papel Reciclado FSC',
                val: 60,
                color: 'bg-amber-400'
              }, {
                label: 'Bioplásticos (Maíz)',
                val: 25,
                color: 'bg-emerald-400'
              }, {
                label: 'Plástico Reciclado (rPET)',
                val: 15,
                color: 'bg-blue-400'
              }].map((item, idx) => <div key={idx}>
                    <div className="flex justify-between mb-2 text-sm font-bold text-gray-700">
                      <span>{item.label}</span>
                      <span>{item.val}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div initial={{
                    width: 0
                  }} whileInView={{
                    width: `${item.val}%`
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 1,
                    delay: 0.5
                  }} className={`h-full rounded-full ${item.color}`} />
                    </div>
                  </div>)}
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-[#7C9885] rounded-full opacity-5 blur-3xl transform rotate-12"></div>
              <img src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=1000" alt="Packaging sostenible" className="relative z-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-gray-200" />
              <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 z-20 bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-[240px] sm:max-w-xs">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="p-2 sm:p-3 bg-green-50 rounded-full text-green-600">
                    <Recycle className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                      100% Reciclable
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Certificado EcoPack
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Tira este envase al contenedor azul o a tu compostadora
                  casera.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carbon Footprint & Roadmap */}
      <section className="py-16 sm:py-24 bg-[#2C3333] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Roadmap */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif">
                Hoja de Ruta 2030
              </h2>
              <div className="space-y-10 sm:space-y-12 relative pl-6 sm:pl-8 border-l border-gray-700 ml-2 sm:ml-0">
                {roadmap.map((item, idx) => <div key={idx} className="relative">
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 border-[#2C3333] ${item.status === 'completed' ? 'bg-[#7C9885]' : item.status === 'in-progress' ? 'bg-amber-400' : 'bg-gray-600'}`}></div>
                    <span className="text-xs sm:text-sm font-bold text-[#7C9885] mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>)}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="flex flex-col justify-center">
              <div className="bg-white/5 rounded-[2rem] p-6 sm:p-10 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-[#7C9885]" />
                  Impacto Acumulado
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {[{
                  label: 'Plástico Ahorrado',
                  val: '25 Ton',
                  sub: 'Equiv. a 1M de botellas'
                }, {
                  label: 'Agua Preservada',
                  val: '500k L',
                  sub: 'Suficiente para 200 piscinas'
                }, {
                  label: 'Energía Verde',
                  val: '1.2 GWh',
                  sub: 'Generada en sitio'
                }, {
                  label: 'Donaciones',
                  val: '50k €',
                  sub: 'A refugios locales'
                }].map((stat, i) => <div key={i}>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.val}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#7C9885] mb-1">
                        {stat.label}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        {stat.sub}
                      </div>
                    </div>)}
                </div>

                <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/10">
                  <p className="text-gray-400 text-xs sm:text-sm mb-6 italic">
                    "Nuestra meta no es solo ser sostenibles, sino
                    regenerativos. Devolver a la tierra más de lo que tomamos."
                  </p>
                  <div className="flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="CEO" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#7C9885]" />
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base">
                        Dra. Elena Martínez
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#7C9885]">
                        Fundadora & CEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="container-custom text-center">
          <p className="text-gray-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-8 sm:mb-10">
            Avalados por los estándares más exigentes
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['B Corp Pending', 'USDA Organic', 'Non GMO Project', 'Fair Trade Certified', 'Cruelty Free'].map((cert, i) => <div key={i} className="flex items-center gap-2 font-bold text-base sm:text-xl text-gray-800">
                <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-[#7C9885]" />
                {cert}
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#EBF2EE]">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3333] mb-6 font-serif">
            Únete al cambio
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed px-4">
            Cada vez que eliges Petiora, estás votando por un mundo más limpio,
            ético y saludable para todos los seres vivos.
          </p>
          <Button size="lg" className="bg-[#2C3333] hover:bg-black text-white px-8 sm:px-10 h-14 text-lg shadow-xl w-full sm:w-auto">
            Ver Productos Sostenibles <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>;
}
// Helper component for map icon since it was missing in imports
function Map(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>;
}