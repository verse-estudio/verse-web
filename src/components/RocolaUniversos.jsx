import React, { useState, useRef, useEffect } from 'react';
import { Eye, ArrowUpRight, X, Sparkles, Disc, ChevronLeft, ChevronRight, Play, Film, Calendar, MapPin, Layers } from 'lucide-react';
import Button from './Button';

const projects = [
  {
    id: 'kusillo',
    title: 'El Viaje del Kusillo',
    category: 'Cortometraje & Simbolismo Andino',
    phrase: '“El espíritu que danza entre la burla sagrada y la memoria ancestral.”',
    year: '2025',
    location: 'La Paz, Bolivia',
    color: '#ed622e',
    glowClass: 'shadow-[0_0_50px_rgba(237,98,46,0.6)] border-verse-orange',
    poster: '/assets/portfolio/Kusillo -107.jpg',
    gallery: [
      '/assets/portfolio/Kusillo -107.jpg',
      '/assets/portfolio/Kusillo -103.jpg',
      '/assets/portfolio/Kusillo -110.jpg',
      '/assets/portfolio/Kusillo -156.jpg',
    ],
    synopsis: 'Una inmersión cinematográfica en la figura mística del Kusillo, personaje de la cosmovisión andina que encarna la picardía, la catarsis y la inversión del orden establecido. Un viaje visual que desentraña cómo la sátira se convierte en un mecanismo sagrado de resistencia cultural.',
    curation: 'Rodado en película de 16mm y sensores digitales full-frame. Diseño sonoro grabado en vivo durante festividades autóctonas con instrumentos de caña y percusiones de cuero crudo.',
    stats: [
      { label: 'Formato', value: '4K Cinema / 16mm' },
      { label: 'Rol', value: 'Dirección & Producción' },
      { label: 'Premio', value: 'Selección Oficial FicBolivia' }
    ]
  },
  {
    id: 'cotapata',
    title: 'Cotapata: Ruta de Niebla',
    category: 'Expedición Arqueológica & Paisajes Sonoros',
    phrase: '“Donde los Andes se disuelven en la Amazonía y el tiempo se detiene.”',
    year: '2025',
    location: 'Parque Nacional Cotapata, Yungas',
    color: '#1ECFF8',
    glowClass: 'shadow-[0_0_50px_rgba(30,207,248,0.6)] border-verse-cyan',
    poster: '/assets/portfolio/Cotapata -09.jpg',
    gallery: [
      '/assets/portfolio/Cotapata -09.jpg',
      '/assets/portfolio/Cotapata -12.jpg',
      '/assets/portfolio/Cotapata -17.jpg',
    ],
    synopsis: 'Registro documental y captura acústica de los caminos prehispánicos que atraviesan los bosques nublados de los Yungas paceños. Una travesía sensorial que sigue las huellas de antiguos caminantes entre neblinas eternas y biodiversidad endémica.',
    curation: 'Microfonía binaural, hidrófonos subacuáticos y fotografía de larga exposición para documentar la humedad, el eco y la atmósfera mística de la montaña.',
    stats: [
      { label: 'Altitud', value: '4,600m - 1,200m' },
      { label: 'Metodología', value: 'Bioacústica & Foto Fija' },
      { label: 'Impacto', value: 'Archivo Patrimonial' }
    ]
  },
  {
    id: 'portal-ancestral',
    title: 'Portal Ancestral',
    category: 'Instalación Inmersiva (Noche de Museos)',
    phrase: '“La bioluminiscencia como puente entre el origen y el porvenir.”',
    year: '2025',
    location: 'Centro Cultural de La Paz',
    color: '#1ECFF8',
    glowClass: 'shadow-[0_0_50px_rgba(30,207,248,0.6)] border-verse-cyan',
    poster: '/assets/portfolio/Noche de Museos-125.jpg',
    gallery: [
      '/assets/portfolio/Noche de Museos-125.jpg',
      '/assets/portfolio/Noche de Museos-13.jpg',
      '/assets/portfolio/Noche de Museos-142.jpg',
      '/assets/noche-de-museos/Noche de Museos-68.jpg'
    ],
    synopsis: 'Instalación interactiva a gran escala concebida para la Noche de Museos. Estructuras de arte textil tradicional andino combinadas con circuitos lumínicos reactivos y frecuencias sonoras binaurales que respondían a la presencia de los visitantes.',
    curation: 'Más de 3,500 personas interactuaron con el portal durante una sola noche, experimentando la fusión entre misticismo ancestral e interactividad contemporánea.',
    stats: [
      { label: 'Visitantes', value: '+3,500 en una noche' },
      { label: 'Tecnología', value: 'LED reactivo & Audio 3D' },
      { label: 'Curaduría', value: 'VERSE Estudio Colectivo' }
    ]
  },
  {
    id: 'busca-luz',
    title: 'Busca la Luz: Retratos del Alma',
    category: 'Fotografía de Autor & Introspección',
    phrase: '“En la penumbra más profunda, una sola chispa revela la verdad.”',
    year: '2026',
    location: 'La Paz & Altiplano',
    color: '#ffd213',
    glowClass: 'shadow-[0_0_50px_rgba(255,210,19,0.6)] border-verse-yellow',
    poster: '/assets/portfolio/Busca la Luz.jpg',
    gallery: [
      '/assets/portfolio/Busca la Luz.jpg',
      '/assets/portfolio/DSC_2571.jpg',
      '/assets/portfolio/DSC_2588.jpg',
    ],
    synopsis: 'Serie fotográfica de retratos en claroscuro impresa artesanalmente sobre lienzos texturizados de algodón orgánico. Una búsqueda introspectiva de las miradas que resguardan la memoria oral y las emociones esenciales de la vida cotidiana boliviana.',
    curation: 'Iluminación volumétrica con lámparas analógicas cálidas y pigmentos de conservación museística.',
    stats: [
      { label: 'Soporte', value: 'Lienzo de algodón 380g' },
      { label: 'Técnica', value: 'Claroscuro Pictórico' },
      { label: 'Edición', value: 'Seriada y certificada' }
    ]
  },
  {
    id: 'dajornix',
    title: 'Sesión Dajornix: Sintonía Étnica',
    category: 'Live Session Audiovisual & Arte Sonoro',
    phrase: '“Frecuencias analógicas que despiertan el eco de los cerros.”',
    year: '2026',
    location: 'Valle de las Ánimas, La Paz',
    color: '#ed622e',
    glowClass: 'shadow-[0_0_50px_rgba(237,98,46,0.6)] border-verse-orange',
    poster: '/assets/portfolio/Ses.Dajornix-38.jpg',
    gallery: [
      '/assets/portfolio/Ses.Dajornix-38.jpg',
      '/assets/portfolio/DSC_4383.jpg',
      '/assets/portfolio/DSC_9678.jpg',
    ],
    synopsis: 'Sesión en vivo grabada entre formaciones geológicas milenarias. Artistas electrónicos locales dialogan con instrumentos autóctonos (zampoñas cromáticas, charangos y bombos legüeros) procesados a través de sintetizadores modulares.',
    curation: 'Captura multicámara simultánea en plano secuencia continuo, con iluminación a batería diseñada específicamente para no alterar el ecosistema natural.',
    stats: [
      { label: 'Duración', value: '42 Minutos En Vivo' },
      { label: 'Audio', value: 'Multi-pista 96kHz/24bit' },
      { label: 'Plataforma', value: 'Streaming & Master Vinyl' }
    ]
  },
  {
    id: 'cronicas-altiplano',
    title: 'Crónicas del Altiplano',
    category: 'Cine Documental & Identidad',
    phrase: '“El horizonte infinito donde el cielo y la tierra se hacen uno solo.”',
    year: '2025',
    location: 'Salar de Uyuni & Cordillera Real',
    color: '#8723A1',
    glowClass: 'shadow-[0_0_50px_rgba(135,35,161,0.6)] border-verse-purple',
    poster: '/assets/portfolio/DSC_0009.jpg',
    gallery: [
      '/assets/portfolio/DSC_0009.jpg',
      '/assets/portfolio/DSC_0894 (1).jpg',
      '/assets/noche-de-museos/Noche de Museos-71.jpg'
    ],
    synopsis: 'Una mirada lírica y contemplativa hacia las comunidades que habitan los territorios más altos del continente. Exploramos cómo la inmensidad del silencio moldea la filosofía, el arte textil y los cantos ancestrales de las alturas.',
    curation: 'Paisajismo cinematográfico con lentes anamórficos vintage que acentúan la respiración del horizonte y los colores minerales de la cordillera.',
    stats: [
      { label: 'Lentes', value: 'Anamórficos Vintage 2x' },
      { label: 'Estreno', value: 'Gira Cultural Itinerante' },
      { label: 'Archivo', value: 'Fototeca VERSE' }
    ]
  }
];

const RocolaUniversos = ({ onOpenContact }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeModalImage, setActiveModalImage] = useState(0);

  // Auto-rotation when not hovering
  useEffect(() => {
    if (isHovered || selectedCase) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.15) % 360);
    }, 25);
    return () => clearInterval(interval);
  }, [isHovered, selectedCase]);

  // Mouse move horizontal tracking to rotate jukebox
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width; // 0 to 1
    const targetAngle = (relativeX - 0.5) * 180;
    setRotation(targetAngle);
  };

  const handlePrev = () => {
    setRotation((prev) => prev - (360 / projects.length));
  };

  const handleNext = () => {
    setRotation((prev) => prev + (360 / projects.length));
  };

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-verse-purple/20 via-verse-cyan/15 to-verse-orange/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Jukebox Arch & Header Controls */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-verse-cyan/10 border border-verse-cyan/30 text-verse-cyan text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <Disc size={14} className="animate-spin text-verse-yellow" />
          <span>ROCOLA DE UNIVERSOS • PORTFOLIO INTERACTIVO</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white font-sans tracking-tight leading-tight">
          <span className="font-decorative text-4xl md:text-6xl text-verse-cyan font-normal mr-1">L</span>
          <span>a Rocola de Universos</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base font-light mt-3 max-w-xl mx-auto leading-relaxed">
          Mueve tu cursor de izquierda a derecha para girar los universos visuales. Haz hover para detener la rocola y pulsa para entrar en la ficha del proyecto.
        </p>
      </div>

      {/* The Rocola Interactive Carousel Stage */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveProject(null);
        }}
        className="relative h-[520px] md:h-[580px] w-full max-w-6xl mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '1200px' }}
      >
        {/* Curved Jukebox Neon Rails / Horizon */}
        <div className="absolute bottom-16 inset-x-8 md:inset-x-24 h-48 rounded-full border-t border-dashed border-verse-cyan/25 pointer-events-none" />
        <div className="absolute bottom-8 inset-x-4 md:inset-x-12 h-64 rounded-full border-t border-verse-blue/30 pointer-events-none shadow-[0_-15px_30px_rgba(0,63,246,0.15)]" />

        {/* Floating Rotating Projects Carousel */}
        <div 
          className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {projects.map((proj, idx) => {
            const total = projects.length;
            const step = 360 / total;
            const currentAngle = (step * idx + rotation) % 360;
            // Normalize angle to -180 to 180
            const normalizedAngle = ((currentAngle + 180) % 360) - 180;
            const rad = (normalizedAngle * Math.PI) / 180;
            
            // 3D positioning along a circular orbit
            const radiusX = typeof window !== 'undefined' && window.innerWidth < 768 ? 200 : 380;
            const radiusZ = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 260;
            
            const x = Math.sin(rad) * radiusX;
            const z = Math.cos(rad) * radiusZ - radiusZ; // Closer to front
            const scale = Math.max(0.65, (z + radiusZ * 1.5) / (radiusZ * 2.5));
            const opacity = Math.max(0.35, (z + radiusZ * 1.5) / (radiusZ * 2));
            const isFront = normalizedAngle > -35 && normalizedAngle < 35;

            return (
              <div
                key={proj.id}
                onClick={() => setSelectedCase(proj)}
                onMouseEnter={() => setActiveProject(proj)}
                className="absolute transition-all duration-300 ease-out group"
                style={{
                  transform: `translate3d(${x}px, 0px, ${z}px) scale(${scale})`,
                  zIndex: Math.round((z + 500) * 10),
                  opacity: opacity,
                }}
              >
                {/* Poster Card with Mystical Glow */}
                <div 
                  className={`w-60 md:w-72 h-84 md:h-96 rounded-[36px] overflow-hidden bg-verse-navy border transition-all duration-500 cursor-pointer shadow-2xl relative ${
                    isFront ? 'border-verse-cyan/40 shadow-[0_10px_40px_rgba(30,207,248,0.35)]' : 'border-white/10 hover:border-white/30'
                  } group-hover:-translate-y-4 ${proj.glowClass}`}
                >
                  <img 
                    src={proj.poster} 
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback image view */}
                  <div className="hidden absolute inset-0 bg-verse-darkBlue flex-col items-center justify-center p-6 text-center">
                    <Film className="w-12 h-12 text-verse-cyan mb-2" />
                    <span className="text-sm font-bold text-white font-serif">{proj.title}</span>
                  </div>

                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-verse-bg via-verse-bg/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-verse-bg/80 backdrop-blur-md border border-white/10 text-verse-cyan font-bold">
                      {proj.category.split('&')[0]}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-verse-bg/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center group-hover:bg-verse-orange group-hover:text-verse-bg transition-colors shadow-lg">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="absolute bottom-5 inset-x-5 flex flex-col">
                    <span className="text-[10px] text-verse-yellow uppercase tracking-widest font-mono mb-1 font-bold">
                      {proj.location} • {proj.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-white tracking-wide leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-verse-cyan group-hover:to-verse-yellow transition-all">
                      {proj.title}
                    </h3>
                    
                    {/* Enigmatic phrase on hover */}
                    <p className="text-xs text-gray-300 font-light italic mt-2 line-clamp-2 transition-all opacity-85 group-hover:opacity-100 group-hover:text-white">
                      {proj.phrase}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Prev / Next Arrow triggers */}
        <button
          onClick={handlePrev}
          aria-label="Proyecto anterior"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass-panel border border-white/15 text-white flex items-center justify-center hover:bg-verse-cyan hover:text-verse-bg hover:border-verse-cyan transition-all duration-300 shadow-xl"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Siguiente proyecto"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass-panel border border-white/15 text-white flex items-center justify-center hover:bg-verse-cyan hover:text-verse-bg hover:border-verse-cyan transition-all duration-300 shadow-xl"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Enigmatic phrase ticker at the bottom */}
      <div className="max-w-xl mx-auto text-center px-4 -mt-4 relative z-20">
        <div className="glass-panel px-6 py-3.5 rounded-full border border-verse-cyan/20 inline-flex items-center gap-3 shadow-lg">
          <Sparkles size={16} className="text-verse-yellow shrink-0 animate-pulse" />
          <p className="text-xs md:text-sm text-gray-200 font-light italic tracking-wide">
            {activeProject ? activeProject.phrase : '“Gira la rocola y selecciona una obra para desentrañar su narrativa.”'}
          </p>
        </div>
      </div>

      {/* ========================================================
          IMMERSIVE PROJECT CASE STUDY MODAL
         ======================================================== */}
      {selectedCase && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-verse-bg/95 backdrop-blur-xl animate-fade-in overflow-y-auto"
          onClick={() => setSelectedCase(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedCase(null)}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-verse-orange hover:text-verse-bg transition-colors border border-white/10"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>

          <div 
            className="relative w-full max-w-5xl my-8 glass-panel-heavy border border-verse-cyan/30 rounded-[40px] p-6 md:p-10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Modal Orb */}
            <div 
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-25 pointer-events-none"
              style={{ backgroundColor: selectedCase.color }}
            />

            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-verse-cyan font-bold">
                    {selectedCase.category}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-xs text-gray-400 font-mono">
                    {selectedCase.location} ({selectedCase.year})
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black font-serif text-white tracking-tight">
                  {selectedCase.title}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Button 
                  primary 
                  onClick={() => {
                    setSelectedCase(null);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider"
                >
                  Colaborar en este formato
                </Button>
              </div>
            </div>

            {/* Main Visual Showcase (Large Gallery Viewer) */}
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
              {/* Main Photo Display */}
              <div className="lg:col-span-8 space-y-4">
                <div className="relative h-[360px] md:h-[460px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-verse-navy">
                  <img 
                    src={selectedCase.gallery[activeModalImage] || selectedCase.poster}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verse-bg/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs md:text-sm text-verse-yellow font-serif italic drop-shadow-md">
                      {selectedCase.phrase}
                    </p>
                  </div>
                </div>

                {/* Thumbnails strip */}
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {selectedCase.gallery.map((imgUrl, thumbIdx) => (
                    <button
                      key={thumbIdx}
                      onClick={() => setActiveModalImage(thumbIdx)}
                      className={`relative w-24 h-18 md:w-28 md:h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeModalImage === thumbIdx ? 'border-verse-cyan scale-105 shadow-[0_0_15px_#1ECFF8]' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Case Study Details & Stats Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-verse-cyan font-bold flex items-center gap-2">
                    <Layers size={14} />
                    <span>Sinopsis Curatorial</span>
                  </h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {selectedCase.synopsis}
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-verse-yellow font-bold flex items-center gap-2">
                    <Film size={14} />
                    <span>Metodología & Sonido</span>
                  </h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {selectedCase.curation}
                  </p>
                </div>

                {/* Production Stats */}
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedCase.stats.map((st, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center px-4 py-3 rounded-2xl bg-white/5 border border-white/5 text-xs">
                      <span className="text-gray-400 font-light">{st.label}</span>
                      <span className="text-white font-mono font-bold">{st.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs uppercase tracking-widest text-verse-cyan font-mono block">¿Tienes una visión similar?</span>
                <p className="text-white text-sm font-serif">Transformemos tu identidad o proyecto en una obra audiovisual trascendente.</p>
              </div>
              <Button 
                primary 
                onClick={() => {
                  setSelectedCase(null);
                  if (onOpenContact) onOpenContact();
                }}
                className="px-8 py-3 text-xs uppercase tracking-wider"
              >
                Comencemos a dar forma a tu historia
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RocolaUniversos;
