import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, AlertTriangle, ServerCrash, FileWarning, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from './Button';
interface ErrorStateProps {
  type?: 'network' | 'notFound' | 'serverError' | 'validation' | 'default';
  title?: string;
  message?: string;
  solutions?: string[];
  actionLabel?: string;
  onRetry?: () => void;
  className?: string;
}
export function ErrorState({
  type = 'default',
  title,
  message,
  solutions = [],
  actionLabel = 'Intentar de nuevo',
  onRetry,
  className = ''
}: ErrorStateProps) {
  const getConfig = () => {
    switch (type) {
      case 'network':
        return {
          icon: WifiOff,
          defaultTitle: 'Sin conexión',
          defaultMessage: 'Parece que has perdido la conexión a internet. Por favor, verifica tu red.',
          color: 'text-amber-600',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-100'
        };
      case 'notFound':
        return {
          icon: FileWarning,
          defaultTitle: 'No encontrado',
          defaultMessage: 'Lo sentimos, no pudimos encontrar lo que estabas buscando.',
          color: 'text-charcoal-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200'
        };
      case 'serverError':
        return {
          icon: ServerCrash,
          defaultTitle: 'Error del servidor',
          defaultMessage: 'Algo salió mal de nuestro lado. Estamos trabajando para solucionarlo.',
          color: 'text-rose-600',
          bgColor: 'bg-rose-50',
          borderColor: 'border-rose-100'
        };
      case 'validation':
        return {
          icon: AlertTriangle,
          defaultTitle: 'Error de validación',
          defaultMessage: 'Por favor, revisa los datos ingresados e inténtalo de nuevo.',
          color: 'text-orange-600',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-100'
        };
      default:
        return {
          icon: AlertTriangle,
          defaultTitle: 'Algo salió mal',
          defaultMessage: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.',
          color: 'text-charcoal-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200'
        };
    }
  };
  const config = getConfig();
  const Icon = config.icon;
  const displayTitle = title || config.defaultTitle;
  const displayMessage = message || config.defaultMessage;
  return <motion.div initial={{
    opacity: 0,
    scale: 0.95
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1]
  }} className={`flex flex-col items-center justify-center text-center p-8 rounded-2xl border ${config.bgColor} ${config.borderColor} ${className}`}>
      <div className={`w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 ${config.color}`}>
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>

      <h3 className="text-lg font-bold text-charcoal-900 mb-2">
        {displayTitle}
      </h3>

      <p className="text-charcoal-600 max-w-md mb-6 text-sm leading-relaxed">
        {displayMessage}
      </p>

      {solutions.length > 0 && <div className="w-full max-w-sm bg-white/60 rounded-xl p-4 mb-6 text-left border border-white/50">
          <p className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
            Posibles soluciones:
          </p>
          <ul className="space-y-2">
            {solutions.map((solution, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-charcoal-700">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${config.color.replace('text-', 'bg-')}`} />
                <span>{solution}</span>
              </li>)}
          </ul>
        </div>}

      {onRetry && <Button variant="white" onClick={onRetry} leftIcon={<RefreshCw className="w-4 h-4" />} className="shadow-sm hover:shadow-md">
          {actionLabel}
        </Button>}
    </motion.div>;
}