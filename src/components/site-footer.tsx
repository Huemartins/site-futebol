import Link from "next/link";
import { FutzoneLogo } from "@/components/futzone-logo";
import { fc27 } from "@/lib/fc27";
import { platformNav, site } from "@/lib/site";

const footerNav = [
  { href: "/noticias", label: "Notícias" },
  { href: "/ea-fc", label: "EA FC 27" },
  { href: "/pro-clubs", label: "Pro Clubs" },
  { href: "/esports", label: "eSports" },
  { href: "/taticas", label: "Táticas" },
  { href: "/guias", label: "Guias" },
  { href: "/builds", label: "Builds" },
  { href: "/comparar", label: "Comparador" },
  { href: "/campeonatos", label: "Campeonatos" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-6 overflow-hidden border-t border-line bg-black">
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <FutzoneLogo markClassName="h-14 w-14" stacked />
            <p className="mt-5 max-w-sm font-display text-2xl font-extrabold italic text-white">
              {site.claim}
            </p>
            <p className="mt-2 text-sm italic text-pitch">{site.tagline}</p>
            <p className="mt-4 text-xs leading-5 text-muted">
              Early access {fc27.earlyAccess}
              <br />
              Launch {fc27.release}
            </p>
            <p className="mt-3 text-xs text-muted">Dúvida? O botão verde no canto chama a Zona.</p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-pitch uppercase">Conteúdo</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted hover:text-pitch">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-pitch uppercase">Plataforma</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {platformNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted hover:text-pitch">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-pitch uppercase">Comunidade</p>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>
                <Link href="/entrar" className="text-muted hover:text-pitch">Entrar</Link>
              </li>
              <li>
                <Link href="/cadastrar" className="text-muted hover:text-pitch">Criar conta</Link>
              </li>
              <li>
                <Link href="/conta" className="text-muted hover:text-pitch">Minha conta</Link>
              </li>
              <li>
                <Link href="/times/cadastrar" className="text-muted hover:text-pitch">Cadastrar time</Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-5 text-muted">
              {site.pillars}
              <br />
              Portal + liga + guias para quem vive o futebol virtual.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
