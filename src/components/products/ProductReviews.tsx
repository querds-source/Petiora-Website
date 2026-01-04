import React from 'react';
import { Star, ThumbsUp, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Progress } from '../ui/Progress';
interface ProductReviewsProps {
  productId: string;
}
export function ProductReviews({
  productId
}: ProductReviewsProps) {
  // Mock reviews data
  const reviews = [{
    id: 1,
    author: 'María G.',
    rating: 5,
    date: 'Hace 2 semanas',
    verified: true,
    title: 'A mi perro le encanta',
    content: 'Desde que cambiamos a esta comida, el pelaje de Max brilla mucho más y tiene más energía. Se nota la calidad de los ingredientes.',
    helpful: 12
  }, {
    id: 2,
    author: 'Carlos R.',
    rating: 5,
    date: 'Hace 1 mes',
    verified: true,
    title: 'Excelente calidad',
    content: 'El envío llegó muy rápido y refrigerado perfectamente. La transición fue muy fácil y sin problemas digestivos.',
    helpful: 8
  }, {
    id: 3,
    author: 'Laura P.',
    rating: 4,
    date: 'Hace 1 mes',
    verified: true,
    title: 'Muy bueno pero precio alto',
    content: 'La calidad es innegable, pero el precio es un poco elevado para mi presupuesto mensual. Aun así, lo compro ocasionalmente.',
    helpful: 5
  }];
  return <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft-lg border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Summary Column */}
        <div className="lg:w-1/3">
          <h3 className="text-2xl font-bold font-serif text-charcoal-900 mb-6">
            Opiniones de Clientes
          </h3>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-6xl font-bold text-charcoal-900 font-serif">
              4.8
            </span>
            <div className="flex flex-col">
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-sm text-gray-500">
                Basado en 128 reseñas
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[5, 4, 3, 2, 1].map(stars => <div key={stars} className="flex items-center gap-3 text-sm">
                <span className="w-3 font-bold text-gray-600">{stars}</span>
                <Star className="w-4 h-4 text-gray-300" />
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{
                width: stars === 5 ? '70%' : stars === 4 ? '20%' : '5%'
              }} />
                </div>
                <span className="w-8 text-right text-gray-400">
                  {stars === 5 ? '70%' : stars === 4 ? '20%' : '5%'}
                </span>
              </div>)}
          </div>

          <Button className="w-full">Escribir una reseña</Button>
        </div>

        {/* Reviews List */}
        <div className="lg:w-2/3 space-y-8">
          {reviews.map(review => <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-charcoal-900">
                      {review.author}
                    </span>
                    {review.verified && <div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Compra Verificada
                      </div>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-200'}`} />)}
                    </div>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-charcoal-800 mb-2">
                {review.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {review.content}
              </p>

              <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-primary-600 transition-colors">
                <ThumbsUp className="w-3.5 h-3.5" />
                Es útil ({review.helpful})
              </button>
            </div>)}
        </div>
      </div>
    </div>;
}