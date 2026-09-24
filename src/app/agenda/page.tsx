import { PageHud } from "@/components/page-hud";
import { getCatalog } from "@/lib/hub";

export const metadata = {
  title: "Agenda",
  description: "Agenda de partidas FUTZONE.",
};

export default async function AgendaPage() {
  const catalog = await getCatalog();
  const teamName = (id: string) => catalog.teams.find((team) => team.id === id)?.name ?? "A definir";
  const matches = [...catalog.matches].sort(
    (a, b) => new Date(a.playedAt).getTime() - new Date(b.playedAt).getTime(),
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <PageHud kicker="Fase 3 · Comunidade" title="Agenda de partidas">
        Calendário das partidas cadastradas. Jogos sem placar ficam como próximos.
      </PageHud>
      <ul className="space-y-2">
        {matches.map((match) => {
          const played = match.homeScore !== null && match.awayScore !== null;
          return (
            <li key={match.id} className="hud-card border border-line bg-panel px-4 py-3">
              <p className="text-xs text-muted">
                {new Date(match.playedAt).toLocaleString("pt-BR")} · {played ? "encerrada" : "próxima"}
              </p>
              <p className="mt-1 text-white">
                {teamName(match.homeTeamId)}{" "}
                <span className="text-pitch">
                  {played ? `${match.homeScore}–${match.awayScore}` : "vs"}
                </span>{" "}
                {teamName(match.awayTeamId)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
