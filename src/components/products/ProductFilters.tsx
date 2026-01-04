import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Check, Dog, Cat, Filter, Tag as TagIcon, DollarSign, X, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Accordion } from '../ui/Accordion';
import { Tag } from '../ui/Tag';
interface ProductFiltersProps {
  mobile?: boolean;
  onClose?: () => void;
}
export function ProductFilters({
  mobile,
  onClose
}: ProductFiltersProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');
  const currentPriceRange = searchParams.get('price');
  const currentTags = searchParams.getAll('tag');
  const categories = [{
    id: 'all',
    name: 'Todos los productos',
    value: null,
    icon: Filter
  }, {
    id: 'dogs',
    name: 'Perros',
    value: 'dog-food',
    icon: Dog
  }, {
    id: 'cats',
    name: 'Gatos',
    value: 'cat-food',
    icon: Cat
  }];
  const priceRanges = [{
    id: 'all',
    name: 'Todos los precios',
    value: null
  }, {
    id: 'under-20',
    name: 'Menos de 20€',
    value: '0-20'
  }, {
    id: '20-50',
    name: '20€ - 50€',
    value: '20-50'
  }, {
    id: 'over-50',
    name: 'Más de 50€',
    value: '50-999'
  }];
  const tags = ['Orgánico', 'Sin cereales', 'Hipoalergénico', 'Senior', 'Cachorro', 'Control de peso', 'Piel sensible'];
  const handleCategoryChange = (value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('category', value);
    } else {
      newParams.delete('category');
    }
    navigate(`/productos?${newParams.toString()}`);
    if (mobile && onClose) onClose();
  };
  const handlePriceChange = (value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('price', value);
    } else {
      newParams.delete('price');
    }
    navigate(`/productos?${newParams.toString()}`);
  };
  const handleTagToggle = (tag: string) => {
    const newParams = new URLSearchParams(searchParams);
    const tags = newParams.getAll('tag');
    if (tags.includes(tag)) {
      const newTags = tags.filter(t => t !== tag);
      newParams.delete('tag');
      newTags.forEach(t => newParams.append('tag', t));
    } else {
      newParams.append('tag', tag);
    }
    navigate(`/productos?${newParams.toString()}`);
  };
  const clearFilters = () => {
    navigate('/productos');
    if (mobile && onClose) onClose();
  };
  const activeFiltersCount = [currentCategory, currentPriceRange, ...currentTags].filter(Boolean).length;
  return <div className={`space-y-6 ${mobile ? 'p-6' : ''}`}>
      {mobile && <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-charcoal-900 font-serif flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5" />
            Filtros
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-charcoal-500" />
          </button>
        </div>}

      {/* Active Filters Summary */}
      {activeFiltersCount > 0 && <div className="flex flex-wrap gap-2 mb-4">
          {currentCategory && <Tag active variant="primary" onRemove={() => handleCategoryChange(null)}>
              {categories.find(c => c.value === currentCategory)?.name || currentCategory}
            </Tag>}
          {currentPriceRange && <Tag active variant="secondary" onRemove={() => handlePriceChange(null)}>
              {priceRanges.find(p => p.value === currentPriceRange)?.name}
            </Tag>}
          {currentTags.map(tag => <Tag key={tag} active variant="default" onRemove={() => handleTagToggle(tag)}>
              {tag}
            </Tag>)}
          <button onClick={clearFilters} className="text-xs text-charcoal-500 hover:text-rose-500 underline decoration-dotted underline-offset-2 ml-1">
            Limpiar todo
          </button>
        </div>}

      <Accordion allowMultiple defaultOpen={['categories', 'price', 'tags']} items={[{
      id: 'categories',
      title: <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-charcoal-500">
                <Filter className="w-4 h-4" /> Categorías
              </div>,
      content: <div className="space-y-2 pt-2">
                {categories.map(category => {
          const isSelected = category.value === currentCategory || category.value === null && !currentCategory;
          return <motion.button key={category.id} whileHover={{
            x: 4
          }} onClick={() => handleCategoryChange(category.value)} className={`
                        w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group
                        ${isSelected ? 'bg-primary-50 border-primary-200 shadow-sm' : 'bg-white border-gray-100 hover:border-primary-200 hover:shadow-sm'}
                      `}>
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                        ${isSelected ? 'bg-primary-600 text-white' : 'bg-gray-50 text-charcoal-400 group-hover:bg-primary-100 group-hover:text-primary-600'}
                      `}>
                        <category.icon className="h-4 w-4" />
                      </div>
                      <span className={`text-sm font-medium ${isSelected ? 'text-primary-700' : 'text-charcoal-600 group-hover:text-charcoal-900'}`}>
                        {category.name}
                      </span>
                      {isSelected && <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} className="ml-auto">
                          <Check className="h-4 w-4 text-primary-600" />
                        </motion.div>}
                    </motion.button>;
        })}
              </div>
    }, {
      id: 'price',
      title: <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-charcoal-500">
                <DollarSign className="w-4 h-4" /> Precio
              </div>,
      content: <div className="space-y-2 pt-2">
                {priceRanges.map(range => <label key={range.id} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="relative flex items-center justify-center w-5 h-5">
                      <input type="radio" name="price" checked={range.value === currentPriceRange || range.value === null && !currentPriceRange} onChange={() => handlePriceChange(range.value)} className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-primary-600 checked:bg-primary-600 transition-all cursor-pointer" />
                      <div className="absolute w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
                    </div>
                    <span className="text-sm text-charcoal-600 group-hover:text-charcoal-900 font-medium transition-colors">
                      {range.name}
                    </span>
                  </label>)}
              </div>
    }, {
      id: 'tags',
      title: <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-charcoal-500">
                <TagIcon className="w-4 h-4" /> Etiquetas
              </div>,
      content: <div className="flex flex-wrap gap-2 pt-2">
                {tags.map(tag => <Tag key={tag} active={currentTags.includes(tag)} onClick={() => handleTagToggle(tag)} className="cursor-pointer hover:bg-gray-100">
                    {tag}
                  </Tag>)}
              </div>
    }]} />

      {/* Clear Filters Button */}
      <Button variant="outline" fullWidth onClick={clearFilters} className="mt-4 border-gray-200 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600">
        Limpiar todos los filtros
      </Button>
    </div>;
}