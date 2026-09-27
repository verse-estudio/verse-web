import React, { useState } from 'react';
import { Eye, Sparkles, Map, MessageSquare, Film, ArrowRight, Instagram, Youtube, Music, Send, Compass, Users, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import RocolaUniversos from '../components/RocolaUniversos';
import DynamicGalaxyScene from '../components/DynamicGalaxyScene';

const HomeView = ({ setView, onOpenContact }) => {
  // Quick inquiry state for Section 5 minimal form
  const [quickMsg, setQuickMsg] = useState({ name: '', email: '', message: '' });
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!quickMsg.email) return;
    setQuickSubmitted(true);
    setTimeout(() => {
      setQuickSubmitted(false);
      setQuickMsg({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="animate-fade-in relative overflow-hidden bg-verse-bg">
      {/* Background bioluminescent ambient nebulas */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-verse-purple rounded-full mix-blend-screen filter blur-[150px] opacity-25 animate-blob pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-verse-blue rounded-full mix-blend-screen filter blur-[160px] opacity-25 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-verse-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none animate-blob animation-delay-4000" />
      
      {/* Glowing tech grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* ========================================================
          SECCIÓN 1: EL DESPERTAR (Hero / Post-Evento / Panel Protagonista)
          Logo 3D + Nombre VERSE en Azul Predominante (#003FF6) + Galaxia Dinámica
         ======================================================== */}
      <section className="relative min-h-[96vh] flex items-center justify-center overflow-hidden pt-20 pb-16 px-4">
        {/* Escena dinámica de galaxia espiral en el fondo */}
        <DynamicGalaxyScene />

        {/* Gradientes atmosféricos de soporte para suavizar bordes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-verse-bg/50 via-transparent to-verse-bg" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-verse-bg to-transparent" />
        </div>

        {/* PANEL ÚNICO PROTAGONISTA: Rostro 3D + Nombre VERSE en Azul Predominante + Eslogan + Copy Post-Evento */}
        <div className="relative z-10 w-full max-w-4xl mx-auto my-auto">
          <div className="glass-panel-heavy rounded-3xl border border-verse-blue/40 shadow-[0_0_80px_rgba(0,63,246,0.3)] p-6 sm:p-10 md:p-14 text-center flex flex-col items-center relative overflow-hidden backdrop-blur-2xl">
            {/* Resplandor bioluminiscente interior del panel */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-verse-blue/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-verse-cyan/5 via-transparent to-verse-blue/10 pointer-events-none" />

            {/* Badge de Bienvenida Post-Evento */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-verse-blue/20 border border-verse-blue/50 text-verse-cyan text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(30,207,248,0.2)]">
              <Sparkles size={14} className="text-verse-cyan animate-pulse" />
              <span>Conexión Post-Evento • Bienvenidos</span>
            </div>

            {/* Espaciador calibrado para alojar el Rostro 3D de VERSE en el epicentro superior del panel */}
            <div className="w-full h-[220px] sm:h-[260px] md:h-[290px] pointer-events-none flex items-center justify-center" />

            {/* Nombre Principal VERSE en un solo color azul predominante del design system (#003FF6 / text-verse-blue) */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.2em] uppercase text-verse-blue drop-shadow-[0_0_35px_rgba(0,63,246,0.7)] select-none my-2 font-sans">
              VERSE
            </h1>

            {/* Eslogan Oficial de la Marca */}
            <h2 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] text-white/90 mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Narrando historias, conectando universos
            </h2>

            {/* Copywriting enfocado en recibir a la audiencia después del evento */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl font-light leading-relaxed mb-6">
              Gracias por haber compartido la experiencia con nosotros en vivo. El impacto de lo vivido trasciende el instante: aquí puedes explorar nuestras creaciones completas, descubrir el universo visual de cada producción y comenzar a darle forma a tu propia historia.
            </p>

            {/* Pregunta en el tiempo (filosofía VERSE) */}
            <div className="text-xs sm:text-sm text-verse-cyan italic font-serif tracking-wide border-y border-white/10 py-3 px-6 max-w-xl mx-auto mb-8 bg-white/5 rounded-xl">
              “Si pudieras escribir un mensaje en el tiempo, ¿qué dirías?”
            </div>

            {/* Acciones para explorar portfolio post-evento o conectar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Button 
                primary 
                onClick={() => {
                  const el = document.getElementById('rocola-universos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else setView('estudio');
                }} 
                className="px-8 py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(237,98,46,0.4)]"
              >
                <span>Revivir la Experiencia & Galería</span>
                <ArrowRight size={16} />
              </Button>
              <Button 
                onClick={onOpenContact} 
                className="px-8 py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-verse-blue/50 hover:border-verse-cyan bg-verse-navy/40"
              >
                <MessageSquare size={16} />
                <span>Conectar con el Estudio</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 2: EL ORIGEN (Segmentos de Clientes y Relaciones)
          "Si pudieras escribir un mensaje en el tiempo, ¿qué dirías?"
         ======================================================== */}
      <section className="py-24 px-4 relative z-10 border-y border-white/5 backdrop-blur-sm bg-verse-navy/40">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-verse-cyan font-mono font-bold block mb-2">
              EL ORIGEN • CANVAS DE NEGOCIO
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-sans tracking-tight leading-tight">
              <span className="font-decorative text-4xl md:text-6xl text-verse-cyan font-normal mr-1">A</span>
              <span> Quienes Buscan Trascender lo Convencional</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-light mt-4 leading-relaxed">
              No producimos piezas estandarizadas. Conectamos con creadores, marcas con propósito y comunidades culturales que entienden que una verdadera historia no busca solo ser vista, sino perdurar en la memoria.
            </p>
          </div>
          
          {/* 4 Pillars of the Origin */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Introspección', 
                pilar: 'Pilar Místico',
                desc: 'Despertamos la mirada interior, conectando las raíces ancestrales con el presente mediante relatos cinematográficos profundos.',
                icon: Sparkles, 
                color: 'text-verse-yellow',
                border: 'border-verse-yellow/20 hover:border-verse-yellow/50',
                glow: 'hover:shadow-[0_0_30px_rgba(255,210,19,0.2)]'
              },
              { 
                title: 'Conexión', 
                pilar: 'Pilar Sensorial',
                desc: 'Creamos puentes auténticos entre culturas, generaciones y emociones. Comunidades que resuenan y se reconocen en la obra.',
                icon: Map, 
                color: 'text-verse-cyan',
                border: 'border-verse-cyan/20 hover:border-verse-cyan/50',
                glow: 'hover:shadow-[0_0_30px_rgba(30,207,248,0.2)]'
              },
              { 
                title: 'Comunicación', 
                pilar: 'Pilar Simbólico',
                desc: 'Traducimos conceptos complejos en semiótica visual de alto impacto y poesía audiovisual clara y transformadora.',
                icon: MessageSquare, 
                color: 'text-verse-purple',
                border: 'border-verse-purple/20 hover:border-verse-purple/50',
                glow: 'hover:shadow-[0_0_30px_rgba(135,35,161,0.2)]'
              },
              { 
                title: 'Estrategia', 
                pilar: 'Pilar de Negocio',
                desc: 'Diseño audiovisual estructurado desde el Business Canvas para convertir identidades creativas en tracción y valor tangible.',
                icon: Film, 
                color: 'text-verse-orange',
                border: 'border-verse-orange/20 hover:border-verse-orange/50',
                glow: 'hover:shadow-[0_0_30px_rgba(237,98,46,0.2)]'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`group glass-panel p-8 rounded-[36px] border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${item.border} ${item.glow}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className={`${item.color} w-6 h-6 shrink-0`} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/10 px-2.5 py-1 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>
                  <span className={`text-[10px] uppercase font-mono tracking-widest ${item.color} font-bold block mb-1`}>
                    {item.pilar}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 font-serif tracking-wide">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 3: LA ROCOLA DE UNIVERSOS (Portfolio Interactivo)
          "El núcleo visual de la web."
         ======================================================== */}
      <section id="rocola-universos" className="py-12 relative z-10 scroll-mt-24">
        <RocolaUniversos onOpenContact={onOpenContact} />
      </section>

      {/* ========================================================
          SECCIÓN 4: EL ECOSISTEMA (Canales y Socios Clave - Business Canvas)
          "Cómo co-creamos: Dirección estratégica, contenido y producción."
         ======================================================== */}
      <section className="py-24 px-4 relative z-10 border-t border-white/5 bg-verse-navy/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-verse-cyan font-mono font-bold block">
                EL ECOSISTEMA • BUSINESS CANVAS
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white font-sans leading-tight">
                <span className="font-decorative text-4xl md:text-6xl text-verse-cyan font-normal mr-1">C</span>
                <span>ómo Co-creamos: Del Concepto al Universo Digital</span>
              </h2>
              <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
                Articulamos una red viva de creadores, fundaciones culturales y canales de distribución digital. No solo filmamos: concebimos el modelo integral para que el contenido respire en festivales, instalaciones físicas y plataformas globales.
              </p>
              
              {/* Co-creation Workflow items */}
              <div className="space-y-4 pt-2">
                {[
                  {
                    title: '1. Dirección Estratégica & Semiótica',
                    desc: 'Investigación del contexto, arquetipo de marca y narrativa conceptual antes de pulsar el botón de grabación.'
                  },
                  {
                    title: '2. Producción Cinematográfica Inmersiva',
                    desc: 'Rodajes de alta fidelidad, óptica especializada, sonido directo y diseño lumínico bioluminiscente.'
                  },
                  {
                    title: '3. Distribución con Propósito (Instagram / TikTok / Cine)',
                    desc: 'Adaptación fluida de piezas cinematográficas para redes de alta velocidad sin sacrificar la profundidad de la obra.'
                  }
                ].map((step, sIdx) => (
                  <div key={sIdx} className="glass-panel p-5 rounded-2xl border border-white/10 flex gap-4 items-start">
                    <CheckCircle2 size={20} className="text-verse-cyan shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white text-sm font-bold font-serif mb-1">{step.title}</h4>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Channels Flow */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <span className="text-xs uppercase font-mono text-gray-400 tracking-wider">Canales Activos:</span>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:border-verse-orange hover:bg-verse-orange/10 transition-all"
                >
                  <Instagram size={14} className="text-verse-orange" />
                  <span>Instagram Feed</span>
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:border-verse-cyan hover:bg-verse-cyan/10 transition-all"
                >
                  <Music size={14} className="text-verse-cyan" />
                  <span>TikTok Stories</span>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:border-verse-purple hover:bg-verse-purple/10 transition-all"
                >
                  <Youtube size={14} className="text-verse-purple" />
                  <span>DocuSeries</span>
                </a>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-[32px] overflow-hidden border border-white/10 relative group">
                  <img 
                    src="/assets/portfolio/Kusillo -103.jpg" 
                    alt="Ecosistema VERSE 1" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verse-bg via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 text-xs font-mono text-verse-yellow font-bold">Identidad Andina</span>
                </div>
                <div className="h-44 rounded-[32px] overflow-hidden border border-white/10 relative group">
                  <img 
                    src="/assets/portfolio/Cotapata -12.jpg" 
                    alt="Ecosistema VERSE 2" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verse-bg via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 text-xs font-mono text-verse-cyan font-bold">Expedición Yungas</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="h-44 rounded-[32px] overflow-hidden border border-white/10 relative group">
                  <img 
                    src="/assets/portfolio/Noche de Museos-13.jpg" 
                    alt="Ecosistema VERSE 3" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verse-bg via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 text-xs font-mono text-verse-orange font-bold">Espacios Vivos</span>
                </div>
                <div className="h-64 rounded-[32px] overflow-hidden border border-white/10 relative group">
                  <img 
                    src="/assets/portfolio/Ses.Dajornix-38.jpg" 
                    alt="Ecosistema VERSE 4" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verse-bg via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 text-xs font-mono text-verse-purple font-bold">Frecuencias Sonoras</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 5: EL DESENLACE (Llamado a la Acción / Conversión)
          "Comencemos a dar forma a tu historia"
         ======================================================== */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[40px] border border-verse-cyan/30 glass-panel-heavy p-8 md:p-16 overflow-hidden shadow-[0_20px_60px_rgba(0,63,246,0.3)] text-center">
            {/* Glowing mystical center orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-verse-orange/20 via-verse-yellow/20 to-verse-cyan/20 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs uppercase tracking-widest text-verse-yellow font-mono font-bold block">
                EL DESENLACE • COMIENZA EL VIAJE
              </span>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white font-sans leading-tight">
                <span className="font-decorative text-4xl md:text-6xl lg:text-7xl text-verse-yellow font-normal mr-1">¿Q</span>
                <span>ué historia deseas inmortalizar en el tiempo?</span>
              </h2>
              
              <p className="text-gray-200 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Llegaste al final de este recorrido interactivo, pero es solo el umbral de lo que podemos crear juntos. Ya seas una marca con legado, un creador visionario o una entidad cultural, abramos el portal de tu próximo universo.
              </p>

              {/* Minimalist Quick Interaction Form */}
              <div className="pt-6 max-w-lg mx-auto">
                {!quickSubmitted ? (
                  <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      required
                      value={quickMsg.email}
                      onChange={(e) => setQuickMsg({ ...quickMsg, email: e.target.value })}
                      placeholder="Tu correo electrónico..."
                      className="flex-1 bg-verse-darkBlue/80 border border-white/15 rounded-full py-4 px-6 text-white text-sm focus:outline-none focus:border-verse-cyan focus:ring-1 focus:ring-verse-cyan transition-all placeholder:text-gray-400"
                    />
                    <Button 
                      type="submit"
                      primary 
                      className="px-8 py-4 whitespace-nowrap text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(237,98,46,0.6)]"
                    >
                      Comencemos a dar forma a tu historia
                    </Button>
                  </form>
                ) : (
                  <div className="glass-panel p-4 rounded-full border border-verse-cyan/40 text-verse-cyan text-xs font-bold font-mono tracking-wider flex items-center justify-center gap-2 animate-fade-in">
                    <Sparkles size={16} className="text-verse-yellow animate-spin" />
                    <span>¡Conexión iniciada! Te contactaremos al instante.</span>
                  </div>
                )}
                
                <p className="text-xs text-gray-400 mt-4 font-light">
                  O si prefieres detallar tu proyecto de inmediato,{' '}
                  <button 
                    onClick={onOpenContact} 
                    className="text-verse-yellow font-bold underline hover:text-white transition-colors"
                  >
                    abre el formulario completo de contacto
                  </button>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeView;
