import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Calendar, Eye, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../data/blog';
import { Badge } from './ui/Badge';
interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}
export function BlogCard({
  post,
  index = 0,
  featured = false
}: BlogCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `/blog/${post.id}`
      });
    }
  };
  if (featured) {
    return <Link to={`/blog/${post.id}`} className="group flex flex-col lg:flex-row gap-8 bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-soft-lg hover:shadow-soft-2xl transition-all duration-500 hover:-translate-y-1">
        <div className="relative lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute top-6 left-6">
            <Badge variant="primary" size="md" className="shadow-soft-lg backdrop-blur-xl bg-white/95 font-bold">
              {post.category}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex flex-col flex-1 p-8 lg:p-10 lg:py-12">
          <div className="flex items-center gap-4 text-sm font-medium text-charcoal-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString('es-ES', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
              </span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min lectura</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{Math.floor(Math.random() * 5000 + 1000)} vistas</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 font-serif leading-tight group-hover:text-primary-700 transition-colors">
            {post.title}
          </h2>

          <p className="text-charcoal-600 text-lg leading-relaxed mb-8 line-clamp-3 font-light">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-8 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden ring-2 ring-white shadow-sm">
                <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random&size=128`} alt={post.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal-900">
                  {post.author}
                </p>
                <p className="text-xs text-charcoal-500 font-medium">
                  Nutricionista Veterinario
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={handleBookmark} className="p-2 rounded-xl hover:bg-gray-100 transition-colors" aria-label="Guardar">
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-primary-600 text-primary-600' : 'text-gray-400'}`} />
              </button>
              <button onClick={handleShare} className="p-2 rounded-xl hover:bg-gray-100 transition-colors" aria-label="Compartir">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
              <span className="text-primary-600 font-bold text-base flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Leer artículo <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </Link>;
  }
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: index * 0.1,
    duration: 0.6
  }}>
      <Link to={`/blog/${post.id}`} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-soft-sm hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-1">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute top-4 left-4">
            <Badge variant="primary" size="sm" className="shadow-soft-md backdrop-blur-xl bg-white/95 font-bold">
              {post.category}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick Actions on Hover */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={handleBookmark} className="p-2 rounded-xl bg-white/90 backdrop-blur-md hover:bg-white transition-colors shadow-sm" aria-label="Guardar">
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-primary-600 text-primary-600' : 'text-charcoal-700'}`} />
            </button>
            <button onClick={handleShare} className="p-2 rounded-xl bg-white/90 backdrop-blur-md hover:bg-white transition-colors shadow-sm" aria-label="Compartir">
              <Share2 className="w-4 h-4 text-charcoal-700" />
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6 lg:p-8">
          <div className="flex items-center gap-3 text-xs font-medium text-charcoal-500 mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {new Date(post.date).toLocaleDateString('es-ES', {
                month: 'short',
                day: 'numeric'
              })}
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime} min</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>{Math.floor(Math.random() * 2000 + 500)}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-charcoal-900 mb-3 font-serif leading-tight group-hover:text-primary-700 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-charcoal-600 text-sm leading-relaxed mb-6 line-clamp-3 font-light flex-grow">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden ring-2 ring-white shadow-sm">
                <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random&size=96`} alt={post.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal-900">
                  {post.author}
                </p>
                <p className="text-[10px] text-charcoal-500 font-medium">
                  Experto Veterinario
                </p>
              </div>
            </div>

            <span className="text-primary-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Leer <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Engagement Stats */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-50 text-xs text-charcoal-400">
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{Math.floor(Math.random() * 50 + 5)} comentarios</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>;
}