import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Leaf, Trophy, Star, Recycle, Wind, Droplets } from 'lucide-react';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
export function TrustShowcase() {
  const tabs = [{
    id: 'awards',
    label: 'Premios',
    icon: <Trophy className="w-4 h-4" />,
    content: <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {[{
        title: 'Mejor Startup FoodTech',
        org: 'Food Innovation Awards',
        year: '2023',
        color: 'text-amber-500',
        bg: 'bg-amber-50'
      }, {
        title: 'Producto del Año',
        org: 'Pet Industry Federation',
        year: '2022',
        color: 'text-primary-600',
        bg: 'bg-primary-50'
      }, {
        title: 'Excelencia Nutricional',
        org: 'Veterinary Association',
        year: '2023',
        color: 'text-secondary-600',
        bg: 'bg-secondary-50'
      }, {
        title: 'Sostenibilidad',
        org: 'Green Business Awards',
        year: '2023',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50'
      }].map((award, idx) => <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-gray-100 h-full flex flex-col items-start">
              <div className={`w-12 h-12 rounded-xl ${award.bg} flex items-center justify-center mb-4`}>
                <Award className={`w-6 h-6 ${award.color}`} />
              </div>
              <h3 className="font-bold text-charcoal-900 mb-1">
                {award.title}
              </h3>
              <p className="text-xs text-charcoal-500 uppercase tracking-wide font-bold mb-3 flex-1">
                {award.org}
              </p>
              <span className="inline-block px-2 py-1 rounded bg-gray-100 text-xs font-bold text-charcoal-600">
                {award.year}
              </span>
            </Card>)}
        </div>
  }, {
    id: 'sustainability',
    label: 'Sostenibilidad',
    icon: <Leaf className="w-4 h-4" />,
    content: <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-charcoal-900 font-serif">
              Compromiso 2025:{' '}
              <span className="text-emerald-600">Huella Positiva</span>
            </h3>
            <div className="space-y-6">
              {[{
            label: 'Packaging Reciclable',
            value: 100,
            icon: Recycle
          }, {
            label: 'Ingredientes Locales',
            value: 92,
            icon: Leaf
          }, {
            label: 'Energía Renovable',
            value: 85,
            icon: Wind
          }].map((item, idx) => <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 font-bold text-charcoal-800">
                      <item.icon className="w-4 h-4 text-emerald-500" />
                      {item.label}
                    </div>
                    <span className="text-emerald-700 font-bold">
                      {item.value}%
                    </span>
                  </div>
                  <Progress value={item.value} variant="success" className="h-2" />
                </div>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-emerald-50 border-emerald-100 flex flex-col items-center text-center">
              <Leaf className="w-8 h-8 text-emerald-600 mb-2" />
              <span className="text-2xl font-bold text-charcoal-900">-40%</span>
              <span className="text-xs font-bold text-charcoal-500 uppercase">
                Huella Carbono
              </span>
            </Card>
            <Card className="p-6 bg-blue-50 border-blue-100 flex flex-col items-center text-center">
              <Droplets className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-2xl font-bold text-charcoal-900">-60%</span>
              <span className="text-xs font-bold text-charcoal-500 uppercase">
                Consumo Agua
              </span>
            </Card>
          </div>
        </div>
  }, {
    id: 'certifications',
    label: 'Certificaciones',
    icon: <ShieldCheck className="w-4 h-4" />,
    content: <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {[{
        name: 'ISO 9001',
        desc: 'Gestión Calidad',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
      }, {
        name: 'FEDIAF',
        desc: 'Estándar Europeo',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50'
      }, {
        name: 'HACCP',
        desc: 'Seguridad',
        color: 'text-amber-600',
        bg: 'bg-amber-50'
      }, {
        name: 'Organic',
        desc: 'Ingredientes Bio',
        color: 'text-green-600',
        bg: 'bg-green-50'
      }].map((cert, idx) => <Card key={idx} className="p-6 flex flex-col items-center text-center hover:shadow-md transition-all">
              <div className={`w-12 h-12 rounded-full ${cert.bg} flex items-center justify-center mb-3`}>
                <ShieldCheck className={`w-6 h-6 ${cert.color}`} />
              </div>
              <h4 className="font-bold text-charcoal-900">{cert.name}</h4>
              <p className="text-xs text-charcoal-500">{cert.desc}</p>
            </Card>)}
        </div>
  }];
  return <section className="py-24 bg-[#FAF7F2] border-t border-gray-100">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal-900 font-serif mb-4">
            Excelencia Reconocida
          </h2>
          <p className="text-charcoal-600 max-w-2xl mx-auto">
            Nuestra obsesión por la calidad y la sostenibilidad está certificada
            por los organismos más exigentes.
          </p>
        </div>

        <Tabs tabs={tabs} variant="glass" className="max-w-5xl mx-auto" />
      </div>
    </section>;
}