-- DualPitch MVP schema (rodar no SQL Editor do Supabase)

create extension if not exists pgcrypto;

create table if not exists public.championships (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  game text not null,
  status text not null check (status in ('inscricoes', 'em_andamento', 'encerrado')),
  created_at timestamptz not null default now()
);

create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  crest_url text,
  discord text,
  championship_id uuid not null references public.championships (id) on delete cascade,
  owner_user_id uuid,
  created_at timestamptz not null default now()
);

create table if not exists public.team_players (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams (id) on delete cascade,
  name text not null,
  position text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.matches (
  id uuid primary key default gen_random_uuid(),
  championship_id uuid not null references public.championships (id) on delete cascade,
  home_team_id uuid not null references public.teams (id),
  away_team_id uuid not null references public.teams (id),
  home_score int,
  away_score int,
  played_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table if not exists public.ea_players (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  club text not null,
  overall int not null,
  pace int not null,
  shooting int not null,
  passing int not null,
  dribbling int not null,
  defending int not null,
  physical int not null,
  position text not null,
  archetype text not null
);

create table if not exists public.real_players (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  club text not null,
  position text not null,
  season text not null,
  goals int not null default 0,
  assists int not null default 0,
  pace int,
  shooting int,
  passing int,
  dribbling int,
  defending int,
  physical int
);

create table if not exists public.player_links (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  real_player_id uuid not null references public.real_players (id) on delete cascade,
  ea_player_id uuid not null references public.ea_players (id) on delete cascade,
  field_vs_game text not null
);

alter table public.championships enable row level security;
alter table public.teams enable row level security;
alter table public.team_players enable row level security;
alter table public.matches enable row level security;
alter table public.ea_players enable row level security;
alter table public.real_players enable row level security;
alter table public.player_links enable row level security;

create policy "public read championships" on public.championships for select using (true);
create policy "public read teams" on public.teams for select using (true);
create policy "public read team_players" on public.team_players for select using (true);
create policy "public read matches" on public.matches for select using (true);
create policy "public read ea_players" on public.ea_players for select using (true);
create policy "public read real_players" on public.real_players for select using (true);
create policy "public read player_links" on public.player_links for select using (true);

insert into storage.buckets (id, name, public)
values ('crests', 'crests', true)
on conflict (id) do nothing;
