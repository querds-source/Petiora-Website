import React, { useState, createContext, useContext } from 'react';
import { User } from '../utils/types';
import { useNotifications } from './NotificationsContext';
interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  register: (name: string, email: string) => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);
export function UserProvider({
  children
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const {
    addNotification
  } = useNotifications();
  const login = (email: string) => {
    // Mock login
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      createdAt: new Date()
    };
    setUser(mockUser);
    addNotification('success', `Bienvenido de nuevo, ${mockUser.name}`);
  };
  const register = (name: string, email: string) => {
    // Mock register
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      createdAt: new Date()
    };
    setUser(newUser);
    addNotification('success', `Cuenta creada con éxito. ¡Hola ${name}!`);
  };
  const logout = () => {
    setUser(null);
    addNotification('info', 'Has cerrado sesión correctamente');
  };
  return <UserContext.Provider value={{
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register
  }}>
      {children}
    </UserContext.Provider>;
}
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}