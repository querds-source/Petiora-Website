import React, { useState } from 'react';
import { Shield, Key, Smartphone, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { useNotifications } from '../../context/NotificationsContext';
export function SecuritySection() {
  const {
    addNotification
  } = useNotifications();
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      addNotification('error', 'Las contraseñas no coinciden');
      return;
    }
    // Simulate API call
    addNotification('success', 'Contraseña actualizada correctamente');
    setPasswords({
      current: '',
      new: '',
      confirm: ''
    });
  };
  return <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Seguridad</h2>
        <p className="text-sm text-gray-500 mt-1">
          Protege tu cuenta y gestiona tus sesiones activas.
        </p>
      </div>

      {/* Change Password */}
      <Card className="p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
          <Key className="w-5 h-5 mr-2 text-emerald-600" />
          Cambiar Contraseña
        </h3>
        <form onSubmit={handlePasswordChange} className="max-w-md">
          <div className="space-y-4 mb-6">
            <Input type="password" label="Contraseña actual" value={passwords.current} onChange={e => setPasswords({
            ...passwords,
            current: e.target.value
          })} required />
            <Input type="password" label="Nueva contraseña" value={passwords.new} onChange={e => setPasswords({
            ...passwords,
            new: e.target.value
          })} required />
            <Input type="password" label="Confirmar nueva contraseña" value={passwords.confirm} onChange={e => setPasswords({
            ...passwords,
            confirm: e.target.value
          })} required />
          </div>
          <Button type="submit">Actualizar Contraseña</Button>
        </form>
      </Card>

      {/* 2FA */}
      <Card className="p-6 md:p-8">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-emerald-600" />
              Autenticación en dos pasos (2FA)
            </h3>
            <p className="text-sm text-gray-600 max-w-xl">
              Añade una capa extra de seguridad a tu cuenta. Te pediremos un
              código de seguridad además de tu contraseña al iniciar sesión.
            </p>
          </div>
          <Button variant="outline" disabled>
            Próximamente
          </Button>
        </div>
      </Card>

      {/* Active Sessions */}
      <Card className="p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
          <Smartphone className="w-5 h-5 mr-2 text-emerald-600" />
          Sesiones Activas
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-emerald-600 shadow-sm">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-900">
                  Chrome en Windows (Este dispositivo)
                </p>
                <p className="text-xs text-gray-500">
                  Madrid, España • Activo ahora
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-white px-2 py-1 rounded-full shadow-sm">
              Actual
            </span>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-900">Safari en iPhone 13</p>
                <p className="text-xs text-gray-500">
                  Madrid, España • Hace 2 horas
                </p>
              </div>
            </div>
            <button className="text-sm text-red-600 hover:text-red-700 font-medium">
              Cerrar sesión
            </button>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200">
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar todas las demás sesiones
          </Button>
        </div>
      </Card>
    </div>;
}