import Link from "next/link";
import { PitchHero } from "@/components/pitch-hero";
import { ClubCrest, Megaphone } from "@/components/ps-art";
import { clubsCalls, clubsGrounds, clubsRoles, clubsWeek } from "@/lib/pro-clubs";

export const metadata = {
  title: "Pro Clubs",
  description: "Virtual pro, Grounds, Discord e o 11x11.",
};

export default function ProClubsPage() {
  return (
    <div>
      <PitchHero kit="clubs" kicker="Pro Clubs" title="Você é um jogador. Não o time todo.">
        Camisa, faixa de capitão, call no Discord e The Grounds. Formação fica em Táticas. Ponto do pro fica em Builds. Campeonato, na Central.
      </PitchHero>

      <section className="relative mx-auto max-w-6xl px-4 py-12 md:px-6">
        <ClubCrest className="pointer-events-none absolute -right-2 top-4 hidden w-28 opacity-15 lg:block" />
        <Megaphone className="pointer-events-none absolute right-24 top-40 hidden w-24 opacity-10 lg:block" />
        <div className="grid gap-4 md:grid-cols-2">
          {clubsRoles.map((item) => (
            <article key={item.role} className="rounded-3xl border border-line bg-panel p-5">
              <p className="text-xs tracking-[0.2em] text-pitch uppercase">
                {item.role} · {item.who}
              </p>
              <p className="mt-2 text-sm leading-6 text-white">{item.does}</p>
              <p className="mt-2 text-sm text-muted">Nunca: {item.never}</p>
            </article>
          ))}
        </div>

        <section className="mt-14 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-panel p-6">
            <p className="text-xs tracking-[0.28em] text-pitch uppercase">Discord</p>
            <h2 className="font-display mt-2 text-3xl text-white">Calls curtas</h2>
            <ul className="mt-5 space-y-3">
              {clubsCalls.map((item) => (
                <li key={item.call} className="flex gap-3 text-sm">
                  <span className="font-display w-16 shrink-0 text-pitch">{item.call}</span>
                  <span className="text-muted">{item.meaning}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-panel p-6">
            <p className="text-xs tracking-[0.28em] text-pitch uppercase">The Grounds</p>
            <h2 className="font-display mt-2 text-3xl text-white">Onde o clube vive</h2>
            <ul className="mt-5 space-y-4">
              {clubsGrounds.map((item) => (
                <li key={item.name}>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">Semana</p>
          <h2 className="font-display mt-2 text-3xl text-white">Rotina do clube</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {clubsWeek.map((item) => (
              <article key={item.day} className="rounded-3xl border border-line bg-panel-2 p-5">
                <p className="text-sm font-bold text-pitch">{item.day}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.plan}</p>
              </article>
            ))}
          </div>
        </section>

        <article className="mt-14 rounded-3xl border border-pitch/40 bg-panel p-6 md:p-8">
          <p className="text-xs tracking-[0.22em] text-pitch uppercase">Próximo apito</p>
          <h2 className="font-display mt-2 text-3xl text-white">A liga está na Central de Campeonatos</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Cadastro de time e tabela não moram aqui. Aqui é o vestiário: função, call e Grounds.
          </p>
          <Link href="/campeonatos" className="mt-6 inline-block rounded-full bg-pitch px-5 py-2.5 text-sm font-bold text-black">
            Ir aos campeonatos
          </Link>
        </article>
      </section>
    </div>
  );
}
