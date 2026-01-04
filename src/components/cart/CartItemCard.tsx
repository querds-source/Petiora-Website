import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, Heart, Package, Truck, AlertTriangle, Clock, ArrowRight, Info, Leaf, Award, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { CartItem } from '../../utils/types';
import { Badge } from '../ui/Badge';
import { Tooltip } from '../ui/Tooltip';
interface CartItemCardProps {
  item: CartItem;
  isSavedItem?: boolean;
}
export function CartItemCard({
  item,
  isSavedItem = false
}: CartItemCardProps) {
  const {
    updateQuantity,
    removeFromCart,
    saveForLater,
    moveToCart,
    removeFromSaved
  } = useCart();
  const {
    addToWishlist,
    isInWishlist
  } = useWishlist();
  const {
    product,
    quantity
  } = item;
  const [isRemoving, setIsRemoving] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const isWishlisted = isInWishlist(product.id);
  // Mock delivery date calculation (3-5 business days)
  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };
  // Calculate savings
  const savings = product.originalPrice ? (product.originalPrice - product.price) * quantity : 0;
  // Mock subscription discount
  const subscriptionDiscount = product.price * 0.15 * quantity;
  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      if (isSavedItem) {
        removeFromSaved(product.id);
      } else {
        removeFromCart(product.id);
      }
    }, 300);
  };
  const handleSaveForLater = () => {
    setIsRemoving(true);
    setTimeout(() => {
      saveForLater(product.id);
    }, 300);
  };
  const handleMoveToCart = () => {
    setIsRemoving(true);
    setTimeout(() => {
      moveToCart(product.id);
    }, 300);
  };
  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      addToWishlist(product);
    }
  };
  return <motion.div layout initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: isRemoving ? 0 : 1,
    y: isRemoving ? -20 : 0,
    scale: isRemoving ? 0.95 : 1,
    height: isRemoving ? 0 : 'auto',
    marginBottom: isRemoving ? 0 : 'auto'
  }} exit={{
    opacity: 0,
    y: -20,
    scale: 0.95,
    height: 0
  }} transition={{
    duration: 0.4,
    ease: 'easeInOut'
  }} className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start group bg-white hover:bg-gray-50/50 transition-colors duration-300 border-b last:border-b-0 border-gray-100 overflow-hidden relative">
      {/* Savings Badge */}
      {savings > 0 && !isSavedItem && <div className="absolute top-4 right-4 z-10">
          <Badge variant="success" size="sm" className="shadow-soft-md font-bold">
            Ahorras {savings.toFixed(2)}€
          </Badge>
        </div>}

      {/* Product Image */}
      <div className="sm:col-span-3 lg:col-span-2">
        <Link to={`/productos/${product.id}`} className="block relative group/image">
          <motion.div whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.3
        }} className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-soft-sm group-hover/image:shadow-soft-md group-hover/image:border-primary-100 transition-all duration-300 relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply p-4 transition-transform duration-500 group-hover/image:scale-110" />

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-bold flex items-center gap-2">
                Ver detalles <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>

          {/* Product Badges */}
          <div className="absolute bottom-2 left-2 flex gap-2">
            {product.tags?.includes('eco') && <Tooltip content="Ingredientes ecológicos">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-soft-md">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
              </Tooltip>}
            {product.tags?.includes('premium') && <Tooltip content="Calidad premium">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-soft-md">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </Tooltip>}
          </div>
        </Link>
      </div>

      {/* Product Details */}
      <div className="sm:col-span-9 lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <div className="lg:col-span-7">
          <div className="flex flex-col h-full justify-between gap-4">
            <div>
              <div className="flex justify-between items-start mb-3">
                <Link to={`/productos/${product.id}`} className="font-bold text-charcoal-900 text-lg sm:text-xl font-serif hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                  {product.name}
                </Link>
              </div>

              {/* Product Meta */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" size="sm" className="font-bold">
                  {product.weight || '1kg'}
                </Badge>
                <Badge variant="outline" size="sm" className="font-bold capitalize">
                  {product.category?.replace('-', ' ') || 'General'}
                </Badge>
                {product.protein && <Badge variant="primary" size="sm" className="font-bold">
                    {product.protein}% Proteína
                  </Badge>}
              </div>

              {/* Stock & Delivery Status */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {product.inStock ? <span className="text-emerald-600 font-bold flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 text-sm">
                    <Package className="h-4 w-4" />
                    En Stock
                  </span> : <span className="text-rose-500 font-bold flex items-center gap-2 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100 text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    Agotado
                  </span>}
                {!isSavedItem && product.inStock && <span className="text-charcoal-600 flex items-center gap-2 font-medium text-sm">
                    <Truck className="h-4 w-4 text-primary-600" />
                    <span className="font-bold text-charcoal-900">
                      {getDeliveryDate()}
                    </span>
                  </span>}
              </div>

              {/* Additional Info Toggle */}
              <button onClick={() => setShowDetails(!showDetails)} className="text-sm text-primary-600 hover:text-primary-700 font-bold flex items-center gap-2 transition-colors mb-4">
                <Info className="w-4 h-4" />
                {showDetails ? 'Ocultar detalles' : 'Ver detalles del producto'}
              </button>

              <AnimatePresence>
                {showDetails && <motion.div initial={{
                opacity: 0,
                height: 0
              }} animate={{
                opacity: 1,
                height: 'auto'
              }} exit={{
                opacity: 0,
                height: 0
              }} className="bg-gray-50 rounded-2xl p-4 space-y-2 text-sm overflow-hidden mb-4">
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">
                        Ingrediente principal:
                      </span>
                      <span className="font-bold text-charcoal-900">
                        {product.mainIngredient || 'Pollo'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Calorías:</span>
                      <span className="font-bold text-charcoal-900">
                        {product.calories || '350'} kcal/100g
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">
                        Edad recomendada:
                      </span>
                      <span className="font-bold text-charcoal-900">
                        {product.ageRange || 'Adulto'}
                      </span>
                    </div>
                  </motion.div>}
              </AnimatePresence>

              {/* Subscription Offer */}
              {!isSavedItem && <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-4 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-charcoal-900 mb-1">
                        Suscríbete y ahorra {subscriptionDiscount.toFixed(2)}€
                        (15%)
                      </p>
                      <p className="text-xs text-charcoal-600 font-medium">
                        Recibe automáticamente cada mes y cancela cuando quieras
                      </p>
                    </div>
                  </div>
                </div>}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-100">
              {!isSavedItem ? <button onClick={handleSaveForLater} className="text-sm font-bold text-charcoal-600 hover:text-primary-600 flex items-center gap-2 transition-colors group/btn px-4 py-2.5 rounded-xl hover:bg-primary-50 active:scale-95 duration-200">
                  <Clock className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  Guardar para luego
                </button> : <button onClick={handleMoveToCart} className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-2 transition-colors group/btn px-4 py-2.5 rounded-xl hover:bg-primary-50 active:scale-95 duration-200">
                  <Package className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  Mover al carrito
                </button>}

              <button onClick={handleAddToWishlist} className={`text-sm font-bold flex items-center gap-2 transition-colors group/btn px-4 py-2.5 rounded-xl hover:bg-rose-50 active:scale-95 duration-200 ${isWishlisted ? 'text-rose-500' : 'text-charcoal-600 hover:text-rose-500'}`}>
                <Heart className={`h-4 w-4 group-hover/btn:scale-110 transition-transform ${isWishlisted ? 'fill-current' : ''}`} />
                {isWishlisted ? 'En favoritos' : 'Añadir a favoritos'}
              </button>

              <button onClick={handleRemove} className="text-sm font-bold text-charcoal-400 hover:text-rose-500 flex items-center gap-2 transition-colors group/btn px-4 py-2.5 rounded-xl hover:bg-rose-50 ml-auto active:scale-95 duration-200">
                <Trash2 className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                Eliminar
              </button>
            </div>
          </div>
        </div>

        {/* Quantity & Price */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-6">
          {!isSavedItem && <div className="flex flex-col gap-3">
              <label className="text-xs font-bold text-charcoal-500 uppercase tracking-wider">
                Cantidad
              </label>
              <div className="flex items-center border-2 border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm hover:border-primary-200 transition-colors duration-300 group/qty">
                <button onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))} className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 text-charcoal-600 hover:text-primary-600 transition-colors disabled:opacity-30 disabled:hover:bg-transparent active:bg-gray-100" disabled={quantity <= 1} aria-label="Disminuir cantidad">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-14 text-center text-lg font-bold tabular-nums text-charcoal-900 border-x-2 border-gray-100 h-12 flex items-center justify-center bg-gray-50 group-hover/qty:bg-white transition-colors">
                  {quantity}
                </span>
                <button onClick={() => updateQuantity(product.id, quantity + 1)} className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 text-charcoal-600 hover:text-primary-600 transition-colors active:bg-gray-100" aria-label="Aumentar cantidad">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>}

          <div className="text-right">
            <div className="text-3xl font-bold text-charcoal-900 font-serif tracking-tight mb-2">
              {(product.price * quantity).toFixed(2)}€
            </div>
            {quantity > 1 && <div className="text-sm text-charcoal-500 font-medium mb-2">
                {product.price.toFixed(2)}€ / unidad
              </div>}
            {product.originalPrice && <div className="space-y-2">
                <div className="text-sm text-charcoal-400 line-through font-medium">
                  {(product.originalPrice * quantity).toFixed(2)}€
                </div>
                <Badge variant="success" size="sm" className="font-bold shadow-sm">
                  Ahorras {savings.toFixed(2)}€
                </Badge>
              </div>}
          </div>
        </div>
      </div>
    </motion.div>;
}