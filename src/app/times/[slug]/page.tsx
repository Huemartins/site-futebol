import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeam } from "@/lib/hub";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getTeam(slug);
  return { title: data?.team.name ?? "Time" };
}

export default async function TimePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getTeam(slug);
  if (!data) notFound();
  const { team, players, championship } = data;

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-pitch font-display text-3xl text-black">
        {team.name.slice(0, 2).toUpperCase()}
      </div>
      <h1 className="font-display mt-5 text-5xl text-white">{team.name}</h1>
      {championship ? (
        <Link href={`/campeonatos/${championship.slug}`} className="mt-2 inline-block text-sm text-pitch">
          {championship.name}
        </Link>
      ) : null}
      {team.discord ? (
        <p className="mt-3 text-sm text-muted">
          Discord:{" "}
          <a href={team.discord} className="text-ps underline">
            {team.discord}
          </a>
        </p>
      ) : null}

      <h2 className="font-display mt-10 text-3xl text-white">Elenco</h2>
      <ul className="mt-4 divide-y divide-white/10 rounded-3xl border border-line">
        {players.map((player) => (
          <li key={player.id} className="flex items-center justify-between px-5 py-3">
            <span className="text-white">{player.name}</span>
            <span className="text-xs tracking-widest text-pitch">{player.position}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
