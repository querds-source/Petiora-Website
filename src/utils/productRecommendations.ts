import { Product } from './types';
import { products } from '../data/products';

/**
 * Get related products based on category and pet type
 */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter(p => p.id !== product.id && (p.category === product.category || p.petType === product.petType)).sort(() => 0.5 - Math.random()) // Simple shuffle
  .slice(0, limit);
}

/**
 * Get frequently bought together products
 * Logic: Suggests snacks or complementary care products
 */
export function getFrequentlyBoughtTogether(product: Product, limit = 2): Product[] {
  // If it's food, suggest snacks or dental care
  if (product.category === 'dog-food' || product.category === 'cat-food') {
    return products.filter(p => p.id !== product.id && (p.category === 'snacks' || p.category === 'care') && (p.petType === product.petType || p.petType === 'both')).slice(0, limit);
  }

  // If it's a snack/care item, suggest main food
  return products.filter(p => p.id !== product.id && (p.category === 'dog-food' || p.category === 'cat-food') && (p.petType === product.petType || p.petType === 'both')).slice(0, limit);
}

/**
 * Get recommendations based on filters (for empty states or general browsing)
 */
export function getRecommendationsByFilter(petType?: string, category?: string, limit = 4): Product[] {
  return products.filter(p => {
    if (petType && p.petType !== petType && p.petType !== 'both') return false;
    if (category && p.category !== category) return false;
    return true;
  }).sort(() => 0.5 - Math.random()).slice(0, limit);
}