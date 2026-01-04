import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, TrendingUp, Sparkles, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../../data/blog';
import { Button } from '../ui/Button';
interface FeaturedArticleProps {
  post: BlogPost;
}
export function FeaturedArticle({
  post
}: FeaturedArticleProps) {
  return <motion.article initial={{
    opacity: 0,
    scale: 0.98
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.8,
    ease: [0.04, 0.62, 0.23, 0.98]
  }} className="relative rounded-[2rem] overflow-hidden bg-[#2C3333] text-white shadow-2xl group min-h-[500px] lg:min-h-[600px] flex items-end">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60" whileHover={{
        scale: 1.05
      }} transition={{
        duration: 1.2,
        ease: 'easeOut'
      }} />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3333] via-[#2C3333]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3333]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full max-w-5xl">
        {/* Featured Badge */}
        <motion.div initial={{
        x: -20,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        delay: 0.3
      }} className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C9885] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-900/20 ring-2 ring-white/10">
            <Sparkles className="h-3.5 w-3.5" />
            Destacado del mes
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
            <TrendingUp className="h-3.5 w-3.5" />
            {post.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
          {post.title}
        </motion.h2>

        {/* Excerpt */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }} className="text-gray-200 text-lg md:text-xl mb-8 line-clamp-2 max-w-2xl leading-relaxed font-light">
          {post.excerpt}
        </motion.p>

        {/* Meta Info & CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/10 pt-8">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }} className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                <User className="h-4 w-4 text-[#7C9885]" />
              </div>
              <div>
                <p className="text-white font-bold leading-none mb-1">
                  {post.author}
                </p>
                <p className="text-xs text-gray-400">Veterinario Senior</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#7C9885]" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('es-ES', {
                month: 'long',
                day: 'numeric'
              })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#7C9885]" />
              <span>{post.readTime} de lectura</span>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.7
        }} className="flex items-center gap-4">
            <Link to={`/blog/${post.id}`}>
              <Button size="lg" className="bg-white text-[#2C3333] hover:bg-[#7C9885] hover:text-white border-none shadow-xl h-14 px-8 text-base font-bold rounded-xl group transition-all duration-300">
                <span>Leer artículo</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <button className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#2C3333] transition-all duration-300 group" aria-label="Ver video resumen">
              <PlayCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.article>;
}