import Link from "next/link";
import { PitchHero } from "@/components/pitch-hero";
import { Whiteboard } from "@/components/ps-art";
import { guidesIn } from "@/lib/guides";
import { clubsFormations } from "@/lib/pro-clubs";

export const metadata = {
  title: "Táticas",
  description: "Formações e instruções do 11x11.",
};

const instructions = [
  { label: "Construção", value: "Apoio", note: "Passe curto. Sem lançamento no 9 se ele não for alvo." },
  { label: "Criação", value: "Entre as linhas", note: "O 10 recebe. Pontas fecham. Lateral sobe um de cada vez." },
  { label: "Marcação", value: "Por zona + troca", note: "Contain não chaseia. Quem está perto da bola pressiona." },
  { label: "Pressão", value: "10 min, depois médio", note: "Stamina é coletiva. Call no Discord, não no menu o jogo todo." },
] as const;

export default function TaticasPage() {
  const items = guidesIn("taticas");

  return (
    <div>
      <PitchHero kit="tactics" kicker="Táticas" title="O quadro do 11x11">
        Campo, bolinhas, profundidade e largura. O virtual pro não mora aqui — mora em Builds. O pad, em Guias.
      </PitchHero>
      <section className="relative mx-auto max-w-6xl px-4 py-12 md:px-6">
        <Whiteboard className="pointer-events-none absolute -right-2 top-2 hidden w-44 opacity-15 lg:block" />
        <div className="grid gap-4 md:grid-cols-2">
          {clubsFormations.map((formation) => (
            <article key={formation.name} className="rounded-3xl border border-line bg-panel p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-3xl text-white">{formation.name}</h2>
                <span className="rounded-full bg-pitch px-3 py-1 text-[11px] font-bold tracking-wide text-black uppercase">
                  {formation.badge}
                </span>
              </div>
              <p className="mt-3 text-sm text-pitch">{formation.use}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{formation.line}</p>
              <p className="mt-4 text-xs tracking-[0.16em] text-muted uppercase">
                Profundidade {formation.depth} · Largura {formation.width}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">Instruções</p>
          <h2 className="font-display mt-2 text-3xl text-white">O que deixar no menu</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-white/5 text-muted">
                <tr>
                  <th className="px-4 py-3">Campo</th>
                  <th className="px-4 py-3">Default FUTZONE</th>
                  <th className="px-4 py-3">Por quê</th>
                </tr>
              </thead>
              <tbody>
                {instructions.map((row) => (
                  <tr key={row.label} className="border-t border-line align-top">
                    <td className="px-4 py-3 font-semibold text-white">{row.label}</td>
                    <td className="px-4 py-3 text-pitch">{row.value}</td>
                    <td className="px-4 py-3 text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">Leituras de desenho</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {items.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}`}
                className="rounded-3xl border border-line bg-panel p-6 hover:border-pitch"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-pitch">{guide.tag}</p>
                <h3 className="font-display mt-2 text-2xl text-white">{guide.title}</h3>
                <p className="mt-2 text-sm text-muted">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
