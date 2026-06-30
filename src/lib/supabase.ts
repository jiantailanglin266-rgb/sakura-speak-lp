/* Supabase client. Reads public env vars (safe to expose; Row Level Security
   protects data). When the env vars are absent — e.g. the current static
   GitHub Pages preview, or local dev without credentials — `supabase` is null
   and the app falls back to the localStorage mock in lib/auth.ts.

   To go live: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
   (see .env.local.example) and run supabase/schema.sql on the project. */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseEnabled = Boolean(url && anon);

export const supabase: SupabaseClient | null = supabaseEnabled
  ? createClient(url as string, anon as string, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  : null;
