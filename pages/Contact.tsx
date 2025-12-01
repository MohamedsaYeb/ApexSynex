import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact.success'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-black/20 backdrop-blur-2xl rounded-3xl border border-white/10 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{t('contact.title')}</h1>
            <p className="text-brand-cream opacity-70 mb-8 leading-relaxed">
              {t('contact.sub')}
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-brand-cream mb-2">{t('contact.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg backdrop-blur-sm focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 outline-none transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-brand-cream mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg backdrop-blur-sm focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 outline-none transition-all"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-brand-cream mb-2">{t('contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg backdrop-blur-sm focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 outline-none transition-all resize-none"
                  required
                />
              </div>

              <Button type="submit" fullWidth className="flex justify-center items-center gap-2">
                {t('contact.send')} <Send className="w-4 h-4 rtl:rotate-180" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
