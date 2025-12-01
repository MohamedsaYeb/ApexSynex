import React from 'react';
import { Layout, Zap, Layers, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: t('services.service1Title'),
      description: t('services.service1Desc')
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: t('services.service2Title'),
      description: t('services.service2Desc')
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: t('services.service3Title'),
      description: t('services.service3Desc')
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: t('services.service4Title'),
      description: t('services.service4Desc')
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t('services.title')}</h1>
          <p className="text-lg text-brand-cream opacity-70 max-w-2xl mx-auto">
            {t('services.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:border-white/20 hover:bg-black/30 group"
            >
              <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green/30 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-brand-cream opacity-70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};