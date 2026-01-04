import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
interface BlogFiltersProps {
  categories: {
    id: string;
    label: string;
    icon: any;
  }[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
export function BlogFilters({
  categories,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery
}: BlogFiltersProps) {
  return <div className="sticky top-24 z-30 mb-12">
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl shadow-gray-200/40 rounded-2xl p-4 flex flex-col lg:flex-row justify-between items-center gap-6 transition-all duration-300">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {categories.map(cat => {
          const Icon = cat.icon;
          return <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border whitespace-nowrap
                  ${activeCategory === cat.id ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-lg transform scale-105' : 'bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100 hover:text-charcoal-900'}
                `}>
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>;
        })}
        </div>

        {/* Search */}
        <div className="w-full lg:w-96 relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary-600 transition-colors" />
          </div>
          <input type="text" placeholder="Buscar artículos, temas..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all shadow-inner" />
          {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>}
        </div>
      </div>
    </div>;
}