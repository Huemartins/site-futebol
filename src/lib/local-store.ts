import { promises as fs } from "fs";
import path from "path";
import {
  seedChampionships,
  seedMatches,
  seedTeamPlayers,
  seedTeams,
} from "@/lib/championships-seed";
import type { Account, Championship, Match, Team, TeamPlayer } from "@/lib/types";

export type LocalStore = {
  championships: Championship[];
  teams: Team[];
  teamPlayers: TeamPlayer[];
  matches: Match[];
  users: Account[];
};

const storePath = path.join(process.cwd(), ".data", "store.json");

function initialStore(): LocalStore {
  return {
    championships: seedChampionships,
    teams: seedTeams,
    teamPlayers: seedTeamPlayers,
    matches: seedMatches,
    users: [],
  };
}

export async function readLocalStore(): Promise<LocalStore> {
  try {
    const raw = await fs.readFile(storePath, "utf8");
    const parsed = JSON.parse(raw) as Partial<LocalStore>;
    return {
      championships: parsed.championships ?? seedChampionships,
      teams: parsed.teams ?? seedTeams,
      teamPlayers: parsed.teamPlayers ?? seedTeamPlayers,
      matches: parsed.matches ?? seedMatches,
      users: parsed.users ?? [],
    };
  } catch {
    // Netlify/Vercel serverless: filesystem is read-only — use seed data in memory.
    return initialStore();
  }
}

export async function writeLocalStore(store: LocalStore) {
  try {
    await fs.mkdir(path.dirname(storePath), { recursive: true });
    await fs.writeFile(storePath, JSON.stringify(store, null, 2), "utf8");
  } catch {
    // Persistência local indisponível em produção serverless; dados ficam só na sessão.
  }
}
