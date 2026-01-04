import React from 'react';
import { Mail, MessageCircle, Clock, Send, Headphones, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/company';
export function ContactMethods() {
  const contactMethods = [{
    icon: Mail,
    title: 'Email Profesional',
    subtitle: 'Consultas generales y soporte',
    value: contactInfo.email.display,
    href: contactInfo.email.value,
    detail: contactInfo.email.responseTime,
    color: 'blue',
    badge: 'Respuesta en 24h'
  }, {
    icon: MessageCircle,
    title: 'WhatsApp Business',
    subtitle: 'Atención inmediata',
    value: contactInfo.whatsapp.display,
    href: contactInfo.whatsapp.value,
    detail: 'Lun-Vie: 9:00 - 18:00',
    color: 'green',
    badge: 'Respuesta rápida'
  }, {
    icon: Headphones,
    title: 'Soporte Técnico',
    subtitle: 'Asesoramiento especializado',
    value: 'soporte@petiora.com',
    href: 'mailto:soporte@petiora.com',
    detail: 'Equipo veterinario disponible',
    color: 'purple',
    badge: 'Expertos'
  }, {
    icon: Send,
    title: 'Consultas Comerciales',
    subtitle: 'Pedidos y presupuestos',
    value: 'ventas@petiora.com',
    href: 'mailto:ventas@petiora.com',
    detail: 'Respuesta en 12h laborables',
    color: 'emerald',
    badge: 'Prioritario'
  }];
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      hover: 'group-hover:bg-blue-600',
      ring: 'ring-blue-100'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      hover: 'group-hover:bg-green-600',
      ring: 'ring-green-100'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      hover: 'group-hover:bg-purple-600',
      ring: 'ring-purple-100'
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      hover: 'group-hover:bg-emerald-600',
      ring: 'ring-emerald-100'
    }
  };
  return <div className="space-y-8 mb-12">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EBF2EE] text-[#7C9885] text-sm font-bold mb-4">
          <Globe className="h-4 w-4" />
          Canales de Contacto Profesional
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3333] mb-4">
          Estamos aquí para ayudarte
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Nuestro equipo de expertos está disponible para resolver tus dudas
          sobre nutrición, productos y pedidos. Elige el canal que mejor se
          adapte a tus necesidades.
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods.map((method, index) => {
        const colors = colorClasses[method.color as keyof typeof colorClasses];
        const Icon = method.icon;
        return <motion.a key={index} href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -4,
          scale: 1.02
        }} className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group relative overflow-hidden">
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${colors.bg} to-transparent`} />

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <motion.div whileHover={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} className={`p-3 ${colors.bg} ${colors.text} rounded-xl ${colors.hover} group-hover:text-white transition-all duration-300 shadow-sm ring-2 ${colors.ring}`}>
                  <Icon className="h-6 w-6" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-[#2C3333] text-lg group-hover:text-[#7C9885] transition-colors">
                      {method.title}
                    </h3>
                    <span className={`text-[10px] font-bold ${colors.text} ${colors.bg} px-2 py-1 rounded-full uppercase tracking-wider whitespace-nowrap`}>
                      {method.badge}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {method.subtitle}
                  </p>

                  <p className={`${colors.text} font-bold text-base mb-2 group-hover:underline`}>
                    {method.value}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="font-medium">{method.detail}</span>
                  </div>
                </div>
              </div>

              {/* Hover Arrow Indicator */}
              <motion.div initial={{
            opacity: 0,
            x: -10
          }} whileHover={{
            opacity: 1,
            x: 0
          }} className="absolute bottom-4 right-4 text-gray-400 group-hover:text-[#7C9885]">
                <Send className="h-5 w-5" />
              </motion.div>
            </motion.a>;
      })}
      </div>

      {/* Additional Info Section */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="bg-gradient-to-br from-[#EBF2EE] to-white rounded-2xl p-8 border-2 border-[#7C9885]/20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <Clock className="h-8 w-8 text-[#7C9885]" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#2C3333] mb-2">
              Horario de Atención
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-bold text-gray-900">Lunes a Viernes</p>
                <p className="text-gray-600">9:00 - 18:00 (CET)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Sábados</p>
                <p className="text-gray-600">10:00 - 14:00 (CET)</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#7C9885]/30 text-sm font-bold text-[#7C9885]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C9885] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7C9885]"></span>
            </span>
            Disponible Ahora
          </div>
        </div>
      </motion.div>
    </div>;
}