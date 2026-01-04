import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Dog, Cat, Activity, Check, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';
interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    icon?: React.ElementType;
  }[];
}
const questions: Question[] = [{
  id: 1,
  text: '¿Para quién buscamos comida hoy?',
  options: [{
    label: 'Perro',
    value: 'dog',
    icon: Dog
  }, {
    label: 'Gato',
    value: 'cat',
    icon: Cat
  }]
}, {
  id: 2,
  text: '¿En qué etapa de vida se encuentra?',
  options: [{
    label: 'Cachorro / Kitten',
    value: 'puppy'
  }, {
    label: 'Adulto',
    value: 'adult'
  }, {
    label: 'Senior (+7 años)',
    value: 'senior'
  }]
}, {
  id: 3,
  text: '¿Tiene alguna necesidad especial?',
  options: [{
    label: 'Ninguna',
    value: 'none'
  }, {
    label: 'Piel Sensible',
    value: 'skin'
  }, {
    label: 'Digestión Delicada',
    value: 'digestion'
  }, {
    label: 'Control de Peso',
    value: 'weight'
  }]
}];
export function ProductRecommendationEngine() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentStep].id]: value
    }));
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };
  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };
  return <div className="bg-gradient-to-br from-primary-900 to-charcoal-900 rounded-[2.5rem] overflow-hidden text-white relative shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full paw-pattern-bg" />
      </div>

      <div className="relative z-10 p-8 sm:p-12 min-h-[500px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!showResult ? <motion.div key="quiz" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} className="max-w-2xl mx-auto w-full">
              <div className="flex items-center gap-3 mb-8 text-primary-300">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Recomendador IA
                </span>
                <span className="ml-auto text-xs font-mono bg-white/10 px-2 py-1 rounded">
                  Paso {currentStep + 1}/{questions.length}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-serif mb-10 leading-tight">
                {questions[currentStep].text}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {questions[currentStep].options.map(option => <button key={option.value} onClick={() => handleAnswer(option.value)} className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 transition-all text-left hover:scale-[1.02]">
                    {option.icon && <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                        <option.icon className="w-6 h-6" />
                      </div>}
                    <span className="text-lg font-bold">{option.label}</span>
                    <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary-400" />
                  </button>)}
              </div>
            </motion.div> : <motion.div key="result" initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="max-w-4xl mx-auto w-full">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-primary-500/30">
                  <Check className="w-4 h-4" />
                  Match Perfecto Encontrado
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
                  La fórmula ideal para tu compañero
                </h3>
                <p className="text-gray-300 max-w-xl mx-auto">
                  Basado en sus necesidades específicas, hemos seleccionado esta
                  fórmula premium para optimizar su salud.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center text-charcoal-900">
                <div className="w-full md:w-1/3 aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&q=80&w=400" alt="Product" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    98% Match
                  </div>
                </div>

                <div className="flex-1 text-left">
                  <h4 className="text-2xl font-bold font-serif mb-2">
                    Fórmula Vitalidad Premium
                  </h4>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-charcoal-600">
                      Grain Free
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-charcoal-600">
                      Alto en Proteína
                    </span>
                  </div>
                  <p className="text-charcoal-600 mb-6 leading-relaxed">
                    Específicamente formulada para{' '}
                    {answers[2] === 'puppy' ? 'el crecimiento' : 'el mantenimiento'}{' '}
                    de {answers[1] === 'dog' ? 'perros' : 'gatos'}, con
                    ingredientes seleccionados para{' '}
                    {answers[3] === 'skin' ? 'mejorar la salud dérmica' : 'una digestión óptima'}
                    .
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-charcoal-900 text-white hover:bg-black">
                      Ver Producto Completo
                    </Button>
                    <button onClick={reset} className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 font-bold hover:bg-gray-50 transition-colors">
                      <RotateCcw className="w-4 h-4" />
                      Empezar de nuevo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
}