import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Dog, Cat, ArrowRight, Activity } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
export function FeedingCalculator() {
  const [step, setStep] = useState(1);
  const [petType, setPetType] = useState<'dog' | 'cat' | null>(null);
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState<'low' | 'normal' | 'high'>('normal');
  const [result, setResult] = useState<number | null>(null);
  const calculatePortion = () => {
    const w = parseFloat(weight);
    if (!w) return;
    // Simple calculation logic (can be made more complex)
    let base = w * 30 + 70; // RER formula approximation
    if (petType === 'cat') {
      base *= 1.2;
    } else {
      if (activity === 'low') base *= 1.4;
      if (activity === 'normal') base *= 1.6;
      if (activity === 'high') base *= 1.8;
    }
    setResult(Math.round(base));
    setStep(3);
  };
  return <Card className="overflow-hidden border-none shadow-soft-xl bg-white">
      <div className="bg-primary-900 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-serif">
              Calculadora de Raciones
            </h3>
            <p className="text-xs text-primary-200">
              Personaliza la alimentación de tu mascota
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {step === 1 && <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="space-y-6">
            <p className="text-sm text-gray-600 font-medium">
              ¿Para quién es la comida?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setPetType('dog')} className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${petType === 'dog' ? 'border-primary-600 bg-primary-50 text-primary-800' : 'border-gray-100 hover:border-primary-200 text-gray-500'}`}>
                <Dog className="w-8 h-8" />
                <span className="font-bold">Perro</span>
              </button>
              <button onClick={() => setPetType('cat')} className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${petType === 'cat' ? 'border-primary-600 bg-primary-50 text-primary-800' : 'border-gray-100 hover:border-primary-200 text-gray-500'}`}>
                <Cat className="w-8 h-8" />
                <span className="font-bold">Gato</span>
              </button>
            </div>
            <Button className="w-full" disabled={!petType} onClick={() => setStep(2)}>
              Siguiente
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>}

        {step === 2 && <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Peso (kg)
              </label>
              <Input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Ej: 15" className="text-lg" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Nivel de Actividad
              </label>
              <div className="flex gap-2">
                {['low', 'normal', 'high'].map(level => <button key={level} onClick={() => setActivity(level as any)} className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all ${activity === level ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'}`}>
                    {level === 'low' ? 'Baja' : level === 'normal' ? 'Media' : 'Alta'}
                  </button>)}
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Atrás
              </Button>
              <Button className="flex-[2]" disabled={!weight} onClick={calculatePortion}>
                Calcular
              </Button>
            </div>
          </motion.div>}

        {step === 3 && result && <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <Activity className="w-8 h-8" />
            </div>
            <h4 className="text-gray-500 font-medium mb-1">
              Ración Diaria Recomendada
            </h4>
            <div className="text-4xl font-bold text-charcoal-900 mb-2 font-serif">
              {result}{' '}
              <span className="text-lg text-gray-400 font-sans">kcal</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Aprox. {Math.round(result / 1.5)}g de comida fresca Petiora
            </p>
            <Button onClick={() => {
          setStep(1);
          setWeight('');
          setResult(null);
        }} variant="outline" className="w-full">
              Calcular de nuevo
            </Button>
          </motion.div>}
      </div>
    </Card>;
}