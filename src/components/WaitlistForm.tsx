import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { waitlist } from "../lib/copy";
import { joinWaitlist } from "../lib/supabase";
import Confetti from "./Confetti";

type Status = "idle" | "submitting" | "done" | "error";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [alreadyOnList, setAlreadyOnList] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const f = waitlist.fields;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Honeypot: real users never fill this hidden field.
    if ((data.get("website") as string)?.trim()) {
      setStatus("done");
      return;
    }

    const name = (data.get("name") as string)?.trim();
    const company = (data.get("company") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const company_size = (data.get("company_size") as string)?.trim() || null;
    const role = (data.get("role") as string)?.trim() || null;

    const next: Record<string, string> = {};
    if (!name) next.name = "Please add your name.";
    if (!company) next.company = "Please add your company.";
    if (!email) next.email = "Please add your email.";
    else if (!emailRe.test(email)) next.email = "That doesn't look like a valid email.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("submitting");
    try {
      const { alreadyOnList } = await joinWaitlist({ name, company, email, company_size, role });
      setAlreadyOnList(alreadyOnList);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "done") {
    const msg = alreadyOnList ? waitlist.successReturning : waitlist.success;
    return (
      <div className="card relative mx-auto max-w-xl overflow-hidden p-10 text-center">
        <Confetti />
        <motion.div
          className="accent-gradient relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white"
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 14 }}
        >
          ✓
        </motion.div>
        <motion.h3
          className="display relative mt-5 text-2xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          {msg.title}
        </motion.h3>
        <motion.p
          className="relative mx-auto mt-3 max-w-md text-muted"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          {msg.body}
        </motion.p>
      </div>
    );
  }

  return (
    <div className="card mx-auto max-w-xl p-7 sm:p-9">
      <span className="eyebrow">{waitlist.eyebrow}</span>
      <h2 className="display mt-3 text-2xl font-bold sm:text-3xl">{waitlist.title}</h2>
      <p className="mt-3 text-muted">{waitlist.body}</p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
        <Field label={f.name} name="name" error={errors.name} autoComplete="name" />
        <Field label={f.company} name="company" error={errors.company} autoComplete="organization" />
        <Field label={f.email} name="email" type="email" error={errors.email} autoComplete="email" />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>{f.size}</Label>
            <select name="company_size" className="field" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {waitlist.sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label>{f.role}</Label>
            <input name="role" className="field" placeholder="e.g. Head of People" />
          </div>
        </div>

        {/* honeypot — visually hidden, off-screen, not announced */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
          {status === "submitting" ? waitlist.submitting : waitlist.submit}
        </button>

        {status === "error" && (
          <p className="text-center text-sm text-red-600">{waitlist.error}</p>
        )}
      </form>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <label className="mb-1.5 block text-sm font-medium text-ink">{children}</label>;
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="field"
        aria-invalid={Boolean(error)}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
