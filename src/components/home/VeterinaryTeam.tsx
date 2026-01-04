import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
const team = [{
  name: 'Dra. Elena Ruiz',
  title: 'Directora Veterinaria',
  credentials: 'DVM, PhD Nutrición',
  specialty: 'Nutrición Clínica',
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
  bio: '20 años liderando investigación en nutrición animal comparada.'
}, {
  name: 'Dr. Marc Soler',
  title: 'Jefe de Formulación',
  credentials: 'DVM, MSc Bromatología',
  specialty: 'Dietas Terapéuticas',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
  bio: 'Especialista en formulación para patologías digestivas y renales.'
}, {
  name: 'Dra. Sarah Connor',
  title: 'Investigación Clínica',
  credentials: 'DVM, Dipl. ECVCN',
  specialty: 'Microbiota',
  image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
  bio: 'Pionera en estudios sobre el impacto de la dieta fresca en el microbioma.'
}, {
  name: 'Dr. James Chen',
  title: 'Control de Calidad',
  credentials: 'PhD Tecnología Alimentos',
  specialty: 'Seguridad Alimentaria',
  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
  bio: 'Experto en procesos de conservación de nutrientes y seguridad.'
}];
export function VeterinaryTeam() {
  return <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-24">
            <motion.span initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
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
          }} className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6 font-serif leading-tight">
              Ciencia real, <br />
              <span className="text-primary-600">expertos reales.</span>
            </motion.h2>

            <motion.p initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-lg text-charcoal-600 font-light mb-8 leading-relaxed">
              Cada fórmula Petiora es el resultado de años de investigación
              liderada por nuestro equipo veterinario interno. No seguimos
              modas, seguimos la evidencia clínica.
            </motion.p>

            <Link to="/nosotros">
              <Button variant="outline" className="font-bold">
                Conoce al equipo completo
              </Button>
            </Link>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            }} className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal-800 font-serif">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-primary-600 uppercase tracking-wide mb-1">
                      {member.title}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal-500 mb-2">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{member.credentials}</span>
                    </div>
                    <p className="text-sm text-charcoal-600 font-light leading-snug">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>)}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-primary-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-300" />
                </div>
                <div>
                  <div className="font-bold text-lg">Avalado por AVEPA</div>
                  <div className="text-sm text-primary-200">
                    Asociación de Veterinarios Españoles
                  </div>
                </div>
              </div>
              <div className="h-10 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-center sm:text-right">
                <div className="text-2xl font-bold font-serif">47</div>
                <div className="text-xs text-primary-200 uppercase tracking-wider">
                  Clínicas Colaboradoras
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}