import React, { useState } from 'react';
import { User, Award, Linkedin, Twitter, Mail, ExternalLink, BookOpen, Users, CheckCircle, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
interface AuthorCardProps {
  authorName: string;
  role?: string;
  bio?: string;
  image?: string;
  articlesCount?: number;
  followers?: string;
  expertise?: string[];
}
export function AuthorCard({
  authorName,
  role = 'Veterinario Especialista',
  bio,
  image,
  articlesCount = 12,
  followers = '2.5k',
  expertise = ['Nutrición Clínica', 'Dermatología', 'Medicina Interna']
}: AuthorCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  return <motion.article initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EBF2EE] to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8">
        {/* Avatar Column */}
        <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
          <div className="relative group">
            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-100 border-4 border-white shadow-xl ring-1 ring-gray-100">
              {image ? <img src={image} alt={authorName} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="w-full h-full flex items-center justify-center bg-[#EBF2EE] text-[#7C9885]">
                  <User className="h-12 w-12" />
                </div>}
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white p-1.5 rounded-full shadow-md">
              <div className="bg-[#7C9885] p-1.5 rounded-full">
                <Award className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          <Button onClick={() => setIsFollowing(!isFollowing)} variant={isFollowing ? 'outline' : 'primary'} className={`w-full md:w-32 h-10 text-sm ${isFollowing ? 'border-[#7C9885] text-[#7C9885] hover:bg-red-50 hover:text-red-500 hover:border-red-200' : ''}`}>
            {isFollowing ? <span className="flex items-center gap-2">Siguiendo</span> : <span className="flex items-center gap-2">
                <Plus className="h-3 w-3" /> Seguir
              </span>}
          </Button>
        </div>

        {/* Content Column */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-[#2C3333] flex items-center justify-center md:justify-start gap-2">
                {authorName}
                <CheckCircle className="h-5 w-5 text-blue-500 fill-blue-50" />
              </h3>
              <p className="text-[#7C9885] font-medium">{role}</p>
            </div>

            <div className="flex items-center justify-center gap-6 bg-gray-50 px-6 py-3 rounded-xl border border-gray-100">
              <div className="text-center">
                <span className="block text-lg font-bold text-[#2C3333]">
                  {articlesCount}
                </span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Artículos
                </span>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <span className="block text-lg font-bold text-[#2C3333]">
                  {followers}
                </span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Lectores
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {bio || `Veterinario apasionado con más de una década de experiencia en medicina preventiva y nutrición clínica. Mi misión es empoderar a los dueños de mascotas con conocimiento basado en evidencia para asegurar que sus compañeros peludos vivan vidas largas y saludables.`}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Áreas de Experiencia
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {expertise.map((tag, idx) => <span key={idx} className="px-3 py-1 bg-[#EBF2EE] text-[#7C9885] text-xs font-bold rounded-lg border border-[#7C9885]/10">
                  {tag}
                </span>)}
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 pt-6 border-t border-gray-100">
            <span className="text-sm font-medium text-gray-500 mr-2">
              Conecta conmigo:
            </span>
            {[{
            icon: Linkedin,
            label: 'LinkedIn',
            href: '#'
          }, {
            icon: Twitter,
            label: 'Twitter',
            href: '#'
          }, {
            icon: Mail,
            label: 'Email',
            href: '#'
          }].map((social, idx) => <a key={idx} href={social.href} className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-[#2C3333] hover:text-white transition-all duration-300" aria-label={social.label}>
                <social.icon className="h-4 w-4" />
              </a>)}
          </div>
        </div>
      </div>
    </motion.article>;
}