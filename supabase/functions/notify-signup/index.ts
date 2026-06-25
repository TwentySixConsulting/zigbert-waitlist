// Supabase Edge Function — emails an internal notification when someone joins
// the waitlist. Sends to ONE recipient only (the address below), no one else.
//
// Trigger: a Database Webhook (Database → Webhooks) on INSERT to public.waitlist,
// pointing at this function. Supabase sends { type, table, record, ... }.
//
// Secrets required (set with `supabase secrets set ...`):
//   RESEND_API_KEY  — your Resend API key (https://resend.com)
//   FROM_EMAIL      — optional sender; defaults to Resend's test sender.
//
// Deploy: `supabase functions deploy notify-signup`

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "Zigbert <onboarding@resend.dev>";

// The only address that ever receives these notifications.
const NOTIFY_TO = "millieharrison@twentysixconsulting.co.uk";

function row(label: string, value: unknown) {
  if (value === null || value === undefined || value === "") return "";
  return `<tr><td style="padding:4px 12px 4px 0;color:#4b5563;">${label}</td><td style="padding:4px 0;color:#121c2b;font-weight:600;">${String(value)}</td></tr>`;
}

serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  if (!RESEND_API_KEY) return new Response("RESEND_API_KEY not set", { status: 500 });

  try {
    const payload = await req.json();
    const r = payload.record ?? payload;
    const email: string | undefined = r?.email;
    if (!email) return new Response("No email in payload", { status: 400 });

    const html = `
      <div style="font-family:-apple-system,Segoe UI,Inter,Arial,sans-serif;color:#121c2b;">
        <h2 style="margin:0 0 12px;font-size:18px;">New Zigbert waitlist sign-up</h2>
        <table style="border-collapse:collapse;font-size:14px;">
          ${row("Name", r.name)}
          ${row("Company", r.company)}
          ${row("Email", r.email)}
          ${row("Company size", r.company_size)}
          ${row("Role", r.role)}
          ${row("Signed up", r.created_at)}
        </table>
        <p style="margin:16px 0 0;font-size:13px;color:#4b5563;">Reply to this email to reach them directly.</p>
      </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: NOTIFY_TO,
        reply_to: email,
        subject: `New waitlist sign-up: ${r.name ?? email}${r.company ? ` (${r.company})` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(`Resend error: ${text}`, { status: 502 });
    }
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(`Error: ${err}`, { status: 500 });
  }
});
