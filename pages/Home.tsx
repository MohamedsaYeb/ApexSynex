import React from 'react';
import { Button } from '../components/Button';
import { ArrowRight, ArrowLeft, Code, Layout, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl text-brand-cream opacity-80 mb-8 max-w-lg leading-relaxed">
              {t('home.heroSub')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="flex items-center justify-center gap-2">
                  {t('home.startProject')} <ArrowIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline">{t('home.viewWork')}</Button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center items-center">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" 
               alt="Data analytics dashboard" 
               className="relative rounded-2xl shadow-2xl z-10 border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500"
             />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t('home.philosophy')}</h2>
            <p className="text-lg text-brand-cream opacity-70 max-w-2xl mx-auto">
              {t('home.philosophySub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center transition-all duration-300 hover:border-white/20 hover:bg-black/30">
              <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Layout className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{t('home.feature1Title')}</h3>
              <p className="text-brand-cream opacity-70 leading-relaxed">
                {t('home.feature1Desc')}
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center transition-all duration-300 hover:border-white/20 hover:bg-black/30">
              <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{t('home.feature2Title')}</h3>
              <p className="text-brand-cream opacity-70 leading-relaxed">
                {t('home.feature2Desc')}
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center transition-all duration-300 hover:border-white/20 hover:bg-black/30">
              <div className="w-16 h-16 bg-brand-lavender/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{t('home.feature3Title')}</h3>
              <p className="text-brand-cream opacity-70 leading-relaxed">
                {t('home.feature3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12">
            <blockquote className="text-2xl md:text-3xl font-light italic text-white leading-relaxed">
              {t('home.quote')}
            </blockquote>
            <div className="mt-8 font-bold text-brand-cream">{t('home.author')}</div>
          </div>
        </div>
      </section>
    </div>
  );
};