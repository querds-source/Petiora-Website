import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Droplets, Wind } from 'lucide-react';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
export function SustainabilityMetrics() {
  return <section className="py-24 bg-gradient-to-br from-emerald-50/50 to-white">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              Compromiso 2025
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
              Cuidamos de tu mascota y{' '}
              <span className="text-emerald-600">del planeta</span>
            </h2>
            <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
              La industria de comida para mascotas tradicional genera toneladas
              de residuos plásticos y emisiones. Nosotros elegimos un camino
              diferente.
            </p>

            <div className="space-y-6">
              {[{
              label: 'Packaging Reciclable',
              value: 100,
              icon: Recycle
            }, {
              label: 'Ingredientes Locales',
              value: 92,
              icon: Leaf
            }, {
              label: 'Energía Renovable',
              value: 85,
              icon: Wind
            }].map((item, idx) => <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 font-bold text-charcoal-800">
                      <item.icon className="w-4 h-4 text-emerald-500" />
                      {item.label}
                    </div>
                    <span className="text-emerald-700 font-bold">
                      {item.value}%
                    </span>
                  </div>
                  <Progress value={item.value} variant="success" className="h-2" />
                </div>)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-8 bg-white shadow-xl border-none flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal-900 mb-1">
                -40%
              </h3>
              <p className="text-sm text-charcoal-500 font-medium">
                Huella de Carbono
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-xl border-none flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 mt-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal-900 mb-1">
                -60%
              </h3>
              <p className="text-sm text-charcoal-500 font-medium">
                Consumo de Agua
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-xl border-none flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4 text-amber-600">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal-900 mb-1">
                Km 0
              </h3>
              <p className="text-sm text-charcoal-500 font-medium">
                Producción Local
              </p>
            </Card>

            <Card className="p-8 bg-emerald-600 text-white shadow-xl border-none flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 mt-8">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 text-white">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-1">Zero</h3>
              <p className="text-sm text-emerald-100 font-medium">
                Residuo Plástico
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}