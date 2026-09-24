import { CompareArena } from "@/components/compare-arena";
import { PitchHero } from "@/components/pitch-hero";
import { VsBadge } from "@/components/ps-art";
import { playerLinks } from "@/lib/players";

export const metadata = {
  title: "Comparador",
  description: "Jogador real × carta EA FC, lado a lado.",
};

export default function CompararPage() {
  return (
    <div>
      <PitchHero kit="compare" kicker="Comparador" title="Real × carta">
        Duas camisas. Um radar. Overall de marketing de um lado, o que o campo faz do outro. Sem tática de clube, sem preço de loja.
      </PitchHero>
      <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
        <VsBadge className="pointer-events-none absolute -right-2 top-0 hidden w-40 opacity-15 lg:block" />
        <CompareArena players={playerLinks} initialSlug="mbappe" />
      </section>
    </div>
  );
}
