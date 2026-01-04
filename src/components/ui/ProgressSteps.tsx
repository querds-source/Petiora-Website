import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
interface Step {
  id: string | number;
  label: string;
  description?: string;
}
interface ProgressStepsProps {
  steps: Step[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  onStepClick?: (stepIndex: number) => void;
}
export function ProgressSteps({
  steps,
  currentStep,
  orientation = 'horizontal',
  className = '',
  onStepClick
}: ProgressStepsProps) {
  return <div className={`${orientation === 'vertical' ? 'flex flex-col space-y-0' : 'flex items-center justify-between w-full'} ${className}`}>
      {steps.map((step, index) => {
      const isCompleted = index < currentStep;
      const isCurrent = index === currentStep;
      const isUpcoming = index > currentStep;
      return <div key={step.id} className={`relative flex ${orientation === 'vertical' ? 'flex-row pb-8 last:pb-0' : 'flex-col items-center flex-1 last:flex-none'}`}>
            {/* Connecting Line */}
            {index < steps.length - 1 && <div className={`absolute bg-gray-200 transition-colors duration-500
                  ${orientation === 'vertical' ? 'left-[15px] top-8 bottom-0 w-0.5' : 'top-[15px] left-[50%] right-[-50%] h-0.5'}
                  ${isCompleted ? 'bg-primary-600' : ''}
                `}>
                <motion.div initial={{
            width: '0%',
            height: '0%'
          }} animate={{
            width: orientation === 'horizontal' && isCompleted ? '100%' : '0%',
            height: orientation === 'vertical' && isCompleted ? '100%' : '0%'
          }} className="bg-primary-600 absolute top-0 left-0" transition={{
            duration: 0.5
          }} />
              </div>}

            {/* Step Circle */}
            <button onClick={() => onStepClick && index <= currentStep && onStepClick(index)} disabled={!onStepClick || index > currentStep} className={`
                relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300
                ${isCompleted ? 'bg-primary-600 border-primary-600 text-white' : isCurrent ? 'bg-white border-primary-600 text-primary-600 shadow-soft-md ring-4 ring-primary-50' : 'bg-white border-gray-300 text-gray-400'}
                ${onStepClick && index <= currentStep ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
              `}>
              {isCompleted ? <Check className="w-4 h-4" strokeWidth={3} /> : <span className="text-xs font-bold">{index + 1}</span>}
            </button>

            {/* Label & Description */}
            <div className={`
              ${orientation === 'vertical' ? 'ml-4 pt-1' : 'mt-3 text-center'}
              transition-opacity duration-300
              ${isUpcoming ? 'opacity-50' : 'opacity-100'}
            `}>
              <span className={`block text-sm font-bold ${isCurrent ? 'text-primary-800' : 'text-charcoal-700'}`}>
                {step.label}
              </span>
              {step.description && <span className="block text-xs text-charcoal-500 mt-0.5 max-w-[120px]">
                  {step.description}
                </span>}
            </div>
          </div>;
    })}
    </div>;
}