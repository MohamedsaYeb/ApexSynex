import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    [key: string]: string | string[];
  };
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    footer: {
      desc: 'We architect and build high-performance digital experiences that are calm, robust, and innovative. Elevating your business with serene design and powerful technology.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      rights: 'Apex Synex. All rights reserved.',
      downloadLogo: 'Download Logo',
    },
    home: {
      heroTitle: 'Engineering Digital Serenity',
      heroSub: 'We build high-performance, real-time web applications that are as robust in their engineering as they are elegant in their design. Let\'s build the future, instantly.',
      startProject: 'Start Your Project',
      viewWork: 'View Our Work',
      philosophy: 'Our Technical Philosophy',
      philosophySub: 'We innovate with purpose, ensuring every line of code contributes to a seamless, powerful, and scalable final product.',
      feature1Title: 'UX & Frontend Mastery',
      feature1Desc: 'We don\'t just build interfaces; we forge butter-smooth experiences using React & TypeScript that feel intuitive and alive.',
      feature2Title: 'Real-Time Engineering',
      feature2Desc: 'Experience zero-latency data sync. Our systems provide instant state reflection, creating dynamic, living applications.',
      feature3Title: 'Full-Stack Synergy',
      feature3Desc: 'We guarantee clean, scalable code across the entire stack, ensuring robustness from the database to the DOM.',
      quote: '"Apex Synex delivered a platform that feels alive. The real-time updates are a game-changer, and the design is simply world-class."',
      author: '— Alex Chen, CEO of Nova Financial',
    },
    services: {
      title: 'Our Capabilities',
      sub: 'We provide end-to-end solutions, transforming ambitious ideas into market-ready digital products.',
      service1Title: 'Frontend Mastery & UX Alchemy',
      service1Desc: 'We don\'t just build UIs; we forge experiences. Using React & TypeScript, we create butter-smooth, responsive designs that feel intuitive and alive.',
      service2Title: 'Real-Time Backend Architecture',
      service2Desc: 'Experience the power of zero-latency. Our backends provide instant data synchronization, creating dynamic applications that reflect changes as they happen. No refreshes, just seamless interaction.',
      service3Title: 'Full-Stack Synergy',
      service3Desc: 'We ensure a harmonious and robust connection between the frontend and backend, guaranteeing performant, scalable, and maintainable code across the entire stack.',
      service4Title: 'Strategic Deployment & Security',
      service4Desc: 'We implement comprehensive security measures and optimized deployment pipelines to ensure your application is fast, reliable, and secure from day one.',
    },
    portfolio: {
      title: 'Our Work',
      sub: 'A showcase of our commitment to technical excellence and design innovation.',
      project1Title: 'GustoDash - Restaurant OS',
      project1Cat: 'Real-Time Dashboard',
      project1Desc: 'A real-time operational dashboard for a high-volume restaurant, synchronizing orders instantly from POS to kitchen.',
      project2Title: 'Aura - Luxury Retail',
      project2Cat: 'E-Commerce Platform',
      project2Desc: 'An elite e-commerce experience with fluid navigation, instant search, and a visually stunning product showcase.',
      project3Title: 'Metropolis - Real Estate',
      project3Cat: 'Elite Real Estate Portal',
      project3Desc: 'A sophisticated portal for a luxury real estate agency, featuring immersive property listings and elegant animations.',
    },
    contact: {
      title: 'Let\'s Build',
      sub: 'Have an idea? We have the engineering expertise. Let\'s connect and create something exceptional.',
      name: 'Name',
      email: 'Email',
      message: 'Tell us about your project',
      send: 'Initiate Contact',
      success: "Message received. We're reviewing the details and will be in touch shortly.",
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      contact: 'تواصل معنا',
      getStarted: 'ابدأ الآن',
    },
    footer: {
      desc: 'نهندس ونبني تجارب رقمية عالية الأداء تتميز بالهدوء والقوة والابتكار. نرتقي بعملك بتصاميم هادئة وتكنولوجيا قوية.',
      quickLinks: 'روابط سريعة',
      connect: 'تواصل',
      rights: 'أبيكس سينيكس. جميع الحقوق محفوظة.',
      downloadLogo: 'تحميل الشعار',
    },
    home: {
      heroTitle: 'هندسة الصفاء الرقمي',
      heroSub: 'نبني تطبيقات ويب عالية الأداء تعمل في الزمن الفعلي، قوية في هندستها وأنيقة في تصميمها. لنبني المستقبل، فوراً.',
      startProject: 'ابدأ مشروعك',
      viewWork: 'شاهد أعمالنا',
      philosophy: 'فلسفتنا التقنية',
      philosophySub: 'نبتكر بهدف، ونضمن أن كل سطر برمجي يساهم في منتج نهائي سلس وقوي وقابل للتطوير.',
      feature1Title: 'إتقان الواجهات وتجربة المستخدم',
      feature1Desc: 'نحن لا نبني واجهات فحسب، بل نصنع تجارب فائقة السلاسة باستخدام React و TypeScriptให้ความรู้สึก بديهية وحيوية.',
      feature2Title: 'هندسة الزمن الحقيقي',
      feature2Desc: 'عِش تجربة المزامنة الفورية. أنظمتنا توفر انعكاساً لحظياً للحالات، مما يخلق تطبيقات ديناميكية وحية.',
      feature3Title: 'تآزر المكدس الكامل',
      feature3Desc: 'نضمن كودًا نظيفًا وقابلاً للتطوير عبر المكدس بأكمله، مما يضمن القوة من قاعدة البيانات إلى واجهة المستخدم.',
      quote: '"قدمت Apex Synex منصة تبدو وكأنها حية. التحديثات الفورية غيرت قواعد اللعبة، والتصميم من الطراز العالمي بكل بساطة."',
      author: '— أليكس تشين، الرئيس التنفيذي لشركة نوفا المالية',
    },
    services: {
      title: 'قدراتنا',
      sub: 'نحن نقدم حلولاً متكاملة، ونحول الأفكار الطموحة إلى منتجات رقمية جاهزة للسوق.',
      service1Title: 'إتقان الواجهات الأمامية وسحر تجربة المستخدم',
      service1Desc: 'نحن لا نبني واجهات مستخدم فحسب، بل نصنع تجارب حية. باستخدام React و TypeScript، نبتكر تصميمات متجاوبة بسلاسة فائقة تمنح إحساساً بالحياة.',
      service2Title: 'هندسة خلفية بالزمن الحقيقي',
      service2Desc: 'عِش قوة المزامنة الفورية بدون أي تأخير. أنظمتنا الخلفية توفر تحديثاً لحظياً للبيانات، لابتكار تطبيقات ديناميكية تعكس التغييرات فور حدوثها.',
      service3Title: 'تآزر المكدس الكامل (Full-Stack)',
      service3Desc: 'نضمن اتصالاً متناغماً وقوياً بين الواجهة الأمامية والخلفية، مما يضمن كوداً عالي الأداء وقابل للتطوير والصيانة عبر المكدس بأكمله.',
      service4Title: 'النشر الاستراتيجي والأمان',
      service4Desc: 'ننفذ إجراءات أمان شاملة ومسارات نشر محسّنة لضمان أن يكون تطبيقك سريعاً وموثوقاً وآمناً من اليوم الأول.',
    },
    portfolio: {
      title: 'أعمالنا',
      sub: 'معرض يبرز التزامنا بالتميز التقني والابتكار في التصميم.',
      project1Title: 'جوستو داش - نظام تشغيل للمطاعم',
      project1Cat: 'لوحة تحكم لحظية',
      project1Desc: 'لوحة تحكم تشغيلية تعمل في الزمن الحقيقي لمطعم كبير، تزامن الطلبات فورياً من نقاط البيع إلى المطبخ.',
      project2Title: 'أورا - متجر فاخر',
      project2Cat: 'منصة تجارة إلكترونية',
      project2Desc: 'تجربة تجارة إلكترونية راقية مع تصفح سلس وبحث فوري وعرض منتجات مذهل بصرياً.',
      project3Title: 'متروبوليس - عقارات',
      project3Cat: 'بوابة عقارات راقية',
      project3Desc: 'بوابة متطورة لوكالة عقارية فاخرة، تتميز بقوائم عقارات غامرة ورسوم متحركة أنيقة.',
    },
    contact: {
      title: 'لنبدأ البناء',
      sub: 'هل لديك فكرة؟ لدينا الخبرة الهندسية. لنتواصل ونبتكر شيئاً استثنائياً.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'أخبرنا عن مشروعك',
      send: 'ابدأ التواصل',
      success: 'تم استلام رسالتك. يقوم فريقنا بمراجعة التفاصيل وسيتواصل معك قريباً.',
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('app-language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('app-language', language);
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key missing: ${path}`);
        return path;
      }
      current = current[key];
    }
    return current;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};