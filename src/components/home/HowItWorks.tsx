import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Truck, ArrowRight, ShieldCheck, Clock, Snowflake, CheckCircle2, XCircle, ChefHat, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Tooltip } from '../ui/Tooltip';
import { Card } from '../ui/Card';
import { ComparisonIndicator } from '../ui/ComparisonIndicator';
import { EnhancedScrollReveal } from '../common/EnhancedScrollReveal';
const steps = [{
  icon: ClipboardCheck,
  title: '1. Diagnóstico Veterinario',
  description: 'Tu perro es único. Nuestro algoritmo analiza 15 puntos de datos (raza, edad, actividad, alergias) para calcular sus necesidades calóricas y nutricionales exactas.',
  detail: 'Algoritmo validado por veterinarios',
  color: 'text-blue-600',
  bg: 'bg-blue-50',
  time: '2 min',
  tooltip: 'Consideramos factores como esterilización, condición corporal y patologías previas.'
}, {
  icon: ChefHat,
  title: '2. Cocción Sous-Vide (80°C)',
  description: 'Cocinamos al vacío a baja temperatura (80°C) durante 4 horas para eliminar patógenos mientras preservamos vitaminas y sabor. La industria extrusora quema los nutrientes a 180°C+.',
  detail: 'Certificado IFS Food',
  color: 'text-amber-600',
  bg: 'bg-amber-50',
  time: 'Diario',
  tooltip: 'El método Sous-Vide mantiene la estructura de las proteínas intacta, facilitando la digestión.'
}, {
  icon: Snowflake,
  title: '3. Ultra-Congelación',
  description: 'Abatimos la temperatura instantáneamente a -30°C para bloquear la frescura y seguridad alimentaria de forma natural, sin usar ni un solo conservante químico.',
  detail: 'Seguridad alimentaria ISO 22000',
  color: 'text-cyan-600',
  bg: 'bg-cyan-50',
  time: 'Inmediato',
  tooltip: 'La congelación rápida evita la formación de cristales de hielo grandes que dañarían las células de los alimentos.'
}, {
  icon: Truck,
  title: '4. Entrega Refrigerada',
  description: 'Recibes las raciones exactas en transporte frío (2-8°C) directo a tu puerta. Simplemente descongela, sirve y observa cómo mejora su salud.',
  detail: 'Cadena de frío garantizada',
  color: 'text-emerald-600',
  bg: 'bg-emerald-50',
  time: '24/48h',
  tooltip: 'Usamos cajas isotérmicas reciclables que mantienen la temperatura hasta 48 horas.'
}];
const comparisonData = [{
  feature: 'Temperatura de Cocción',
  petiora: '80°C (Suave)',
  kibble: '140-180°C (Extrema)'
}, {
  feature: 'Humedad',
  petiora: '70% (Hidratante)',
  kibble: '10% (Deshidratante)'
}, {
  feature: 'Conservantes',
  petiora: 'Congelación Natural',
  kibble: 'Químicos Artificiales'
}, {
  feature: 'Ingredientes',
  petiora: 'Grado Humano',
  kibble: 'Subproductos/Harinas'
}];
export function HowItWorks() {
  return <section className="py-24 lg:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2D4A3E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <EnhancedScrollReveal>
            <Badge variant="secondary" size="md" className="mb-6 shadow-sm">
              Del Laboratorio a tu Puerta
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal-900 mb-6">
              Ciencia y frescura en{' '}
              <span className="text-primary-600 relative inline-block">
                4 pasos
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-charcoal-600 font-light leading-relaxed text-pretty">
              Combinamos nutrición clínica con procesos de cocina artesanal. Sin
              procesados industriales, sin aditivos, solo comida real tratada
              con respeto.
            </p>
          </EnhancedScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-100 via-amber-100 to-emerald-100 -z-10 border-t border-dashed border-gray-300" />

          {steps.map((step, idx) => <EnhancedScrollReveal key={idx} delay={idx * 0.15} className="relative group flex flex-col items-center text-center">
              <div className="bg-[#FAF7F2] p-3 rounded-full mb-8 relative z-10">
                <div className={`w-28 h-28 rounded-full ${step.bg} flex items-center justify-center shadow-soft-lg mx-auto relative group-hover:scale-105 transition-transform duration-300 border-4 border-white`}>
                  <step.icon className={`w-12 h-12 ${step.color}`} strokeWidth={1.5} />
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-charcoal-900 text-white border-2 border-white flex items-center justify-center font-bold text-sm shadow-md">
                    {idx + 1}
                  </div>
                </div>
              </div>

              <div className="px-2 flex-1 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-charcoal-900 font-serif">
                    {step.title}
                  </h3>
                  <Tooltip content={step.tooltip}>
                    <Info className="w-4 h-4 text-charcoal-400 hover:text-primary-600 cursor-help transition-colors" />
                  </Tooltip>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-100 text-[10px] font-bold text-charcoal-500 uppercase tracking-wide mb-4 shadow-sm">
                  <Clock className="w-3 h-3" />
                  {step.time}
                </div>
                <p className="text-sm text-charcoal-600 leading-relaxed font-medium mb-4">
                  {step.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-1.5 text-[10px] font-bold text-primary-800 bg-primary-50/80 px-3 py-1.5 rounded-lg border border-primary-100">
                  <ShieldCheck className="w-3 h-3" />
                  {step.detail}
                </div>
              </div>
            </EnhancedScrollReveal>)}
        </div>

        {/* Comparison Section - Enhanced */}
        <EnhancedScrollReveal delay={0.2} className="mb-24 max-w-4xl mx-auto">
          <Card className="p-8 bg-white border-gray-100 shadow-soft-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="text-center mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-charcoal-900 font-serif mb-2">
                Petiora vs. Pienso Tradicional
              </h3>
              <p className="text-charcoal-600 text-sm">
                Por qué la comida real marca la diferencia en su salud
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center px-4 py-2 bg-primary-50 rounded-lg border border-primary-100">
                  <span className="font-bold text-primary-900">
                    Petiora (Comida Real)
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                {comparisonData.map((item, idx) => <div key={idx} className="flex justify-between items-center px-4 py-3 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-charcoal-600 font-medium">
                      {item.feature}
                    </span>
                    <span className="text-sm font-bold text-emerald-700">
                      {item.petiora}
                    </span>
                  </div>)}
              </div>

              <div className="space-y-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg border border-gray-200">
                  <span className="font-bold text-charcoal-700">
                    Pienso Industrial
                  </span>
                  <XCircle className="w-5 h-5 text-rose-500" />
                </div>
                {comparisonData.map((item, idx) => <div key={idx} className="flex justify-between items-center px-4 py-3 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-charcoal-500">
                      {item.feature}
                    </span>
                    <span className="text-sm font-medium text-rose-600">
                      {item.kibble}
                    </span>
                  </div>)}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-xs font-bold text-charcoal-500 uppercase tracking-wide mb-4 text-center">
                Impacto en Nutrientes
              </h4>
              <ComparisonIndicator label="Retención de Vitaminas" usValue={95} themValue={30} usLabel="Cocción Lenta (80°C)" themLabel="Extrusión (180°C)" highlight />
            </div>
          </Card>
        </EnhancedScrollReveal>
      </div>
    </section>;
}