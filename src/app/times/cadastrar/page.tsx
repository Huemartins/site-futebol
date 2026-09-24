import { TeamRegisterForm } from "@/components/team-register-form";
import { listChampionships } from "@/lib/hub";

export const metadata = {
  title: "Cadastrar time",
  description: "Cadastro público de time FUTZONE, sem conta.",
};

export default async function CadastrarTimePage() {
  const championships = await listChampionships();

  return (
    <section className="mx-auto max-w-xl px-4 py-12 md:px-6">
      <p className="text-xs tracking-[0.28em] text-ps uppercase">Sem login</p>
      <h1 className="font-display mt-3 text-5xl text-white">Cadastrar time</h1>
      <p className="mt-4 text-muted">
        Nome, Discord, campeonato e elenco. No MVP não há edição depois do envio.
      </p>
      <div className="mt-8">
        <TeamRegisterForm championships={championships} />
      </div>
    </section>
  );
}
