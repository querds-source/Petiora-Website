import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Check, X, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
const ingredients = [{
  name: 'Carne Fresca',
  quality: 'Alta',
  digestibility: '95%',
  source: 'Natural',
  benefits: ['Proteína de alta calidad', 'Aminoácidos esenciales', 'Sabor natural'],
  isGood: true
}, {
  name: 'Harina de Carne',
  quality: 'Baja',
  digestibility: '60-70%',
  source: 'Procesado',
  benefits: ['Económico', 'Proteína concentrada'],
  isGood: false
}, {
  name: 'Maíz/Trigo',
  quality: 'Media-Baja',
  digestibility: '50-60%',
  source: 'Relleno',
  benefits: ['Energía barata'],
  isGood: false
}, {
  name: 'Batata',
  quality: 'Alta',
  digestibility: '90%',
  source: 'Natural',
  benefits: ['Carbohidrato complejo', 'Fibra', 'Vitaminas'],
  isGood: true
}];
export function IngredientComparison() {
  const [selectedLeft, setSelectedLeft] = useState(ingredients[0]);
  const [selectedRight, setSelectedRight] = useState(ingredients[1]);
  return <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <Badge variant="primary" className="mb-4">
          Herramienta Educativa
        </Badge>
        <h3 className="text-3xl font-bold font-serif text-charcoal-900 mb-2">
          Comparador de Ingredientes
        </h3>
        <p className="text-gray-500">
          Entiende la diferencia entre ingredientes premium y rellenos comunes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* VS Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 bg-charcoal-900 text-white rounded-full items-center justify-center font-bold border-4 border-white shadow-lg">
          VS
        </div>

        {/* Left Side */}
        <div className="space-y-4">
          <select className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 font-bold text-charcoal-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" value={selectedLeft.name} onChange={e => setSelectedLeft(ingredients.find(i => i.name === e.target.value) || ingredients[0])}>
            {ingredients.map(i => <option key={i.name} value={i.name}>
                {i.name}
              </option>)}
          </select>

          <Card className={`p-6 border-2 ${selectedLeft.isGood ? 'border-emerald-100 bg-emerald-50/30' : 'border-red-100 bg-red-50/30'}`}>
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-xl font-bold text-charcoal-900">
                {selectedLeft.name}
              </h4>
              {selectedLeft.isGood ? <Badge variant="success" icon={<Check className="w-3 h-3" />}>
                  Recomendado
                </Badge> : <Badge variant="danger" icon={<X className="w-3 h-3" />}>
                  Evitar
                </Badge>}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200/50">
                <span className="text-gray-500 text-sm">
                  Calidad Nutricional
                </span>
                <span className="font-bold text-charcoal-900">
                  {selectedLeft.quality}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200/50">
                <span className="text-gray-500 text-sm">Digestibilidad</span>
                <span className="font-bold text-charcoal-900">
                  {selectedLeft.digestibility}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200/50">
                <span className="text-gray-500 text-sm">Origen</span>
                <span className="font-bold text-charcoal-900">
                  {selectedLeft.source}
                </span>
              </div>

              <div className="pt-2">
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                  Beneficios / Efectos
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedLeft.benefits.map((b, i) => <span key={i} className="px-2 py-1 bg-white rounded-md text-xs font-medium border border-gray-100 shadow-sm">
                      {b}
                    </span>)}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <select className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 font-bold text-charcoal-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" value={selectedRight.name} onChange={e => setSelectedRight(ingredients.find(i => i.name === e.target.value) || ingredients[0])}>
            {ingredients.map(i => <option key={i.name} value={i.name}>
                {i.name}
              </option>)}
          </select>

          <Card className={`p-6 border-2 ${selectedRight.isGood ? 'border-emerald-100 bg-emerald-50/30' : 'border-red-100 bg-red-50/30'}`}>
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-xl font-bold text-charcoal-900">
                {selectedRight.name}
              </h4>
              {selectedRight.isGood ? <Badge variant="success" icon={<Check className="w-3 h-3" />}>
                  Recomendado
                </Badge> : <Badge variant="danger" icon={<X className="w-3 h-3" />}>
                  Evitar
                </Badge>}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200/50">
                <span className="text-gray-500 text-sm">
                  Calidad Nutricional
                </span>
                <span className="font-bold text-charcoal-900">
                  {selectedRight.quality}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200/50">
                <span className="text-gray-500 text-sm">Digestibilidad</span>
                <span className="font-bold text-charcoal-900">
                  {selectedRight.digestibility}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200/50">
                <span className="text-gray-500 text-sm">Origen</span>
                <span className="font-bold text-charcoal-900">
                  {selectedRight.source}
                </span>
              </div>

              <div className="pt-2">
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                  Beneficios / Efectos
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedRight.benefits.map((b, i) => <span key={i} className="px-2 py-1 bg-white rounded-md text-xs font-medium border border-gray-100 shadow-sm">
                      {b}
                    </span>)}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>;
}