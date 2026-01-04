import React, { useEffect, useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../utils/types';
import { ChevronLeft, ChevronRight, ZoomIn, Maximize2, X, Share2, Heart, Check } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
interface ProductGalleryProps {
  product: Product;
}
export function ProductGallery({
  product
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [touchStart, setTouchStart] = useState(0);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  // Generate mock additional images with better variety
  const images = [product.image, `${product.image}&auto=format&fit=crop&w=1200&q=90`, `${product.image}&auto=format&fit=crop&w=1200&q=90&sat=-20`, `${product.image}&auto=format&fit=crop&w=1200&q=90&bri=10`];
  const nextImage = () => {
    setActiveImage(prev => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setActiveImage(prev => (prev - 1 + images.length) % images.length);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    setMousePosition({
      x,
      y
    });
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Mira este producto: ${product.name}`,
          url: window.location.href
        });
      } catch (err) {
        // User cancelled or error
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard copy
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };
  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') {
        setIsFullscreen(false);
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  return <div className="space-y-6">
      {/* Main Image Container */}
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-gray-100 group shadow-lg shadow-gray-100/50">
        <motion.div className="relative w-full h-full cursor-zoom-in" onMouseMove={handleMouseMove} onMouseEnter={() => setIsZoomed(true)} onMouseLeave={() => setIsZoomed(false)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onClick={() => setIsFullscreen(true)}>
          <AnimatePresence mode="wait">
            <motion.img key={activeImage} src={images[activeImage]} alt={`${product.name} - Vista ${activeImage + 1}`} className="w-full h-full object-contain p-8 mix-blend-multiply" initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: isZoomed ? 1.5 : 1,
            x: isZoomed ? `${50 - mousePosition.x}%` : '0%',
            y: isZoomed ? `${50 - mousePosition.y}%` : '0%'
          }} exit={{
            opacity: 0,
            scale: 0.95
          }} transition={{
            duration: 0.3,
            scale: {
              duration: 0.2
            }
          }} loading="eager" />
          </AnimatePresence>

          {/* Zoom Indicator */}
          <AnimatePresence>
            {isZoomed && <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.8
          }} className="absolute top-6 right-6 bg-charcoal-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 pointer-events-none">
                <ZoomIn className="h-3.5 w-3.5" />
                Zoom
              </motion.div>}
          </AnimatePresence>
        </motion.div>

        {/* Product Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10 pointer-events-none">
          {product.discount && <motion.span initial={{
          scale: 0,
          rotate: -10
        }} animate={{
          scale: 1,
          rotate: 0
        }} className="bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-rose-500/30">
              -{product.discount}%
            </motion.span>}
          {product.isNew && <motion.span initial={{
          scale: 0,
          rotate: 10
        }} animate={{
          scale: 1,
          rotate: 0
        }} transition={{
          delay: 0.1
        }} className="bg-secondary-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-secondary-500/30 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              NUEVO
            </motion.span>}
          {!product.inStock && <motion.span initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} className="bg-charcoal-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
              AGOTADO
            </motion.span>}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <motion.button whileHover={{
          scale: 1.1,
          x: -2
        }} whileTap={{
          scale: 0.9
        }} onClick={e => {
          e.stopPropagation();
          prevImage();
        }} className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white border border-gray-100 pointer-events-auto text-charcoal-600 hover:text-primary-600" aria-label="Imagen anterior">
            <ChevronLeft className="h-5 w-5" />
          </motion.button>

          <motion.button whileHover={{
          scale: 1.1,
          x: 2
        }} whileTap={{
          scale: 0.9
        }} onClick={e => {
          e.stopPropagation();
          nextImage();
        }} className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white border border-gray-100 pointer-events-auto text-charcoal-600 hover:text-primary-600" aria-label="Siguiente imagen">
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={e => {
          e.stopPropagation();
          toggleWishlist();
        }} className={`p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-100 transition-colors ${isWishlisted ? 'text-rose-500' : 'text-charcoal-600 hover:text-rose-500'}`} aria-label="Añadir a favoritos">
            <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </motion.button>

          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={e => {
          e.stopPropagation();
          setIsFullscreen(true);
        }} className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-100 transition-colors text-charcoal-600 hover:text-primary-600" aria-label="Pantalla completa">
            <Maximize2 className="h-5 w-5" />
          </motion.button>

          <div className="relative">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={e => {
            e.stopPropagation();
            handleShare();
          }} className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-100 transition-colors text-charcoal-600 hover:text-primary-600" aria-label="Compartir">
              <Share2 className="h-5 w-5" />
            </motion.button>
            <AnimatePresence>
              {showShareTooltip && <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: 10
            }} className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-charcoal-900 text-white text-xs font-bold rounded-lg whitespace-nowrap flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                  Enlace copiado
                </motion.div>}
            </AnimatePresence>
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-6 left-6 bg-charcoal-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 pointer-events-none">
          <span className="tabular-nums">{activeImage + 1}</span>
          <span className="text-white/60">/</span>
          <span className="tabular-nums text-white/80">{images.length}</span>
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => <motion.button key={index} whileHover={{
        scale: 1.05,
        y: -2
      }} whileTap={{
        scale: 0.95
      }} onClick={() => setActiveImage(index)} className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all bg-white ${activeImage === index ? 'border-primary-600 ring-2 ring-primary-600/20 shadow-md' : 'border-gray-100 hover:border-primary-200 hover:shadow-sm'}`}>
            <img src={img} alt={`${product.name} miniatura ${index + 1}`} className="w-full h-full object-contain p-2 mix-blend-multiply" loading="lazy" />

            {/* Active Indicator */}
            {activeImage === index && <motion.div layoutId="activeThumb" className="absolute inset-0 bg-primary-600/5" transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6
        }} />}
          </motion.button>)}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-[100] bg-charcoal-900/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setIsFullscreen(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} className="relative max-w-7xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <img src={images[activeImage]} alt={product.name} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" />

              {/* Close Button */}
              <motion.button whileHover={{
            scale: 1.1,
            rotate: 90
          }} whileTap={{
            scale: 0.9
          }} onClick={() => setIsFullscreen(false)} className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                <X className="h-6 w-6 text-white" />
              </motion.button>

              {/* Navigation in Fullscreen */}
              <motion.button whileHover={{
            scale: 1.1,
            x: -4
          }} whileTap={{
            scale: 0.9
          }} onClick={e => {
            e.stopPropagation();
            prevImage();
          }} className="absolute left-6 p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                <ChevronLeft className="h-6 w-6 text-white" />
              </motion.button>

              <motion.button whileHover={{
            scale: 1.1,
            x: 4
          }} whileTap={{
            scale: 0.9
          }} onClick={e => {
            e.stopPropagation();
            nextImage();
          }} className="absolute right-6 p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                <ChevronRight className="h-6 w-6 text-white" />
              </motion.button>

              {/* Counter in Fullscreen */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                {activeImage + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}