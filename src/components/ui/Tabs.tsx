import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}
interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}
export function Tabs({
  tabs,
  activeTab,
  onChange,
  className = '',
  variant = 'default'
}: TabsProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  return <div className={`flex flex-wrap gap-2 ${className}`}>
      {tabs.map(tab => <button key={tab.id} onClick={() => onChange(tab.id)} onMouseEnter={() => setHoveredTab(tab.id)} onMouseLeave={() => setHoveredTab(null)} className={`
            relative px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200 flex items-center gap-2
            ${activeTab === tab.id ? 'text-primary-800' : 'text-charcoal-500 hover:text-charcoal-800'}
          `}>
          {/* Active Background */}
          {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white shadow-soft-sm border border-gray-100 rounded-full z-0" transition={{
        type: 'spring',
        bounce: 0.2,
        duration: 0.6
      }} />}

          {/* Hover Background */}
          {hoveredTab === tab.id && activeTab !== tab.id && <motion.div layoutId="hoverTab" className="absolute inset-0 bg-gray-100 rounded-full z-0" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.2
      }} />}

          <span className="relative z-10 flex items-center gap-2">
            {tab.icon}
            {tab.label}
          </span>
        </button>)}
    </div>;
}