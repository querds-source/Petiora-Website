import React from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../../data/company';
export function Timeline() {
  return <section className="py-8 relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/0 via-primary-500/30 to-primary-500/0"></div>

      <div className="space-y-16 md:space-y-24">
        {timelineEvents.map((event, index) => {
        const isEven = index % 2 === 0;
        const Icon = event.icon;
        return <motion.div key={event.year} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.6,
          delay: index * 0.15
        }} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              {/* Content Card */}
              <div className="flex-1 w-full pl-12 md:pl-0 md:px-12">
                <div className={`bg-white p-8 lg:p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-100 transition-all duration-500 relative group ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  {/* Arrow for desktop */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-gray-100 transform rotate-45 transition-colors duration-300 group-hover:border-primary-100 ${isEven ? '-left-3 border-t-0 border-r-0 border-b border-l' : '-right-3 border-t border-r border-b-0 border-l-0'}`}></div>

                  {/* Year Badge */}
                  <div className={`flex items-center gap-3 mb-6 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 font-bold text-lg shadow-sm">
                      <Icon className="w-5 h-5" />
                      {event.year}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-charcoal-900 mb-4 group-hover:text-primary-700 transition-colors font-serif">
                    {event.title}
                  </h3>

                  <p className="text-base lg:text-lg text-charcoal-600 leading-relaxed font-light">
                    {event.description}
                  </p>

                  {/* Decorative gradient */}
                  <div className={`absolute bottom-0 ${isEven ? 'left-0' : 'right-0'} w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                </div>
              </div>

              {/* Center Dot with Icon */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-primary-500 shadow-lg z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>

              {/* Empty Space for layout balance */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>;
      })}
      </div>

      {/* End Marker */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} viewport={{
      once: true
    }} transition={{
      delay: timelineEvents.length * 0.15
    }} className="relative mt-16 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-xl flex items-center justify-center text-white font-bold text-sm border-4 border-white">
          Hoy
        </div>
      </motion.div>
    </section>;
}