"use server";

import { redirect } from "next/navigation";
import { addPlayerLocal, getCatalog } from "@/lib/hub";
import { positions } from "@/lib/site";

export type PlayerState = { error?: string };

export async function registerPlayer(_prev: PlayerState, formData: FormData): Promise<PlayerState> {
  const name = String(formData.get("name") ?? "").trim();
  const position = String(formData.get("position") ?? "").trim();
  const teamId = String(formData.get("teamId") ?? "").trim();

  if (name.length < 2) return { error: "Informe o nome do jogador." };
  if (!positions.includes(position as (typeof positions)[number])) {
    return { error: "Posição inválida." };
  }

  const catalog = await getCatalog();
  const team = catalog.teams.find((item) => item.id === teamId);
  if (!team) return { error: "Time não encontrado." };

  await addPlayerLocal({ teamId, name, position });
  redirect(`/times/${team.slug}`);
}
