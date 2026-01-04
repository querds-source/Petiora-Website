import React from 'react';
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  petName?: string;
  linkedin?: string;
  email?: string;
}
export function TeamMember({
  name,
  role,
  image,
  bio,
  petName,
  linkedin,
  email
}: TeamMemberProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-100 transition-all duration-500">
      {/* Image Section */}
      <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/60 to-transparent"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
          {/* Pet Badge */}
          {petName && <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider w-fit">
              <Award className="w-3 h-3" />
              {petName}
            </div>}

          {/* Bio Text */}
          <p className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
            {bio}
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {linkedin && <a href={linkedin} className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 hover:text-white transition-all border border-white/20 hover:border-primary-500 hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>}
            {email && <a href={`mailto:${email}`} className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 hover:text-white transition-all border border-white/20 hover:border-primary-500 hover:scale-110" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 lg:p-8 bg-white relative z-10">
        <h3 className="text-2xl font-bold text-charcoal-900 mb-2 font-serif group-hover:text-primary-700 transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2 text-primary-600 font-bold text-sm uppercase tracking-wide">
          <GraduationCap className="w-4 h-4" />
          {role}
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
    </motion.div>;
}