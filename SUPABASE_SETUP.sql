-- IMPORTING THIS SQL IS CRITICAL FOR THE APP TO WORK
-- Copy and Paste this into your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Create Contacts Table
create table if not exists public.contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text,
  email text,
  message text,
  source text
);

-- 2. Create Internship Applications Table
create table if not exists public.internship_applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  full_name text,
  email text,
  phone text,
  whatsapp text,
  college text,
  degree text,
  year text,
  domain text,
  skills text,
  reason text,
  source text
);

-- Enable RLS for security
alter table public.contacts enable row level security;
alter table public.internship_applications enable row level security;

-- Create policies to allow anyone to insert (Standard for contact forms)
drop policy if exists "Enable insert for everyone" on public.contacts;
create policy "Enable insert for everyone" on public.contacts for insert with check (true);

drop policy if exists "Enable insert for everyone" on public.internship_applications;
create policy "Enable insert for everyone" on public.internship_applications for insert with check (true);

-- Allow authenticated users (you) to see the data
drop policy if exists "Enable read for authenticated users only" on public.contacts;
create policy "Enable read for authenticated users only" on public.contacts for select using (auth.role() = 'authenticated');

drop policy if exists "Enable read for authenticated users only" on public.internship_applications;
create policy "Enable read for authenticated users only" on public.internship_applications for select using (auth.role() = 'authenticated');
