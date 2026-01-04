import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features?: string[];
  badge?: string;
  color?: string;
  link?: string;
  index?: number;
}
export function ServiceCard({
  title,
  description,
  icon: Icon,
  features = [],
  badge,
  color = 'primary',
  link,
  index = 0
}: ServiceCardProps) {
  const colorClasses = {
    primary: {
      bg: 'bg-primary-50',
      text: 'text-primary-600',
      hover: 'group-hover:bg-primary-600',
      badge: 'bg-primary-100 text-primary-700 border-primary-200'
    },
    secondary: {
      bg: 'bg-secondary-50',
      text: 'text-secondary-600',
      hover: 'group-hover:bg-secondary-600',
      badge: 'bg-secondary-100 text-secondary-700 border-secondary-200'
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      hover: 'group-hover:bg-emerald-600',
      badge: 'bg-emerald-100 text-emerald-700 border-emerald-200'
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      hover: 'group-hover:bg-amber-600',
      badge: 'bg-amber-100 text-amber-700 border-amber-200'
    }
  };
  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;
  const CardContent = <motion.div initial={{
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
  }} className="h-full">
      <Card className="h-full p-8 lg:p-10 hover:shadow-soft-2xl transition-all duration-500 border-gray-100 group hover:-translate-y-1 relative overflow-hidden" interactive>
        {/* Decorative gradient blob */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:opacity-70 transition-opacity`} />

        <div className="relative z-10">
          {/* Badge */}
          {badge && <div className="mb-6">
              <Badge variant="outline" size="sm" className={`${colors.badge} font-bold`}>
                {badge}
              </Badge>
            </div>}

          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 ${colors.hover} transition-all duration-500 shadow-sm group-hover:shadow-soft-md group-hover:scale-110 group-hover:rotate-3`}>
            <Icon className={`w-8 h-8 ${colors.text} group-hover:text-white transition-colors duration-500`} />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-charcoal-900 mb-4 font-serif leading-tight group-hover:text-primary-700 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-charcoal-600 leading-relaxed text-base mb-6 font-light">
            {description}
          </p>

          {/* Features List */}
          {features.length > 0 && <div className="space-y-3 mb-6 pt-6 border-t border-gray-100">
              {features.map((feature, idx) => <div key={idx} className="flex items-start gap-3 text-sm text-charcoal-600">
                  <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <CheckCircle2 className={`w-3 h-3 ${colors.text}`} />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>)}
            </div>}

          {/* Link */}
          {link && <div className="mt-auto pt-6">
              <span className={`${colors.text} font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform`}>
                Más información
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>}
        </div>
      </Card>
    </motion.div>;
  if (link) {
    return <a href={link} className="block h-full">
        {CardContent}
      </a>;
  }
  return CardContent;
}