import React from 'react';
import { Shield, Lock, Eye, FileText, Server, Globe, Users, Mail, Clock, AlertCircle, CheckCircle2, PawPrint, Database, UserCheck, Trash2, FileSearch, Ban, ArrowRight, Share2, Fingerprint, Smartphone, Network, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function PrivacyPolicyPage() {
  const dataCollection = [{
    icon: Users,
    title: 'Datos Identificativos',
    desc: 'Nombre, apellidos, DNI/NIE (para facturación), fecha de nacimiento, imagen (si la subes al perfil).',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  }, {
    icon: Mail,
    title: 'Datos de Contacto',
    desc: 'Dirección postal de envío y facturación, correo electrónico, teléfono móvil y fijo.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  }, {
    icon: PawPrint,
    title: 'Datos de Mascotas',
    desc: 'Nombre, raza, edad, peso, nivel de actividad, alergias, historial de salud y preferencias alimentarias.',
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  }, {
    icon: CreditCard,
    title: 'Datos Económicos',
    desc: 'Historial de compras, datos bancarios (gestionados por pasarelas seguras), facturas.',
    color: 'text-rose-600',
    bg: 'bg-rose-50'
  }, {
    icon: Server,
    title: 'Datos Técnicos',
    desc: 'Dirección IP, navegador, zona horaria, ubicación aproximada, sistema operativo, logs de acceso.',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }, {
    icon: Fingerprint,
    title: 'Datos de Navegación',
    desc: 'Cookies, páginas visitadas, tiempo de permanencia, productos vistos, carritos abandonados.',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  }];
  const rights = [{
    icon: Eye,
    title: 'Derecho de Acceso',
    desc: 'Solicitar una copia de los datos personales que tenemos sobre ti.'
  }, {
    icon: FileText,
    title: 'Derecho de Rectificación',
    desc: 'Corregir datos inexactos o completar datos incompletos.'
  }, {
    icon: Trash2,
    title: 'Derecho de Supresión',
    desc: 'Solicitar el borrado de tus datos ("derecho al olvido").'
  }, {
    icon: Ban,
    title: 'Derecho de Oposición',
    desc: 'Oponerte al tratamiento de tus datos para fines específicos.'
  }, {
    icon: Lock,
    title: 'Limitación del Tratamiento',
    desc: 'Solicitar que suspendamos el tratamiento de tus datos.'
  }, {
    icon: FileSearch,
    title: 'Portabilidad de Datos',
    desc: 'Recibir tus datos en un formato estructurado y legible.'
  }];
  return <main className="min-h-screen bg-[#FAF7F2] pt-24 sm:pt-32 pb-20 font-sans">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-primary-700 text-sm font-bold mb-6">
            <Shield className="w-4 h-4" />
            RGPD Compliant
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal-800 mb-6 font-serif tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tu privacidad es sagrada para nosotros. Te explicamos de forma clara
            y transparente cómo cuidamos tus datos y los de tu mascota.
          </p>
        </div>

        <div className="grid gap-12">
          {/* 1. Responsable */}
          <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm border border-primary-100">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal-800 font-serif">
                1. Responsable del Tratamiento
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  El responsable del tratamiento de tus datos personales es{' '}
                  <strong>PETIORA S.L.</strong> (en adelante, "Petiora" o
                  "nosotros").
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4 text-base">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <span>Calle Verde 123, 28001 Madrid, España</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span>NIF: B-12345678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span>
                      Registro Mercantil de Madrid, Tomo 1234, Folio 56
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50/50 rounded-3xl p-8 border border-primary-100 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
                <h3 className="font-bold text-primary-900 mb-2 text-lg">
                  Delegado de Protección de Datos (DPO)
                </h3>
                <p className="text-primary-800/80 mb-6 text-sm max-w-xs mx-auto">
                  Hemos designado un Delegado de Protección de Datos para velar
                  por el cumplimiento de la normativa y atender tus consultas.
                </p>
                <a href="mailto:dpo@petiora.co" className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md transition-all border border-primary-100 hover:-translate-y-1">
                  <Mail className="w-4 h-4" />
                  dpo@petiora.co
                </a>
              </div>
            </div>
          </section>

          {/* 2. Datos Recopilados */}
          <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal-800 font-serif">
                2. Categorías de Datos
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataCollection.map((item, idx) => <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-charcoal-800 mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>)}
            </div>
          </section>

          {/* 3. Finalidad & Legitimación */}
          <div className="grid lg:grid-cols-2 gap-8">
            <section className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-charcoal-800 font-serif">
                  3. Finalidad del Tratamiento
                </h2>
              </div>
              <ul className="space-y-4">
                {[{
                title: 'Gestión de Pedidos',
                desc: 'Procesar compras, pagos, envíos y devoluciones.'
              }, {
                title: 'Atención al Cliente',
                desc: 'Resolver dudas, incidencias y reclamaciones.'
              }, {
                title: 'Personalización',
                desc: 'Recomendar productos basados en las necesidades de tu mascota.'
              }, {
                title: 'Marketing',
                desc: 'Envío de newsletter y ofertas (solo con consentimiento).'
              }, {
                title: 'Seguridad',
                desc: 'Detección y prevención de fraude y ciberataques.'
              }, {
                title: 'Análisis',
                desc: 'Mejora de la usabilidad y calidad del servicio.'
              }].map((item, idx) => <li key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]" />
                    <div>
                      <strong className="block text-charcoal-800 text-sm mb-0.5">
                        {item.title}
                      </strong>
                      <span className="text-sm text-gray-600">{item.desc}</span>
                    </div>
                  </li>)}
              </ul>
            </section>

            <section className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Gavel className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-charcoal-800 font-serif">
                  4. Base Legal
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amber-200 transition-colors">
                  <strong className="block text-charcoal-800 mb-1 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-600" />
                    Ejecución de Contrato
                  </strong>
                  <p className="text-sm text-gray-600">
                    Necesario para gestionar tu cuenta, procesar pedidos y
                    realizar entregas. Sin estos datos no podemos prestar el
                    servicio.
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amber-200 transition-colors">
                  <strong className="block text-charcoal-800 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    Consentimiento Expreso
                  </strong>
                  <p className="text-sm text-gray-600">
                    Para el envío de comunicaciones comerciales, newsletter y
                    tratamiento de datos de salud de mascotas. Puedes retirarlo
                    en cualquier momento.
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amber-200 transition-colors">
                  <strong className="block text-charcoal-800 mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-amber-600" />
                    Interés Legítimo
                  </strong>
                  <p className="text-sm text-gray-600">
                    Para garantizar la seguridad de la web, prevenir fraudes,
                    realizar encuestas de satisfacción y mejorar nuestros
                    servicios.
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amber-200 transition-colors">
                  <strong className="block text-charcoal-800 mb-1 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-600" />
                    Obligación Legal
                  </strong>
                  <p className="text-sm text-gray-600">
                    Para cumplir con normativas fiscales, contables y de consumo
                    (ej. facturación).
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 5. Destinatarios y Transferencias */}
          <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                <Share2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal-800 font-serif">
                5. Destinatarios de los Datos
              </h2>
            </div>

            <p className="text-gray-600 mb-8 text-lg">
              No vendemos ni alquilamos tus datos personales. Solo los
              compartimos con terceros cuando es estrictamente necesario para
              prestar el servicio:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[{
              title: 'Logística',
              desc: 'Empresas de mensajería para entregas.'
            }, {
              title: 'Pagos',
              desc: 'Pasarelas de pago y bancos.'
            }, {
              title: 'Tecnología',
              desc: 'Proveedores de hosting y software.'
            }, {
              title: 'Legal',
              desc: 'Asesoría fiscal y autoridades si se requiere.'
            }].map((item, idx) => <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                  <h4 className="font-bold text-charcoal-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>)}
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 flex gap-4 items-start">
              <Globe className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-purple-900 mb-2">
                  Transferencias Internacionales
                </h4>
                <p className="text-sm text-purple-800 leading-relaxed">
                  Algunos de nuestros proveedores tecnológicos (ej. Google, AWS)
                  pueden procesar datos fuera del Espacio Económico Europeo
                  (EEE). En estos casos, garantizamos que aplican las garantías
                  adecuadas, como las Cláusulas Contractuales Tipo aprobadas por
                  la Comisión Europea o el marco Data Privacy Framework.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Tus Derechos */}
          <section className="bg-charcoal-900 rounded-[2.5rem] p-8 sm:p-12 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary-400 backdrop-blur-sm border border-white/10">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold font-serif">
                  6. Tus Derechos RGPD
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {rights.map((right, idx) => <div key={idx} className="bg-white/5 hover:bg-white/10 transition-colors p-5 rounded-2xl border border-white/10 backdrop-blur-sm group">
                    <div className="flex items-center gap-3 mb-3">
                      <right.icon className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors" />
                      <h3 className="font-bold text-lg">{right.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {right.desc}
                    </p>
                  </div>)}
              </div>

              <div className="bg-white/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    ¿Cómo ejercer tus derechos?
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md">
                    Es gratuito. Solo tienes que enviarnos un email.
                    Responderemos en un plazo máximo de 30 días.
                  </p>
                </div>
                <a href="mailto:dpo@petiora.co" className="bg-white text-charcoal-900 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-black/20">
                  Ejercer Derechos <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* 7. Conservación & Seguridad */}
          <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shadow-sm border border-orange-100">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal-800 font-serif">
                7. Conservación y Seguridad
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-bold text-charcoal-800 mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  Plazos de Conservación
                </h3>
                <div className="space-y-6 relative pl-4 border-l-2 border-gray-100">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-white" />
                    <h4 className="font-bold text-charcoal-800 text-sm">
                      Mientras seas cliente
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Conservamos tus datos mientras mantengas tu cuenta activa.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-300 ring-4 ring-white" />
                    <h4 className="font-bold text-charcoal-800 text-sm">
                      5 Años (Fiscal)
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Facturas y datos de transacciones por obligación legal
                      tributaria.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-300 ring-4 ring-white" />
                    <h4 className="font-bold text-charcoal-800 text-sm">
                      3 Años (Inactividad)
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Datos de usuarios inactivos antes de su supresión.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-charcoal-800 mb-6 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-gray-400" />
                  Medidas de Seguridad
                </h3>
                <div className="grid gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex gap-3">
                    <Lock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Cifrado SSL/TLS en todas las comunicaciones.
                    </span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex gap-3">
                    <Server className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Servidores seguros con firewalls y monitorización 24/7.
                    </span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex gap-3">
                    <UserCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Control de acceso estricto a la información personal.
                    </span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex gap-3">
                    <Database className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Copias de seguridad diarias cifradas.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Menores */}
          <section className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-6">
            <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-red-50 items-center justify-center text-red-500 flex-shrink-0">
              <Ban className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-charcoal-800 font-serif mb-2">
                8. Privacidad de Menores
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestros servicios están dirigidos exclusivamente a mayores de
                18 años. No recopilamos conscientemente datos de menores. Si
                detectamos que un menor de 18 años nos ha proporcionado datos
                personales, procederemos a su eliminación inmediata.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>;
}
// Helper icons needed for import
import { CreditCard } from 'lucide-react';