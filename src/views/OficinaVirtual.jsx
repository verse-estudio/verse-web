import React, { useState } from 'react';
import { Eye, Shield, Lock, TrendingUp, DollarSign, Briefcase, CheckSquare, Users, RefreshCw, BarChart2, FileText, ArrowRight, LogOut } from 'lucide-react';
import Button from '../components/Button';

const OficinaVirtual = ({ onLogout }) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState('Sincronizado con Notion');

  // Simulated metrics fetched from Notion / Finanzas databases
  const metrics = {
    revenue: '$14,250 USD',
    expenses: '$4,800 USD',
    profit: '$9,450 USD',
    conversionRate: '18.4%',
    activeLeads: 24,
    completedTasks: '14/18'
  };

  // Active Projects synced from Notion
  const activeProjects = [
    { name: 'Portal Ancestral', status: 'En Rodaje', lead: 'Andrés S.', progress: 75, badgeColor: 'bg-verse-cyan/20 text-verse-cyan border-verse-cyan/40' },
    { name: 'VERSE Presets Vol. II', status: 'Edición', lead: 'Santiago C.', progress: 40, badgeColor: 'bg-verse-orange/20 text-verse-orange border-verse-orange/40' },
    { name: 'Campaña Moda Sostenible', status: 'Contrato', lead: 'Santiago C.', progress: 15, badgeColor: 'bg-verse-purple/20 text-verse-purple border-verse-purple/40' }
  ];

  // Financial transactions logs
  const cashflow = [
    { category: 'Ingreso', desc: 'Producción Video Comercial', amount: '+$3,500', date: '18 May 2026' },
    { category: 'Gasto', desc: 'Licencias Plugins & Hosting', amount: '-$120', date: '15 May 2026' },
    { category: 'Ingreso', desc: 'Ventas Presets Vol. I (Tienda)', amount: '+$480', date: '12 May 2026' }
  ];

  const handleSyncNotion = () => {
    setIsSyncing(true);
    setSyncStatus('Sincronizando...');
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus('Sincronizado con Notion hace unos segundos');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen relative bg-verse-bg text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        
        {/* Header Console */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-verse-cyan font-bold font-mono text-xs uppercase tracking-widest">
              <Shield size={14} />
              <span>Consola Privada para Socios</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif tracking-wide flex items-center gap-3">
              Oficina Virtual VERSE
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-verse-orange/20 text-verse-orange border border-verse-orange/30 font-sans font-bold">Socio Hub</span>
            </h1>
          </div>

          <div className="flex gap-4 items-center">
            <button 
              onClick={handleSyncNotion}
              disabled={isSyncing}
              className="px-4 py-2 rounded-full reference-glass border border-white/10 hover:border-verse-cyan/40 text-xs font-bold text-gray-300 hover:text-white transition-all flex items-center gap-2"
            >
              <RefreshCw size={14} className={isSyncing ? 'animate-spin' : ''} />
              <span>{syncStatus}</span>
            </button>
            <button 
              onClick={onLogout}
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-verse-orange/20 text-gray-400 hover:text-white transition-all flex items-center justify-center"
              title="Cerrar Sesión"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Ingresos Totales', val: metrics.revenue, icon: DollarSign, color: 'text-verse-cyan', border: 'border-verse-cyan/20' },
            { title: 'Gastos / Inversión', val: metrics.expenses, icon: DollarSign, color: 'text-verse-orange', border: 'border-verse-orange/20' },
            { title: 'Utilidad Neta', val: metrics.profit, icon: TrendingUp, color: 'text-verse-yellow', border: 'border-verse-yellow/20' },
            { title: 'Tasa de Conversión', val: metrics.conversionRate, icon: BarChart2, color: 'text-verse-purple', border: 'border-verse-purple/20' }
          ].map((card, idx) => (
            <div key={idx} className={`glass-panel p-6 rounded-3xl border ${card.border} flex flex-col justify-between`}>
              <div className="flex justify-between items-start">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">{card.title}</span>
                <card.icon className={`${card.color} w-5 h-5`} />
              </div>
              <h3 className="text-2xl font-black text-white mt-4 font-mono">{card.val}</h3>
            </div>
          ))}
        </div>

        {/* TWO-COLUMN EXECUTIVE DASHBOARD */}
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* COLUMN 1: Active Notion Projects & Inbound Leads (8 cols) */}
          <div className="md:col-span-8 space-y-8">
            
            {/* Active Projects from Notion */}
            <div className="glass-panel p-8 rounded-[40px] border border-white/10 space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-verse-cyan w-5 h-5" />
                  <h3 className="text-xl font-bold font-serif text-white">Proyectos Activos (Notion Hub)</h3>
                </div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-mono">Actualizado en Vivo</span>
              </div>

              <div className="space-y-5">
                {activeProjects.map((proj, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-bold text-sm text-white">{proj.name}</h4>
                        <span className="text-[10px] text-gray-400 font-light">Responsable: {proj.lead}</span>
                      </div>
                      <span className={`text-[9px] uppercase tracking-widest font-bold font-mono px-2.5 py-0.5 rounded-full border ${proj.badgeColor}`}>
                        {proj.status}
                      </span>
                    </div>
                    {/* Progress slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] text-gray-400 font-mono">
                        <span>Progreso Visual</span>
                        <span>{proj.progress}%</span>
                      </div>
                      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-verse-purple to-verse-cyan h-full rounded-full" style={{ width: `${proj.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inbound Leads captured */}
            <div className="glass-panel p-8 rounded-[40px] border border-white/10 space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <Users className="text-verse-purple w-5 h-5" />
                  <h3 className="text-xl font-bold font-serif text-white">Últimos Leads (Embudo Inbound)</h3>
                </div>
                <span className="text-xs px-2 rounded-full bg-verse-purple/20 border border-verse-purple/40 text-verse-cyan font-bold">{metrics.activeLeads} Totales</span>
              </div>

              <div className="space-y-3.5 text-xs text-gray-300 font-light">
                <div className="grid grid-cols-12 font-bold uppercase tracking-wider text-[10px] text-gray-500 pb-2 border-b border-white/5">
                  <div className="col-span-4">Cliente</div>
                  <div className="col-span-4">Categoría</div>
                  <div className="col-span-4 text-right">Contacto</div>
                </div>
                {[
                  { name: 'Laura Gómez', type: 'Moda Sostenible', cat: 'Independiente / Creadora', mail: 'laura@moda.com' },
                  { name: 'Ana Estela', type: 'Exhibición Andina', cat: 'Gestora Cultural', mail: 'ana@cultural.bo' },
                  { name: 'Fundación Patiño', type: 'Preservación Histórica', cat: 'Organización Cultural', mail: 'patino@ong.org' }
                ].map((lead, idx) => (
                  <div key={idx} className="grid grid-cols-12 items-center py-2.5 border-b border-white/5 hover:bg-white/5 px-2 rounded-lg transition-colors">
                    <div className="col-span-4 font-bold text-white">{lead.name}</div>
                    <div className="col-span-4">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-gray-400 font-bold">{lead.cat}</span>
                    </div>
                    <div className="col-span-4 text-right font-mono text-[10px] text-verse-cyan hover:underline cursor-pointer">{lead.mail}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COLUMN 2: Notion Task List & Quick Actions (4 cols) */}
          <div className="md:col-span-4 space-y-8">
            
            {/* Notion Task Checklist */}
            <div className="glass-panel p-6 rounded-[32px] border border-white/10 space-y-5">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <CheckSquare className="text-verse-orange w-4 h-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Tareas Pendientes</h3>
                </div>
                <span className="text-[10px] text-verse-yellow font-bold font-mono">{metrics.completedTasks}</span>
              </div>

              <ul className="space-y-3.5 text-xs">
                {[
                  { task: 'Exportar LUTS para Tienda', done: true },
                  { task: 'Reunión Fundación Patiño', done: true },
                  { task: 'Calibrar Proyectores Noche Museos', done: false },
                  { task: 'Configurar Dominio verse.com', done: false }
                ].map((t, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={t.done} 
                      readOnly 
                      className="rounded bg-black/40 border-white/10 text-verse-orange focus:ring-0 cursor-pointer w-4 h-4 shrink-0" 
                    />
                    <span className={t.done ? 'line-through text-gray-500 font-light' : 'text-gray-300'}>{t.task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Cashflow Log */}
            <div className="glass-panel p-6 rounded-[32px] border border-white/10 space-y-5">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <FileText className="text-verse-yellow w-4 h-4" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Caja & Transacciones</h3>
              </div>

              <div className="space-y-4">
                {cashflow.map((trans, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-bold text-white text-xs">{trans.desc}</h4>
                      <span className="text-[9px] text-gray-500 font-mono">{trans.date}</span>
                    </div>
                    <span className={`font-mono font-bold ${trans.category === 'Ingreso' ? 'text-verse-cyan' : 'text-verse-orange'}`}>
                      {trans.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

// EXPORT COMPONENT SHIELD LOGIN
export default function OficinaVirtualPortal({ onExit }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'verse2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Clave de socio incorrecta');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <OficinaVirtual onLogout={() => setIsAuthenticated(false)} />;
  }

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen relative flex items-center justify-center bg-verse-bg text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
      
      <div className="relative z-10 w-full max-w-md glass-panel p-8 rounded-[40px] border border-white/10 shadow-2xl text-center space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-verse-orange/15 border border-verse-orange/30 flex items-center justify-center text-verse-orange shadow-lg">
            <Lock size={24} />
          </div>
          <h2 className="text-2xl font-bold font-serif text-white">Oficina Virtual VERSE</h2>
          <p className="text-gray-400 text-xs font-light">Acceso restringido únicamente para los dos socios fundadores.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-mono block">Clave de Socio</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa clave privada"
              className="w-full px-5 py-3 rounded-full bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-verse-cyan text-sm tracking-widest font-mono"
              required
            />
          </div>

          {error && <p className="text-xs text-verse-orange font-bold text-center">{error}</p>}

          <button 
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-verse-orange to-verse-purple text-white font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(237,98,46,0.5)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            Validar Acceso <ArrowRight size={14} />
          </button>
        </form>

        <button 
          onClick={onExit}
          className="w-full py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-[0.99] font-sans"
        >
          Volver al Sitio Público
        </button>
        
        <div className="text-[10px] text-gray-500 font-mono">
          © 2026 VERSE • ACCESO ENCRIPTADO
        </div>
      </div>
    </div>
  );
}
