import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag, User } from 'lucide-react';
import { BlogPost } from '../../data/blog';
import { Badge } from '../ui/Badge';
interface RichContentCardProps {
  post: BlogPost;
  featured?: boolean;
}
export function RichContentCard({
  post,
  featured = false
}: RichContentCardProps) {
  return <Link to={`/blog/${post.id}`} className="group block h-full">
      <div className={`
        relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1
        ${featured ? 'grid md:grid-cols-2 gap-0' : 'flex flex-col'}
      `}>
        {/* Image Container */}
        <div className={`relative overflow-hidden ${featured ? 'h-full min-h-[300px]' : 'aspect-[16/10]'}`}>
          <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <Badge variant="primary" className="shadow-lg backdrop-blur-md bg-white/90 text-primary-800 border-none font-bold">
              {post.category}
            </Badge>
            {featured && <Badge variant="secondary" className="shadow-lg backdrop-blur-md bg-amber-500/90 text-white border-none font-bold">
                Destacado
              </Badge>}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col p-8 relative">
          <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min lectura
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author.name}
            </div>
          </div>

          <h3 className={`font-bold text-charcoal-900 font-serif mb-4 group-hover:text-primary-700 transition-colors ${featured ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
            {post.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center text-primary-600 font-bold text-sm group/btn">
            Leer artículo completo
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>;
}