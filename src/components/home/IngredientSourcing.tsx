import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Leaf, ShieldCheck, ArrowRight, Fish, Beef, Wheat, Carrot } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
const ingredients = [{
  name: 'Pollo de Corral',
  origin: 'Galicia, España',
  desc: 'Criado en libertad, sin antibióticos.',
  icon: Beef,
  color: 'text-orange-600',
  bg: 'bg-orange-50'
}, {
  name: 'Pescado Azul',
  origin: 'Cantábrico, España',
  desc: 'Pesca sostenible certificada MSC.',
  icon: Fish,
  color: 'text-blue-600',
  bg: 'bg-blue-50'
}, {
  name: 'Vegetales Frescos',
  origin: 'Navarra, España',
  desc: 'Huerta local de temporada.',
  icon: Carrot,
  color: 'text-emerald-600',
  bg: 'bg-emerald-50'
}, {
  name: 'Arroz Integral',
  origin: 'Delta del Ebro',
  desc: 'Grano entero rico en fibra.',
  icon: Wheat,
  color: 'text-amber-600',
  bg: 'bg-amber-50'
}];
export function IngredientSourcing() {
  return <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-charcoal-600 text-xs font-bold mb-6 shadow-sm uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-primary-600" />
              Origen Transparente
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6 font-serif leading-tight">
              De la granja a su plato, <br />
              <span className="text-primary-600">sin intermediarios</span>
            </h2>

            <p className="text-lg text-charcoal-600 leading-relaxed mb-8 font-light">
              Conocemos a cada uno de nuestros 47 proveedores por su nombre.
              Priorizamos el producto local (Km 0) para garantizar la máxima
              frescura y reducir la huella de carbono.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {ingredients.map((item, index) => <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-800 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-charcoal-500 mb-1">
                      {item.origin}
                    </p>
                    <p className="text-[10px] text-primary-600 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>)}
            </div>

            <Link to="/sostenibilidad">
              <Button variant="outline" className="rounded-xl font-bold border-2 border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-white">
                Ver Mapa de Proveedores
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Right Visual - Map/Traceability */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-square bg-gray-100">
              <img src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=800" alt="Agricultor local con productos frescos" className="w-full h-full object-cover" />

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                    Trazabilidad Blockchain
                  </span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Escanea el código QR en cada paquete para ver el origen exacto
                  de cada ingrediente, la fecha de cosecha y los certificados de
                  calidad.
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex flex-col items-center text-center">
                <Leaf className="w-8 h-8 text-emerald-500 mb-2" />
                <div className="text-2xl font-bold text-charcoal-800">100%</div>
                <div className="text-[10px] uppercase font-bold text-charcoal-500 tracking-wider">
                  Natural
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}