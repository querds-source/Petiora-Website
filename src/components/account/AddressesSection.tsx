import React, { useState } from 'react';
import { MapPin, Plus, Trash2, Edit2, Check, MoreVertical } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { mockExtendedUser, Address } from '../../utils/mockAccountData';
import { useNotifications } from '../../context/NotificationsContext';
export function AddressesSection() {
  const [addresses, setAddresses] = useState<Address[]>(mockExtendedUser.addresses);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const {
    addNotification
  } = useNotifications();
  // Form state
  const [formData, setFormData] = useState<Partial<Address>>({
    name: '',
    street: '',
    city: '',
    postalCode: '',
    country: 'España',
    phone: '',
    isDefault: false
  });
  const resetForm = () => {
    setFormData({
      name: '',
      street: '',
      city: '',
      postalCode: '',
      country: 'España',
      phone: '',
      isDefault: false
    });
    setIsAdding(false);
    setEditingId(null);
  };
  const handleEdit = (address: Address) => {
    setFormData(address);
    setEditingId(address.id);
    setIsAdding(true);
  };
  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta dirección?')) {
      setAddresses(addresses.filter(a => a.id !== id));
      addNotification('success', 'Dirección eliminada correctamente');
    }
  };
  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map(a => ({
      ...a,
      isDefault: a.id === id
    })));
    addNotification('success', 'Dirección predeterminada actualizada');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      // Update existing
      setAddresses(addresses.map(a => a.id === editingId ? {
        ...formData,
        id: editingId
      } as Address : a));
      addNotification('success', 'Dirección actualizada correctamente');
    } else {
      // Add new
      const newAddress = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9)
      } as Address;
      setAddresses([...addresses, newAddress]);
      addNotification('success', 'Nueva dirección añadida');
    }
    resetForm();
  };
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Direcciones de Envío
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona tus direcciones de entrega para futuros pedidos.
          </p>
        </div>
        {!isAdding && <Button onClick={() => setIsAdding(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Añadir Dirección
          </Button>}
      </div>

      {isAdding ? <Card className="p-6 md:p-8 animate-fadeIn">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            {editingId ? 'Editar Dirección' : 'Nueva Dirección'}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input label="Nombre de la dirección (ej. Casa, Oficina)" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} placeholder="Ej: Casa" required />
              <Input label="Teléfono de contacto" value={formData.phone} onChange={e => setFormData({
            ...formData,
            phone: e.target.value
          })} required />
              <Input label="Dirección completa" value={formData.street} onChange={e => setFormData({
            ...formData,
            street: e.target.value
          })} className="md:col-span-2" required />
              <Input label="Ciudad" value={formData.city} onChange={e => setFormData({
            ...formData,
            city: e.target.value
          })} required />
              <Input label="Código Postal" value={formData.postalCode} onChange={e => setFormData({
            ...formData,
            postalCode: e.target.value
          })} required />
              <Input label="País" value={formData.country} disabled className="bg-gray-50" />
            </div>

            <div className="flex items-center mb-8">
              <input type="checkbox" id="isDefault" checked={formData.isDefault} onChange={e => setFormData({
            ...formData,
            isDefault: e.target.checked
          })} className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
              <label htmlFor="isDefault" className="ml-2 block text-sm text-gray-900">
                Establecer como dirección predeterminada
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
              <Button type="button" variant="ghost" onClick={resetForm}>
                Cancelar
              </Button>
              <Button type="submit">
                {editingId ? 'Guardar Cambios' : 'Guardar Dirección'}
              </Button>
            </div>
          </form>
        </Card> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map(address => <div key={address.id} className={`relative bg-white rounded-xl border p-6 transition-all hover:shadow-md ${address.isDefault ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-gray-200'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${address.isDefault ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-gray-900">{address.name}</h3>
                    {address.isDefault && <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Predeterminada
                      </span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEdit(address)} className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Editar">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(address.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-1 text-sm text-gray-600 mb-6">
                <p>{address.street}</p>
                <p>
                  {address.postalCode}, {address.city}
                </p>
                <p>{address.country}</p>
                <p className="pt-2 text-gray-500">{address.phone}</p>
              </div>

              {!address.isDefault && <button onClick={() => handleSetDefault(address.id)} className="text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors flex items-center">
                  <Check className="w-4 h-4 mr-1.5" />
                  Establecer como predeterminada
                </button>}
            </div>)}

          {/* Add New Card (Empty State style) */}
          <button onClick={() => setIsAdding(true)} className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group min-h-[200px]">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
              <Plus className="w-6 h-6 text-gray-400 group-hover:text-emerald-600" />
            </div>
            <span className="font-medium text-gray-900">
              Añadir nueva dirección
            </span>
            <span className="text-sm text-gray-500 mt-1">
              Entrega en casa u oficina
            </span>
          </button>
        </div>}
    </div>;
}