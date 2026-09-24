import Link from "next/link";
import { PageHud } from "@/components/page-hud";
import { guides } from "@/lib/guides";

export const metadata = {
  title: "Builds e arquétipos",
  description: "Builds e arquétipos de virtual pro no EA FC 27.",
};

export default function BuildsPage() {
  const items = guides.filter((guide) => guide.hub === "builds");
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <PageHud kicker="Builds" title="O virtual pro">
        Ponto, arquétipo e posição. Sem formação de time e sem call de Discord.
      </PageHud>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {[
          { role: "GOL / ZAG", tip: "Saída limpa e linha alta só com contain combinado." },
          { role: "VOL / MC", tip: "Âncora não passa da intermediária sem a bola." },
          { role: "MEI / 10", tip: "Recebe de costas, solta de primeira, invade se o 9 abre." },
          { role: "ATA / PONTA", tip: "Ocupa zagueiro, disputa ou abre para o 8." },
        ].map((item) => (
          <article key={item.role} className="rounded-2xl border border-line bg-panel p-4">
            <p className="text-xs font-bold tracking-wide text-pitch uppercase">{item.role}</p>
            <p className="mt-2 text-sm text-muted">{item.tip}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((guide) => (
          <Link key={guide.slug} href={`/guias/${guide.slug}`} className="hud-card border border-line bg-panel p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-pitch">{guide.tag}</p>
            <h2 className="font-display mt-2 text-2xl text-white">{guide.title}</h2>
            <p className="mt-2 text-sm text-muted">{guide.excerpt}</p>
          </Link>
        ))}
      </div>
      <Link href="/pro-clubs" className="mt-8 inline-block text-sm font-semibold text-pitch">
        Hub Pro Clubs →
      </Link>
    </section>
  );
}
