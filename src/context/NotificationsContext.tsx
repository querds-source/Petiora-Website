import React, { useCallback, useState, createContext, useContext } from 'react';
import { Notification } from '../utils/types';
interface NotificationsContextType {
  notifications: Notification[];
  addNotification: (type: Notification['type'], message: string) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}
const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);
export function NotificationsProvider({
  children
}: {
  children: ReactNode;
}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);
  const addNotification = useCallback((type: Notification['type'], message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newNotification: Notification = {
      id,
      type,
      message,
      timestamp: Date.now()
    };
    setNotifications(prev => [...prev, newNotification]);
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  }, [removeNotification]);
  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);
  return <NotificationsContext.Provider value={{
    notifications,
    addNotification,
    removeNotification,
    clearNotifications
  }}>
      {children}
    </NotificationsContext.Provider>;
}
export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
}