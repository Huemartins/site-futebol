import Link from "next/link";
import { PitchHero } from "@/components/pitch-hero";
import { Playbook } from "@/components/ps-art";
import { guidesIn } from "@/lib/guides";

export const metadata = {
  title: "Guias",
  description: "Como jogar no pad, no FUT, na Carreira e no Lite.",
};

export default function GuiasPage() {
  const items = guidesIn("guias");

  return (
    <div>
      <PitchHero kit="guides" kicker="Guias" title="A mão no DualSense">
        Chuteira, controle e o primeiro mês. Sem formação de time (isso é Táticas). Sem função de clube (isso é Pro Clubs).
      </PitchHero>
      <section className="relative mx-auto max-w-5xl px-4 py-12 md:px-6">
        <Playbook className="pointer-events-none absolute -right-2 top-2 hidden w-40 opacity-15 lg:block" />

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-line bg-panel p-5">
            <p className="text-xs tracking-[0.2em] text-pitch uppercase">Pad</p>
            <h2 className="font-display mt-2 text-xl text-white">DualSense e controles</h2>
            <p className="mt-2 text-sm text-muted">R2, L2, defesa manual e o que mudou no 27 para quem joga no PS5.</p>
          </article>
          <article className="rounded-3xl border border-line bg-panel p-5">
            <p className="text-xs tracking-[0.2em] text-pitch uppercase">FUT</p>
            <h2 className="font-display mt-2 text-xl text-white">Primeiro mês no Ultimate Team</h2>
            <p className="mt-2 text-sm text-muted">Mercado, objetivos, Galeria e como não queimar moeda no launch.</p>
          </article>
          <article className="rounded-3xl border border-line bg-panel p-5">
            <p className="text-xs tracking-[0.2em] text-pitch uppercase">Carreira</p>
            <h2 className="font-display mt-2 text-xl text-white">Treinador ou atleta</h2>
            <p className="mt-2 text-sm text-muted">Qual save escolher, primeira janela e o que o 26 não tinha.</p>
          </article>
        </div>

        <p className="mb-6 text-xs tracking-[0.28em] text-pitch uppercase">Todos os guias</p>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guias/${guide.slug}`}
              className="rounded-3xl border border-line bg-panel p-6 hover:border-pitch"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-pitch">{guide.tag}</p>
              <h2 className="font-display mt-2 text-2xl text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
