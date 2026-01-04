import { Product } from './types';
const STORAGE_KEY = 'petiora_recently_viewed';
const MAX_ITEMS = 10;
export function getRecentlyViewed(): Product[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Error loading recently viewed products', e);
    return [];
  }
}
export function addToRecentlyViewed(product: Product) {
  try {
    const current = getRecentlyViewed();
    // Remove if already exists to move it to the front
    const filtered = current.filter(p => p.id !== product.id);
    // Add to front
    const newItems = [product, ...filtered].slice(0, MAX_ITEMS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  } catch (e) {
    console.error('Error saving recently viewed product', e);
  }
}