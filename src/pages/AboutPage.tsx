import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Users, Award, Heart, Target, Lightbulb, TrendingUp, CheckCircle2, ShieldCheck, Globe, Leaf } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { TeamMember } from '../components/about/TeamMember';
import { Timeline } from '../components/about/Timeline';
import { Certifications } from '../components/about/Certifications';
import { FacilityTour } from '../components/about/FacilityTour';
import { OurProcess } from '../components/about/OurProcess';
import { ImpactDashboard } from '../components/about/ImpactDashboard';
import { teamMembers } from '../data/company';
export function AboutPage() {
  const coreValues = [{
    icon: Heart,
    title: 'Bienestar Animal',
    description: 'Cada decisión prioriza la salud y felicidad de las mascotas por encima de la rentabilidad.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100'
  }, {
    icon: Target,
    title: 'Transparencia Radical',
    description: 'Tienes derecho a saber qué come tu mascota. Sin letra pequeña ni ingredientes ocultos.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  }, {
    icon: Lightbulb,
    title: 'Innovación Científica',
    description: 'Invertimos el 15% de nuestros beneficios en I+D para mejorar continuamente nuestras fórmulas.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100'
  }, {
    icon: TrendingUp,
    title: 'Sostenibilidad Real',
    description: 'Ingredientes de km 0, energías renovables y envases 100% reciclables.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100'
  }];
  return <div className="bg-white min-h-screen font-sans">
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAF7F2]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full paw-pattern-bg" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-200/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none animate-pulse-slow" style={{
        animationDelay: '1s'
      }}></div>

        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <Badge variant="primary" size="md" className="mb-6 shadow-sm">
                Nuestra Misión
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-charcoal-900 mb-8 font-serif leading-[1.1]">
                Revolucionando la <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 relative inline-block">
                  salud animal
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-charcoal-600 leading-relaxed mb-10 font-light max-w-xl text-pretty">
                Nacimos con una creencia simple pero radical:{' '}
                <strong className="font-semibold text-charcoal-900">
                  las mascotas merecen comer comida real
                </strong>
                , no pienso procesado. Combinamos ciencia veterinaria con
                ingredientes de grado humano.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="xl" className="rounded-full px-8 shadow-xl shadow-primary-600/20 hover:shadow-primary-600/30 font-bold" pulse>
                  Ver Nuestros Planes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl" className="rounded-full px-8 bg-white hover:bg-gray-50 border-2 font-bold">
                  <Download className="mr-2 h-5 w-5" />
                  Dossier Corporativo
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] lg:aspect-square transform rotate-2 hover:rotate-0 transition-transform duration-700 group">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1200" alt="Equipo fundador de Petiora con sus mascotas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-bold text-lg mb-1">Fundadores & "CEOs"</p>
                  <p className="text-sm opacity-90">
                    Ana, Carlos y sus 3 perros rescatados
                  </p>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2rem] shadow-soft-xl max-w-xs border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                      Equipo Experto
                    </p>
                    <p className="text-xl font-bold text-charcoal-900">
                      45+ Profesionales
                    </p>
                  </div>
                </div>
                <p className="text-sm text-charcoal-600 leading-snug">
                  Veterinarios, nutricionistas e ingenieros agrónomos unidos por
                  una pasión común.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-12 px-4 lg:px-8 -mt-12 relative z-20">
        <div className="container-custom max-w-7xl mx-auto">
          <ImpactDashboard />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" size="md" className="mb-4">
              Nuestros Valores
            </Badge>
            <h2 className="text-4xl font-bold text-charcoal-900 mb-4 font-serif">
              Lo que nos define
            </h2>
            <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
              Cuatro pilares fundamentales que guían cada decisión que tomamos
              en Petiora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card interactive className={`p-8 h-full border ${value.border} hover:shadow-soft-xl transition-all duration-300`}>
                  <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-6 shadow-sm`}>
                    <value.icon className={`w-7 h-7 ${value.color}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 lg:py-32 bg-[#FAF7F2]">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="primary" size="md" className="mb-4 shadow-sm">
              Nuestra Historia
            </Badge>
            <h2 className="text-4xl font-bold text-charcoal-900 mb-4 font-serif">
              De una cocina casera a revolucionar Europa
            </h2>
            <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
              Un viaje de 6 años impulsado por el amor a los animales y la
              ciencia.
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Our Process */}
      <OurProcess />

      {/* Facility Tour */}
      <FacilityTour />

      {/* Team Section */}
      <section id="equipo" className="py-20 lg:py-32 bg-[#FAF7F2]">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" size="md" className="mb-4">
              El Equipo
            </Badge>
            <h2 className="text-4xl font-bold text-charcoal-900 mb-4 font-serif">
              Mentes Brillantes, Corazones Animales
            </h2>
            <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
              Nuestro comité científico está formado por los mejores
              especialistas en nutrición clínica veterinaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <TeamMember member={member} />
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="calidad" className="py-20 lg:py-32 bg-white">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Badge variant="success" size="md" className="mb-6 shadow-sm">
                Calidad Certificada
              </Badge>
              <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-serif">
                Calidad Obsesiva, <br />
                <span className="text-primary-600">
                  Certificada Internacionalmente
                </span>
              </h2>
              <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                Nos sometemos voluntariamente a las auditorías más estrictas del
                sector alimentario humano para garantizar que tu mascota recibe
                lo mejor.
              </p>
              <div className="flex flex-col gap-4">
                {[{
                text: 'Certificación ISO 22000 de Seguridad Alimentaria',
                icon: ShieldCheck
              }, {
                text: 'Auditorías sorpresa trimestrales',
                icon: CheckCircle2
              }, {
                text: 'Trazabilidad blockchain de cada ingrediente',
                icon: Globe
              }, {
                text: 'Ingredientes 100% naturales y sostenibles',
                icon: Leaf
              }].map((item, i) => <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-charcoal-700 font-medium">
                      {item.text}
                    </span>
                  </div>)}
              </div>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 shadow-soft-lg">
              <Certifications />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Animated blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none animate-pulse-slow" style={{
        animationDelay: '1s'
      }}></div>

        <div className="container-custom max-w-4xl mx-auto text-center relative z-10 text-white px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="space-y-8">
            <Badge variant="outline" size="lg" className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
              Únete a la Revolución
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
              ¿Listo para cambiar su vida?
            </h2>

            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Únete a las más de{' '}
              <strong className="text-white font-bold">50,000 familias</strong>{' '}
              que ya han dado el paso hacia una nutrición real y consciente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-50 border-none shadow-2xl rounded-full px-10 py-6 text-lg font-bold hover:scale-105 transition-all">
                Crear Plan Nutricional
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg font-bold backdrop-blur-sm">
                Hablar con un Experto
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-primary-100 border-t border-white/10 mt-12">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>98% Satisfacción</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>50k+ Familias</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
}