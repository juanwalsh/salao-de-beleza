import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is approximately in the viewport (offset for navbar)
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsMobileMenuOpen(false);
      
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(targetId);
    }
  };

  const WHATSAPP_LINK = "https://wa.me/5522998004156";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-lumiere-50/95 backdrop-blur-md py-4 border-lumiere-200 shadow-sm'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="z-50 group cursor-pointer relative"
          >
            <h1 className="font-serif text-3xl tracking-widest text-lumiere-900 group-hover:opacity-80 transition-opacity">
              LUMIÈRE
            </h1>
            <span className="block text-[0.6rem] tracking-[0.4em] text-lumiere-800 text-center uppercase font-sans mt-1">
              Salon & Spa
            </span>
          </a>

          {/* Desktop Menu (Visible on Large Screens > 1024px) */}
          <div className="hidden lg:flex items-center space-x-12">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-lumiere-900 font-sans text-xs tracking-[0.15em] hover:text-lumiere-400 transition-colors uppercase cursor-pointer py-2`}
                >
                  {link.label}
                  {/* Active Indicator Underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-lumiere-900 transform transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </a>
              );
            })}
            <Button variant="primary" href={WHATSAPP_LINK} target="_blank">Reservar</Button>
          </div>

          {/* Mobile/Tablet Toggle (Visible on Screens < 1024px) */}
          <button
            className="lg:hidden text-lumiere-900 z-50 p-2 focus:outline-none hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Compact Side Drawer Menu (Mobile & Tablet) */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-visibility duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible delay-500'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-[300px] md:w-[400px] bg-lumiere-50 shadow-2xl flex flex-col justify-start pt-32 px-10 transition-transform duration-500 ease-out transform border-l border-lumiere-200 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-8 items-start">
             {/* Drawer Header */}
             <div className="w-full border-b border-lumiere-200 pb-6 mb-2">
                <span className="font-serif text-2xl tracking-widest text-lumiere-900">Menu
                </span>
             </div>

            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-serif text-2xl transition-all cursor-pointer ${isActive ? 'text-lumiere-400 pl-4 border-l-2 border-lumiere-400' : 'text-lumiere-900 hover:text-lumiere-400 hover:pl-2'}`}
                >
                  {link.label}
                </a>
              );
            })}
            
            <div className="pt-8 w-full">
              <Button variant="primary" href={WHATSAPP_LINK} target="_blank" className="w-full justify-center flex">
                Agendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;