import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecentlyViewed } from '../../utils/recentlyViewed';
import { Product } from '../../utils/types';
import { ProductCard } from '../ProductCard';
import { Clock, ArrowRight } from 'lucide-react';
export function RecentlyViewed() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    // Load on mount and listen for storage changes (custom event or polling could be better, but simple mount check works for navigation)
    setProducts(getRecentlyViewed());
    // Optional: Listen for custom event if we want real-time updates across components
    const handleStorage = () => setProducts(getRecentlyViewed());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  if (products.length === 0) return null;
  return <section className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-gray-900">
            Visto Recientemente
          </h2>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {products.map(product => <div key={product.id} className="min-w-[260px] max-w-[260px] snap-start">
                <ProductCard product={product} />
              </div>)}
            {products.length > 4 && <div className="min-w-[100px] flex items-center justify-center snap-start">
                <Link to="/productos" className="flex flex-col items-center text-emerald-600 hover:text-emerald-700 font-medium group">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  Ver todo
                </Link>
              </div>}
          </div>
        </div>
      </div>
    </section>;
}