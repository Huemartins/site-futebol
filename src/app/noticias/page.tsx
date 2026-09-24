import Link from "next/link";
import { PitchHero } from "@/components/pitch-hero";
import { Newspaper } from "@/components/ps-art";
import { news } from "@/lib/news";

export const metadata = {
  title: "Notícias",
  description: "Manchetes FUTZONE: o que apitou nesta semana.",
};

export default function NoticiasPage() {
  const featured = news.find((article) => article.featured) ?? news[0];
  const rest = news.filter((article) => article.slug !== featured.slug);

  return (
    <div>
      <PitchHero kit="news" kicker="Notícias" title="O que apitou nesta semana">
        Só jornal. Manchete, matéria e data. Sem formação, sem tabela de loja, sem build.
      </PitchHero>
      <section className="relative mx-auto max-w-6xl px-4 py-12 md:px-6">
        <Newspaper className="pointer-events-none absolute -right-2 top-4 hidden w-40 opacity-15 lg:block" />
        <article className="fx-ease relative overflow-hidden rounded-3xl border border-pitch/40 bg-panel p-6 transition hover:-translate-y-1 hover:border-pitch/70 hover:shadow-[0_0_40px_rgba(57,255,20,0.28)] md:p-8">
          <Newspaper className="pointer-events-none absolute right-4 top-4 w-20 opacity-70 md:w-28" />
          <p className="text-xs tracking-[0.22em] text-pitch uppercase">
            {featured.tag} · {featured.date}
          </p>
          <h2 className="font-display mt-3 text-3xl text-white md:text-5xl">{featured.title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-7 text-muted">{featured.excerpt}</p>
          <Link href={`/noticias/${featured.slug}`} className="mt-6 inline-block text-sm font-semibold text-pitch">
            Ler matéria completa →
          </Link>
        </article>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {rest.map((article) => (
            <article key={article.slug} className="fx-ease relative flex flex-col rounded-3xl border border-line bg-panel p-6 transition hover:-translate-y-1 hover:border-pitch/60 hover:shadow-[0_0_32px_rgba(57,255,20,0.22)]">
              <Newspaper className="pointer-events-none absolute right-3 top-3 w-12 opacity-50" />
              <p className="text-xs tracking-[0.2em] text-pitch uppercase">
                {article.tag} · {article.date}
              </p>
              <h2 className="font-display mt-2 text-2xl text-white">{article.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.excerpt}</p>
              <Link href={`/noticias/${article.slug}`} className="mt-4 inline-block text-sm font-semibold text-pitch">
                Ler matéria →
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-3xl border border-line bg-panel p-6 md:p-8">
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">Continue lendo</p>
          <h2 className="font-display mt-2 text-3xl text-white">Mais conteúdo FUTZONE</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/ea-fc", label: "EA FC 27", detail: "Preços, modos e comparativo 26 × 27" },
              { href: "/pro-clubs", label: "Pro Clubs", detail: "Funções, Discord e The Grounds" },
              { href: "/taticas", label: "Táticas", detail: "Formações e instruções do 11x11" },
              { href: "/campeonatos", label: "Campeonatos", detail: "Liga, copa e inscrições abertas" },
            ].map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="rounded-2xl border border-line bg-black/30 p-4 transition hover:border-pitch"
              >
                <p className="font-display text-lg text-white">{hub.label}</p>
                <p className="mt-1 text-sm text-muted">{hub.detail}</p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
