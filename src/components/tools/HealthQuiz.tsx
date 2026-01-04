import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ArrowRight, Check, Dog, Cat, AlertCircle, ChevronLeft, Sparkles, Heart, Award, TrendingUp, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { Badge } from '../ui/Badge';
interface Question {
  id: string;
  text: string;
  subtitle?: string;
  icon: React.ElementType;
  options: {
    label: string;
    value: string;
    description?: string;
    icon?: React.ElementType;
  }[];
}
const questions: Question[] = [{
  id: 'type',
  text: '¿Qué tipo de mascota tienes?',
  subtitle: 'Selecciona para personalizar las recomendaciones',
  icon: Heart,
  options: [{
    label: 'Perro',
    value: 'dog',
    description: 'Nutrición canina especializada',
    icon: Dog
  }, {
    label: 'Gato',
    value: 'cat',
    description: 'Nutrición felina especializada',
    icon: Cat
  }]
}, {
  id: 'age',
  text: '¿Qué edad tiene tu mascota?',
  subtitle: 'La edad determina sus necesidades nutricionales',
  icon: TrendingUp,
  options: [{
    label: 'Cachorro/Gatito',
    value: 'puppy',
    description: 'Menos de 1 año - Crecimiento'
  }, {
    label: 'Adulto',
    value: 'adult',
    description: '1-7 años - Mantenimiento'
  }, {
    label: 'Senior',
    value: 'senior',
    description: 'Más de 7 años - Cuidado especial'
  }]
}, {
  id: 'weight',
  text: '¿Cuál es su peso aproximado?',
  subtitle: 'Nos ayuda a calcular las raciones exactas',
  icon: Activity,
  options: [{
    label: 'Pequeño',
    value: 'small',
    description: 'Menos de 10kg'
  }, {
    label: 'Mediano',
    value: 'medium',
    description: '10-25kg'
  }, {
    label: 'Grande',
    value: 'large',
    description: 'Más de 25kg'
  }]
}, {
  id: 'activity',
  text: '¿Cuál es su nivel de actividad?',
  subtitle: 'El ejercicio afecta sus necesidades calóricas',
  icon: Activity,
  options: [{
    label: 'Bajo',
    value: 'low',
    description: 'Paseos cortos, vida tranquila'
  }, {
    label: 'Normal',
    value: 'normal',
    description: 'Paseos diarios, juego regular'
  }, {
    label: 'Alto',
    value: 'high',
    description: 'Muy activo, deportista'
  }]
}, {
  id: 'condition',
  text: '¿Tiene alguna condición especial?',
  subtitle: 'Podemos adaptar la dieta a necesidades específicas',
  icon: AlertCircle,
  options: [{
    label: 'Ninguna',
    value: 'none',
    description: 'Salud general buena'
  }, {
    label: 'Alergias alimentarias',
    value: 'allergies',
    description: 'Sensibilidad a ingredientes'
  }, {
    label: 'Sobrepeso',
    value: 'overweight',
    description: 'Necesita control de peso'
  }, {
    label: 'Piel sensible',
    value: 'sensitive_skin',
    description: 'Problemas dermatológicos'
  }, {
    label: 'Digestión delicada',
    value: 'sensitive_stomach',
    description: 'Estómago sensible'
  }]
}];
export function HealthQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [questions[step].id]: value
    });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsComplete(true);
    }
  };
  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setIsComplete(false);
  };
  const progress = (step + 1) / questions.length * 100;
  const getRecommendation = () => {
    const petType = answers.type === 'dog' ? 'perros' : 'gatos';
    const ageStage = answers.age === 'puppy' ? 'Junior' : answers.age === 'senior' ? 'Senior' : 'Adult';
    const activityLevel = answers.activity === 'high' ? 'alta' : answers.activity === 'low' ? 'baja' : 'normal';
    return {
      plan: `Plan Vitalidad ${ageStage}`,
      description: `Ideal para ${petType} con actividad ${activityLevel}`,
      features: ['Proteínas de alta calidad', 'Vitaminas y minerales balanceados', 'Omega 3 y 6 para piel y pelo', answers.condition !== 'none' ? 'Suplementos específicos incluidos' : 'Fórmula completa']
    };
  };
  if (isComplete) {
    const recommendation = getRecommendation();
    return <Card className="overflow-hidden bg-white shadow-soft-2xl border-gray-100">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }} className="relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/30">
              <Check className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold font-serif text-center mb-2">
              ¡Análisis Completado!
            </h3>
            <p className="text-emerald-100 text-center text-sm">
              Hemos preparado tu recomendación personalizada
            </p>
          </motion.div>
        </div>

        <div className="p-8">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 mb-8 border border-primary-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge variant="primary" size="sm" className="mb-2 font-bold">
                    Recomendación Personalizada
                  </Badge>
                  <h4 className="text-2xl font-bold text-charcoal-900 font-serif">
                    {recommendation.plan}
                  </h4>
                </div>
              </div>

              <p className="text-charcoal-700 mb-6 text-base font-medium">
                {recommendation.description}
              </p>

              <div className="space-y-3">
                <p className="text-sm font-bold text-charcoal-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary-600" />
                  Incluye:
                </p>
                {recommendation.features.map((feature, idx) => <motion.div key={idx} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: idx * 0.1
              }} className="flex items-center gap-3 text-sm text-charcoal-700">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </motion.div>)}
              </div>
            </div>
          </div>

          {/* Summary of Answers */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <p className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Info className="w-3.5 h-3.5" />
              Resumen de tu perfil
            </p>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(answers).map(([key, value]) => {
              const question = questions.find(q => q.id === key);
              const option = question?.options.find(o => o.value === value);
              return <div key={key} className="text-sm">
                    <p className="text-charcoal-500 font-medium mb-1">
                      {question?.text.replace('¿', '').replace('?', '')}
                    </p>
                    <p className="text-charcoal-900 font-bold">
                      {option?.label}
                    </p>
                  </div>;
            })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={resetQuiz} variant="outline" className="flex-1 rounded-xl font-bold">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Repetir Test
            </Button>
            <Button className="flex-1 rounded-xl font-bold shadow-soft-lg">
              Ver Productos Recomendados
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>;
  }
  const currentQuestion = questions[step];
  const CurrentIcon = currentQuestion.icon;
  return <Card className="overflow-hidden bg-white shadow-soft-2xl border-gray-100">
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold font-serif text-xl">Quiz de Salud</h3>
                <p className="text-xs text-primary-200 font-medium">
                  Descubre la nutrición ideal
                </p>
              </div>
            </div>
            <Badge variant="secondary" size="md" className="font-bold bg-white/10 backdrop-blur-sm border-white/20">
              {step + 1}/{questions.length}
            </Badge>
          </div>

          <Progress value={progress} variant="secondary" size="md" className="bg-white/10" />
        </div>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.3
        }} className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 mb-4">
                <CurrentIcon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-charcoal-900 mb-2 font-serif">
                {currentQuestion.text}
              </h4>
              {currentQuestion.subtitle && <p className="text-sm text-charcoal-600 font-medium">
                  {currentQuestion.subtitle}
                </p>}
            </div>

            <div className="grid gap-4">
              {currentQuestion.options.map((option, idx) => {
              const OptionIcon = option.icon;
              return <motion.button key={option.value} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: idx * 0.1
              }} onClick={() => handleAnswer(option.value)} className="w-full p-5 rounded-2xl border-2 border-gray-100 hover:border-primary-500 hover:bg-primary-50 transition-all text-left font-medium text-charcoal-700 flex items-center gap-4 group hover:shadow-soft-md">
                    {OptionIcon && <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary-100 group-hover:text-primary-600 transition-all shrink-0">
                        <OptionIcon className="w-6 h-6" />
                      </div>}
                    <div className="flex-1">
                      <div className="font-bold text-base text-charcoal-900 mb-1">
                        {option.label}
                      </div>
                      {option.description && <div className="text-xs text-charcoal-500 font-medium">
                          {option.description}
                        </div>}
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.button>;
            })}
            </div>
          </motion.div>
        </AnimatePresence>

        {step > 0 && <div className="mt-6 pt-6 border-t border-gray-100">
            <button onClick={handleBack} className="text-sm font-bold text-charcoal-600 hover:text-primary-600 flex items-center gap-2 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Pregunta anterior
            </button>
          </div>}
      </div>
    </Card>;
}