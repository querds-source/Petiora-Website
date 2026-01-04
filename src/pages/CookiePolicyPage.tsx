import React, { useState } from 'react';
import { Cookie, Settings, Shield, BarChart, Megaphone, Check, Info, ToggleRight, ToggleLeft, Chrome, Globe, Monitor, Save, X, Clock, Server, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
export function CookiePolicyPage() {
  const [preferences, setPreferences] = useState({
    technical: true,
    analytics: false,
    marketing: false
  });
  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'technical') return; // Always true
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const cookieDetails = {
    technical: [{
      name: 'PHPSESSID',
      provider: 'Petiora',
      duration: 'Sesión',
      purpose: 'Identificador de sesión PHP.'
    }, {
      name: 'cookie_consent',
      provider: 'Petiora',
      duration: '1 año',
      purpose: 'Guarda tus preferencias de cookies.'
    }, {
      name: 'cart_id',
      provider: 'Petiora',
      duration: '30 días',
      purpose: 'Mantiene los productos en tu carrito.'
    }, {
      name: 'auth_token',
      provider: 'Petiora',
      duration: 'Sesión',
      purpose: 'Mantiene tu sesión de usuario activa.'
    }],
    analytics: [{
      name: '_ga',
      provider: 'Google Analytics',
      duration: '2 años',
      purpose: 'Distingue a los usuarios únicos.'
    }, {
      name: '_gid',
      provider: 'Google Analytics',
      duration: '24 horas',
      purpose: 'Distingue a los usuarios.'
    }, {
      name: '_gat',
      provider: 'Google Analytics',
      duration: '1 minuto',
      purpose: 'Limita el porcentaje de solicitudes.'
    }],
    marketing: [{
      name: '_fbp',
      provider: 'Facebook',
      duration: '3 meses',
      purpose: 'Publicidad y retargeting en Facebook.'
    }, {
      name: 'ads/ga-audiences',
      provider: 'Google',
      duration: 'Sesión',
      purpose: 'Retargeting de Google Ads.'
    }]
  };
  const cookieTypes = [{
    id: 'technical',
    title: 'Cookies Técnicas (Necesarias)',
    description: 'Son esenciales para que la web funcione correctamente. Permiten la navegación, el acceso a áreas seguras, la gestión del carrito de compra y la realización de pedidos. No se pueden desactivar.',
    details: cookieDetails.technical,
    required: true,
    icon: Shield,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    borderColor: 'border-emerald-100'
  }, {
    id: 'analytics',
    title: 'Cookies Analíticas',
    description: 'Nos permiten contar las visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio. Toda la información que recogen estas cookies es agregada y, por lo tanto, anónima.',
    details: cookieDetails.analytics,
    required: false,
    icon: BarChart,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-100'
  }, {
    id: 'marketing',
    title: 'Cookies Publicitarias',
    description: 'Pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Se utilizan para crear un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios.',
    details: cookieDetails.marketing,
    required: false,
    icon: Megaphone,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    borderColor: 'border-purple-100'
  }];
  return <main className="min-h-screen bg-[#FAF7F2] pt-24 sm:pt-32 pb-20 font-sans">
      <div className="container-custom max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-primary-700 text-sm font-bold mb-6">
            <Cookie className="w-4 h-4" />
            Transparencia Digital
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal-800 mb-6 font-serif tracking-tight">
            Política de Cookies
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Utilizamos cookies para mejorar tu experiencia, no para invadir tu
            privacidad. Aquí te explicamos qué son, cuáles usamos y cómo puedes
            controlarlas.
          </p>
        </div>

        <div className="space-y-12">
          {/* Intro Card */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="hidden md:flex w-20 h-20 rounded-3xl bg-amber-50 items-center justify-center text-amber-600 flex-shrink-0 shadow-sm border border-amber-100">
                <Info className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-charcoal-800 mb-4 font-serif">
                  ¿Qué son las cookies?
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Una cookie es un pequeño fichero de texto que un sitio web
                  guarda en tu ordenador o dispositivo móvil cuando lo visitas.
                  Las cookies permiten que la web recuerde tus acciones y
                  preferencias (como inicio de sesión, idioma, tamaño de letra y
                  otras preferencias de visualización) durante un período de
                  tiempo, para que no tengas que volver a configurarlas cada vez
                  que regresas al sitio o navegas de una página a otra.
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-600 border border-gray-100 flex gap-4">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Nota de Seguridad:</strong> Las cookies no son
                    virus. Son archivos de texto plano. No pueden ser ejecutados
                    ni pueden auto-ejecutarse. No pueden replicarse ni
                    extenderse a otras redes para ejecutarse y replicarse de
                    nuevo.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Panel */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative">
            <div className="bg-primary-50/50 p-8 sm:p-10 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-charcoal-800 font-serif flex items-center gap-3">
                    <Settings className="w-6 h-6 text-primary-600" />
                    Panel de Configuración
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm max-w-xl">
                    Aquí puedes activar o desactivar las diferentes categorías
                    de cookies. Los cambios se guardarán automáticamente para
                    futuras visitas.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-8">
              {cookieTypes.map(type => <div key={type.id} className={`
                    group relative p-6 sm:p-8 rounded-3xl border-2 transition-all duration-300
                    ${preferences[type.id as keyof typeof preferences] ? `bg-white ${type.borderColor} shadow-sm` : 'bg-gray-50 border-transparent opacity-80 hover:opacity-100'}
                  `}>
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                    <div className={`w-16 h-16 rounded-2xl ${type.bg} flex items-center justify-center ${type.color} flex-shrink-0 shadow-sm`}>
                      <type.icon className="w-8 h-8" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-charcoal-800">
                          {type.title}
                        </h3>
                        <button onClick={() => togglePreference(type.id as keyof typeof preferences)} disabled={type.required} className="focus:outline-none transition-transform active:scale-95" aria-label={`Alternar ${type.title}`}>
                          {type.required ? <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                              <Check className="w-4 h-4" />
                              Siempre Activas
                            </div> : preferences[type.id as keyof typeof preferences] ? <ToggleRight className="w-14 h-14 text-primary-600 drop-shadow-sm" /> : <ToggleLeft className="w-14 h-14 text-gray-300 hover:text-gray-400 transition-colors" />}
                        </button>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {type.description}
                      </p>

                      {/* Detailed Table */}
                      <div className="overflow-hidden rounded-xl border border-gray-200">
                        <table className="min-w-full text-sm text-left">
                          <thead className="bg-gray-50 text-gray-500 font-medium uppercase tracking-wider text-xs">
                            <tr>
                              <th className="px-4 py-3">Cookie</th>
                              <th className="px-4 py-3">Proveedor</th>
                              <th className="px-4 py-3">Duración</th>
                              <th className="px-4 py-3">Finalidad</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 bg-white">
                            {type.details.map((cookie, idx) => <tr key={idx} className="hover:bg-gray-50/50">
                                <td className="px-4 py-3 font-mono text-xs font-bold text-charcoal-700">
                                  {cookie.name}
                                </td>
                                <td className="px-4 py-3 text-gray-600">
                                  {cookie.provider}
                                </td>
                                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                                  {cookie.duration}
                                </td>
                                <td className="px-4 py-3 text-gray-600">
                                  {cookie.purpose}
                                </td>
                              </tr>)}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>

            <div className="p-6 bg-white border-t border-gray-100 sticky bottom-0 z-10 flex justify-end gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
              <Button variant="outline" onClick={() => setPreferences({
              technical: true,
              analytics: false,
              marketing: false
            })} className="hidden sm:flex border-gray-200 hover:bg-gray-50 text-charcoal-600">
                Rechazar Opcionales
              </Button>
              <Button variant="primary" size="lg" className="shadow-lg shadow-primary-900/20 px-8" onClick={() => console.log('Saved:', preferences)}>
                <Save className="w-4 h-4 mr-2" />
                Guardar Mis Preferencias
              </Button>
            </div>
          </div>

          {/* Browser Instructions */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-charcoal-800 mb-6 font-serif">
              Gestión desde el navegador
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              También puedes permitir, bloquear o eliminar las cookies
              instaladas en tu equipo mediante la configuración de las opciones
              del navegador instalado en tu ordenador.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{
              name: 'Google Chrome',
              icon: Chrome,
              url: 'https://support.google.com/chrome/answer/95647'
            }, {
              name: 'Safari',
              icon: Globe,
              url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac'
            }, {
              name: 'Mozilla Firefox',
              icon: Monitor,
              url: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias'
            }, {
              name: 'Microsoft Edge',
              icon: Monitor,
              url: 'https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'
            }].map(browser => <a key={browser.name} href={browser.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 rounded-2xl border-2 border-gray-100 hover:border-primary-500 hover:bg-primary-50 transition-all font-bold text-charcoal-700 group hover:-translate-y-1 hover:shadow-md">
                  <browser.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  {browser.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary-400 ml-auto" />
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </main>;
}
// Helper icons needed
import { ShieldCheck } from 'lucide-react';