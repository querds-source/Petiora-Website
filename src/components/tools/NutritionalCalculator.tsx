import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Dog, Cat, Activity, Weight, Calendar, ArrowRight, CheckCircle2, RefreshCw, Info, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';
import { Tooltip } from '../ui/Tooltip';
import { Skeleton } from '../ui/Skeleton';
import { products } from '../../data/products';
import { Product } from '../../utils/types';
type PetType = 'dog' | 'cat';
type ActivityLevel = 'low' | 'normal' | 'high' | 'athlete';
export function NutritionalCalculator() {
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{
    calories: number;
    product: Product;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'dog' as PetType,
    weight: '',
    age: '',
    activity: 'normal' as ActivityLevel
  });
  const [errors, setErrors] = useState<{
    weight?: string;
    age?: string;
  }>({});
  const validateForm = () => {
    const newErrors: {
      weight?: string;
      age?: string;
    } = {};
    if (!formData.weight || parseFloat(formData.weight) <= 0) {
      newErrors.weight = 'Introduce un peso válido';
    }
    if (!formData.age || parseFloat(formData.age) <= 0) {
      newErrors.age = 'Introduce una edad válida';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const calculateNeeds = () => {
    if (!validateForm()) return;
    setIsCalculating(true);
    // Simulate calculation delay for effect
    setTimeout(() => {
      const weight = parseFloat(formData.weight) || 10;
      let multiplier = 1.0;
      // Basic RER (Resting Energy Requirement) = 70 * (weight ^ 0.75)
      const rer = 70 * Math.pow(weight, 0.75);
      // Activity multipliers
      switch (formData.activity) {
        case 'low':
          multiplier = 1.2;
          break;
        case 'normal':
          multiplier = 1.6;
          break;
        case 'high':
          multiplier = 2.0;
          break;
        case 'athlete':
          multiplier = 3.0;
          break;
      }
      if (formData.type === 'cat') {
        multiplier = multiplier * 0.8; // Cats generally need less than active dogs
      }
      const dailyCalories = Math.round(rer * multiplier);
      // Find recommended product
      const recommendedProduct = products.find(p => p.petType === formData.type && p.category.includes('food')) || products[0];
      setResult({
        calories: dailyCalories,
        product: recommendedProduct
      });
      setIsCalculating(false);
      setStep(2);
    }, 1500);
  };
  const resetCalculator = () => {
    setStep(1);
    setResult(null);
    setFormData({
      ...formData,
      weight: '',
      age: ''
    });
    setErrors({});
  };
  return <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-50 rounded-full blur-[80px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary-50 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container-custom max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Intro Text */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="max-w-xl">
            <Badge variant="primary" className="mb-6">
              Herramienta Veterinaria
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif leading-tight">
              Calculadora Nutricional <br />
              <span className="text-primary-600">Personalizada</span>
            </h2>
            <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
              Cada mascota es única. Descubre la cantidad exacta de calorías y
              nutrientes que tu compañero necesita basándonos en su fisiología y
              estilo de vida.
            </p>

            <div className="space-y-4 mb-8">
              {['Algoritmo basado en estándares FEDIAF', 'Ajuste por nivel de actividad y etapa vital', 'Recomendación de producto ideal'].map((item, i) => <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-charcoal-700 font-medium">{item}</span>
                </div>)}
            </div>
          </motion.div>

          {/* Right Column: Calculator Card */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            <Card className="p-8 shadow-soft-2xl border-gray-100 bg-white/80 backdrop-blur-xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {step === 1 ? <motion.div key="form" initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal-900">
                        Datos de tu Mascota
                      </h3>
                      <Tooltip content="Utilizamos estos datos para calcular el RER (Requerimiento Energético en Reposo)">
                        <Info className="w-4 h-4 text-charcoal-400 cursor-help" />
                      </Tooltip>
                    </div>

                    {/* Pet Type Selection */}
                    <div className="grid grid-cols-2 gap-4">
                      <button onClick={() => setFormData({
                    ...formData,
                    type: 'dog'
                  })} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${formData.type === 'dog' ? 'border-primary-600 bg-primary-50 text-primary-700 shadow-sm' : 'border-gray-100 hover:border-primary-200 text-charcoal-500'}`} aria-label="Seleccionar Perro">
                        <Dog className="w-8 h-8" />
                        <span className="font-bold">Perro</span>
                      </button>
                      <button onClick={() => setFormData({
                    ...formData,
                    type: 'cat'
                  })} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${formData.type === 'cat' ? 'border-primary-600 bg-primary-50 text-primary-700 shadow-sm' : 'border-gray-100 hover:border-primary-200 text-charcoal-500'}`} aria-label="Seleccionar Gato">
                        <Cat className="w-8 h-8" />
                        <span className="font-bold">Gato</span>
                      </button>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal-700">
                          Peso (kg)
                        </label>
                        <div className="relative">
                          <Weight className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="number" value={formData.weight} onChange={e => {
                        setFormData({
                          ...formData,
                          weight: e.target.value
                        });
                        if (errors.weight) setErrors({
                          ...errors,
                          weight: undefined
                        });
                      }} className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${errors.weight ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/30' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'}`} placeholder="Ej: 15" min="0" step="0.1" />
                        </div>
                        {errors.weight && <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.weight}
                          </p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal-700">
                          Edad (años)
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="number" value={formData.age} onChange={e => {
                        setFormData({
                          ...formData,
                          age: e.target.value
                        });
                        if (errors.age) setErrors({
                          ...errors,
                          age: undefined
                        });
                      }} className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${errors.age ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/30' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'}`} placeholder="Ej: 4" min="0" step="0.5" />
                        </div>
                        {errors.age && <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.age}
                          </p>}
                      </div>
                    </div>

                    {/* Activity Level */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal-700">
                        Nivel de Actividad
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {[{
                      id: 'low',
                      label: 'Bajo',
                      icon: '💤'
                    }, {
                      id: 'normal',
                      label: 'Medio',
                      icon: '🚶'
                    }, {
                      id: 'high',
                      label: 'Alto',
                      icon: '🏃'
                    }, {
                      id: 'athlete',
                      label: 'Atleta',
                      icon: '⚡'
                    }].map(level => <button key={level.id} onClick={() => setFormData({
                      ...formData,
                      activity: level.id as ActivityLevel
                    })} className={`p-2 rounded-lg border text-xs font-bold transition-all hover:scale-105 active:scale-95 ${formData.activity === level.id ? 'border-primary-600 bg-primary-600 text-white shadow-md' : 'border-gray-200 text-charcoal-600 hover:bg-gray-50'}`}>
                            <span className="block text-lg mb-1">
                              {level.icon}
                            </span>
                            {level.label}
                          </button>)}
                      </div>
                    </div>

                    <Button fullWidth size="lg" onClick={calculateNeeds} isLoading={isCalculating} className="mt-4 shadow-soft-lg hover:shadow-soft-xl">
                      Calcular Plan
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div> : <motion.div key="result" initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} className="text-center space-y-6">
                    <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4 relative">
                      <motion.div initial={{
                    scale: 0
                  }} animate={{
                    scale: 1
                  }} transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: 0.2
                  }} className="absolute inset-0 border-4 border-emerald-500 rounded-full opacity-20 animate-ping" />
                      <Activity className="w-10 h-10 text-emerald-600" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                        Necesidades Diarias
                      </h3>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-6xl font-bold text-primary-600 font-serif tracking-tight">
                          {result?.calories}
                        </span>
                        <span className="text-xl font-bold text-charcoal-400">
                          kcal
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-left hover:shadow-soft-md transition-shadow duration-300">
                      <p className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-3">
                        Recomendación Petiora
                      </p>
                      <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 overflow-hidden shrink-0">
                          {result?.product ? <img src={result.product.image} alt={result.product.name} className="w-full h-full object-cover" /> : <Skeleton className="w-full h-full" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-charcoal-900">
                            {result?.product.name}
                          </h4>
                          <p className="text-sm text-charcoal-600 line-clamp-1">
                            {result?.product.description}
                          </p>
                          <p className="text-xs font-bold text-primary-600 mt-1 bg-primary-50 inline-block px-2 py-0.5 rounded-md">
                            {Math.round(result?.calories! / (result?.product.nutritionalInfo?.kcalPer100g || 350) * 100)}
                            g / día
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" fullWidth onClick={resetCalculator} className="mt-4 hover:bg-gray-50">
                      <RefreshCw className="mr-2 w-4 h-4" />
                      Recalcular
                    </Button>
                  </motion.div>}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
}