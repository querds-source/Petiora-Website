import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Heart, Package, FileText, ArrowRight } from 'lucide-react';
import { Button } from './Button';
interface EmptyStateProps {
  variant?: 'default' | 'search' | 'cart' | 'favorites' | 'orders';
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  icon?: React.ElementType;
}
export function EmptyState({
  variant = 'default',
  title,
  description,
  actionLabel,
  onAction,
  className = '',
  icon: CustomIcon
}: EmptyStateProps) {
  const getIcon = () => {
    if (CustomIcon) return CustomIcon;
    switch (variant) {
      case 'search':
        return Search;
      case 'cart':
        return ShoppingCart;
      case 'favorites':
        return Heart;
      case 'orders':
        return Package;
      default:
        return FileText;
    }
  };
  const Icon = getIcon();
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1]
  }} className={`flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-100 ${className}`}>
      <div className="w-20 h-20 rounded-full bg-white shadow-soft-md flex items-center justify-center mb-6 text-primary-600 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary-50 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon className="w-10 h-10 relative z-10" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal-900 mb-3">
        {title}
      </h3>

      <p className="text-charcoal-500 max-w-md mb-8 leading-relaxed">
        {description}
      </p>

      {actionLabel && onAction && <Button variant="primary" onClick={onAction} rightIcon={<ArrowRight className="w-4 h-4" />} className="shadow-soft-md hover:shadow-soft-lg">
          {actionLabel}
        </Button>}
    </motion.div>;
}