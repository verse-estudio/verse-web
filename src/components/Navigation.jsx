import React, { useEffect } from 'react';
import { Menu, X, ShoppingCart, MessageSquare, ArrowRight, Instagram, Youtube, Sparkles } from 'lucide-react';
import Button from './Button';

/**
 * Modern Minimalist Floating Navigation
 * Replaces the traditional fixed horizontal header bar with:
 * - A sleek, floating Hamburger Button on the top-left (both desktop and mobile)
 * - Space beside it for the docked 3D VERSE Protagonist Logo upon scrolling
 * - An immersive slide-out Glassmorphism Drawer with links, Cart, and Contact
 */
const Navigation = ({ 
  view, 
  setView, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrolled, 
  cartCount, 
  onOpenCart, 
  onOpenContact 
}) => {
  const navLinks = [
    { id: 'home', label: 'Inicio', subtitle: 'El Despertar' },
    { id: 'estudio', label: 'Estudio', subtitle: 'Filosofía y Creación' },
    { id: 'experiencias', label: 'Experiencias', subtitle: 'Instalaciones y Cine' },
    { id: 'tienda', label: 'Tienda', subtitle: 'Piezas y Coleccionables' }
  ];

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, setIsMenuOpen]);

  const navigateTo = (newView) => {
    setView(newView);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* FLOATING TOP-LEFT HAMBURGER TRIGGER (STANDALONE) */}
      <div className="fixed top-4 left-4 sm:top-5 sm:left-6 z-50 flex items-center">
        {/* Hamburger Floating Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`group relative p-3 sm:p-3.5 rounded-full glass-panel-heavy border transition-all duration-300 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.7)] ${
            isMenuOpen 
              ? 'border-verse-cyan bg-verse-navy/90 text-verse-cyan rotate-90' 
              : 'border-white/10 hover:border-verse-cyan/40 bg-verse-navy/60 hover:bg-verse-navy/80 text-white hover:scale-105'
          }`}
          aria-label={isMenuOpen ? 'Cerrar Menú' : 'Abrir Menú'}
          title="Menú de Navegación VERSE"
        >
          {/* Subtle cyan glow behind button */}
          <span className="absolute -inset-1 rounded-full bg-verse-cyan/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />

          {isMenuOpen ? (
            <X size={22} className="relative z-10 transition-transform duration-300" />
          ) : (
            <div className="relative z-10 flex flex-col gap-1.5 items-start justify-center w-5 sm:w-6">
              <span className="w-5 sm:w-6 h-[2px] bg-current rounded-full transition-all group-hover:w-6" />
              <span className="w-3.5 sm:w-4 h-[2px] bg-current rounded-full transition-all group-hover:w-6" />
              <span className="w-4 sm:w-5 h-[2px] bg-current rounded-full transition-all group-hover:w-6" />
            </div>
          )}
        </button>
      </div>

      {/* FULL SLIDE-OUT GLASSMORPHISM NAVIGATION DRAWER */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex animate-fade-in">
          {/* Backdrop blur overlay */}
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity" 
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <aside className="relative w-full max-w-sm sm:max-w-md h-full glass-panel-heavy border-r border-verse-cyan/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-8 flex flex-col justify-between z-10 overflow-y-auto">
            
            {/* Top Brand Header in Drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <div 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => navigateTo('home')}
                >
                  <img 
                    src="/assets/logo/official_isotipo_cara.png" 
                    alt="VERSE Logo" 
                    className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(30,207,248,0.5)] group-hover:scale-105 transition-transform"
                  />
                  <img 
                    src="/assets/logo/official_logotipo_white.png" 
                    alt="VERSE" 
                    className="h-5 object-contain"
                  />
                </div>

                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = view === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => navigateTo(link.id)}
                      className={`group w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                        isActive 
                          ? 'bg-verse-cyan/15 text-verse-cyan border border-verse-cyan/30 shadow-[0_0_20px_rgba(30,207,248,0.15)]' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-bold tracking-wide transition-transform group-hover:translate-x-1">
                          {link.label}
                        </span>
                        <span className="text-xs text-gray-400 tracking-wider font-light mt-0.5">
                          {link.subtitle}
                        </span>
                      </div>
                      <ArrowRight 
                        size={18} 
                        className={`transition-all duration-300 ${
                          isActive 
                            ? 'text-verse-cyan translate-x-0 opacity-100' 
                            : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-400'
                        }`} 
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions: Cart & Contact & Socials */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4 mt-6">
              {/* Shopping Cart Button */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-verse-cyan/30 transition-all flex items-center justify-between text-gray-200 hover:text-white group"
              >
                <div className="flex items-center gap-3">
                  <div className="relative p-2 rounded-lg bg-verse-cyan/10 text-verse-cyan">
                    <ShoppingCart size={18} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-verse-orange text-white text-[10px] font-black flex items-center justify-center shadow-[0_0_8px_rgba(237,98,46,0.6)]">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold tracking-wider uppercase">Carrito de Compras</span>
                </div>
                <span className="text-xs text-gray-400 font-mono">
                  {cartCount} {cartCount === 1 ? 'ítem' : 'ítems'}
                </span>
              </button>

              {/* Contact CTA Button */}
              <Button
                primary
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 text-xs uppercase tracking-wider rounded-xl shadow-[0_5px_20px_rgba(237,98,46,0.3)] flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Iniciar Conversación</span>
              </Button>

              {/* Philosophy Slogan */}
              <p className="text-xs text-gray-400 text-center italic mt-2">
                “Narrando historias, conectando universos.”
              </p>
            </div>

          </aside>
        </div>
      )}
    </>
  );
};

export default Navigation;
