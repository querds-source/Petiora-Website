import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, Stethoscope } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
const team = [{
  name: 'Dr. Roberto Méndez',
  role: 'Director Veterinario',
  specialty: 'Nutrición Clínica',
  experience: '20 años',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
  credentials: ['PhD Nutrición', 'Diplomado ECVCN']
}, {
  name: 'Dra. Laura Sánchez',
  role: 'Veterinaria Senior',
  specialty: 'Dermatología y Alergias',
  experience: '12 años',
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
  credentials: ['Máster Dermatología', 'Certificada Fear Free']
}, {
  name: 'Dr. Carlos Vega',
  role: 'Investigación y Desarrollo',
  specialty: 'Formulación de Dietas',
  experience: '15 años',
  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
  credentials: ['PhD Tecnología Alimentos', 'Profesor Asociado']
}, {
  name: 'Dra. Elena Costa',
  role: 'Nutricionista Felina',
  specialty: 'Medicina Interna Felina',
  experience: '10 años',
  image: 'https://images.unsplash.com/photo-1594824476969-513344f23308?auto=format&fit=crop&q=80&w=300',
  credentials: ['Especialista ISFM', 'Máster Etología']
}];
export function VeterinaryTeamExpanded() {
  return <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-6">
              Comité Científico
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
              Ciencia y amor por los animales
            </h2>
            <p className="text-xl text-charcoal-600 font-light leading-relaxed">
              Cada receta es formulada, revisada y aprobada por nuestro equipo
              de expertos veterinarios para garantizar la salud de tu mascota.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
              <Stethoscope className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-bold text-charcoal-800">
                Colegiados en España
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card className="h-full p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-50 group-hover:border-primary-100 transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full shadow-md">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-charcoal-900 mb-1 font-serif">
                  {member.name}
                </h3>
                <p className="text-primary-700 font-bold text-sm mb-3">
                  {member.role}
                </p>

                <div className="w-full h-px bg-gray-100 my-4" />

                <div className="space-y-2 mb-6 w-full">
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal-500">Especialidad</span>
                    <span className="font-bold text-charcoal-800 text-right max-w-[120px]">
                      {member.specialty}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal-500">Experiencia</span>
                    <span className="font-bold text-charcoal-800">
                      {member.experience}
                    </span>
                  </div>
                </div>

                <div className="mt-auto flex gap-2 flex-wrap justify-center">
                  {member.credentials.map((cred, idx) => <span key={idx} className="text-[10px] font-bold bg-gray-50 text-charcoal-600 px-2 py-1 rounded-md border border-gray-100">
                      {cred}
                    </span>)}
                </div>

                <div className="flex gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
}