import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Package, MapPin, Shield, Settings, LogOut, CreditCard, Dog, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';
export function AccountSidebar() {
  const location = useLocation();
  const {
    logout
  } = useUser();
  const isActive = (path: string) => {
    if (path === '/cuenta' && location.pathname === '/cuenta') return true;
    if (path !== '/cuenta' && location.pathname.startsWith(path)) return true;
    return false;
  };
  const menuItems = [{
    icon: User,
    label: 'Información Personal',
    path: '/cuenta'
  }, {
    icon: Package,
    label: 'Mis Pedidos',
    path: '/cuenta/orders'
  }, {
    icon: RefreshCw,
    label: 'Suscripciones',
    path: '/cuenta/subscriptions'
  }, {
    icon: Dog,
    label: 'Mis Mascotas',
    path: '/cuenta/pets'
  }, {
    icon: MapPin,
    label: 'Direcciones',
    path: '/cuenta/addresses'
  }, {
    icon: Shield,
    label: 'Seguridad',
    path: '/cuenta/security'
  }, {
    icon: Settings,
    label: 'Preferencias',
    path: '/cuenta/preferences'
  }];
  return <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sticky top-32">
      <div className="flex items-center gap-4 mb-8 px-2">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg">
          JD
        </div>
        <div>
          <h3 className="font-bold text-charcoal-900">Juan Doe</h3>
          <p className="text-xs text-gray-500">Miembro desde 2023</p>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map(item => {
        const active = isActive(item.path);
        return <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${active ? 'bg-primary-50 text-primary-700 font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-charcoal-900'}`}>
              {active && <motion.div layoutId="activeSidebar" className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 rounded-r-full" />}
              <item.icon className={`w-5 h-5 ${active ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
              <span>{item.label}</span>
            </Link>;
      })}

        <div className="pt-4 mt-4 border-t border-gray-100">
          <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </nav>
    </div>;
}