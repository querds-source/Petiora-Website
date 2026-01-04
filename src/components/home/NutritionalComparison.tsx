import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle, Info } from 'lucide-react';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
export function NutritionalComparison() {
  return <section className="py-24 bg-white">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-4">
            Ciencia vs Marketing
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            La verdad está en{' '}
            <span className="text-primary-600">la etiqueta</span>
          </h2>
          <p className="text-lg text-charcoal-600 font-light">
            Comparamos científicamente nuestra comida fresca con el pienso
            premium tradicional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visual Comparison Charts */}
          <div className="space-y-8">
            <Card className="p-8 border-primary-100 bg-primary-50/30">
              <h3 className="text-xl font-bold text-charcoal-900 mb-6 font-serif">
                Biodisponibilidad de Nutrientes
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-primary-800">Petiora (Fresco)</span>
                    <span className="text-primary-800">95%</span>
                  </div>
                  <Progress value={95} variant="primary" className="h-3 bg-white" />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-charcoal-500">Pienso Premium</span>
                    <span className="text-charcoal-500">65%</span>
                  </div>
                  <Progress value={65} variant="default" className="h-3 bg-gray-200" />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-charcoal-400">Pienso Estándar</span>
                    <span className="text-charcoal-400">45%</span>
                  </div>
                  <Progress value={45} variant="default" className="h-3 bg-gray-200" />
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 text-sm text-charcoal-600 bg-white p-4 rounded-xl border border-primary-100">
                <Info className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <p>
                  La cocción a baja temperatura preserva la estructura molecular
                  de las proteínas, facilitando su absorción.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-charcoal-900 mb-6 font-serif">
                Humedad Natural
              </h3>
              <div className="flex items-end gap-8 h-48">
                <div className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="text-2xl font-bold text-primary-600">75%</div>
                  <div className="w-full bg-primary-100 rounded-t-xl relative overflow-hidden h-32 group-hover:h-36 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary-500 h-[75%] animate-pulse-slow" />
                  </div>
                  <div className="text-sm font-bold text-charcoal-900">
                    Petiora
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-2xl font-bold text-charcoal-400">
                    10%
                  </div>
                  <div className="w-full bg-gray-100 rounded-t-xl relative overflow-hidden h-32">
                    <div className="absolute bottom-0 left-0 right-0 bg-charcoal-400 h-[10%]" />
                  </div>
                  <div className="text-sm font-bold text-charcoal-500">
                    Pienso Seco
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-charcoal-500 mt-4">
                La hidratación a través de la comida previene problemas renales
                comunes.
              </p>
            </Card>
          </div>

          {/* Ingredient Table */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-100 rounded-full opacity-50 blur-xl" />

            <div className="bg-white rounded-3xl shadow-soft-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-3 bg-charcoal-900 text-white p-4 text-sm font-bold">
                <div className="col-span-1">Ingrediente</div>
                <div className="col-span-1 text-center text-primary-300">
                  Petiora
                </div>
                <div className="col-span-1 text-center text-gray-400">
                  Otros
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {[{
                name: 'Proteína',
                petiora: 'Carne Fresca',
                others: 'Harinas Cárnicas'
              }, {
                name: 'Carbohidratos',
                petiora: 'Arroz/Patata',
                others: 'Maíz/Trigo'
              }, {
                name: 'Conservantes',
                petiora: 'Romero/Tocoferoles',
                others: 'BHA/BHT'
              }, {
                name: 'Saborizantes',
                petiora: 'Caldo Natural',
                others: 'Grasas Animales'
              }, {
                name: 'Vitaminas',
                petiora: 'Frutas/Verduras',
                others: 'Sintéticas'
              }, {
                name: 'Procesado',
                petiora: 'Cocción Lenta',
                others: 'Extrusión 140°C'
              }].map((row, idx) => <div key={idx} className="grid grid-cols-3 p-4 items-center hover:bg-gray-50 transition-colors">
                    <div className="font-bold text-charcoal-800 text-sm">
                      {row.name}
                    </div>
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold border border-primary-100">
                        {row.petiora}
                      </span>
                    </div>
                    <div className="text-center text-sm text-charcoal-500">
                      {row.others}
                    </div>
                  </div>)}
              </div>

              <div className="p-6 bg-red-50 border-t border-red-100">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-800 text-sm mb-1">
                      ¿Sabías que?
                    </h4>
                    <p className="text-xs text-red-700 leading-relaxed">
                      La extrusión a alta temperatura puede crear compuestos
                      cancerígenos y destruir hasta el 60% de las vitaminas
                      naturales de los ingredientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}