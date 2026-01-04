import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Dog, Cat, Calendar, Weight, Activity, Edit2, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PetProfileBuilder } from '../tools/PetProfileBuilder';
// Mock data
const initialPets = [{
  id: '1',
  name: 'Max',
  type: 'dog',
  breed: 'Golden Retriever',
  age: 3,
  weight: 28,
  activity: 'high',
  image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=300'
}, {
  id: '2',
  name: 'Luna',
  type: 'cat',
  breed: 'Siamés',
  age: 2,
  weight: 4,
  activity: 'normal',
  image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=300'
}];
export function PetsSection() {
  const [pets, setPets] = useState(initialPets);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const handleDelete = (id: string) => {
    setPets(pets.filter(p => p.id !== id));
  };
  const handlePetCreated = (petData: any) => {
    const newPet = {
      id: Date.now().toString(),
      name: petData.name,
      type: petData.type,
      breed: petData.breed || 'Mestizo',
      age: parseInt(petData.age),
      weight: parseFloat(petData.weight),
      activity: petData.activityLevel,
      image: petData.type === 'dog' ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=300' : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=300'
    };
    setPets([...pets, newPet]);
    setIsBuilderOpen(false);
  };
  if (isBuilderOpen) {
    return <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-serif text-charcoal-900">
            Añadir Nueva Mascota
          </h2>
          <Button variant="outline" onClick={() => setIsBuilderOpen(false)}>
            Cancelar
          </Button>
        </div>
        <PetProfileBuilder onComplete={handlePetCreated} />
      </div>;
  }
  return <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-serif text-charcoal-900 mb-2">
            Mis Mascotas
          </h2>
          <p className="text-gray-500">
            Gestiona los perfiles de tus compañeros peludos para recibir
            recomendaciones personalizadas.
          </p>
        </div>
        <Button onClick={() => setIsBuilderOpen(true)} className="shadow-lg shadow-primary-900/10">
          <Plus className="w-5 h-5 mr-2" />
          Añadir Mascota
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {pets.map(pet => <motion.div key={pet.id} layout initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.9
        }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-100">
                <div className="relative h-48 bg-gray-100">
                  <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white text-gray-600 hover:text-primary-600 transition-colors shadow-sm">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(pet.id)} className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white text-gray-600 hover:text-red-500 transition-colors shadow-sm">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="primary" className="shadow-md backdrop-blur-md bg-white/90 text-primary-800 border-none">
                      {pet.type === 'dog' ? <Dog className="w-3 h-3 mr-1" /> : <Cat className="w-3 h-3 mr-1" />}
                      {pet.breed}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-charcoal-900 font-serif">
                      {pet.name}
                    </h3>
                    <Badge variant={pet.activity === 'high' ? 'warning' : 'secondary'} size="sm">
                      Actividad{' '}
                      {pet.activity === 'high' ? 'Alta' : pet.activity === 'normal' ? 'Media' : 'Baja'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">
                          Edad
                        </p>
                        <p className="font-bold text-charcoal-900">
                          {pet.age} años
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                        <Weight className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">
                          Peso
                        </p>
                        <p className="font-bold text-charcoal-900">
                          {pet.weight} kg
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Button variant="outline" className="w-full text-sm">
                      Ver Plan Nutricional
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </AnimatePresence>

        <motion.button whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} onClick={() => setIsBuilderOpen(true)} className="h-full min-h-[300px] rounded-[2rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50/30 transition-all group">
          <div className="w-16 h-16 rounded-full bg-gray-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
            <Plus className="w-8 h-8" />
          </div>
          <span className="font-bold text-lg">Añadir otra mascota</span>
        </motion.button>
      </div>
    </div>;
}