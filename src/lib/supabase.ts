import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Returns null when env vars are absent (e.g. local dev without a .env) so the
// form can show a friendly message instead of crashing the page.
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export const supabaseConfigured = Boolean(url && anonKey);

export type WaitlistEntry = {
  name: string;
  company: string;
  email: string;
  company_size?: string | null;
  role?: string | null;
};

export async function joinWaitlist(entry: WaitlistEntry): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase is not configured (missing env vars).");
  }
  const { error } = await supabase.from("waitlist").insert(entry);
  if (error) {
    // Unique-violation on email = already signed up; treat as success upstream.
    if (error.code === "23505") return;
    throw error;
  }
}
