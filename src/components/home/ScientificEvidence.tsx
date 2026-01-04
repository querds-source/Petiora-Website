import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Activity, FileText, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
export function ScientificEvidence() {
  return <section className="py-24 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <Badge className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-6 backdrop-blur-sm">
              Evidencia Clínica
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Resultados respaldados por datos.
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              No nos basamos en opiniones. Realizamos estudios continuos para
              medir el impacto real de nuestra nutrición en la salud a largo
              plazo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Visualization */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Activity className="w-5 h-5 text-emerald-400" />
              Digestibilidad Comparativa
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-white">
                    Petiora (Comida Real)
                  </span>
                  <span className="font-bold text-emerald-400">92%</span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: '92%'
                }} transition={{
                  duration: 1.5,
                  ease: 'easeOut'
                }} className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Alta biodisponibilidad de nutrientes y menor residuo.
                </p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-gray-300">
                    Pienso Super Premium
                  </span>
                  <span className="font-bold text-gray-400">75%</span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: '75%'
                }} transition={{
                  duration: 1.5,
                  delay: 0.2,
                  ease: 'easeOut'
                }} className="h-full bg-gray-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-gray-300">
                    Pienso Estándar
                  </span>
                  <span className="font-bold text-gray-400">60%</span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: '60%'
                }} transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: 'easeOut'
                }} className="h-full bg-gray-600 rounded-full" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-500">
              *Estudio in vitro de digestibilidad de materia seca y proteína
              (2023).
            </div>
          </div>

          {/* Key Findings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2 font-serif">
                -32%
              </div>
              <div className="font-bold text-lg mb-2">Grasa Corporal</div>
              <p className="text-sm text-gray-400">
                Reducción media en perros con sobrepeso tras 3 meses de dieta
                personalizada.
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2 font-serif">
                +45%
              </div>
              <div className="font-bold text-lg mb-2">Hidratación</div>
              <p className="text-sm text-gray-400">
                Aumento en la ingesta hídrica diaria gracias a la humedad
                natural de los alimentos.
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2 font-serif">
                pH
              </div>
              <div className="font-bold text-lg mb-2">Orina Equilibrada</div>
              <p className="text-sm text-gray-400">
                Mantenimiento del pH urinario óptimo (6.0-6.5) previniendo
                cristales.
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors p-6 flex flex-col justify-center items-center text-center cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div className="font-bold text-sm mb-1">Ver Estudio Completo</div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                PDF (2.4MB) <ExternalLink className="w-3 h-3" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}