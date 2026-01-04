import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Info } from 'lucide-react';
interface Nutrient {
  label: string;
  value: number;
  unit: string;
  color: string;
  description: string;
}
interface NutritionalBreakdownProps {
  nutrients?: Nutrient[];
}
export function NutritionalBreakdown({
  nutrients
}: NutritionalBreakdownProps) {
  // Default data if none provided
  const defaultNutrients: Nutrient[] = [{
    label: 'Proteína Bruta',
    value: 32,
    unit: '%',
    color: 'bg-primary-600',
    description: 'Músculo magro y reparación de tejidos. Fuente: Pollo de corral y Pavo.'
  }, {
    label: 'Grasa Bruta',
    value: 18,
    unit: '%',
    color: 'bg-amber-500',
    description: 'Energía sostenida y piel saludable. Fuente: Aceite de salmón y grasa de pollo.'
  }, {
    label: 'Fibra Bruta',
    value: 4,
    unit: '%',
    color: 'bg-emerald-500',
    description: 'Salud digestiva y saciedad. Fuente: Calabaza, zanahoria y guisantes.'
  }, {
    label: 'Ceniza Bruta',
    value: 7.5,
    unit: '%',
    color: 'bg-gray-500',
    description: 'Minerales esenciales (calcio, fósforo). Fuente: Huesos carnosos.'
  }, {
    label: 'Humedad',
    value: 10,
    unit: '%',
    color: 'bg-blue-400',
    description: 'Contenido de agua natural preservado tras la cocción lenta.'
  }, {
    label: 'Omega-3',
    value: 1.2,
    unit: '%',
    color: 'bg-indigo-500',
    description: 'Antiinflamatorio natural, salud cognitiva y articular.'
  }];
  const data = nutrients || defaultNutrients;
  return <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-100 border border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-charcoal-900 font-serif">
            Perfil Nutricional Analítico
          </h3>
          <p className="text-sm text-charcoal-500">
            Análisis garantizado por laboratorio independiente (Eurofins)
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {data.map((item, index) => <div key={index} className="group">
            <div className="flex justify-between items-end mb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-charcoal-800 text-base">
                  {item.label}
                </span>
                <div className="group/tooltip relative">
                  <Info className="w-4 h-4 text-gray-400 cursor-help" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-charcoal-900 text-white text-xs rounded-xl shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-10 pointer-events-none">
                    {item.description}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-charcoal-900"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-charcoal-900">
                  {item.value}
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {item.unit}
                </span>
              </div>
            </div>

            <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
              <motion.div initial={{
            width: 0
          }} whileInView={{
            width: `${item.value / (item.unit === '%' ? 100 : 50) * 100}%`
          }} viewport={{
            once: true
          }} transition={{
            duration: 1.5,
            delay: index * 0.1,
            ease: 'easeOut'
          }} className={`absolute top-0 left-0 h-full rounded-full ${item.color}`}>
                <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
              </motion.div>
            </div>

            <p className="mt-2 text-xs text-charcoal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
              {item.description}
            </p>
          </div>)}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>Energía Metabolizable: 3.850 kcal/kg</span>
        <span>Base Seca</span>
      </div>
    </div>;
}