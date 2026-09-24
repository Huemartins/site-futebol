"use client";

import { useActionState, useState } from "react";
import { registerTeam, type RegisterState } from "@/app/actions/teams";
import { positions } from "@/lib/site";
import type { Championship } from "@/lib/types";

export function TeamRegisterForm({ championships }: { championships: Championship[] }) {
  const [state, action, pending] = useActionState(registerTeam, {} as RegisterState);
  const [rows, setRows] = useState([{ id: 1 }, { id: 2 }]);

  return (
    <form action={action} className="space-y-5 rounded-3xl border border-line bg-panel p-6">
      <label className="block text-sm">
        <span className="text-muted">Nome do time</span>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border border-line bg-black/40 px-3 py-2 text-white outline-none focus:border-ps"
        />
      </label>
      <label className="block text-sm">
        <span className="text-muted">Campeonato</span>
        <select
          name="championshipId"
          required
          className="mt-1 w-full rounded-xl border border-line bg-black/40 px-3 py-2 text-white outline-none focus:border-ps"
        >
          {championships.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="text-muted">Discord (opcional)</span>
        <input
          name="discord"
          placeholder="https://discord.gg/..."
          className="mt-1 w-full rounded-xl border border-line bg-black/40 px-3 py-2 text-white outline-none focus:border-ps"
        />
      </label>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted">Elenco</p>
          <button
            type="button"
            className="text-sm text-pitch"
            onClick={() => setRows((current) => [...current, { id: Date.now() }])}
          >
            + jogador
          </button>
        </div>
        <div className="mt-3 space-y-2">
          {rows.map((row) => (
            <div key={row.id} className="grid grid-cols-[1fr_7rem] gap-2">
              <input
                name="player_name"
                placeholder="Nome"
                className="rounded-xl border border-line bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-ps"
              />
              <select
                name="player_position"
                className="rounded-xl border border-line bg-black/40 px-2 py-2 text-sm text-white"
              >
                {positions.map((position) => (
                  <option key={position}>{position}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {state.error ? <p className="text-sm text-red-400">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-pitch px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Cadastrar time"}
      </button>
    </form>
  );
}
