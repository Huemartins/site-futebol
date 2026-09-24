import Link from "next/link";
import { redirect } from "next/navigation";
import { logoutAccount } from "@/app/actions/auth";
import { FutzoneLogo } from "@/components/futzone-logo";
import { getSessionUser } from "@/lib/auth";

export const metadata = {
  title: "Minha conta",
  description: "Conta FUTZONE.",
};

export default async function ContaPage() {
  const user = await getSessionUser();
  if (!user) redirect("/entrar");

  return (
    <section className="mx-auto max-w-xl px-4 py-12 md:px-6">
      <FutzoneLogo />
      <p className="mt-6 text-xs tracking-[0.28em] text-pitch uppercase">Minha conta</p>
      <h1 className="font-display mt-2 text-4xl text-white">Olá, {user.name}</h1>
      <div className="mt-8 space-y-3 rounded-3xl border border-line bg-panel p-6 text-sm">
        <p>
          <span className="text-muted">E-mail</span>
          <span className="mt-1 block text-white">{user.email}</span>
        </p>
        {user.platform ? (
          <p>
            <span className="text-muted">Plataforma</span>
            <span className="mt-1 block text-white">{user.platform}</span>
          </p>
        ) : null}
        {user.gamertag ? (
          <p>
            <span className="text-muted">PSN / gamertag</span>
            <span className="mt-1 block text-white">{user.gamertag}</span>
          </p>
        ) : null}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/times/cadastrar" className="rounded-full bg-pitch px-5 py-2.5 text-sm font-bold text-black">
          Cadastrar time
        </Link>
        <Link href="/campeonatos" className="rounded-full border border-line px-5 py-2.5 text-sm text-white">
          Campeonatos
        </Link>
        <form action={logoutAccount}>
          <button type="submit" className="rounded-full border border-line px-5 py-2.5 text-sm text-muted hover:text-white">
            Sair
          </button>
        </form>
      </div>
    </section>
  );
}
