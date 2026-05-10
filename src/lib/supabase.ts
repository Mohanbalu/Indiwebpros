import { createClient } from '@supabase/supabase-js';

let supabaseClient: any = null;

export function getSupabase() {
  if (supabaseClient) return supabaseClient;

  try {
    const metaEnv = (import.meta as any).env || {};
    
    // Direct check of process.env for Node, and import.meta.env for bundle
    let url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || metaEnv.VITE_SUPABASE_URL || '';
    let key = process.env.SUPABASE_ANON_KEY || 
              process.env.VITE_SUPABASE_ANON_KEY || 
              process.env.SUPABASE_KEY || 
              process.env.VITE_SUPABASE_KEY || 
              metaEnv.VITE_SUPABASE_ANON_KEY || 
              '';

    let supabaseUrl = String(url).trim();
    let supabaseAnonKey = String(key).trim();

    // Aggressively remove any hidden non-ASCII characters
    supabaseUrl = supabaseUrl.replace(/[^\x21-\x7E]/g, '');
    supabaseAnonKey = supabaseAnonKey.replace(/[^\x21-\x7E]/g, '');

    if (!supabaseUrl || !supabaseAnonKey) {
      const status = `URL=${supabaseUrl ? 'PRESENT' : 'MISSING'}, KEY=${supabaseAnonKey ? 'PRESENT' : 'MISSING'}`;
      console.error(`Supabase Config Check: ${status}`);
      
      let hint = "Please ensure you have added both SUPABASE_URL and SUPABASE_ANON_KEY in the Settings > Environment Variables menu.";
      if (supabaseUrl && !supabaseAnonKey) {
        hint = "URL is detected, but KEY is missing. Did you name it SUPABASE_ANON_KEY?";
      }
      
      throw new Error(`Supabase credentials missing (${status}). ${hint}`);
    }

    if (!supabaseUrl.startsWith('http')) {
      supabaseUrl = `https://${supabaseUrl}`;
    }

    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    return supabaseClient;
  } catch (err: any) {
    console.error("Critical error in getSupabase:", err.message);
    throw err;
  }
}
