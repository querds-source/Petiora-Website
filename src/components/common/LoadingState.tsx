import React, { Children } from 'react';
import { Skeleton } from '../ui/Skeleton';
import { motion } from 'framer-motion';
interface LoadingStateProps {
  type?: 'card' | 'list' | 'hero' | 'text' | 'product-detail' | 'checkout' | 'dashboard';
  count?: number;
  className?: string;
  message?: string;
}
export function LoadingState({
  type = 'card',
  count = 1,
  className = '',
  message
}: LoadingStateProps) {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const renderContent = () => {
    if (type === 'card') {
      return <motion.div variants={containerVariants} initial="hidden" animate="visible" className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
          {Array.from({
          length: count
        }).map((_, i) => <motion.div key={i} variants={itemVariants} className="rounded-[2rem] overflow-hidden border border-gray-100 bg-white p-4 space-y-4">
              <Skeleton className="aspect-[4/5] w-full rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div className="flex justify-between items-center pt-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-10 w-24 rounded-lg" />
              </div>
            </motion.div>)}
        </motion.div>;
    }
    if (type === 'product-detail') {
      return <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${className}`}>
          <div className="space-y-4">
            <Skeleton className="aspect-square w-full rounded-3xl" />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => <Skeleton key={i} className="aspect-square rounded-xl" />)}
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-20 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-32 w-full rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full rounded-xl" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          </div>
        </div>;
    }
    if (type === 'checkout') {
      return <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${className}`}>
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-16 w-full rounded-xl" />
            <Skeleton className="h-64 w-full rounded-2xl" />
            <Skeleton className="h-48 w-full rounded-2xl" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-80 w-full rounded-2xl" />
          </div>
        </div>;
    }
    if (type === 'list') {
      return <motion.div variants={containerVariants} initial="hidden" animate="visible" className={`space-y-4 ${className}`}>
          {Array.from({
          length: count
        }).map((_, i) => <motion.div key={i} variants={itemVariants} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-white">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </motion.div>)}
        </motion.div>;
    }
    if (type === 'hero') {
      return <div className={`w-full h-[600px] relative overflow-hidden rounded-3xl ${className}`}>
          <Skeleton className="w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-6 max-w-2xl w-full px-8">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-2/3 mx-auto" />
              <Skeleton className="h-6 w-1/2 mx-auto" />
              <div className="flex justify-center gap-4 pt-4">
                <Skeleton className="h-12 w-40 rounded-full" />
                <Skeleton className="h-12 w-40 rounded-full" />
              </div>
            </div>
          </div>
        </div>;
    }
    return <div className={`space-y-2 ${className}`}>
        {Array.from({
        length: count
      }).map((_, i) => <Skeleton key={i} className="h-4 w-full" />)}
      </div>;
  };
  return <div className="w-full">
      {renderContent()}
      {message && <motion.p initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} className="text-center text-charcoal-500 text-sm mt-4 font-medium animate-pulse">
          {message}
        </motion.p>}
    </div>;
}