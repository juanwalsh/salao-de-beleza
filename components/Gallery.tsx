import React, { useState, MouseEvent } from 'react';
import { GALLERY_IMAGES } from '../constants';
import FadeIn from './ui/FadeIn';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Lightbox navigation
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  // 3D Tilt Logic
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Disable on mobile/tablet (width < 768px)
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-10deg to 10deg)
    const xRot = ((y / rect.height) - 0.5) * -10; 
    const yRot = ((x / rect.width) - 0.5) * 10;

    card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section id="gallery" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-lumiere-400 mb-4">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl text-lumiere-900">Curadoria Visual</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] grid-flow-dense">
          {GALLERY_IMAGES.map((item, index) => (
            <FadeIn 
              key={item.id} 
              delay={index * 100} 
              className={`relative group overflow-hidden ${item.span || 'col-span-1 row-span-1'} cursor-pointer`}
            >
              <div 
                className="w-full h-full transition-transform duration-200 ease-out will-change-transform"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-lumiere-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-serif italic text-xl text-lumiere-900">{item.category}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          
          {/* Static CTA Card - Hover only on md+ */}
          <FadeIn delay={600} className="col-span-1 row-span-1 bg-lumiere-100 flex items-center justify-center p-8 text-center flex-col transition-transform duration-300 md:hover:scale-[1.02]">
             <h3 className="font-serif text-2xl text-lumiere-900 mb-4">Siga nossa jornada</h3>
             <a href="#" className="font-sans text-xs uppercase tracking-widest text-lumiere-600 border-b border-lumiere-600 pb-1 hover:text-lumiere-900 hover:border-lumiere-900 transition-all">@lumiere.salon</a>
          </FadeIn>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-lumiere-900/95 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={40} />
          </button>

          <button 
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
             <img 
               src={GALLERY_IMAGES[selectedImageIndex].src} 
               alt={GALLERY_IMAGES[selectedImageIndex].alt} 
               className="w-full h-full object-contain shadow-2xl"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <p className="font-serif text-3xl italic mb-2">{GALLERY_IMAGES[selectedImageIndex].category}</p>
                <p className="font-sans text-xs uppercase tracking-widest opacity-80">{GALLERY_IMAGES[selectedImageIndex].alt}</p>
             </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;