import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Package, Tag, Gift, Sparkles, Lock, Truck, CreditCard, Info, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
interface OrderSummaryProps {
  subtotal: number;
  discount?: number;
}
type ShippingMethod = 'standard' | 'express' | 'next-day';
export function OrderSummary({
  subtotal,
  discount = 0
}: OrderSummaryProps) {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('standard');
  const [isGiftWrapped, setIsGiftWrapped] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [showOrderNote, setShowOrderNote] = useState(false);
  // Calculate Shipping Cost
  const getShippingCost = () => {
    switch (shippingMethod) {
      case 'standard':
        return subtotal > 49 ? 0 : 5.99;
      case 'express':
        return 9.99;
      case 'next-day':
        return 14.99;
      default:
        return 0;
    }
  };
  const shippingCost = getShippingCost();
  const giftWrapCost = isGiftWrapped ? 3.99 : 0;
  const subtotalAfterDiscount = subtotal - discount;
  const tax = subtotalAfterDiscount * 0.21;
  const total = subtotalAfterDiscount + shippingCost + giftWrapCost;
  const freeShippingProgress = subtotal >= 49 ? 100 : subtotal / 49 * 100;
  const remainingForFreeShipping = Math.max(0, 49 - subtotal);
  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setIsPromoApplied(true);
      setTimeout(() => setIsPromoApplied(false), 3000);
    }
  };
  return <div className="space-y-6">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }} className="bg-white rounded-3xl shadow-xl shadow-gray-900/5 border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-charcoal-900 font-serif flex items-center gap-3">
            Resumen del Pedido
          </h2>
          <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        {/* Free Shipping Progress */}
        <AnimatePresence>
          {subtotal < 49 && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-3 text-sm">
                <span className="font-bold text-primary-700 flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Envío Gratis
                </span>
                <span className="text-charcoal-600 font-medium">
                  Faltan{' '}
                  <span className="font-bold text-charcoal-900">
                    {remainingForFreeShipping.toFixed(2)}€
                  </span>
                </span>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <motion.div initial={{
              width: 0
            }} animate={{
              width: `${freeShippingProgress}%`
            }} transition={{
              duration: 0.8,
              ease: 'easeOut'
            }} className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" />
              </div>
            </motion.div>}
        </AnimatePresence>

        {/* Shipping Method Selector */}
        <div className="mb-8 space-y-4">
          <h3 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider">
            Método de Envío
          </h3>
          <div className="space-y-3">
            {[{
            id: 'standard',
            name: 'Estándar',
            time: '3-5 días laborables',
            price: subtotal > 49 ? 'Gratis' : '5.99€'
          }, {
            id: 'express',
            name: 'Express',
            time: '24-48 horas',
            price: '9.99€'
          }, {
            id: 'next-day',
            name: 'Next Day',
            time: 'Mañana antes de las 14h',
            price: '14.99€'
          }].map(method => <label key={method.id} className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 group ${shippingMethod === method.id ? 'border-primary-600 bg-primary-50/30 shadow-sm' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${shippingMethod === method.id ? 'border-primary-600' : 'border-gray-300 group-hover:border-gray-400'}`}>
                    {shippingMethod === method.id && <div className="w-2.5 h-2.5 rounded-full bg-primary-600" />}
                  </div>
                  <div>
                    <div className="font-bold text-charcoal-900 text-sm">
                      {method.name}
                    </div>
                    <div className="text-xs text-charcoal-500 font-medium mt-0.5">
                      {method.time}
                    </div>
                  </div>
                </div>
                <span className={`text-sm font-bold ${method.price === 'Gratis' ? 'text-emerald-600' : 'text-charcoal-900'}`}>
                  {method.price}
                </span>
                <input type="radio" name="shipping" checked={shippingMethod === method.id} onChange={() => setShippingMethod(method.id as ShippingMethod)} className="hidden" />
              </label>)}
          </div>
        </div>

        {/* Gift Options */}
        <div className="mb-8 border-t border-gray-100 pt-8">
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${isGiftWrapped ? 'bg-primary-600 border-primary-600' : 'border-gray-300 group-hover:border-gray-400'}`}>
                {isGiftWrapped && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
              </div>
              <input type="checkbox" checked={isGiftWrapped} onChange={e => setIsGiftWrapped(e.target.checked)} className="hidden" />
              <span className="text-sm font-bold text-charcoal-700 flex items-center gap-2 group-hover:text-primary-700 transition-colors">
                <Gift className="h-4 w-4 text-secondary-500" />
                Envolver para regalo
              </span>
            </label>
            <span className="text-sm font-bold text-charcoal-900 bg-gray-100 px-2 py-1 rounded-md">
              +3.99€
            </span>
          </div>

          <AnimatePresence>
            {isGiftWrapped && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} exit={{
            opacity: 0,
            height: 0
          }} className="space-y-2 overflow-hidden">
                <textarea value={giftMessage} onChange={e => setGiftMessage(e.target.value)} placeholder="Escribe tu mensaje de regalo aquí (máx. 200 caracteres)..." maxLength={200} className="w-full p-4 text-sm border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 resize-none transition-all" rows={3} />
                <div className="text-right text-xs text-charcoal-400 font-medium">
                  {giftMessage.length}/200
                </div>
              </motion.div>}
          </AnimatePresence>
        </div>

        {/* Order Notes */}
        <div className="mb-8">
          <button onClick={() => setShowOrderNote(!showOrderNote)} className="text-sm text-charcoal-500 hover:text-primary-600 font-bold flex items-center gap-2 transition-colors group">
            <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {showOrderNote ? 'Ocultar nota del pedido' : 'Añadir nota al pedido'}
          </button>
          <AnimatePresence>
            {showOrderNote && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} exit={{
            opacity: 0,
            height: 0
          }} className="mt-3 overflow-hidden">
                <textarea value={orderNote} onChange={e => setOrderNote(e.target.value)} placeholder="Instrucciones especiales de entrega..." maxLength={500} className="w-full p-4 text-sm border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 resize-none transition-all" rows={2} />
              </motion.div>}
          </AnimatePresence>
        </div>

        {/* Promo Code */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            {!showPromoInput ? <motion.button key="show-promo" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} onClick={() => setShowPromoInput(true)} className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-primary-500 hover:bg-primary-50/30 text-sm font-bold text-charcoal-600 hover:text-primary-700 transition-all group">
                <Tag className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                ¿Tienes un código promocional?
              </motion.button> : <motion.div key="promo-input" initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} exit={{
            opacity: 0,
            height: 0
          }} className="space-y-3">
                <div className="flex gap-3">
                  <input type="text" value={promoCode} onChange={e => setPromoCode(e.target.value)} placeholder="Código promocional" className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/10 transition-all font-medium uppercase" />
                  <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} onClick={handleApplyPromo} className="px-6 py-3 bg-charcoal-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-colors shadow-lg">
                    Aplicar
                  </motion.button>
                </div>
                {isPromoApplied && <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-100">
                    <ShieldCheck className="h-4 w-4" />
                    Código aplicado correctamente
                  </div>}
              </motion.div>}
          </AnimatePresence>
        </div>

        {/* Summary Lines */}
        <div className="space-y-4 border-t border-gray-100 pt-8">
          <div className="flex justify-between text-charcoal-600 text-sm font-medium">
            <span>Subtotal</span>
            <span className="font-bold text-charcoal-900">
              {subtotal.toFixed(2)}€
            </span>
          </div>

          {discount > 0 && <div className="flex justify-between text-sm text-emerald-600 font-medium">
              <span>Descuento</span>
              <span className="font-bold">-{discount.toFixed(2)}€</span>
            </div>}

          <div className="flex justify-between text-charcoal-600 text-sm font-medium">
            <span>Envío</span>
            <span className="font-bold text-charcoal-900">
              {shippingCost === 0 ? 'Gratis' : `${shippingCost.toFixed(2)}€`}
            </span>
          </div>

          {isGiftWrapped && <div className="flex justify-between text-charcoal-600 text-sm font-medium">
              <span>Envoltorio regalo</span>
              <span className="font-bold text-charcoal-900">
                {giftWrapCost.toFixed(2)}€
              </span>
            </div>}

          <div className="flex justify-between text-charcoal-600 text-sm font-medium">
            <span>IVA (21%)</span>
            <span className="font-bold text-charcoal-900">
              {tax.toFixed(2)}€
            </span>
          </div>

          <div className="border-t-2 border-gray-100 pt-6 mt-6 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="font-bold text-charcoal-900 text-xl font-serif">
                Total
              </span>
              <span className="text-xs text-charcoal-500 font-medium mt-1">
                IVA incluido
              </span>
            </div>
            <motion.span key={total} initial={{
            scale: 1.2,
            color: '#7C9885'
          }} animate={{
            scale: 1,
            color: '#2C3333'
          }} className="font-bold text-4xl tracking-tight text-charcoal-900 font-serif">
              {total.toFixed(2)}€
            </motion.span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-8">
          <Link to="/checkout">
            <Button size="xl" fullWidth className="shadow-xl shadow-primary-900/20 hover:shadow-2xl hover:shadow-primary-900/30 transition-all group bg-charcoal-900 hover:bg-black text-white">
              <Lock className="h-5 w-5 mr-3" />
              Tramitar Pedido
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Payment Icons Placeholder - In real app use SVGs */}
            <div className="h-8 w-12 bg-gray-200 rounded-md border border-gray-300"></div>
            <div className="h-8 w-12 bg-gray-200 rounded-md border border-gray-300"></div>
            <div className="h-8 w-12 bg-gray-200 rounded-md border border-gray-300"></div>
            <div className="h-8 w-12 bg-gray-200 rounded-md border border-gray-300"></div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-charcoal-500 font-medium bg-gray-50 py-3 rounded-xl">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Pago 100% seguro y encriptado SSL</span>
          </div>
        </div>
      </motion.div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <Truck className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-charcoal-900 text-sm">
              Envíos Rápidos
            </h4>
            <p className="text-xs text-charcoal-500 mt-1 font-medium leading-relaxed">
              Recíbelo en 24-48h laborables con seguimiento en tiempo real
            </p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-charcoal-900 text-sm">
              Garantía de Calidad
            </h4>
            <p className="text-xs text-charcoal-500 mt-1 font-medium leading-relaxed">
              30 días para devoluciones sin preguntas si no estás satisfecho
            </p>
          </div>
        </div>
      </div>
    </div>;
}