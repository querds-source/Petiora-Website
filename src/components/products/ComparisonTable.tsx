import React from 'react';
import { Check, X, Minus } from 'lucide-react';
export function ComparisonTable() {
  const features = [{
    name: 'Ingredientes Frescos (No Harinas)',
    petiora: true,
    premium: false,
    standard: false
  }, {
    name: 'Cocción Lenta (<90°C)',
    petiora: true,
    premium: false,
    standard: false
  }, {
    name: 'Proteína Digestible >90%',
    petiora: true,
    premium: false,
    standard: false
  }, {
    name: 'Sin Cereales de Relleno',
    petiora: true,
    premium: true,
    standard: false
  }, {
    name: 'Probióticos Vivos',
    petiora: true,
    premium: true,
    standard: false
  }, {
    name: 'Personalización por Mascota',
    petiora: true,
    premium: false,
    standard: false
  }, {
    name: 'Trazabilidad Blockchain',
    petiora: true,
    premium: false,
    standard: false
  }];
  return <div className="overflow-x-auto pb-4">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left w-1/3"></th>
            <th className="p-4 w-1/4">
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-primary-600 font-serif mb-1">
                  Petiora
                </div>
                <div className="text-[10px] font-bold bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Tu Elección
                </div>
              </div>
            </th>
            <th className="p-4 w-1/4">
              <div className="flex flex-col items-center opacity-60">
                <div className="text-lg font-bold text-charcoal-600 font-serif mb-1">
                  Marca Premium
                </div>
                <div className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Pienso Caro
                </div>
              </div>
            </th>
            <th className="p-4 w-1/4">
              <div className="flex flex-col items-center opacity-40">
                <div className="text-lg font-bold text-charcoal-600 font-serif mb-1">
                  Marca Estándar
                </div>
                <div className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Supermercado
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => <tr key={index} className={`
                border-b border-gray-100 transition-colors hover:bg-gray-50
                ${index === features.length - 1 ? 'border-none' : ''}
              `}>
              <td className="p-4 text-sm font-bold text-charcoal-700">
                {feature.name}
              </td>

              {/* Petiora Column */}
              <td className="p-4 bg-primary-50/30 border-x border-primary-100/50">
                <div className="flex justify-center">
                  {feature.petiora ? <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shadow-sm">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div> : <X className="w-6 h-6 text-gray-300" />}
                </div>
              </td>

              {/* Premium Column */}
              <td className="p-4">
                <div className="flex justify-center opacity-60">
                  {feature.premium ? <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-charcoal-600">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div> : <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                      <X className="w-3.5 h-3.5" />
                    </div>}
                </div>
              </td>

              {/* Standard Column */}
              <td className="p-4">
                <div className="flex justify-center opacity-40">
                  {feature.standard ? <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-charcoal-600">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div> : <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                      <X className="w-3.5 h-3.5" />
                    </div>}
                </div>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
}