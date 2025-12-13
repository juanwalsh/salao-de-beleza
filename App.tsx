import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Aesthetics from './components/Aesthetics';
import Editorial from './components/Editorial';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Transformation from './components/Transformation';
import Contact from './components/Contact';
import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage to only show loader once per session
    const hasVisited = sessionStorage.getItem('hasVisitedLumiere');
    if (hasVisited) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisitedLumiere', 'true');
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!loading && (
        <div className="min-h-screen bg-lumiere-50 text-lumiere-900 font-sans selection:bg-lumiere-300 selection:text-lumiere-900 animate-[fadeIn_0.5s_ease-out]">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Aesthetics />
            <Editorial />
            <About />
            <Team />
            <Gallery />
            <Testimonials />
            <Transformation />
          </main>
          <Contact />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}

export default App;