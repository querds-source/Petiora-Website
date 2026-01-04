import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Check, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Product } from '../../utils/types';
import { useCart } from '../../context/CartContext';
interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}
export function ProductQuickView({
  product,
  isOpen,
  onClose
}: ProductQuickViewProps) {
  const {
    addToCart
  } = useCart();
  if (!product) return null;
  const handleAddToCart = () => {
    addToCart(product, 1);
    onClose();
  };
  return <AnimatePresence>
      {isOpen && <>
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-50" />
          <motion.div initial={{
        opacity: 0,
        scale: 0.95,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.95,
        y: 20
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300
      }} className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden pointer-events-auto flex flex-col md:flex-row max-h-[90vh]">
              {/* Image Section */}
              <div className="w-full md:w-1/2 bg-gray-50 relative min-h-[300px] md:min-h-full">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {product.isNew && <Badge variant="primary" className="absolute top-6 left-6 shadow-md">
                    NUEVO
                  </Badge>}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'text-gray-200'}`} />)}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">
                      ({product.reviewCount} reseñas)
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold font-serif text-charcoal-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-2xl font-bold text-primary-700">
                    {product.price.toFixed(2)}€
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="space-y-3 mb-8">
                  {product.benefits.slice(0, 4).map((benefit, idx) => <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {benefit}
                      </span>
                    </div>)}
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <Button size="lg" className="w-full rounded-xl font-bold text-lg py-6 shadow-lg shadow-primary-900/10 hover:shadow-primary-900/20" onClick={handleAddToCart} disabled={!product.inStock}>
                    {product.inStock ? <>
                        Añadir al Carrito
                        <ShoppingCart className="ml-2 w-5 h-5" />
                      </> : 'Agotado'}
                  </Button>
                  <Link to={`/productos/${product.id}`} className="w-full" onClick={onClose}>
                    <Button variant="outline" size="lg" className="w-full rounded-xl font-bold border-2 hover:bg-gray-50">
                      Ver Detalles Completos
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
}