import Link from "next/link";
import { PitchHero } from "@/components/pitch-hero";
import { Medal, Trophy } from "@/components/ps-art";
import { listChampionships } from "@/lib/hub";
import { championshipStatusLabel } from "@/lib/site";

export const metadata = {
  title: "Campeonatos",
  description: "Ligas e copas FUTZONE.",
};

export default async function CampeonatosPage() {
  const championships = await listChampionships();

  return (
    <div>
      <PitchHero kit="cups" kicker="Campeonatos" title="Taça, tabela e inscrição">
        Só competição. Cadastre o time, veja o status, jogue a liga. Vestiário é Pro Clubs. Desenho tático é Táticas.
      </PitchHero>
      <section className="relative mx-auto max-w-5xl px-4 py-12 md:px-6">
        <Medal className="pointer-events-none absolute -right-2 top-0 hidden w-24 opacity-15 lg:block" />
        <Trophy className="pointer-events-none absolute right-20 top-28 hidden w-16 opacity-10 lg:block" />
        <div className="mb-8 flex flex-wrap gap-3">
          <Link href="/times/cadastrar" className="rounded-full bg-pitch px-5 py-2.5 text-sm font-bold text-black">
            Cadastrar time
          </Link>
          <Link href="/jogadores/cadastrar" className="rounded-full border border-line px-5 py-2.5 text-sm text-white">
            Cadastrar jogador
          </Link>
        </div>
        <div className="grid gap-4">
          {championships.map((item) => (
            <Link
              key={item.id}
              href={`/campeonatos/${item.slug}`}
              className="rounded-3xl border border-line bg-panel p-6 hover:border-pitch"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-pitch">
                {championshipStatusLabel[item.status]}
              </p>
              <h2 className="font-display mt-2 text-3xl text-white">{item.name}</h2>
              <p className="mt-1 text-sm text-muted">{item.game}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
