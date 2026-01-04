import React from 'react';
import { Product } from '../../utils/types';
import { Activity, Flame, Scale, Info, CheckCircle2, Droplet, Beef, Wheat, Fish, Bone, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
interface NutritionalInfoProps {
  product: Product;
}
export function NutritionalInfo({
  product
}: NutritionalInfoProps) {
  // Mock data enhancement
  const guaranteedAnalysis = [{
    label: 'Proteína Bruta',
    value: 28,
    unit: '%',
    minMax: 'mín.',
    icon: Beef,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    barColor: 'bg-rose-500',
    description: 'Mantenimiento muscular y tejidos'
  }, {
    label: 'Grasa Bruta',
    value: 16,
    unit: '%',
    minMax: 'mín.',
    icon: Droplet,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    barColor: 'bg-amber-500',
    description: 'Energía y salud de piel/pelaje'
  }, {
    label: 'Fibra Bruta',
    value: 3.5,
    unit: '%',
    minMax: 'máx.',
    icon: Wheat,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    barColor: 'bg-emerald-500',
    description: 'Salud digestiva y saciedad'
  }, {
    label: 'Ceniza Bruta',
    value: 7.5,
    unit: '%',
    minMax: 'máx.',
    icon: Bone,
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    barColor: 'bg-slate-500',
    description: 'Minerales esenciales'
  }, {
    label: 'Omega-3',
    value: 0.8,
    unit: '%',
    minMax: 'mín.',
    icon: Fish,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    barColor: 'bg-blue-500',
    description: 'Antiinflamatorio natural'
  }];
  const additives = [{
    type: 'Vitaminas',
    icon: Leaf,
    items: ['Vitamina A 22000 UI', 'Vitamina D3 1600 UI', 'Vitamina E 500 mg']
  }, {
    type: 'Oligoelementos',
    icon: Scale,
    items: ['Hierro 75 mg', 'Yodo 3.5 mg', 'Cobre 10 mg', 'Manganeso 7.5 mg', 'Zinc 120 mg', 'Selenio 0.12 mg']
  }, {
    type: 'Aminoácidos',
    icon: Activity,
    items: ['Taurina 1000 mg', 'L-Carnitina 100 mg']
  }];
  const energyValue = 3850; // kcal/kg
  return <div className="space-y-8">
      {/* Energy Value Card */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100 flex flex-col sm:flex-row items-center justify-between shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="flex items-center gap-6 relative z-10 mb-4 sm:mb-0">
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-amber-500 shadow-md shadow-amber-100 border border-amber-50">
            <Flame className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-bold text-charcoal-900 text-xl font-serif">
              Energía Metabolizable
            </h4>
            <p className="text-sm text-charcoal-600 mt-1">
              Calculada según estándares NRC 2006
            </p>
          </div>
        </div>
        <div className="text-right relative z-10 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/50 shadow-sm">
          <span className="text-4xl font-bold text-charcoal-900 font-serif tracking-tight">
            {energyValue}
          </span>
          <span className="text-xs text-charcoal-500 font-bold ml-2 uppercase tracking-wide">
            kcal/kg
          </span>
        </div>
      </div>

      {/* Guaranteed Analysis Visual Table */}
      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="bg-gray-50/50 px-8 py-5 border-b border-gray-100 flex items-center gap-3 backdrop-blur-sm">
          <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
            <Activity className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-charcoal-900 text-lg">
            Análisis Garantizado
          </h4>
        </div>
        <div className="divide-y divide-gray-100">
          {guaranteedAnalysis.map((item, idx) => <div key={idx} className="p-6 sm:p-8 hover:bg-gray-50/50 transition-colors group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shadow-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-charcoal-900 text-base">
                      {item.label}
                    </div>
                    <div className="text-xs text-charcoal-500 mt-0.5 font-medium">
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className="text-right pl-16 sm:pl-0">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-2xl font-bold text-charcoal-900 font-serif">
                      {item.value}
                    </span>
                    <span className="text-sm font-bold text-charcoal-500">
                      {item.unit}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-md">
                    {item.minMax}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden pl-16 sm:pl-0">
                <motion.div initial={{
              width: 0
            }} whileInView={{
              width: `${item.value / 40 * 100}%`
            }} viewport={{
              once: true
            }} transition={{
              duration: 1,
              delay: idx * 0.1,
              ease: 'easeOut'
            }} className={`h-full ${item.barColor} rounded-full`} />
              </div>
            </div>)}
        </div>
      </div>

      {/* Additives Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {additives.map((group, idx) => <div key={idx} className={`bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow ${idx === 2 ? 'md:col-span-2' : ''}`}>
            <h5 className="font-bold text-xs text-primary-700 uppercase tracking-wider mb-4 flex items-center gap-2 pb-3 border-b border-gray-50">
              <group.icon className="w-4 h-4" />
              {group.type}
            </h5>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-50 text-charcoal-700 text-sm border border-gray-100 font-medium hover:bg-primary-50 hover:text-primary-700 hover:border-primary-100 transition-colors cursor-default">
                  {item}
                </span>)}
            </div>
          </div>)}
      </div>

      {/* Info Note */}
      <div className="flex gap-5 p-6 rounded-3xl bg-blue-50/50 text-blue-900 text-sm border border-blue-100/50 items-start">
        <div className="bg-blue-100 rounded-xl p-2 h-fit text-blue-600 shadow-sm">
          <Info className="w-5 h-5" />
        </div>
        <p className="leading-relaxed opacity-90 pt-1">
          Esta receta está formulada para cumplir con los niveles nutricionales
          establecidos por los perfiles de nutrientes de alimentos para mascotas
          de la <strong className="font-bold text-blue-800">FEDIAF</strong>{' '}
          (Federación Europea de la Industria de Alimentos para Mascotas) para
          todas las etapas de la vida.
        </p>
      </div>
    </div>;
}