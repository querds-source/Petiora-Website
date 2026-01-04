import React, { useState } from 'react';
import { Product } from '../../utils/types';
import { Utensils, AlertCircle, Calendar, Dog, Cat, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
interface FeedingGuideProps {
  product: Product;
}
export function FeedingGuide({
  product
}: FeedingGuideProps) {
  const [weight, setWeight] = useState(10);
  const [activity, setActivity] = useState<'low' | 'normal' | 'high'>('normal');
  const isDog = product.category === 'dog-food';
  // Simple calculation logic (mock)
  const calculatePortion = (w: number, act: string) => {
    let base = w * 15; // base grams per kg
    if (act === 'low') base *= 0.8;
    if (act === 'high') base *= 1.2;
    return Math.round(base);
  };
  const portion = calculatePortion(weight, activity);
  // Determine pet size category for icon
  const getPetSizeIcon = () => {
    if (!isDog) return <Cat className="w-8 h-8 text-primary-600" />;
    if (weight < 10) return <Dog className="w-6 h-6 text-primary-600" />;
    if (weight < 25) return <Dog className="w-8 h-8 text-primary-600" />;
    return <Dog className="w-10 h-10 text-primary-600" />;
  };
  return <div className="space-y-8">
      {/* Calculator Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-primary-50/50 px-6 py-4 border-b border-primary-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-primary-600" />
            <h4 className="font-bold text-charcoal-800">
              Calculadora de Ración Diaria
            </h4>
          </div>
          <div className="text-xs font-bold text-primary-700 bg-primary-100 px-2 py-1 rounded-md uppercase tracking-wider">
            {isDog ? 'Perros' : 'Gatos'}
          </div>
        </div>

        <div className="p-6 lg:p-8 space-y-8">
          {/* Weight Slider */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="font-bold text-charcoal-800 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                  {getPetSizeIcon()}
                </div>
                Peso de tu mascota
              </label>
              <div className="font-bold text-2xl text-primary-700 font-serif">
                {weight}{' '}
                <span className="text-sm font-sans text-charcoal-500">kg</span>
              </div>
            </div>

            <div className="relative h-12 flex items-center">
              <input type="range" min="1" max={isDog ? '60' : '15'} step="0.5" value={weight} onChange={e => setWeight(parseFloat(e.target.value))} className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-primary-600 hover:accent-primary-700 transition-all" />
            </div>

            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span>1 kg</span>
              <span>{isDog ? '60 kg' : '15 kg'}</span>
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="font-bold text-charcoal-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                <Activity className="w-5 h-5 text-orange-500" />
              </div>
              Nivel de Actividad
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[{
              id: 'low',
              label: 'Baja',
              desc: 'Sedentario',
              color: 'hover:border-blue-400 hover:bg-blue-50',
              activeColor: 'border-blue-500 bg-blue-50 ring-1 ring-blue-500',
              textColor: 'text-blue-700'
            }, {
              id: 'normal',
              label: 'Media',
              desc: 'Paseos diarios',
              color: 'hover:border-primary-400 hover:bg-primary-50',
              activeColor: 'border-primary-500 bg-primary-50 ring-1 ring-primary-500',
              textColor: 'text-primary-700'
            }, {
              id: 'high',
              label: 'Alta',
              desc: 'Deporte/Juego',
              color: 'hover:border-orange-400 hover:bg-orange-50',
              activeColor: 'border-orange-500 bg-orange-50 ring-1 ring-orange-500',
              textColor: 'text-orange-700'
            }].map(level => <button key={level.id} onClick={() => setActivity(level.id as any)} className={`
                    p-4 rounded-xl border-2 text-left transition-all duration-200
                    ${activity === level.id ? level.activeColor : `border-gray-100 ${level.color}`}
                  `}>
                  <div className={`font-bold text-sm mb-1 ${activity === level.id ? level.textColor : 'text-charcoal-700'}`}>
                    {level.label}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {level.desc}
                  </div>
                </button>)}
            </div>
          </div>

          {/* Result */}
          <div className="bg-charcoal-900 rounded-2xl p-6 text-white flex items-center justify-between shadow-xl shadow-charcoal-900/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />

            <div className="relative z-10">
              <div className="text-primary-200 text-xs font-bold uppercase tracking-wider mb-2">
                Ración Diaria Recomendada
              </div>
              <div className="text-sm text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                Dividir en 2 tomas
              </div>
            </div>

            <div className="text-right relative z-10">
              <div className="flex items-baseline justify-end gap-1">
                <motion.span key={portion} initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} className="text-5xl font-bold font-serif leading-none tracking-tight">
                  {portion}
                </motion.span>
                <span className="text-xl font-bold text-primary-500">g</span>
              </div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">
                gramos / día
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition Guide */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex items-center gap-2 backdrop-blur-sm">
          <Calendar className="w-5 h-5 text-primary-600" />
          <h4 className="font-bold text-charcoal-800">
            Guía de Transición (7 días)
          </h4>
        </div>
        <div className="p-6 lg:p-8">
          <p className="text-sm text-gray-600 mb-8 max-w-lg">
            Para evitar problemas digestivos, introduce el nuevo alimento
            gradualmente mezclándolo con el anterior siguiendo este esquema:
          </p>

          <div className="grid grid-cols-4 gap-4 relative">
            {/* Connecting Line */}
            <div className="absolute top-8 left-[12%] right-[12%] h-0.5 bg-gray-100 -z-10" />

            {[{
            days: '1-2',
            old: 75,
            new: 25
          }, {
            days: '3-4',
            old: 50,
            new: 50
          }, {
            days: '5-6',
            old: 25,
            new: 75
          }, {
            days: '7+',
            old: 0,
            new: 100
          }].map((step, idx) => <div key={idx} className="flex flex-col items-center group">
                <div className="relative w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden mb-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gray-200" />{' '}
                  {/* Old food color */}
                  <motion.div initial={{
                height: 0
              }} whileInView={{
                height: `${step.new}%`
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: idx * 0.2
              }} className="absolute bottom-0 left-0 right-0 bg-primary-500" />
                </div>
                <div className="text-center">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Días {step.days}
                  </span>
                  <span className="block text-sm font-bold text-charcoal-800">
                    {step.new}% Nuevo
                  </span>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="flex gap-4 p-5 rounded-2xl bg-amber-50/50 text-amber-900 text-sm border border-amber-100/50">
        <div className="bg-amber-100 rounded-full p-1 h-fit">
          <AlertCircle className="w-4 h-4 text-amber-600" />
        </div>
        <p className="leading-relaxed text-amber-900/80">
          <strong>Nota Importante:</strong> Estas cantidades son orientativas.
          Ajusta la ración según la condición corporal de tu mascota y asegúrate
          de que siempre tenga agua fresca y limpia disponible. Si tienes dudas,
          consulta con tu veterinario.
        </p>
      </div>
    </div>;
}