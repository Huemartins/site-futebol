import { computeStandings } from "@/lib/championships";
import { readLocalStore, writeLocalStore } from "@/lib/local-store";
import { canWriteToSupabase, getSupabaseAdmin, getSupabaseAnon } from "@/lib/supabase";
import type { Championship, Match, Team, TeamPlayer } from "@/lib/types";

function mapTeam(row: Record<string, unknown>): Team {
  return {
    id: String(row.id),
    name: String(row.name),
    slug: String(row.slug),
    crestUrl: (row.crest_url as string | null) ?? null,
    discord: (row.discord as string | null) ?? null,
    championshipId: String(row.championship_id),
    ownerUserId: (row.owner_user_id as string | null) ?? null,
  };
}

export async function listChampionships(): Promise<Championship[]> {
  const supabase = getSupabaseAnon();
  if (supabase) {
    const { data, error } = await supabase.from("championships").select("*").order("name");
    if (!error && data?.length) return data as Championship[];
  }
  const store = await readLocalStore();
  return store.championships;
}

export async function getChampionship(slug: string) {
  const store = await readLocalStore();
  const supabase = getSupabaseAnon();
  let championship: Championship | undefined;
  let teams: Team[] = [];
  let matches: Match[] = [];

  if (supabase) {
    const { data } = await supabase.from("championships").select("*").eq("slug", slug).maybeSingle();
    if (data) {
      championship = data as Championship;
      const { data: teamRows } = await supabase.from("teams").select("*").eq("championship_id", championship.id);
      teams = (teamRows ?? []).map((row) => mapTeam(row as Record<string, unknown>));
      const { data: matchRows } = await supabase
        .from("matches")
        .select("*")
        .eq("championship_id", championship.id)
        .order("played_at");
      matches = (matchRows ?? []).map((row) => ({
        id: row.id,
        championshipId: row.championship_id,
        homeTeamId: row.home_team_id,
        awayTeamId: row.away_team_id,
        homeScore: row.home_score,
        awayScore: row.away_score,
        playedAt: row.played_at,
      }));
    }
  }

  if (!championship) {
    const found = store.championships.find((item) => item.slug === slug);
    if (!found) return null;
    const resolved = found;
    championship = resolved;
    teams = store.teams.filter((team) => team.championshipId === resolved.id);
    matches = store.matches.filter((match) => match.championshipId === resolved.id);
  }

  return {
    championship,
    teams,
    matches,
    standings: computeStandings(teams, matches),
  };
}

export async function getTeam(slug: string) {
  const store = await readLocalStore();
  const supabase = getSupabaseAnon();
  let team: Team | undefined;
  let players: TeamPlayer[] = [];

  if (supabase) {
    const { data } = await supabase.from("teams").select("*").eq("slug", slug).maybeSingle();
    if (data) {
      team = mapTeam(data as Record<string, unknown>);
      const { data: playerRows } = await supabase.from("team_players").select("*").eq("team_id", team.id);
      players = (playerRows ?? []).map((row) => ({
        id: row.id,
        teamId: row.team_id,
        name: row.name,
        position: row.position,
      }));
    }
  }

  if (!team) {
    const found = store.teams.find((item) => item.slug === slug);
    if (!found) return null;
    const resolved = found;
    team = resolved;
    players = store.teamPlayers.filter((player) => player.teamId === resolved.id);
  }

  const championships = await listChampionships();
  const championship = championships.find((item) => item.id === team.championshipId) ?? null;
  return { team, players, championship };
}

export async function getCatalog() {
  return readLocalStore();
}

export async function addPlayerLocal(input: {
  teamId: string;
  name: string;
  position: string;
}) {
  const store = await readLocalStore();
  const team = store.teams.find((item) => item.id === input.teamId);
  if (!team) return null;
  store.teamPlayers.push({
    id: crypto.randomUUID(),
    teamId: input.teamId,
    name: input.name,
    position: input.position,
  });
  await writeLocalStore(store);
  return team;
}

export async function createTeamLocal(input: {
  name: string;
  slug: string;
  discord: string | null;
  championshipId: string;
  crestUrl: string | null;
  players: { name: string; position: string }[];
}) {
  const store = await readLocalStore();
  const id = crypto.randomUUID();
  const team: Team = {
    id,
    name: input.name,
    slug: input.slug,
    crestUrl: input.crestUrl,
    discord: input.discord,
    championshipId: input.championshipId,
    ownerUserId: null,
  };
  store.teams.push(team);
  for (const player of input.players) {
    store.teamPlayers.push({
      id: crypto.randomUUID(),
      teamId: id,
      name: player.name,
      position: player.position,
    });
  }
  await writeLocalStore(store);
  return team;
}

export async function createTeamRemote(input: {
  name: string;
  slug: string;
  discord: string | null;
  championshipId: string;
  crestUrl: string | null;
  players: { name: string; position: string }[];
}) {
  const admin = getSupabaseAdmin();
  if (!admin || !canWriteToSupabase()) return null;
  const { data, error } = await admin
    .from("teams")
    .insert({
      name: input.name,
      slug: input.slug,
      discord: input.discord,
      championship_id: input.championshipId,
      crest_url: input.crestUrl,
    })
    .select("*")
    .single();
  if (error || !data) return null;
  if (input.players.length) {
    await admin.from("team_players").insert(
      input.players.map((player) => ({
        team_id: data.id,
        name: player.name,
        position: player.position,
      })),
    );
  }
  return mapTeam(data as Record<string, unknown>);
}
