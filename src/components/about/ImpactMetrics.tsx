import React from 'react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../../data/company';
export function ImpactMetrics() {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {impactMetrics.map((metric, index) => {
      const Icon = metric.icon;
      return <motion.div key={index} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: index * 0.1
      }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${metric.bg} ${metric.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-[#2C3333] mb-2 tracking-tight">
              {metric.value}
            </div>
            <div className="text-base font-bold text-[#7C9885] mb-2 uppercase tracking-wide text-xs">
              {metric.label}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              {metric.description}
            </p>
          </motion.div>;
    })}
    </div>;
}