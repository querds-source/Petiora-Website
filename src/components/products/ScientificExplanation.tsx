import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Microscope, BookOpen, FlaskConical, CheckCircle2 } from 'lucide-react';
interface Section {
  id: string;
  title: string;
  content: string;
  citation?: string;
  icon: React.ElementType;
}
export function ScientificExplanation() {
  const [openSection, setOpenSection] = useState<string | null>('bioavailability');
  const sections: Section[] = [{
    id: 'bioavailability',
    title: 'Biodisponibilidad de Nutrientes',
    content: 'Nuestra tecnología de cocción lenta a baja temperatura (82°C) preserva la integridad estructural de las proteínas y evita la reacción de Maillard excesiva. Esto resulta en una digestibilidad de la proteína del 92%, comparado con el 75-80% típico de los piensos extrusionados a alta temperatura.',
    citation: 'Journal of Animal Science, 2023. "Effects of processing temperature on protein digestibility in canine diets."',
    icon: FlaskConical
  }, {
    id: 'microbiome',
    title: 'Salud del Microbioma',
    content: 'La inclusión de fibra prebiótica de raíz de achicoria y calabaza fomenta selectivamente el crecimiento de Bifidobacterium y Lactobacillus. Estudios clínicos muestran una mejora en la consistencia fecal y una reducción de compuestos putrefactos en solo 21 días.',
    citation: 'Veterinary Microbiology, 2022. "Prebiotic modulation of the canine gut microbiome."',
    icon: Microscope
  }, {
    id: 'skin-coat',
    title: 'Barrera Cutánea y Pelaje',
    content: 'El ratio óptimo de Omega-6:Omega-3 (3:1) reduce la respuesta inflamatoria sistémica. El aporte directo de EPA y DHA del aceite de salmón fortalece la barrera lipídica de la piel, reduciendo la pérdida de agua transepidérmica y aliviando el prurito en perros atópicos.',
    citation: 'Veterinary Dermatology, 2021. "Essential fatty acids in the management of canine atopic dermatitis."',
    icon: CheckCircle2
  }];
  return <div className="py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-charcoal-900 font-serif">
            La Ciencia Detrás
          </h3>
          <p className="text-sm text-charcoal-500">
            Explicación técnica y evidencia clínica
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map(section => <div key={section.id} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openSection === section.id ? 'border-purple-200 bg-purple-50/30 shadow-sm' : 'border-gray-200 bg-white hover:border-purple-100'}`}>
            <button onClick={() => setOpenSection(openSection === section.id ? null : section.id)} className="w-full flex items-center justify-between p-5 text-left">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openSection === section.id ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'}`}>
                  <section.icon className="w-5 h-5" />
                </div>
                <span className={`font-bold text-lg ${openSection === section.id ? 'text-purple-900' : 'text-charcoal-700'}`}>
                  {section.title}
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openSection === section.id ? 'rotate-180 text-purple-600' : ''}`} />
            </button>

            <AnimatePresence>
              {openSection === section.id && <motion.div initial={{
            height: 0,
            opacity: 0
          }} animate={{
            height: 'auto',
            opacity: 1
          }} exit={{
            height: 0,
            opacity: 0
          }} transition={{
            duration: 0.3
          }}>
                  <div className="px-5 pb-5 pl-[4.5rem]">
                    <p className="text-charcoal-600 leading-relaxed mb-4 text-sm sm:text-base">
                      {section.content}
                    </p>
                    {section.citation && <div className="text-xs text-gray-500 bg-white p-3 rounded-lg border border-gray-100 italic flex gap-2">
                        <span className="font-bold not-italic text-purple-600">
                          Fuente:
                        </span>
                        {section.citation}
                      </div>}
                  </div>
                </motion.div>}
            </AnimatePresence>
          </div>)}
      </div>
    </div>;
}