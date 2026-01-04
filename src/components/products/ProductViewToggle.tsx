import React from 'react';
import { LayoutGrid, List, Rows } from 'lucide-react';
import { motion } from 'framer-motion';
interface ProductViewToggleProps {
  view: 'grid' | 'list';
  onChange: (view: 'grid' | 'list') => void;
}
export function ProductViewToggle({
  view,
  onChange
}: ProductViewToggleProps) {
  return <div className="relative flex bg-gradient-to-r from-gray-100 to-gray-50 p-1 rounded-xl border border-gray-200 shadow-sm">
      {/* Animated Background */}
      <motion.div className="absolute inset-y-1 bg-white rounded-lg shadow-md" initial={false} animate={{
      x: view === 'grid' ? 4 : '50%',
      width: 'calc(50% - 8px)'
    }} transition={{
      type: 'spring',
      stiffness: 500,
      damping: 30
    }} />

      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={() => onChange('grid')} className={`relative z-10 flex-1 p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${view === 'grid' ? 'text-[#7C9885]' : 'text-gray-500 hover:text-gray-700'}`} aria-label="Vista cuadrícula">
        <LayoutGrid className="w-5 h-5" />
        <span className="text-xs font-bold hidden sm:inline">Cuadrícula</span>
      </motion.button>

      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={() => onChange('list')} className={`relative z-10 flex-1 p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${view === 'list' ? 'text-[#7C9885]' : 'text-gray-500 hover:text-gray-700'}`} aria-label="Vista lista">
        <Rows className="w-5 h-5" />
        <span className="text-xs font-bold hidden sm:inline">Lista</span>
      </motion.button>
    </div>;
}