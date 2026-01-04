import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
interface AccordionItemProps {
  id: string;
  title: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  variant?: 'default' | 'bordered' | 'separated';
}
function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  variant = 'default'
}: AccordionItemProps) {
  const variants = {
    default: 'border-b border-gray-100 last:border-0',
    bordered: 'border border-gray-200 rounded-xl mb-3 overflow-hidden',
    separated: 'bg-white shadow-sm rounded-xl mb-4 border border-gray-50'
  };
  return <div className={variants[variant]}>
      <button onClick={onToggle} className={`
          w-full flex items-center justify-between py-4 px-4 text-left group
          ${isOpen ? 'bg-gray-50/50' : 'bg-transparent'}
          transition-colors duration-200
        `}>
        <span className="text-lg font-bold text-charcoal-900 group-hover:text-primary-700 transition-colors">
          {title}
        </span>
        <motion.div animate={{
        rotate: isOpen ? 180 : 0
      }} transition={{
        duration: 0.2
      }} className="text-gray-400 group-hover:text-primary-600">
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
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
        duration: 0.3,
        ease: 'easeInOut'
      }} className="overflow-hidden">
            <div className="p-4 pt-0 text-charcoal-600 leading-relaxed">
              {children}
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}
interface AccordionProps {
  items: {
    id: string;
    title: ReactNode;
    content: ReactNode;
  }[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  variant?: 'default' | 'bordered' | 'separated';
  className?: string;
}
export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  variant = 'default',
  className = ''
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);
  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id]);
    }
  };
  return <div className={`w-full ${className}`}>
      {items.map(item => <AccordionItem key={item.id} id={item.id} title={item.title} isOpen={openItems.includes(item.id)} onToggle={() => handleToggle(item.id)} variant={variant}>
          {item.content}
        </AccordionItem>)}
    </div>;
}