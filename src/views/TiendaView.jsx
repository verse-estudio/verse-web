import React from 'react';
import { Eye, Film, ShoppingBag, BookOpen, Sparkles, Store } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const TiendaView = ({ onOpenModal, onAddToCart }) => {
  const products = [
    {
      id: 'monolito-art-toy',
      name: 'Monolito Art Toy (Edición Limitada)',
      price: '$45.00 USD',
      category: 'Productos Físicos',
      tag: 'Físico',
      imgColor: 'bg-verse-purple',
      icon: Store,
      details: 'Una escultura coleccionable premium inspirada en la arqueología mística andina. Moldeada en resina ecológica con pigmentos bioluminiscentes que brillan en la oscuridad. Diseñado artesanalmente por el colectivo VERSE para actuar como un tótem de introspección.',
      spec1: 'Resina ecológica de alta resistencia',
      spec2: 'Detalles bioluminiscentes de larga duración',
      spec3: 'Edición limitada y seriada de solo 50 piezas',
      quantity: 1
    },
    {
      id: 'presets-cinematograficos',
      name: 'Presets Cinematográficos VERSE',
      price: '$20.00 USD',
      category: 'Productos Digitales',
      tag: 'Digital',
      imgColor: 'bg-verse-cyan',
      icon: Film,
      details: 'Colección de 12 LUTs cinematográficos profesionales (.CUBE) creados en el estudio. Ajustados con psicología del color para infundir misterio, introspección, sombras profundas y tonos de piel vibrantes en tus producciones.',
      spec1: 'Formatos .CUBE universales de 33x33 LUTS',
      spec2: 'Compatibles con Premiere, DaVinci, FCPX y LumaFusion',
      spec3: 'Incluye tutorial escrito y video de calibración',
      quantity: 1
    },
    {
      id: 'tote-bag-guardian',
      name: 'Tote Bag "Guardián de Historias"',
      price: '$25.00 USD',
      category: 'Productos Físicos',
      tag: 'Merch',
      imgColor: 'bg-verse-orange',
      icon: ShoppingBag,
      details: 'Tote bag premium confeccionada en algodón crudo de alto gramaje. Impresa en serigrafía artesanal con el imagotipo oficial y la pregunta que evoca curiosidad temporal: "¿Qué historia deseas contar?".',
      spec1: '100% Algodón crudo orgánico certificado',
      spec2: 'Asas reforzadas de 65cm para máxima comodidad',
      spec3: 'Compartimento y bolsillo interno con cremallera',
      quantity: 1
    },
    {
      id: 'ebook-storytelling',
      name: 'E-Book: Storytelling Visual',
      price: 'Gratis',
      category: 'Lead Magnet',
      tag: 'Gratis',
      imgColor: 'bg-verse-yellow',
      icon: BookOpen,
      details: 'Nuestra guía maestra de 48 páginas para fundadoras, creadores y marcas que buscan conectar a un nivel superior. Aprende metodologías aplicadas de semiótica visual, psicología cromática y el embudo de Inbound Marketing.',
      spec1: 'Descarga inmediata en formato PDF optimizado',
      spec2: '12 Estructuras narrativas listas para aplicar',
      spec3: 'Cero costo - Diseñado para madurar leads creativos',
      quantity: 1
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 animate-fade-in min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Tienda VERSE" 
          subtitle="Lleva un pedazo de nuestro universo místico contigo."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod, idx) => (
            <div key={idx} className="bg-verse-navy rounded-[32px] overflow-hidden border border-white/5 group flex flex-col justify-between hover:border-verse-cyan/20 transition-all duration-300 shadow-xl">
              {/* Product Image Panel */}
              <div className={`h-52 ${prod.imgColor}/20 flex items-center justify-center relative overflow-hidden`}>
                {prod.icon && (
                  <prod.icon className={`${prod.imgColor.replace('bg-', 'text-')} w-16 h-16 group-hover:scale-125 transition-transform duration-700`} />
                )}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                  {prod.tag}
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-verse-cyan font-bold block mb-1">{prod.category}</span>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 font-serif group-hover:text-verse-cyan transition-colors">{prod.name}</h3>
                  <p className="text-verse-yellow font-bold text-lg mb-6">{prod.price}</p>
                </div>
                
                <div className="space-y-2">
                  <button 
                    onClick={() => onOpenModal(prod)}
                    className="w-full py-2.5 rounded-full border border-white/10 text-white hover:bg-white hover:text-verse-bg transition-all duration-300 font-semibold text-xs uppercase tracking-wider bg-white/5"
                  >
                    Ver Detalles
                  </button>
                  <button 
                    onClick={() => onAddToCart(prod)}
                    className="w-full py-2.5 rounded-full bg-gradient-to-r from-verse-orange/90 to-verse-yellow/90 hover:from-verse-orange hover:to-verse-yellow text-verse-bg transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-[0_0_15px_rgba(237,98,46,0.4)]"
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiendaView;
