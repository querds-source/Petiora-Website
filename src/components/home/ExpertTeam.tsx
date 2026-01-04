import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, Linkedin, Award, BookOpen, Clock, Microscope, Quote, FileText, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
const team = [{
  name: 'Dra. Elena Ruiz',
  role: 'Directora Veterinaria',
  specialty: 'Nutrición Clínica',
  experience: '15+ años',
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
  credentials: ['DVM', 'PhD Nutrición Clínica (UAB)', 'Cert. FEDIAF'],
  publications: 12,
  quote: 'La nutrición es la medicina preventiva más potente que existe. Cada receta está formulada para maximizar la longevidad.',
  affiliation: 'Miembro ESVCN',
  expertise: ['Formulación', 'Patologías Digestivas']
}, {
  name: 'Dr. Marc Soler',
  role: 'Jefe de Formulación',
  specialty: 'Dietas Terapéuticas',
  experience: '12+ años',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
  credentials: ['DVM', 'MSc Bromatología', 'Profesor Asociado UAB'],
  publications: 8,
  quote: "No usamos 'ingredientes de relleno'. Cada componente tiene una función fisiológica específica y probada.",
  affiliation: 'Investigador Senior',
  expertise: ['Ingredientes Funcionales', 'Alergias']
}, {
  name: 'Dra. Sarah Connor',
  role: 'Investigación Clínica',
  specialty: 'Microbiota y Digestión',
  experience: '10+ años',
  image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
  credentials: ['DVM', 'Dipl. ECVCN', 'Investigadora'],
  publications: 24,
  quote: 'La salud empieza en el intestino. Nuestras fórmulas están diseñadas para optimizar el microbioma desde el primer día.',
  affiliation: 'Pionera Dietas BARF',
  expertise: ['Microbioma', 'Inmunonutrición']
}, {
  name: 'Dr. James Chen',
  role: 'Control de Calidad',
  specialty: 'Seguridad Alimentaria',
  experience: '18+ años',
  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
  credentials: ['PhD Tecnología Alimentos', 'HACCP Lead', 'ISO Auditor'],
  publications: 5,
  quote: 'Aplicamos estándares de seguridad humana. Si no es lo suficientemente bueno para mí, no lo es para tu perro.',
  affiliation: 'Auditor Certificado',
  expertise: ['Seguridad Alimentaria', 'Procesos']
}];
export function ExpertTeam() {
  return <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 skew-y-3 transform origin-top-left -z-10" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Stethoscope className="w-3.5 h-3.5" />
              Comité Científico
            </motion.span>
            <motion.h2 initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
              Ciencia real,{' '}
              <span className="text-primary-600">expertos reales.</span>
            </motion.h2>
            <p className="text-xl text-charcoal-600 font-light leading-relaxed">
              Cada fórmula Petiora es el resultado de años de investigación
              liderada por nuestro equipo veterinario interno. No seguimos
              modas, seguimos la evidencia clínica y los estándares FEDIAF más
              estrictos.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/contacto" className="hidden md:block">
              <Button variant="ghost" className="text-primary-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Consultar Duda
              </Button>
            </Link>
            <Link to="/nosotros" className="hidden md:block">
              <Button variant="outline" size="lg" className="font-bold">
                Conoce al equipo completo
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => <motion.div key={index} initial={{
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
              <Card className="h-full p-0 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 group border-gray-100 overflow-hidden bg-white">
                <div className="relative w-full h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-90" />

                  <div className="absolute bottom-4 left-4 text-left">
                    <h3 className="text-lg font-bold text-white mb-0.5 font-serif">
                      {member.name}
                    </h3>
                    <p className="text-primary-200 font-bold text-xs uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 w-full">
                  <div className="flex items-center gap-4 text-xs text-charcoal-500 mb-4 justify-center border-b border-gray-100 pb-4 w-full">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-primary-500" />{' '}
                      {member.experience}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <BookOpen className="w-3.5 h-3.5 text-primary-500" />{' '}
                      {member.publications} Pubs.
                    </span>
                  </div>

                  <div className="mb-6 relative">
                    <Quote className="w-6 h-6 text-primary-100 absolute -top-2 -left-1 transform -scale-x-100" />
                    <p className="text-sm text-charcoal-600 italic leading-relaxed px-4">
                      "{member.quote}"
                    </p>
                  </div>

                  <div className="mt-auto w-full">
                    <p className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-2 text-left">
                      Especialidad
                    </p>
                    <div className="flex items-center gap-2 mb-4 text-sm font-bold text-charcoal-800 bg-gray-50 p-2 rounded-lg">
                      <Microscope className="w-4 h-4 text-primary-600" />
                      {member.specialty}
                    </div>

                    <div className="flex gap-2 flex-wrap justify-start">
                      {member.credentials.map((cred, idx) => <Badge key={idx} variant="secondary" size="sm" className="bg-white border border-gray-200 text-charcoal-500 text-[10px]">
                          {cred}
                        </Badge>)}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </div>

        {/* AVEPA Endorsement */}
        <div className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-primary-900 to-charcoal-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
          {/* Decorative shine */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex items-center gap-6 relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
              <Award className="w-10 h-10 text-primary-300" />
            </div>
            <div>
              <div className="font-bold text-2xl font-serif mb-1">
                Avalado por AVEPA
              </div>
              <div className="text-primary-200 font-medium">
                Asociación de Veterinarios Españoles de Pequeños Animales
              </div>
            </div>
          </div>

          <div className="h-16 w-px bg-white/10 hidden md:block"></div>

          <div className="flex gap-8 text-center md:text-left relative z-10">
            <div>
              <div className="text-3xl font-bold font-serif mb-1">200+</div>
              <div className="text-xs text-primary-200 uppercase tracking-wider font-bold">
                Clínicas Colaboradoras
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-serif mb-1">100%</div>
              <div className="text-xs text-primary-200 uppercase tracking-wider font-bold">
                Cumplimiento FEDIAF
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Ver Certificados
            </Button>
          </div>
        </div>
      </div>
    </section>;
}