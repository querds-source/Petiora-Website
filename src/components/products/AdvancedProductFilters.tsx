import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, Check } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
interface FilterState {
  category: string[];
  priceRange: [number, number];
  dietary: string[];
  brand: string[];
  rating: number | null;
}
interface AdvancedProductFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  onSearch: (query: string) => void;
  totalProducts: number;
}
export function AdvancedProductFilters({
  onFilterChange,
  onSearch,
  totalProducts
}: AdvancedProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 100],
    dietary: [],
    brand: [],
    rating: null
  });
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  const toggleFilter = (type: keyof FilterState, value: string | number) => {
    setFilters(prev => {
      const current = prev[type] as any[];
      const newValues = current.includes(value) ? current.filter(item => item !== value) : [...current, value];
      const newFilters = {
        ...prev,
        [type]: newValues
      };
      onFilterChange(newFilters);
      return newFilters;
    });
  };
  const clearFilters = () => {
    const resetFilters = {
      category: [],
      priceRange: [0, 100],
      dietary: [],
      brand: [],
      rating: null
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
    setSearchQuery('');
    onSearch('');
  };
  const activeFilterCount = filters.category.length + filters.dietary.length + filters.brand.length + (filters.rating ? 1 : 0);
  return <div className="mb-8 space-y-4">
      {/* Search and Mobile Toggle */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Buscar productos, ingredientes..." value={searchQuery} onChange={handleSearch} className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all outline-none" />
        </div>
        <Button variant="outline" className="lg:hidden px-4" onClick={() => setIsOpen(!isOpen)}>
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          Filtros
          {activeFilterCount > 0 && <Badge variant="primary" size="sm" className="ml-2">
              {activeFilterCount}
            </Badge>}
        </Button>
      </div>

      {/* Active Filters Tags */}
      {activeFilterCount > 0 && <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-500 font-medium mr-2">
            Filtros activos:
          </span>
          {filters.category.map(cat => <Badge key={cat} variant="secondary" className="pl-2 pr-1 py-1">
              {cat}
              <button onClick={() => toggleFilter('category', cat)} className="ml-1 p-0.5 hover:bg-black/10 rounded-full">
                <X className="w-3 h-3" />
              </button>
            </Badge>)}
          {/* Add other active filter tags here */}
          <button onClick={clearFilters} className="text-sm text-red-500 hover:text-red-600 font-medium ml-auto">
            Limpiar todo
          </button>
        </div>}

      {/* Desktop Filters (Always visible on lg) / Mobile Filters (Collapsible) */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h4 className="font-bold text-charcoal-900 mb-4">Categoría</h4>
            <div className="space-y-2">
              {['Perro', 'Gato', 'Snacks', 'Suplementos'].map(cat => <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${filters.category.includes(cat) ? 'bg-primary-600 border-primary-600' : 'border-gray-300 group-hover:border-primary-400'}`}>
                    {filters.category.includes(cat) && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="text-gray-600 group-hover:text-charcoal-900 transition-colors">
                    {cat}
                  </span>
                </label>)}
            </div>
          </div>

          {/* Dietary Needs */}
          <div>
            <h4 className="font-bold text-charcoal-900 mb-4">Necesidades</h4>
            <div className="space-y-2">
              {['Sin Cereales', 'Hipoalergénico', 'Control de Peso', 'Senior', 'Cachorro'].map(diet => <label key={diet} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${filters.dietary.includes(diet) ? 'bg-primary-600 border-primary-600' : 'border-gray-300 group-hover:border-primary-400'}`}>
                    {filters.dietary.includes(diet) && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="text-gray-600 group-hover:text-charcoal-900 transition-colors">
                    {diet}
                  </span>
                </label>)}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-bold text-charcoal-900 mb-4">Precio</h4>
            <div className="px-2">
              <input type="range" min="0" max="100" className="w-full accent-primary-600" onChange={e => setFilters(prev => ({
              ...prev,
              priceRange: [0, parseInt(e.target.value)]
            }))} />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>0€</span>
                <span>{filters.priceRange[1]}€</span>
              </div>
            </div>
          </div>

          {/* Sort & Results */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-charcoal-900 mb-4">Ordenar por</h4>
              <select className="w-full p-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-100">
                <option>Relevancia</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
                <option>Mejor Valorados</option>
                <option>Más Nuevos</option>
              </select>
            </div>
            <div className="text-right text-sm text-gray-500 mt-4">
              Mostrando{' '}
              <span className="font-bold text-charcoal-900">
                {totalProducts}
              </span>{' '}
              productos
            </div>
          </div>
        </div>
      </div>
    </div>;
}