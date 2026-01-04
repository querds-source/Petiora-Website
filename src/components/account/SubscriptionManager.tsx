import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Package, CreditCard, Pause, Play, Edit, Trash2, CheckCircle2, Clock, TrendingUp, Gift } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Alert } from '../ui/Alert';
interface Subscription {
  id: string;
  productName: string;
  productImage: string;
  frequency: 'weekly' | 'biweekly' | 'monthly';
  nextDelivery: string;
  price: number;
  status: 'active' | 'paused';
  petName: string;
}
export function SubscriptionManager() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([{
    id: '1',
    productName: 'Plan Vitalidad - Pollo & Verduras',
    productImage: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=400',
    frequency: 'biweekly',
    nextDelivery: '2024-02-15',
    price: 45.99,
    status: 'active',
    petName: 'Max'
  }, {
    id: '2',
    productName: 'Snacks Naturales Mix',
    productImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
    frequency: 'monthly',
    nextDelivery: '2024-02-20',
    price: 19.99,
    status: 'active',
    petName: 'Luna'
  }]);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState<string | null>(null);
  const toggleSubscriptionStatus = (id: string) => {
    setSubscriptions(prev => prev.map(sub => sub.id === id ? {
      ...sub,
      status: sub.status === 'active' ? 'paused' : 'active'
    } : sub));
  };
  const cancelSubscription = (id: string) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
    setShowCancelModal(false);
    setSelectedSubscription(null);
  };
  const getFrequencyLabel = (freq: string) => {
    switch (freq) {
      case 'weekly':
        return 'Semanal';
      case 'biweekly':
        return 'Quincenal';
      case 'monthly':
        return 'Mensual';
      default:
        return freq;
    }
  };
  const totalMonthlySavings = subscriptions.reduce((acc, sub) => {
    const discount = sub.price * 0.15; // 15% subscription discount
    return acc + discount;
  }, 0);
  return <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-charcoal-900 mb-2 font-serif">
            Mis Suscripciones
          </h2>
          <p className="text-gray-500">
            Gestiona tus entregas recurrentes y ahorra hasta un 15%
          </p>
        </div>
        <Button className="rounded-xl">
          <Package className="w-4 h-4 mr-2" />
          Nueva Suscripción
        </Button>
      </div>

      {/* Savings Alert */}
      {totalMonthlySavings > 0 && <Alert variant="success" icon={false}>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <div>
              <strong className="font-bold">¡Estás ahorrando!</strong> Ahorras{' '}
              <strong className="text-emerald-700">
                {totalMonthlySavings.toFixed(2)}€/mes
              </strong>{' '}
              con tus suscripciones activas.
            </div>
          </div>
        </Alert>}

      {/* Subscriptions List */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {subscriptions.map(sub => <motion.div key={sub.id} layout initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          x: -100
        }} transition={{
          duration: 0.3
        }}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                    <img src={sub.productImage} alt={sub.productName} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-charcoal-900">
                            {sub.productName}
                          </h3>
                          <Badge variant={sub.status === 'active' ? 'success' : 'secondary'} size="sm">
                            {sub.status === 'active' ? 'Activa' : 'Pausada'}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500">
                          Para{' '}
                          <strong className="text-charcoal-700">
                            {sub.petName}
                          </strong>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary-700 font-serif">
                          {sub.price.toFixed(2)}€
                        </p>
                        <p className="text-xs text-gray-500">
                          {getFrequencyLabel(sub.frequency)}
                        </p>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">
                            Próxima entrega
                          </p>
                          <p className="text-sm font-bold text-charcoal-900">
                            {new Date(sub.nextDelivery).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short'
                        })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <Gift className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">
                            Ahorro
                          </p>
                          <p className="text-sm font-bold text-emerald-600">
                            {(sub.price * 0.15).toFixed(2)}€/entrega
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">
                            Frecuencia
                          </p>
                          <p className="text-sm font-bold text-charcoal-900">
                            {getFrequencyLabel(sub.frequency)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" onClick={() => toggleSubscriptionStatus(sub.id)} className="rounded-lg">
                        {sub.status === 'active' ? <>
                            <Pause className="w-4 h-4 mr-2" />
                            Pausar
                          </> : <>
                            <Play className="w-4 h-4 mr-2" />
                            Reanudar
                          </>}
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg" onClick={() => {
                    setSelectedSubscription(sub.id);
                    setShowCancelModal(true);
                  }}>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </AnimatePresence>
      </div>

      {subscriptions.length === 0 && <Card className="p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-charcoal-900 mb-2">
            No tienes suscripciones activas
          </h3>
          <p className="text-gray-500 mb-6">
            Ahorra hasta un 15% con entregas automáticas
          </p>
          <Button>Crear Suscripción</Button>
        </Card>}

      {/* Cancel Modal */}
      <AnimatePresence>
        {showCancelModal && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setShowCancelModal(false)} />
            <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.95
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <Card className="max-w-md w-full p-8">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                  ¿Cancelar suscripción?
                </h3>
                <p className="text-gray-600 mb-6">
                  Perderás el 15% de descuento y tendrás que hacer pedidos
                  manuales. ¿Estás seguro de que quieres cancelar?
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => setShowCancelModal(false)}>
                    No, mantener
                  </Button>
                  <Button variant="danger" className="flex-1" onClick={() => selectedSubscription && cancelSubscription(selectedSubscription)}>
                    Sí, cancelar
                  </Button>
                </div>
              </Card>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}