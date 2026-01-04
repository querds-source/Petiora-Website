import React, { useEffect, useState } from 'react';
import { Calculator, Scale, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
export function FeedingCalculator() {
  const [weight, setWeight] = useState<number | ''>(10);
  const [age, setAge] = useState('adult');
  const [activity, setActivity] = useState('normal');
  const [dailyPortion, setDailyPortion] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [error, setError] = useState<string | null>(null);
  // Calculate portion whenever inputs change
  useEffect(() => {
    if (weight === '' || weight <= 0) {
      setDailyPortion(0);
      setMonthlyCost(0);
      return;
    }
    if (weight > 100) {
      setError('Por favor, introduce un peso válido (máx 100kg)');
      return;
    } else {
      setError(null);
    }
    try {
      // Formula: RER = 70 * (weight ^ 0.75)
      const rer = 70 * Math.pow(Number(weight), 0.75);
      let multiplier = 1.6; // Default adult normal
      if (age === 'puppy') multiplier = 2.5;
      if (age === 'senior') multiplier = 1.4;
      if (activity === 'low') multiplier -= 0.2;
      if (activity === 'high') multiplier += 0.4;
      const dailyCalories = rer * multiplier;
      const caloriesPerGram = 3.85; // 3850 kcal/kg
      const grams = Math.round(dailyCalories / caloriesPerGram);
      setDailyPortion(grams);
      // Cost calculation (approx 0.012€ per gram)
      setMonthlyCost(Math.round(grams * 30 * 0.012));
    } catch (err) {
      console.error('Calculation error:', err);
      setError('Error al calcular la ración');
    }
  }, [weight, age, activity]);
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setWeight('');
    } else {
      setWeight(val);
    }
  };
  return <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
      <div className="bg-charcoal-900 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-6 h-6 text-primary-400" />
          <h3 className="text-xl font-bold font-serif">
            Calculadora de Ración
          </h3>
        </div>
        <p className="text-gray-300 text-sm">
          Descubre la cantidad exacta que necesita tu mascota
        </p>
      </div>

      <div className="p-6 lg:p-8">
        <div className="space-y-6">
          {/* Weight Input */}
          <div>
            <label className="block text-sm font-bold text-charcoal-700 mb-2 flex items-center justify-between">
              <span>Peso de tu mascota</span>
              <span className="text-primary-600 bg-primary-50 px-2 py-0.5 rounded text-xs font-mono">
                {weight || 0} kg
              </span>
            </label>
            <div className="relative">
              <input type="range" min="1" max="60" step="0.5" value={typeof weight === 'number' ? weight : 0} onChange={handleWeightChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" aria-label="Peso de la mascota" />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>1 kg</span>
                <span>60 kg</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-gray-500">¿Peso exacto?</span>
              <input type="number" value={weight} onChange={handleWeightChange} className="w-20 px-2 py-1 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" placeholder="kg" />
            </div>

            <AnimatePresence>
              {error && <motion.div initial={{
              opacity: 0,
              height: 0
            }} animate={{
              opacity: 1,
              height: 'auto'
            }} exit={{
              opacity: 0,
              height: 0
            }} className="mt-2 flex items-center gap-2 text-rose-600 text-xs font-medium bg-rose-50 p-2 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </motion.div>}
            </AnimatePresence>
          </div>

          {/* Age Selection */}
          <div>
            <label className="block text-sm font-bold text-charcoal-700 mb-2">
              Etapa de Vida
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[{
              id: 'puppy',
              label: 'Cachorro'
            }, {
              id: 'adult',
              label: 'Adulto'
            }, {
              id: 'senior',
              label: 'Senior'
            }].map(option => <button key={option.id} onClick={() => setAge(option.id)} className={`py-2 px-3 rounded-xl text-sm font-medium transition-all border ${age === option.id ? 'bg-primary-600 text-white border-primary-600 shadow-md transform scale-105' : 'bg-gray-50 text-charcoal-600 border-gray-200 hover:border-primary-300 hover:bg-white'}`}>
                  {option.label}
                </button>)}
            </div>
          </div>

          {/* Activity Selection */}
          <div>
            <label className="block text-sm font-bold text-charcoal-700 mb-2">
              Nivel de Actividad
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[{
              id: 'low',
              label: 'Baja'
            }, {
              id: 'normal',
              label: 'Media'
            }, {
              id: 'high',
              label: 'Alta'
            }].map(option => <button key={option.id} onClick={() => setActivity(option.id)} className={`py-2 px-3 rounded-xl text-sm font-medium transition-all border ${activity === option.id ? 'bg-primary-600 text-white border-primary-600 shadow-md transform scale-105' : 'bg-gray-50 text-charcoal-600 border-gray-200 hover:border-primary-300 hover:bg-white'}`}>
                  {option.label}
                </button>)}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mt-8 bg-primary-50 rounded-2xl p-6 border border-primary-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-200 transition-colors duration-500"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-1">
                  Ración Diaria
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-charcoal-900">
                    {dailyPortion}
                  </span>
                  <span className="text-lg font-bold text-charcoal-600">g</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-1">
                  Coste Mensual
                </p>
                <div className="flex items-baseline gap-1 justify-end">
                  <span className="text-2xl font-bold text-charcoal-900">
                    ~{monthlyCost}
                  </span>
                  <span className="text-sm font-bold text-charcoal-600">€</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-charcoal-500 bg-white/60 backdrop-blur-sm p-2 rounded-lg border border-white/50">
              <Scale className="w-4 h-4 text-primary-500" />
              <span>
                Equivale a aprox. {Math.round(dailyPortion / 120 * 10) / 10}{' '}
                tazas al día
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button variant="primary" className="w-full text-sm shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30">
            Ver Plan Personalizado <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-[10px] text-gray-400 mt-3">
            *Cálculo estimado basado en guías FEDIAF. Consulta siempre con tu
            veterinario.
          </p>
        </div>
      </div>
    </div>;
}