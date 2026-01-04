import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Microscope, ShieldCheck, Users, CheckCircle2, Thermometer, Activity, Search, FileCheck, FlaskConical, Play, ArrowRight, Clock, Truck, PackageCheck, AlertCircle, ClipboardCheck, GraduationCap } from 'lucide-react';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem } from '../ui/Accordion';
export function QualityHub() {
  const tabs = [{
    id: 'process',
    label: 'Proceso',
    icon: <ChefHat className="w-4 h-4" />,
    content: <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-primary-700 border-primary-200 bg-primary-50">
                Tecnología Sous-Vide
              </Badge>
              <h3 className="text-3xl font-bold text-charcoal-900 font-serif mb-4">
                Cocina lenta, nutrición máxima
              </h3>
              <p className="text-charcoal-600 leading-relaxed text-lg">
                Nuestro proceso de cocción al vacío a baja temperatura
                (Sous-Vide) preserva el 98% de los nutrientes originales, a
                diferencia de la extrusión a alta temperatura (140°C+) del
                pienso industrial que destruye vitaminas y desnaturaliza
                proteínas.
              </p>
            </div>

            {/* Process Timeline */}
            <div className="relative pl-8 border-l-2 border-primary-100 space-y-10">
              {[{
            title: 'Selección y Troceado Manual',
            desc: 'Ingredientes frescos enteros troceados a mano en nuestra cocina central.',
            detail: 'Control visual de calidad pieza a pieza.',
            icon: ChefHat,
            time: '08:00'
          }, {
            title: 'Cocción Sous-Vide Controlada',
            desc: 'Cocción suave a 80°C durante 45 minutos en bolsas selladas.',
            detail: 'Mantiene jugosidad y evita oxidación.',
            icon: Thermometer,
            time: '09:30'
          }, {
            title: 'Abatimiento Rápido de Temperatura',
            desc: 'Enfriamiento de 80°C a 3°C en menos de 90 minutos.',
            detail: 'Bloquea el crecimiento bacteriano.',
            icon: Clock,
            time: '10:15'
          }, {
            title: 'Envasado y Etiquetado',
            desc: 'Sin conservantes artificiales, solo frescura natural.',
            detail: 'Atmósfera protectora natural.',
            icon: PackageCheck,
            time: '11:00'
          }].map((item, i) => <div key={i} className="relative group">
                  <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-white border-2 border-primary-200 flex items-center justify-center text-primary-600 shadow-sm z-10 group-hover:scale-110 group-hover:border-primary-500 transition-all">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-charcoal-900 text-lg group-hover:text-primary-700 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-charcoal-600 text-sm mt-1 font-medium">
                    {item.desc}
                  </p>
                  <p className="text-charcoal-400 text-xs mt-1">
                    {item.detail}
                  </p>
                </div>)}
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary-600 font-serif">
                  98%
                </span>
                <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                  Nutrientes Preservados
                </span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary-600 font-serif">
                  80°C
                </span>
                <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wide">
                  Temp. Máxima
                </span>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <Card className="overflow-hidden border-none shadow-2xl aspect-video relative rounded-[2rem]">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800" alt="Proceso de cocina" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge variant="white" className="backdrop-blur-md font-bold mb-2">
                  <Thermometer className="w-3 h-3 mr-1" />
                  Control Digital de Temperatura
                </Badge>
                <p className="text-white font-bold text-lg drop-shadow-md">
                  Ver cómo cocinamos para tu mascota
                </p>
              </div>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100/50 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-100/50 rounded-full blur-2xl -z-10" />
          </div>
        </div>
  }, {
    id: 'science',
    label: 'Ciencia',
    icon: <Microscope className="w-4 h-4" />,
    content: <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="order-2 lg:order-1 relative">
            <Card className="overflow-hidden border-none shadow-2xl aspect-square relative group rounded-[2rem]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Laboratorio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <div className="space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="white" className="backdrop-blur-md bg-white/20 text-white border-white/30">
                      <Activity className="w-3 h-3 mr-1" />
                      Análisis Continuo
                    </Badge>
                    <Badge variant="white" className="backdrop-blur-md bg-white/20 text-white border-white/30">
                      FEDIAF Compliant
                    </Badge>
                  </div>
                  <h4 className="text-white font-bold text-xl">
                    Laboratorio de Nutrición
                  </h4>
                  <p className="text-gray-200 text-sm">
                    Cada lote es analizado para garantizar el perfil nutricional
                    exacto antes de ser enviado. Colaboramos con la Universidad
                    de Veterinaria.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <Badge variant="outline" className="mb-4 text-primary-700 border-primary-200 bg-primary-50">
                Evidencia Científica
              </Badge>
              <h3 className="text-3xl font-bold text-charcoal-900 font-serif mb-4">
                Formulado por veterinarios
              </h3>
              <p className="text-charcoal-600 leading-relaxed text-lg">
                Cada receta es desarrollada por nuestro equipo de nutricionistas
                clínicos siguiendo los estándares FEDIAF y NRC. Realizamos
                análisis constantes para garantizar el perfil nutricional
                exacto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{
            label: 'Balance Ca:P (1.2:1)',
            desc: 'Óptimo para salud ósea',
            icon: FlaskConical
          }, {
            label: 'Aminograma Completo',
            desc: 'Todos los esenciales',
            icon: Activity
          }, {
            label: 'Digestibilidad > 90%',
            desc: 'Menos residuos',
            icon: CheckCircle2
          }, {
            label: 'Cumplimiento FEDIAF',
            desc: 'Normativa Europea',
            icon: FileCheck
          }, {
            label: 'Sin aditivos',
            desc: '100% Natural',
            icon: ShieldCheck
          }, {
            label: 'Humedad 70%',
            desc: 'Salud Renal',
            icon: Thermometer
          }].map((item, i) => <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-shadow hover:border-primary-100">
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-charcoal-800 block">
                      {item.label}
                    </span>
                    <span className="text-xs text-charcoal-500">
                      {item.desc}
                    </span>
                  </div>
                </div>)}
            </div>

            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h5 className="font-bold text-primary-900 mb-2 flex items-center gap-2">
                <Microscope className="w-4 h-4" />
                Estudio Clínico 2023
              </h5>
              <p className="text-sm text-primary-800/80 mb-4 leading-relaxed">
                Nuestros estudios demuestran una mejora del 40% en la
                digestibilidad y una reducción del 30% en volumen de heces
                comparado con el pienso premium líder del mercado.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-white border-primary-200 hover:bg-primary-50 text-primary-700">
                Ver Informe Completo
              </Button>
            </div>
          </div>
        </div>
  }, {
    id: 'safety',
    label: 'Seguridad',
    icon: <ShieldCheck className="w-4 h-4" />,
    content: <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-emerald-700 border-emerald-200 bg-emerald-50">
                Protocolo Zero-Risk
              </Badge>
              <h3 className="text-3xl font-bold text-charcoal-900 font-serif mb-4">
                Más estricto que la normativa humana
              </h3>
              <p className="text-charcoal-600 leading-relaxed text-lg">
                No dejamos nada al azar. Cada lote de producción pasa por un
                protocolo de 4 fases de verificación antes de salir de nuestras
                instalaciones. Si no es perfecto, no sale.
              </p>
            </div>

            <div className="space-y-4">
              {[{
            title: 'Análisis Microbiológico',
            desc: 'Ausencia total de patógenos (Salmonella, E. Coli, Listeria).',
            status: 'Negativo',
            icon: Microscope
          }, {
            title: 'Detección de Metales',
            desc: 'Escaneo por rayos X de cada paquete individual.',
            status: 'Aprobado',
            icon: Search
          }, {
            title: 'Control de Cadena de Frío',
            desc: 'Monitorización 24/7 de temperatura desde cocina a tu casa.',
            status: 'Activo',
            icon: Thermometer
          }].map((item, i) => <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all hover:border-emerald-100 group">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 mt-1 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-charcoal-900 text-lg">
                        {item.title}
                      </h4>
                      <Badge variant="success" size="sm" className="ml-2">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-charcoal-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>)}
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-amber-800 text-sm">
                  Política de Transparencia
                </h5>
                <p className="text-xs text-amber-700 mt-1">
                  Si detectamos cualquier anomalía, bloqueamos el lote
                  automáticamente. Puedes consultar el estado de tu lote
                  escaneando el QR del paquete.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card className="bg-charcoal-900 text-white p-8 border-none shadow-2xl relative overflow-hidden rounded-[2rem]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Informe de Calidad</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      Certificado Oficial
                    </p>
                  </div>
                </div>
                <Badge variant="success" size="md" className="px-3 py-1">
                  APROBADO
                </Badge>
              </div>

              <div className="space-y-5 font-mono text-sm text-gray-300 relative z-10">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-gray-400">Lote ID</span>
                  <span className="text-white font-bold">#8492-AX</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-gray-400">Fecha Análisis</span>
                  <span className="text-white font-bold">24/05/2024</span>
                </div>

                <div className="h-px bg-white/10 my-2" />

                <div className="flex justify-between items-center">
                  <span>Salmonella spp.</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Negativo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Listeria m.</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Negativo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Proteína Bruta</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">14.2%</span>
                    <span className="text-[10px] text-gray-500">
                      (Obj: 14%)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verificado por Eurofins</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary-400 hover:text-white hover:bg-white/10 h-8 px-2">
                  Descargar PDF
                </Button>
              </div>
            </Card>
          </div>
        </div>
  }, {
    id: 'team',
    label: 'Equipo',
    icon: <Users className="w-4 h-4" />,
    content: <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg transform translate-y-8 hover:scale-105 transition-transform duration-500" alt="Vet 1" />
                <Card className="p-4 bg-white/90 backdrop-blur-sm border-primary-100">
                  <p className="text-xs font-bold text-primary-600 uppercase mb-1">
                    Dra. Laura M.
                  </p>
                  <p className="text-xs text-charcoal-600 font-medium">
                    Especialista en Nutrición Clínica
                  </p>
                  <p className="text-[10px] text-charcoal-400 mt-1">
                    Col. 28492 - 15 años exp.
                  </p>
                </Card>
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" alt="Vet 2" />
                <Card className="p-4 bg-white/90 backdrop-blur-sm border-primary-100">
                  <p className="text-xs font-bold text-primary-600 uppercase mb-1">
                    Dr. Pablo R.
                  </p>
                  <p className="text-xs text-charcoal-600 font-medium">
                    Veterinario Jefe
                  </p>
                  <p className="text-[10px] text-charcoal-400 mt-1">
                    Col. 19384 - 20 años exp.
                  </p>
                </Card>
              </div>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <Badge variant="outline" className="mb-4 text-primary-700 border-primary-200 bg-primary-50">
                Expertos Colegiados
              </Badge>
              <h3 className="text-3xl font-bold text-charcoal-900 font-serif mb-4">
                No somos marketeros, somos científicos
              </h3>
              <p className="text-charcoal-600 leading-relaxed text-lg">
                Nuestro equipo está liderado por veterinarios nutricionistas con
                décadas de experiencia en clínica y formulación de alimentos.
                Cada decisión se basa en la salud de tu mascota, no en
                tendencias de mercado.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Nutricionistas Clínicos', 'Tecnólogos de Alimentos', 'Veterinarios Colegiados', 'Investigadores PhD', 'Auxiliares Veterinarios'].map((tag, i) => <span key={i} className="px-4 py-2 bg-gray-50 text-charcoal-700 rounded-full text-sm font-bold border border-gray-100 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-100 transition-colors cursor-default flex items-center gap-2">
                  <GraduationCap className="w-3 h-3" />
                  {tag}
                </span>)}
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <h5 className="font-bold text-charcoal-900 mb-2 flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4 text-primary-600" />
                Compromiso Ético
              </h5>
              <p className="text-sm text-charcoal-600">
                Nos adherimos al código deontológico veterinario. Nunca
                recomendaremos un producto que no sea adecuado para la salud
                específica de tu animal.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link to="/nosotros">
                <Button variant="primary" className="shadow-lg shadow-primary-900/20">
                  Conoce al equipo completo
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="ghost">Hablar con un veterinario</Button>
              </Link>
            </div>
          </div>
        </div>
  }];
  return <section className="py-32 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
            Calidad sin compromisos
          </motion.span>
          <motion.h2 initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-8 font-serif tracking-tight text-balance">
            Transparencia total en{' '}
            <span className="text-primary-600">cada receta</span>
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="text-lg md:text-xl text-charcoal-600 font-light leading-relaxed">
            Desde la selección de ingredientes hasta el análisis final,
            aplicamos los mismos estándares que la industria alimentaria humana.
            Porque ellos merecen lo mismo que tú.
          </motion.p>
        </div>

        <Tabs tabs={tabs} variant="pills" className="max-w-6xl mx-auto" />
      </div>
    </section>;
}