import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dog, Cat, ArrowRight, Check, ChevronRight, Activity, Weight, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
interface QuizStep {
  id: string;
  question: string;
  options: {
    id: string;
    label: string;
    icon?: React.ElementType;
    value: string;
  }[];
}
export function ProductRecommendationQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const steps: QuizStep[] = [{
    id: 'petType',
    question: '¿Quién es el protagonista?',
    options: [{
      id: 'dog',
      label: 'Perro',
      icon: Dog,
      value: 'dog'
    }, {
      id: 'cat',
      label: 'Gato',
      icon: Cat,
      value: 'cat'
    }]
  }, {
    id: 'age',
    question: '¿Qué edad tiene?',
    options: [{
      id: 'puppy',
      label: 'Cachorro (<1 año)',
      value: 'puppy'
    }, {
      id: 'adult',
      label: 'Adulto (1-7 años)',
      value: 'adult'
    }, {
      id: 'senior',
      label: 'Senior (>7 años)',
      value: 'senior'
    }]
  }, {
    id: 'activity',
    question: '¿Cuál es su nivel de actividad?',
    options: [{
      id: 'low',
      label: 'Tranquilo / Sofá',
      icon: Heart,
      value: 'low'
    }, {
      id: 'normal',
      label: 'Activo / Paseos',
      icon: Activity,
      value: 'normal'
    }, {
      id: 'high',
      label: 'Atleta / Muy Activo',
      icon: Weight,
      value: 'high'
    }]
  }, {
    id: 'goal',
    question: '¿Algún objetivo de salud?',
    options: [{
      id: 'maintenance',
      label: 'Mantenimiento General',
      value: 'maintenance'
    }, {
      id: 'weight',
      label: 'Control de Peso',
      value: 'weight'
    }, {
      id: 'skin',
      label: 'Piel y Pelaje',
      value: 'skin'
    }, {
      id: 'digestion',
      label: 'Digestión Sensible',
      value: 'digestion'
    }]
  }];
  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [steps[currentStep].id]: value
    }));
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };
  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };
  // Mock recommendation logic
  const getRecommendation = () => {
    // In a real app, this would filter products based on answers
    return {
      name: answers.petType === 'dog' ? 'Receta de Pollo y Calabaza' : 'Salmón del Atlántico',
      image: answers.petType === 'dog' ? 'https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&q=80&w=800' : 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
      description: 'Fórmula perfecta para su nivel de actividad y etapa de vida.',
      match: 98
    };
  };
  return <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 max-w-2xl mx-auto">
      <div className="bg-primary-600 p-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <h3 className="text-2xl font-bold font-serif relative z-10">
          {isCompleted ? '¡Tenemos su plan ideal!' : 'Descubre su fórmula perfecta'}
        </h3>
        {!isCompleted && <div className="flex justify-center gap-2 mt-4 relative z-10">
            {steps.map((_, idx) => <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx <= currentStep ? 'w-8 bg-white' : 'w-2 bg-white/30'}`} />)}
          </div>}
      </div>

      <div className="p-8 min-h-[400px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!isCompleted ? <motion.div key={currentStep} initial={{
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
        }}>
              <h4 className="text-xl font-bold text-charcoal-900 mb-8 text-center">
                {steps[currentStep].question}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps[currentStep].options.map(option => <button key={option.id} onClick={() => handleAnswer(option.value)} className="group flex flex-col items-center p-6 rounded-2xl border-2 border-gray-100 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-center">
                    {option.icon && <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-charcoal-500 mb-3 group-hover:scale-110 group-hover:border-primary-200 group-hover:text-primary-600 transition-all">
                        <option.icon className="w-6 h-6" />
                      </div>}
                    <span className="font-bold text-charcoal-700 group-hover:text-primary-700">
                      {option.label}
                    </span>
                  </button>)}
              </div>
            </motion.div> : <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                <Check className="w-10 h-10" strokeWidth={3} />
              </div>

              <h4 className="text-2xl font-bold text-charcoal-900 mb-2">
                Recomendamos: {getRecommendation().name}
              </h4>

              <div className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-3 py-1 rounded-full mb-6">
                {getRecommendation().match}% Compatibilidad
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 group cursor-pointer shadow-lg">
                <img src={getRecommendation().image} alt="Producto recomendado" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white text-sm font-medium text-left">
                    {getRecommendation().description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="w-full rounded-xl shadow-lg shadow-primary-600/20">
                  Ver Producto <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" onClick={resetQuiz} className="w-full rounded-xl">
                  Empezar de nuevo
                </Button>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
}