import Link from "next/link";
import { CoverStars } from "@/components/cover-stars";
import { PitchHero } from "@/components/pitch-hero";
import { GameBox } from "@/components/ps-art";
import { PriceMatrix } from "@/components/price-matrix";
import { careerDiff, careerHub, careerTracks, editions, fc27, modes } from "@/lib/fc27";
import { fc26Vs27 } from "@/lib/news";

export const metadata = {
  title: "EA Sports FC 27",
  description: "O ciclo 27: o que muda, preços, modos e edições.",
};

export default function EaFcPage() {
  return (
    <article>
      <PitchHero kit="ea" kicker="EA Sports FC 27" title="O jogo. O ciclo. O que muda.">
        Aqui é só EA FC: lançamento, loja, edição, modo e o placar 26 × 27. Clubs, tática e comparador ficam nas abas deles.
      </PitchHero>

      <div className="relative mx-auto max-w-5xl px-4 py-10 md:px-6">
        <GameBox className="pointer-events-none absolute -right-4 top-2 hidden w-28 opacity-15 lg:block" />
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-line bg-panel p-5">
            <p className="text-sm text-muted">Early access</p>
            <p className="font-display mt-1 text-2xl text-white">{fc27.earlyAccess}</p>
            <p className="mt-2 text-sm text-muted">Ultimate e Ultimate Plus · 7 dias</p>
          </div>
          <div className="rounded-3xl border border-line bg-panel p-5">
            <p className="text-sm text-muted">Lançamento</p>
            <p className="font-display mt-1 text-2xl text-pitch">{fc27.release}</p>
            <p className="mt-2 text-sm text-muted">Standard, lojas e Lite 16:00 UTC</p>
          </div>
          <div className="rounded-3xl border border-line bg-panel p-5">
            <p className="text-sm text-muted">Ultimate Plus</p>
            <p className="font-display mt-1 text-2xl text-white">encerrou 31 ago</p>
            <p className="mt-2 text-sm text-muted">Early bird. Não volta.</p>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">FC 26 × FC 27</p>
          <h2 className="font-display mt-2 text-4xl text-white">O que o 26 não faz mais</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/5 text-muted">
                <tr>
                  <th className="px-4 py-3">Área</th>
                  <th className="px-4 py-3">FC 26</th>
                  <th className="px-4 py-3 text-pitch">FC 27</th>
                </tr>
              </thead>
              <tbody>
                {fc26Vs27.map((row) => (
                  <tr key={row.area} className="border-t border-line align-top">
                    <td className="px-4 py-3 font-semibold text-white">{row.area}</td>
                    <td className="px-4 py-3 text-muted">{row.fc26}</td>
                    <td className="px-4 py-3 text-white">{row.fc27}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CoverStars />

        <section className="mt-14 rounded-3xl border border-pitch/40 bg-panel p-6 md:p-8">
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">Football Ultimate Team</p>
          <h2 className="font-display mt-2 text-4xl text-white">Sim. O 27 tem FUT.</h2>
          <p className="mt-4 max-w-3xl text-muted">
            A EA confirmou: Ultimate Team segue no disco. Champions, Rivals, pack e mercado continuam. O ciclo novo é
            a Galeria — o card que você vendeu ainda constrói o clube — holográfico, DME simplificado e Evolução ramificada.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            <li>• Galeria: mais de 100 conjuntos no launch. Vendeu ou mandou no DME? O registro fica.</li>
            <li>• Holográfico: visual e raridade. No campo, GER igual ao card normal.</li>
            <li>• DME simplificado soma pontuação. O puzzle tradicional não some.</li>
            <li>• Central 3D da Galeria só em PS5, Series, PC e Switch 2. Last-gen joga FUT sem esse hub.</li>
          </ul>
          <Link
            href="/noticias/ultimate-team-fc-27"
            className="mt-6 inline-flex rounded-full bg-pitch px-5 py-2.5 text-sm font-extrabold text-black uppercase"
          >
            Ler a matéria →
          </Link>
        </section>

        <section className="mt-14">
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">{careerHub.kicker}</p>
          <h2 className="font-display mt-2 text-4xl text-white">{careerHub.title}</h2>
          <p className="mt-4 max-w-3xl text-muted">{careerHub.lead}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {careerTracks.map((track) => (
              <article key={track.slug} className="rounded-3xl border border-line bg-panel p-6">
                <p className="text-xs tracking-[0.2em] text-pitch uppercase">{track.also}</p>
                <h3 className="font-display mt-2 text-2xl text-white">{track.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white">{track.who}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{track.explore}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {track.changes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/5 text-muted">
                <tr>
                  <th className="px-4 py-3">Diferença</th>
                  <th className="px-4 py-3">Treinador</th>
                  <th className="px-4 py-3 text-pitch">Atleta</th>
                </tr>
              </thead>
              <tbody>
                {careerDiff.map((row) => (
                  <tr key={row.topic} className="border-t border-line align-top">
                    <td className="px-4 py-3 font-semibold text-white">{row.topic}</td>
                    <td className="px-4 py-3 text-muted">{row.manager}</td>
                    <td className="px-4 py-3 text-white">{row.player}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-4xl text-white">Preço em cada loja</h2>
          <p className="mt-2 text-sm text-muted">{fc27.disclaimer}</p>
          <div className="mt-6">
            <PriceMatrix />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-4xl text-white">O que vem em cada caixa</h2>
          <div className="mt-6 grid gap-4">
            {editions.map((edition) => (
              <div key={edition.name} className="rounded-3xl border border-line bg-panel p-6">
                <h3 className="font-display text-2xl text-white">{edition.name}</h3>
                <p className="mt-1 text-sm text-muted">{edition.when}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {edition.prices.map((price) => (
                    <li key={price.label} className="flex justify-between gap-3 text-muted">
                      <span>{price.label}</span>
                      <span className="font-display text-base text-pitch">{price.value}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {edition.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-4xl text-white">Modos do disco</h2>
          <div className="mt-6 space-y-4">
            {modes.map((mode) => (
              <div key={mode.slug} className="rounded-3xl border border-line bg-panel p-6">
                <h3 className="font-display text-2xl text-white">{mode.name}</h3>
                <p className="mt-2 text-muted">{mode.pitch}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
