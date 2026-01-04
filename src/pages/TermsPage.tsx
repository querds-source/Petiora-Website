import React, { useEffect, useState } from 'react';
import { Scale, ShoppingBag, CreditCard, Truck, RotateCcw, AlertTriangle, FileText, Users, ShieldCheck, Gavel, Copyright, HelpCircle, ChevronRight, Check, ArrowRight, Mail, Lock, Globe, Ban, FileWarning } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
export function TermsPage() {
  const [activeSection, setActiveSection] = useState('general');
  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const sections = [{
    id: 'general',
    title: '1. Condiciones Generales',
    icon: Scale,
    content: <div className="space-y-4">
          <p>
            Las presentes Condiciones Generales de Uso y de la Contratación (en
            adelante, "las Condiciones") rigen el acceso y la utilización del
            sitio web www.petiora.co (en adelante, "el Sitio Web"), titularidad
            de PETIORA S.L., así como la contratación de productos y servicios a
            través del mismo.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 text-sm text-amber-900 flex gap-4">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-600" />
            <div>
              <strong>Aceptación Expresa:</strong> El acceso, navegación y uso
              del Sitio Web atribuye la condición de Usuario e implica la
              aceptación expresa y sin reservas de todos los términos incluidos
              en estas Condiciones Generales, teniendo la misma validez y
              eficacia que cualquier contrato celebrado por escrito y firmado.
            </div>
          </div>
          <p>
            Petiora se reserva el derecho de modificar, en cualquier momento y
            sin previo aviso, la presentación y configuración del Sitio Web, así
            como las presentes Condiciones Generales. Los Usuarios siempre
            dispondrán de estas Condiciones en un sitio visible, libremente
            accesible para cuantas consultas quiera realizar.
          </p>
        </div>
  }, {
    id: 'registro',
    title: '2. Registro y Seguridad',
    icon: Users,
    content: <div className="space-y-6">
          <p>
            Para realizar pedidos en el Sitio Web, el Usuario puede optar por
            registrarse o realizar la compra como invitado. En ambos casos, el
            Usuario garantiza que los datos personales facilitados son veraces y
            exactos, y se compromete a notificar cualquier cambio o modificación
            de los mismos.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {['Proporcionar datos veraces, exactos y completos', 'Mantener actualizada la información de la cuenta', 'Custodiar diligentemente la contraseña de acceso', 'No compartir las credenciales con terceros', 'Notificar inmediatamente cualquier acceso no autorizado', 'Ser mayor de edad legal (18 años) y tener capacidad para contratar'].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 transition-colors hover:border-primary-200">
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-snug">
                  {item}
                </span>
              </div>)}
          </div>

          <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3">
            <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">
              Petiora se reserva el derecho de cancelar, suspender o inhabilitar
              cuentas que incumplan estas normas, realicen un uso fraudulento
              del servicio o atenten contra la seguridad del Sitio Web, sin
              derecho a indemnización alguna.
            </p>
          </div>
        </div>
  }, {
    id: 'productos',
    title: '3. Información de Productos',
    icon: ShoppingBag,
    content: <div className="space-y-4">
          <p>
            Petiora pone el máximo cuidado en la presentación y descripción de
            los productos. Sin embargo, las fotografías y representaciones
            gráficas o iconográficas de todo tipo relativas a los productos
            tienen efectos meramente orientativos.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-600 marker:text-primary-500">
            <li>
              <strong>Disponibilidad:</strong> Todos los pedidos están sujetos a
              la disponibilidad de los productos. Si se produjeran incidencias
              en cuanto a su suministro o no quedaran artículos en stock, se
              informará inmediatamente al Usuario y se reembolsará cualquier
              cantidad que hubiera podido abonar.
            </li>
            <li>
              <strong>Precios:</strong> Los precios mostrados incluyen el
              Impuesto sobre el Valor Añadido (IVA) vigente en España. No
              incluyen los gastos de envío, que se añadirán al importe total
              debido.
            </li>
            <li>
              <strong>Modificaciones:</strong> Nos reservamos el derecho de
              retirar cualquier producto del Sitio Web en cualquier momento y de
              modificar cualquier material o contenido del mismo.
            </li>
          </ul>
        </div>
  }, {
    id: 'pagos',
    title: '4. Precios y Pagos',
    icon: CreditCard,
    content: <div className="space-y-6">
          <p>
            El Usuario se compromete a pagar en el momento que realiza el
            pedido. El ticket o comprobante de compra que corresponde al pedido
            de compra estará disponible y se podrá visualizar en la sección "Mi
            Cuenta".
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold text-charcoal-800 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Pasarela de Pago Segura
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map(method => <div key={method} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                  <CreditCard className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-xs font-bold text-gray-600">
                    {method}
                  </span>
                </div>)}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Utilizamos sistemas de pago seguro de entidades financieras de
              primera línea en comercio electrónico. Los datos de pago son
              encriptados mediante protocolo SSL (Secure Socket Layer) de 256
              bits. Petiora no almacena datos bancarios confidenciales.
            </p>
          </div>
        </div>
  }, {
    id: 'envios',
    title: '5. Envíos y Entregas',
    icon: Truck,
    content: <div className="space-y-4">
          <p>
            Petiora se compromete a entregar el producto en perfecto estado en
            la dirección que el Usuario señale en el formulario de pedido. Con
            el fin de optimizar la entrega, agradecemos al Usuario que indique
            una dirección en la cual el pedido pueda ser entregado dentro del
            horario laboral habitual.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <h5 className="font-bold text-charcoal-800 mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary-600" />
                Península
              </h5>
              <p className="text-sm text-gray-600 mb-2">
                24-48 horas laborables
              </p>
              <p className="text-xs text-gray-400">
                Pedidos antes de las 14:00h
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <h5 className="font-bold text-charcoal-800 mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary-600" />
                Baleares
              </h5>
              <p className="text-sm text-gray-600 mb-2">
                48-72 horas laborables
              </p>
              <p className="text-xs text-gray-400">
                Sujeto a condiciones marítimas
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic mt-2">
            Petiora no será responsable por los errores causados en la entrega
            cuando la dirección de entrega introducida por el Usuario en el
            formulario de pedido no se ajuste a la realidad o haya sido omitida.
          </p>
        </div>
  }, {
    id: 'devoluciones',
    title: '6. Devoluciones y Desistimiento',
    icon: RotateCcw,
    content: <div className="space-y-6">
          <p>
            De conformidad con la normativa vigente, el Usuario dispone de un
            plazo de 30 días naturales desde la recepción del producto para
            ejercer su derecho de desistimiento sin necesidad de justificación.
          </p>

          <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
            {[{
          title: 'Comunicación',
          desc: 'El usuario debe comunicar su intención de devolver el producto a través de su cuenta o contactando con atención al cliente.'
        }, {
          title: 'Estado del Producto',
          desc: 'El producto debe estar en el mismo estado en que se entregó y deberá conservar su embalaje y etiquetado original.'
        }, {
          title: 'Reembolso',
          desc: 'La devolución del importe se realizará en el mismo medio de pago utilizado en un plazo máximo de 14 días naturales desde la recepción.'
        }].map((step, idx) => <div key={idx} className="relative">
                <div className="absolute -left-8 w-6 h-6 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-xs font-bold text-primary-700 shadow-sm">
                  {idx + 1}
                </div>
                <h5 className="font-bold text-charcoal-800">{step.title}</h5>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>)}
          </div>

          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
            <h5 className="font-bold text-charcoal-800 mb-3 text-sm flex items-center gap-2">
              <FileWarning className="w-4 h-4 text-amber-500" />
              Excepciones al derecho de desistimiento:
            </h5>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              <li>
                Bienes precintados que no sean aptos para ser devueltos por
                razones de protección de la salud o higiene y que hayan sido
                desprecintados tras la entrega.
              </li>
              <li>
                Bienes que puedan deteriorarse o caducar con rapidez (alimentos
                frescos o con caducidad corta).
              </li>
              <li>
                Bienes confeccionados conforme a las especificaciones del
                consumidor o claramente personalizados.
              </li>
            </ul>
          </div>
        </div>
  }, {
    id: 'propiedad',
    title: '7. Propiedad Intelectual e Industrial',
    icon: Copyright,
    content: <div className="space-y-4">
          <p>
            Todos los contenidos del Sitio Web, entendiendo por estos a título
            meramente enunciativo, los textos, fotografías, gráficos, imágenes,
            iconos, tecnología, software, links y demás contenidos audiovisuales
            o sonoros, así como su diseño gráfico y códigos fuente (en adelante,
            los "Contenidos"), son propiedad intelectual de Petiora o de
            terceros, sin que puedan entenderse cedidos al Usuario ninguno de
            los derechos de explotación reconocidos por la normativa vigente
            sobre propiedad intelectual sobre los mismos.
          </p>
          <p>
            Las marcas, nombres comerciales o signos distintivos son titularidad
            de Petiora o terceros, sin que pueda entenderse que el acceso al
            Sitio Web atribuya ningún derecho sobre las citadas marcas, nombres
            comerciales y/o signos distintivos.
          </p>
          <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 text-primary-900 text-sm font-medium">
            Queda expresamente prohibida la reproducción, transformación,
            distribución, comunicación pública, puesta a disposición,
            extracción, reutilización, reenvío o la utilización de cualquier
            naturaleza, por cualquier medio o procedimiento, de cualquiera de
            ellos, salvo en los casos en que esté legalmente permitido o sea
            autorizado por el titular de los correspondientes derechos.
          </div>
        </div>
  }, {
    id: 'responsabilidad',
    title: '8. Limitación de Responsabilidad',
    icon: ShieldCheck,
    content: <div className="space-y-4">
          <p>
            Petiora no garantiza la disponibilidad continua y permanente de los
            servicios, quedando de este modo exonerado de cualquier
            responsabilidad por posibles daños y perjuicios causados como
            consecuencia de la falta de disponibilidad del servicio por motivos
            de fuerza mayor o errores en las redes telemáticas de transferencia
            de datos, ajenos a su voluntad.
          </p>
          <p>
            Petiora no se hace responsable del contenido de los enlaces a otras
            páginas web que no sean titularidad suya y que, por tanto, no pueden
            ser controladas por ésta.
          </p>
          <p>
            El Usuario es el único responsable de las infracciones en las que
            pueda incurrir o de los perjuicios que pueda causar por la
            utilización del Sitio Web, quedando Petiora, sus socios, empresas
            del grupo, colaboradores, empleados y representantes, exonerados de
            cualquier clase de responsabilidad que se pudiera derivar por las
            acciones del Usuario.
          </p>
        </div>
  }, {
    id: 'proteccion',
    title: '9. Protección de Datos',
    icon: Lock,
    content: <div className="space-y-4">
          <p>
            De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 del
            Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 de
            Protección de Datos Personales y garantía de los derechos digitales,
            le informamos que los datos personales facilitados serán tratados
            por Petiora S.L.
          </p>
          <p>
            Para más información sobre el tratamiento de sus datos personales,
            consulte nuestra{' '}
            <Link to="/privacidad" className="text-primary-600 font-bold hover:underline">
              Política de Privacidad
            </Link>{' '}
            y nuestra{' '}
            <Link to="/cookies" className="text-primary-600 font-bold hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
  }, {
    id: 'ley',
    title: '10. Ley Aplicable y Jurisdicción',
    icon: Gavel,
    content: <div className="space-y-4">
          <p>
            Las presentes Condiciones Generales se rigen por la legislación
            española. Las partes se someten, a su elección, para la resolución
            de los conflictos y con renuncia a cualquier otro fuero, a los
            juzgados y tribunales del domicilio del usuario.
          </p>
          <p>
            Asimismo, como entidad adherida a Confianza Online y en los términos
            de su Código Ético, en caso de controversias relativas a la
            contratación y publicidad online, protección de datos y protección
            de menores, el usuario podrá acudir al sistema de resolución
            extrajudicial de controversias de Confianza Online
            (www.confianzaonline.es).
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-600">
              La Comisión Europea facilita también una plataforma de resolución
              de litigios en línea, disponible en el siguiente enlace:{' '}
              <a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                http://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </div>
        </div>
  }, {
    id: 'contacto',
    title: '11. Contacto',
    icon: Mail,
    content: <div className="space-y-4">
          <p>
            Para cualquier duda, sugerencia, consulta o reclamación sobre el
            Sitio Web, puede dirigirse al Servicio de Atención al Cliente, por
            cualquiera de los siguientes medios:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase">
                  Email
                </div>
                <a href="mailto:legal@petiora.co" className="text-charcoal-800 font-medium hover:text-primary-600">
                  legal@petiora.co
                </a>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase">
                  Dirección Postal
                </div>
                <div className="text-charcoal-800 font-medium text-sm">
                  Calle Verde 123, 28001 Madrid
                </div>
              </div>
            </div>
          </div>
        </div>
  }];
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Header height + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <main className="min-h-screen bg-[#FAF7F2] pt-24 sm:pt-32 pb-20 font-sans">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-primary-700 text-sm font-bold mb-6">
            <FileText className="w-4 h-4" />
            Documento Legal
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal-800 mb-6 font-serif tracking-tight">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Las reglas del juego claras para una relación de confianza. Por
            favor, lee detenidamente este documento antes de utilizar nuestros
            servicios.
          </p>
          <div className="mt-6 text-sm text-gray-500 font-medium">
            Última actualización: Enero 2024
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar Navigation (Desktop) */}
          <div className="hidden lg:block w-80 sticky top-32 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-6 overflow-hidden">
              <h3 className="font-bold text-charcoal-800 mb-6 px-2 text-lg font-serif">
                Índice de Contenidos
              </h3>
              <nav className="space-y-1 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                {sections.map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left group ${activeSection === section.id ? 'bg-primary-50 text-primary-700 shadow-sm ring-1 ring-primary-100' : 'text-gray-600 hover:bg-gray-50 hover:text-charcoal-800'}`}>
                    <section.icon className={`w-4 h-4 flex-shrink-0 transition-colors ${activeSection === section.id ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                    <span className="truncate">{section.title}</span>
                    {activeSection === section.id && <motion.div layoutId="activeIndicator" className="ml-auto">
                        <ChevronRight className="w-4 h-4 text-primary-400" />
                      </motion.div>}
                  </button>)}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
                  <h4 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    ¿Dudas legales?
                  </h4>
                  <p className="text-xs text-blue-800/80 mb-3 leading-relaxed">
                    Nuestro equipo legal está disponible para aclarar cualquier
                    punto.
                  </p>
                  <a href="mailto:legal@petiora.co" className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1">
                    Contactar soporte legal <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full min-w-0">
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              <div className="p-8 sm:p-12 lg:p-16 space-y-20">
                {sections.map((section, idx) => <section key={section.id} id={section.id} className="scroll-mt-32 relative">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 flex-shrink-0 shadow-sm border border-primary-100">
                        <section.icon className="w-7 h-7" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-800 font-serif">
                        {section.title}
                      </h2>
                    </div>

                    <div className="pl-0 sm:pl-[4.5rem] text-gray-600 leading-relaxed text-lg content-section">
                      {section.content}
                    </div>

                    {idx < sections.length - 1 && <div className="h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent mt-20 ml-0 sm:ml-[4.5rem]" />}
                  </section>)}
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center text-gray-500 text-sm max-w-2xl mx-auto">
              <p>
                Estas condiciones han sido redactadas de conformidad con la
                normativa española y europea vigente. Petiora S.L. se reserva el
                derecho de emprender acciones legales en caso de incumplimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>;
}