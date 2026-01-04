import React from 'react';
import { Quote, Stethoscope, CheckCircle2 } from 'lucide-react';
export function VeterinaryRecommendation() {
  return <div className="bg-secondary-50 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 opacity-60 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Vet Profile */}
        <div className="flex-shrink-0 text-center lg:text-left">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Dra. Elena Martínez" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md z-20">
              <Stethoscope className="w-5 h-5 text-secondary-600" />
            </div>
          </div>
          <h4 className="text-lg font-bold text-charcoal-900 font-serif">
            Dra. Elena Martínez
          </h4>
          <p className="text-xs text-charcoal-600 font-medium uppercase tracking-wide mb-1">
            Veterinaria Nutricionista
          </p>
          <p className="text-[10px] text-charcoal-500">
            Col. Nº 28492 - Madrid
          </p>
        </div>

        {/* Quote & Content */}
        <div className="flex-1">
          <Quote className="w-10 h-10 text-secondary-300 mb-4 fill-current opacity-50" />

          <blockquote className="text-lg lg:text-xl text-charcoal-800 font-medium leading-relaxed mb-6 italic">
            "Esta fórmula destaca por su{' '}
            <span className="text-secondary-700 font-bold not-italic bg-secondary-100/50 px-1 rounded">
              equilibrio perfecto
            </span>{' '}
            entre proteína de alta biodisponibilidad y fibra prebiótica. La
            recomiendo especialmente para mascotas con sensibilidad digestiva o
            piel atópica, ya que los ingredientes frescos reducen
            significativamente la respuesta inflamatoria."
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50">
              <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0" />
              <span className="text-sm text-charcoal-700 font-medium">
                Formulación Hipoalergénica
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50">
              <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0" />
              <span className="text-sm text-charcoal-700 font-medium">
                Sin Cereales ni Gluten
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50">
              <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0" />
              <span className="text-sm text-charcoal-700 font-medium">
                Apto para todas las etapas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}