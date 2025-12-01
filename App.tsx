import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="relative flex flex-col min-h-screen bg-brand-charcoal font-sans text-brand-cream overflow-x-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-blue/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-lavender/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-brand-green/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;