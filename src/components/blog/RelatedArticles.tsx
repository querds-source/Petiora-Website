import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BlogPost, blogPosts } from '../../data/blog';
import { BlogCard } from '../BlogCard';
import { Button } from '../ui/Button';
interface RelatedArticlesProps {
  currentPostId: string;
  category: string;
}
export function RelatedArticles({
  currentPostId,
  category
}: RelatedArticlesProps) {
  // Smart recommendation logic (mocked)
  const related = blogPosts.filter(post => post.category === category && post.id !== currentPostId).slice(0, 3);
  if (related.length === 0) return null;
  return <section className="py-16 border-t border-gray-100 mt-16 bg-gradient-to-b from-white to-[#FAF7F2]/50 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 rounded-b-[3rem]">
      <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
        <div>
          <span className="inline-flex items-center gap-2 text-[#7C9885] font-bold text-sm uppercase tracking-wider mb-2">
            <Sparkles className="h-4 w-4" />
            Recomendado para ti
          </span>
          <h2 className="text-3xl font-bold text-[#2C3333]">
            Sigue leyendo sobre {category}
          </h2>
        </div>
        <Link to="/blog">
          <Button variant="outline" className="group">
            Ver todo el blog
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map((post, idx) => <div key={post.id} className="relative">
            {idx === 0 && <div className="absolute -top-3 left-4 z-10 bg-[#2C3333] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
                Mejor coincidencia
              </div>}
            <BlogCard post={post} index={idx} />
          </div>)}
      </div>
    </section>;
}