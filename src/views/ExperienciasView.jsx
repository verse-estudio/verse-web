import React, { useState } from 'react';
import { Eye, Camera, Music, ArrowUpRight, X, Calendar, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const ExperienciasView = ({ onOpenContact }) => {
  const [activeImage, setActiveImage] = useState(null);

  const pillars = [
    { 
      id: 'exhibiciones',
      title: 'Exhibiciones Inmersivas', 
      desc: 'Espacios conceptuales donde la fotografía, la música étnica y la narrativa convergen para despertar los sentidos y evocar curiosidad.', 
      icon: Eye, 
      color: 'text-verse-cyan',
      glow: 'hover:border-verse-cyan/30 hover:shadow-[0_0_25px_rgba(30,207,248,0.15)]'
    },
    { 
      id: 'talleres',
      title: 'Talleres Fotográficos', 
      desc: 'Viajes de exploración para creadores que buscan capturar la esencia de Bolivia a través del lente, investigando su arqueología y su folklore.', 
      icon: Camera, 
      color: 'text-verse-yellow',
      glow: 'hover:border-verse-yellow/30 hover:shadow-[0_0_25px_rgba(255,210,19,0.15)]'
    },
    { 
      id: 'eventos',
      title: 'Eventos Culturales', 
      desc: 'Colaboraciones experimentales con artistas emergentes, DJs alternativos, pintores en vivo y espectáculos que desafían el olvido histórico.', 
      icon: Music, 
      color: 'text-verse-orange',
      glow: 'hover:border-verse-orange/30 hover:shadow-[0_0_25px_rgba(237,98,46,0.15)]'
    }
  ];

  const handlePillarClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 animate-fade-in min-h-screen relative">
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-verse-blue/15 via-verse-bg to-transparent -z-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Experiencias VERSE" 
          subtitle="Inmersión cultural, música, arte y comunidad en un solo espacio."
        />
        
        {/* Core pillars cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12 mb-24">
          {pillars.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => handlePillarClick(item.id)}
              className={`glass-panel border border-white/5 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${item.glow}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <item.icon className={`${item.color} w-6 h-6 shrink-0`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-serif tracking-wide">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">{item.desc}</p>
              <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider mt-auto text-white/60 group hover:text-white transition-colors">
                <span>Ver detalles</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Restructured Panels */}
        <div className="space-y-24 mb-24">
          
          {/* 1. Exhibiciones Inmersivas */}
          <div 
            id="exhibiciones" 
            className="scroll-mt-28 glass-panel border border-white/5 p-8 md:p-12 rounded-[32px] relative overflow-hidden transition-all duration-500 hover:border-verse-cyan/30 shadow-[0_20px_50px_rgba(2,18,69,0.5)]"
          >
            {/* Ambient background glow orb */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-verse-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-verse-cyan/15 flex items-center justify-center text-verse-cyan">
                    <Eye size={20} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-verse-cyan font-bold block">PILAR SENSORIAL</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-6 leading-tight">
                  <span className="font-decorative text-4xl md:text-5xl text-verse-cyan font-normal mr-1">E</span>
                  <span>xhibiciones Inmersivas</span>
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  Nuestros espacios inmersivos son portales donde convergen la fotografía a gran escala, la iluminación bioluminiscente y los paisajes sonoros ancestrales de Bolivia. Están diseñados para despertar tus sentidos, provocar curiosidad y evocar una profunda conexión emocional y reflexiva que resista la cultura del olvido.
                </p>
                
                <ul className="space-y-4 mb-2">
                  {[
                    { title: "Bioluminiscencia Conceptual", desc: "Instalaciones lumínicas interactivas que responden a la temática del espacio." },
                    { title: "Música Étnica Experimental", desc: "Paisajes sonoros híbridos que mezclan instrumentos autóctonos y síntesis digital." },
                    { title: "Narrativa Inmersiva", desc: "Textos curatoriales y relatos interactivos que guían tu experiencia sensorial." }
                  ].map((feat, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-verse-cyan/10 border border-verse-cyan/30 flex items-center justify-center text-verse-cyan text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <h4 className="text-white text-sm font-semibold">{feat.title}</h4>
                        <p className="text-gray-400 text-xs font-light">{feat.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Visual Grid Column */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  { src: '/assets/noche-de-museos/Noche de Museos-68.jpg', title: 'Portal Ancestral', desc: 'Instalaciones de bioluminiscencia y misticismo.' },
                  { src: '/assets/noche-de-museos/Noche de Museos-71.jpg', title: 'El Relato del Tiempo', desc: 'Exposición inmersiva interactiva en Bolivia.' }
                ].map((img, idx) => (
                  <div 
                    key={idx}
                    className="group relative h-80 rounded-2xl overflow-hidden border border-white/5 shadow-xl cursor-pointer transition-all duration-500 hover:border-verse-cyan/40"
                    onClick={() => setActiveImage(img)}
                  >
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 bg-verse-navy flex flex-col items-center justify-center text-center p-4">
                      <Eye className="text-verse-cyan/40 w-12 h-12 mb-2" />
                      <span className="text-sm font-bold text-white">{img.title}</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-verse-bg/95 via-verse-bg/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between text-white mb-1">
                        <h4 className="font-bold text-base font-serif">{img.title}</h4>
                        <ArrowUpRight size={16} className="text-verse-cyan" />
                      </div>
                      <p className="text-gray-300 text-xs font-light">{img.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Talleres Fotográficos */}
          <div 
            id="talleres" 
            className="scroll-mt-28 glass-panel border border-white/5 p-8 md:p-12 rounded-[32px] relative overflow-hidden transition-all duration-500 hover:border-verse-yellow/30 shadow-[0_20px_50px_rgba(2,18,69,0.5)]"
          >
            {/* Ambient background glow orb */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-verse-yellow rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-verse-yellow/15 flex items-center justify-center text-verse-yellow">
                    <Camera size={20} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-verse-yellow font-bold block">PILAR FORMATIVO</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-6 leading-tight">
                  <span className="font-decorative text-4xl md:text-5xl text-verse-yellow font-normal mr-1">T</span>
                  <span>alleres Fotográficos</span>
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  Viajes de aprendizaje y exploración de campo diseñados para creadores visuales ansiosos por capturar la identidad boliviana. Investigamos el patrimonio arqueológico, las festividades folklóricas y los paisajes naturales del altiplano, traduciéndolos al lenguaje fotográfico contemporáneo.
                </p>
                
                <ul className="space-y-4 mb-2">
                  {[
                    { title: "Exploración de Campo Activa", desc: "Salidas de campo guiadas a sitios arqueológicos e históricos emblemáticos." },
                    { title: "Revelado y Texturizado Premium", desc: "Clínicas de impresión artística en lienzos de algodón texturizados." },
                    { title: "Curaduría y Crítica de Portafolios", desc: "Sesiones personalizadas de curaduría con fotógrafos y artistas consolidados." }
                  ].map((feat, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-verse-yellow/10 border border-verse-yellow/30 flex items-center justify-center text-verse-yellow text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <h4 className="text-white text-sm font-semibold">{feat.title}</h4>
                        <p className="text-gray-400 text-xs font-light">{feat.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Visual Grid Column (Image + Interactive Workshop Card) */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  { src: '/assets/noche-de-museos/Noche de Museos-69.jpg', title: 'Reflejos del Alma', desc: 'Retratos fotográficos impresos en lienzo texturizado.' }
                ].map((img, idx) => (
                  <div 
                    key={idx}
                    className="group relative h-80 rounded-2xl overflow-hidden border border-white/5 shadow-xl cursor-pointer transition-all duration-500 hover:border-verse-yellow/40"
                    onClick={() => setActiveImage(img)}
                  >
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 bg-verse-navy flex flex-col items-center justify-center text-center p-4">
                      <Camera className="text-verse-yellow/40 w-12 h-12 mb-2" />
                      <span className="text-sm font-bold text-white">{img.title}</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-verse-bg/95 via-verse-bg/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between text-white mb-1">
                        <h4 className="font-bold text-base font-serif">{img.title}</h4>
                        <ArrowUpRight size={16} className="text-verse-yellow" />
                      </div>
                      <p className="text-gray-300 text-xs font-light">{img.desc}</p>
                    </div>
                  </div>
                ))}
                
                {/* Custom Interactive Workshop Slot Card */}
                <div className="group relative h-80 rounded-2xl overflow-hidden border border-verse-yellow/20 bg-gradient-to-br from-verse-navy via-verse-darkBlue to-verse-yellow/5 p-6 flex flex-col justify-between shadow-xl transition-all duration-500 hover:border-verse-yellow/40">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-verse-yellow rounded-full mix-blend-screen filter blur-[50px] opacity-10 pointer-events-none" />
                  
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-verse-yellow/10 flex items-center justify-center text-verse-yellow">
                      <Calendar size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-verse-yellow tracking-widest bg-verse-yellow/10 border border-verse-yellow/20 px-2.5 py-1 rounded-full uppercase">PRÓXIMA FECHA</span>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-verse-yellow/70 uppercase tracking-widest block mb-1">Taller Documental</span>
                    <h4 className="text-lg font-bold font-serif text-white mb-2 leading-tight">Miradas Ancestrales: Retrato e Iluminación Altiplánica</h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      Fotografía en locaciones históricas del altiplano y revelado de portafolio en lienzo texturizado de algodón.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div>
                      <span className="text-[9px] text-gray-500 uppercase tracking-widest block">Locación</span>
                      <span className="text-xs text-white font-semibold">La Paz & Tiwanaku</span>
                    </div>
                    <button 
                      onClick={onOpenContact} 
                      className="text-xs font-bold uppercase tracking-wider text-verse-yellow hover:text-white transition-colors flex items-center gap-1.5 group/btn"
                    >
                      Reservar Cupo
                      <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Eventos Culturales */}
          <div 
            id="eventos" 
            className="scroll-mt-28 glass-panel border border-white/5 p-8 md:p-12 rounded-[32px] relative overflow-hidden transition-all duration-500 hover:border-verse-orange/30 shadow-[0_20px_50px_rgba(2,18,69,0.5)]"
          >
            {/* Ambient background glow orb */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-verse-orange rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-verse-orange/15 flex items-center justify-center text-verse-orange">
                    <Music size={20} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-verse-orange font-bold block">PILAR SOCIAL Y ARTÍSTICO</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-6 leading-tight">
                  <span className="font-decorative text-4xl md:text-5xl text-verse-orange font-normal mr-1">E</span>
                  <span>ventos Culturales</span>
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  Espacios de diálogo interdisciplinario y experimentación artística vibrante. Reunimos a DJs alternativos, pintores de acción directa (*live painting*), creadores digitales y performistas locales para tejer un puente entre las tradiciones bolivianas y las vanguardias contemporáneas.
                </p>
                
                <ul className="space-y-4 mb-2">
                  {[
                    { title: "Performances Multidisciplinarias", desc: "Fusiones efímeras de danza contemporánea, teatro físico y live painting." },
                    { title: "Música Electrónica y Andina", desc: "Sets de DJs alternativos inspirados en instrumentos autóctonos y folklóricos." },
                    { title: "Plataforma Artística Abierta", desc: "Eventos dedicados al networking, diálogo cultural y exposición de talentos emergentes." }
                  ].map((feat, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-verse-orange/10 border border-verse-orange/30 flex items-center justify-center text-verse-orange text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <h4 className="text-white text-sm font-semibold">{feat.title}</h4>
                        <p className="text-gray-400 text-xs font-light">{feat.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Visual Grid Column */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  { src: '/assets/noche-de-museos/Noche de Museos-70.jpg', title: 'Sintonía Étnica', desc: 'DJs andinos mezclando sonidos experimentales en vivo.' },
                  { src: '/assets/noche-de-museos/Noche de Museos-72.jpg', title: 'Luz y Sombras', desc: 'Performances de pintura y live painting.' }
                ].map((img, idx) => (
                  <div 
                    key={idx}
                    className="group relative h-80 rounded-2xl overflow-hidden border border-white/5 shadow-xl cursor-pointer transition-all duration-500 hover:border-verse-orange/40"
                    onClick={() => setActiveImage(img)}
                  >
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 bg-verse-navy flex flex-col items-center justify-center text-center p-4">
                      <Music className="text-verse-orange/40 w-12 h-12 mb-2" />
                      <span className="text-sm font-bold text-white">{img.title}</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-verse-bg/95 via-verse-bg/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between text-white mb-1">
                        <h4 className="font-bold text-base font-serif">{img.title}</h4>
                        <ArrowUpRight size={16} className="text-verse-orange" />
                      </div>
                      <p className="text-gray-300 text-xs font-light">{img.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Lightbox Modal */}
        {activeImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-verse-bg/95 backdrop-blur-md animate-fade-in"
            onClick={() => setActiveImage(null)}
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/5"
            >
              <X size={22} />
            </button>
            <div 
              className="max-w-4xl max-h-[85vh] flex flex-col items-center bg-verse-navy/40 border border-white/5 rounded-3xl p-3 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeImage.src} 
                alt={activeImage.title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl"
              />
              <div className="w-full text-center mt-4 pb-2 px-6">
                <h4 className="text-xl font-bold font-serif text-white">{activeImage.title}</h4>
                <p className="text-verse-yellow text-sm font-light mt-1">{activeImage.desc}</p>
              </div>
            </div>
          </div>
        )}

        {/* Collaboration CTA */}
        <div className="mt-12 bg-gradient-to-r from-verse-purple/15 to-verse-blue/15 border border-verse-cyan/20 rounded-[32px] p-10 md:p-12 text-center relative overflow-hidden backdrop-blur-sm">
          {/* Subtle orb inside the widget */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-verse-cyan rounded-full mix-blend-screen filter blur-[80px] opacity-10 pointer-events-none" />
          
          <h2 className="text-3xl font-bold text-white mb-4 font-serif tracking-wide relative z-10">¿Quieres colaborar con nosotros?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
            Buscamos fundaciones, gestores culturales y artistas visuales emergentes para crear eventos, documentales y exhibiciones inmersivas que desafíen la cultura del olvido.
          </p>
          <div className="relative z-10">
            <Button primary onClick={onOpenContact} className="px-8 py-3 text-xs uppercase tracking-wider">Proponer Colaboración</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienciasView;
