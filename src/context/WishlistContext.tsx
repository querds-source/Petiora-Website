import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../utils/types';
import { useNotifications } from './NotificationsContext';
interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
export function WishlistProvider({
  children
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const {
    addNotification
  } = useNotifications();
  // Load from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('petiora_wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Error parsing wishlist', e);
      }
    }
  }, []);
  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('petiora_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  const addToWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      return;
    }
    setWishlist(prev => [...prev, product]);
    addNotification('success', 'Producto añadido a favoritos');
  };
  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(p => p.id !== productId));
    addNotification('info', 'Producto eliminado de favoritos');
  };
  const isInWishlist = (productId: string) => {
    return wishlist.some(p => p.id === productId);
  };
  const clearWishlist = () => {
    setWishlist([]);
  };
  return <WishlistContext.Provider value={{
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist
  }}>
      {children}
    </WishlistContext.Provider>;
}
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}