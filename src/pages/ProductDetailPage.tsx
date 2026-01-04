import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Heart, Check, Truck, ShieldCheck, ArrowLeft, Share2, ChevronRight, Info, Scale, Utensils, ZoomIn, Clock, Award, Leaf } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageTransition } from '../components/common/PageTransition';
import { ProductNutritionPanel } from '../components/products/ProductNutritionPanel';
import { IngredientStory } from '../components/products/IngredientStory';
import { FeedingCalculator } from '../components/tools/FeedingCalculator';
import { ProductReviews } from '../components/products/ProductReviews';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { Tabs } from '../components/ui/Tabs';
export function ProductDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const product = products.find(p => p.id === id);
  const {
    addToCart
  } = useCart();
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-charcoal-900">
            Producto no encontrado
          </h2>
          <Link to="/productos">
            <Button>Volver a la tienda</Button>
          </Link>
        </div>
      </div>;
  }
  const isWishlisted = isInWishlist(product.id);
  // Enhanced Mock Data
  const ingredientsList = ['Pechuga de Pollo de Corral (60%)', 'Hígado de Pollo (10%)', 'Calabaza Fresca (8%)', 'Zanahorias (8%)', 'Espinacas (5%)', 'Manzana Golden (4%)', 'Aceite de Salmón (2%)', 'Minerales Quelados (1%)', 'Espirulina (0.5%)', 'Cúrcuma (0.5%)'];
  const mainIngredient = {
    name: 'Pollo de Corral',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=800',
    origin: 'Granjas de Galicia',
    farmer: 'Familia Rodríguez',
    benefits: ['Proteína magra', 'Alta digestibilidad', 'Rico en aminoácidos'],
    harvestDate: 'Oct 2023'
  };
  // Mock Images for Gallery
  const galleryImages = [product.image, 'https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&q=80&w=800' // Lifestyle
  ];
  const tabs = [{
    id: 'description',
    label: 'Descripción',
    content: <div className="prose prose-lg text-charcoal-600 max-w-none">
          <p className="lead text-xl font-light mb-6">
            {product.description} Nutrición completa formulada por veterinarios
            para maximizar la vitalidad y longevidad de tu mascota.
          </p>
          <h3 className="font-serif font-bold text-2xl text-charcoal-900 mt-8 mb-4">
            Beneficios Clave
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
            {product.benefits.map((benefit, idx) => <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="font-medium">{benefit}</span>
              </li>)}
          </ul>
          <h3 className="font-serif font-bold text-2xl text-charcoal-900 mt-8 mb-4">
            ¿Por qué elegir esta receta?
          </h3>
          <p>
            Nuestra receta de {product.name} está diseñada para imitar la dieta
            ancestral de tu mascota, pero con la seguridad y conveniencia de la
            cocina moderna. Utilizamos solo ingredientes de grado humano,
            cocinados suavemente para preservar nutrientes y sabor.
          </p>
        </div>
  }, {
    id: 'ingredients',
    label: 'Ingredientes',
    content: <div className="space-y-8">
          <IngredientStory ingredient={mainIngredient} />
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-lg mb-4">Lista Completa</h3>
            <div className="flex flex-wrap gap-2">
              {ingredientsList.map((ing, idx) => <Badge key={idx} variant="secondary" className="bg-gray-50 text-charcoal-600 border-gray-200">
                  {ing}
                </Badge>)}
            </div>
          </div>
        </div>
  }, {
    id: 'nutrition',
    label: 'Nutrición',
    content: product.nutritionalInfo ? <ProductNutritionPanel nutritionalInfo={product.nutritionalInfo as any} ingredients={ingredientsList} /> : <p>Información no disponible</p>
  }, {
    id: 'reviews',
    label: `Reseñas (${product.reviewCount})`,
    content: <ProductReviews productId={product.id} />
  }];
  return <PageTransition>
      <div className="bg-[#FAF9F6] min-h-screen pb-20 font-sans">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 sticky top-[72px] z-20">
          <div className="container-custom py-3 flex items-center gap-2 text-xs font-medium text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary-600 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-300" />
            <Link to="/productos" className="hover:text-primary-600 transition-colors">
              Productos
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-300" />
            <span className="text-charcoal-900">{product.name}</span>
          </div>
        </div>

        <div className="container-custom pt-8 lg:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Left Column: Gallery */}
            <div className="space-y-6 lg:sticky lg:top-32 self-start">
              <div className="relative group">
                <motion.div layoutId={`product-image-${product.id}`} className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-soft-xl border border-gray-100 relative cursor-zoom-in" onClick={() => setIsZoomed(!isZoomed)}>
                  <img src={galleryImages[activeImage]} alt={product.name} className={`w-full h-full object-cover transition-transform duration-700 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'}`} />
                  {product.isNew && <Badge variant="primary" className="absolute top-6 left-6 shadow-lg z-10">
                      NUEVO
                    </Badge>}
                  <div className="absolute top-6 right-6 flex flex-col gap-3 z-10">
                    <button className="p-3 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-all shadow-sm hover:shadow-md text-charcoal-600 hover:text-primary-600">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button onClick={e => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }} className="p-3 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-all shadow-sm hover:shadow-md text-charcoal-600 hover:text-primary-600 lg:hidden">
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {galleryImages.map((img, idx) => <button key={idx} onClick={() => setActiveImage(idx)} className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 relative ${activeImage === idx ? 'border-primary-600 ring-2 ring-primary-100 ring-offset-2' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    {activeImage === idx && <div className="absolute inset-0 bg-primary-900/10" />}
                  </button>)}
              </div>

              {/* Trust Badges (Desktop) */}
              <div className="hidden lg:grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-2 text-emerald-600">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-charcoal-600">
                    100% Natural
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2 text-blue-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-charcoal-600">
                    Calidad Premium
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-2 text-amber-600">
                    <Truck className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-charcoal-600">
                    Envío Rápido
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'text-gray-200 fill-gray-200'}`} />)}
                    </div>
                    <span className="text-sm font-bold text-charcoal-500 underline decoration-gray-200 underline-offset-4 cursor-pointer hover:text-primary-600 transition-colors">
                      {product.reviewCount} reseñas
                    </span>
                  </div>
                  {product.inStock ? <Badge variant="success" size="sm" className="font-bold animate-pulse">
                      En Stock
                    </Badge> : <Badge variant="error" size="sm" className="font-bold">
                      Agotado
                    </Badge>}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal-900 mb-4 leading-[1.1] tracking-tight">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-4xl font-bold text-primary-800 font-serif">
                    {product.price.toFixed(2)}€
                  </span>
                  {product.originalPrice && <span className="text-xl text-gray-400 line-through decoration-2">
                      {product.originalPrice.toFixed(2)}€
                    </span>}
                  {product.discount && <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-md">
                      Ahorras {product.discount.toFixed(0)}%
                    </span>}
                </div>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:border-primary-200 transition-colors">
                    <Scale className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <p className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider">
                      Proteína
                    </p>
                    <p className="text-lg font-bold text-charcoal-900">14%</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:border-primary-200 transition-colors">
                    <Utensils className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <p className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider">
                      Calorías
                    </p>
                    <p className="text-lg font-bold text-charcoal-900">
                      145
                      <span className="text-xs font-normal text-charcoal-500 ml-0.5">
                        kcal
                      </span>
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:border-primary-200 transition-colors">
                    <Clock className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <p className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider">
                      Entrega
                    </p>
                    <p className="text-lg font-bold text-charcoal-900">24h</p>
                  </div>
                </div>

                <p className="text-lg text-charcoal-600 leading-relaxed font-light mb-8">
                  {product.description} Nutrición completa formulada por
                  veterinarios para maximizar la vitalidad y longevidad de tu
                  mascota.
                </p>

                {/* Sticky Add to Cart (Mobile Optimized) */}
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-soft-xl mb-8 sticky top-24 z-10">
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    {/* Quantity Stepper */}
                    <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 w-full sm:w-auto h-14">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary-600 font-bold text-xl transition-colors">
                        -
                      </button>
                      <span className="w-12 text-center font-bold text-charcoal-900 text-lg">
                        {quantity}
                      </span>
                      <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary-600 font-bold text-xl transition-colors">
                        +
                      </button>
                    </div>

                    <Button size="xl" className="flex-1 rounded-xl font-bold text-lg shadow-xl shadow-primary-900/20 h-14" onClick={() => addToCart(product, quantity)} disabled={!product.inStock} pulse={product.inStock}>
                      {product.inStock ? <>
                          Añadir al Carrito
                          <ShoppingCart className="ml-2 w-5 h-5" />
                        </> : 'Agotado Temporalmente'}
                    </Button>

                    <button onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)} className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center transition-all shrink-0 ${isWishlisted ? 'border-rose-200 bg-rose-50 text-rose-500' : 'border-gray-200 text-gray-400 hover:border-rose-200 hover:text-rose-500'}`}>
                      <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Trust Micro-copy */}
                  <div className="flex items-center justify-center gap-6 text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-primary-500" />
                      Envío gratis +49€
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-primary-500" />
                      Garantía 30 días
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Tabs Section */}
          <div className="mb-20">
            <Tabs tabs={tabs} defaultTab="description" />
          </div>

          {/* Feeding Calculator Section */}
          <div className="mb-20">
            <div className="bg-primary-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    ¿Cuánto debe comer?
                  </h2>
                  <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                    Calcula la ración diaria exacta para tu mascota basándote en
                    su peso, edad y nivel de actividad. Evita la obesidad y
                    asegura una nutrición óptima.
                  </p>
                  <FeedingCalculator />
                </div>
                <div className="hidden lg:block">
                  <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800" alt="Perro comiendo" className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold font-serif text-charcoal-900">
                Completa su menú
              </h2>
              <Link to="/productos">
                <Button variant="outline">Ver todo</Button>
              </Link>
            </div>
            <RelatedProducts currentProductId={product.id} category={product.category} />
          </section>
        </div>
      </div>
    </PageTransition>;
}