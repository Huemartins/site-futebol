import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-6xl text-ps">404</p>
      <h1 className="font-display mt-4 text-4xl text-white">Fora de jogo</h1>
      <p className="mt-3 text-muted">Essa página não está no campeonato.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-pitch px-5 py-2 text-sm font-semibold text-black">
        Voltar à home
      </Link>
    </section>
  );
}
