"use client";

import { useMemo, useState } from "react";
import type { Attributes, PlayerLink } from "@/lib/types";

const labels: { key: keyof Attributes; short: string }[] = [
  { key: "pace", short: "RIT" },
  { key: "shooting", short: "CHU" },
  { key: "passing", short: "PAS" },
  { key: "dribbling", short: "DRI" },
  { key: "defending", short: "DEF" },
  { key: "physical", short: "FÍS" },
];

function polar(cx: number, cy: number, r: number, i: number, total: number) {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / total;
  return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
}

function polygon(attrs: Attributes, cx: number, cy: number, maxR: number) {
  return labels
    .map((item, index) => {
      const [x, y] = polar(cx, cy, (attrs[item.key] / 99) * maxR, index, labels.length);
      return `${x},${y}`;
    })
    .join(" ");
}

export function CompareArena({
  players,
  initialSlug,
}: {
  players: PlayerLink[];
  initialSlug?: string;
}) {
  const [query, setQuery] = useState("");
  const [slug, setSlug] = useState(initialSlug ?? players[0]?.slug ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return players;
    return players.filter((player) =>
      `${player.real.name} ${player.real.club} ${player.ea.club}`.toLowerCase().includes(q),
    );
  }, [players, query]);

  const selected = players.find((player) => player.slug === slug) ?? players[0];

  if (!selected) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-3xl border border-line bg-panel p-4">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar jogador"
          className="w-full rounded-xl border border-line bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-ps"
        />
        <ul className="mt-3 max-h-[520px] space-y-1 overflow-auto">
          {filtered.map((player) => (
            <li key={player.slug}>
              <button
                type="button"
                onClick={() => setSlug(player.slug)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm ${
                  player.slug === selected.slug ? "bg-pitch text-black" : "text-muted hover:bg-white/5"
                }`}
              >
                {player.real.name}
                <span className="mt-0.5 block text-xs opacity-80">{player.real.club}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            label="No campo"
            name={selected.real.name}
            meta={`${selected.real.club} · ${selected.real.position} · ${selected.real.season}`}
            stats={`${selected.real.goals} gols · ${selected.real.assists} assistências`}
            attrs={selected.real.attributes}
            accent="pitch"
          />
          <Card
            label="No EA FC"
            name={selected.ea.name}
            meta={`${selected.ea.club} · ${selected.ea.position} · ${selected.ea.archetype}`}
            stats={`Overall ${selected.ea.overall}`}
            attrs={selected.ea.attributes}
            accent="ps"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[240px_1fr]">
          <svg viewBox="0 0 220 220" className="mx-auto w-56">
            <polygon
              points={polygon(selected.real.attributes, 110, 110, 80)}
              fill="rgba(57,255,20,0.22)"
              stroke="#39FF14"
            />
            <polygon
              points={polygon(selected.ea.attributes, 110, 110, 80)}
              fill="rgba(57,255,20,0.25)"
              stroke="#39FF14"
            />
          </svg>
          <div className="rounded-3xl border border-line bg-panel p-5">
            <p className="text-xs tracking-[0.2em] text-pitch uppercase">No campo vs no jogo</p>
            <p className="mt-3 leading-7 text-muted">{selected.fieldVsGame}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  label,
  name,
  meta,
  stats,
  attrs,
  accent,
}: {
  label: string;
  name: string;
  meta: string;
  stats: string;
  attrs: Attributes;
  accent: "pitch" | "ps";
}) {
  return (
    <article className="rounded-3xl border border-line bg-panel p-5">
      <p className={`text-xs uppercase tracking-[0.2em] ${accent === "pitch" ? "text-pitch" : "text-ps"}`}>
        {label}
      </p>
      <h2 className="font-display mt-2 text-3xl text-white">{name}</h2>
      <p className="mt-1 text-sm text-muted">{meta}</p>
      <p className="mt-3 text-sm text-white">{stats}</p>
      <ul className="mt-4 space-y-2">
        {labels.map((item) => (
          <li key={item.key} className="grid grid-cols-[2.2rem_1fr_2rem] items-center gap-2 text-xs">
            <span className="text-muted">{item.short}</span>
            <span className="h-2 overflow-hidden rounded-full bg-white/10">
              <span
                className={`block h-full ${accent === "pitch" ? "bg-pitch" : "bg-ps"}`}
                style={{ width: `${attrs[item.key]}%` }}
              />
            </span>
            <span className="text-right text-white">{attrs[item.key]}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
