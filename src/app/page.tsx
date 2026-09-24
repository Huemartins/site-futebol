import Image from "next/image";
import Link from "next/link";
import { CoverStars } from "@/components/cover-stars";
import { fc27, modes } from "@/lib/fc27";
import { getCatalog } from "@/lib/hub";
import {
  homeFeaturedGuides,
  homeHighlights,
  homeHubs,
  homeNews,
  homePlatform,
  homeQuickFacts,
  homeStats,
  homeTicker,
  homeUpcoming,
  site,
} from "@/lib/site";

export default async function Home() {
  const catalog = await getCatalog();
  const teamName = (id: string) => catalog.teams.find((team) => team.id === id)?.name ?? "A definir";
  const upcoming = [...catalog.matches]
    .filter((match) => match.homeScore === null || match.awayScore === null)
    .sort((a, b) => new Date(a.playedAt).getTime() - new Date(b.playedAt).getTime())
    .slice(0, 4);

  return (
    <div>
      <section className="relative min-h-[92vh] overflow-hidden bg-black">
        <Image
          src="/hero-futebol-virtual.png"
          alt="Jogador no estádio, de costas, no ciclo EA FC 27"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f14] via-[#0b0f14]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-black/30" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-28 md:px-6">
          <p className="text-xs font-semibold tracking-[0.38em] text-pitch uppercase md:text-sm">
            {site.kicker}
          </p>
          <h1 className="font-display mt-4 max-w-4xl text-6xl font-extrabold uppercase leading-[0.86] text-white md:text-8xl lg:text-[7.2rem]">
            O futebol
            <span className="mt-1 block text-pitch">virtual</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            O portal de quem vive o pitch digital. Notícia no apito, EA FC no ciclo, Clubs no 11x11, eSports no palco.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/noticias"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-pitch px-7 py-3.5 text-sm font-extrabold tracking-wide text-black uppercase shadow-[0_0_40px_rgba(57,255,20,0.4)]"
            >
              Explorar conteúdo →
            </Link>
            <Link
              href="/campeonatos"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase"
            >
              Ver campeonatos
            </Link>
          </div>
        </div>
        <p className="absolute right-6 bottom-10 hidden max-w-[10rem] text-right font-display text-2xl font-extrabold italic leading-tight text-white md:block lg:right-16 lg:text-3xl">
          {site.claim}
          <span className="mt-2 block text-pitch">♛</span>
        </p>
      </section>

      <section className="overflow-hidden border-y border-line bg-black/80 py-2">
        <div className="ticker text-xs font-semibold tracking-[0.18em] text-pitch uppercase">
          {[...homeTicker, ...homeTicker].map((item, index) => (
            <span key={`${item}-${index}`} className="mx-6 inline-flex items-center gap-2">
              <span className="text-white/30">◆</span>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-[#0b0f14]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-2 md:grid-cols-4 md:px-6">
          {homeStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-extrabold text-pitch md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs tracking-[0.14em] text-muted uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.28em] text-pitch uppercase">Últimas notícias</p>
            <h2 className="font-display mt-2 text-4xl text-white md:text-5xl">O ciclo 27 não espera</h2>
          </div>
          <Link href="/noticias" className="hidden text-sm font-semibold tracking-wide text-pitch uppercase md:inline">
            Ver todas →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeNews.map((item) => (
            <Link
              key={item.slug}
              href={`/noticias/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-line bg-panel"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute left-3 top-3 rounded-full bg-pitch px-2.5 py-1 text-[10px] font-bold tracking-wide text-black uppercase">
                  {item.tag}
                </p>
              </div>
              <div className="p-4">
                <p className="text-[11px] text-muted">{item.date}</p>
                <h3 className="font-display mt-2 text-lg leading-snug text-white group-hover:text-pitch">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-[#0b0f14]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.28em] text-pitch uppercase">EA Sports FC 27</p>
              <h2 className="font-display mt-2 text-4xl text-white md:text-5xl">Por que o 27 é diferente</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                Early access {fc27.earlyAccess}. Launch {fc27.release}. O 26 alisava com IA; o 27 devolve controle ao pad.
              </p>
            </div>
            <Link href="/ea-fc" className="text-sm font-semibold tracking-wide text-pitch uppercase">
              Hub EA FC →
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeHighlights.map((item) => (
              <Link
                key={item.area}
                href={item.href}
                className="rounded-2xl border border-line bg-panel p-5 transition hover:border-pitch hover:bg-pitch/5"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-pitch uppercase">{item.area}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.28em] text-pitch uppercase">Modos do disco</p>
            <h2 className="font-display mt-2 text-4xl text-white md:text-5xl">Um jogo, vários pitches</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {modes.slice(0, 4).map((mode) => (
            <article key={mode.slug} className="rounded-2xl border border-line bg-panel p-5">
              <h3 className="font-display text-xl uppercase text-white">{mode.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{mode.pitch}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Kick-Off, Lite grátis e jogabilidade competitiva também entram. Detalhe completo na aba EA FC.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {homeHubs.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="flex min-h-[210px] flex-col justify-between rounded-2xl border border-line bg-panel p-5 transition hover:border-pitch hover:bg-pitch/5"
            >
              <div>
                <h2 className="font-display text-2xl uppercase text-white">{hub.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{hub.detail}</p>
              </div>
              <p className="mt-6 text-xs font-extrabold tracking-[0.18em] text-pitch uppercase">Acessar →</p>
            </Link>
          ))}
        </div>
      </section>

      <CoverStars />

      <section className="border-y border-line bg-[#0b0f14]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.28em] text-pitch uppercase">Guias & táticas</p>
              <h2 className="font-display mt-2 text-4xl text-white md:text-5xl">Do pad ao placar</h2>
              <p className="mt-3 max-w-xl text-sm text-muted">
                Formação, build, DualSense e bloco médio. Leitura que vira resultado no 11x11.
              </p>
            </div>
            <div className="flex gap-4 text-sm font-semibold tracking-wide text-pitch uppercase">
              <Link href="/taticas">Táticas →</Link>
              <Link href="/guias">Guias →</Link>
              <Link href="/builds">Builds →</Link>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeFeaturedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}`}
                className="rounded-2xl border border-line bg-panel p-5 transition hover:border-pitch"
              >
                <p className="text-[10px] font-bold tracking-[0.2em] text-pitch uppercase">{guide.tag}</p>
                <h3 className="font-display mt-2 text-xl leading-snug text-white">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.28em] text-pitch uppercase">Próximas partidas</p>
            <h2 className="font-display mt-2 text-4xl text-white">Agenda FUTZONE</h2>
            <p className="mt-3 text-sm text-muted">Jogos da liga e copa. Placar ao vivo na Central de Resultados.</p>
            <ul className="mt-6 space-y-3">
              {(upcoming.length > 0 ? upcoming : null)?.map((match) => (
                <li key={match.id} className="rounded-2xl border border-line bg-panel px-4 py-3">
                  <p className="text-[11px] text-muted">
                    {new Date(match.playedAt).toLocaleString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p className="mt-1 text-sm text-white">
                    {teamName(match.homeTeamId)} <span className="text-pitch">vs</span> {teamName(match.awayTeamId)}
                  </p>
                </li>
              )) ??
                homeUpcoming.map((item) => (
                  <li key={item.match}>
                    <Link href={item.href} className="block rounded-2xl border border-line bg-panel px-4 py-3 transition hover:border-pitch">
                      <p className="text-[11px] text-muted">{item.date}</p>
                      <p className="mt-1 text-sm text-white">{item.match}</p>
                    </Link>
                  </li>
                ))}
            </ul>
            <Link href="/agenda" className="mt-4 inline-block text-sm font-semibold text-pitch">
              Ver agenda completa →
            </Link>
          </div>

          <div>
            <p className="text-xs tracking-[0.28em] text-pitch uppercase">Números do portal</p>
            <h2 className="font-display mt-2 text-4xl text-white">O que tem aqui</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {homeQuickFacts.map((fact) => (
                <article key={fact.label} className="rounded-2xl border border-line bg-panel p-4">
                  <p className="font-display text-3xl text-pitch">{fact.value}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{fact.label}</p>
                  <p className="mt-1 text-xs text-muted">{fact.detail}</p>
                </article>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/ranking" className="rounded-full border border-line px-4 py-2 text-xs font-bold tracking-wide text-white uppercase">
                Ranking
              </Link>
              <Link href="/resultados" className="rounded-full border border-line px-4 py-2 text-xs font-bold tracking-wide text-white uppercase">
                Resultados
              </Link>
              <Link href="/elencos" className="rounded-full border border-line px-4 py-2 text-xs font-bold tracking-wide text-white uppercase">
                Elencos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">Plataforma</p>
          <h2 className="font-display mt-2 text-4xl text-white md:text-5xl">Entre na liga em 3 passos</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {homePlatform.map((item) => (
              <article key={item.step} className="rounded-2xl border border-line bg-panel p-6">
                <p className="font-display text-4xl text-pitch/40">{item.step}</p>
                <h3 className="font-display mt-2 text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex rounded-full bg-pitch px-4 py-2 text-xs font-extrabold tracking-wide text-black uppercase"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line bg-pitch/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center md:px-6">
          <div>
            <p className="font-display text-3xl text-white md:text-4xl">Pronto para o apito?</p>
            <p className="mt-2 max-w-lg text-sm text-muted">
              Notícia, tática, campeonato e comunidade. Tudo no mesmo portal — do early access ao playoff.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cadastrar" className="rounded-full bg-pitch px-6 py-3 text-sm font-extrabold text-black uppercase">
              Criar conta
            </Link>
            <Link href="/ea-fc" className="rounded-full border border-pitch/50 px-6 py-3 text-sm font-extrabold text-pitch uppercase">
              Ver EA FC 27
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
