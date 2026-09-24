import Link from "next/link";
import { PitchHero } from "@/components/pitch-hero";
import { EsportsMonitor } from "@/components/ps-art";

export const metadata = {
  title: "eSports",
  description: "Circuito competitivo de EA FC: palco, copa e transmissão.",
};

const calendar = [
  { date: "18 set 2026", event: "Early access FC 27 · FC Pro Open janela 1" },
  { date: "25 set 2026", event: "Launch mundial · início Copa eSports FUTZONE" },
  { date: "Out 2026", event: "Mata-mata Copa eSports · transmissão FUTZONE" },
  { date: "Nov 2026", event: "Final da Liga Pro Clubs · playoff 11x11" },
] as const;

const broadcast = [
  "Pré-jogo com formação e ban de tática.",
  "Intervalo com leitura de bloco e transição.",
  "Pós-jogo com destaques de virtual pro e stats.",
  "VOD na Central de Resultados após o apito.",
] as const;

const events = [
  {
    name: "FC Pro Open",
    detail: "Circuito oficial da EA. FUT no palco, pontos de ranking mundial, janelas ao longo da temporada.",
  },
  {
    name: "Copa eSports FUTZONE",
    detail: "11x11 brasileiro. Inscrição na Central, mata-mata, DualSense na mesa.",
  },
  {
    name: "Club Tournaments",
    detail: "Live ops do Grounds: house rules, Mystery Ball, Survival. Não é liga da FUTZONE — é evento da EA.",
  },
] as const;

const format = [
  "Grupos + mata-mata. Melhor de 3 a partir da semifinal.",
  "Ban de formação no começo de cada jogo. Sem replay no intervalo.",
  "Transmissão com leitura tática entre os tempos — não é podcast de FUT.",
  "Quer jogar: cadastre o time. Quer só assistir: calendário abaixo.",
] as const;

export default function EsportsPage() {
  return (
    <div>
      <PitchHero kit="esports" kicker="eSports" title="Palco, headset e copa">
        Aqui é o circuito. Não é guia de pad, não é tabela de loja. É o que se assiste e o que se disputa com público.
      </PitchHero>
      <section className="relative mx-auto max-w-5xl px-4 py-12 md:px-6">
        <EsportsMonitor className="pointer-events-none absolute -right-4 top-4 hidden w-44 opacity-15 lg:block" />
        <div className="grid gap-4 md:grid-cols-3">
          {events.map((event) => (
            <article key={event.name} className="rounded-3xl border border-line bg-panel p-6">
              <h2 className="font-display text-2xl text-white">{event.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{event.detail}</p>
            </article>
          ))}
        </div>
        <h2 className="font-display mt-14 text-3xl text-white">Formato de palco</h2>
        <ul className="mt-6 space-y-3">
          {format.map((item) => (
            <li key={item} className="rounded-2xl border border-line bg-panel px-5 py-4 text-muted">
              {item}
            </li>
          ))}
        </ul>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.28em] text-pitch uppercase">Calendário</p>
            <h2 className="font-display mt-2 text-3xl text-white">O que vem no circuito</h2>
            <ul className="mt-6 space-y-3">
              {calendar.map((item) => (
                <li key={item.event} className="rounded-2xl border border-line bg-panel px-5 py-4">
                  <p className="text-xs font-bold tracking-wide text-pitch uppercase">{item.date}</p>
                  <p className="mt-1 text-sm text-muted">{item.event}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.28em] text-pitch uppercase">Transmissão</p>
            <h2 className="font-display mt-2 text-3xl text-white">Como acompanhar</h2>
            <ul className="mt-6 space-y-3">
              {broadcast.map((item) => (
                <li key={item} className="rounded-2xl border border-line bg-panel px-5 py-4 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/campeonatos" className="rounded-full bg-pitch px-5 py-2.5 text-sm font-bold text-black">
                Central de campeonatos
              </Link>
              <Link href="/agenda" className="rounded-full border border-line px-5 py-2.5 text-sm text-white">
                Ver agenda
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
