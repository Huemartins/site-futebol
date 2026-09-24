import Image from "next/image";
import Link from "next/link";
import { coverStars } from "@/lib/fc27";

export function CoverStars() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
      <p className="text-xs tracking-[0.25em] text-pitch uppercase">Capa do ciclo</p>
      <h2 className="font-display mt-2 text-4xl text-white md:text-5xl">Mbappé e Bellingham. Sem filtro de marketing.</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {coverStars.map((star) => (
          <Link
            key={star.slug}
            href="/comparar"
            className="hud-card group relative overflow-hidden border border-pitch/35 bg-black"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={star.image}
                alt={`${star.name} no EA FC 27`}
                fill
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute left-4 top-4 clip-hex bg-pitch px-3 py-3 text-center text-black">
                <p className="font-display text-4xl leading-none">{star.overall}</p>
                <p className="text-[10px] font-bold tracking-widest">{star.position}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-5xl text-white">{star.shortName}</p>
                <p className="mt-1 text-sm text-pitch">
                  {star.club} · {star.number} · {star.archetype}
                </p>
                <ul className="mt-4 grid grid-cols-6 gap-1 text-center text-[10px]">
                  {[
                    ["RIT", star.pace],
                    ["CHU", star.shooting],
                    ["PAS", star.passing],
                    ["DRI", star.dribbling],
                    ["DEF", star.defending],
                    ["FÍS", star.physical],
                  ].map(([label, value]) => (
                    <li key={String(label)} className="bg-black/55 px-1 py-1.5">
                      <p className="text-muted">{label}</p>
                      <p className="font-display text-lg text-white">{value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
