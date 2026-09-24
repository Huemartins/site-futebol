"use client";

import Link from "next/link";
import { useActionState } from "react";
import {
  loginAccount,
  registerAccount,
  type AuthState,
} from "@/app/actions/auth";

const inputClass =
  "mt-1 w-full rounded-xl border border-line bg-black/40 px-3 py-2.5 text-white outline-none focus:border-pitch";

const platforms = [
  "PlayStation 5",
  "Xbox Series",
  "PC",
  "Nintendo Switch 2",
  "PlayStation 4",
  "Xbox One",
];

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAccount, {} as AuthState);

  return (
    <form action={action} className="space-y-4 rounded-3xl border border-line bg-panel p-6">
      <label className="block text-sm">
        <span className="text-muted">E-mail</span>
        <input name="email" type="email" autoComplete="email" required className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="text-muted">Senha</span>
        <input name="password" type="password" autoComplete="current-password" required className={inputClass} />
      </label>
      {state.error ? <p className="text-sm text-red-400">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-pitch px-6 py-3 text-sm font-bold text-black disabled:opacity-60"
      >
        {pending ? "Entrando..." : "Entrar"}
      </button>
      <p className="text-center text-sm text-muted">
        Ainda não tem conta?{" "}
        <Link href="/cadastrar" className="font-semibold text-pitch">
          Criar conta
        </Link>
      </p>
    </form>
  );
}

export function RegisterForm() {
  const [state, action, pending] = useActionState(registerAccount, {} as AuthState);

  return (
    <form action={action} className="space-y-4 rounded-3xl border border-line bg-panel p-6">
      <label className="block text-sm">
        <span className="text-muted">Nome</span>
        <input name="name" autoComplete="name" required minLength={2} className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="text-muted">E-mail</span>
        <input name="email" type="email" autoComplete="email" required className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="text-muted">Senha</span>
        <input name="password" type="password" autoComplete="new-password" required minLength={6} className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="text-muted">Confirmar senha</span>
        <input name="confirm" type="password" autoComplete="new-password" required minLength={6} className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="text-muted">Plataforma</span>
        <select name="platform" className={inputClass} defaultValue="PlayStation 5">
          {platforms.map((platform) => (
            <option key={platform}>{platform}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="text-muted">PSN / gamertag (opcional)</span>
        <input name="gamertag" autoComplete="username" className={inputClass} />
      </label>
      {state.error ? <p className="text-sm text-red-400">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-pitch px-6 py-3 text-sm font-bold text-black disabled:opacity-60"
      >
        {pending ? "Criando conta..." : "Criar conta"}
      </button>
      <p className="text-center text-sm text-muted">
        Já tem conta?{" "}
        <Link href="/entrar" className="font-semibold text-pitch">
          Entrar
        </Link>
      </p>
    </form>
  );
}
