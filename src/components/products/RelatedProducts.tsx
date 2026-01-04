import React from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../ProductCard';
interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}
export function RelatedProducts({
  currentProductId,
  category
}: RelatedProductsProps) {
  const related = products.filter(p => p.category === category && p.id !== currentProductId).slice(0, 4);
  if (related.length === 0) return null;
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {related.map(product => <div key={product.id} className="h-full">
          <ProductCard product={product} />
        </div>)}
    </div>;
}