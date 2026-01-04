import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
export function OrderHistoryPage() {
  // Mock data for orders
  const orders = [{
    id: 'PET-839201',
    date: '12 Oct 2023',
    status: 'shipped',
    total: 54.99,
    items: 3
  }, {
    id: 'PET-839155',
    date: '28 Sep 2023',
    status: 'delivered',
    total: 32.5,
    items: 2
  }, {
    id: 'PET-838902',
    date: '15 Sep 2023',
    status: 'delivered',
    total: 89.99,
    items: 5
  }, {
    id: 'PET-838100',
    date: '02 Aug 2023',
    status: 'delivered',
    total: 12.99,
    items: 1
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'shipped':
        return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
            En camino
          </span>;
      case 'delivered':
        return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
            Entregado
          </span>;
      case 'processing':
        return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">
            Procesando
          </span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
            {status}
          </span>;
    }
  };
  return <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link to="/cuenta" className="mr-4 p-2 hover:bg-white rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Historial de Pedidos
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Buscar por número de pedido..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Todos los estados</option>
              <option>En camino</option>
              <option>Entregado</option>
            </select>
          </div>

          <div className="divide-y divide-gray-100">
            {orders.map(order => <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-gray-900">
                          #{order.id}
                        </span>
                        {getStatusBadge(order.status)}
                      </div>
                      <p className="text-sm text-gray-500">
                        {order.date} • {order.items} artículos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="font-bold text-gray-900 text-lg">
                      {order.total.toFixed(2)}€
                    </span>
                    <Button variant="outline" size="sm">
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </main>;
}