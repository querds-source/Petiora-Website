import React, { useState } from 'react';
import { X, Mail, Lock, User as UserIcon, ArrowRight, Github, Chrome } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function AuthModal({
  isOpen,
  onClose
}: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const {
    login,
    register
  } = useUser();
  if (!isOpen) return null;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(email);
    } else {
      register(name, email);
    }
    onClose();
  };
  return <AnimatePresence>
      {isOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

          <motion.div initial={{
        opacity: 0,
        scale: 0.95,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.95,
        y: 20
      }} transition={{
        type: 'spring',
        duration: 0.5
      }} className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden">
            {/* Header Pattern */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
              <div className="absolute inset-0 opacity-10 paw-pattern-bg"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm">
              <X className="w-5 h-5" />
            </button>

            <div className="relative pt-8 px-8 pb-8">
              {/* Logo/Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6 relative z-10 rotate-3 hover:rotate-0 transition-transform duration-300">
                <UserIcon className="w-8 h-8 text-primary-600" />
              </div>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-charcoal-900 mb-2 font-serif">
                  {isLogin ? 'Bienvenido de nuevo' : 'Únete a Petiora'}
                </h2>
                <p className="text-charcoal-500 text-sm max-w-xs mx-auto leading-relaxed">
                  {isLogin ? 'Accede a tu cuenta para gestionar tus pedidos y favoritos' : 'Crea tu cuenta y recibe un 10% de descuento en tu primera compra'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <AnimatePresence mode="popLayout">
                  {!isLogin && <motion.div initial={{
                opacity: 0,
                height: 0
              }} animate={{
                opacity: 1,
                height: 'auto'
              }} exit={{
                opacity: 0,
                height: 0
              }} className="overflow-hidden">
                      <Input label="Nombre completo" placeholder="Tu nombre" value={name} onChange={e => setName(e.target.value)} leftIcon={<UserIcon className="w-5 h-5" />} required={!isLogin} />
                    </motion.div>}
                </AnimatePresence>

                <Input label="Correo electrónico" type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} leftIcon={<Mail className="w-5 h-5" />} required />

                <div className="space-y-1">
                  <Input label="Contraseña" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} leftIcon={<Lock className="w-5 h-5" />} showPasswordToggle required />
                  {isLogin && <div className="text-right">
                      <button type="button" className="text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline">
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>}
                </div>

                <Button type="submit" className="w-full mt-2 shadow-lg shadow-primary-900/20" size="lg" fullWidth>
                  {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-charcoal-500 mb-4">
                    O continúa con
                  </p>
                  <div className="flex justify-center gap-4 mb-6">
                    <button className="p-3 rounded-xl border border-gray-200 hover:border-charcoal-300 hover:bg-gray-50 transition-all">
                      <Chrome className="w-5 h-5 text-charcoal-700" />
                    </button>
                    <button className="p-3 rounded-xl border border-gray-200 hover:border-charcoal-300 hover:bg-gray-50 transition-all">
                      <Github className="w-5 h-5 text-charcoal-700" />
                    </button>
                  </div>

                  <button onClick={() => setIsLogin(!isLogin)} className="text-sm font-medium text-charcoal-600 hover:text-primary-700 transition-colors">
                    {isLogin ? <>
                        ¿No tienes cuenta?{' '}
                        <span className="font-bold text-primary-600 underline decoration-2 decoration-primary-200 underline-offset-2">
                          Regístrate gratis
                        </span>
                      </> : <>
                        ¿Ya tienes cuenta?{' '}
                        <span className="font-bold text-primary-600 underline decoration-2 decoration-primary-200 underline-offset-2">
                          Inicia sesión
                        </span>
                      </>}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>}
    </AnimatePresence>;
}