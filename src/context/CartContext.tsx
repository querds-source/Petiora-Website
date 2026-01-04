import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product, CartItem } from '../utils/types';
import { toast } from 'sonner';
interface CartContextType {
  items: CartItem[];
  savedItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  saveForLater: (productId: string) => void;
  moveToCart: (productId: string) => void;
  removeFromSaved: (productId: string) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getSubtotal: () => number;
  getTax: () => number;
  error: string | null;
  isLoading: boolean;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({
  children
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      const storedSaved = localStorage.getItem('savedItems');
      if (storedCart) setItems(JSON.parse(storedCart));
      if (storedSaved) setSavedItems(JSON.parse(storedSaved));
    } catch (err) {
      console.error('Failed to load cart from storage:', err);
      setError('Error al cargar el carrito');
    } finally {
      setIsLoading(false);
    }
  }, []);
  // Save to localStorage on change
  useEffect(() => {
    if (isLoading) return;
    try {
      localStorage.setItem('cart', JSON.stringify(items));
      localStorage.setItem('savedItems', JSON.stringify(savedItems));
    } catch (err) {
      console.error('Failed to save cart to storage:', err);
      setError('Error al guardar el carrito');
    }
  }, [items, savedItems, isLoading]);
  const addToCart = (product: Product, quantity: number = 1) => {
    try {
      if (quantity < 1) {
        toast.error('La cantidad debe ser al menos 1');
        return;
      }
      setItems(currentItems => {
        const existingItem = currentItems.find(item => item.product.id === product.id);
        if (existingItem) {
          // Check stock limit if available in product data
          // const newQuantity = existingItem.quantity + quantity
          // if (product.stock && newQuantity > product.stock) { ... }
          toast.success('Cantidad actualizada en el carrito');
          return currentItems.map(item => item.product.id === product.id ? {
            ...item,
            quantity: item.quantity + quantity
          } : item);
        }
        toast.success('Producto añadido al carrito');
        return [...currentItems, {
          product,
          quantity
        }];
      });
    } catch (err) {
      setError('Error al añadir al carrito');
      toast.error('No se pudo añadir el producto');
    }
  };
  const removeFromCart = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.product.id !== productId));
    toast.info('Producto eliminado del carrito');
  };
  const updateQuantity = (productId: string, quantity: number) => {
    try {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }
      // Optional: Add max stock validation here if product data supports it
      setItems(currentItems => currentItems.map(item => item.product.id === productId ? {
        ...item,
        quantity
      } : item));
    } catch (err) {
      setError('Error al actualizar cantidad');
    }
  };
  const clearCart = () => {
    setItems([]);
    toast.info('Carrito vaciado');
  };
  const saveForLater = (productId: string) => {
    const itemToSave = items.find(item => item.product.id === productId);
    if (itemToSave) {
      setSavedItems(prev => {
        if (prev.some(item => item.product.id === productId)) {
          return prev;
        }
        return [...prev, itemToSave];
      });
      removeFromCart(productId);
      toast.success('Guardado para más tarde');
    }
  };
  const moveToCart = (productId: string) => {
    const itemToMove = savedItems.find(item => item.product.id === productId);
    if (itemToMove) {
      addToCart(itemToMove.product, itemToMove.quantity);
      setSavedItems(prev => prev.filter(item => item.product.id !== productId));
    }
  };
  const removeFromSaved = (productId: string) => {
    setSavedItems(prev => prev.filter(item => item.product.id !== productId));
  };
  const getSubtotal = () => {
    return items.reduce((total, item) => {
      const price = typeof item.product.price === 'number' ? item.product.price : 0;
      return total + price * item.quantity;
    }, 0);
  };
  const getTax = () => {
    return getSubtotal() * 0.21; // 21% IVA
  };
  const getCartTotal = () => {
    return getSubtotal() + getTax();
  };
  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };
  return <CartContext.Provider value={{
    items,
    savedItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    saveForLater,
    moveToCart,
    removeFromSaved,
    getCartTotal,
    getCartCount,
    getSubtotal,
    getTax,
    error,
    isLoading
  }}>
      {children}
    </CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}