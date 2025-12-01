import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('portfolio.project1Title'),
      category: t('portfolio.project1Cat'),
      image: "https://images.unsplash.com/photo-1634733301494-0a1251e27d0d?q=80&w=2832&auto=format&fit=crop",
      description: t('portfolio.project1Desc')
    },
    {
      id: 2,
      title: t('portfolio.project2Title'),
      category: t('portfolio.project2Cat'),
      image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2940&auto=format&fit=crop",
      description: t('portfolio.project2Desc')
    },
    {
      id: 3,
      title: t('portfolio.project3Title'),
      category: t('portfolio.project3Cat'),
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop",
      description: t('portfolio.project3Desc')
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{t('portfolio.title')}</h1>
          <p className="text-lg text-brand-cream opacity-70">
            {t('portfolio.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="group cursor-pointer bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-6 h-full flex flex-col"
                whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
              >
                <div className="relative overflow-hidden rounded-xl bg-brand-gray mb-6 aspect-video">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                  <div className="absolute inset-0 bg-brand-charcoal opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                </div>
                <div className="flex justify-between items-start flex-grow">
                  <div className='flex flex-col'>
                    <p className="text-sm font-bold text-brand-green uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-cream opacity-70 max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-brand-cream opacity-0 group-hover:opacity-100 group-hover:text-brand-green transition-all mt-2 rtl:rotate-180 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};