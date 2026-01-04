import React, { useState } from 'react';
import { Scale, Info } from 'lucide-react';
export function PortionCalculator() {
  const [weight, setWeight] = useState(15);
  // Simple calculation for demo
  const cups = Math.round(weight * 25 / 120 * 10) / 10;
  const grams = Math.round(weight * 25);
  return <div className="bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
          <Scale className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-charcoal-900 font-serif">
          Guía Rápida de Raciones
        </h3>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm font-bold text-charcoal-600 mb-2">
          <span>Peso: {weight} kg</span>
        </div>
        <input type="range" min="1" max="50" value={weight} onChange={e => setWeight(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-amber-500" />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>1 kg</span>
          <span>50 kg</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
          <div className="text-3xl font-bold text-charcoal-900 mb-1">
            {grams}
          </div>
          <div className="text-xs font-bold text-charcoal-500 uppercase tracking-wide">
            Gramos / día
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
          <div className="text-3xl font-bold text-charcoal-900 mb-1">
            {cups}
          </div>
          <div className="text-xs font-bold text-charcoal-500 uppercase tracking-wide">
            Tazas / día
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 text-xs text-gray-400 bg-gray-50 p-3 rounded-xl">
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <p>
          Basado en un perro adulto con actividad media. Para cachorros o perros
          muy activos, consulta nuestra calculadora avanzada.
        </p>
      </div>
    </div>;
}