import React, { useEffect, useState } from 'react';

/**
 * VersePreloader
 * Pantalla de carga inmersiva previa a la presentación de la web.
 * Muestra el isotipo oficial, auras bioluminiscentes y el mensaje
 * "Conectando al Universo VERSE" hasta que el logo 3D se descarga y monta en WebGL.
 */
export default function VersePreloader({ isLoaded }) {
  const [shouldRender, setShouldRender] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Simular un avance fluido de carga cósmica
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) {
          clearInterval(progressInterval);
          return 92;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 180);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Temporizador de seguridad máximo (7.5s) por si la red del usuario es muy lenta
    const safetyTimeout = setTimeout(() => {
      triggerFadeOut();
    }, 7500);

    if (isLoaded) {
      setProgress(100);
      const timer = setTimeout(() => {
        triggerFadeOut();
      }, 500); // 500ms de gracia para que Three.js renderice el primer frame sin parpadeo
      return () => {
        clearTimeout(timer);
        clearTimeout(safetyTimeout);
      };
    }

    return () => clearTimeout(safetyTimeout);
  }, [isLoaded]);

  const triggerFadeOut = () => {
    setIsFadingOut(true);
    const finishTimer = setTimeout(() => {
      setShouldRender(false);
    }, 850); // Tiempo que dura la transición CSS de opacidad
    return () => clearTimeout(finishTimer);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#010B24] transition-all duration-800 ease-out select-none px-6 ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100 pointer-events-auto scale-100'
      }`}
    >
      {/* Nebulosas cósmicas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-verse-blue/30 via-verse-cyan/20 to-verse-purple/20 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-verse-cyan/15 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-verse-blue/20 rounded-full blur-[110px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md text-center">
        {/* Contenedor del Isotipo con anillos orbitales bioluminiscentes */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-8">
          {/* Resplandor pulsante */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-verse-blue/50 via-verse-cyan/40 to-transparent blur-xl animate-pulse" />

          {/* Anillo exterior orbitante */}
          <div className="absolute inset-0 rounded-full border border-verse-cyan/30 border-t-verse-cyan animate-spin [animation-duration:8s]" />

          {/* Anillo medio con patrón estelar */}
          <div className="absolute inset-3 rounded-full border border-dashed border-verse-blue/50 animate-spin [animation-duration:14s] [animation-direction:reverse]" />

          {/* Anillo interior brillante */}
          <div className="absolute inset-6 rounded-full border-2 border-t-verse-cyan border-r-transparent border-b-verse-blue border-l-transparent animate-spin [animation-duration:3s]" />

          {/* Isotipo del rostro oficial VERSE */}
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <img
              src="/assets/logo/official_isotipo_cara.png"
              alt="Cargando VERSE"
              className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(30,207,248,0.7)] animate-float"
            />
          </div>
        </div>

        {/* Texto solicitado: Conectando al Universo VERSE */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-white tracking-[0.2em] uppercase leading-tight mb-2 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
          Conectando al Universo VERSE
        </h2>

        {/* Estado místico / cósmico */}
        <p className="text-xs sm:text-sm text-verse-cyan font-mono tracking-widest uppercase mb-7 opacity-90 animate-pulse">
          {progress < 60 ? 'Invocando materia estelar...' : progress < 90 ? 'Cargando máscara 3D...' : 'Entrando al portal...'}
        </p>

        {/* Barra de progreso de energía bioluminiscente */}
        <div className="w-56 sm:w-72 h-1 bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_15px_rgba(0,63,246,0.3)]">
          <div
            className="h-full bg-gradient-to-r from-verse-blue via-verse-cyan to-white transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(30,207,248,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Cita enigmática del estudio */}
        <p className="text-[11px] text-gray-400 italic tracking-wider mt-8 font-light max-w-xs">
          “Si pudieras escribir un mensaje en el tiempo, ¿qué dirías?”
        </p>
      </div>
    </div>
  );
}
