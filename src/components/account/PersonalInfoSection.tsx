import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Save, X, Edit2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { mockExtendedUser } from '../../utils/mockAccountData';
import { useNotifications } from '../../context/NotificationsContext';
export function PersonalInfoSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    addNotification
  } = useNotifications();
  const [formData, setFormData] = useState({
    name: mockExtendedUser.name,
    email: mockExtendedUser.email,
    phone: mockExtendedUser.phone || '',
    dateOfBirth: mockExtendedUser.dateOfBirth || ''
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEditing(false);
      addNotification('success', 'Información personal actualizada correctamente');
    }, 1000);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Información Personal
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona tu información de contacto y detalles personales.
          </p>
        </div>
        {!isEditing && <Button variant="outline" onClick={() => setIsEditing(true)} className="hidden sm:flex">
            <Edit2 className="w-4 h-4 mr-2" />
            Editar Perfil
          </Button>}
      </div>

      <Card className="overflow-hidden">
        {isEditing ? <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Input label="Nombre Completo" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} required />
              <Input label="Correo Electrónico" type="email" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} required />
              <Input label="Teléfono" type="tel" value={formData.phone} onChange={e => setFormData({
            ...formData,
            phone: e.target.value
          })} placeholder="+34 600 000 000" />
              <Input label="Fecha de Nacimiento" type="date" value={formData.dateOfBirth} onChange={e => setFormData({
            ...formData,
            dateOfBirth: e.target.value
          })} />
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-100">
              <Button type="button" variant="ghost" onClick={() => setIsEditing(false)} disabled={isLoading}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <span className="flex items-center">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Guardando...
                  </span> : <span className="flex items-center">
                    <Save className="w-4 h-4 mr-2" />
                    Guardar Cambios
                  </span>}
              </Button>
            </div>
          </form> : <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <User className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Nombre Completo
                  </p>
                  <p className="text-base font-semibold text-gray-900 mt-1">
                    {formData.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Correo Electrónico
                  </p>
                  <p className="text-base font-semibold text-gray-900 mt-1">
                    {formData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Teléfono</p>
                  <p className="text-base font-semibold text-gray-900 mt-1">
                    {formData.phone || 'No especificado'}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Fecha de Nacimiento
                  </p>
                  <p className="text-base font-semibold text-gray-900 mt-1">
                    {formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                }) : 'No especificada'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 sm:hidden">
              <Button variant="outline" fullWidth onClick={() => setIsEditing(true)}>
                <Edit2 className="w-4 h-4 mr-2" />
                Editar Perfil
              </Button>
            </div>
          </div>}
      </Card>
    </div>;
}