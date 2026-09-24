"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FutzoneLogo } from "@/components/futzone-logo";
import { nav, platformNav } from "@/lib/site";

export function SiteHeader({ accountName }: { accountName?: string | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[#0b0f14]/94 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 md:px-6">
        <Link href="/" aria-label="FUTZONE início">
          <FutzoneLogo stacked />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          <Link
            href="/"
            className={`px-2.5 py-1.5 text-[13px] font-semibold tracking-wide uppercase transition ${
              pathname === "/" ? "border-b-2 border-pitch text-white" : "text-muted hover:text-white"
            }`}
          >
            Home
          </Link>
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1.5 text-[13px] font-semibold tracking-wide uppercase transition ${
                  active ? "border-b-2 border-pitch text-white" : "text-muted hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/comparar"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-pitch md:inline-flex"
            aria-label="Buscar"
          >
            ⌕
          </Link>
          <Link
            href={accountName ? "/conta" : "/entrar"}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-white md:inline-flex"
            aria-label="Conta"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="3.2" />
              <path d="M5 19c1.4-3.2 4-5 7-5s5.6 1.8 7 5" />
            </svg>
          </Link>
          {accountName ? (
            <Link
              href="/conta"
              className="hidden rounded-full bg-pitch px-4 py-2 text-sm font-extrabold tracking-wide text-black uppercase md:inline-flex"
            >
              {accountName}
            </Link>
          ) : (
            <Link
              href="/entrar"
              className="hidden rounded-full bg-pitch px-4 py-2 text-sm font-extrabold tracking-wide text-black uppercase md:inline-flex"
            >
              Entrar
            </Link>
          )}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-white xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-panel px-4 py-3 xl:hidden">
          <div className="flex flex-col gap-1">
            <Link href="/" className="rounded-lg px-3 py-2 text-sm text-white" onClick={() => setOpen(false)}>
              Home
            </Link>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {platformNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-pitch hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={accountName ? "/conta" : "/entrar"}
              className="mt-2 rounded-full bg-pitch px-4 py-2 text-center text-sm font-extrabold text-black uppercase"
              onClick={() => setOpen(false)}
            >
              {accountName ? "Minha conta" : "Entrar"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
