import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../ProductCard';
import { getRecommendationsByFilter } from '../../utils/productRecommendations';
export function RecommendationsSection() {
  // Get recommendations based on mock user profile (dog owner)
  const recommendations = getRecommendationsByFilter('dog', undefined, 3);
  return <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-gray-900">
            Recomendado para ti
          </h2>
        </div>
        <Link to="/productos" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center group">
          Ver todo
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>;
}