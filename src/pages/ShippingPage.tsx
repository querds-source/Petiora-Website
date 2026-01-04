import React from 'react';
import { Truck, RefreshCw, Globe, Package, Clock, ShieldCheck, Thermometer, MapPin, Calendar, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export function ShippingPage() {
  return <div className="bg-[#FAF7F2] min-h-screen pt-24 sm:pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-primary-700 text-sm font-bold mb-6">
            <Truck className="w-4 h-4" />
            Logística Premium
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal-800 mb-6 font-serif">
            Envíos y Devoluciones
          </h1>
          <p className="text-xl text-gray-600">
            Transparencia total sobre cómo cuidamos el viaje de los productos
            hasta tu hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Policy */}
            <section className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                  <Truck className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-charcoal-800 font-serif">
                    Política de Envíos
                  </h2>
                  <p className="text-sm text-gray-500">
                    Rápido, seguro y trazable
                  </p>
                </div>
              </div>

              <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  En Petiora, entendemos que la alimentación de tu mascota no
                  puede esperar. Por eso, hemos optimizado nuestra logística
                  para ser los más rápidos.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-charcoal-800 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-600" />
                      Corte a las 14:00h
                    </h4>
                    <p className="text-sm">
                      Pedidos antes de las 14h salen el mismo día.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-charcoal-800 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      Seguimiento Real
                    </h4>
                    <p className="text-sm">
                      Link de tracking activo en cuanto sale el pedido.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-charcoal-800 mt-8 mb-4">
                  Tiempos y Costes
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Destino
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Tiempo Estimado
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Coste (&lt;49€)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Península
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          24-48h laborables
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          3,95€
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Baleares
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          48-72h laborables
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          5,95€
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Portugal
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          24-48h laborables
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          4,95€
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-emerald-700 font-bold flex items-center gap-2 bg-emerald-50 p-3 rounded-lg inline-block">
                  <Truck className="w-4 h-4" />
                  ¡Envíos GRATIS en pedidos superiores a 49€!
                </p>
              </div>
            </section>

            {/* Special Care */}
            <section className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                  <Thermometer className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-charcoal-800 font-serif">
                    Cuidado Especial
                  </h2>
                  <p className="text-sm text-gray-500">
                    Temperatura y protección
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-charcoal-800">
                    Control de Temperatura
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nuestros productos frescos y probióticos viajan en cajas
                    isotérmicas con acumuladores de frío para garantizar que
                    llegan en perfecto estado, sin romper la cadena de frío.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-charcoal-800">
                    Embalaje Seguro
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Utilizamos sistemas de amortiguación de papel reciclado para
                    evitar golpes. Las latas y envases de vidrio reciben una
                    protección extra individual.
                  </p>
                </div>
              </div>
            </section>

            {/* Returns Policy */}
            <section className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shadow-sm">
                  <RefreshCw className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-charcoal-800 font-serif">
                    Devoluciones Fáciles
                  </h2>
                  <p className="text-sm text-gray-500">
                    Garantía de satisfacción
                  </p>
                </div>
              </div>

              <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  Queremos que tú y tu mascota estéis 100% satisfechos. Si por
                  alguna razón no es así, dispones de{' '}
                  <strong>30 días naturales</strong> para realizar una
                  devolución.
                </p>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-6">
                  <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    Garantía de Palatabilidad
                  </h4>
                  <p className="text-sm text-amber-800">
                    ¿A tu mascota no le ha gustado la comida? No te preocupes.
                    Si has consumido menos del 20% del envase, te lo cambiamos
                    por otro sabor o te devolvemos el dinero. Queremos que
                    encuentren su favorito sin riesgo para tu bolsillo.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-charcoal-800 mb-3">
                  Cómo devolver un producto
                </h3>
                <ol className="space-y-3 list-decimal pl-5 marker:text-primary-600 marker:font-bold">
                  <li>Accede a tu cuenta y ve a la sección "Mis Pedidos".</li>
                  <li>
                    Selecciona el pedido y marca los artículos a devolver.
                  </li>
                  <li>Descarga la etiqueta de devolución prepagada.</li>
                  <li>Lleva el paquete al punto de recogida más cercano.</li>
                  <li>Recibirás el reembolso en 3-5 días tras la recepción.</li>
                </ol>
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-32">
              <h3 className="text-xl font-bold text-charcoal-800 mb-6 font-serif">
                Resumen Rápido
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-800 text-sm">
                      Envío Gratis
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      En pedidos superiores a 49€ en Península y Baleares.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-800 text-sm">
                      Entrega 24/48h
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Para pedidos realizados antes de las 14:00h.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-800 text-sm">
                      Eco-Packaging
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Cajas 100% recicladas y sin plásticos innecesarios.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <Link to="/contacto" className="block">
                    <Button variant="outline" fullWidth className="border-gray-200 hover:border-primary-600 hover:text-primary-600">
                      ¿Tienes dudas? Contáctanos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}