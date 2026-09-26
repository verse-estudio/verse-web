import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ContactDrawer from './components/ContactDrawer';
import ProductModal from './components/ProductModal';
import HomeView from './views/HomeView';
import EstudioView from './views/EstudioView';
import ExperienciasView from './views/ExperienciasView';
import TiendaView from './views/TiendaView';
import OficinaVirtualPortal from './views/OficinaVirtual';
import CyanCursorGlow from './components/CyanCursorGlow';
import Verse3DLogoCanvas from './components/Verse3DLogoCanvas';

export default function App() {
  const [view, setView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // E-commerce & Modal States
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (newView) => {
    setView(newView);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Operations
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Open cart drawer immediately for premium feedback
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Modal actions
  const handleOpenProductModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-verse-bg font-sans text-white selection:bg-verse-cyan selection:text-verse-bg flex flex-col justify-between relative">
      
      {/* Cyan Bioluminescent interactive cursor trail */}
      <CyanCursorGlow />

      {/* 3D PROTAGONIST LOGO (Interactive Three.js with Look-At Mouse Tracking & Scroll Morphing) */}
      <Verse3DLogoCanvas 
        scrolled={scrolled}
        view={view}
        onLogoClick={() => {
          if (view !== 'home') {
            navigateTo('home');
          } else if (scrolled) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      {/* Dynamic drifting background particles / bioluminescent shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-verse-glow-1 opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-verse-glow-2 opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-[550px] h-[550px] bg-verse-glow-3 opacity-15 animate-blob animation-delay-4000" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-verse-glow-4 opacity-10 animate-blob animation-delay-6000" />
      </div>

      {/* HEADER / NAVIGATION */}
      <Navigation 
        view={view}
        setView={navigateTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* MAIN VIEW CONTROLLER */}
      <main className="relative z-10 flex-grow">
        {view === 'home' && <HomeView setView={navigateTo} onOpenContact={() => setIsContactOpen(true)} />}
        {view === 'estudio' && <EstudioView />}
        {view === 'experiencias' && <ExperienciasView onOpenContact={() => setIsContactOpen(true)} />}
        {view === 'tienda' && (
          <TiendaView 
            onOpenModal={handleOpenProductModal}
            onAddToCart={handleAddToCart}
          />
        )}
        {view === 'oficina' && <OficinaVirtualPortal onExit={() => navigateTo('home')} />}
      </main>

      {/* FOOTER */}
      <Footer 
        setView={navigateTo}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* PORTALS / POPUPS / DRAWERS */}
      
      {/* E-Commerce Shopping Cart Side Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Customer Contact Sliding drawer */}
      <ContactDrawer 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Product specs detailed modal overlay */}
      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={handleCloseProductModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
