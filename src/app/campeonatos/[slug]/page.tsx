import Link from "next/link";
import { notFound } from "next/navigation";
import { getChampionship } from "@/lib/hub";
import { championshipStatusLabel } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getChampionship(slug);
  return { title: data?.championship.name ?? "Campeonato" };
}

export default async function CampeonatoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getChampionship(slug);
  if (!data) notFound();
  const { championship, teams, matches, standings } = data;
  const teamName = (id: string) => teams.find((team) => team.id === id)?.name ?? "A definir";

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <p className="text-xs tracking-[0.28em] text-pitch uppercase">
        {championshipStatusLabel[championship.status]}
      </p>
      <h1 className="font-display mt-3 text-5xl text-white">{championship.name}</h1>
      <p className="mt-2 text-muted">{championship.game}</p>

      <h2 className="font-display mt-10 text-3xl text-white">Tabela</h2>
      <div className="mt-4 overflow-x-auto rounded-3xl border border-line">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-white/5 text-muted">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">P</th>
              <th className="px-4 py-3">J</th>
              <th className="px-4 py-3">V</th>
              <th className="px-4 py-3">E</th>
              <th className="px-4 py-3">D</th>
              <th className="px-4 py-3">SG</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row, index) => (
              <tr key={row.team.id} className="border-t border-line">
                <td className="px-4 py-3 text-muted">{index + 1}</td>
                <td className="px-4 py-3">
                  <Link href={`/times/${row.team.slug}`} className="text-white hover:text-pitch">
                    {row.team.name}
                  </Link>
                </td>
                <td className="px-4 py-3 font-semibold text-pitch">{row.points}</td>
                <td className="px-4 py-3">{row.played}</td>
                <td className="px-4 py-3">{row.wins}</td>
                <td className="px-4 py-3">{row.draws}</td>
                <td className="px-4 py-3">{row.losses}</td>
                <td className="px-4 py-3">{row.goalDiff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-display mt-10 text-3xl text-white">Resultados</h2>
      <ul className="mt-4 space-y-2">
        {matches.map((match) => (
          <li key={match.id} className="rounded-2xl border border-line bg-panel px-4 py-3 text-sm">
            <span className="text-white">{teamName(match.homeTeamId)}</span>
            <span className="mx-3 font-display text-xl text-pitch">
              {match.homeScore}–{match.awayScore}
            </span>
            <span className="text-white">{teamName(match.awayTeamId)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
