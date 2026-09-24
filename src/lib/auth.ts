import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { readLocalStore, writeLocalStore } from "@/lib/local-store";
import type { Account, SessionUser } from "@/lib/types";

const COOKIE = "fz_session";

function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const next = scryptSync(password, salt, 64);
  const current = Buffer.from(hash, "hex");
  if (current.length !== next.length) return false;
  return timingSafeEqual(current, next);
}

export function toSessionUser(account: Account): SessionUser {
  return {
    id: account.id,
    name: account.name,
    email: account.email,
    platform: account.platform,
    gamertag: account.gamertag,
  };
}

export async function findAccountByEmail(email: string) {
  const store = await readLocalStore();
  return store.users.find((user) => user.email === email) ?? null;
}

export async function findAccountById(id: string) {
  const store = await readLocalStore();
  return store.users.find((user) => user.id === id) ?? null;
}

export async function createAccount(input: {
  name: string;
  email: string;
  password: string;
  platform: string | null;
  gamertag: string | null;
}) {
  const store = await readLocalStore();
  const account: Account = {
    id: randomBytes(12).toString("hex"),
    name: input.name,
    email: input.email,
    passwordHash: hashPassword(input.password),
    platform: input.platform,
    gamertag: input.gamertag,
    createdAt: new Date().toISOString(),
  };
  store.users.push(account);
  await writeLocalStore(store);
  return account;
}

export async function authenticate(email: string, password: string) {
  const account = await findAccountByEmail(email);
  if (!account || !verifyPassword(password, account.passwordHash)) return null;
  return account;
}

export async function setSession(userId: string) {
  const jar = await cookies();
  jar.set(COOKIE, userId, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const jar = await cookies();
  const id = jar.get(COOKIE)?.value;
  if (!id) return null;
  const account = await findAccountById(id);
  return account ? toSessionUser(account) : null;
}
