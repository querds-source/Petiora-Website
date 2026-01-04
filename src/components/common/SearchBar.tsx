import React, { useEffect, useState, useRef, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Clock, ArrowRight, Package, TrendingUp, Sparkles, ChevronRight, Star, Tag, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from '../../data/products';
import { Product } from '../../utils/types';
import { Badge } from '../ui/Badge';
interface SearchBarProps {
  onClose?: () => void;
}
interface SearchCategory {
  name: string;
  count: number;
  icon: React.ElementType;
}
export function SearchBar({
  onClose
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  // Popular searches with categories
  const popularSearches = [{
    term: 'Comida para perros',
    category: 'dog-food',
    trending: true
  }, {
    term: 'Snacks naturales',
    category: 'snacks',
    trending: true
  }, {
    term: 'Comida para gatos',
    category: 'cat-food',
    trending: false
  }, {
    term: 'Sin cereales',
    category: 'special',
    trending: true
  }, {
    term: 'Hipoalergénico',
    category: 'special',
    trending: false
  }, {
    term: 'Cachorros',
    category: 'puppy',
    trending: true
  }];
  // Quick filters
  const quickFilters = [{
    label: 'Perros',
    value: 'dog-food',
    icon: Package
  }, {
    label: 'Gatos',
    value: 'cat-food',
    icon: Package
  }, {
    label: 'Ofertas',
    value: 'offers',
    icon: Tag
  }, {
    label: 'Nuevo',
    value: 'new',
    icon: Sparkles
  }];
  useEffect(() => {
    const stored = localStorage.getItem('petiora_recent_searches');
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
    if (onClose && inputRef.current) {
      inputRef.current.focus();
    }
  }, [onClose]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);
  useEffect(() => {
    if (query.length > 1) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        const matches = products.filter(p => p.name.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery) || p.description.toLowerCase().includes(lowerQuery) || p.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))).slice(0, 6);
        setSuggestions(matches);
        setIsSearching(false);
        setIsOpen(true);
        setSelectedIndex(-1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setIsSearching(false);
      setSelectedIndex(-1);
    }
  }, [query]);
  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    const newRecent = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage.setItem('petiora_recent_searches', JSON.stringify(newRecent));
    setIsOpen(false);
    if (onClose) onClose();
    navigate(`/productos?search=${encodeURIComponent(query)}`);
  };
  const handleSuggestionClick = (product: Product) => {
    setIsOpen(false);
    setQuery('');
    if (onClose) onClose();
    navigate(`/productos/${product.id}`);
  };
  const handlePopularSearch = (term: string) => {
    setQuery(term);
    navigate(`/productos?search=${encodeURIComponent(term)}`);
    setIsOpen(false);
    if (onClose) onClose();
  };
  const clearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem('petiora_recent_searches');
  };
  const getCategoryStats = (): SearchCategory[] => {
    return [{
      name: 'Perros',
      count: products.filter(p => p.category === 'dog-food').length,
      icon: Package
    }, {
      name: 'Gatos',
      count: products.filter(p => p.category === 'cat-food').length,
      icon: Package
    }, {
      name: 'Snacks',
      count: products.filter(p => p.category === 'snacks').length,
      icon: Tag
    }];
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      if (onClose) onClose();
    }
  };
  return <div className="relative w-full" ref={wrapperRef}>
      <form onSubmit={handleSearch} className="relative z-20">
        <div className="relative group">
          <motion.div animate={{
          color: isOpen ? '#2563EB' : '#9CA3AF',
          scale: isOpen ? 1.1 : 1
        }} transition={{
          duration: 0.2
        }} className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <Search className="w-5 h-5" />
          </motion.div>

          <input ref={inputRef} type="text" placeholder="Buscar productos, ingredientes, marcas..." value={query} onChange={e => {
          setQuery(e.target.value);
          if (!isOpen) setIsOpen(true);
        }} onFocus={() => setIsOpen(true)} onKeyDown={handleKeyDown} className="w-full pl-14 pr-14 py-4 bg-white border-2 border-gray-200 rounded-2xl text-base text-charcoal-900 
                     focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/10
                     transition-all placeholder-gray-400 shadow-sm hover:border-gray-300 h-14 font-medium" />

          <AnimatePresence>
            {query && <motion.button initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.8
          }} type="button" onClick={() => {
            setQuery('');
            setSuggestions([]);
            inputRef.current?.focus();
          }} whileHover={{
            scale: 1.1,
            rotate: 90
          }} whileTap={{
            scale: 0.9
          }} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-charcoal-600 hover:bg-gray-100 rounded-full transition-all" aria-label="Borrar búsqueda">
                <X className="w-4 h-4" />
              </motion.button>}
          </AnimatePresence>

          {isSearching && <div className="absolute right-14 top-1/2 -translate-y-1/2">
              <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }} className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full" />
            </div>}
        </div>

        {/* Quick Filters */}
        <AnimatePresence>
          {isOpen && !query && <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -10
        }} className="flex gap-2 mt-3">
              {quickFilters.map((filter, idx) => <motion.button key={filter.value} initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: idx * 0.05
          }} type="button" onClick={() => {
            navigate(`/productos?category=${filter.value}`);
            setIsOpen(false);
            if (onClose) onClose();
          }} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all text-sm font-bold text-charcoal-700 hover:text-primary-700">
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </motion.button>)}
            </motion.div>}
        </AnimatePresence>
      </form>

      {/* Dropdown Results */}
      <AnimatePresence>
        {isOpen && (query.length > 0 || recentSearches.length > 0 || popularSearches.length > 0) && <motion.div initial={{
        opacity: 0,
        y: 10,
        scale: 0.98
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 10,
        scale: 0.98
      }} transition={{
        duration: 0.2,
        ease: 'easeOut'
      }} className="absolute top-full left-0 right-0 mt-3 bg-white rounded-3xl shadow-soft-2xl border border-gray-100 overflow-hidden z-50 backdrop-blur-xl">
              {query.length > 0 ? <div>
                  {suggestions.length > 0 ? <>
                      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider flex items-center gap-2">
                          <Package className="w-4 h-4 text-primary-600" />
                          Productos Sugeridos
                        </span>
                        <Badge variant="primary" size="sm" className="font-bold">
                          {suggestions.length} resultados
                        </Badge>
                      </div>
                      <ul className="py-2 max-h-[450px] overflow-y-auto custom-scrollbar">
                        {suggestions.map((product, index) => <motion.li key={product.id} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.05
              }}>
                            <button onClick={() => handleSuggestionClick(product)} className={`w-full px-6 py-4 flex items-center hover:bg-gray-50 transition-all text-left group border-l-4 ${index === selectedIndex ? 'bg-gray-50 border-primary-600' : 'border-transparent hover:border-primary-600'}`}>
                              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 overflow-hidden mr-5 flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 mix-blend-multiply" />
                                {product.featured && <div className="absolute top-1 right-1">
                                    <Star className="w-3 h-3 text-amber-500 fill-current" />
                                  </div>}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-base font-bold text-charcoal-900 group-hover:text-primary-700 truncate transition-colors font-serif">
                                  {product.name}
                                </div>
                                <div className="flex items-center gap-3 mt-1.5">
                                  <Badge variant="outline" size="sm" className="font-bold">
                                    {product.category === 'dog-food' ? 'Perros' : product.category === 'cat-food' ? 'Gatos' : 'Otros'}
                                  </Badge>
                                  <span className="text-sm font-bold text-primary-600">
                                    {product.price.toFixed(2)}€
                                  </span>
                                  {product.originalPrice && <span className="text-xs text-gray-400 line-through">
                                      {product.originalPrice.toFixed(2)}€
                                    </span>}
                                </div>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all">
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </button>
                          </motion.li>)}
                      </ul>
                      <motion.button whileHover={{
              backgroundColor: '#F8F9FA'
            }} onClick={() => handleSearch()} className="w-full px-6 py-5 text-center text-sm font-bold text-primary-700 border-t border-gray-100 transition-colors flex items-center justify-center gap-2 hover:gap-3">
                        Ver todos los resultados para "{query}"
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </> : <div className="p-12 text-center flex flex-col items-center">
                      <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              type: 'spring',
              stiffness: 500,
              damping: 25
            }} className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                        <Search className="w-8 h-8 text-gray-300" />
                      </motion.div>
                      <p className="text-charcoal-900 font-bold text-lg mb-2 font-serif">
                        No encontramos resultados
                      </p>
                      <p className="text-charcoal-500 text-sm max-w-xs mx-auto leading-relaxed mb-6">
                        Intenta con otros términos, categorías o revisa la
                        ortografía.
                      </p>
                      <div className="flex gap-2">
                        <button onClick={() => setQuery('')} className="text-sm font-bold text-primary-600 hover:text-primary-700 px-4 py-2 rounded-xl hover:bg-primary-50 transition-colors">
                          Limpiar búsqueda
                        </button>
                        <button onClick={() => navigate('/productos')} className="text-sm font-bold text-charcoal-700 hover:text-charcoal-900 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors">
                          Ver todos los productos
                        </button>
                      </div>
                    </div>}
                </div> : <div>
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && <div className="border-b border-gray-100">
                      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
                        <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary-400" />
                          Búsquedas Recientes
                        </span>
                        <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} onClick={clearRecent} className="text-xs font-bold text-charcoal-400 hover:text-rose-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-rose-50">
                          Borrar historial
                        </motion.button>
                      </div>
                      <ul className="py-2">
                        {recentSearches.map((term, idx) => <motion.li key={idx} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: idx * 0.05
              }}>
                            <button onClick={() => {
                  setQuery(term);
                  navigate(`/productos?search=${encodeURIComponent(term)}`);
                  setIsOpen(false);
                  if (onClose) onClose();
                }} className="w-full px-6 py-3.5 flex items-center text-sm text-charcoal-700 hover:bg-gray-50 transition-all group">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4 text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-all flex-shrink-0">
                                <Clock className="w-4 h-4" />
                              </div>
                              <span className="font-medium flex-1 text-left group-hover:text-primary-700 transition-colors">
                                {term}
                              </span>
                              <ArrowRight className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary-400" />
                            </button>
                          </motion.li>)}
                      </ul>
                    </div>}

                  {/* Category Stats */}
                  <div className="px-6 py-4 bg-gradient-to-r from-primary-50/30 to-white border-b border-gray-100">
                    <div className="grid grid-cols-3 gap-4">
                      {getCategoryStats().map((cat, idx) => <motion.div key={cat.name} initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: idx * 0.1
              }} className="text-center">
                          <div className="text-2xl font-bold text-primary-600 font-serif">
                            {cat.count}
                          </div>
                          <div className="text-xs text-charcoal-600 font-medium">
                            {cat.name}
                          </div>
                        </motion.div>)}
                    </div>
                  </div>

                  {/* Popular Searches */}
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-secondary-500" />
                        Tendencias
                      </span>
                      <Badge variant="secondary" size="sm" className="font-bold">
                        Popular ahora
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {popularSearches.map((item, idx) => <motion.button key={idx} initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: idx * 0.05
              }} whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.95
              }} onClick={() => handlePopularSearch(item.term)} className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-charcoal-600 hover:border-primary-500 hover:text-primary-700 hover:shadow-md transition-all flex items-center gap-2 group">
                          {item.trending && <Zap className="w-3.5 h-3.5 text-amber-500 fill-current" />}
                          {item.term}
                        </motion.button>)}
                    </div>
                  </div>
                </div>}
            </motion.div>}
      </AnimatePresence>
    </div>;
}