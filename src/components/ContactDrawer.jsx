import React, { useState } from 'react';
import { X, Send, Sparkles, MessageSquare } from 'lucide-react';
import Button from './Button';

const ContactDrawer = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    segment: 'Independent', // 'Independent', 'Business', 'Cultural', 'Other'
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleCloseSuccess = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      segment: 'Independent',
      message: ''
    });
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
                <MessageSquare size={20} className="text-verse-orange animate-pulse" />
                CONECTAR CON VERSE
              </h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
              >
                <X size={24} />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between p-6 overflow-y-auto no-scrollbar">
                <div className="space-y-6">
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    Transformamos identidades en piezas visuales que trascienden el olvido. Comparte tu visión con nosotros y permitamos que tu mensaje resuene.
                  </p>

                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs tracking-wider uppercase text-verse-cyan font-bold block mb-1">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Tu nombre"
                      className="w-full bg-verse-navy/50 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-verse-cyan focus:ring-1 focus:ring-verse-cyan transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs tracking-wider uppercase text-verse-cyan font-bold block mb-1">Correo Electrónico</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ejemplo@verse-estudio.com"
                      className="w-full bg-verse-navy/50 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-verse-cyan focus:ring-1 focus:ring-verse-cyan transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  {/* Segmentation Selector */}
                  <div className="space-y-1">
                    <label className="text-xs tracking-wider uppercase text-verse-cyan font-bold block mb-1">Tipo de Proyecto / Perfil</label>
                    <select 
                      value={formData.segment}
                      onChange={(e) => setFormData({...formData, segment: e.target.value})}
                      className="w-full bg-verse-navy/50 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-verse-cyan transition-colors"
                    >
                      <option value="Independent" className="bg-verse-navy text-white">Emprendedor o Creador Independiente</option>
                      <option value="Business" className="bg-verse-navy text-white">Pequeña / Mediana Empresa</option>
                      <option value="Cultural" className="bg-verse-navy text-white">Organización Cultural / Fundación / ONG</option>
                      <option value="Other" className="bg-verse-navy text-white">Colaborador / Artista / Otro</option>
                    </select>
                  </div>

                  {/* Big Text Input */}
                  <div className="space-y-1">
                    <label className="text-xs tracking-wider uppercase text-verse-cyan font-bold block mb-1">¿Qué historia deseas contar?</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Si pudieras escribir un mensaje en el tiempo, ¿qué dirías?"
                      className="w-full bg-verse-navy/50 border border-white/10 rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-verse-cyan focus:ring-1 focus:ring-verse-cyan transition-colors placeholder:text-gray-600 resize-none leading-relaxed"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8">
                  <Button 
                    primary 
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 py-3"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-verse-bg" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Trascendiendo mensaje...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar al Universo VERSE
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex-1 py-8 px-6 flex flex-col justify-between overflow-y-auto items-center text-center">
                <div className="my-auto space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-verse-orange/15 rounded-full flex items-center justify-center mx-auto border border-verse-orange/30 animate-pulse">
                    <Sparkles className="text-verse-orange w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-white mb-2">Mensaje Recibido</h3>
                    <p className="text-verse-yellow font-medium text-sm tracking-wide uppercase mb-6">Conexión Establecida</p>
                    
                    <p className="text-gray-300 text-sm leading-relaxed font-light max-w-sm mx-auto">
                      Gracias por compartir tu voz con nosotros, <strong className="text-white">{formData.name}</strong>. Tu mensaje ha sido resguardado por nuestro Guardián de Historias.
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-4 max-w-xs mx-auto">
                      Analizaremos tu visión con introspección y estrategia cinematográfica. Nos pondremos en contacto contigo en tu correo <strong className="text-white">{formData.email}</strong> muy pronto.
                    </p>
                  </div>
                </div>

                <Button 
                  primary 
                  onClick={handleCloseSuccess}
                  className="w-full py-3"
                >
                  Volver al Estudio
                </Button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDrawer;
