import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Leaf, CheckCircle2, Award, Microscope, QrCode, ShieldCheck, Tractor, Scale, ExternalLink, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';
import { EnhancedScrollReveal } from '../common/EnhancedScrollReveal';
const ingredients = [{
  name: 'Pollo de Corral',
  origin: 'Galicia, España',
  distance: 'Km 0',
  benefits: ['Proteína de alto valor biológico (98%)', 'Sin antibióticos ni hormonas', 'Bajo en grasa saturada'],
  image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=600',
  certification: 'Welfare Quality®',
  certColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  nutrients: {
    protein: '23g',
    fat: '1.2g',
    iron: '1.1mg'
  },
  description: 'Criados en libertad. Utilizamos solo pechuga y muslo enteros, nunca subproductos.',
  scientific: 'Perfil completo de aminoácidos esenciales. Alta digestibilidad.',
  traceability: 'Granja "Los Alisos", Lugo',
  farmStory: 'La familia Méndez lleva 3 generaciones criando aves en libertad en los prados gallegos.',
  carbon: '12g CO2/kg'
}, {
  name: 'Salmón Atlántico',
  origin: 'Fiordos, Noruega',
  distance: 'Pesca Sostenible',
  benefits: ['Omega-3 (EPA/DHA) Antiinflamatorio', 'Protege articulaciones y cartílagos', 'Refuerza barrera cutánea'],
  image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=600',
  certification: 'MSC Certified',
  certColor: 'text-blue-700 bg-blue-50 border-blue-200',
  nutrients: {
    protein: '20g',
    fat: '13g',
    omega3: '2.5g'
  },
  description: 'Fuente premium de ácidos grasos esenciales. Libre de metales pesados.',
  scientific: 'Alta biodisponibilidad de ácidos grasos poliinsaturados.',
  traceability: 'Barco "Nordic Star", Lote #8821',
  farmStory: 'Pesca extractiva controlada que respeta los ciclos naturales y la biodiversidad marina.',
  carbon: '18g CO2/kg'
}, {
  name: 'Calabaza Fresca',
  origin: 'Valencia, España',
  distance: 'Km 0',
  benefits: ['Fibra prebiótica natural', 'Regula tránsito intestinal', 'Rica en antioxidantes'],
  image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&q=80&w=600',
  certification: 'Agricultura Eco',
  certColor: 'text-amber-700 bg-amber-50 border-amber-200',
  nutrients: {
    fiber: '2.5g',
    vitA: 'Alto',
    potassium: '340mg'
  },
  description: 'Superalimento digestivo. Cocinada al vapor suave para preservar vitaminas.',
  scientific: 'Fuente de betacarotenos y fibra soluble fermentable.',
  traceability: 'Huerta "El Sol", Valencia',
  farmStory: 'Cultivada sin pesticidas bajo el sol del Mediterráneo, recolectada en su punto óptimo.',
  carbon: '4g CO2/kg'
}];
export function IngredientsShowcase() {
  return <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#FAF9F6] overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-100/15 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none mix-blend-multiply" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <EnhancedScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Tractor className="w-3.5 h-3.5" />
              Trazabilidad Total Garantizada
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-6 font-serif tracking-tight">
              Del origen a su{' '}
              <span className="text-primary-600 italic font-light">plato.</span>
            </h2>

            <p className="text-lg md:text-xl text-charcoal-600 font-light leading-relaxed text-pretty">
              No escondemos nada porque estamos orgullosos de todo. Trabajamos
              con proveedores locales y granjas éticas para garantizar
              ingredientes de grado humano.
            </p>
          </EnhancedScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((item, index) => <EnhancedScrollReveal key={index} delay={index * 0.15} className="h-full">
              <Card className="h-full group hover:shadow-soft-2xl transition-all duration-500 overflow-hidden border-gray-100 bg-white relative flex flex-col rounded-[2.5rem]" padding="none" interactive>
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute top-5 left-5 z-10">
                    <Badge variant="glass" size="md" className="shadow-lg font-bold backdrop-blur-md border-white/40 bg-white/95 text-charcoal-900 px-3 py-1.5">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary-600" />
                      {item.origin}
                    </Badge>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <p className="text-xs font-bold opacity-90 mb-2 flex items-center gap-1.5 text-primary-200 uppercase tracking-wider">
                      <Award className="w-3 h-3" />
                      {item.distance}
                    </p>
                    <h3 className="text-3xl font-bold font-serif leading-tight mb-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs opacity-80 font-medium">
                      <QrCode className="w-3.5 h-3.5" />
                      <span>{item.traceability}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col relative bg-white">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="success" size="md" className={`${item.certColor} font-bold shadow-sm border px-3 py-1`}>
                      {item.certification}
                    </Badge>
                    <Tooltip content={item.scientific}>
                      <div className="flex items-center gap-1 text-xs font-bold text-charcoal-400 cursor-help hover:text-primary-600 transition-colors">
                        <Microscope className="w-4 h-4" />
                        <span>Ciencia</span>
                      </div>
                    </Tooltip>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    {item.benefits.map((benefit, idx) => <div key={idx} className="flex items-start gap-3 text-sm text-charcoal-600 font-medium group/item">
                        <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary-100 transition-colors">
                          <CheckCircle2 className="w-3 h-3 text-primary-600" />
                        </div>
                        <span className="leading-snug">{benefit}</span>
                      </div>)}
                  </div>

                  {/* Nutrient Grid - Enhanced */}
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 grid grid-cols-3 gap-2 text-center group-hover:bg-primary-50/30 transition-colors duration-300">
                    {Object.entries(item.nutrients).map(([key, value], i) => <div key={i} className="flex flex-col items-center">
                        <span className="text-[9px] uppercase font-bold text-charcoal-400 tracking-wider mb-1">
                          {key === 'vitA' ? 'Vit. A' : key}
                        </span>
                        <span className="text-sm font-bold text-charcoal-900 font-serif">
                          {value}
                        </span>
                      </div>)}
                  </div>

                  {/* Hover Reveal Content - Sophisticated Overlay */}
                  <div className="absolute inset-0 bg-white/98 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-center items-center text-center pointer-events-none group-hover:pointer-events-auto transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6 shadow-sm">
                      <Scale className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-charcoal-900 mb-4">
                      Selección Rigurosa
                    </h4>
                    <p className="text-charcoal-600 text-sm leading-relaxed mb-4 max-w-xs">
                      {item.description}
                    </p>
                    <p className="text-charcoal-500 text-xs italic mb-6 max-w-xs border-t border-gray-100 pt-4">
                      "{item.farmStory}"
                    </p>

                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full mb-6">
                      <Leaf className="w-3.5 h-3.5" />
                      Huella: {item.carbon}
                    </div>

                    <Button variant="outline" size="sm" className="rounded-full px-6 font-bold border-2 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-800">
                      Ver Certificados
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </EnhancedScrollReveal>)}
        </div>

        {/* Quality Assurance Bar */}
        <EnhancedScrollReveal delay={0.4} className="mt-20 bg-white rounded-3xl p-10 shadow-soft-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-charcoal-900 flex items-center justify-center text-white shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-xl text-charcoal-900">
                Control de Calidad Triple
              </h4>
              <p className="text-sm text-charcoal-500 mt-1">
                Auditorías, análisis y test final.
              </p>
            </div>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block" />
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-lg">
              <Leaf className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-xl text-charcoal-900">
                Sostenibilidad Real
              </h4>
              <p className="text-sm text-charcoal-500 mt-1">
                Huella 40% menor que el pienso.
              </p>
            </div>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block" />
          <Button variant="outline" size="lg" className="rounded-full px-8 py-4 group shadow-sm hover:shadow-md border-2 bg-white text-charcoal-900 font-bold whitespace-nowrap">
            Explorar mapa de proveedores
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </EnhancedScrollReveal>
      </div>
    </section>;
}