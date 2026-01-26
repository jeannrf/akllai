export interface Candidato {
  id: string;
  nombre: string;
  partido: string;
  foto_url: string;
  biografia: string;
  propuestas: string[];
  trayectoria: string[];
  created_at?: string;
}

export interface UserProfile {
  id: string; // matches supabase auth id
  full_name: string;
  email: string;
  preferencias_politicas?: any; // for future AI matching
  created_at?: string;
}
