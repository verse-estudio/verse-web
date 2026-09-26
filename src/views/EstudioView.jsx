import React, { useState } from 'react';
import { Camera, Sparkles, ChevronRight, Eye, Film, Layers, ArrowLeft, ArrowRight, Play, Users, FolderOpen, Heart, Calendar } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const EstudioView = () => {
  // States for interactive components
  const [activeAVIndex, setActiveAVIndex] = useState(1);
  const [portfolioTab, setPortfolioTab] = useState('audiovisual');

  // Trajectory founders data
  const founders = [
    {
      name: 'Andrés "Kori" Silva',
      role: 'Co-fundador / Director de Arte & Narrativa',
      focus: 'Introspección & Comunicación',
      bio: 'Cineasta y artista visual de La Paz. Su carrera se ha centrado en el rescate de la memoria oral y los símbolos ancestrales bolivianos, traduciéndolos a formatos visuales contemporáneos. Integra la mística y la dirección de arte simbólica en cada proyecto.',
      avatar: '/assets/noche-de-museos/Noche de Museos-70.jpg', // Utilizing real high-res event portrait
      fallbackInitials: 'AK'
    },
    {
      name: 'Santiago "Verse" Cárdenas',
      role: 'Co-fundador / Director de Estrategia & Producción',
      focus: 'Conexión & Estrategia',
      bio: 'Productor audiovisual y estratega de Inbound Marketing. Especialista en digitalización y automatización de contenidos creativos. Su misión es crear puentes y asegurar que las obras cinematográficas alcancen el impacto y la exposición real que merecen.',
      avatar: '/assets/noche-de-museos/Noche de Museos-71.jpg',
      fallbackInitials: 'SC'
    }
  ];

  // Audiovisual Projects - Billboard data
  const avProjects = [
    {
      id: 1,
      title: 'El Viaje del Kusillo',
      category: 'Cortometraje & Simbolismo Andino',
      year: '2025',
      desc: 'Dirección cinematográfica sobre la máscara mística del Kusillo. Una introspección visual que aborda el humor andino, el dolor y la memoria ancestral.',
      image: '/assets/portfolio/Kusillo -107.jpg',
      tags: ['Cine Documental', 'Simbolismo', '16mm & 4K']
    },
    {
      id: 2,
      title: 'Cotapata: Ruta de Niebla y Silencio',
      category: 'Expedición Arqueológica & Sonido',
      year: '2025',
      desc: 'Exploración en los bosques nublados de los Yungas siguiendo los senderos prehispánicos, con captura bioacústica y fotografía de autor.',
      image: '/assets/portfolio/Cotapata -09.jpg',
      tags: ['Arqueología', 'Bioacústica', 'Yungas']
    },
    {
      id: 3,
      title: 'Portal Ancestral (Noche de Museos)',
      category: 'Instalación Inmersiva',
      year: '2025',
      desc: 'Montaje conceptual en La Paz con bioluminiscencia reactiva y frecuencias sonoras andinas para más de 3,500 espectadores.',
      image: '/assets/portfolio/Noche de Museos-125.jpg',
      tags: ['Bioluminiscencia', 'Instalación', 'Arte Sonoro']
    },
    {
      id: 4,
      title: 'Busca la Luz: Retratos del Alma',
      category: 'Fotografía de Autor',
      year: '2026',
      desc: 'Serie en claroscuro impresa sobre lienzos de algodón orgánico, explorando las miradas que resguardan la memoria oral boliviana.',
      image: '/assets/portfolio/Busca la Luz.jpg',
      tags: ['Bellas Artes', 'Claroscuro', 'Lienzo Texturizado']
    }
  ];

  // Rotating carousel controls
  const handlePrevAV = () => {
    setActiveAVIndex((prev) => (prev === 0 ? avProjects.length - 1 : prev - 1));
  };

  const handleNextAV = () => {
    setActiveAVIndex((prev) => (prev === avProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-32 pb-24 px-4 animate-fade-in min-h-screen relative overflow-hidden bg-verse-bg">
      {/* Background patterns & glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-verse-purple rounded-full mix-blend-screen filter blur-[128px] opacity-15 pointer-events-none animate-blob" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-verse-blue rounded-full mix-blend-screen filter blur-[140px] opacity-15 pointer-events-none animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-32">

        {/* ========================================================
            PANEL 1: ¿QUIÉNES SOMOS? (Trayectoria e Integrantes)
           ======================================================== */}
        <section className="space-y-16">
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-verse-cyan font-bold block mb-2 font-mono">El Origen del Mensaje</span>
            <SectionHeading 
              title="¿Quiénes Somos?" 
              subtitle="Una hermandad de creadores dedicada a fusionar arte, tecnología y misticismo para narrar historias trascendentes."
            />
          </div>

          {/* Trajectory narrative */}
          <div className="glass-panel p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-verse-orange rounded-full mix-blend-screen filter blur-[80px] opacity-10 pointer-events-none" />
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
                <div className="w-16 h-16 rounded-full bg-verse-orange/15 border border-verse-orange/30 flex items-center justify-center text-verse-orange">
                  <Layers size={32} />
                </div>
                <h3 className="text-3xl font-bold font-sans text-white text-center md:text-left">
                  <span className="font-decorative text-4xl text-verse-cyan font-normal mr-1">N</span>
                  <span>uestra Trayectoria</span>
                </h3>
                <span className="text-xs uppercase tracking-widest text-verse-yellow font-black">Establecidos en La Paz, Bolivia</span>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-300 font-light leading-relaxed">
                <p>
                  VERSE nació no solo como una productora, sino como una respuesta filosófica al olvido cultural y la desconexión social. Convencidos de que las mejores historias son aquellas que motivan la introspección personal, nuestros fundadores fusionaron su experiencia en el cine documental andino y las estrategias digitales para estructurar un espacio que trascienda formatos.
                </p>
                <p>
                  Desde nuestras primeras instalaciones en la aclamada <strong className="text-white font-semibold">Noche de Museos</strong> hasta las producciones de video-marketing inmersivas, VERSE ha operado bajo la premisa de unir comunidades a través de emociones reales, estética bioluminiscente y composiciones sonoras ancestrales.
                </p>
              </div>
            </div>
          </div>

          {/* Founders presenting profiles */}
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-8 rounded-[40px] border border-white/5 hover:border-verse-cyan/30 shadow-xl transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Founder avatar mockup with glow */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-verse-cyan/30 shadow-[0_0_20px_rgba(30,207,248,0.2)] bg-verse-navy relative shrink-0">
                      <img 
                        src={founder.avatar} 
                        alt={founder.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden absolute inset-0 bg-verse-purple flex items-center justify-center text-white font-serif text-xl font-bold">
                        {founder.fallbackInitials}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold font-serif text-white tracking-wide">{founder.name}</h4>
                      <p className="text-xs text-verse-cyan font-semibold mt-1">{founder.role}</p>
                    </div>
                  </div>
                  
                  {/* Bio details */}
                  <p className="text-gray-400 text-sm leading-relaxed font-light mt-4">
                    {founder.bio}
                  </p>
                </div>

                {/* Specific brand value associated */}
                <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-bold uppercase tracking-wider">Foco de Trascendencia:</span>
                  <span className="px-3 py-1 rounded-full bg-verse-purple/10 border border-verse-purple/35 text-verse-yellow font-black uppercase font-mono tracking-widest">{founder.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            PANEL 2: PORTAFOLIO DE CREACIONES (4 subapartados)
           ======================================================== */}
        <section className="space-y-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-verse-cyan font-bold block mb-2 font-mono">Archivos Sensoriales</span>
            <h2 className="text-4xl md:text-5xl font-black text-white font-serif leading-tight">Portafolio</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light mt-3 leading-relaxed">
              Explora las cuatro dimensiones de nuestra obra visual. Utiliza las pestañas interactivas para viajar entre narrativas.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 border-b border-white/10 pb-6 relative z-20">
            {[
              { id: 'audiovisual', label: 'Proyectos Audiovisuales' },
              { id: 'fotograficos', label: 'Proyectos Fotográficos' },
              { id: 'otros', label: 'Otros Proyectos' },
              { id: 'makingof', label: 'Making Of' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPortfolioTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-black transition-all duration-300 ${portfolioTab === tab.id ? 'bg-verse-orange text-verse-bg shadow-[0_0_15px_rgba(237,98,46,0.5)] border border-verse-orange' : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/20'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT 1: AUDIOVISUAL (Interactive rotating billboard) */}
          {portfolioTab === 'audiovisual' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center max-w-lg mx-auto">
                <span className="text-[10px] text-verse-yellow font-bold uppercase tracking-widest">Cartelera Rotativa Interactiva</span>
                <p className="text-xs text-gray-500 mt-1 font-light">Haz clic en las flechas para girar y seleccionar producciones.</p>
              </div>

              {/* Billboard container */}
              <div className="relative flex items-center justify-center gap-6 w-full max-w-4xl mx-auto h-[420px] md:h-[450px]">
                {/* Arrow Left */}
                <button 
                  onClick={handlePrevAV}
                  className="absolute left-0 sm:left-4 z-20 w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-verse-cyan/40 hover:bg-verse-cyan/15 text-white flex items-center justify-center transition-all active:scale-95 shadow-lg shrink-0"
                >
                  <ArrowLeft size={18} />
                </button>

                {/* Rotating cards billboard simulation */}
                <div className="relative w-full flex items-center justify-center h-full overflow-hidden px-10">
                  {avProjects.map((proj, idx) => {
                    // Positional calculations for visual rotation
                    const position = idx - activeAVIndex;
                    const isActive = idx === activeAVIndex;
                    
                    // Simple classes mapping to simulate 3D rotation
                    let posClass = "opacity-0 pointer-events-none scale-75";
                    if (position === 0) {
                      posClass = "z-10 scale-100 shadow-[0_20px_50px_rgba(30,207,248,0.25)] border-verse-cyan/40 opacity-100";
                    } else if (position === 1 || (position === -2 && activeAVIndex === 0)) {
                      posClass = "z-0 scale-90 translate-x-[25%] md:translate-x-[45%] opacity-40 blur-[1px]";
                    } else if (position === -1 || (position === 2 && activeAVIndex === 2)) {
                      posClass = "z-0 scale-90 -translate-x-[25%] md:-translate-x-[45%] opacity-40 blur-[1px]";
                    }

                    return (
                      <div
                        key={proj.id}
                        onClick={() => setActiveAVIndex(idx)}
                        className={`absolute w-64 sm:w-80 h-[380px] rounded-[36px] overflow-hidden border border-white/10 bg-verse-navy transition-all duration-700 ease-in-out cursor-pointer ${posClass}`}
                      >
                        <img 
                          src={proj.image} 
                          alt={proj.title} 
                          className="w-full h-2/3 object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Shading */}
                        <div className="absolute inset-0 bg-gradient-to-t from-verse-bg via-transparent to-transparent h-2/3 pointer-events-none" />

                        {/* Visual overlay tag */}
                        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-wider font-bold">
                          {proj.category}
                        </div>

                        {/* Interactive Play Button inside the central active element */}
                        {isActive && (
                          <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-verse-orange/90 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                            <Play size={20} className="ml-1 fill-current" />
                          </div>
                        )}

                        {/* Card Details */}
                        <div className="p-5 space-y-2.5 h-1/3 bg-verse-darkBlue/90 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-center text-[10px] text-verse-cyan font-bold tracking-widest font-mono">
                              <span>VERSE PRODUCTION</span>
                              <span>{proj.year}</span>
                            </div>
                            <h4 className="text-base font-bold font-serif text-white tracking-wide mt-1 truncate">{proj.title}</h4>
                            <p className="text-gray-400 text-[10px] leading-relaxed font-light line-clamp-2 mt-1">{proj.desc}</p>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {proj.tags.map((t, i) => (
                              <span key={i} className="text-[8px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300 font-bold border border-white/5 font-mono">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Arrow Right */}
                <button 
                  onClick={handleNextAV}
                  className="absolute right-0 sm:right-4 z-20 w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-verse-cyan/40 hover:bg-verse-cyan/15 text-white flex items-center justify-center transition-all active:scale-95 shadow-lg shrink-0"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT 2: FOTOGRÁFICOS */}
          {portfolioTab === 'fotograficos' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {[
                { 
                  title: 'Bitácora Andina: Rostros de Bolivia', 
                  desc: 'Galería de retratos texturizados impresos en lienzos artesanales.', 
                  image: '/assets/noche-de-museos/Noche de Museos-69.jpg',
                  count: '18 Fotografías'
                },
                { 
                  title: 'Arquitectura Ancestral Inmortal', 
                  desc: 'Documentación en alto contraste y detalles minimalistas de monolitos andinos.', 
                  image: '/assets/noche-de-museos/Noche de Museos-71.jpg',
                  count: '12 Fotografías'
                },
                { 
                  title: 'Mística Bioluminiscente Nocturna', 
                  desc: 'Paisajes fotográficos experimentales de Bolivia expuestos a larga duración.', 
                  image: '/assets/noche-de-museos/Noche de Museos-68.jpg',
                  count: '15 Fotografías'
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative h-80 rounded-organic overflow-hidden border border-white/10 shadow-lg cursor-pointer">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-verse-bg/95 via-verse-bg/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[9px] uppercase tracking-widest text-verse-cyan font-bold font-mono">{item.count}</span>
                    <h4 className="font-bold text-lg font-serif text-white tracking-wide mt-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs font-light mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB CONTENT 3: OTROS PROYECTOS */}
          {portfolioTab === 'otros' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {[
                {
                  title: 'Monolito Art Toy (Limited Concept)',
                  type: 'Concept Art & Diseño de Producto',
                  desc: 'Modelado y diseño del juguete de arte conceptual en vinilo semitranslúcido con materiales que absorben la luz y brillan en la oscuridad (bioluminiscentes).',
                  image: '/assets/noche-de-museos/Noche de Museos-68.jpg',
                  action: 'Ver Detalle Concept'
                },
                {
                  title: 'Pre-Sets Cinematográficos VERSE Vol. I',
                  type: 'Color Grading & Edición de Video',
                  desc: 'LUTS de color y esquemas cromáticos personalizados que evocan la mística fría y cálida de los altiplanos bolivianos para editores profesionales.',
                  image: '/assets/noche-de-museos/Noche de Museos-70.jpg',
                  action: 'Explorar Presets'
                }
              ].map((proj, idx) => (
                <div key={idx} className="glass-panel rounded-organic p-6 border border-white/5 hover:border-verse-orange/30 transition-all duration-500 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 h-40 rounded-[28px] overflow-hidden border border-white/10 shrink-0">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] text-verse-yellow font-bold uppercase tracking-widest font-mono block">{proj.type}</span>
                    <h4 className="text-xl font-bold font-serif text-white tracking-wide">{proj.title}</h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">{proj.desc}</p>
                    <button className="text-xs text-verse-cyan font-bold hover:text-white flex items-center gap-1.5 transition-colors">
                      {proj.action} <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB CONTENT 4: MAKING OF */}
          {portfolioTab === 'makingof' && (
            <div className="glass-panel p-8 md:p-12 rounded-[40px] border border-white/10 shadow-xl relative overflow-hidden animate-fade-in">
              <div className="absolute top-0 right-0 w-32 h-32 bg-verse-purple rounded-full mix-blend-screen filter blur-[80px] opacity-10 pointer-events-none" />
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 h-72 group cursor-pointer shadow-lg">
                  <img src="/assets/noche-de-museos/Noche de Museos-71.jpg" alt="Making Of Behind Scenes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Play size={24} className="ml-1 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <span className="text-xs uppercase tracking-widest text-verse-orange font-bold block font-mono">Detrás de Cámaras</span>
                  <h3 className="text-3xl font-bold font-serif text-white tracking-wide">El Alma del Rodaje</h3>
                  <p className="text-gray-300 font-light leading-relaxed text-sm">
                    En VERSE creemos que el proceso creativo tiene tanto valor estético e histórico como el producto final. Por eso, documentamos metódicamente cada rodaje, montaje y sesión técnica de calibración de audio ancestral.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-xs italic">
                    Descubre cómo preparamos los proyectores de luz bioluminiscente andina y los micrófonos experimentales en las noches paceñas.
                  </p>
                  <Button onClick={() => setPortfolioTab('audiovisual')} className="py-2.5 px-6 text-xs uppercase tracking-wider">Ver Más Detrás de Escenas</Button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================
            PANEL 3: SERVICIOS (Líneas de Producción)
           ======================================================== */}
        <section className="space-y-16">
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-verse-cyan font-bold block mb-2 font-mono">Soluciones Creativas</span>
            <h2 className="text-4xl md:text-5xl font-black text-white font-serif leading-tight">Servicios Creativos</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light mt-3 leading-relaxed">
              Diseño, dirección y distribución metodológica de contenidos de alto impacto estético y estratégico. Puedes ver y adquirir nuestros planes optimizados en la Tienda.
            </p>
          </div>

          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-verse-cyan font-bold block">SERVICIO CINEMATOGRÁFICO</span>
              <h2 className="text-3xl font-bold text-white font-serif tracking-wide">Producción Audiovisual</h2>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Integramos técnicas cinematográficas para expresar visualmente el mensaje de tus historias. Utilizamos la psicología del color y la semiótica de la imagen para crear composiciones que evocan emociones puras.
              </p>
              <ul className="space-y-4 text-gray-400 text-xs font-light">
                <li className="flex items-center gap-3"><ChevronRight className="text-verse-cyan shrink-0" size={16}/> Dirección de Arte & Cine Documental</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-verse-cyan shrink-0" size={16}/> Video Marketing de Alta Calidad para RRSS (TikTok, Reels, YouTube)</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-verse-cyan shrink-0" size={16}/> Documentación de Eventos Culturales de Alta Exposición</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-verse-bg to-verse-purple p-1 rounded-[32px] shadow-2xl hover:shadow-verse-purple/20 transition-shadow duration-500">
              <div className="bg-verse-navy h-80 rounded-[28px] flex items-center justify-center relative overflow-hidden group border border-white/5">
                <Camera size={64} className="text-verse-cyan group-hover:scale-110 group-hover:text-verse-yellow transition-all duration-500 drop-shadow-[0_0_20px_rgba(30,207,248,0.4)]" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row-reverse">
            <div className="bg-gradient-to-bl from-verse-orange to-verse-yellow p-1 rounded-[32px] shadow-2xl hover:shadow-verse-orange/20 transition-shadow duration-500 md:order-1">
              <div className="bg-verse-navy h-80 rounded-[28px] flex items-center justify-center relative overflow-hidden group border border-white/5">
                <Sparkles size={64} className="text-verse-orange group-hover:scale-110 group-hover:text-verse-yellow transition-all duration-500 drop-shadow-[0_0_20px_rgba(237,98,46,0.4)]" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            </div>
            <div className="space-y-6 md:order-2">
              <span className="text-xs uppercase tracking-widest text-verse-orange font-bold block">ESTRATEGIA DE MARCA</span>
              <h2 className="text-3xl font-bold text-white font-serif tracking-wide">Storytelling & Branding</h2>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Si pudieras escribir un mensaje en el tiempo, ¿qué dirías? Transformamos tu identidad corporativa en una narrativa visual y verbal que conecta profundamente con tu comunidad y crea fidelidad a largo plazo.
              </p>
              <ul className="space-y-4 text-gray-400 text-xs font-light">
                <li className="flex items-center gap-3"><ChevronRight className="text-verse-yellow shrink-0" size={16}/> Diseño de Identidad Visual, Logotipos y Concept Art</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-verse-yellow shrink-0" size={16}/> Redacción Creativa y Copywriting Sabio de Marca</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-verse-yellow shrink-0" size={16}/> Estrategias Metódicas de Inbound Marketing para Madurar Leads</li>
              </ul>
            </div>
          </div>

          {/* The Creative Triad Block */}
          <div className="pt-16 border-t border-white/5">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-verse-cyan font-bold block mb-2">METODOLOGÍA DE TRABAJO</span>
              <h3 className="text-3xl font-bold text-white font-serif tracking-wide">Nuestra Tríada Creativa</h3>
              <p className="text-gray-400 text-xs max-w-xl mx-auto font-light mt-2">
                Fusión metódica para manifestar historias con propósito y valor estético.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Imaginar',
                  motto: 'Pensar | Explorar',
                  desc: 'Buceamos en las profundidades de la introspección y el misticismo para encontrar conceptos y raíces narrativas únicas.',
                  icon: Eye,
                  color: 'text-verse-cyan',
                  border: 'hover:border-verse-cyan/30'
                },
                {
                  title: 'Crear',
                  motto: 'Dirigir | Diseñar',
                  desc: 'Producimos y editamos piezas cinematográficas y visuales combinando bioluminiscencia y texturas artesanales.',
                  icon: Film,
                  color: 'text-verse-orange',
                  border: 'hover:border-verse-orange/30'
                },
                {
                  title: 'Trascender',
                  motto: 'Estrategia | Conectar',
                  desc: 'Gestionamos y distribuimos el contenido utilizando automatizaciones y marketing de atracción que genera valor a largo plazo.',
                  icon: Layers,
                  color: 'text-verse-purple',
                  border: 'hover:border-verse-purple/30'
                }
              ].map((step, idx) => (
                <div 
                  key={idx} 
                  className={`glass-panel p-8 rounded-[40px] border border-white/5 transition-all duration-500 hover:-translate-y-2 ${step.border} text-center flex flex-col items-center`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <step.icon className={`${step.color} w-8 h-8 shrink-0`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 font-serif tracking-wide">{step.title}</h3>
                  <span className="text-xs uppercase font-bold tracking-wider text-verse-yellow mb-4 block">{step.motto}</span>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            PANEL 4: COLABORACIONES (Proyectos con Comunidad)
           ======================================================== */}
        <section className="space-y-16">
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-verse-cyan font-bold block mb-2 font-mono">Alianzas de Valor</span>
            <h2 className="text-4xl md:text-5xl font-black text-white font-serif leading-tight">Colaboraciones</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light mt-3 leading-relaxed">
              Buscamos fundaciones, gestores culturales y marcas conscientes para crear proyectos cinematográficos que despierten y preserven la cultura.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                partner: 'Fundación Patiño',
                desc: 'Alianza estratégica para la documentación audiovisual y difusión interactiva del patrimonio cultural y tradiciones andinas de Bolivia.',
                logo: 'FP',
                type: 'Preservación Histórica',
                badgeColor: 'border-verse-orange text-verse-orange'
              },
              {
                partner: 'Red de Museos La Paz',
                desc: 'Colaboración inmersiva en la Noche de Museos, proyectando arte bioluminiscente y adaptando montajes ancestrales interactivos.',
                logo: 'ML',
                type: 'Experiencia Inmersiva',
                badgeColor: 'border-verse-cyan text-verse-cyan'
              },
              {
                partner: 'Colectivo de Creadores Locales',
                desc: 'Talleres experimentales fotográficos para incentivar a estudiantes y aficionados a capturar la arqueología y el folklore boliviano.',
                logo: 'CC',
                type: 'Educación & Talleres',
                badgeColor: 'border-verse-purple text-verse-purple'
              }
            ].map((colab, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-8 rounded-[40px] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white text-lg font-serif">
                      {colab.logo}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-serif text-white">{colab.partner}</h4>
                      <span className={`text-[8px] uppercase font-bold font-mono tracking-widest px-2.5 py-0.5 rounded-full border ${colab.badgeColor} mt-1 inline-block`}>
                        {colab.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed font-light pt-2">
                    {colab.desc}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6 text-right">
                  <button className="text-[10px] uppercase tracking-widest text-verse-yellow font-black hover:text-white flex items-center gap-1.5 transition-colors ml-auto">
                    Conocer Proyecto <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            PANEL 5: PRÓXIMAMENTE (Próximos Estrenos)
           ======================================================== */}
          <section className="space-y-16">
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-verse-yellow font-bold block mb-2 font-mono">El Futuro es Hoy</span>
              <h2 className="text-4xl md:text-5xl font-black text-white font-serif leading-tight">Próximamente</h2>
              <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light mt-3 leading-relaxed">
                Próximos estrenos, publicaciones e hitos que manifestaremos en nuestro universo creativo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'El Mensaje en el Tiempo',
                  type: 'Cortometraje Cinematográfico Inmersivo',
                  date: 'Estreno: Junio 2026',
                  desc: 'Una producción experimental que profundiza en la mística paceña y los relatos del tiempo. Filmado íntegramente en locaciones de Bolivia, con una composición sonora envolvente.',
                  badge: 'CINE DE AUTOR',
                  glow: 'border-verse-cyan/35 shadow-[0_0_20px_rgba(30,207,248,0.15)]'
                },
                {
                  title: 'VERSE Presets Vol. II (Luminiscencia)',
                  type: 'Publicación de Infoproducto Digital',
                  date: 'Lanzamiento: Julio 2026',
                  desc: 'Nuestra segunda entrega de presets y esquemas cromáticos de calibración fotográfica, optimizada para editores móviles y creadores de contenido conscientes que buscan el look bioluminiscente.',
                  badge: 'RECURSOS DIGITALES',
                  glow: 'border-verse-orange/35 shadow-[0_0_20px_rgba(237,98,46,0.15)]'
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`glass-panel p-8 rounded-[40px] border flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] ${item.glow}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[9px] uppercase tracking-widest text-verse-cyan font-bold font-mono">{item.badge}</span>
                      <div className="flex items-center gap-1 text-verse-yellow text-xs font-bold font-mono">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold font-serif text-white tracking-wide">{item.title}</h4>
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block">{item.type}</span>
                    
                    <p className="text-gray-400 text-xs leading-relaxed font-light pt-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-xs">
                    <span className="text-gray-500 italic">“¿Qué historia deseas contar?”</span>
                    <span className="text-verse-orange font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                      Guardar Fecha <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

      </div>
    </div>
  );
};

export default EstudioView;
