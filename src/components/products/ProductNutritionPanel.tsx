import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Info, ChevronDown, ChevronUp, Activity, Flame, Droplets, Wheat } from 'lucide-react';
import { Card } from '../ui/Card';
interface NutrientData {
  name: string;
  value: number;
  color: string;
  description?: string;
}
interface ProductNutritionPanelProps {
  nutritionalInfo: {
    crudeProtein: string;
    crudeFat: string;
    crudeFiber: string;
    moisture: string;
    kcalPer100g: number;
  };
  ingredients: string[];
}
export function ProductNutritionPanel({
  nutritionalInfo,
  ingredients
}: ProductNutritionPanelProps) {
  const [activeTab, setActiveTab] = useState<'guaranteed' | 'ingredients'>('guaranteed');
  // Parse string percentages to numbers for chart
  const protein = parseFloat(nutritionalInfo.crudeProtein);
  const fat = parseFloat(nutritionalInfo.crudeFat);
  const fiber = parseFloat(nutritionalInfo.crudeFiber);
  const moisture = parseFloat(nutritionalInfo.moisture);
  const other = 100 - (protein + fat + fiber + moisture);
  const data: NutrientData[] = [{
    name: 'Proteína',
    value: protein,
    color: '#F97316',
    description: 'Músculos fuertes y energía'
  }, {
    name: 'Grasa',
    value: fat,
    color: '#3B82F6',
    description: 'Piel sana y pelaje brillante'
  }, {
    name: 'Fibra',
    value: fiber,
    color: '#10B981',
    description: 'Digestión saludable'
  }, {
    name: 'Humedad',
    value: moisture,
    color: '#0EA5E9',
    description: 'Hidratación natural'
  }, {
    name: 'Otros',
    value: other,
    color: '#94A3B8',
    description: 'Minerales y vitaminas'
  }];
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Chart Section */}
      <Card className="p-6 md:p-8 bg-white shadow-soft-lg border-gray-100">
        <h3 className="text-xl font-bold font-serif text-charcoal-900 mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary-600" />
          Análisis Garantizado
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                  {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <RechartsTooltip contentStyle={{
                borderRadius: '12px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }} itemStyle={{
                color: '#1F2937',
                fontWeight: 'bold'
              }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-charcoal-900">
                {nutritionalInfo.kcalPer100g}
              </span>
              <span className="text-[10px] text-gray-500 font-bold uppercase">
                kcal/100g
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-3 w-full">
            {data.map(item => <div key={item.name} className="flex items-center justify-between group cursor-help">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: item.color
              }} />
                  <span className="text-sm font-medium text-charcoal-700">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-charcoal-900">
                    {item.value.toFixed(1)}%
                  </span>
                  <Info className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary-500 transition-colors" />
                </div>
              </div>)}
          </div>
        </div>
      </Card>

      {/* Ingredients List */}
      <Card className="p-6 md:p-8 bg-white shadow-soft-lg border-gray-100 h-full">
        <h3 className="text-xl font-bold font-serif text-charcoal-900 mb-6 flex items-center gap-2">
          <Wheat className="w-5 h-5 text-amber-500" />
          Ingredientes Premium
        </h3>

        <div className="prose prose-sm text-gray-600 max-w-none">
          <p className="leading-relaxed">
            {ingredients.map((ingredient, index) => <span key={index} className="inline-block">
                <span className={`font-medium ${index < 3 ? 'text-primary-700 font-bold' : 'text-charcoal-700'}`}>
                  {ingredient}
                </span>
                {index < ingredients.length - 1 && <span className="mr-1.5">,</span>}
              </span>)}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
          <div className="bg-primary-50 rounded-xl p-4 flex items-start gap-3">
            <Flame className="w-5 h-5 text-primary-600 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-primary-800 uppercase mb-1">
                Cocción Lenta
              </p>
              <p className="text-xs text-primary-700 leading-snug">
                Preserva nutrientes y sabor natural sin aditivos artificiales.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
            <Droplets className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-blue-800 uppercase mb-1">
                Hidratación
              </p>
              <p className="text-xs text-blue-700 leading-snug">
                Alto contenido de humedad para salud renal óptima.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>;
}