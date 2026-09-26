import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Inicialización de Supabase con fallback seguro en caso de que aún no se configuren las credenciales en .env
export const supabase = (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('tu-proyecto'))
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = () => Boolean(supabase);
