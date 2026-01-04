import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dog, Cat, Calendar, Scale, Activity, Heart, AlertCircle, CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Progress } from '../ui/Progress';
interface PetProfile {
  name: string;
  type: 'dog' | 'cat' | null;
  breed: string;
  age: string;
  weight: string;
  activityLevel: 'low' | 'medium' | 'high' | null;
  healthConditions: string[];
  allergies: string[];
}
export function PetProfileBuilder() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<PetProfile>({
    name: '',
    type: null,
    breed: '',
    age: '',
    weight: '',
    activityLevel: null,
    healthConditions: [],
    allergies: []
  });
  const totalSteps = 5;
  const progress = step / totalSteps * 100;
  const commonHealthConditions = ['Sobrepeso', 'Diabetes', 'Problemas renales', 'Problemas digestivos', 'Artritis', 'Alergias cutáneas'];
  const commonAllergies = ['Pollo', 'Ternera', 'Lácteos', 'Cereales', 'Soja', 'Pescado'];
  const toggleHealthCondition = (condition: string) => {
    setProfile(prev => ({
      ...prev,
      healthConditions: prev.healthConditions.includes(condition) ? prev.healthConditions.filter(c => c !== condition) : [...prev.healthConditions, condition]
    }));
  };
  const toggleAllergy = (allergy: string) => {
    setProfile(prev => ({
      ...prev,
      allergies: prev.allergies.includes(allergy) ? prev.allergies.filter(a => a !== allergy) : [...prev.allergies, allergy]
    }));
  };
  const canProceed = () => {
    switch (step) {
      case 1:
        return profile.name && profile.type;
      case 2:
        return profile.breed && profile.age;
      case 3:
        return profile.weight && profile.activityLevel;
      case 4:
        return true;
      // Health conditions are optional
      case 5:
        return true;
      // Allergies are optional
      default:
        return false;
    }
  };
  const handleComplete = () => {
    console.log('Pet Profile:', profile);
    // Here you would save the profile
    alert('¡Perfil creado con éxito!');
  };
  return <div className="max-w-3xl mx-auto">
      <Card className="overflow-hidden border-none shadow-xl">
        {/* Header with Progress */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
              Paso {step} de {totalSteps}
            </Badge>
            <span className="text-sm font-medium opacity-90">
              {Math.round(progress)}% completado
            </span>
          </div>
          <Progress value={progress} className="h-2 bg-white/20" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Info */}
            {step === 1 && <motion.div key="step1" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-3 font-serif">
                    Conoce a tu mascota
                  </h2>
                  <p className="text-gray-600">
                    Empecemos con lo básico para crear su perfil nutricional
                  </p>
                </div>

                <Input label="¿Cómo se llama?" placeholder="Ej: Max, Luna, Rocky..." value={profile.name} onChange={e => setProfile({
              ...profile,
              name: e.target.value
            })} leftIcon={<Heart className="w-5 h-5" />} className="text-lg" />

                <div>
                  <label className="block text-sm font-bold text-charcoal-700 mb-4">
                    ¿Es perro o gato?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => setProfile({
                  ...profile,
                  type: 'dog'
                })} className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${profile.type === 'dog' ? 'border-primary-600 bg-primary-50 text-primary-800' : 'border-gray-200 hover:border-primary-300 text-gray-600'}`}>
                      <Dog className="w-12 h-12" />
                      <span className="font-bold text-lg">Perro</span>
                    </button>
                    <button onClick={() => setProfile({
                  ...profile,
                  type: 'cat'
                })} className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${profile.type === 'cat' ? 'border-primary-600 bg-primary-50 text-primary-800' : 'border-gray-200 hover:border-primary-300 text-gray-600'}`}>
                      <Cat className="w-12 h-12" />
                      <span className="font-bold text-lg">Gato</span>
                    </button>
                  </div>
                </div>
              </motion.div>}

            {/* Step 2: Breed & Age */}
            {step === 2 && <motion.div key="step2" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-3 font-serif">
                    Detalles de {profile.name}
                  </h2>
                  <p className="text-gray-600">
                    Esto nos ayuda a personalizar su nutrición
                  </p>
                </div>

                <Input label="Raza" placeholder="Ej: Labrador, Persa, Mestizo..." value={profile.breed} onChange={e => setProfile({
              ...profile,
              breed: e.target.value
            })} className="text-lg" />

                <Input label="Edad (años)" type="number" placeholder="Ej: 3" value={profile.age} onChange={e => setProfile({
              ...profile,
              age: e.target.value
            })} leftIcon={<Calendar className="w-5 h-5" />} className="text-lg" />
              </motion.div>}

            {/* Step 3: Weight & Activity */}
            {step === 3 && <motion.div key="step3" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-3 font-serif">
                    Físico y actividad
                  </h2>
                  <p className="text-gray-600">
                    Para calcular las porciones perfectas
                  </p>
                </div>

                <Input label="Peso actual (kg)" type="number" placeholder="Ej: 15" value={profile.weight} onChange={e => setProfile({
              ...profile,
              weight: e.target.value
            })} leftIcon={<Scale className="w-5 h-5" />} className="text-lg" />

                <div>
                  <label className="block text-sm font-bold text-charcoal-700 mb-4">
                    Nivel de actividad
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[{
                  value: 'low',
                  label: 'Baja',
                  desc: 'Paseos cortos',
                  icon: '🛋️'
                }, {
                  value: 'medium',
                  label: 'Media',
                  desc: '1-2 paseos/día',
                  icon: '🚶'
                }, {
                  value: 'high',
                  label: 'Alta',
                  desc: 'Muy activo',
                  icon: '🏃'
                }].map(level => <button key={level.value} onClick={() => setProfile({
                  ...profile,
                  activityLevel: level.value as any
                })} className={`p-4 rounded-xl border-2 transition-all text-left ${profile.activityLevel === level.value ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}>
                        <div className="text-2xl mb-2">{level.icon}</div>
                        <div className="font-bold text-charcoal-900">
                          {level.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {level.desc}
                        </div>
                      </button>)}
                  </div>
                </div>
              </motion.div>}

            {/* Step 4: Health Conditions */}
            {step === 4 && <motion.div key="step4" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-3 font-serif">
                    Condiciones de salud
                  </h2>
                  <p className="text-gray-600">
                    Opcional, pero nos ayuda a adaptar la dieta
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {commonHealthConditions.map(condition => <button key={condition} onClick={() => toggleHealthCondition(condition)} className={`px-4 py-2 rounded-xl border-2 transition-all font-medium ${profile.healthConditions.includes(condition) ? 'border-primary-600 bg-primary-50 text-primary-800' : 'border-gray-200 hover:border-primary-300 text-gray-600'}`}>
                      {condition}
                    </button>)}
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900">
                    Si tu mascota tiene condiciones médicas específicas,
                    consulta con tu veterinario antes de cambiar su dieta.
                  </p>
                </div>
              </motion.div>}

            {/* Step 5: Allergies */}
            {step === 5 && <motion.div key="step5" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-3 font-serif">
                    Alergias o intolerancias
                  </h2>
                  <p className="text-gray-600">
                    Excluiremos estos ingredientes de las recomendaciones
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {commonAllergies.map(allergy => <button key={allergy} onClick={() => toggleAllergy(allergy)} className={`px-4 py-2 rounded-xl border-2 transition-all font-medium ${profile.allergies.includes(allergy) ? 'border-red-600 bg-red-50 text-red-800' : 'border-gray-200 hover:border-red-300 text-gray-600'}`}>
                      {allergy}
                    </button>)}
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-bold text-charcoal-900 text-lg mb-2">
                    ¡Perfil casi completo!
                  </h3>
                  <p className="text-sm text-gray-600">
                    Haz clic en "Finalizar" para ver las recomendaciones
                    personalizadas para {profile.name}
                  </p>
                </div>
              </motion.div>}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-4 mt-12 pt-8 border-t border-gray-100">
            {step > 1 && <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Atrás
              </Button>}
            {step < totalSteps ? <Button onClick={() => setStep(step + 1)} disabled={!canProceed()} className="flex-1">
                Continuar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button> : <Button onClick={handleComplete} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                <Sparkles className="w-4 h-4 mr-2" />
                Finalizar Perfil
              </Button>}
          </div>
        </div>
      </Card>
    </div>;
}