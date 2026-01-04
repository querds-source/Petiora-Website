import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Shield, BarChart3, Target, Settings, CheckCircle2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}
export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);
  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };
  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };
  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };
  const cookieTypes = [{
    id: 'necessary' as keyof CookiePreferences,
    name: 'Cookies Necesarias',
    description: 'Esenciales para el funcionamiento básico del sitio web. No se pueden desactivar.',
    icon: Shield,
    required: true,
    examples: 'Sesión, carrito de compra, seguridad'
  }, {
    id: 'analytics' as keyof CookiePreferences,
    name: 'Cookies Analíticas',
    description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.',
    icon: BarChart3,
    required: false,
    examples: 'Google Analytics, estadísticas de uso'
  }, {
    id: 'marketing' as keyof CookiePreferences,
    name: 'Cookies de Marketing',
    description: 'Utilizadas para mostrar anuncios relevantes y medir la efectividad de campañas.',
    icon: Target,
    required: false,
    examples: 'Facebook Pixel, Google Ads'
  }, {
    id: 'preferences' as keyof CookiePreferences,
    name: 'Cookies de Preferencias',
    description: 'Permiten recordar tus preferencias y personalizar tu experiencia.',
    icon: Settings,
    required: false,
    examples: 'Idioma, tema, configuración'
  }];
  if (!isVisible) return null;
  return <AnimatePresence>
      <motion.div initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: 100,
      opacity: 0
    }} transition={{
      type: 'spring',
      stiffness: 300,
      damping: 30
    }} className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-soft-2xl border border-gray-100 overflow-hidden backdrop-blur-xl">
            {!showPreferences ?
          // Simple View
          <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Icon & Content */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
                      <Cookie className="w-7 h-7 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-charcoal-900 mb-2 font-serif">
                        Respetamos tu privacidad
                      </h3>
                      <p className="text-sm text-charcoal-600 leading-relaxed mb-3">
                        Utilizamos cookies para mejorar tu experiencia, analizar
                        el tráfico y personalizar el contenido. Puedes aceptar
                        todas, rechazar las opcionales o configurar tus
                        preferencias.
                      </p>
                      <Link to="/cookies" className="text-sm text-primary-600 hover:text-primary-700 font-bold inline-flex items-center gap-1 transition-colors">
                        <Info className="w-4 h-4" />
                        Más información sobre cookies
                      </Link>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <Button variant="ghost" size="md" onClick={() => setShowPreferences(true)} className="rounded-xl font-bold">
                      <Settings className="w-4 h-4 mr-2" />
                      Configurar
                    </Button>
                    <Button variant="outline" size="md" onClick={handleRejectAll} className="rounded-xl font-bold">
                      Rechazar opcionales
                    </Button>
                    <Button variant="primary" size="md" onClick={handleAcceptAll} className="rounded-xl font-bold shadow-soft-lg">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Aceptar todas
                    </Button>
                  </div>
                </div>
              </div> :
          // Detailed Preferences View
          <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal-900 font-serif mb-2">
                      Configuración de Cookies
                    </h3>
                    <p className="text-sm text-charcoal-600">
                      Personaliza qué cookies quieres permitir
                    </p>
                  </div>
                  <button onClick={() => setShowPreferences(false)} className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-charcoal-400 hover:text-charcoal-600 transition-colors" aria-label="Cerrar configuración">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-8">
                  {cookieTypes.map(type => <motion.label key={type.id} initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${preferences[type.id] || type.required ? 'border-primary-200 bg-primary-50/30' : 'border-gray-100 bg-gray-50 hover:border-gray-200'}`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${preferences[type.id] || type.required ? 'bg-primary-600 text-white' : 'bg-white text-charcoal-400'}`}>
                        <type.icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-base font-bold text-charcoal-900">
                            {type.name}
                          </span>
                          {type.required && <Badge variant="outline" size="sm" className="font-bold">
                              Requeridas
                            </Badge>}
                        </div>
                        <p className="text-sm text-charcoal-600 leading-relaxed mb-2">
                          {type.description}
                        </p>
                        <p className="text-xs text-charcoal-500 font-medium">
                          <span className="font-bold">Ejemplos:</span>{' '}
                          {type.examples}
                        </p>
                      </div>

                      <div className="flex items-center shrink-0">
                        <div className={`relative w-14 h-8 rounded-full transition-colors ${preferences[type.id] || type.required ? 'bg-primary-600' : 'bg-gray-300'}`}>
                          <motion.div animate={{
                      x: preferences[type.id] || type.required ? 24 : 2
                    }} transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }} className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm" />
                        </div>
                        <input type="checkbox" checked={preferences[type.id]} onChange={e => !type.required && setPreferences({
                    ...preferences,
                    [type.id]: e.target.checked
                  })} disabled={type.required} className="sr-only" />
                      </div>
                    </motion.label>)}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
                  <p className="text-xs text-charcoal-500 text-center sm:text-left">
                    Puedes cambiar tus preferencias en cualquier momento desde
                    la{' '}
                    <Link to="/cookies" className="text-primary-600 hover:underline font-bold">
                      política de cookies
                    </Link>
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="md" onClick={handleRejectAll} className="rounded-xl font-bold">
                      Rechazar opcionales
                    </Button>
                    <Button variant="primary" size="md" onClick={handleSavePreferences} className="rounded-xl font-bold shadow-soft-lg">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Guardar preferencias
                    </Button>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>;
}