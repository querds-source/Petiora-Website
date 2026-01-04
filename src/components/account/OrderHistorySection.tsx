import React, { useState } from 'react';
import { Package, Truck, CheckCircle, XCircle, ChevronDown, ChevronUp, MapPin, CreditCard, Download, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { mockOrders } from '../../utils/mockAccountData';
import { Link } from 'react-router-dom';
export function OrderHistorySection() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const tabs = [{
    id: 'all',
    label: 'Todos'
  }, {
    id: 'in-transit',
    label: 'En Camino'
  }, {
    id: 'delivered',
    label: 'Entregados'
  }, {
    id: 'cancelled',
    label: 'Cancelados'
  }];
  const filteredOrders = mockOrders.filter(order => {
    if (activeTab === 'all') return true;
    return order.status === activeTab;
  });
  const toggleOrder = (id: string) => {
    setExpandedOrder(expandedOrder === id ? null : id);
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-transit':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Truck className="w-3 h-3 mr-1.5" /> En camino
          </span>;
      case 'delivered':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1.5" /> Entregado
          </span>;
      case 'cancelled':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1.5" /> Cancelado
          </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Procesando
          </span>;
    }
  };
  return <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Historial de Pedidos
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Consulta el estado y detalle de tus compras recientes.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto no-scrollbar">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              {tab.label}
            </button>)}
        </nav>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? filteredOrders.map(order => <Card key={order.id} className={`overflow-hidden transition-all duration-200 ${expandedOrder === order.id ? 'ring-1 ring-emerald-500 shadow-md' : ''}`}>
              {/* Order Summary Header */}
              <div className="p-6 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleOrder(order.id)}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                      <Package className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-gray-900">
                          #{order.id}
                        </span>
                        {getStatusBadge(order.status)}
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(order.date).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}{' '}
                        • {order.itemsCount} artículos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="font-bold text-gray-900 text-lg">
                        {order.total.toFixed(2)}€
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-emerald-600 transition-colors">
                      {expandedOrder === order.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedOrder === order.id && <div className="border-t border-gray-100 bg-gray-50/50 p-6 animate-fadeIn">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        Dirección de Envío
                      </h4>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        <p className="font-medium text-gray-900">
                          {order.shippingAddress.name}
                        </p>
                        <p>{order.shippingAddress.street}</p>
                        <p>
                          {order.shippingAddress.postalCode},{' '}
                          {order.shippingAddress.city}
                        </p>
                        <p>{order.shippingAddress.country}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                        <CreditCard className="w-4 h-4 mr-2 text-gray-400" />
                        Método de Pago
                      </h4>
                      <p className="text-sm text-gray-600">
                        {order.paymentMethod}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                        <Truck className="w-4 h-4 mr-2 text-gray-400" />
                        Seguimiento
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Número: {order.trackingNumber}
                      </p>
                      <a href="#" className="text-sm text-emerald-600 hover:underline inline-flex items-center">
                        Seguir envío <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
                    {order.items.map((item, index) => <div key={index} className="flex items-center p-4 border-b border-gray-100 last:border-0">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h5 className="font-medium text-gray-900">
                            {item.name}
                          </h5>
                          <p className="text-sm text-gray-500">
                            Cantidad: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right font-medium text-gray-900">
                          {item.price.toFixed(2)}€
                        </div>
                      </div>)}
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Factura
                    </Button>
                    <Button size="sm">Volver a pedir</Button>
                  </div>
                </div>}
            </Card>) : <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No hay pedidos en esta sección
            </h3>
            <p className="text-gray-500 mb-6">
              Parece que no tienes pedidos con este estado.
            </p>
            <Link to="/productos">
              <Button>Explorar Productos</Button>
            </Link>
          </div>}
      </div>
    </div>;
}