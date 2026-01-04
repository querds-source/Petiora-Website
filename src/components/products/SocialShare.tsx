import React, { useState, Component } from 'react';
import { Share2, Facebook, Twitter, Mail, Link as LinkIcon } from 'lucide-react';
import { useNotifications } from '../../context/NotificationsContext';
interface SocialShareProps {
  title: string;
  url?: string;
}
export function SocialShare({
  title,
  url = window.location.href
}: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    addNotification
  } = useNotifications();
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    addNotification('success', 'Enlace copiado al portapapeles');
    setIsOpen(false);
  };
  const shareLinks = [{
    name: 'Facebook',
    icon: Facebook,
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    color: 'hover:bg-blue-600'
  }, {
    name: 'Twitter',
    icon: Twitter,
    url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    color: 'hover:bg-sky-500'
  }, {
    name: 'Email',
    icon: Mail,
    url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    color: 'hover:bg-gray-600'
  }];
  return <div className="relative inline-block">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors" title="Compartir">
        <Share2 className="w-5 h-5" />
      </button>

      {isOpen && <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-20 overflow-hidden animate-fadeIn">
            <div className="p-1">
              {shareLinks.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:text-white rounded-md transition-colors ${link.color}`} onClick={() => setIsOpen(false)}>
                  <link.icon className="w-4 h-4 mr-3" />
                  {link.name}
                </a>)}
              <button onClick={handleCopyLink} className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-emerald-500 rounded-md transition-colors">
                <LinkIcon className="w-4 h-4 mr-3" />
                Copiar enlace
              </button>
            </div>
          </div>
        </>}
    </div>;
}