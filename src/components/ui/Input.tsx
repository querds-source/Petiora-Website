import React, { useState, forwardRef } from 'react';
import { AlertCircle, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
  showCharacterCount?: boolean;
  maxLength?: number;
  strengthIndicator?: boolean;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className = '',
  label,
  error,
  success,
  helperText,
  leftIcon,
  rightIcon,
  showPasswordToggle,
  showCharacterCount,
  maxLength,
  strengthIndicator,
  type = 'text',
  value,
  onChange,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [localValue, setLocalValue] = useState(value || '');
  const id = props.id || props.name || Math.random().toString(36).substr(2, 9);
  const inputType = showPasswordToggle ? showPassword ? 'text' : 'password' : type;
  const currentLength = typeof value === 'string' ? value.length : typeof localValue === 'string' ? localValue.length : 0;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    onChange?.(e);
  };
  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length > 7) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };
  const strength = strengthIndicator && typeof value === 'string' ? getPasswordStrength(value as string) : 0;
  const strengthColors = ['bg-gray-200', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-emerald-500'];
  const strengthLabels = ['', 'Débil', 'Regular', 'Buena', 'Fuerte'];
  return <div className="w-full space-y-1.5">
        <div className="flex justify-between items-end">
          {label && <label htmlFor={id} className={`block text-sm font-bold transition-colors duration-300 ${error ? 'text-red-600' : isFocused ? 'text-primary-700' : 'text-charcoal-700'}`}>
              {label}
            </label>}
          {showCharacterCount && maxLength && <span className={`text-[10px] font-medium ${currentLength >= maxLength ? 'text-red-500' : 'text-charcoal-400'}`}>
              {currentLength}/{maxLength}
            </span>}
        </div>

        <div className="relative group">
          {leftIcon && <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none ${isFocused ? 'text-primary-600 scale-110' : 'text-charcoal-400'}`}>
              {leftIcon}
            </div>}

          <input ref={ref} id={id} type={inputType} maxLength={maxLength} value={value} onChange={handleChange} className={`
              w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all duration-300
              placeholder:text-charcoal-500
              focus:outline-none focus:ring-2 focus:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon || showPasswordToggle || !rightIcon && (error || success) ? 'pr-10' : ''}
              ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : success ? 'border-green-300 focus:border-green-500 focus:ring-green-200' : 'border-gray-200 hover:border-gray-300 focus:border-primary-500 focus:ring-primary-100'}
              ${className}
            `} onFocus={e => {
        setIsFocused(true);
        props.onFocus?.(e);
      }} onBlur={e => {
        setIsFocused(false);
        props.onBlur?.(e);
      }} aria-invalid={!!error} {...props} />

          {/* Right Icon or Toggle */}
          {(rightIcon || showPasswordToggle) && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400">
              {showPasswordToggle ? <button type="button" onClick={() => setShowPassword(!showPassword)} className="p-1 hover:text-primary-600 transition-colors focus:outline-none" tabIndex={-1}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button> : rightIcon}
            </div>}

          {/* Status Icons (only if no right icon/toggle) */}
          {!rightIcon && !showPasswordToggle && <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <AnimatePresence mode="wait">
                {error ? <motion.div initial={{
            scale: 0,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0,
            opacity: 0
          }} transition={{
            duration: 0.2
          }}>
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </motion.div> : success ? <motion.div initial={{
            scale: 0,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0,
            opacity: 0
          }} transition={{
            duration: 0.2
          }}>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </motion.div> : null}
              </AnimatePresence>
            </div>}
        </div>

        {/* Password Strength Indicator */}
        {strengthIndicator && <div className="space-y-1 mt-1">
            <div className="flex gap-1 h-1">
              {[1, 2, 3, 4].map(level => <div key={level} className={`flex-1 rounded-full transition-colors duration-300 ${strength >= level ? strengthColors[strength] : 'bg-gray-100'}`} />)}
            </div>
            {strength > 0 && <p className={`text-[10px] font-medium text-right ${strengthColors[strength].replace('bg-', 'text-')}`}>
                {strengthLabels[strength]}
              </p>}
          </div>}

        <AnimatePresence mode="wait">
          {error ? <motion.p initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="text-xs font-medium text-red-600 flex items-center gap-1">
              {error}
            </motion.p> : helperText ? <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="text-xs text-charcoal-500">
              {helperText}
            </motion.p> : null}
        </AnimatePresence>
      </div>;
});
Input.displayName = 'Input';