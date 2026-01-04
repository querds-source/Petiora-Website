import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Scale, Trash2 } from 'lucide-react';
import { useComparison } from '../../context/ComparisonContext';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
export function ProductComparison() {
  const {
    comparisonList,
    removeFromComparison,
    clearComparison
  } = useComparison();
  const [isOpen, setIsOpen] = useState(false);
  if (comparisonList.length === 0) return null;
  return <>
      {/* Floating Trigger */}
      <motion.div initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: 100,
      opacity: 0
    }} className="fixed bottom-6 right-6 z-40">
        <Button onClick={() => setIsOpen(true)} className="rounded-full shadow-2xl bg-charcoal-900 text-white px-6 py-4 flex items-center gap-3 hover:scale-105 transition-transform">
          <Scale className="w-5 h-5" />
          <span className="font-bold">Comparar ({comparisonList.length})</span>
        </Button>
      </motion.div>

      {/* Comparison Modal/Overlay */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4 sm:p-8" onClick={() => setIsOpen(false)}>
            <motion.div initial={{
          y: '100%'
        }} animate={{
          y: 0
        }} exit={{
          y: '100%'
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }} className="bg-white w-full max-w-6xl max-h-[85vh] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-serif font-bold text-charcoal-900">
                    Comparador de Productos
                  </h2>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-bold">
                    {comparisonList.length} seleccionados
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" onClick={clearComparison} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Limpiar todo
                  </Button>
                  <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Comparison Grid */}
              <div className="overflow-x-auto flex-1 p-6">
                <div className="min-w-[800px] grid grid-cols-[200px_repeat(auto-fit,minmax(250px,1fr))] gap-8">
                  {/* Labels Column */}
                  <div className="space-y-8 pt-[280px]">
                    <div className="h-12 flex items-center font-bold text-charcoal-500">
                      Precio
                    </div>
                    <div className="h-12 flex items-center font-bold text-charcoal-500">
                      Valoración
                    </div>
                    <div className="h-12 flex items-center font-bold text-charcoal-500">
                      Proteína
                    </div>
                    <div className="h-12 flex items-center font-bold text-charcoal-500">
                      Grasa
                    </div>
                    <div className="h-12 flex items-center font-bold text-charcoal-500">
                      Calorías
                    </div>
                    <div className="h-auto min-h-[48px] flex items-center font-bold text-charcoal-500">
                      Beneficios
                    </div>
                  </div>

                  {/* Products Columns */}
                  {comparisonList.map(product => <div key={product.id} className="space-y-8 relative group">
                      <button onClick={() => removeFromComparison(product.id)} className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:text-red-500">
                        <X className="w-4 h-4" />
                      </button>

                      {/* Product Header */}
                      <div className="h-[280px] flex flex-col">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-gray-100">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold text-charcoal-900 leading-tight mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <Link to={`/productos/${product.id}`} className="mt-auto">
                          <Button size="sm" className="w-full rounded-lg">
                            Ver Detalles
                          </Button>
                        </Link>
                      </div>

                      {/* Stats */}
                      <div className="h-12 flex items-center text-lg font-bold text-primary-700">
                        {product.price.toFixed(2)}€
                      </div>
                      <div className="h-12 flex items-center gap-1">
                        <span className="font-bold">{product.rating}</span>
                        <span className="text-gray-400 text-sm">/ 5</span>
                      </div>
                      <div className="h-12 flex items-center font-medium text-charcoal-700">
                        {product.nutritionalInfo?.crudeProtein || '-'}
                      </div>
                      <div className="h-12 flex items-center font-medium text-charcoal-700">
                        {product.nutritionalInfo?.crudeFat || '-'}
                      </div>
                      <div className="h-12 flex items-center font-medium text-charcoal-700">
                        {product.nutritionalInfo?.kcalPer100g ? `${product.nutritionalInfo.kcalPer100g} kcal` : '-'}
                      </div>
                      <div className="h-auto min-h-[48px] flex flex-col gap-2">
                        {product.benefits.slice(0, 3).map((benefit, idx) => <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                            <Check className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{benefit}</span>
                          </div>)}
                      </div>
                    </div>)}
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
}