import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, CreditCard, Truck, ShieldCheck, Lock, ArrowRight, MapPin, User, Mail, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/common/PageTransition';
const steps = [{
  id: 1,
  label: 'Datos',
  icon: User
}, {
  id: 2,
  label: 'Envío',
  icon: Truck
}, {
  id: 3,
  label: 'Pago',
  icon: CreditCard
}];
export function CheckoutPage() {
  const {
    cart,
    getCartTotal
  } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const total = getCartTotal();
  const shippingCost = total > 49 ? 0 : 4.95;
  const finalTotal = total + shippingCost;
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handlePayment();
    }
  };
  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };
  if (isSuccess) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] p-4">
        <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-soft-2xl text-center max-w-lg w-full">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold font-serif text-charcoal-900 mb-4">
            ¡Pedido Confirmado!
          </h1>
          <p className="text-charcoal-600 mb-8 leading-relaxed">
            Gracias por confiar en Petiora. Hemos enviado un email de
            confirmación con los detalles de tu pedido #PET-8829.
          </p>
          <Button fullWidth size="lg" onClick={() => window.location.href = '/'}>
            Volver al Inicio
          </Button>
        </motion.div>
      </div>;
  }
  return <PageTransition>
      <div className="bg-[#FAF9F6] min-h-screen pb-20">
        {/* Header Minimal */}
        <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-30">
          <div className="container-custom flex items-center justify-between">
            <div className="font-serif font-bold text-2xl text-primary-800">
              Petiora.
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
              <Lock className="w-3 h-3" />
              Checkout Seguro
            </div>
          </div>
        </header>

        <div className="container-custom max-w-6xl mx-auto pt-8 lg:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Form Area */}
            <div className="lg:col-span-7 space-y-8">
              {/* Progress Steps */}
              <div className="flex justify-between items-center relative mb-12 px-4">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10" />
                {steps.map(step => <div key={step.id} className={`flex flex-col items-center gap-2 bg-[#FAF9F6] px-2 ${step.id <= currentStep ? 'text-primary-700' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step.id < currentStep ? 'bg-primary-600 border-primary-600 text-white' : step.id === currentStep ? 'bg-white border-primary-600 text-primary-600' : 'bg-white border-gray-300 text-gray-300'}`}>
                      {step.id < currentStep ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {step.label}
                    </span>
                  </div>)}
              </div>

              <AnimatePresence mode="wait">
                {currentStep === 1 && <motion.div key="step1" initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} className="space-y-6">
                    <h2 className="text-2xl font-bold font-serif mb-6">
                      Datos de Contacto
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Nombre" placeholder="Tu nombre" />
                      <Input label="Apellidos" placeholder="Tus apellidos" />
                      <Input label="Email" type="email" placeholder="tu@email.com" className="md:col-span-2" />
                      <Input label="Teléfono" type="tel" placeholder="+34 600 000 000" className="md:col-span-2" />
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <input type="checkbox" id="newsletter" className="rounded text-primary-600 focus:ring-primary-500" />
                      <label htmlFor="newsletter" className="text-sm text-charcoal-600">
                        Quiero recibir consejos veterinarios y ofertas
                        exclusivas.
                      </label>
                    </div>
                  </motion.div>}

                {currentStep === 2 && <motion.div key="step2" initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} className="space-y-6">
                    <h2 className="text-2xl font-bold font-serif mb-6">
                      Dirección de Envío
                    </h2>
                    <div className="space-y-4">
                      <Input label="Dirección" placeholder="Calle, número, piso..." icon={<MapPin className="w-4 h-4" />} />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Código Postal" placeholder="28000" />
                        <Input label="Ciudad" placeholder="Madrid" />
                      </div>
                      <Input label="Provincia" placeholder="Madrid" />
                      <Input label="Instrucciones de entrega (opcional)" placeholder="Dejar en portería, llamar al timbre..." />
                    </div>

                    <div className="bg-primary-50 p-4 rounded-xl border border-primary-100 mt-6">
                      <h3 className="font-bold text-primary-900 mb-2 flex items-center gap-2">
                        <Truck className="w-5 h-5" /> Método de Envío
                      </h3>
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-primary-200">
                        <div>
                          <p className="font-bold text-charcoal-900">
                            Envío Refrigerado 24h
                          </p>
                          <p className="text-xs text-charcoal-500">
                            Entrega mañana antes de las 19:00
                          </p>
                        </div>
                        <span className="font-bold text-primary-700">
                          {shippingCost === 0 ? 'GRATIS' : `${shippingCost.toFixed(2)}€`}
                        </span>
                      </div>
                    </div>
                  </motion.div>}

                {currentStep === 3 && <motion.div key="step3" initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} className="space-y-6">
                    <h2 className="text-2xl font-bold font-serif mb-6">
                      Método de Pago
                    </h2>

                    <div className="space-y-3">
                      <label className="flex items-center gap-4 p-4 border-2 border-primary-600 bg-primary-50/30 rounded-xl cursor-pointer transition-all">
                        <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-primary-600 focus:ring-primary-500" />
                        <div className="flex-1">
                          <span className="font-bold text-charcoal-900 block">
                            Tarjeta de Crédito / Débito
                          </span>
                          <div className="flex gap-2 mt-1">
                            {/* Card Icons */}
                            <div className="w-8 h-5 bg-gray-200 rounded"></div>
                            <div className="w-8 h-5 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </label>

                      <label className="flex items-center gap-4 p-4 border border-gray-200 hover:border-gray-300 rounded-xl cursor-pointer transition-all">
                        <input type="radio" name="payment" className="w-5 h-5 text-primary-600 focus:ring-primary-500" />
                        <span className="font-bold text-charcoal-900">
                          PayPal
                        </span>
                      </label>
                    </div>

                    <div className="mt-6 space-y-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <Input label="Número de Tarjeta" placeholder="0000 0000 0000 0000" icon={<CreditCard className="w-4 h-4" />} />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Caducidad" placeholder="MM/AA" />
                        <Input label="CVC" placeholder="123" />
                      </div>
                      <Input label="Titular de la tarjeta" placeholder="Nombre como aparece en la tarjeta" />
                    </div>
                  </motion.div>}
              </AnimatePresence>

              <div className="flex justify-between pt-8 border-t border-gray-100">
                {currentStep > 1 ? <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                    Atrás
                  </Button> : <div />}
                <Button size="lg" className="px-8 font-bold" onClick={handleNext} isLoading={isProcessing}>
                  {currentStep === 3 ? `Pagar ${finalTotal.toFixed(2)}€` : 'Continuar'}
                  {!isProcessing && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <Card className="p-6 bg-white shadow-soft-xl border-gray-100">
                  <h3 className="font-bold font-serif text-xl mb-6">
                    Resumen del Pedido
                  </h3>
                  <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {cart.map(item => <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 rounded-lg bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-charcoal-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-charcoal-500">
                            Cant: {item.quantity}
                          </p>
                        </div>
                        <p className="font-bold text-sm text-charcoal-900">
                          {(item.price * item.quantity).toFixed(2)}€
                        </p>
                      </div>)}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-100 text-sm">
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
                    <div className="flex justify-between items-end pt-2 border-t border-gray-100">
                      <span className="font-bold text-lg text-charcoal-900">
                        Total
                      </span>
                      <span className="font-bold text-2xl text-primary-800">
                        {finalTotal.toFixed(2)}€
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded-xl text-xs text-charcoal-500 space-y-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>Garantía de devolución 30 días</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-500" />
                      <span>Pagos encriptados SSL</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>;
}