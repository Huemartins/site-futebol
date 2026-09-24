import { PlayerRegisterForm } from "@/components/player-register-form";
import { PageHud } from "@/components/page-hud";
import { getCatalog } from "@/lib/hub";

export const metadata = {
  title: "Cadastrar jogador",
  description: "Cadastro público de jogador em um time FUTZONE.",
};

export default async function CadastrarJogadorPage() {
  const catalog = await getCatalog();
  return (
    <section className="mx-auto max-w-xl px-4 py-12 md:px-6">
      <PageHud kicker="Fase 2 · Plataforma" title="Cadastro de jogadores">
        Entra no elenco de um time já cadastrado. Sem conta.
      </PageHud>
      <PlayerRegisterForm teams={catalog.teams} />
    </section>
  );
}
