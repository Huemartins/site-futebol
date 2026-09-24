import Link from "next/link";
import { PageHud } from "@/components/page-hud";
import { computeStandings } from "@/lib/championships";
import { getCatalog } from "@/lib/hub";

export const metadata = {
  title: "Estatísticas",
  description: "Números dos times FUTZONE.",
};

export default async function EstatisticasPage() {
  const catalog = await getCatalog();
  const standings = computeStandings(catalog.teams, catalog.matches);

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <PageHud kicker="Fase 2 · Plataforma" title="Estatísticas">
        Pontos, saldo e volume de gols por time.
      </PageHud>
      <div className="overflow-x-auto rounded-3xl border border-line">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-white/5 text-muted">
            <tr>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Pts</th>
              <th className="px-4 py-3">J</th>
              <th className="px-4 py-3">GP</th>
              <th className="px-4 py-3">GC</th>
              <th className="px-4 py-3">SG</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row) => (
              <tr key={row.team.id} className="border-t border-line">
                <td className="px-4 py-3">
                  <Link href={`/times/${row.team.slug}`} className="text-white hover:text-pitch">
                    {row.team.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-pitch">{row.points}</td>
                <td className="px-4 py-3">{row.played}</td>
                <td className="px-4 py-3">{row.goalsFor}</td>
                <td className="px-4 py-3">{row.goalsAgainst}</td>
                <td className="px-4 py-3">{row.goalDiff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
