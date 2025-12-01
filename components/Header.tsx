import React, { useState } from 'react';
import { Menu, X, Rocket, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, toggleLanguage, language } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-white font-bold border-b-2 border-brand-green" 
      : "text-brand-cream hover:text-white transition-colors";
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-charcoal/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <Logo className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-2xl font-bold text-brand-cream tracking-wide">
              APEX SYNEX
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`${isActive(link.path)} text-base font-medium px-1 py-2`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button>{t('nav.getStarted')}</Button>
            </Link>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-brand-cream hover:text-white transition-colors"
              title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              <Globe className="w-5 h-5" />
              <span className="uppercase font-bold text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-brand-cream hover:text-white transition-colors"
            >
              <span className="uppercase font-bold text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={toggleMenu}
              className="text-brand-cream hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-charcoal/50 backdrop-blur-xl border-t border-white/10 pb-6">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-cream hover:bg-white/10"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
               <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button fullWidth>{t('nav.getStarted')}</Button>
               </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};