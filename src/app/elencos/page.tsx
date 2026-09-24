import Link from "next/link";
import { PageHud } from "@/components/page-hud";
import { getCatalog } from "@/lib/hub";

export const metadata = {
  title: "Elencos",
  description: "Elencos dos times FUTZONE.",
};

export default async function ElencosPage() {
  const catalog = await getCatalog();
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <PageHud kicker="Fase 2 · Plataforma" title="Elencos">
        Todos os times e os jogadores cadastrados em cada um.
      </PageHud>
      <div className="space-y-4">
        {catalog.teams.map((team) => {
          const players = catalog.teamPlayers.filter((player) => player.teamId === team.id);
          return (
            <article key={team.id} className="hud-card border border-line bg-panel p-5">
              <Link href={`/times/${team.slug}`} className="font-display text-2xl text-white hover:text-pitch">
                {team.name}
              </Link>
              <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                {players.map((player) => (
                  <li key={player.id} className="flex justify-between text-sm text-muted">
                    <span>{player.name}</span>
                    <span className="text-pitch">{player.position}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
