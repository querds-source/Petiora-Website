import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../utils/types';
import { useNotifications } from './NotificationsContext';
interface ComparisonContextType {
  comparisonList: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
  isInComparison: (productId: string) => boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  clearComparison: () => void;
}
const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);
export function ComparisonProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [comparisonList, setComparisonList] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    addNotification
  } = useNotifications();
  // Load from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem('petiora_comparison');
    if (stored) {
      try {
        setComparisonList(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);
  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('petiora_comparison', JSON.stringify(comparisonList));
  }, [comparisonList]);
  const addToComparison = (product: Product) => {
    if (comparisonList.length >= 4) {
      addNotification('warning', 'Puedes comparar hasta 4 productos a la vez');
      setIsOpen(true);
      return;
    }
    if (!comparisonList.find(p => p.id === product.id)) {
      setComparisonList(prev => [...prev, product]);
      addNotification('success', `${product.name} añadido al comparador`);
      setIsOpen(true);
    } else {
      addNotification('info', 'Este producto ya está en el comparador');
      setIsOpen(true);
    }
  };
  const removeFromComparison = (productId: string) => {
    setComparisonList(prev => prev.filter(p => p.id !== productId));
  };
  const isInComparison = (productId: string) => {
    return comparisonList.some(p => p.id === productId);
  };
  const clearComparison = () => {
    setComparisonList([]);
    setIsOpen(false);
  };
  return <ComparisonContext.Provider value={{
    comparisonList,
    addToComparison,
    removeFromComparison,
    isInComparison,
    isOpen,
    setIsOpen,
    clearComparison
  }}>
      {children}
    </ComparisonContext.Provider>;
}
export function useComparison() {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
}