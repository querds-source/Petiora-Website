import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Eye, Check, Leaf, Info, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Product } from '../utils/types';
import { Tooltip } from './ui/Tooltip';
interface ProductCardProps {
  product: Product;
  featured?: boolean;
  index?: number;
}
export function ProductCard({
  product,
  featured = false,
  index = 0
}: ProductCardProps) {
  const {
    addToCart
  } = useCart();
  const {
    toggleWishlist,
    isInWishlist
  } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} className="group relative h-full">
      <Link to={`/productos/${product.id}`} className="block h-full">
        <div className="relative h-full bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-soft-sm hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              {product.isNew && <Badge variant="primary" size="sm" className="shadow-sm">
                  Nuevo
                </Badge>}
              {product.discount && <Badge variant="secondary" size="sm" className="shadow-sm">
                  -{product.discount}%
                </Badge>}
            </div>

            {/* Wishlist Button */}
            <button onClick={handleToggleWishlist} className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${inWishlist ? 'bg-rose-50 text-rose-500 shadow-sm' : 'bg-white/80 text-gray-500 hover:bg-white hover:text-rose-500 shadow-sm'}`} aria-label={inWishlist ? 'Quitar de favoritos' : 'Añadir a favoritos'}>
              <Heart className={`w-4 h-4 transition-transform duration-300 ${inWishlist ? 'fill-current scale-110' : 'group-hover:scale-110'}`} />
            </button>

            {/* Product Image with Hover Effect */}
            <div className="relative w-full h-full">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/5 transition-colors duration-300" />
            </div>

            {/* Quick Actions Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out-expo z-20">
              <Button variant="white" fullWidth onClick={e => {
              e.preventDefault();
              // Quick view logic would go here
            }} className="shadow-lg font-bold text-sm py-3">
                <Eye className="w-4 h-4 mr-2" />
                Vista Rápida
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating || 5) ? 'fill-current' : 'text-gray-200'}`} />)}
              </div>
              <span className="text-xs text-gray-400 font-medium ml-1">
                ({product.reviews || 0})
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-bold text-charcoal-900 font-serif leading-tight mb-1 group-hover:text-primary-700 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-charcoal-500 line-clamp-2 mb-4 font-medium">
              {product.description}
            </p>

            {/* Key Benefits / Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.tags?.slice(0, 2).map((tag, i) => <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-bold text-charcoal-600 uppercase tracking-wide">
                  {tag}
                </span>)}
            </div>

            {/* Price & Add to Cart */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
              <div className="flex flex-col">
                {product.discount ? <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-rose-600">
                      {product.price}€
                    </span>
                    <span className="text-xs text-gray-400 line-through font-medium">
                      {(product.price * 1.2).toFixed(2)}€
                    </span>
                  </div> : <span className="text-lg font-bold text-charcoal-900">
                    {product.price}€
                  </span>}
                <span className="text-[10px] text-gray-400 font-medium">
                  {product.weight || '1kg'} •{' '}
                  {(product.price / parseFloat(product.weight || '1')).toFixed(2)}
                  €/kg
                </span>
              </div>

              <Button variant="primary" size="sm" onClick={handleAddToCart} className="rounded-full w-10 h-10 p-0 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all" aria-label="Añadir al carrito">
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>;
}