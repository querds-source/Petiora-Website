import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Printer, User, Tag, ArrowRight, List, MessageSquare, Bookmark } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { Button } from '../components/ui/Button';
import { AuthorCard } from '../components/blog/AuthorCard';
import { RelatedArticles } from '../components/blog/RelatedArticles';
export function BlogDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const post = blogPosts.find(p => p.id === id);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
        <div className="text-center p-12 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 max-w-md mx-4">
          <h2 className="text-2xl font-bold text-[#2C3333] mb-4">
            Artículo no encontrado
          </h2>
          <p className="text-gray-500 mb-8">
            El artículo que buscas no existe o ha sido movido.
          </p>
          <Link to="/blog">
            <Button className="bg-[#7C9885] hover:bg-[#6a8573]">
              Volver al Blog
            </Button>
          </Link>
        </div>
      </div>;
  }
  return <div className="bg-white min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#7C9885] origin-left z-50" style={{
      scaleX
    }} />

      {/* Hero Header */}
      <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <motion.img initial={{
        scale: 1.1
      }} animate={{
        scale: 1
      }} transition={{
        duration: 1.5
      }} src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3333] via-[#2C3333]/50 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3333]/80 via-transparent to-transparent" />

        <div className="absolute inset-0 container-custom flex flex-col justify-end pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto w-full">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors w-fit group font-medium backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/10">
              <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver al blog
            </Link>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#7C9885] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-900/20 ring-2 ring-white/10">
                {post.category}
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight font-serif">
              {post.title}
            </motion.h1>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.4
          }} className="flex flex-wrap items-center gap-6 text-white/90 font-medium text-sm sm:text-base border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs text-white/60 uppercase tracking-wider">
                    Autor
                  </span>
                  <span className="font-bold">{post.author}</span>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs text-white/60 uppercase tracking-wider">
                    Publicado
                  </span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  </time>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs text-white/60 uppercase tracking-wider">
                    Lectura
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <div className="prose prose-lg prose-emerald max-w-none mb-16">
              <p className="lead text-2xl sm:text-3xl text-[#2C3333] font-serif italic mb-12 leading-relaxed opacity-80 border-l-4 border-[#7C9885] pl-6 py-2">
                {post.excerpt}
              </p>

              <div className="text-gray-700 leading-relaxed space-y-8 text-lg md:text-xl font-light first-letter:text-5xl first-letter:font-bold first-letter:text-[#2C3333] first-letter:mr-3 first-letter:float-left">
                {post.content.split('\n\n').map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
              </div>
            </div>

            {/* Engagement Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between py-8 px-8 bg-[#FAF7F2] rounded-2xl mb-16 gap-6 border border-[#7C9885]/10">
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#2C3333] text-sm uppercase tracking-wide">
                  Compartir artículo:
                </span>
                <div className="flex gap-2">
                  {[Facebook, Twitter, Linkedin].map((Icon, idx) => <button key={idx} className="p-2.5 rounded-full bg-white hover:bg-[#7C9885] hover:text-white transition-all duration-300 text-gray-600 shadow-sm hover:shadow-md border border-gray-100">
                      <Icon className="h-4 w-4" />
                    </button>)}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-[#7C9885] hover:border-[#7C9885] transition-all text-sm font-bold shadow-sm">
                  <Bookmark className="h-4 w-4" />
                  Guardar
                </button>
                <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-[#2C3333] hover:border-[#2C3333] transition-all text-sm font-bold shadow-sm">
                  <Printer className="h-4 w-4" />
                  Imprimir
                </button>
              </div>
            </div>

            <AuthorCard authorName={post.author} />

            <RelatedArticles currentPostId={post.id} category={post.category} />

            {/* Comments Placeholder */}
            <div className="mt-16 pt-16 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#2C3333] mb-8 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-[#7C9885]" />
                Comentarios (0)
              </h3>
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 border-dashed">
                <p className="text-gray-500 mb-4">
                  Sé el primero en comentar este artículo
                </p>
                <Button variant="outline">Iniciar sesión para comentar</Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-10">
            {/* Table of Contents (Mock) */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm sticky top-32">
              <h3 className="text-lg font-bold text-[#2C3333] mb-6 flex items-center gap-2">
                <List className="h-5 w-5 text-[#7C9885]" />
                En este artículo
              </h3>
              <nav className="space-y-1">
                {['Introducción', 'Puntos Clave', 'Análisis Detallado', 'Conclusión', 'Referencias'].map((item, idx) => <a key={idx} href="#" className={`block py-2 px-4 rounded-lg text-sm transition-colors ${idx === 0 ? 'bg-[#EBF2EE] text-[#7C9885] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2C3333]'}`}>
                    {item}
                  </a>)}
              </nav>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-[#2C3333] p-10 rounded-[2rem] text-white shadow-xl shadow-gray-200 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C9885] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#7C9885] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-900/20 ring-4 ring-white/5">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  Suscríbete al Newsletter
                </h3>
                <p className="text-gray-300 mb-8 text-base leading-relaxed font-light">
                  Recibe los mejores consejos veterinarios y guías de cuidado
                  para tu mascota cada semana.
                </p>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <input type="email" placeholder="Tu email" className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#7C9885] focus:border-transparent outline-none transition-all backdrop-blur-sm" />
                  <Button className="w-full bg-[#7C9885] hover:bg-[#6a8573] shadow-lg shadow-emerald-900/20 h-14 text-base font-bold border-none">
                    Suscribirme Gratis
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-6 text-center font-medium">
                  Únete a más de 15,000 suscriptores felices.
                </p>
              </div>
            </div>

            {/* Popular Categories */}
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#2C3333] mb-8">
                Categorías Populares
              </h3>
              <div className="space-y-3">
                {[{
                name: 'Nutrición',
                count: 12
              }, {
                name: 'Salud',
                count: 8
              }, {
                name: 'Comportamiento',
                count: 5
              }, {
                name: 'Cuidado',
                count: 7
              }].map((cat, idx) => <Link key={idx} to={`/blog?category=${cat.name.toLowerCase()}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF7F2] transition-colors group border border-transparent hover:border-gray-100">
                    <span className="text-gray-700 font-medium group-hover:text-[#7C9885] transition-colors">
                      {cat.name}
                    </span>
                    <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2.5 py-1 rounded-lg group-hover:bg-[#7C9885] group-hover:text-white transition-colors min-w-[2rem] text-center">
                      {cat.count}
                    </span>
                  </Link>)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>;
}