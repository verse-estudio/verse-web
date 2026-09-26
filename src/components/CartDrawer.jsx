import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import Button from './Button';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveFromCart, onUpdateQuantity, onClearCart }) => {
  const [email, setEmail] = useState('');
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'checkout', 'success'
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => {
    if (item.price === 'Gratis') return acc;
    const priceNum = parseFloat(item.price.replace('$', '').replace(' USD', ''));
    return acc + (priceNum * item.quantity);
  }, 0);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    setError('');
    setCheckoutStep('success');
  };

  const handleCloseSuccess = () => {
    onClearCart();
    setCheckoutStep('cart');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col glass-panel-heavy shadow-2xl border-l border-white/10 animate-fade-in">
            {/* Header */}
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-xl font-bold font-serif text-white tracking-wider flex items-center gap-2">
                <Sparkles size={20} className="text-verse-yellow" />
                UNIVERSO DE COMPRAS
              </h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
              >
                <X size={24} />
              </button>
            </div>

            {checkoutStep === 'cart' && (
              <>
                {/* Cart list */}
                <div className="flex-1 py-6 overflow-y-auto px-6 space-y-6 no-scrollbar">
                  {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center px-4">
                      <Sparkles size={48} className="text-verse-cyan/30 mb-4 animate-pulse" />
                      <p className="text-lg text-gray-300 font-medium mb-2">Tu portal de compras está vacío</p>
                      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                        Explora la tienda de VERSE y añade una pizca de nuestro universo místico a tu colección.
                      </p>
                    </div>
                  ) : (
                    cartItems.map((item, idx) => {
                      const itemPriceVal = item.price === 'Gratis' ? 0 : parseFloat(item.price.replace('$', '').replace(' USD', ''));
                      return (
                        <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-verse-navy/40 border border-white/5 hover:border-verse-cyan/20 transition-all duration-300">
                          {/* Mini visual */}
                          <div className={`w-16 h-16 rounded-xl ${item.imgColor}/20 shrink-0 flex items-center justify-center`}>
                            {item.icon && <item.icon className={`${item.imgColor.replace('bg-', 'text-')} w-8 h-8`} />}
                          </div>
                          {/* Info */}
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                              <p className="text-xs text-verse-cyan tracking-wider uppercase mt-0.5">{item.tag}</p>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              {/* Quantity Selector */}
                              <div className="flex items-center gap-2 bg-verse-bg/50 border border-white/10 rounded-full py-0.5 px-2">
                                <button 
                                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                  className="text-gray-400 hover:text-white transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="text-xs font-bold px-1 text-white">{item.quantity}</span>
                                <button 
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                  className="text-gray-400 hover:text-white transition-colors"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                              <span className="text-sm font-bold text-verse-yellow">
                                {item.price === 'Gratis' ? 'Gratis' : `$${(itemPriceVal * item.quantity).toFixed(2)} USD`}
                              </span>
                            </div>
                          </div>
                          {/* Remove */}
                          <button 
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-gray-500 hover:text-verse-orange transition-colors self-start p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Subtotal & Action */}
                {cartItems.length > 0 && (
                  <div className="px-6 py-6 border-t border-white/5 bg-verse-navy/35 space-y-4">
                    <div className="flex justify-between items-center text-gray-300">
                      <span className="text-sm">Subtotal Estimado</span>
                      <span className="text-xl font-bold text-white font-serif">${total.toFixed(2)} USD</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-normal">
                      Los infoproductos y presets digitales se entregan inmediatamente en formato digital a tu correo. Los juguetes y merch físicos incluyen envío nacional.
                    </p>
                    <Button 
                      primary 
                      onClick={() => setCheckoutStep('checkout')}
                      className="w-full flex items-center justify-center gap-2 py-3"
                    >
                      Continuar a la Compra
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'checkout' && (
              <div className="flex-1 py-8 px-6 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold font-serif text-white">Detalles del Destinatario</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    Para conectarnos en el tiempo y enviarte los códigos de descarga, presets cinemáticos y confirmaciones de productos físicos, por favor provee tu correo electrónico.
                  </p>

                  <form onSubmit={handleCheckoutSubmit} className="space-y-4 pt-2">
                    <div className="space-y-1">
                      <label className="text-xs tracking-wider uppercase text-verse-cyan font-bold block mb-1">Correo Electrónico</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@verse-estudio.com"
                        className="w-full bg-verse-navy/50 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-verse-cyan focus:ring-1 focus:ring-verse-cyan transition-colors placeholder:text-gray-600"
                      />
                    </div>
                    {error && (
                      <div className="flex items-center gap-2 text-verse-orange text-sm mt-2">
                        <AlertCircle size={16} />
                        <span>{error}</span>
                      </div>
                    )}
                  </form>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <Button 
                    primary 
                    onClick={handleCheckoutSubmit}
                    className="w-full flex items-center justify-center gap-2 py-3"
                  >
                    Confirmar Transacción
                  </Button>
                  <button 
                    onClick={() => setCheckoutStep('cart')}
                    className="w-full text-center text-sm text-gray-400 hover:text-white transition-colors py-2 font-medium"
                  >
                    Atrás
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === 'success' && (
              <div className="flex-1 py-8 px-6 flex flex-col justify-between overflow-y-auto items-center text-center">
                <div className="my-auto space-y-6">
                  <div className="w-20 h-20 bg-verse-cyan/15 rounded-full flex items-center justify-center mx-auto border border-verse-cyan/30 animate-pulse">
                    <Sparkles className="text-verse-cyan w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-white mb-2">¡Sincronización Exitosa!</h3>
                    <p className="text-verse-yellow font-medium text-sm tracking-wide uppercase mb-6">Tu historia se está escribiendo</p>
                    
                    <p className="text-gray-300 text-sm leading-relaxed font-light max-w-sm mx-auto">
                      Hemos recibido tu orden y tu correo <strong className="text-white">{email}</strong> ha sido vinculado a nuestro universo. 
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-4 max-w-xs mx-auto">
                      Si compraste un producto digital, revisa tu buzón. En breves minutos recibirás los enlaces de descarga directa. Para envíos físicos, nuestro Guardián de Historias se comunicará contigo.
                    </p>
                  </div>
                </div>

                <Button 
                  primary 
                  onClick={handleCloseSuccess}
                  className="w-full py-3"
                >
                  Volver al Ecosistema VERSE
                </Button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
