import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
interface IngredientStoryProps {
  ingredient: {
    name: string;
    image: string;
    origin: string;
    farmer: string;
    benefits: string[];
    harvestDate?: string;
  };
}
export function IngredientStory({
  ingredient
}: IngredientStoryProps) {
  return <div className="relative overflow-hidden rounded-3xl bg-charcoal-900 text-white">
      <div className="absolute inset-0 opacity-40">
        <img src={ingredient.image} alt={ingredient.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent" />
      </div>

      <div className="relative z-10 p-8 md:p-12 max-w-2xl">
        <Badge variant="secondary" className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
          Ingrediente Estrella
        </Badge>

        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          {ingredient.name}
        </h3>

        <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary-400" />
            <span>{ingredient.origin}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary-400" />
            <span>Productor: {ingredient.farmer}</span>
          </div>
          {ingredient.harvestDate && <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary-400" />
              <span>Cosecha: {ingredient.harvestDate}</span>
            </div>}
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-lg font-light leading-relaxed text-gray-200">
            Seleccionamos este ingrediente por su excepcional perfil nutricional
            y origen ético. Cada lote es verificado para garantizar la máxima
            frescura y calidad.
          </p>

          <div className="flex flex-wrap gap-3">
            {ingredient.benefits.map((benefit, idx) => <span key={idx} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium backdrop-blur-sm">
                {benefit}
              </span>)}
          </div>
        </div>

        <button className="flex items-center gap-2 text-primary-400 font-bold hover:text-primary-300 transition-colors group">
          Ver trazabilidad completa
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>;
}