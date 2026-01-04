import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Dog, Cat, Activity, Scale, Calendar, ChevronRight, RefreshCw, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
interface CalculationResult {
  dailyCalories: number;
  protein: number;
  fat: number;
  carbs: number;
  water: number;
}
export function NutritionalCalculator() {
  const [step, setStep] = useState(1);
  const [species, setSpecies] = useState<'dog' | 'cat' | null>(null);
  const [weight, setWeight] = useState<number>(10);
  const [age, setAge] = useState<number>(3);
  const [activity, setActivity] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const calculateNeeds = () => {
    // Basic metabolic rate calculation (Kleiber's Law modified for pets)
    const rer = 70 * Math.pow(weight, 0.75);
    let factor = 1.0;
    if (species === 'dog') {
      if (activity === 'low') factor = 1.4;else if (activity === 'moderate') factor = 1.6;else factor = 1.8;
    } else {
      if (activity === 'low') factor = 1.0;else if (activity === 'moderate') factor = 1.2;else factor = 1.4;
    }
    const dailyCalories = Math.round(rer * factor);
    // Macro distribution based on species
    const protein = species === 'dog' ? Math.round(dailyCalories * 0.25 / 4) : Math.round(dailyCalories * 0.35 / 4);
    const fat = species === 'dog' ? Math.round(dailyCalories * 0.15 / 9) : Math.round(dailyCalories * 0.2 / 9);
    const carbs = species === 'dog' ? Math.round(dailyCalories * 0.6 / 4) : Math.round(dailyCalories * 0.45 / 4);
    const water = Math.round(dailyCalories * 1.5); // ml per day approx
    setResult({
      dailyCalories,
      protein,
      fat,
      carbs,
      water
    });
    setStep(2);
  };
  const reset = () => {
    setStep(1);
    setResult(null);
    setSpecies(null);
  };
  return <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-charcoal-900 p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg font-serif">
              Calculadora Nutricional
            </h3>
            <p className="text-xs text-charcoal-300">
              Basado en estándares FEDIAF
            </p>
          </div>
        </div>
        {step === 2 && <button onClick={reset} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <RefreshCw className="w-5 h-5 text-white" />
          </button>}
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {step === 1 ? <motion.div key="form" initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: 20
        }} className="space-y-6">
              {/* Species Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-charcoal-700 uppercase tracking-wide">
                  Especie
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => setSpecies('dog')} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${species === 'dog' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-gray-100 hover:border-primary-200 text-charcoal-500'}`}>
                    <Dog className="w-8 h-8" />
                    <span className="font-bold">Perro</span>
                  </button>
                  <button onClick={() => setSpecies('cat')} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${species === 'cat' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-gray-100 hover:border-primary-200 text-charcoal-500'}`}>
                    <Cat className="w-8 h-8" />
                    <span className="font-bold">Gato</span>
                  </button>
                </div>
              </div>

              {/* Weight & Age */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal-700 uppercase tracking-wide flex items-center gap-2">
                    <Scale className="w-4 h-4" /> Peso (kg)
                  </label>
                  <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none font-bold text-charcoal-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal-700 uppercase tracking-wide flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Edad (años)
                  </label>
                  <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none font-bold text-charcoal-800" />
                </div>
              </div>

              {/* Activity Level */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-charcoal-700 uppercase tracking-wide flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Nivel de Actividad
                </label>
                <div className="flex gap-2 bg-gray-50 p-1 rounded-xl">
                  {['low', 'moderate', 'high'].map(level => <button key={level} onClick={() => setActivity(level as any)} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activity === level ? 'bg-white shadow-sm text-primary-700' : 'text-charcoal-500 hover:text-charcoal-700'}`}>
                      {level === 'low' ? 'Baja' : level === 'moderate' ? 'Media' : 'Alta'}
                    </button>)}
                </div>
              </div>

              <Button fullWidth size="lg" onClick={calculateNeeds} disabled={!species} className="mt-4">
                Calcular Necesidades
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div> : <motion.div key="results" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} className="space-y-8">
              {/* Main Result */}
              <div className="text-center bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <div className="text-sm font-bold text-primary-800 uppercase tracking-wide mb-2">
                  Calorías Diarias Recomendadas
                </div>
                <div className="text-5xl font-bold text-primary-600 font-serif mb-1">
                  {result?.dailyCalories}{' '}
                  <span className="text-xl text-primary-400">kcal</span>
                </div>
                <div className="text-xs text-primary-700/70 font-medium">
                  Para mantener el peso ideal de {weight}kg
                </div>
              </div>

              {/* Macros Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-xs font-bold text-charcoal-400 uppercase mb-1">
                    Proteína
                  </div>
                  <div className="text-xl font-bold text-charcoal-800">
                    {result?.protein}g
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-xs font-bold text-charcoal-400 uppercase mb-1">
                    Grasa
                  </div>
                  <div className="text-xl font-bold text-charcoal-800">
                    {result?.fat}g
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-xs font-bold text-charcoal-400 uppercase mb-1">
                    Carbos
                  </div>
                  <div className="text-xl font-bold text-charcoal-800">
                    {result?.carbs}g
                  </div>
                </div>
              </div>

              {/* Water Intake */}
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-blue-900 text-sm">
                    Hidratación Recomendada
                  </div>
                  <div className="text-blue-700 text-xs">
                    Aprox. {result?.water}ml de agua fresca al día
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-bold text-charcoal-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Producto Recomendado
                </h4>
                <div className="flex gap-4 items-center p-4 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all cursor-pointer bg-white">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0">
                    <img src="https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&q=80&w=200" alt="Product" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                    <div className="font-bold text-charcoal-900 text-sm">
                      {species === 'dog' ? 'Fórmula Vitalidad Canina' : 'Fórmula Felina Premium'}
                    </div>
                    <div className="text-xs text-charcoal-500 mt-1">
                      Cubre el 100% de los requerimientos calculados
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 ml-auto" />
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
}