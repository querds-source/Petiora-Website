import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Search } from 'lucide-react';
interface FacilityImage {
  url: string;
  title: string;
  description: string;
  location: string;
}
export function FacilityTour() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: FacilityImage[] = [{
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    title: 'Laboratorio de Control de Calidad',
    description: 'Donde analizamos cada lote de ingredientes antes de que entre en producción. Utilizamos espectrometría de infrarrojo cercano (NIR) para verificar la composición nutricional en tiempo real.',
    location: 'Zona A - Recepción'
  }, {
    url: 'https://images.unsplash.com/photo-1566576912902-199df6073e56?auto=format&fit=crop&q=80&w=1200',
    title: 'Cocina de Baja Temperatura',
    description: 'Nuestras ollas de cocción lenta mantienen la temperatura por debajo de 82°C para preservar las proteínas y vitaminas naturales de los ingredientes frescos.',
    location: 'Zona B - Producción'
  }, {
    url: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=1200',
    title: 'Área de Envasado Aséptico',
    description: 'Tecnología de atmósfera modificada que elimina el oxígeno del envase para garantizar la frescura sin necesidad de conservantes artificiales.',
    location: 'Zona C - Envasado'
  }, {
    url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200',
    title: 'Centro de I+D+i',
    description: 'Nuestro equipo de veterinarios y nutricionistas desarrolla nuevas fórmulas y realiza pruebas de palatabilidad constantes para asegurar que a tu mascota le encante.',
    location: 'Zona D - Investigación'
  }];
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };
  return <section className="py-20 bg-charcoal-900 text-white overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
              Transparencia Total
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Dentro de Nuestra Cocina
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Visita virtualmente nuestras instalaciones de grado humano en
              Madrid. Estándares de seguridad alimentaria ISO 22000.
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal-900 transition-all" aria-label="Anterior">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal-900 transition-all" aria-label="Siguiente">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-charcoal-800 border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img key={currentIndex} src={images[currentIndex].url} alt={images[currentIndex].title} initial={{
            opacity: 0,
            scale: 1.1
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: 0.7
          }} className="absolute inset-0 w-full h-full object-cover" />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.div key={`text-${currentIndex}`} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-4 h-4" />
                {images[currentIndex].location}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                {images[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
                {images[currentIndex].description}
              </p>
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-2">
            {images.map((_, idx) => <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary-500' : 'bg-white/30 hover:bg-white/50'}`} aria-label={`Ir a imagen ${idx + 1}`} />)}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => <button key={idx} onClick={() => setCurrentIndex(idx)} className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-primary-500 ring-2 ring-primary-500/30' : 'border-transparent opacity-60 hover:opacity-100'}`}>
              <img src={img.url} alt="" className="w-full h-full object-cover" />
              {idx === currentIndex && <div className="absolute inset-0 bg-primary-500/20 backdrop-blur-[1px] flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>}
            </button>)}
        </div>
      </div>
    </section>;
}