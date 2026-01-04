import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Leaf, HeartPulse } from 'lucide-react';
import { Tooltip } from './Tooltip';
type CertificationType = 'veterinary' | 'organic' | 'quality' | 'health';
interface CertificationBadgeProps {
  type: CertificationType;
  label?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
const config = {
  veterinary: {
    icon: ShieldCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    defaultLabel: 'Veterinarios Colegiados',
    description: 'Formulado y revisado por expertos en nutrición clínica.'
  },
  organic: {
    icon: Leaf,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    defaultLabel: '100% Natural',
    description: 'Sin aditivos artificiales, conservantes ni subproductos.'
  },
  quality: {
    icon: Award,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    defaultLabel: 'Grado Humano',
    description: 'Ingredientes aptos para consumo humano cocinados en cocina propia.'
  },
  health: {
    icon: HeartPulse,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    defaultLabel: 'Salud Garantizada',
    description: 'Resultados visibles en digestión, piel y vitalidad en 30 días.'
  }
};
export function CertificationBadge({
  type,
  label,
  showLabel = true,
  size = 'md',
  className = ''
}: CertificationBadgeProps) {
  const {
    icon: Icon,
    color,
    bg,
    border,
    defaultLabel,
    description
  } = config[type];
  const displayLabel = label || defaultLabel;
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  };
  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };
  return <Tooltip content={<div className="max-w-[200px] text-center">
          <p className="font-bold mb-1">{displayLabel}</p>
          <p className="text-xs opacity-90">{description}</p>
        </div>}>
      <motion.div whileHover={{
      scale: 1.05,
      y: -2
    }} className={`inline-flex items-center gap-2 rounded-full border ${bg} ${border} ${sizeClasses[size]} ${className} cursor-help transition-shadow hover:shadow-soft-md`}>
        <div className={`rounded-full bg-white p-1 shadow-sm ${color}`}>
          <Icon className={iconSizes[size]} />
        </div>
        {showLabel && <span className={`font-bold text-charcoal-800 ${size === 'sm' ? 'text-[10px]' : 'text-xs'} pr-2`}>
            {displayLabel}
          </span>}
      </motion.div>
    </Tooltip>;
}