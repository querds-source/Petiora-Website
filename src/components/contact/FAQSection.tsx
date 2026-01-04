import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/company';
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');
  return <div className="max-w-3xl mx-auto mt-16">
      <div className="space-y-12">
        {faqs.map((category, catIndex) => <div key={catIndex}>
            <h3 className="text-lg font-bold text-[#7C9885] mb-6 uppercase tracking-wider text-center md:text-left">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((faq, index) => {
            const id = `${catIndex}-${index}`;
            const isOpen = openIndex === id;
            return <div key={index} className={`border rounded-xl overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'border-[#7C9885] shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
                    <button onClick={() => setOpenIndex(isOpen ? null : id)} className="w-full flex items-center justify-between p-5 text-left font-bold text-[#2C3333] hover:bg-gray-50 transition-colors">
                      <span className="pr-8">{faq.question}</span>
                      {isOpen ? <ChevronUp className="h-5 w-5 text-[#7C9885] flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />}
                    </button>
                    <AnimatePresence>
                      {isOpen && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: 'auto',
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: 0.2
                }}>
                          <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/30">
                            {faq.answer}
                          </div>
                        </motion.div>}
                    </AnimatePresence>
                  </div>;
          })}
            </div>
          </div>)}
      </div>
    </div>;
}