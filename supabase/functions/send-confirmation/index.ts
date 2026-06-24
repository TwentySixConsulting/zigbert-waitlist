// Supabase Edge Function — sends a confirmation email when someone joins the waitlist.
//
// Trigger: a Database Webhook (Database → Webhooks) on INSERT to public.waitlist,
// pointing at this function. Supabase sends { type, table, record, ... }.
//
// Secrets required (set with `supabase secrets set ...`):
//   RESEND_API_KEY  — your Resend API key (https://resend.com)
//   FROM_EMAIL      — verified sender, e.g. "Zigbert <hello@twentysixconsulting.co.uk>"
//
// Deploy: `supabase functions deploy send-confirmation`

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "Zigbert <hello@twentysixconsulting.co.uk>";

const INK = "#121c2b";
const CLAY = "#c9785a";
const BLUE = "#5e7191";
const CREAM = "#fbfbf8";
const MUTED = "#4b5563";

function emailHtml(firstName: string) {
  return `<!doctype html>
<html>
  <body style="margin:0;background:${CREAM};font-family:-apple-system,Segoe UI,Inter,Arial,sans-serif;color:${INK};">
    <div style="max-width:520px;margin:0 auto;padding:32px 24px;">
      <div style="background:#fff;border:1px solid #e9e3d8;border-radius:18px;overflow:hidden;">
        <div style="background:${BLUE};padding:22px 28px;color:#fff;">
          <div style="font-size:20px;font-weight:700;letter-spacing:-0.02em;">Zigbert</div>
          <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;opacity:.85;margin-top:2px;">Pay &amp; Benefits Intelligence</div>
        </div>
        <div style="padding:28px;">
          <h1 style="font-size:22px;margin:0 0 14px;">You're on the waitlist 🎉</h1>
          <p style="font-size:15px;line-height:1.6;color:${MUTED};margin:0 0 14px;">
            Hi ${firstName}, thanks for signing up to Zigbert. You're officially on the list.
          </p>
          <p style="font-size:15px;line-height:1.6;color:${MUTED};margin:0 0 14px;">
            Zigbert launches in <strong style="color:${INK};">September 2026</strong>. We'll reach out
            before then with your early access and launch pricing, so keep an eye on your inbox.
          </p>
          <p style="font-size:15px;line-height:1.6;color:${MUTED};margin:0 0 22px;">
            Any questions in the meantime? Just reply to this email or contact us at
            <a href="mailto:consultants@twentysixconsulting.co.uk" style="color:${CLAY};">consultants@twentysixconsulting.co.uk</a>.
          </p>
          <a href="https://twentysixconsulting.co.uk" style="display:inline-block;background:${BLUE};color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:11px 20px;border-radius:9999px;">
            Visit TwentySix Consulting
          </a>
        </div>
        <div style="padding:16px 28px;border-top:1px solid #e9e3d8;font-size:12px;color:${MUTED};">
          Zigbert is a reward intelligence platform from TwentySix Consulting · 20 years of reward expertise
        </div>
      </div>
    </div>
  </body>
</html>`;
}

serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  if (!RESEND_API_KEY) return new Response("RESEND_API_KEY not set", { status: 500 });

  try {
    const payload = await req.json();
    const row = payload.record ?? payload;
    const email: string | undefined = row?.email;
    if (!email) return new Response("No email in payload", { status: 400 });

    const firstName = (row?.name ?? "there").toString().trim().split(" ")[0] || "there";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: "You're on the Zigbert waitlist 🎉",
        html: emailHtml(firstName),
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
