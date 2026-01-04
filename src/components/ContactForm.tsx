import React, { useState } from 'react';
import { SendIcon, CheckCircle2, Mail, User, Phone, MessageSquare, Sparkles, ChevronDown, AlertCircle, Shield, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import confetti from 'canvas-confetti';
interface ContactFormProps {
  serviceId?: string;
}
export function ContactForm({
  serviceId
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: serviceId || '',
    message: '',
    petName: '',
    petType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'El nombre es obligatorio';else if (value.trim().length < 2) error = 'El nombre debe tener al menos 2 caracteres';
        break;
      case 'email':
        if (!value.trim()) error = 'El email es obligatorio';else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email no válido';
        break;
      case 'phone':
        if (value && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(value)) {
          error = 'Formato de teléfono no válido';
        }
        break;
      case 'message':
        if (!value.trim()) error = 'El mensaje es obligatorio';else if (value.trim().length < 10) error = 'El mensaje debe tener al menos 10 caracteres';
        break;
    }
    return error;
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      message: true
    });
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          y: 0.6
        },
        colors: ['#2563EB', '#10B981', '#F59E0B']
      });
    } catch (e) {
      console.error('Confetti error:', e);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };
  const handleBlur = (field: string) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e as unknown as FormEvent);
    }
  };
  if (isSubmitted) {
    return <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      type: 'spring',
      stiffness: 300,
      damping: 25
    }} className="text-center py-20 px-8 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 rounded-[2.5rem] border-2 border-emerald-100 shadow-soft-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative z-10">
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1,
          rotate: [0, 10, -10, 0]
        }} transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 500,
          damping: 25
        }} className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-soft-xl">
            <CheckCircle2 className="h-14 w-14 text-white" />
          </motion.div>

          <motion.h3 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 font-serif">
            ¡Mensaje enviado con éxito!
          </motion.h3>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-charcoal-600 leading-relaxed text-lg mb-10 max-w-md mx-auto">
            Gracias por contactarnos,{' '}
            <span className="font-bold text-charcoal-900">{formData.name}</span>
            . Nuestro equipo te responderá en menos de 24 horas.
          </motion.p>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: serviceId || '',
              message: '',
              petName: '',
              petType: ''
            });
            setTouched({});
            setErrors({});
          }} className="rounded-full shadow-soft-lg hover:shadow-soft-xl">
              Enviar otro mensaje
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/'} className="rounded-full">
              Volver al inicio
            </Button>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-charcoal-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Datos protegidos</span>
            </div>
          </div>
        </div>
      </motion.div>;
  }
  const formProgress = Object.entries(formData).filter(([key, value]) => ['name', 'email', 'message'].includes(key) && value.trim()).length / 3 * 100;
  return <motion.form initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-8">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            Progreso del formulario
          </span>
          <Badge variant="primary" size="sm" className="font-bold">
            {Math.round(formProgress)}%
          </Badge>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
          <motion.div initial={{
          width: 0
        }} animate={{
          width: `${formProgress}%`
        }} transition={{
          duration: 0.5,
          ease: 'easeOut'
        }} className="h-full bg-gradient-to-r from-primary-600 to-primary-400 relative rounded-full">
            <motion.div animate={{
            x: ['-100%', '200%']
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-charcoal-900 flex items-center gap-2">
          <User className="w-5 h-5 text-primary-600" />
          Información Personal
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input label="Nombre completo" name="name" value={formData.name} onChange={handleChange} onBlur={() => handleBlur('name')} error={touched.name ? errors.name : ''} success={touched.name && !errors.name && formData.name.trim().length > 0} leftIcon={<User className="h-5 w-5" />} placeholder="Tu nombre" required />
          <Input label="Correo electrónico" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={() => handleBlur('email')} error={touched.email ? errors.email : ''} success={touched.email && !errors.email && formData.email.trim().length > 0} leftIcon={<Mail className="h-5 w-5" />} placeholder="tu@email.com" required />
        </div>

        <Input label="Teléfono (opcional)" name="phone" type="tel" value={formData.phone} onChange={handleChange} onBlur={() => handleBlur('phone')} error={touched.phone ? errors.phone : ''} leftIcon={<Phone className="h-5 w-5" />} placeholder="+34 XXX XXX XXX" helperText="Te llamaremos si necesitamos aclarar algo" />
      </div>

      {/* Pet Information (Optional) */}
      <div className="space-y-6 p-6 bg-primary-50/30 rounded-2xl border border-primary-100">
        <h3 className="text-lg font-bold text-charcoal-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary-600" />
          Información de tu Mascota (Opcional)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input label="Nombre de tu mascota" name="petName" value={formData.petName} onChange={handleChange} placeholder="Ej: Max, Luna..." />
          <div>
            <label className="block text-sm font-bold text-charcoal-900 mb-2">
              Tipo de mascota
            </label>
            <div className="relative group">
              <select name="petType" value={formData.petType} onChange={handleChange} className="w-full pl-4 pr-10 py-3.5 border-2 border-gray-200 rounded-xl text-base text-charcoal-900 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/10 transition-all appearance-none bg-white hover:border-gray-300 cursor-pointer">
                <option value="">Selecciona</option>
                <option value="dog">Perro</option>
                <option value="cat">Gato</option>
                <option value="other">Otro</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Message Details */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-charcoal-900 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary-600" />
          Tu Consulta
        </h3>

        <div>
          <label className="block text-sm font-bold text-charcoal-900 mb-2">
            Asunto
          </label>
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors pointer-events-none" />
            <select name="subject" value={formData.subject} onChange={handleChange} className="w-full pl-12 pr-10 py-3.5 border-2 border-gray-200 rounded-xl text-base text-charcoal-900 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/10 transition-all appearance-none bg-white hover:border-gray-300 cursor-pointer">
              <option value="">Selecciona un asunto</option>
              <option value="general">Consulta general</option>
              <option value="products">Información sobre productos</option>
              <option value="nutritional-consulting">
                Asesoramiento nutricional
              </option>
              <option value="health-wellness">Salud y bienestar</option>
              <option value="orders">Pedidos y envíos</option>
              <option value="returns">Devoluciones y cambios</option>
              <option value="subscription">Suscripciones</option>
              <option value="veterinary">Consulta veterinaria</option>
              <option value="other">Otro</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-charcoal-900 mb-2">
            Mensaje *
          </label>
          <div className="relative group">
            <textarea name="message" value={formData.message} onChange={handleChange} onBlur={() => handleBlur('message')} rows={6} maxLength={1000} className={`w-full px-5 py-4 border-2 rounded-2xl text-base focus:outline-none focus:ring-4 transition-all resize-none ${touched.message && errors.message ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/10 bg-rose-50/30' : 'border-gray-200 focus:border-primary-600 focus:ring-primary-600/10 hover:border-gray-300'}`} placeholder="¿En qué podemos ayudarte? Cuéntanos con detalle tu consulta..." />
            <div className="absolute bottom-4 right-4 text-xs text-charcoal-400 font-bold bg-white/90 px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-sm border border-gray-100">
              {formData.message.length}/1000
            </div>
          </div>
          <AnimatePresence>
            {touched.message && errors.message && <motion.p initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -10
          }} className="mt-2 text-sm text-rose-600 font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {errors.message}
              </motion.p>}
          </AnimatePresence>
        </div>
      </div>

      {/* Submit Button */}
      <motion.div whileHover={{
      scale: 1.01
    }} whileTap={{
      scale: 0.99
    }}>
        <Button type="submit" variant="primary" size="xl" disabled={isSubmitting} fullWidth className="h-16 text-lg font-bold shadow-soft-xl hover:shadow-soft-2xl transition-all rounded-2xl">
          {isSubmitting ? <>
              <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
              <span>Enviando mensaje...</span>
            </> : <>
              <SendIcon className="h-5 w-5 mr-2" />
              Enviar mensaje
              <Sparkles className="h-4 w-4 ml-2" />
            </>}
        </Button>
      </motion.div>

      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
        <p className="text-xs text-charcoal-500 text-center sm:text-left leading-relaxed">
          Al enviar aceptas nuestra{' '}
          <a href="/privacidad" className="text-primary-600 hover:underline font-bold">
            política de privacidad
          </a>
        </p>
        <div className="flex items-center gap-4 text-xs text-charcoal-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary-600" />
            <span>Respuesta en 24h</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>Datos seguros</span>
          </div>
        </div>
      </div>
    </motion.form>;
}