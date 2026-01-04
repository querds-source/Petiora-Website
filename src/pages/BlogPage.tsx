import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Tag, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { BlogCard } from '../components/BlogCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { PageTransition } from '../components/common/PageTransition';
const categories = ['Todos', 'Nutrición', 'Salud', 'Comportamiento', 'Historias', 'Consejos'];
export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const featuredPost = blogPosts[0];
  return <PageTransition>
      <div className="bg-[#FAF9F6] min-h-screen pb-20">
        {/* Hero Section */}
        <section className="bg-charcoal-900 text-white pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6 bg-primary-500/20 text-primary-200 border-none">
                Petiora Academy
              </Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Nutrición y bienestar para tu mejor amigo.
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                Consejos veterinarios, guías de salud y las últimas novedades
                sobre alimentación natural, explicadas por expertos.
              </p>
            </div>
          </div>
        </section>

        <div className="container-custom -mt-12 relative z-20">
          {/* Featured Post Card */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-white rounded-[2rem] p-6 md:p-10 shadow-soft-xl border border-gray-100 mb-20 flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative group">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 backdrop-blur text-charcoal-900 font-bold shadow-sm">
                  Destacado
                </Badge>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <div className="flex items-center gap-3 text-sm text-charcoal-500 mb-4">
                <span className="font-bold text-primary-700 uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mb-4 leading-tight hover:text-primary-800 transition-colors cursor-pointer">
                <Link to={`/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-lg text-charcoal-600 mb-8 leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between w-full mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal-900">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-xs text-charcoal-500">
                      {featuredPost.author.role}
                    </p>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button variant="outline" className="rounded-full px-6">
                    Leer Artículo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
              {categories.map(cat => <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-charcoal-900 text-white shadow-md' : 'bg-white text-charcoal-600 hover:bg-gray-100 border border-gray-200'}`}>
                  {cat}
                </button>)}
            </div>
            <div className="relative w-full md:w-80">
              <Input placeholder="Buscar artículos..." className="pl-10 bg-white border-gray-200" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPosts.map((post, idx) => <BlogCard key={post.id} post={post} index={idx} />)}
          </div>

          {/* Newsletter Section */}
          <div className="bg-primary-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <Badge className="bg-primary-800 text-primary-100 border-none mb-6">
                Newsletter
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Únete a 50,000+ dueños informados
              </h2>
              <p className="text-primary-100 text-lg mb-8">
                Recibe guías de salud, consejos de entrenamiento y ofertas
                exclusivas directamente en tu bandeja de entrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input placeholder="Tu correo electrónico" className="bg-white/10 border-white/20 text-white placeholder:text-primary-200/50 focus:border-primary-400" />
                <Button className="bg-white text-primary-900 hover:bg-primary-50 font-bold px-8">
                  Suscribirse
                </Button>
              </div>
              <p className="text-xs text-primary-300 mt-4">
                Cero spam. Date de baja cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>;
}