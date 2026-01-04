import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
const partners = [{
  name: 'Clínica Vet. San Antón',
  location: 'Madrid Centro',
  image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=200'
}, {
  name: 'Hospital Vet. Diagonal',
  location: 'Barcelona',
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
}, {
  name: 'Centro Vet. Valencia',
  location: 'Valencia',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
}];
export function PartnerVeterinarians() {
  return <section className="py-20 bg-white">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary-50 to-emerald-50 rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden border border-primary-100">
          {/* Map Background Illustration (Abstract) */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2D4A3E" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,33.2C61,44.9,51.1,55.4,39.6,63.7C28.1,72,15,78.1,0.8,76.7C-13.4,75.3,-25.8,66.4,-38.6,58.6C-51.4,50.8,-64.6,44.1,-73.4,33.5C-82.2,22.9,-86.6,8.4,-84.6,-5.1C-82.6,-18.6,-74.2,-31.1,-64.1,-41.8C-54,-52.5,-42.2,-61.4,-29.8,-69.5C-17.4,-77.6,-4.4,-84.9,4.2,-92.2L12.8,-99.5" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <Stethoscope className="w-3.5 h-3.5" />
                Red Profesional
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 font-serif leading-tight">
                Recomendado por más de <br />
                <span className="text-primary-600">200 Veterinarios</span>
              </h2>
              <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                No solo lo decimos nosotros. Clínicas veterinarias de toda
                España prescriben Petiora como coadyuvante en tratamientos de
                alergias, problemas digestivos y recuperación post-quirúrgica.
              </p>

              <ul className="space-y-4 mb-10">
                {['Fórmulas revisadas por comité científico', 'Resultados clínicos documentados', 'Transparencia total en ingredientes'].map((item, idx) => <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-charcoal-700 font-medium">
                      {item}
                    </span>
                  </li>)}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-lg shadow-primary-900/20">
                  Ver Mapa de Clínicas
                </Button>
                <Button variant="outline" size="lg" className="bg-white border-primary-200 text-primary-700 hover:bg-primary-50">
                  Soy Veterinario
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10">
                <h3 className="font-bold text-charcoal-900 mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  Clínicas Destacadas
                </h3>
                <div className="space-y-6">
                  {partners.map((partner, index) => <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group cursor-pointer">
                      <img src={partner.image} alt={partner.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <h4 className="font-bold text-charcoal-900 text-sm group-hover:text-primary-700 transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-xs text-charcoal-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" /> {partner.location}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-600 transition-colors" />
                    </div>)}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs text-charcoal-500">
                    Y 197 clínicas más en toda la península
                  </p>
                </div>
              </div>

              {/* Decorative elements behind card */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-100 rounded-full blur-xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-full blur-xl opacity-60 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}