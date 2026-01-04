import React, { useState } from 'react';
import { ChevronDown, SortAsc, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface ProductSortProps {
  value: string;
  onChange: (value: string) => void;
}
export function ProductSort({
  value,
  onChange
}: ProductSortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sortOptions = [{
    value: 'featured',
    label: 'Destacados',
    icon: '⭐'
  }, {
    value: 'newest',
    label: 'Más nuevos',
    icon: '🆕'
  }, {
    value: 'price-asc',
    label: 'Precio: Menor a Mayor',
    icon: '↑'
  }, {
    value: 'price-desc',
    label: 'Precio: Mayor a Menor',
    icon: '↓'
  }, {
    value: 'rating',
    label: 'Mejor valorados',
    icon: '⭐'
  }];
  const currentOption = sortOptions.find(opt => opt.value === value);
  return <div className="relative">
      <motion.button whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }} onClick={() => setIsOpen(!isOpen)} className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:border-[#7C9885] focus:ring-4 focus:ring-[#7C9885]/10 text-sm font-semibold hover:border-gray-300 transition-all flex items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-2">
          <SortAsc className="h-4 w-4 text-[#7C9885]" />
          <span className="hidden sm:inline text-gray-500 font-medium">
            Ordenar:
          </span>
          <span>{currentOption?.label}</span>
        </div>
        <motion.div animate={{
        rotate: isOpen ? 180 : 0
      }} transition={{
        duration: 0.2
      }}>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div initial={{
          opacity: 0,
          y: -10,
          scale: 0.95
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          y: -10,
          scale: 0.95
        }} transition={{
          duration: 0.2,
          ease: [0.04, 0.62, 0.23, 0.98]
        }} className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-20 backdrop-blur-xl">
              <div className="py-1">
                {sortOptions.map((option, index) => <motion.button key={option.value} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.05
            }} onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }} className={`w-full px-4 py-3 text-left text-sm font-medium transition-all flex items-center justify-between group ${value === option.value ? 'bg-gradient-to-r from-[#EBF2EE] to-white text-[#7C9885]' : 'text-gray-700 hover:bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-base">{option.icon}</span>
                      <span>{option.label}</span>
                    </div>
                    {value === option.value && <motion.div initial={{
                scale: 0,
                opacity: 0
              }} animate={{
                scale: 1,
                opacity: 1
              }} transition={{
                type: 'spring',
                stiffness: 500,
                damping: 25
              }}>
                        <Check className="h-4 w-4 text-[#7C9885]" />
                      </motion.div>}
                  </motion.button>)}
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}