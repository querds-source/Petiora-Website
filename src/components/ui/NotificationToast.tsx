import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications } from '../../context/NotificationsContext';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
export function NotificationToast() {
  const {
    notifications,
    removeNotification
  } = useNotifications();
  const getNotificationStyles = (type: string) => {
    const styles = {
      success: {
        bg: 'bg-gradient-to-r from-emerald-50 to-emerald-100/50',
        border: 'border-l-4 border-emerald-500',
        icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
        iconBg: 'bg-emerald-100'
      },
      error: {
        bg: 'bg-gradient-to-r from-red-50 to-red-100/50',
        border: 'border-l-4 border-red-500',
        icon: <AlertCircle className="w-5 h-5 text-red-600" />,
        iconBg: 'bg-red-100'
      },
      warning: {
        bg: 'bg-gradient-to-r from-yellow-50 to-yellow-100/50',
        border: 'border-l-4 border-yellow-500',
        icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
        iconBg: 'bg-yellow-100'
      },
      info: {
        bg: 'bg-gradient-to-r from-blue-50 to-blue-100/50',
        border: 'border-l-4 border-blue-500',
        icon: <Info className="w-5 h-5 text-blue-600" />,
        iconBg: 'bg-blue-100'
      }
    };
    return styles[type as keyof typeof styles] || styles.info;
  };
  if (notifications.length === 0) return null;
  return <div className="fixed top-24 right-4 z-[100] flex flex-col gap-3 w-full max-w-sm pointer-events-none">
      <AnimatePresence mode="popLayout">
        {notifications.map((notification, index) => {
        const styles = getNotificationStyles(notification.type);
        return <motion.div key={notification.id} layout initial={{
          opacity: 0,
          x: 100,
          scale: 0.8
        }} animate={{
          opacity: 1,
          x: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          x: 100,
          scale: 0.8,
          transition: {
            duration: 0.2
          }
        }} transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
          delay: index * 0.05
        }} className="pointer-events-auto">
              <div className={`
                  flex items-start p-4 rounded-xl shadow-xl backdrop-blur-sm
                  ${styles.bg} ${styles.border}
                  border border-gray-100/50
                `}>
                <div className={`flex-shrink-0 mr-3 p-1.5 rounded-lg ${styles.iconBg}`}>
                  {styles.icon}
                </div>

                <div className="flex-1 mr-2 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 leading-snug">
                    {notification.message}
                  </p>
                </div>

                <motion.button whileHover={{
              scale: 1.1,
              rotate: 90
            }} whileTap={{
              scale: 0.9
            }} onClick={() => removeNotification(notification.id)} className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 hover:bg-white/50 rounded-lg transition-colors" aria-label="Cerrar notificación">
                  <X className="w-4 h-4" />
                </motion.button>

                {/* Progress Bar */}
                <motion.div initial={{
              scaleX: 1
            }} animate={{
              scaleX: 0
            }} transition={{
              duration: 5,
              ease: 'linear'
            }} className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 to-gray-400 origin-left rounded-b-xl" />
              </div>
            </motion.div>;
      })}
      </AnimatePresence>
    </div>;
}