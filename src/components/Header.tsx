import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Heart, Search, User, ChevronRight, ShieldCheck, Truck, Dog, Cat, Cookie, Sparkles, ChevronDown, Award, Leaf, Stethoscope, MessageCircle, ArrowRight, CheckCircle2, Clock, Puzzle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { SearchBar } from './common/SearchBar';
import { Tooltip } from './ui/Tooltip';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    getCartCount
  } = useCart();
  const {
    wishlist
  } = useWishlist();
  const location = useLocation();
  const itemCount = getCartCount();
  const wishlistCount = wishlist.length;
  // Scroll handling
  const {
    scrollY
  } = useScroll();
  const headerBackground = useTransform(scrollY, [0, 50], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']);
  const headerBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(12px)']);
  const headerBorder = useTransform(scrollY, [0, 50], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.05)']);
  const headerShadow = useTransform(scrollY, [0, 50], ['none', '0 4px 20px -2px rgba(45, 74, 62, 0.05)']);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setHoveredLink(null);
  }, [location]);
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const productCategories = [{
    name: 'Perros',
    path: '/productos?category=dog-food',
    icon: Dog,
    description: 'Menús completos al vapor',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }, {
    name: 'Gatos',
    path: '/productos?category=cat-food',
    icon: Cat,
    description: 'Nutrición rica en taurina',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  }, {
    name: 'Snacks',
    path: '/productos?category=snacks',
    icon: Cookie,
    description: 'Premios 100% naturales',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  }, {
    name: 'Suplementos',
    path: '/productos?category=care',
    icon: Sparkles,
    description: 'Salud y bienestar',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  }, {
    name: 'Juguetes',
    path: '/productos?category=toys',
    icon: Puzzle,
    description: 'Diversión y estimulación mental',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }];
  const whyPetioraLinks = [{
    name: 'Nuestra Filosofía',
    path: '/nosotros',
    icon: Leaf,
    description: 'Ingredientes reales'
  }, {
    name: 'Calidad Certificada',
    path: '/nosotros#calidad',
    icon: Award,
    description: 'Estándares humanos'
  }, {
    name: 'Comité Científico',
    path: '/nosotros#equipo',
    icon: Stethoscope,
    description: 'Expertos veterinarios'
  }, {
    name: 'Resultados',
    path: '/#testimonios',
    icon: CheckCircle2,
    description: 'Historias reales'
  }];
  const navLinks = [{
    name: 'Inicio',
    path: '/'
  }, {
    name: 'Productos',
    path: '/productos',
    hasDropdown: true,
    dropdownType: 'products'
  }, {
    name: 'Por qué Petiora',
    path: '/nosotros',
    hasDropdown: true,
    dropdownType: 'why'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contacto',
    path: '/contacto'
  }];
  return <>
      {/* Top Bar - Refined & Minimal */}
      <div className="hidden sm:block fixed top-0 left-0 right-0 h-10 bg-charcoal-900 text-white z-50 border-b border-white/5">
        <div className="container-custom h-full flex justify-between items-center text-[11px] font-medium tracking-wider uppercase relative z-10">
          <div className="flex items-center gap-6">
            <Tooltip content="Prueba sin riesgo durante 30 días">
              <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity cursor-help">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
                <span>Garantía 30 Días</span>
              </span>
            </Tooltip>
            <Tooltip content="Entrega en 24/48h en península">
              <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity cursor-help">
                <Truck className="w-3.5 h-3.5 text-primary-400" />
                <span>Envío Gratis +49€</span>
              </span>
            </Tooltip>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1.5 hover:text-primary-300 transition-colors opacity-90">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat Veterinario</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header style={{
      backgroundColor: headerBackground,
      backdropFilter: headerBlur,
      borderBottomColor: headerBorder,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      boxShadow: headerShadow
    }} className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out top-0 sm:top-10 ${isScrolled ? 'py-3' : 'py-5 sm:py-6 border-transparent'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-50" aria-label="Petiora Home">
              <div className="text-primary-800 transition-transform duration-500 ease-out-expo group-hover:rotate-3 group-hover:scale-110">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 36C26.6274 36 32 30.6274 32 24C32 17.3726 26.6274 12 20 12C13.3726 12 8 17.3726 8 24C8 30.6274 13.3726 36 20 36Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M20 32C24.4183 32 28 28.4183 28 24C28 19.5817 24.4183 16 20 16C15.5817 16 12 19.5817 12 24C12 28.4183 15.5817 32 20 32Z" fill="currentColor" />
                  <path d="M20 4C21.6569 4 23 5.34315 23 7C23 8.65685 21.6569 10 20 10C18.3431 10 17 8.65685 17 7C17 5.34315 18.3431 4 20 4Z" fill="currentColor" />
                  <path d="M28.5 7C29.8807 7 31 8.11929 31 9.5C31 10.8807 29.8807 12 28.5 12C27.1193 12 26 10.8807 26 9.5C26 8.11929 27.1193 7 28.5 7Z" fill="currentColor" />
                  <path d="M11.5 7C12.8807 7 14 8.11929 14 9.5C14 10.8807 12.8807 12 11.5 12C10.1193 12 9 10.8807 9 9.5C9 8.11929 10.1193 7 11.5 7Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-charcoal-900 font-serif leading-none group-hover:text-primary-800 transition-colors duration-300">
                  Petiora
                </span>
                <span className="text-[9px] font-bold text-secondary-700 uppercase tracking-[0.25em] mt-0.5 ml-0.5">
                  Nutrición Clínica
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => <div key={link.path} className="relative group/nav" onMouseEnter={() => link.hasDropdown && setHoveredLink(link.name)} onMouseLeave={() => setHoveredLink(null)}>
                  <Link to={link.path} className={`text-sm font-medium transition-all duration-300 flex items-center gap-1 py-4 ${location.pathname === link.path ? 'text-primary-800 font-bold' : 'text-charcoal-700 hover:text-primary-800'}`}>
                    {link.name}
                    {link.hasDropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 text-gray-400 group-hover/nav:text-primary-600 ${hoveredLink === link.name ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Active Indicator */}
                  {location.pathname === link.path && <motion.div layoutId="activeNav" className="absolute bottom-2 left-0 right-0 h-0.5 bg-primary-600 rounded-full" transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }} />}

                  {/* Mega Menus */}
                  <AnimatePresence>
                    {link.hasDropdown && hoveredLink === link.name && <motion.div initial={{
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
                  ease: [0.16, 1, 0.3, 1]
                }} className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-max z-30 perspective-1000">
                        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-soft-xl border border-white/40 ring-1 ring-black/5 p-6 overflow-hidden relative min-w-[500px]">
                          {link.dropdownType === 'products' ? <div className="grid grid-cols-2 gap-4">
                              {productCategories.map((category, idx) => <motion.div key={category.path} initial={{
                        opacity: 0,
                        x: -10
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        delay: idx * 0.03
                      }}>
                                  <Link to={category.path} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group/card border border-transparent hover:border-gray-100 hover:shadow-soft-sm hover:scale-[1.01]">
                                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center flex-shrink-0 group-hover/card:scale-105 transition-transform duration-300 shadow-sm`}>
                                      <category.icon className={`w-6 h-6 ${category.color}`} />
                                    </div>
                                    <div>
                                      <div className="font-bold text-charcoal-900 text-base group-hover/card:text-primary-800 transition-colors">
                                        {category.name}
                                      </div>
                                      <div className="text-xs text-charcoal-500 mt-0.5 font-medium">
                                        {category.description}
                                      </div>
                                    </div>
                                  </Link>
                                </motion.div>)}
                              <div className="col-span-2 mt-2 pt-4 border-t border-gray-50 text-center">
                                <Link to="/productos" className="text-xs font-bold text-primary-600 hover:text-primary-800 inline-flex items-center gap-1 uppercase tracking-wider group/link transition-colors">
                                  Ver todo el catálogo{' '}
                                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                              </div>
                            </div> : <div className="grid grid-cols-1 gap-2">
                              {whyPetioraLinks.map((item, idx) => <motion.div key={idx} initial={{
                        opacity: 0,
                        x: -10
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        delay: idx * 0.03
                      }}>
                                  <Link to={item.path} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group/item hover:scale-[1.01]">
                                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-700 group-hover/item:bg-primary-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
                                      <item.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-bold text-charcoal-900 text-sm group-hover/item:text-primary-800 transition-colors">
                                        {item.name}
                                      </div>
                                      <div className="text-xs text-charcoal-500 font-medium">
                                        {item.description}
                                      </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-300 ml-auto group-hover/item:text-primary-400 group-hover/item:translate-x-1 transition-all" />
                                  </Link>
                                </motion.div>)}
                            </div>}
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </div>)}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2 relative z-50">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className={`p-2.5 rounded-full transition-all duration-300 hover:scale-105 ${isSearchOpen ? 'bg-gray-100 text-charcoal-900' : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-gray-50'}`} aria-label="Buscar">
                <Search className="h-5 w-5" strokeWidth={2} />
              </button>

              <div className="h-6 w-px bg-gray-200 hidden sm:block mx-1" />

              <div className="flex items-center gap-1">
                <Link to="/favoritos" className="hidden sm:flex relative p-2.5 text-charcoal-600 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all duration-300 group hover:scale-105" aria-label="Favoritos">
                  <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  {wishlistCount > 0 && <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-rose-500 rounded-full ring-2 ring-white" />}
                </Link>

                <Link to="/carrito" className="relative p-2.5 text-charcoal-600 hover:text-primary-800 hover:bg-primary-50 rounded-full transition-all duration-300 group hover:scale-105" aria-label="Carrito">
                  <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  <AnimatePresence>
                    {itemCount > 0 && <motion.span initial={{
                    scale: 0
                  }} animate={{
                    scale: 1
                  }} exit={{
                    scale: 0
                  }} key={itemCount} className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-secondary-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white shadow-sm">
                        {itemCount > 9 ? '9+' : itemCount}
                      </motion.span>}
                  </AnimatePresence>
                </Link>

                <Link to="/cuenta" className="hidden sm:flex relative p-2.5 text-charcoal-600 hover:text-primary-800 hover:bg-primary-50 rounded-full transition-all duration-300 group hover:scale-105" aria-label="Cuenta">
                  <User className="h-5 w-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2.5 text-charcoal-600 hover:text-charcoal-900 hover:bg-gray-50 rounded-full transition-all duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
                <AnimatePresence mode="wait">
                  {isMenuOpen ? <motion.div key="close" initial={{
                  rotate: -90,
                  opacity: 0
                }} animate={{
                  rotate: 0,
                  opacity: 1
                }} exit={{
                  rotate: 90,
                  opacity: 0
                }} transition={{
                  duration: 0.2
                }}>
                      <X className="h-6 w-6" strokeWidth={2} />
                    </motion.div> : <motion.div key="menu" initial={{
                  rotate: 90,
                  opacity: 0
                }} animate={{
                  rotate: 0,
                  opacity: 1
                }} exit={{
                  rotate: -90,
                  opacity: 0
                }} transition={{
                  duration: 0.2
                }}>
                      <Menu className="h-6 w-6" strokeWidth={2} />
                    </motion.div>}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Search Bar Expandable */}
          <AnimatePresence>
            {isSearchOpen && <motion.div initial={{
            height: 0,
            opacity: 0
          }} animate={{
            height: 'auto',
            opacity: 1
          }} exit={{
            height: 0,
            opacity: 0
          }} transition={{
            duration: 0.3,
            ease: [0.04, 0.62, 0.23, 0.98]
          }} className="overflow-hidden">
                <div className="pt-4 pb-2">
                  <SearchBar onClose={() => setIsSearchOpen(false)} />
                </div>
              </motion.div>}
          </AnimatePresence>

          {/* Mobile Navigation Overlay */}
          <AnimatePresence>
            {isMenuOpen && <>
                <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="lg:hidden fixed inset-0 top-[70px] bg-charcoal-900/20 backdrop-blur-sm z-20" onClick={() => setIsMenuOpen(false)} />
                <motion.div initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }} className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-soft-2xl z-30 rounded-b-3xl overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto">
                  <div className="flex flex-col p-6 gap-2">
                    {navLinks.map((link, idx) => <motion.div key={link.path} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: idx * 0.03
                }}>
                        <Link to={link.path} className={`px-4 py-4 rounded-xl text-base font-bold flex items-center justify-between transition-all ${location.pathname === link.path ? 'bg-primary-50 text-primary-800' : 'text-charcoal-700 hover:bg-gray-50'}`} onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                          <ChevronRight className={`w-5 h-5 ${location.pathname === link.path ? 'text-primary-500' : 'text-gray-300'}`} />
                        </Link>
                      </motion.div>)}
                    <div className="h-px bg-gray-100 my-4" />
                    <motion.div initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: navLinks.length * 0.03
                }}>
                      <Link to="/cuenta" className="px-4 py-4 rounded-xl text-base font-bold text-charcoal-700 hover:bg-gray-50 flex items-center justify-between" onClick={() => setIsMenuOpen(false)}>
                        Mi Cuenta <User className="w-5 h-5 text-gray-400" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </>}
          </AnimatePresence>
        </div>
      </motion.header>
    </>;
}