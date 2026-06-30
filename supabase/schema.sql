-- Sakura Speak — member schema for Supabase
-- Run once in the Supabase SQL editor (Dashboard → SQL) on your project.
-- Pure client-side app: access control is enforced by Row Level Security below.

-- ---- enums (idempotent) ----
do $$ begin
  create type member_role as enum ('member', 'admin');
exception when duplicate_object then null; end $$;

do $$ begin
  create type member_status as enum ('active', 'suspended', 'banned');
exception when duplicate_object then null; end $$;

-- ---- profiles table (1 row per auth user) ----
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  email      text,
  username   text unique,
  role       member_role   not null default 'member',
  status     member_status not null default 'active',
  created_at timestamptz   not null default now()
);

-- subscription state — written by your Stripe webhook in production
-- (status: 'none' | 'trial' | 'active'). The browser never self-grants premium.
alter table public.profiles add column if not exists plan text;
alter table public.profiles add column if not exists subscription_status text not null default 'none';
alter table public.profiles add column if not exists trial_ends timestamptz;

alter table public.profiles enable row level security;

-- helper: is the current user an admin? (security definer avoids RLS recursion)
create or replace function public.is_admin()
returns boolean language sql security definer stable as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- members read/update their own row; admins read/update every row
drop policy if exists "profiles_select" on public.profiles;
create policy "profiles_select" on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_update" on public.profiles;
create policy "profiles_update" on public.profiles
  for update using (id = auth.uid() or public.is_admin());

-- auto-create a profile row whenever a new auth user signs up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email, username)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- To grant yourself admin after signing up once:
--   update public.profiles set role = 'admin' where email = 'you@example.com';
