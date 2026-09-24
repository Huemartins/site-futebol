import Image from "next/image";
import type { ReactNode } from "react";
import { FutzoneSlash } from "@/components/futzone-logo";
import {
  ClubCrest,
  DualSense,
  EsportsMonitor,
  Football,
  GameBox,
  Medal,
  Megaphone,
  Newspaper,
  Playbook,
  StadiumBowl,
  Trophy,
  VsBadge,
  Whiteboard,
} from "@/components/ps-art";

export type PitchKit =
  | "home"
  | "news"
  | "ea"
  | "clubs"
  | "esports"
  | "guides"
  | "tactics"
  | "compare"
  | "cups";

export function PitchHero({
  kit,
  kicker,
  title,
  children,
}: {
  kit: PitchKit;
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[46vh] overflow-hidden bg-black">
      <Image
        src="/hero-futebol-virtual.png"
        alt=""
        fill
        priority
        className="object-cover object-[center_25%] opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f14] via-[#0b0f14]/80 to-[#0b0f14]/40" />
      <FutzoneSlash className="absolute -left-10 top-10 w-64 rotate-[-10deg] opacity-60" />
      <KitArt kit={kit} />
      <div className="relative z-10 mx-auto flex min-h-[46vh] max-w-7xl flex-col justify-end px-4 py-12 md:px-6">
        <p className="text-xs font-semibold tracking-[0.32em] text-pitch uppercase">{kicker}</p>
        <h1 className="font-display mt-3 max-w-3xl text-5xl uppercase leading-[0.9] text-white md:text-7xl">{title}</h1>
        {children ? <div className="mt-4 max-w-2xl text-lg text-white/80">{children}</div> : null}
      </div>
    </section>
  );
}

function KitArt({ kit }: { kit: PitchKit }) {
  if (kit === "news") {
    return (
      <>
        <Newspaper className="absolute right-2 top-6 w-52 drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] md:right-8 md:w-72 lg:w-80" />
        <Newspaper className="absolute left-[44%] top-8 hidden w-28 -rotate-12 opacity-40 lg:block" />
      </>
    );
  }
  if (kit === "ea") {
    return (
      <>
        <GameBox className="absolute right-6 top-4 w-36 drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] md:right-10 md:w-44" />
        <DualSense className="absolute right-36 bottom-4 hidden w-40 opacity-70 lg:block" gid="ea-pad" />
      </>
    );
  }
  if (kit === "clubs") {
    return (
      <>
        <ClubCrest className="absolute right-6 top-6 w-36 drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] md:right-10 md:w-44" />
        <Megaphone className="absolute right-40 bottom-6 hidden w-36 opacity-90 lg:block" />
      </>
    );
  }
  if (kit === "esports") {
    return (
      <>
        <EsportsMonitor className="absolute right-4 top-6 w-52 drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] md:right-8 md:w-64" />
        <Trophy className="absolute right-[22%] bottom-8 hidden w-20 opacity-80 lg:block" />
      </>
    );
  }
  if (kit === "guides") {
    return (
      <>
        <Playbook className="absolute right-4 top-8 w-52 drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] md:right-8 md:w-64" />
        <DualSense className="absolute right-8 bottom-4 hidden w-36 opacity-50 lg:block" gid="guides-pad" />
      </>
    );
  }
  if (kit === "tactics") {
    return (
      <>
        <Whiteboard className="absolute right-4 top-6 w-52 drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] md:right-8 md:w-72" />
      </>
    );
  }
  if (kit === "compare") {
    return (
      <>
        <VsBadge className="absolute right-4 top-10 w-52 drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] md:right-10 md:w-64" />
      </>
    );
  }
  if (kit === "cups") {
    return (
      <>
        <Medal className="absolute right-8 top-6 w-28 drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] md:w-36" />
        <Trophy className="absolute right-36 bottom-8 hidden w-24 opacity-90 lg:block" />
      </>
    );
  }
  return (
    <>
      <StadiumBowl className="absolute right-4 bottom-6 w-64 opacity-70 md:w-80" />
      <Football className="absolute right-16 top-10 w-20 opacity-80" gid="home-ball" />
    </>
  );
}
