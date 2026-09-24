import Link from "next/link";
import { platformNav } from "@/lib/site";

export function PlatformStrip() {
  return (
    <div className="relative z-30 border-b border-line bg-black/55">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-2 md:px-6">
        {platformNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hud-card px-2.5 py-1 text-[11px] tracking-wide text-pitch hover:bg-white/10"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
