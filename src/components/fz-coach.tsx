"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  askCoach,
  coachStarters,
  emptyMemory,
  type CoachLink,
  type CoachMemory,
  type CoachReply,
} from "@/lib/coach";
import { Headset } from "@/components/ps-art";

type ChatMessage = {
  id: number;
  from: "user" | "zona";
  text: string;
  links?: CoachLink[];
  suggestions?: string[];
};

const hello: ChatMessage = {
  id: 0,
  from: "zona",
  text: "E aí. Tô no canto da FUTZONE. Manda como se fosse Zap — preço, Clubs, Carreira, o que for.",
  suggestions: coachStarters.slice(0, 4),
};

const helloTwo: ChatMessage = {
  id: 1,
  from: "zona",
  text: "Qual teu nome? Ou já solta a dúvida.",
};

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export function FzCoach() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([hello, helloTwo]);
  const scroller = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const nextId = useRef(2);
  const memory = useRef<CoachMemory>(emptyMemory);
  const talk = useRef(0);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, pending, open]);

  useEffect(() => {
    if (!open) return;
    field.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function speak(reply: CoachReply, token: number) {
    for (let index = 0; index < reply.bubbles.length; index += 1) {
      if (talk.current !== token) return;
      const bubble = reply.bubbles[index];
      const last = index === reply.bubbles.length - 1;
      await wait(320 + Math.min(bubble.length * 11, 780));
      if (talk.current !== token) return;
      setMessages((current) => [
        ...current,
        {
          id: nextId.current++,
          from: "zona",
          text: bubble,
          links: last ? reply.links : undefined,
          suggestions: last ? reply.suggestions : undefined,
        },
      ]);
    }
    if (talk.current === token) setPending(false);
  }

  function ask(question: string) {
    const text = question.trim();
    if (!text || pending) return;
    setInput("");
    setMessages((current) => [...current, { id: nextId.current++, from: "user", text }]);
    setPending(true);
    const reply = askCoach(text, memory.current);
    memory.current = reply.memory;
    const token = ++talk.current;
    void speak(reply, token);
  }

  function resetChat() {
    talk.current += 1;
    memory.current = emptyMemory;
    nextId.current = 2;
    setPending(false);
    setMessages([hello, helloTwo]);
    field.current?.focus();
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {open ? (
        <section
          className="pointer-events-auto flex h-[min(78vh,620px)] w-[min(calc(100vw-2rem),400px)] flex-col overflow-hidden rounded-3xl border border-pitch/50 bg-[#0b0f14]/96 shadow-[0_0_40px_rgba(57,255,20,0.18)] backdrop-blur-xl"
          role="dialog"
          aria-label="Zona, bate-papo FUTZONE"
        >
          <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="relative">
                <Headset className="w-10" />
                <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-pitch ring-2 ring-[#0b0f14]" />
              </span>
              <div>
                <p className="font-display text-sm font-extrabold tracking-wide text-white uppercase">Zona</p>
                <p className="text-[11px] tracking-[0.16em] text-pitch uppercase">online · bate-papo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-full border border-line px-2.5 py-1 text-[10px] tracking-wide text-muted uppercase hover:text-white"
                onClick={resetChat}
              >
                Limpar
              </button>
              <button
                type="button"
                className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Fechar bate-papo"
              >
                ×
              </button>
            </div>
          </header>

          <div ref={scroller} className="flex-1 space-y-2.5 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={message.from === "user" ? "flex justify-end" : "flex items-end gap-2"}>
                {message.from === "zona" ? (
                  <span className="mb-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-pitch/15 text-[10px] font-extrabold text-pitch">
                    FZ
                  </span>
                ) : null}
                <div
                  className={
                    message.from === "user"
                      ? "max-w-[82%] rounded-2xl rounded-br-sm bg-pitch px-3.5 py-2.5 text-sm font-medium text-black"
                      : "max-w-[82%] rounded-2xl rounded-bl-sm border border-line bg-panel px-3.5 py-2.5 text-sm leading-6 text-white"
                  }
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  {message.links && message.links.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="rounded-full border border-pitch/50 px-2.5 py-1 text-[11px] font-bold tracking-wide text-pitch uppercase"
                          onClick={() => setOpen(false)}
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  ) : null}
                  {message.suggestions && message.suggestions.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {message.suggestions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className="rounded-full border border-line px-2.5 py-1 text-left text-[11px] text-muted hover:border-pitch hover:text-pitch"
                          onClick={() => ask(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
            {pending ? (
              <div className="flex items-end gap-2">
                <span className="mb-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-pitch/15 text-[10px] font-extrabold text-pitch">
                  FZ
                </span>
                <div className="rounded-2xl rounded-bl-sm border border-line bg-panel px-4 py-3">
                  <span className="zona-dots" aria-label="Zona está digitando">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <form
            className="border-t border-line p-3"
            onSubmit={(event) => {
              event.preventDefault();
              ask(input);
            }}
          >
            <label className="sr-only" htmlFor="zona-ask">
              Mensagem para a Zona
            </label>
            <div className="flex gap-2">
              <input
                id="zona-ask"
                ref={field}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escreve aí, tipo conversa…"
                className="h-11 flex-1 rounded-full border border-line bg-black/40 px-4 text-sm text-white outline-none placeholder:text-muted focus:border-pitch"
                maxLength={280}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={pending || !input.trim()}
                className="h-11 rounded-full bg-pitch px-4 text-sm font-extrabold text-black uppercase disabled:opacity-40"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="pointer-events-auto rounded-full border border-pitch bg-pitch px-5 py-3 text-sm font-extrabold tracking-wide text-black uppercase shadow-[0_0_28px_rgba(57,255,20,0.35)]"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Fechar bate-papo da Zona" : "Precisa de ajuda"}
      >
        {open ? "Fechar" : "Precisa de ajuda"}
      </button>
    </div>
  );
}
