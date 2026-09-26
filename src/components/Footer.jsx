import React from 'react';
import { Eye, Instagram, Youtube, Music, Lock } from 'lucide-react';

const Footer = ({ setView, onOpenContact }) => {
  const navigateTo = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-verse-darkBlue py-16 px-6 border-t border-white/5 relative overflow-hidden mt-auto">
      {/* Bioluminescent footer background element */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-verse-orange rounded-full mix-blend-screen filter blur-[128px] opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-verse-purple rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* About Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3.5 cursor-pointer group select-none" onClick={() => navigateTo('home')}>
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/assets/logo/official_isotipo_cara.png" 
                alt="VERSE Cara Logo" 
                className="h-11 w-11 object-contain drop-shadow-[0_0_10px_rgba(30,207,248,0.3)]"
              />
            </div>
            <img 
              src="/assets/logo/official_logotipo_white.png" 
              alt="VERSE" 
              className="h-5 object-contain opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
            Estudio creativo que fusiona arte, tecnología y misticismo para narrar historias mediante experiencias audiovisuales. Transformamos identidades en relatos que trascienden.
          </p>
          
          {/* Social Media Link Handles */}
          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-verse-orange hover:shadow-[0_0_15px_rgba(237,98,46,0.5)] transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-verse-purple hover:shadow-[0_0_15px_rgba(135,35,161,0.5)] transition-all duration-300"
            >
              <Youtube size={18} />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-verse-cyan hover:shadow-[0_0_15px_rgba(30,207,248,0.5)] transition-all duration-300"
            >
              {/* Lucide Music acts as TikTok fallback */}
              <Music size={18} />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 font-serif text-verse-cyan">UNIVERSOS</h4>
          <ul className="space-y-3.5 text-gray-400 text-sm font-light">
            <li>
              <button onClick={() => navigateTo('estudio')} className="hover:text-verse-yellow transition-colors hover:translate-x-1 duration-300">
                Verse Estudio
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('experiencias')} className="hover:text-verse-yellow transition-colors hover:translate-x-1 duration-300">
                Experiencias Verse
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('tienda')} className="hover:text-verse-yellow transition-colors hover:translate-x-1 duration-300">
                Tienda Verse
              </button>
            </li>
            <li>
              <button onClick={onOpenContact} className="hover:text-verse-yellow transition-colors hover:translate-x-1 duration-300">
                Escríbenos
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 font-serif text-verse-orange">CONTACTO</h4>
          <ul className="space-y-3.5 text-gray-400 text-sm font-light">
            <li>La Paz, Bolivia</li>
            <li>
              <a href="mailto:hola@verse-estudio.com" className="hover:text-white transition-colors">
                hola@verse-estudio.com
              </a>
            </li>
            <li>
              <a href="tel:+59170000000" className="hover:text-white transition-colors">
                +591 70000000
              </a>
            </li>
            <li className="text-xs text-gray-500 italic pt-2 border-t border-white/5">
              “Si pudieras escribir un mensaje en el tiempo, ¿qué dirías?”
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <p>© 2026 VERSE Estudio Creativo. Todos los derechos reservados.</p>
        <p className="flex gap-4 text-xs items-center">
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          <span>|</span>
          <button 
            onClick={() => navigateTo('oficina')} 
            className="hover:text-verse-orange transition-all duration-300 flex items-center gap-1 group/lock opacity-20 hover:opacity-100 focus:outline-none"
            title="Consola de Socios"
          >
            <Lock size={10} className="group-hover/lock:scale-110 transition-transform" />
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
