import Link from "next/link";
import { PageHud } from "@/components/page-hud";
import { getCatalog } from "@/lib/hub";

export const metadata = {
  title: "Resultados",
  description: "Resultados dos campeonatos FUTZONE.",
};

export default async function ResultadosPage() {
  const catalog = await getCatalog();
  const teamName = (id: string) => catalog.teams.find((team) => team.id === id)?.name ?? "A definir";

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <PageHud kicker="Fase 2 · Plataforma" title="Resultados">
        Placar das partidas já jogadas.
      </PageHud>
      <ul className="space-y-2">
        {catalog.matches
          .filter((match) => match.homeScore !== null)
          .map((match) => (
            <li key={match.id} className="hud-card flex flex-wrap items-center justify-between gap-3 border border-line bg-panel px-4 py-3">
              <span className="text-white">{teamName(match.homeTeamId)}</span>
              <span className="font-display text-2xl text-pitch">
                {match.homeScore}–{match.awayScore}
              </span>
              <span className="text-white">{teamName(match.awayTeamId)}</span>
              <Link
                href={`/campeonatos/${catalog.championships.find((item) => item.id === match.championshipId)?.slug ?? ""}`}
                className="text-xs text-muted"
              >
                ver campeonato
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
