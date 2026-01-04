import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Dog, Cat, Activity, Calendar, Scale, Zap, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
export function InteractiveNutritionCalculator() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState(15);
  const [age, setAge] = useState(3);
  const [activity, setActivity] = useState<'low' | 'medium' | 'high'>('medium');
  const [showResults, setShowResults] = useState(false);
  const calculateCalories = () => {
    const baseCalories = petType === 'dog' ? 70 * Math.pow(weight, 0.75) : 60 * Math.pow(weight, 0.75);
    const activityMultiplier = activity === 'low' ? 1.2 : activity === 'medium' ? 1.4 : 1.8;
    const ageMultiplier = age < 1 ? 2.0 : age > 7 ? 1.1 : 1.3;
    return Math.round(baseCalories * activityMultiplier * ageMultiplier);
  };
  const calculatePortions = () => {
    const calories = calculateCalories();
    const gramsPerDay = Math.round(calories / 3.65); // 3650 kcal/kg
    return {
      daily: gramsPerDay,
      perMeal: Math.round(gramsPerDay / 2),
      monthlyBags: Math.ceil(gramsPerDay * 30 / 3000),
      monthlyCost: Math.ceil(gramsPerDay * 30 / 3000) * 45
    };
  };
  const results = calculatePortions();
  return <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="primary" size="md" className="mb-6 shadow-sm">
            <Calculator className="w-3.5 h-3.5 mr-1.5" />
            Calculadora Nutricional
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 font-serif tracking-tight">
            ¿Cuánto necesita{' '}
            <span className="text-primary-600">tu mascota</span>?
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Calcula las calorías y raciones exactas según su peso, edad y nivel
            de actividad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <Card className="p-8 border-2 border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-8 font-serif">
              Datos de tu mascota
            </h3>

            {/* Pet Type */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-charcoal-700 mb-4">
                Tipo de mascota
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[{
                type: 'dog' as const,
                label: 'Perro',
                icon: Dog
              }, {
                type: 'cat' as const,
                label: 'Gato',
                icon: Cat
              }].map(option => <button key={option.type} onClick={() => setPetType(option.type)} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-3 ${petType === option.type ? 'border-primary-600 bg-primary-50 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
                    <option.icon className={`w-6 h-6 ${petType === option.type ? 'text-primary-600' : 'text-gray-400'}`} />
                    <span className={`font-bold ${petType === option.type ? 'text-primary-700' : 'text-charcoal-600'}`}>
                      {option.label}
                    </span>
                  </button>)}
              </div>
            </div>

            {/* Weight */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-charcoal-700 mb-4 flex items-center gap-2">
                <Scale className="w-4 h-4 text-primary-600" />
                Peso:{' '}
                <span className="text-primary-700 text-lg">{weight} kg</span>
              </label>
              <input type="range" min="1" max="50" value={weight} onChange={e => setWeight(parseInt(e.target.value))} className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1kg</span>
                <span>50kg</span>
              </div>
            </div>

            {/* Age */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-charcoal-700 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary-600" />
                Edad:{' '}
                <span className="text-primary-700 text-lg">{age} años</span>
              </label>
              <input type="range" min="0" max="15" value={age} onChange={e => setAge(parseInt(e.target.value))} className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Cachorro</span>
                <span>Adulto</span>
                <span>Senior</span>
              </div>
            </div>

            {/* Activity */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-charcoal-700 mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary-600" />
                Nivel de actividad
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[{
                level: 'low' as const,
                label: 'Baja',
                desc: 'Sedentario'
              }, {
                level: 'medium' as const,
                label: 'Media',
                desc: 'Paseos'
              }, {
                level: 'high' as const,
                label: 'Alta',
                desc: 'Muy activo'
              }].map(option => <button key={option.level} onClick={() => setActivity(option.level)} className={`p-3 rounded-xl border-2 transition-all text-center ${activity === option.level ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className={`text-sm font-bold ${activity === option.level ? 'text-primary-700' : 'text-charcoal-700'}`}>
                      {option.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {option.desc}
                    </div>
                  </button>)}
              </div>
            </div>

            <Button size="lg" fullWidth onClick={() => setShowResults(true)} className="rounded-xl shadow-lg">
              <Zap className="w-5 h-5 mr-2" />
              Calcular Necesidades
            </Button>
          </Card>

          {/* Results */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: showResults ? 1 : 0.3,
          x: 0
        }} className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white border-none shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm opacity-90">Calorías Diarias</div>
                  <div className="text-4xl font-bold font-serif">
                    {calculateCalories()} kcal
                  </div>
                </div>
              </div>
              <p className="text-primary-100 text-sm">
                Basado en fórmula NRC (National Research Council) para{' '}
                {petType === 'dog' ? 'perros' : 'gatos'}
              </p>
            </Card>

            <Card className="p-6 border-2 border-gray-100">
              <h4 className="font-bold text-charcoal-900 mb-4 text-lg">
                Plan Recomendado
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-charcoal-600 font-medium">
                    Ración diaria
                  </span>
                  <span className="text-xl font-bold text-primary-700">
                    {results.daily}g
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-charcoal-600 font-medium">
                    Por comida (2x día)
                  </span>
                  <span className="text-xl font-bold text-charcoal-900">
                    {results.perMeal}g
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <span className="text-charcoal-700 font-medium">
                    Bolsas/mes (3kg)
                  </span>
                  <span className="text-xl font-bold text-primary-700">
                    {results.monthlyBags}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary-50 rounded-xl border border-secondary-100">
                  <span className="text-charcoal-700 font-medium">
                    Coste mensual
                  </span>
                  <span className="text-2xl font-bold text-secondary-700">
                    {results.monthlyCost}€
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-emerald-50 border-2 border-emerald-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h5 className="font-bold text-emerald-900 mb-2">
                    Ahorro vs Veterinario
                  </h5>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    Alimentación premium equivalente en clínica veterinaria: ~
                    {Math.round(results.monthlyCost * 1.4)}€/mes. Ahorras{' '}
                    <strong>
                      {Math.round(results.monthlyCost * 0.4)}€/mes
                    </strong>{' '}
                    comprando directo.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
}