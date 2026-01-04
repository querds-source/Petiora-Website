import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck, Gift, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { PageTransition } from '../components/common/PageTransition';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
export function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getCartTotal
  } = useCart();
  const navigate = useNavigate();
  const total = getCartTotal();
  const shippingThreshold = 49;
  const remainingForFreeShipping = Math.max(0, shippingThreshold - total);
  const shippingCost = remainingForFreeShipping > 0 ? 4.95 : 0;
  const finalTotal = total + shippingCost;
  if (cart.length === 0) {
    return <PageTransition>
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FAF9F6] px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold font-serif text-charcoal-900 mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-charcoal-600 mb-8 text-center max-w-md">
            Parece que aún no has añadido nada. ¡Descubre nuestros menús frescos
            y naturales para tu mascota!
          </p>
          <Link to="/productos">
            <Button size="lg" className="font-bold px-8">
              Explorar Menú
            </Button>
          </Link>
        </div>
      </PageTransition>;
  }
  return <PageTransition>
      <div className="bg-[#FAF9F6] min-h-screen py-12 lg:py-20">
        <div className="container-custom max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold font-serif text-charcoal-900 mb-8">
            Tu Carrito ({cart.length} productos)
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Free Shipping Progress */}
              <Card className="bg-primary-50 border-primary-100 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Truck className="w-5 h-5 text-primary-600" />
                  <p className="text-sm font-bold text-primary-800">
                    {remainingForFreeShipping > 0 ? `¡Te faltan ${remainingForFreeShipping.toFixed(2)}€ para envío GRATIS!` : '¡Genial! Tienes envío GRATIS'}
                  </p>
                </div>
                <div className="h-2 bg-primary-200 rounded-full overflow-hidden">
                  <motion.div initial={{
                  width: 0
                }} animate={{
                  width: `${Math.min(100, total / shippingThreshold * 100)}%`
                }} className="h-full bg-primary-600 rounded-full" />
                </div>
              </Card>

              <AnimatePresence>
                {cart.map(item => <motion.div key={item.id} layout initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                x: -100
              }} className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm flex gap-6 items-center">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-charcoal-900 text-lg truncate pr-4">
                            {item.name}
                          </h3>
                          <p className="text-sm text-charcoal-500">
                            {item.category === 'dog-food' ? 'Comida Perro' : 'Comida Gato'}
                          </p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-rose-500 transition-colors p-1" aria-label="Eliminar">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 h-10">
                          <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-primary-600 transition-colors">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">
                            {item.quantity}
                          </span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-primary-600 transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-xl text-charcoal-900">
                            {(item.price * item.quantity).toFixed(2)}€
                          </p>
                          {item.quantity > 1 && <p className="text-xs text-gray-500">
                              {item.price.toFixed(2)}€ / ud
                            </p>}
                        </div>
                      </div>
                    </div>
                  </motion.div>)}
              </AnimatePresence>

              {/* Upsell / Recommended */}
              <div className="mt-12">
                <h3 className="font-bold text-xl mb-6 font-serif">
                  Completa tu pedido
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mock Upsell Items */}
                  {[1, 2].map(i => <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4 items-center hover:border-primary-200 transition-colors cursor-pointer group">
                      <div className="w-16 h-16 rounded-lg bg-gray-50 overflow-hidden">
                        <img src={`https://images.unsplash.com/photo-${i === 1 ? '1583337130417-3346a1be7dee' : '1587593810167-a84920ea0781'}?auto=format&fit=crop&q=80&w=200`} alt="Snack" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-1">
                          Snacks Naturales
                        </h4>
                        <p className="text-primary-700 font-bold text-sm">
                          +4.95€
                        </p>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 sm:p-8 shadow-soft-xl border-gray-100">
                  <h2 className="text-xl font-bold font-serif mb-6">Resumen</h2>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex justify-between text-charcoal-600">
                      <span>Subtotal</span>
                      <span>{total.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-charcoal-600">
                      <span>Envío</span>
                      {shippingCost === 0 ? <span className="text-emerald-600 font-bold">
                          GRATIS
                        </span> : <span>{shippingCost.toFixed(2)}€</span>}
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                      <span className="font-bold text-lg text-charcoal-900">
                        Total
                      </span>
                      <div className="text-right">
                        <span className="block font-bold text-2xl text-primary-800">
                          {finalTotal.toFixed(2)}€
                        </span>
                        <span className="text-xs text-gray-500">
                          IVA incluido
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <Input placeholder="Código promocional" className="bg-gray-50 border-gray-200 text-sm" />
                      <Button variant="outline" size="sm">
                        Aplicar
                      </Button>
                    </div>
                  </div>

                  <Button fullWidth size="xl" className="font-bold shadow-xl shadow-primary-900/20 mb-4" onClick={() => navigate('/checkout')}>
                    Tramitar Pedido
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Pago 100% Seguro</span>
                  </div>
                </Card>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
                    <Gift className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                    <p className="text-xs font-bold text-charcoal-600">
                      Regalo Sorpresa
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
                    <AlertCircle className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                    <p className="text-xs font-bold text-charcoal-600">
                      Soporte 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>;
}