import {
  DualSense,
  FaceButtons,
  FcBadge,
  Football,
  Jersey,
  PitchMark,
  StadiumLights,
  Trophy,
  XboxPad,
} from "@/components/ps-art";

const ticker =
  "EA SPORTS FC 27  ·  MBAPPÉ  ·  BELLINGHAM  ·  THE GROUNDS  ·  ULTIMATE TEAM  ·  CLUBS  ·  CARREIRA  ·  KICK-OFF  ·  DUALSENSE  ·  PRO CLUBS  ·  ";

export function HudLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="stadium-wash" />
      <div className="scanlines" />
      <Football className="absolute -left-10 top-28 w-40 opacity-20" gid="hud-ball-1" />
      <Football className="absolute right-6 top-[42%] w-24 opacity-25" gid="hud-ball-2" />
      <DualSense className="absolute -right-16 bottom-10 w-72 opacity-20" gid="hud-pad-1" />
      <XboxPad className="absolute -left-20 bottom-24 w-64 opacity-15" gid="hud-xpad-1" />
      <Jersey className="absolute right-[18%] top-24 w-20 opacity-20" />
      <Trophy className="absolute left-[12%] top-[58%] w-16 opacity-20" />
      <FcBadge className="absolute right-8 bottom-28 w-16 opacity-30" />
      <PitchMark className="absolute left-[30%] bottom-6 w-72 opacity-15" />
      <FaceButtons className="absolute left-6 top-[38%] w-14 opacity-25" />
      <StadiumLights className="absolute left-1/2 top-16 w-[480px] -translate-x-1/2 opacity-30" />
    </div>
  );
}

export function Ticker() {
  return (
    <div className="relative z-30 overflow-hidden border-b border-line bg-black/80">
      <div className="ticker font-display tracking-[0.28em] text-[11px] text-pitch">
        <span>{ticker.repeat(8)}</span>
      </div>
    </div>
  );
}
