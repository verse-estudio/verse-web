import React, { useEffect, useRef } from 'react';

/**
 * DynamicGalaxyScene
 * 
 * Escena cósmica dinámica para el Hero de VERSE:
 * - Galaxia espiral en rotación con brazos logarítmicos
 * - Paleta estelar del design system (Azul Estructura #003FF6, Cyan Bioluminiscente #1ECFF8, Púrpura #8723A1)
 * - Núcleo estelar brillante que enmarca y da protagonismo absoluto al rostro 3D de la marca
 * - Parallax interactivo sensible a la posición del cursor
 */
export default function DynamicGalaxyScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Parallax del cursor
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetMouseX = x * 0.05;
      targetMouseY = y * 0.05;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Configuración de la galaxia espiral
    const STAR_COUNT = 1300;
    const ARMS = 3;
    const ARM_SPREAD = 0.55;
    const ROTATION_SPEED = 0.0016;

    // Paleta oficial VERSE
    const starColors = [
      '#1ECFF8', // Cyan bioluminiscente
      '#003FF6', // Azul estructura
      '#8723A1', // Púrpura místico
      '#FFD213', // Amarillo estelar
      '#FFFFFF', // Luz blanca estelar
      '#4A88FF'  // Azul eléctrico
    ];

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        // Distancia radial desde el centro de la galaxia
        this.distance = Math.pow(Math.random(), 1.6) * (Math.min(width, height) * 0.52);
        
        // Asignación de brazo espiral
        const armIndex = Math.floor(Math.random() * ARMS);
        const armAngle = (armIndex * 2 * Math.PI) / ARMS;
        
        // Ángulo logarítmico del brazo + dispersión
        const spiralAngle = this.distance * 0.009;
        const spreadAngle = (Math.random() - 0.5) * ARM_SPREAD * (1 + this.distance * 0.001);
        this.angle = armAngle + spiralAngle + spreadAngle;

        // Propiedades visuales
        this.size = Math.random() < 0.08 ? Math.random() * 2.2 + 1.2 : Math.random() * 1.2 + 0.4;
        this.color = starColors[Math.floor(Math.random() * starColors.length)];
        this.alpha = Math.random() * 0.7 + 0.3;
        this.twinkleSpeed = Math.random() * 0.04 + 0.01;
        this.twinkleVal = Math.random() * Math.PI;
        this.orbitSpeed = (1 / (this.distance * 0.02 + 1)) * ROTATION_SPEED + 0.0004;
      }

      update() {
        this.angle += this.orbitSpeed;
        this.twinkleVal += this.twinkleSpeed;
      }

      draw(ctx, centerX, centerY) {
        const x = centerX + Math.cos(this.angle) * this.distance;
        // Leve inclinación elíptica para darle perspectiva galáctica 3D
        const y = centerY + Math.sin(this.angle) * (this.distance * 0.65);

        const currentAlpha = Math.max(0.1, this.alpha + Math.sin(this.twinkleVal) * 0.25);

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = currentAlpha;
        
        if (this.size > 1.4) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
        }

        ctx.fill();
        ctx.restore();
      }
    }

    const stars = Array.from({ length: STAR_COUNT }, () => new Star());

    // Nubes de polvo cósmico (Nebulae puffs)
    const DUST_COUNT = 35;
    const dustClouds = Array.from({ length: DUST_COUNT }, () => ({
      angle: Math.random() * Math.PI * 2,
      dist: Math.random() * (Math.min(width, height) * 0.45) + 30,
      radius: Math.random() * 90 + 40,
      color: Math.random() > 0.4 ? 'rgba(0, 63, 246, 0.06)' : 'rgba(30, 207, 248, 0.05)',
      speed: (Math.random() * 0.0006 + 0.0002)
    }));

    // Bucle de animación
    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      // Suavizado del mouse parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouseX;
      // Posicionar el epicentro galáctico en la zona superior donde reside el rostro 3D
      const centerY = (height < 700 ? 190 : 220) + mouseY;

      // 1. Resplandor del Núcleo Galáctico (Aura profunda en azul #003FF6 y cyan #1ECFF8)
      const coreGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.min(width, height) * 0.48
      );
      coreGradient.addColorStop(0, 'rgba(30, 207, 248, 0.28)');
      coreGradient.addColorStop(0.25, 'rgba(0, 63, 246, 0.22)');
      coreGradient.addColorStop(0.55, 'rgba(2, 30, 115, 0.15)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.save();
      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // 2. Dibujar nubes de polvo estelar
      dustClouds.forEach((cloud) => {
        cloud.angle += cloud.speed;
        const dx = centerX + Math.cos(cloud.angle) * cloud.dist;
        const dy = centerY + Math.sin(cloud.angle) * (cloud.dist * 0.65);

        const dustGrad = ctx.createRadialGradient(dx, dy, 0, dx, dy, cloud.radius);
        dustGrad.addColorStop(0, cloud.color);
        dustGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.save();
        ctx.fillStyle = dustGrad;
        ctx.beginPath();
        ctx.arc(dx, dy, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 3. Dibujar estrellas en rotación
      stars.forEach((star) => {
        star.update();
        star.draw(ctx, centerX, centerY);
      });
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
