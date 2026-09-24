"use client";

import { useActionState } from "react";
import { registerPlayer, type PlayerState } from "@/app/actions/players";
import { positions } from "@/lib/site";
import type { Team } from "@/lib/types";

export function PlayerRegisterForm({ teams }: { teams: Team[] }) {
  const [state, action, pending] = useActionState(registerPlayer, {} as PlayerState);

  return (
    <form action={action} className="space-y-5 rounded-3xl border border-line bg-panel p-6">
      <label className="block text-sm">
        <span className="text-muted">Nome</span>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border border-line bg-black/40 px-3 py-2 text-white outline-none focus:border-ps"
        />
      </label>
      <label className="block text-sm">
        <span className="text-muted">Time</span>
        <select
          name="teamId"
          required
          className="mt-1 w-full rounded-xl border border-line bg-black/40 px-3 py-2 text-white"
        >
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="text-muted">Posição</span>
        <select name="position" className="mt-1 w-full rounded-xl border border-line bg-black/40 px-3 py-2 text-white">
          {positions.map((position) => (
            <option key={position}>{position}</option>
          ))}
        </select>
      </label>
      {state.error ? <p className="text-sm text-red-400">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="hud-card bg-pitch px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Cadastrar jogador"}
      </button>
    </form>
  );
}
