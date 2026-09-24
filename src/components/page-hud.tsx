import type { ReactNode } from "react";
import { DualSense, FcBadge, Football, FaceButtons } from "@/components/ps-art";

export function PageHud({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <FaceButtons className="h-8 w-8" />
          <p className="text-xs tracking-[0.28em] text-pitch uppercase">{kicker}</p>
        </div>
        <h1 className="font-display mt-3 text-5xl text-white">{title}</h1>
        {children ? <div className="mt-4 max-w-2xl text-muted">{children}</div> : null}
      </div>
      <div className="flex items-center gap-3">
        <FcBadge className="w-14" overall="27" />
        <Football className="w-12" gid={`page-ball-${kicker}`} />
        <DualSense className="hidden w-28 md:block" gid={`page-pad-${kicker}`} />
      </div>
    </div>
  );
}
