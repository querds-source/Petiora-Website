import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, ShieldCheck, CreditCard, Truck, Heart } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';
export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    shop: [{
      name: 'Perros',
      path: '/productos?category=dog-food'
    }, {
      name: 'Gatos',
      path: '/productos?category=cat-food'
    }, {
      name: 'Snacks',
      path: '/productos?category=snacks'
    }, {
      name: 'Suplementos',
      path: '/productos?category=care'
    }, {
      name: 'Novedades',
      path: '/productos?sort=newest'
    }],
    company: [{
      name: 'Sobre Nosotros',
      path: '/nosotros'
    }, {
      name: 'Blog',
      path: '/blog'
    }, {
      name: 'Sostenibilidad',
      path: '/sostenibilidad'
    }, {
      name: 'Carreras',
      path: '/carreras'
    }, {
      name: 'Prensa',
      path: '/prensa'
    }],
    support: [{
      name: 'Ayuda y FAQ',
      path: '/faq'
    }, {
      name: 'Envíos y Devoluciones',
      path: '/envios'
    }, {
      name: 'Contacto',
      path: '/contacto'
    }, {
      name: 'Mi Cuenta',
      path: '/cuenta'
    }, {
      name: 'Seguimiento de Pedido',
      path: '/cuenta/pedidos'
    }],
    legal: [{
      name: 'Privacidad',
      path: '/privacidad'
    }, {
      name: 'Términos',
      path: '/terminos'
    }, {
      name: 'Cookies',
      path: '/cookies'
    }]
  };
  return <footer className="bg-charcoal-900 text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background Pattern - Refined */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="text-white transition-transform duration-500 ease-out-expo group-hover:rotate-3 group-hover:scale-110">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 36C26.6274 36 32 30.6274 32 24C32 17.3726 26.6274 12 20 12C13.3726 12 8 17.3726 8 24C8 30.6274 13.3726 36 20 36Z" fill="currentColor" fillOpacity="0.15" />
                    <path d="M20 32C24.4183 32 28 28.4183 28 24C28 19.5817 24.4183 16 20 16C15.5817 16 12 19.5817 12 24C12 28.4183 15.5817 32 20 32Z" fill="currentColor" />
                    <path d="M20 4C21.6569 4 23 5.34315 23 7C23 8.65685 21.6569 10 20 10C18.3431 10 17 8.65685 17 7C17 5.34315 18.3431 4 20 4Z" fill="currentColor" />
                    <path d="M28.5 7C29.8807 7 31 8.11929 31 9.5C31 10.8807 29.8807 12 28.5 12C27.1193 12 26 10.8807 26 9.5C26 8.11929 27.1193 7 28.5 7Z" fill="currentColor" />
                    <path d="M11.5 7C12.8807 7 14 8.11929 14 9.5C14 10.8807 12.8807 12 11.5 12C10.1193 12 9 10.8807 9 9.5C9 8.11929 10.1193 7 11.5 7Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight font-serif leading-none">
                    Petiora
                  </span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.25em] mt-0.5 ml-0.5">
                    Nutrición Clínica
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Revolucionando la salud de las mascotas con nutrición real, fresca
              y respaldada por la ciencia. Porque ellos son familia.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary-400 hover:scale-110 hover:shadow-glow-primary transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary-400 hover:scale-110 hover:shadow-glow-primary transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary-400 hover:scale-110 hover:shadow-glow-primary transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <a href="mailto:hola@petiora.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 group-hover:text-primary-400 transition-colors" />
                hola@petiora.com
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-lg font-serif">Tienda</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm relative group">
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>)}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-lg font-serif">Compañía</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm relative group">
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>)}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-bold text-lg font-serif">Únete a la Manada</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recibe consejos veterinarios, ofertas exclusivas y novedades sobre
              nutrición.
            </p>
            <NewsletterSignup />
            <div className="pt-6 flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4" />
              <span>Tus datos están 100% seguros con nosotros.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © {currentYear} Petiora. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {footerLinks.legal.map(link => <Link key={link.path} to={link.path} className="hover:text-white transition-colors">
                {link.name}
              </Link>)}
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <CreditCard className="w-5 h-5" />
            <Truck className="w-5 h-5" />
            <div className="flex items-center gap-1 text-xs">
              <span>Hecho con</span>
              <Heart className="w-3 h-3 text-rose-500 fill-current animate-pulse-slow" />
              <span>en España</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}