
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        // Brand Palette - Refined for professional look with richer tones
        primary: {
          50: '#F2F7F5',
          100: '#E1EBE6',
          200: '#C2D6CD',
          300: '#9EBDB0',
          400: '#7C9885',
          500: '#5D7A69',
          600: '#2D4A3E', // Main Brand Color (Deep Forest)
          700: '#243B32',
          800: '#1C2E27',
          900: '#15211C',
          950: '#0D1411',
        },
        secondary: {
          50: '#FBF5F2',
          100: '#F5E8E1',
          200: '#EBD2C4',
          300: '#DEBAA6',
          400: '#D1A187',
          500: '#C87951', // Accent (Terracotta)
          600: '#A85D38',
          700: '#8A482A',
          800: '#6E3821',
          900: '#542A18',
          950: '#33190E',
        },
        charcoal: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
          950: '#121416', // Deepest dark
        },
        cream: {
          50: '#FFFFFF',
          100: '#FAF9F6', // Off-white
          200: '#F4F1EA', // Soft Cream
          300: '#EBE6DB',
          400: '#E0D9CC',
          500: '#D1C7B5',
        },
        // Semantic Colors
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.6rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.875rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.375rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        // Standard Tailwind shadows mapped to soft shadows for consistency if used accidentally
        'sm': '0 1px 2px rgba(45, 74, 62, 0.08)',
        'DEFAULT': '0 2px 8px rgba(45, 74, 62, 0.10)',
        'md': '0 4px 16px rgba(45, 74, 62, 0.12), 0 2px 4px rgba(45, 74, 62, 0.08)',
        'lg': '0 8px 24px rgba(45, 74, 62, 0.15), 0 4px 8px rgba(45, 74, 62, 0.10)',
        'xl': '0 12px 32px rgba(45, 74, 62, 0.18), 0 8px 16px rgba(45, 74, 62, 0.12)',
        '2xl': '0 20px 48px rgba(45, 74, 62, 0.20), 0 12px 24px rgba(45, 74, 62, 0.15)',
        
        // Enhanced Shadow System - Stronger & Deeper (0.08 - 0.20 opacity)
        'soft-xs': '0 1px 2px rgba(45, 74, 62, 0.08)',
        'soft-sm': '0 2px 8px rgba(45, 74, 62, 0.10)',
        'soft-md': '0 4px 16px rgba(45, 74, 62, 0.12), 0 2px 4px rgba(45, 74, 62, 0.08)',
        'soft-lg': '0 8px 24px rgba(45, 74, 62, 0.15), 0 4px 8px rgba(45, 74, 62, 0.10)',
        'soft-xl': '0 12px 32px rgba(45, 74, 62, 0.18), 0 8px 16px rgba(45, 74, 62, 0.12)',
        'soft-2xl': '0 20px 48px rgba(45, 74, 62, 0.20), 0 12px 24px rgba(45, 74, 62, 0.15)',
        
        'glow-primary': '0 0 32px rgba(45,74,62,0.25)',
        'glow-secondary': '0 0 32px rgba(200,121,81,0.25)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.5)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fadeInDown': 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slideUp': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'shimmer-fast': 'shimmer 1.5s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'ripple': 'ripple 0.6s linear',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.4' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      },
    },
  },
  plugins: [],
}
