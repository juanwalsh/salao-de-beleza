import React, { useEffect, useState } from 'react';
import FadeIn from './ui/FadeIn';

const Editorial: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="editorial" className="py-24 bg-lumiere-900 text-lumiere-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content - Moves slighly faster/slower for parallax depth */}
          <div 
             className="lg:col-span-5 relative z-10 order-2 lg:order-1 transition-transform duration-75 ease-out will-change-transform"
             style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <FadeIn>
              <h2 className="font-serif text-5xl md:text-7xl leading-none mb-8">
                The <br />
                <span className="italic text-lumiere-300">Art</span> of <br />
                Beauty
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="w-16 h-[1px] bg-lumiere-300 mb-8" />
              <p className="font-sans text-lumiere-200 text-sm leading-7 tracking-wide mb-8 text-justify">
                Nossa filosofia une a precisão técnica das academias internacionais com a sensibilidade artística dos editoriais de moda. Cada cor, cada corte e cada textura é pensada para realçar sua beleza natural, sem transformá-la em outra pessoa, mas revelando sua melhor versão.
                oi laviniaaaaaaaa freire de almeida minha princesa linda
              </p>
              {/* CTA Removed */}
            </FadeIn>
          </div>

          {/* Image Composition */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 h-[600px] w-full">
             {/* Main large image - Slower parallax */}
             <div 
               className="absolute top-0 right-0 w-5/6 h-5/6 overflow-hidden transition-transform duration-75 ease-out will-change-transform"
               style={{ transform: `translateY(${scrollY * 0.02}px)` }}
             >
                <img 
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1587&auto=format&fit=crop" 
                  alt="Editorial Model" 
                  // Removed hover effects
                  className="w-full h-full object-cover"
                />
             </div>
             
             {/* Floating overlapping image - Faster parallax (closer to viewer) */}
             <div 
               className="absolute bottom-0 left-0 w-1/2 h-1/2 overflow-hidden border-4 border-lumiere-900 shadow-2xl transition-transform duration-75 ease-out will-change-transform"
               style={{ transform: `translateY(${scrollY * -0.08}px)` }}
             >
                 <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1674&auto=format&fit=crop" 
                  alt="Detail Shot" 
                  // Removed hover effects
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Editorial;