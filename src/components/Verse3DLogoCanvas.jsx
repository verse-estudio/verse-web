import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Verse3DLogoCanvas
 * 
 * Interactive 3D VERSE Protagonist Logo & Galaxy Particle Environment:
 * - Real-time Three.js PBR rendering
 * - "Look at mouse" eye & head tracking with smooth inertia
 * - Mobile touch drag & scroll velocity reactivity
 * - Galaxy starfield in VERSE brand colors (#021E73, #1ECFF8, #8723A1, #ED622E, #FFD213)
 * - Seamless morph/docking between Hero (Panel 1) and Header (Panel 2+)
 */
export default function Verse3DLogoCanvas({ 
  scrolled, 
  view, 
  isMenuOpen = false,
  onLogoClick,
  onLoaded
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  // References for Three.js objects
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelGroupRef = useRef(null);
  const starsRef = useRef(null);

  // Interaction tracking state
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const scrollVelocityRef = useRef(0);
  const lastScrollYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  const isDocked = scrolled || view !== 'home';

  // Track mouse / pointer movement
  useEffect(() => {
    const handlePointerMove = (e) => {
      // Calculate normalized cursor coordinate relative to screen center
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      // The head follows the gaze of the cursor
      targetRotationRef.current.y = nx * 0.75; // Yaw (horizontal look)
      targetRotationRef.current.x = ny * 0.55; // Pitch (vertical look)
    };

    // Mobile touch interaction
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        const nx = (touch.clientX / window.innerWidth) * 2 - 1;
        const ny = (touch.clientY / window.innerHeight) * 2 - 1;
        targetRotationRef.current.y = nx * 0.85;
        targetRotationRef.current.x = ny * 0.6;
      }
    };

    // Scroll velocity reaction (adds dynamic tilt when scrolling fast)
    const handleScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollYRef.current;
      lastScrollYRef.current = currentY;
      scrollVelocityRef.current = Math.min(Math.max(deltaY * 0.004, -0.4), 0.4);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize Three.js Scene, Camera, Lights, Galaxy Particles, and Model Loader
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Initial dimensions
    const width = 420;
    const height = 420;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.8);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;

    // 4. Studio Lighting tailored for VERSE Brand Aesthetics
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    // Key Light: Bioluminescent Cyan (#1ecff8)
    const cyanLight = new THREE.DirectionalLight(0x1ecff8, 3.5);
    cyanLight.position.set(3.5, 4, 3);
    scene.add(cyanLight);

    // Warm Rim Light: Energetic Orange (#ed622e)
    const orangeLight = new THREE.DirectionalLight(0xed622e, 2.6);
    orangeLight.position.set(-3.5, -2, -2.5);
    scene.add(orangeLight);

    // Deep Atmosphere Light: Mystic Purple (#8723a1)
    const purpleLight = new THREE.DirectionalLight(0x8723a1, 2.2);
    purpleLight.position.set(0, 4, -3);
    scene.add(purpleLight);

    // Front soft fill
    const frontPoint = new THREE.PointLight(0xffffff, 1.6, 10);
    frontPoint.position.set(0, 0, 2.5);
    scene.add(frontPoint);

    // 5. Galaxy Particle Starfield (VERSE Cosmic Theme)
    const starsCount = 1400;
    const starPositions = new Float32Array(starsCount * 3);
    const starColors = new Float32Array(starsCount * 3);

    const palette = [
      new THREE.Color(0x1ecff8), // Cyan
      new THREE.Color(0x8723a1), // Purple
      new THREE.Color(0xed622e), // Orange
      new THREE.Color(0xffd213), // Yellow
      new THREE.Color(0xffffff), // White starlight
      new THREE.Color(0x003ff6)  // Structure Blue
    ];

    for (let i = 0; i < starsCount; i++) {
      const r = THREE.MathUtils.randFloat(1.2, 7.0);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(-0.8, 0.8);

      starPositions[i * 3] = r * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(theta) * 0.6 + phi;
      starPositions[i * 3 + 2] = THREE.MathUtils.randFloat(-4.0, 1.5);

      const color = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starsMesh);
    starsRef.current = starsMesh;

    // 6. Group for 3D Model
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // 7. Load GLTF / GLB Model
    const loader = new GLTFLoader();
    const modelPath = '/assets/logo/verse_logo_3d_pbr.glb';

    loader.load(
      modelPath,
      (gltf) => {
        const object = gltf.scene;

        // Auto-center geometry
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        object.position.x -= center.x;
        object.position.y -= center.y;
        object.position.z -= center.z;

        // Normalize scale to fit nicely in 2.1 units
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 2.1 / maxDim;
        object.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Enhance material aesthetics
        object.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.envMapIntensity = 1.6;
            if (child.material.metalness !== undefined) {
              child.material.metalness = Math.min(child.material.metalness + 0.1, 0.95);
            }
          }
        });

        modelGroup.add(object);
        setIsLoading(false);
        if (onLoaded) onLoaded();
      },
      undefined,
      (error) => {
        console.warn('Could not load PBR GLB, trying shaded fallback...', error);
        loader.load(
          '/assets/logo/verse_logo_3d_shaded.glb',
          (gltfFallback) => {
            const object = gltfFallback.scene;
            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            object.position.sub(center);
            const maxDim = Math.max(size.x, size.y, size.z);
            const scaleFactor = 2.1 / maxDim;
            object.scale.set(scaleFactor, scaleFactor, scaleFactor);
            modelGroup.add(object);
            setIsLoading(false);
            if (onLoaded) onLoaded();
          },
          undefined,
          (fallbackErr) => {
            console.error('Failed to load 3D logo:', fallbackErr);
            setLoadError(true);
            setIsLoading(false);
            if (onLoaded) onLoaded();
          }
        );
      }
    );

    // 8. Animation Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Damped smooth mouse tracking lerp
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.08;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.08;

      // Decay scroll velocity tilt
      scrollVelocityRef.current *= 0.92;

      // Apply look-at rotations to 3D logo
      if (modelGroupRef.current) {
        modelGroupRef.current.rotation.x = currentRotationRef.current.x + scrollVelocityRef.current;
        modelGroupRef.current.rotation.y = currentRotationRef.current.y + Math.sin(elapsedTime * 0.7) * 0.04;
        
        // Gentle organic levitation / breathing
        modelGroupRef.current.position.y = Math.sin(elapsedTime * 1.6) * 0.07;
      }

      // Rotate galaxy stars slowly
      if (starsRef.current) {
        starsRef.current.rotation.y = elapsedTime * 0.035;
        starsRef.current.rotation.z = elapsedTime * 0.015;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  // Update stars visibility based on docked state
  useEffect(() => {
    if (starsRef.current) {
      starsRef.current.visible = !isDocked;
    }
  }, [isDocked]);

  return (
    <>
      {/* STRAIGHT WORDMARK LOGO (Centered on mobile format to avoid overlapping hamburger menu; beside 3D logo on desktop) */}
      <div
        onClick={onLogoClick}
        className={`fixed top-4 sm:top-5 md:top-6.5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-28 lg:right-32 z-40 flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer group ${
          isDocked && !isMenuOpen
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        title="VERSE Estudio Audiovisual - Volver arriba"
      >
        <img 
          src="/assets/logo/verse_wordmark_straight_white.png" 
          alt="VERSE" 
          className="h-5 sm:h-6 md:h-7.5 object-contain filter drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] brightness-110 group-hover:brightness-125 transition-all" 
        />
      </div>

      {/* 3D PROTAGONIST LOGO CANVAS */}
      <div
        ref={containerRef}
        onClick={onLogoClick}
        className={`fixed transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
          isDocked
            ? `top-2 sm:top-3 right-3 sm:right-6 md:right-8 z-40 w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 cursor-pointer hover:scale-105 active:scale-95 translate-x-0 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`
            : 'top-20 sm:top-22 md:top-24 left-1/2 -translate-x-1/2 z-30 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] cursor-grab active:cursor-grabbing'
        }`}
        style={{ touchAction: 'none' }}
        title={isDocked ? "VERSE Estudio Audiovisual - Volver arriba" : "Logo 3D de VERSE - Mueve el cursor para interactuar"}
      >
        {/* Background glow halo */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-700 pointer-events-none ${
            isDocked 
              ? 'bg-gradient-to-r from-verse-cyan/35 via-verse-purple/25 to-verse-orange/30 blur-md opacity-80' 
              : 'bg-gradient-to-tr from-verse-blue/40 via-verse-cyan/30 to-verse-blue/40 blur-3xl opacity-90 animate-pulse-slow'
          }`} 
        />

        {/* 3D WebGL Canvas */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full relative z-10 block drop-shadow-[0_0_25px_rgba(30,207,248,0.45)]" 
        />

        {/* Holographic Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border-2 border-verse-cyan/20 border-t-verse-cyan animate-spin" />
              <div className="absolute inset-2 rounded-full border-2 border-verse-orange/20 border-b-verse-orange animate-spin animation-delay-2000" />
            </div>
            {!isDocked && (
              <span className="text-[11px] uppercase tracking-widest text-verse-cyan/80 mt-4 font-mono animate-pulse">
                Materializando Modelo 3D...
              </span>
            )}
          </div>
        )}

        {/* Fallback image if WebGL fails */}
        {loadError && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <img 
              src="/assets/logo/official_isotipo_cara.png" 
              alt="VERSE 3D Logo Fallback" 
              className="w-3/4 h-3/4 object-contain drop-shadow-[0_0_20px_rgba(30,207,248,0.6)]"
            />
          </div>
        )}
      </div>
    </>
  );
}
