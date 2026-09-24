"use server";

import { redirect } from "next/navigation";
import { createTeamLocal, createTeamRemote, listChampionships } from "@/lib/hub";
import { slugify } from "@/lib/slug";
import { positions } from "@/lib/site";

export type RegisterState = { error?: string };

export async function registerTeam(_prev: RegisterState, formData: FormData): Promise<RegisterState> {
  const name = String(formData.get("name") ?? "").trim();
  const discord = String(formData.get("discord") ?? "").trim() || null;
  const championshipId = String(formData.get("championshipId") ?? "").trim();
  const playerNames = formData.getAll("player_name").map((value) => String(value).trim());
  const playerPositions = formData.getAll("player_position").map((value) => String(value).trim());

  if (name.length < 3) return { error: "O nome do time precisa ter pelo menos 3 caracteres." };
  if (!championshipId) return { error: "Escolha um campeonato." };

  const players = playerNames
    .map((playerName, index) => ({
      name: playerName,
      position: playerPositions[index] ?? "MC",
    }))
    .filter((player) => player.name.length > 0);

  if (!players.length) return { error: "Inclua pelo menos um jogador." };
  if (players.some((player) => !positions.includes(player.position as (typeof positions)[number]))) {
    return { error: "Posição inválida no elenco." };
  }

  const championships = await listChampionships();
  if (!championships.some((item) => item.id === championshipId)) {
    return { error: "Campeonato não encontrado." };
  }

  const slug = `${slugify(name) || "time"}-${Math.random().toString(36).slice(2, 6)}`;
  const payload = {
    name,
    slug,
    discord,
    championshipId,
    crestUrl: null,
    players,
  };

  const remote = await createTeamRemote(payload);
  if (!remote) await createTeamLocal(payload);
  redirect(`/times/${slug}`);
}
