import React, { useState } from 'react';
import { Bell, Mail, Globe, Plus, Trash2, Dog, Cat, Save } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { mockExtendedUser, PetProfile } from '../../utils/mockAccountData';
import { useNotifications } from '../../context/NotificationsContext';
export function PreferencesSection() {
  const [preferences, setPreferences] = useState(mockExtendedUser.preferences);
  const [pets, setPets] = useState<PetProfile[]>(mockExtendedUser.pets);
  const [isAddingPet, setIsAddingPet] = useState(false);
  const {
    addNotification
  } = useNotifications();
  // New Pet Form State
  const [newPet, setNewPet] = useState<Partial<PetProfile>>({
    name: '',
    species: 'dog',
    breed: '',
    age: 0,
    dietaryNeeds: []
  });
  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof preferences] // Type assertion for boolean toggle
    }));
  };
  const handleSavePreferences = () => {
    addNotification('success', 'Preferencias guardadas correctamente');
  };
  const handleAddPet = (e: React.FormEvent) => {
    e.preventDefault();
    const petToAdd = {
      ...newPet,
      id: Math.random().toString(36).substr(2, 9)
    } as PetProfile;
    setPets([...pets, petToAdd]);
    setIsAddingPet(false);
    setNewPet({
      name: '',
      species: 'dog',
      breed: '',
      age: 0,
      dietaryNeeds: []
    });
    addNotification('success', 'Mascota añadida correctamente');
  };
  const handleDeletePet = (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este perfil?')) {
      setPets(pets.filter(p => p.id !== id));
      addNotification('success', 'Perfil de mascota eliminado');
    }
  };
  return <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Preferencias</h2>
        <p className="text-sm text-gray-500 mt-1">
          Personaliza tu experiencia, comunicaciones y perfiles de mascotas.
        </p>
      </div>

      {/* Communications */}
      <Card className="p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
          <Mail className="w-5 h-5 mr-2 text-emerald-600" />
          Comunicaciones
        </h3>
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Boletín Informativo</h4>
              <p className="text-sm text-gray-500">
                Recibe consejos veterinarios y ofertas exclusivas.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={preferences.newsletter} onChange={() => handlePreferenceChange('newsletter')} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-medium text-gray-900 mb-4">Tipos de correos</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" checked={preferences.emailUpdates} onChange={() => handlePreferenceChange('emailUpdates')} className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" />
                <span className="ml-3 text-sm text-gray-700">
                  Actualizaciones de pedidos
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={preferences.emailPromotions} onChange={() => handlePreferenceChange('emailPromotions')} className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" />
                <span className="ml-3 text-sm text-gray-700">
                  Promociones y descuentos
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={preferences.emailBlog} onChange={() => handlePreferenceChange('emailBlog')} className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" />
                <span className="ml-3 text-sm text-gray-700">
                  Artículos del blog y consejos
                </span>
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* Pet Profiles */}
      <Card className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900 flex items-center">
            <Dog className="w-5 h-5 mr-2 text-emerald-600" />
            Mis Mascotas
          </h3>
          {!isAddingPet && <Button size="sm" onClick={() => setIsAddingPet(true)}>
              <Plus className="w-4 h-4 mr-2" /> Añadir Mascota
            </Button>}
        </div>

        {isAddingPet ? <form onSubmit={handleAddPet} className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6 animate-fadeIn">
            <h4 className="font-bold text-gray-900 mb-4">Nueva Mascota</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input label="Nombre" value={newPet.name} onChange={e => setNewPet({
            ...newPet,
            name: e.target.value
          })} required />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Especie
                </label>
                <select value={newPet.species} onChange={e => setNewPet({
              ...newPet,
              species: e.target.value as 'dog' | 'cat' | 'other'
            })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="dog">Perro</option>
                  <option value="cat">Gato</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <Input label="Raza" value={newPet.breed} onChange={e => setNewPet({
            ...newPet,
            breed: e.target.value
          })} />
              <Input label="Edad (años)" type="number" value={newPet.age} onChange={e => setNewPet({
            ...newPet,
            age: parseInt(e.target.value)
          })} />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="ghost" onClick={() => setIsAddingPet(false)}>
                Cancelar
              </Button>
              <Button type="submit">Guardar Perfil</Button>
            </div>
          </form> : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pets.map(pet => <div key={pet.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors group">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-4">
                  {pet.species === 'cat' ? <Cat className="w-6 h-6" /> : <Dog className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{pet.name}</h4>
                  <p className="text-sm text-gray-500">
                    {pet.breed} • {pet.age} años
                  </p>
                </div>
              </div>
              <button onClick={() => handleDeletePet(pet.id)} className="p-2 text-gray-400 hover:text-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>)}
        </div>
      </Card>

      {/* Language & Region */}
      <Card className="p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-emerald-600" />
          Idioma y Región
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Idioma
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" defaultValue="es">
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              País
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" defaultValue="ES">
              <option value="ES">España</option>
              <option value="PT">Portugal</option>
              <option value="FR">Francia</option>
            </select>
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button size="lg" onClick={handleSavePreferences}>
          <Save className="w-4 h-4 mr-2" />
          Guardar Preferencias
        </Button>
      </div>
    </div>;
}