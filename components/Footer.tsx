import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadLogo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const svgContent = `<svg viewBox="0 0 100 100" width="512" height="512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Apex Synex Logo"><defs><linearGradient id="synexGradient" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#D0A9FF" /><stop offset="100%" stopColor="#A3D8FF" /></linearGradient><filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g stroke="url(#synexGradient)" strokeWidth="7" strokeLinecap="round"><path d="M 40 90 C 40 70, 45 40, 50 22" /><path d="M 60 90 C 60 70, 55 40, 50 22" /></g><g><circle cx="50" cy="16" r="8" fill="#A8E1A3" filter="url(#glow)" /></g></svg>`;
    
    // This is the most robust client-side method.
    // It URI-encodes the SVG string into a data URL. This "bakes" the styles into the URL,
    // which prevents the browser from losing references to internal <defs> like gradients and filters.
    const dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent);
    
    const image = new Image();
    image.src = dataUrl;
    
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(image, 0, 0, 512, 512);
        const pngUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = pngUrl;
        a.download = 'apex-synex-logo.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    };

    image.onerror = (err) => {
      console.error("Failed to load SVG for PNG conversion", err);
      alert("We're sorry, the logo download failed. Please try a different browser or contact support.");
    };
  };

  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 text-brand-cream pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
               <Logo className="h-8 w-8" />
               <span className="text-xl font-bold tracking-wide">APEX SYNEX</span>
            </div>
            <p className="text-brand-cream opacity-70 max-w-sm mb-4 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 opacity-80">
              <li><a href="#/" className="hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#/services" className="hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#/portfolio" className="hover:text-white transition-colors">{t('nav.portfolio')}</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">{t('nav.contact')}</a></li>
              <li><a href="#" onClick={handleDownloadLogo} className="hover:text-white transition-colors">{t('footer.downloadLogo')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.connect')}</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-brand-green/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-brand-green/30 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-brand-green/30 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Mail className="h-4 w-4 opacity-70" />
              <span className="text-sm font-sans opacity-70" dir="ltr">hello@apexsynex.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};