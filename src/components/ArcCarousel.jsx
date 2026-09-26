import React from 'react';
import { Eye, Sparkles, Film, ArrowUpRight } from 'lucide-react';

const ArcCarousel = () => {
  const slides = [
    {
      id: 1,
      src: '/assets/noche-de-museos/Noche de Museos-70.jpg',
      title: 'Música & Simbolismo',
      icon: Sparkles,
      rotation: '-rotate-12 -translate-y-4 -translate-x-6 scale-90 opacity-60 hover:opacity-90 hover:scale-95'
    },
    {
      id: 2,
      src: '/assets/noche-de-museos/Noche de Museos-68.jpg',
      title: 'Portal Ancestral',
      icon: Eye,
      rotation: 'z-10 scale-110 shadow-[0_0_50px_rgba(237,98,46,0.35)]'
    },
    {
      id: 3,
      src: '/assets/noche-de-museos/Noche de Museos-71.jpg',
      title: 'Luz y Texturas',
      icon: Film,
      rotation: 'rotate-12 -translate-y-4 translate-x-6 scale-90 opacity-60 hover:opacity-90 hover:scale-95'
    }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center pt-20 pb-20 w-full overflow-hidden">
      {/* Glow Arc Background */}
      <div className="absolute bottom-0 w-[600px] h-[300px] rounded-t-full bg-gradient-to-t from-verse-purple/20 via-verse-orange/10 to-transparent blur-3xl pointer-events-none" />

      {/* Grid overlay in parent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* The Curve Visual Rings */}
      <div className="absolute bottom-0 w-[700px] h-[700px] rounded-full border-2 border-dashed border-white/5 pointer-events-none" />
      <div className="absolute bottom-0 w-[550px] h-[550px] rounded-full border border-verse-purple/20 pointer-events-none" />
      
      {/* Pink Gradient Arch segment */}
      <div className="absolute bottom-[-150px] w-[500px] h-[350px] rounded-t-full bg-gradient-to-t from-verse-orange/20 to-transparent border-t border-verse-orange/40 filter blur-sm pointer-events-none" />

      {/* Slides Container */}
      <div className="relative z-10 flex items-end justify-center w-full max-w-4xl h-[380px] px-6">
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${slide.rotation}`}
            style={{
              left: slide.id === 1 ? '20%' : slide.id === 2 ? '50%' : '80%',
              transform: `translateX(-50%)`,
              bottom: slide.id === 2 ? '60px' : '30px'
            }}
          >
            {/* Card Frame */}
            <div className="relative w-56 h-72 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl glass-panel group transition-all duration-500 hover:border-verse-cyan/40">
              <img 
                src={slide.src} 
                alt={slide.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-verse-navy flex items-center justify-center">
                <span>{slide.title}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-verse-bg/95 via-transparent to-transparent opacity-90" />

              {/* Floating Top Right Link Arrow on Active Card */}
              {slide.id === 2 && (
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg animate-pulse hover:bg-white/20 transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              )}

              {/* Card Label */}
              <div className="absolute bottom-6 inset-x-0 text-center px-4">
                <h4 className="text-sm font-bold text-white font-serif tracking-wider">{slide.title}</h4>
                <p className="text-[9px] text-verse-cyan tracking-widest uppercase mt-0.5 font-sans font-black">VERSE Experiencia</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Central Pulsating Blue Emblem at the Bottom Arch center */}
      <div className="relative z-20 mt-6 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-verse-blue flex items-center justify-center border-4 border-verse-bg shadow-[0_0_35px_rgba(0,63,246,0.85)] relative">
          <Eye className="text-verse-cyan w-8 h-8 drop-shadow-[0_0_8px_#1ECFF8]" />
          {/* External pulsating rings */}
          <div className="absolute inset-[-6px] rounded-full border border-verse-orange/30 animate-ping opacity-45" />
        </div>
      </div>
    </div>
  );
};

export default ArcCarousel;
