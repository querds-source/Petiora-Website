import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Award, Stethoscope } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
const team = [{
  name: 'Dr. Carlos Méndez',
  role: 'Director Nutricional',
  specialty: 'Nutrición Clínica Canina',
  experience: '15 años',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
  quote: 'La nutrición preventiva es la mejor medicina que podemos dar a nuestros pacientes.'
}, {
  name: 'Dra. Laura Torres',
  role: 'Veterinaria Senior',
  specialty: 'Dermatología y Alergias',
  experience: '12 años',
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
  quote: 'He visto desaparecer alergias crónicas simplemente cambiando a comida real.'
}, {
  name: 'Dr. Pablo Ruiz',
  role: 'Investigación',
  specialty: 'Tecnología de Alimentos',
  experience: '10 años',
  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
  quote: 'Aplicamos la ciencia más avanzada para garantizar la seguridad de cada lote.'
}, {
  name: 'Dra. Ana Volpe',
  role: 'Nutricionista Felina',
  specialty: 'Medicina Interna',
  experience: '14 años',
  image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
  quote: 'Los gatos son carnívoros estrictos y necesitan humedad en su dieta diaria.'
}];
export function VeterinaryPartners() {
  return <section className="py-24 bg-[#FAF7F2]">
      <div className="container-custom max-w-7xl mx-auto">
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
          }} className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-charcoal-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              Expertos Reales
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
              Respaldado por <br />
              <span className="text-primary-600">la ciencia veterinaria</span>
            </h2>
            <p className="text-lg text-charcoal-600 font-light">
              No somos una empresa de marketing. Somos un equipo de veterinarios
              y nutricionistas obsesionados con la salud de tu mascota.
            </p>
          </div>

          <Button variant="outline" className="hidden md:flex">
            Conoce al equipo completo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: idx * 0.1
        }}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider opacity-90 mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-xl font-bold font-serif">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-charcoal-600 mb-4">
                    <Stethoscope className="w-4 h-4 text-primary-500" />
                    <span>{member.specialty}</span>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm italic text-charcoal-500 leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-bold text-charcoal-400">
                      {member.experience} exp.
                    </span>
                    <button className="text-charcoal-400 hover:text-primary-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full justify-center">
            Conoce al equipo completo
          </Button>
        </div>
      </div>
    </section>;
}