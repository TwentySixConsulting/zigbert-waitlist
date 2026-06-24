-- Run this in the Supabase SQL editor to create the waitlist table.
-- Public site uses the anon key and may INSERT only — it cannot read entries back.

create table if not exists public.waitlist (
  id           uuid primary key default gen_random_uuid(),
  name         text        not null,
  company      text        not null,
  email        text        not null,
  company_size text,
  role         text,
  created_at   timestamptz not null default now()
);

-- One row per email; the client treats a duplicate as a successful re-signup.
create unique index if not exists waitlist_email_key
  on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

-- Allow anonymous inserts only. No select/update/delete policy = no public reads.
drop policy if exists "anon can insert waitlist" on public.waitlist;
create policy "anon can insert waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);
