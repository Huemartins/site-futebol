import Link from "next/link";
import { PageHud } from "@/components/page-hud";
import { computeStandings } from "@/lib/championships";
import { getCatalog } from "@/lib/hub";

export const metadata = {
  title: "Ranking",
  description: "Ranking dos times FUTZONE.",
};

export default async function RankingPage() {
  const catalog = await getCatalog();
  const standings = computeStandings(catalog.teams, catalog.matches);

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <PageHud kicker="Fase 3 · Comunidade" title="Ranking">
        Classificação geral pelos pontos das ligas FUTZONE.
      </PageHud>
      <ol className="space-y-2">
        {standings.map((row, index) => (
          <li key={row.team.id} className="hud-card flex items-center justify-between border border-line bg-panel px-4 py-3">
            <span className="font-display text-2xl text-pitch">{index + 1}</span>
            <Link href={`/times/${row.team.slug}`} className="flex-1 px-4 text-white hover:text-pitch">
              {row.team.name}
            </Link>
            <span className="text-sm text-muted">{row.points} pts</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
