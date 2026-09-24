"use server";

import { redirect } from "next/navigation";
import {
  authenticate,
  clearSession,
  createAccount,
  findAccountByEmail,
  setSession,
} from "@/lib/auth";

export type AuthState = { error?: string };

const platforms = ["PlayStation 5", "Xbox Series", "PC", "Nintendo Switch 2", "PlayStation 4", "Xbox One"] as const;

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export async function registerAccount(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  const platform = String(formData.get("platform") ?? "").trim() || null;
  const gamertag = String(formData.get("gamertag") ?? "").trim() || null;

  if (name.length < 2) return { error: "Digite seu nome." };
  if (!email.includes("@")) return { error: "Digite um e-mail válido." };
  if (password.length < 6) return { error: "A senha precisa ter pelo menos 6 caracteres." };
  if (password !== confirm) return { error: "As senhas não coincidem." };
  if (platform && !platforms.includes(platform as (typeof platforms)[number])) {
    return { error: "Escolha uma plataforma válida." };
  }

  const existing = await findAccountByEmail(email);
  if (existing) return { error: "Esse e-mail já tem conta. Entre com a senha." };

  const account = await createAccount({ name, email, password, platform, gamertag });
  await setSession(account.id);
  redirect("/conta");
}

export async function loginAccount(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "");

  if (!email.includes("@")) return { error: "Digite um e-mail válido." };
  if (!password) return { error: "Digite a senha." };

  const account = await authenticate(email, password);
  if (!account) return { error: "E-mail ou senha incorretos." };

  await setSession(account.id);
  redirect("/conta");
}

export async function logoutAccount() {
  await clearSession();
  redirect("/");
}
