import React from 'react';
import { X, ShoppingBag, Info, Globe, ShieldCheck } from 'lucide-react';
import Button from './Button';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-verse-bg/85 backdrop-blur-md animate-fade-in" onClick={onClose}>
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl glass-panel-heavy shadow-2xl border border-white/10 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-verse-bg/80 text-white hover:text-verse-orange hover:bg-white/10 transition-colors border border-white/5"
        >
          <X size={20} />
        </button>

        {/* Product Visual */}
        <div className={`w-full md:w-1/2 min-h-[250px] md:min-h-full ${product.imgColor}/25 flex flex-col items-center justify-center relative p-8 border-b md:border-b-0 md:border-r border-white/10`}>
          <div className="absolute top-4 left-4 bg-verse-bg/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
            {product.tag}
          </div>
          <div className="text-center flex flex-col items-center justify-center h-full">
            {product.icon && (
              <product.icon className={`${product.imgColor.replace('bg-', 'text-')} w-24 h-24 drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]`} />
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
          <div>
            <span className="text-xs uppercase tracking-widest text-verse-cyan font-bold block mb-2">{product.category}</span>
            <h3 className="text-3xl font-black text-white mb-3 tracking-tight font-serif">{product.name}</h3>
            <p className="text-2xl text-verse-yellow font-bold mb-6">{product.price}</p>
            
            <p className="text-gray-300 leading-relaxed mb-6 font-light">
              {product.details}
            </p>

            {/* Spec items */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <ShieldCheck size={18} className="text-verse-cyan shrink-0" />
                <span>{product.spec1}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Globe size={18} className="text-verse-cyan shrink-0" />
                <span>{product.spec2}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Info size={18} className="text-verse-cyan shrink-0" />
                <span>{product.spec3}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
            <Button 
              primary 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-3 py-3"
            >
              <ShoppingBag size={20} />
              Añadir al Carrito
            </Button>
            <button 
              onClick={onClose}
              className="text-center text-sm text-gray-400 hover:text-white transition-colors py-2 font-medium"
            >
              Volver a la Tienda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
