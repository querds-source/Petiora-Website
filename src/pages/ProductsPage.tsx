import React, { useEffect, useMemo, useState, Children } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Search, X, Check, SlidersHorizontal, Dog, Cat, ChevronDown, Award, Heart, Microscope, Truck, ShieldCheck, Info, Puzzle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';
import { Skeleton } from '../components/ui/Skeleton';
import { Badge } from '../components/ui/Badge';
import { Tooltip } from '../components/ui/Tooltip';
import { InfoBadge } from '../components/ui/InfoBadge';
// Debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(true);
  // Enhanced Filter States
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedPetType, setSelectedPetType] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const categoryParam = searchParams.get('category');
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600 + Math.random() * 400);
    return () => clearTimeout(timer);
  }, [categoryParam, debouncedSearchQuery, sortBy, selectedPetType, priceRange, selectedTags]);
  useEffect(() => {
    if (debouncedSearchQuery) {
      setSearchParams(prev => {
        prev.set('search', debouncedSearchQuery);
        return prev;
      });
    } else {
      setSearchParams(prev => {
        prev.delete('search');
        return prev;
      });
    }
  }, [debouncedSearchQuery, setSearchParams]);
  const availableTags = ['Sin cereales', 'Hipoalergénico', 'Orgánico', 'Senior', 'Cachorro', 'Control de peso', 'Piel sensible', 'Alto en proteína'];
  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryParam) {
      result = result.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
    }
    if (debouncedSearchQuery) {
      const query = debouncedSearchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
    }
    if (selectedPetType.length > 0) {
      result = result.filter(p => selectedPetType.includes(p.petType) || p.petType === 'both');
    }
    if (selectedTags.length > 0) {
      result = result.filter(p => {
        const text = (p.description + ' ' + p.name).toLowerCase();
        return selectedTags.some(tag => text.includes(tag.toLowerCase()) || true);
      });
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'popular':
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      default:
        break;
    }
    return result;
  }, [categoryParam, debouncedSearchQuery, sortBy, selectedPetType, priceRange, selectedTags]);
  const togglePetType = (type: string) => {
    setSelectedPetType(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  const clearAllFilters = () => {
    setSelectedPetType([]);
    setSelectedTags([]);
    setPriceRange([0, 200]);
    setSearchParams({});
    setSearchQuery('');
    setSortBy('featured');
  };
  const activeFiltersCount = [categoryParam, ...selectedPetType, ...selectedTags, priceRange[1] < 200 ? 'price' : null].filter(Boolean).length;
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <div className="bg-gray-50 min-h-screen pb-24 font-sans">
      {/* Enhanced Professional Hero */}
      <div className="bg-charcoal-900 text-white py-20 lg:py-24 mb-12 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-900/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-xs font-bold mb-6 tracking-wide uppercase shadow-lg">
              <Award className="h-3.5 w-3.5 text-secondary-400" />
              <span>Catálogo Premium Verificado</span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight font-serif tracking-tight text-white">
              Encuentra el Alimento Perfecto
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Nutrición científica adaptada a las necesidades únicas de tu
              mascota. Filtra por especie, beneficios o ingredientes.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="flex flex-wrap gap-3 justify-center">
              {[{
              id: 'dog-food',
              label: 'Perros',
              icon: Dog
            }, {
              id: 'cat-food',
              label: 'Gatos',
              icon: Cat
            }, {
              id: 'snacks',
              label: 'Snacks',
              icon: Heart
            }, {
              id: 'care',
              label: 'Cuidado',
              icon: Microscope
            }, {
              id: 'toys',
              label: 'Juguetes',
              icon: Puzzle
            }].map(cat => <button key={cat.id} onClick={() => setSearchParams({
              category: cat.id
            })} className={`
                    px-6 py-3 rounded-xl font-bold transition-all border text-sm flex items-center gap-2 group
                    ${categoryParam === cat.id ? 'bg-white text-charcoal-900 border-white shadow-xl transform scale-105' : 'bg-white/5 backdrop-blur-sm text-white border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105'}
                  `}>
                  <cat.icon className={`w-4 h-4 ${categoryParam === cat.id ? 'text-primary-600' : 'text-white/80'}`} />
                  <span>{cat.label}</span>
                </button>)}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Enhanced Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-28">
            <div className="bg-white p-6 rounded-2xl shadow-soft-md border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-charcoal-900 text-base flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-primary-600" />
                  Filtros
                </h3>
                {activeFiltersCount > 0 && <button onClick={clearAllFilters} className="text-[10px] text-primary-600 hover:text-primary-700 font-bold uppercase tracking-wide hover:underline">
                    Limpiar ({activeFiltersCount})
                  </button>}
              </div>

              {/* Search Input */}
              <div className="mb-6 pb-6 border-b border-gray-50">
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                  <input type="text" placeholder="Buscar..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-9 pr-8 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all focus:bg-white" />
                  {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
                      <X className="h-3 w-3" />
                    </button>}
                </div>
              </div>

              {/* Pet Type Filter */}
              <div className="mb-6 pb-6 border-b border-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-charcoal-800 text-xs uppercase tracking-wider">
                    Mascota
                  </h4>
                  <InfoBadge label="" tooltipContent="Filtra por especie para ver productos específicos." size="sm" variant="ghost" className="opacity-50" />
                </div>
                <div className="space-y-2">
                  {[{
                  id: 'dog',
                  label: 'Perros',
                  icon: Dog
                }, {
                  id: 'cat',
                  label: 'Gatos',
                  icon: Cat
                }].map(type => <label key={type.id} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-all">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${selectedPetType.includes(type.id) ? 'bg-primary-600 border-primary-600' : 'bg-white border-gray-300 group-hover:border-primary-500'}`}>
                        {selectedPetType.includes(type.id) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </div>
                      <input type="checkbox" className="hidden" checked={selectedPetType.includes(type.id)} onChange={() => togglePetType(type.id)} />
                      <span className={`text-sm transition-colors ${selectedPetType.includes(type.id) ? 'text-charcoal-900 font-bold' : 'text-charcoal-600'}`}>
                        {type.label}
                      </span>
                    </label>)}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6 pb-6 border-b border-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-charcoal-800 text-xs uppercase tracking-wider">
                    Precio Máximo
                  </h4>
                  <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded">
                    {priceRange[1]}€
                  </span>
                </div>
                <input type="range" min="0" max="200" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
                <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-medium">
                  <span>0€</span>
                  <span>200€</span>
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <h4 className="font-bold text-charcoal-800 text-xs uppercase tracking-wider mb-3">
                  Características
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {availableTags.map(tag => <button key={tag} onClick={() => toggleTag(tag)} className={`
                        px-2.5 py-1 rounded-md text-[11px] font-bold transition-all border
                        ${selectedTags.includes(tag) ? 'bg-primary-50 text-primary-700 border-primary-200 shadow-sm' : 'bg-white text-charcoal-500 border-gray-200 hover:border-gray-300 hover:text-charcoal-700'}
                      `}>
                      {tag}
                    </button>)}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 w-full min-w-0">
            {/* Enhanced Toolbar */}
            <div className="bg-white p-3 rounded-xl shadow-soft-sm border border-gray-100 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-24 z-30 transition-all duration-300 backdrop-blur-md bg-white/95">
              <div className="flex items-center gap-3 pl-2">
                <span className="text-charcoal-500 text-sm font-medium">
                  Mostrando{' '}
                  <span className="font-bold text-charcoal-900">
                    {filteredProducts.length}
                  </span>{' '}
                  resultados
                </span>
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  <Truck className="w-3 h-3" /> Envío gratis +49€
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button variant="outline" className="lg:hidden flex-1 sm:flex-none text-sm h-10 rounded-lg border-gray-200" onClick={() => setIsMobileFiltersOpen(true)}>
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                  {activeFiltersCount > 0 && <Badge variant="primary" size="sm" className="ml-2">
                      {activeFiltersCount}
                    </Badge>}
                </Button>

                <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-100 text-charcoal-900' : 'text-charcoal-400 hover:text-charcoal-600'}`}>
                    <Grid className="h-4 w-4" />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-100 text-charcoal-900' : 'text-charcoal-400 hover:text-charcoal-600'}`}>
                    <List className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative w-full sm:w-auto sm:min-w-[180px]">
                  <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="w-full appearance-none bg-gray-50 border border-gray-200 text-charcoal-800 py-2.5 px-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm font-medium cursor-pointer transition-all hover:bg-gray-100">
                    <option value="featured">Destacados</option>
                    <option value="popular">Más Populares</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="newest">Más Nuevos</option>
                    <option value="rating">Mejor Valorados</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {isLoading ? <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {[...Array(6)].map((_, i) => <div key={i} className="bg-white rounded-[1.5rem] p-4 border border-gray-100 h-[420px] flex flex-col shadow-sm">
                    <Skeleton className="w-full aspect-[4/5] rounded-xl mb-4" />
                    <Skeleton className="h-4 w-20 mb-2 rounded-full" />
                    <Skeleton className="h-6 w-3/4 mb-3 rounded-lg" />
                    <div className="mt-auto flex justify-between items-center">
                      <Skeleton className="h-8 w-24 rounded-lg" />
                      <Skeleton className="h-10 w-10 rounded-xl" />
                    </div>
                  </div>)}
              </div> : filteredProducts.length > 0 ? <motion.div variants={containerVariants} initial="hidden" animate="visible" className={`grid gap-8 lg:gap-10 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map(product => <motion.div layout key={product.id} variants={itemVariants} exit={{
                opacity: 0,
                scale: 0.9
              }} transition={{
                duration: 0.3
              }}>
                      <ProductCard product={product} />
                    </motion.div>)}
                </AnimatePresence>
              </motion.div> : <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 shadow-soft-sm">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-6 shadow-inner">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 mb-3 font-serif">
                  No se encontraron productos
                </h3>
                <p className="text-charcoal-500 max-w-md mx-auto mb-8 text-base leading-relaxed">
                  Intenta ajustar tus filtros o búsqueda para encontrar lo que
                  necesitas. Prueba buscando términos más generales.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={clearAllFilters} className="rounded-xl px-8 py-3 shadow-lg shadow-primary-900/10">
                    Limpiar filtros
                  </Button>
                  <Button variant="outline" onClick={() => setSearchParams({
                category: 'dog-food'
              })} className="rounded-xl px-8 py-3">
                    Ver comida para perros
                  </Button>
                </div>
              </motion.div>}
          </main>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {isMobileFiltersOpen && <div className="fixed inset-0 z-[100] flex lg:hidden">
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)} />
            <motion.div initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }} className="relative w-full max-w-xs bg-white h-full shadow-2xl ml-auto flex flex-col">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-charcoal-800 font-serif">
                    Filtros
                  </h2>
                  {activeFiltersCount > 0 && <Badge variant="primary" size="sm">
                      {activeFiltersCount}
                    </Badge>}
                </div>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 text-charcoal-400 hover:text-charcoal-900 rounded-full hover:bg-white transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-8">
                {/* Mobile Search */}
                <div>
                  <h4 className="font-bold text-charcoal-800 mb-3 text-xs uppercase tracking-wider">
                    Buscar
                  </h4>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="Buscar productos..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" />
                  </div>
                </div>

                {/* Mobile Pet Type */}
                <div>
                  <h4 className="font-bold text-charcoal-800 mb-3 text-xs uppercase tracking-wider">
                    Mascota
                  </h4>
                  <div className="space-y-2">
                    {[{
                  id: 'dog',
                  label: 'Perros'
                }, {
                  id: 'cat',
                  label: 'Gatos'
                }].map(type => <label key={type.id} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${selectedPetType.includes(type.id) ? 'bg-primary-600 border-primary-600' : 'border-gray-300'}`}>
                          {selectedPetType.includes(type.id) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                        </div>
                        <input type="checkbox" className="hidden" checked={selectedPetType.includes(type.id)} onChange={() => togglePetType(type.id)} />
                        <span className="text-sm text-charcoal-700 font-medium">
                          {type.label}
                        </span>
                      </label>)}
                  </div>
                </div>

                {/* Mobile Price */}
                <div>
                  <h4 className="font-bold text-charcoal-800 mb-3 text-xs uppercase tracking-wider">
                    Precio Máximo
                  </h4>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-charcoal-500 font-bold uppercase">
                        Hasta
                      </span>
                      <span className="text-sm font-bold text-primary-700 bg-white px-2 py-0.5 rounded shadow-sm">
                        {priceRange[1]}€
                      </span>
                    </div>
                    <input type="range" min="0" max="200" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
                  </div>
                </div>

                {/* Mobile Tags */}
                <div>
                  <h4 className="font-bold text-charcoal-800 mb-3 text-xs uppercase tracking-wider">
                    Características
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map(tag => <button key={tag} onClick={() => toggleTag(tag)} className={`
                          px-2.5 py-1 rounded-md text-xs font-bold transition-all border
                          ${selectedTags.includes(tag) ? 'bg-primary-50 text-primary-700 border-primary-200' : 'bg-gray-50 text-charcoal-600 border-gray-200'}
                        `}>
                        {tag}
                      </button>)}
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3">
                <Button variant="outline" className="w-full h-11 text-sm border-gray-300" onClick={clearAllFilters}>
                  Limpiar filtros
                </Button>
                <Button className="w-full h-11 text-sm shadow-lg" onClick={() => setIsMobileFiltersOpen(false)}>
                  Ver {filteredProducts.length} productos
                </Button>
              </div>
            </motion.div>
          </div>}
      </AnimatePresence>
    </div>;
}