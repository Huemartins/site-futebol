type ArtProps = { className?: string; gid?: string };

export function DualSense({ className = "", gid = "pad" }: ArtProps) {
  return (
    <svg viewBox="0 0 420 240" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id={`${gid}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4f7ff" />
          <stop offset="55%" stopColor="#b7c0d8" />
          <stop offset="100%" stopColor="#6f7a94" />
        </linearGradient>
      </defs>
      <path
        d="M78 86c18-42 52-58 132-58h0c80 0 114 16 132 58 22 50 48 92 48 118 0 28-22 36-46 28-18-6-38-28-52-52H128c-14 24-34 46-52 52-24 8-46 0-46-28 0-26 26-68 48-118Z"
        fill={`url(#${gid}-body)`}
        stroke="#2e6bff"
        strokeWidth="3"
      />
      <rect x="168" y="78" width="84" height="46" rx="10" fill="#0B0F0D" />
      <circle cx="210" cy="101" r="11" fill="#2e6bff" />
      <circle cx="118" cy="118" r="28" fill="#1a2238" stroke="#2e6bff" />
      <circle cx="118" cy="118" r="12" fill="#8b93a7" />
      <circle cx="302" cy="118" r="28" fill="#1a2238" stroke="#39FF14" />
      <circle cx="302" cy="118" r="12" fill="#8b93a7" />
      <circle cx="302" cy="70" r="7" fill="#2e6bff" />
      <circle cx="326" cy="94" r="7" fill="#39FF14" />
      <rect x="278" y="88" width="14" height="14" rx="2" fill="#fff" />
      <polygon points="302,108 310,122 294,122" fill="#ff5a7a" />
      <rect x="96" y="64" width="22" height="8" rx="3" fill="#2e6bff" />
      <rect x="302" y="64" width="22" height="8" rx="3" fill="#39FF14" />
    </svg>
  );
}

export function Football({ className = "", gid = "ball" }: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={gid} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#d9dee8" />
          <stop offset="100%" stopColor="#8b93a6" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="86" fill={`url(#${gid})`} stroke="#39FF14" strokeWidth="4" />
      <polygon points="100,58 118,72 111,94 89,94 82,72" fill="#0B0F0D" />
      <polygon points="100,142 82,128 89,106 111,106 118,128" fill="#0B0F0D" />
      <polygon points="52,92 70,78 86,92 74,112 54,112" fill="#0B0F0D" />
      <polygon points="148,92 130,78 114,92 126,112 146,112" fill="#0B0F0D" />
    </svg>
  );
}

export function PitchMark({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" fill="none">
      <rect x="8" y="8" width="304" height="184" rx="8" stroke="#39FF14" strokeOpacity="0.7" />
      <line x1="160" y1="8" x2="160" y2="192" stroke="#39FF14" strokeOpacity="0.55" />
      <circle cx="160" cy="100" r="28" stroke="#2e6bff" />
      <circle cx="160" cy="100" r="3" fill="#39FF14" />
      <rect x="8" y="58" width="48" height="84" stroke="#39FF14" strokeOpacity="0.5" />
      <rect x="264" y="58" width="48" height="84" stroke="#39FF14" strokeOpacity="0.5" />
    </svg>
  );
}

export function Jersey({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 160 180" className={className} aria-hidden="true">
      <path
        d="M32 44 L12 58 L28 92 L28 168 H132 L132 92 L148 58 L128 44 L112 58 H48 Z"
        fill="#2e6bff"
        stroke="#39FF14"
        strokeWidth="3"
      />
      <path d="M48 58 H112 L118 28 H100 L80 44 L60 28 H42 Z" fill="#0B0F0D" />
      <text x="80" y="118" textAnchor="middle" fill="#39FF14" fontSize="42" fontFamily="Montserrat, sans-serif">
        27
      </text>
    </svg>
  );
}

export function Trophy({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden="true" fill="none">
      <path d="M28 28 H92 V52 C92 78 70 92 60 96 C50 92 28 78 28 52 Z" fill="#39FF14" />
      <path d="M28 36 H12 C12 58 28 66 36 68" stroke="#2e6bff" strokeWidth="6" />
      <path d="M92 36 H108 C108 58 92 66 84 68" stroke="#2e6bff" strokeWidth="6" />
      <rect x="52" y="96" width="16" height="18" fill="#39FF14" />
      <rect x="36" y="114" width="48" height="12" rx="2" fill="#2e6bff" />
    </svg>
  );
}

export function FcBadge({ className = "", overall = "27" }: ArtProps & { overall?: string }) {
  return (
    <svg viewBox="0 0 90 110" className={className} aria-hidden="true">
      <polygon points="45,4 86,28 86,82 45,106 4,82 4,28" fill="#0B0F0D" stroke="#39FF14" strokeWidth="3" />
      <text x="45" y="42" textAnchor="middle" fill="#39FF14" fontSize="11" fontFamily="Montserrat, sans-serif">
        EA FC
      </text>
      <text x="45" y="78" textAnchor="middle" fill="#fff" fontSize="32" fontFamily="Montserrat, sans-serif">
        {overall}
      </text>
    </svg>
  );
}

export function FaceButtons({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 88 88" className={className} aria-hidden="true">
      <circle cx="44" cy="16" r="11" fill="#2e6bff" />
      <circle cx="72" cy="44" r="11" fill="#39FF14" />
      <rect x="10" y="33" width="22" height="22" rx="3" fill="#fff" />
      <polygon points="44,60 54,78 34,78" fill="#ff5a7a" />
    </svg>
  );
}

export function XboxPad({ className = "", gid = "xpad" }: ArtProps) {
  return (
    <svg viewBox="0 0 420 220" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id={`${gid}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1f1a" />
          <stop offset="100%" stopColor="#0c100c" />
        </linearGradient>
      </defs>
      <path
        d="M70 90 C90 30 150 22 210 22 C270 22 330 30 350 90 C372 128 390 168 372 188 C350 210 318 178 300 150 H120 C102 178 70 210 48 188 C30 168 48 128 70 90 Z"
        fill={`url(#${gid}-g)`}
        stroke="#9bf00b"
        strokeWidth="3"
      />
      <circle cx="140" cy="108" r="26" stroke="#9bf00b" />
      <circle cx="280" cy="108" r="26" stroke="#2e6bff" />
      <circle cx="210" cy="78" r="10" fill="#9bf00b" />
    </svg>
  );
}

export function StadiumLights({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 400 80" className={className} aria-hidden="true" fill="none">
      <path d="M20 70 L80 18 H320 L380 70" stroke="#39FF14" strokeOpacity="0.35" />
      <circle cx="90" cy="20" r="6" fill="#2e6bff" />
      <circle cx="200" cy="14" r="7" fill="#39FF14" />
      <circle cx="310" cy="20" r="6" fill="#2e6bff" />
    </svg>
  );
}

export function Boots({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 140 90" className={className} aria-hidden="true">
      <path d="M12 58 C28 40 48 36 78 40 L118 28 C128 26 132 38 122 46 L86 62 C92 72 86 82 70 82 H28 C16 82 8 70 12 58Z" fill="#39FF14" />
      <path d="M30 70 H78" stroke="#0B0F14" strokeWidth="3" />
      <circle cx="40" cy="62" r="3" fill="#0B0F14" />
      <circle cx="54" cy="58" r="3" fill="#0B0F14" />
      <circle cx="68" cy="56" r="3" fill="#0B0F14" />
    </svg>
  );
}

export function Goal({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 220 140" className={className} aria-hidden="true" fill="none">
      <path d="M20 128 V28 H200 V128" stroke="#39FF14" strokeWidth="6" />
      <path d="M20 28 L36 18 H184 L200 28" stroke="#39FF14" strokeWidth="4" />
      {[40, 70, 100, 130, 160].map((x) => (
        <line key={x} x1={x} y1="28" x2={x} y2="128" stroke="#39FF14" strokeOpacity="0.35" />
      ))}
      {[48, 68, 88, 108].map((y) => (
        <line key={y} x1="20" y1={y} x2="200" y2={y} stroke="#39FF14" strokeOpacity="0.35" />
      ))}
    </svg>
  );
}

export function CornerFlag({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 80 140" className={className} aria-hidden="true">
      <rect x="36" y="18" width="6" height="110" fill="#E5E7EB" />
      <path d="M42 22 H74 L58 44 H42 Z" fill="#39FF14" />
      <circle cx="39" cy="128" r="8" fill="#39FF14" opacity="0.4" />
    </svg>
  );
}

export function Scoreboard({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden="true">
      <rect x="4" y="8" width="192" height="64" rx="8" fill="#0B0F14" stroke="#39FF14" strokeWidth="3" />
      <text x="40" y="52" fill="#39FF14" fontSize="28" fontFamily="Montserrat, sans-serif" fontWeight="800">
        2
      </text>
      <text x="92" y="50" fill="#A0A6B0" fontSize="18" fontFamily="Montserrat, sans-serif">
        x
      </text>
      <text x="140" y="52" fill="#fff" fontSize="28" fontFamily="Montserrat, sans-serif" fontWeight="800">
        1
      </text>
    </svg>
  );
}

export function FormationDots({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true" fill="none">
      <rect x="8" y="8" width="184" height="244" rx="10" stroke="#39FF14" strokeOpacity="0.5" />
      <line x1="8" y1="130" x2="192" y2="130" stroke="#39FF14" strokeOpacity="0.35" />
      {[
        [100, 232],
        [55, 190],
        [100, 190],
        [145, 190],
        [40, 140],
        [100, 148],
        [160, 140],
        [40, 88],
        [100, 80],
        [160, 88],
        [100, 36],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="7" fill={i === 0 ? "#fff" : "#39FF14"} />
      ))}
    </svg>
  );
}

export function Whistle({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true">
      <rect x="8" y="22" width="54" height="28" rx="10" fill="#39FF14" />
      <circle cx="78" cy="36" r="18" fill="#E5E7EB" stroke="#39FF14" strokeWidth="3" />
      <circle cx="78" cy="36" r="6" fill="#0B0F14" />
    </svg>
  );
}

export function Headset({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden="true" fill="none">
      <path d="M20 48 C20 18 100 18 100 48" stroke="#39FF14" strokeWidth="8" />
      <rect x="8" y="44" width="22" height="28" rx="6" fill="#39FF14" />
      <rect x="90" y="44" width="22" height="28" rx="6" fill="#39FF14" />
      <path d="M100 70 H70" stroke="#39FF14" strokeWidth="4" />
    </svg>
  );
}

export function CaptainBand({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 140 70" className={className} aria-hidden="true">
      <rect x="8" y="18" width="124" height="34" rx="6" fill="#39FF14" />
      <text x="70" y="42" textAnchor="middle" fill="#0B0F14" fontSize="22" fontFamily="Montserrat, sans-serif" fontWeight="800">
        C
      </text>
    </svg>
  );
}

export function Newspaper({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 280 230" className={className} aria-hidden="true">
      <rect x="10" y="28" width="198" height="186" rx="4" fill="#E8E2D2" stroke="#2e6bff" strokeWidth="2" />
      <rect x="42" y="12" width="226" height="198" rx="5" fill="#F7F1E3" stroke="#39FF14" strokeWidth="3" />
      <text
        x="155"
        y="44"
        textAnchor="middle"
        fill="#0B0F14"
        fontSize="22"
        fontFamily="Montserrat, sans-serif"
        fontWeight="800"
      >
        FUTZONE
      </text>
      <line x1="58" y1="52" x2="252" y2="52" stroke="#0B0F14" strokeWidth="2" />
      <text x="155" y="68" textAnchor="middle" fill="#2e6bff" fontSize="8" fontFamily="Montserrat, sans-serif" fontWeight="700">
        EDIÇÃO EXTRA · NOTÍCIAS DO CICLO
      </text>
      <rect x="58" y="78" width="92" height="62" fill="#0B0F14" />
      <circle cx="104" cy="104" r="14" fill="#39FF14" />
      <polygon points="88,128 118,112 150,128 150,140 58,140" fill="#2e6bff" />
      <rect x="158" y="80" width="88" height="10" fill="#0B0F14" />
      <rect x="158" y="96" width="80" height="5" fill="#6B7280" />
      <rect x="158" y="106" width="84" height="5" fill="#6B7280" />
      <rect x="158" y="116" width="70" height="5" fill="#6B7280" />
      <rect x="158" y="126" width="78" height="5" fill="#6B7280" />
      <line x1="155" y1="152" x2="155" y2="198" stroke="#C4B89A" />
      {[158, 170, 182, 194].map((y) => (
        <rect key={`l-${y}`} x="58" y={y} width="88" height="4" fill="#C4B89A" />
      ))}
      {[158, 170, 182, 194].map((y) => (
        <rect key={`r-${y}`} x="164" y={y} width="82" height="4" fill="#C4B89A" />
      ))}
    </svg>
  );
}

export function GameBox({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 160 210" className={className} aria-hidden="true">
      <rect x="18" y="10" width="124" height="190" rx="8" fill="#0B0F14" stroke="#39FF14" strokeWidth="3" />
      <rect x="18" y="10" width="124" height="36" fill="#2e6bff" />
      <text x="80" y="34" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Montserrat, sans-serif" fontWeight="800">
        EA SPORTS
      </text>
      <circle cx="80" cy="108" r="42" fill="#111827" stroke="#39FF14" strokeWidth="3" />
      <text x="80" y="118" textAnchor="middle" fill="#39FF14" fontSize="36" fontFamily="Montserrat, sans-serif" fontWeight="800">
        27
      </text>
      <rect x="34" y="168" width="92" height="16" rx="3" fill="#39FF14" />
      <text x="80" y="180" textAnchor="middle" fill="#0B0F14" fontSize="9" fontFamily="Montserrat, sans-serif" fontWeight="800">
        FC 27
      </text>
    </svg>
  );
}

export function ClubCrest({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 140 160" className={className} aria-hidden="true">
      <path d="M70 8 L124 28 V86 C124 124 70 148 70 148 C70 148 16 124 16 86 V28 Z" fill="#0B0F14" stroke="#39FF14" strokeWidth="4" />
      <circle cx="70" cy="78" r="28" fill="none" stroke="#2e6bff" strokeWidth="3" />
      <text x="70" y="90" textAnchor="middle" fill="#39FF14" fontSize="28" fontFamily="Montserrat, sans-serif" fontWeight="800">
        FZ
      </text>
    </svg>
  );
}

export function Megaphone({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 150 100" className={className} aria-hidden="true">
      <path d="M18 38 H48 L118 12 V88 L48 62 H18 Z" fill="#39FF14" />
      <rect x="18" y="38" width="18" height="24" fill="#2e6bff" />
      <path d="M128 32 C140 42 140 58 128 68" stroke="#fff" strokeWidth="4" fill="none" />
      <path d="M138 22 C158 40 158 60 138 78" stroke="#2e6bff" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function EsportsMonitor({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-hidden="true">
      <rect x="12" y="12" width="196" height="112" rx="8" fill="#0B0F14" stroke="#39FF14" strokeWidth="3" />
      <rect x="24" y="24" width="172" height="88" fill="#111827" />
      <text x="110" y="74" textAnchor="middle" fill="#39FF14" fontSize="22" fontFamily="Montserrat, sans-serif" fontWeight="800">
        LIVE
      </text>
      <rect x="92" y="124" width="36" height="12" fill="#2e6bff" />
      <rect x="64" y="136" width="92" height="8" rx="2" fill="#39FF14" />
    </svg>
  );
}

export function Playbook({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 200 150" className={className} aria-hidden="true">
      <path d="M18 20 H100 V132 H18 Z" fill="#F7F1E3" stroke="#39FF14" strokeWidth="3" />
      <path d="M100 20 H182 V132 H100 Z" fill="#E8E2D2" stroke="#2e6bff" strokeWidth="3" />
      <circle cx="60" cy="70" r="16" stroke="#2e6bff" strokeWidth="3" fill="none" />
      <circle cx="60" cy="70" r="3" fill="#39FF14" />
      <rect x="118" y="42" width="48" height="6" fill="#0B0F14" />
      <rect x="118" y="56" width="42" height="5" fill="#6B7280" />
      <rect x="118" y="70" width="46" height="5" fill="#6B7280" />
      <rect x="118" y="84" width="38" height="5" fill="#6B7280" />
      <path d="M44 96 L72 108" stroke="#39FF14" strokeWidth="3" />
    </svg>
  );
}

export function Whiteboard({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-hidden="true" fill="none">
      <rect x="8" y="8" width="204" height="144" rx="8" fill="#0B0F14" stroke="#39FF14" strokeWidth="3" />
      <rect x="8" y="8" width="204" height="22" fill="#2e6bff" />
      <text x="110" y="24" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Montserrat, sans-serif" fontWeight="800">
        4-3-3
      </text>
      <circle cx="110" cy="132" r="7" fill="#fff" />
      <circle cx="70" cy="108" r="6" fill="#39FF14" />
      <circle cx="110" cy="108" r="6" fill="#39FF14" />
      <circle cx="150" cy="108" r="6" fill="#39FF14" />
      <circle cx="110" cy="78" r="6" fill="#2e6bff" />
      <circle cx="58" cy="58" r="6" fill="#39FF14" />
      <circle cx="162" cy="58" r="6" fill="#39FF14" />
      <circle cx="110" cy="44" r="6" fill="#ff5a7a" />
      <path d="M110 84 L110 50" stroke="#39FF14" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M70 108 L58 64" stroke="#39FF14" strokeWidth="2" />
      <path d="M150 108 L162 64" stroke="#39FF14" strokeWidth="2" />
    </svg>
  );
}

export function VsBadge({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
      <rect x="8" y="18" width="70" height="90" rx="8" fill="#2e6bff" />
      <text x="43" y="74" textAnchor="middle" fill="#fff" fontSize="28" fontFamily="Montserrat, sans-serif" fontWeight="800">
        91
      </text>
      <circle cx="100" cy="60" r="22" fill="#0B0F14" stroke="#39FF14" strokeWidth="3" />
      <text x="100" y="66" textAnchor="middle" fill="#39FF14" fontSize="14" fontFamily="Montserrat, sans-serif" fontWeight="800">
        VS
      </text>
      <rect x="122" y="18" width="70" height="90" rx="8" fill="#111827" stroke="#39FF14" strokeWidth="2" />
      <text x="157" y="74" textAnchor="middle" fill="#39FF14" fontSize="28" fontFamily="Montserrat, sans-serif" fontWeight="800">
        94
      </text>
    </svg>
  );
}

export function Medal({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <path d="M28 8 L60 70 L48 8 Z" fill="#2e6bff" />
      <path d="M92 8 L60 70 L72 8 Z" fill="#39FF14" />
      <circle cx="60" cy="108" r="38" fill="#39FF14" />
      <circle cx="60" cy="108" r="26" fill="#0B0F14" />
      <text x="60" y="118" textAnchor="middle" fill="#39FF14" fontSize="22" fontFamily="Montserrat, sans-serif" fontWeight="800">
        1º
      </text>
    </svg>
  );
}

export function StadiumBowl({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 260 140" className={className} aria-hidden="true" fill="none">
      <ellipse cx="130" cy="108" rx="110" ry="22" stroke="#39FF14" strokeWidth="3" />
      <path d="M28 108 C40 48 220 48 232 108" stroke="#2e6bff" strokeWidth="3" />
      <path d="M50 100 C70 62 190 62 210 100" stroke="#39FF14" strokeOpacity="0.5" />
      <ellipse cx="130" cy="108" rx="42" ry="10" fill="#39FF14" fillOpacity="0.2" />
    </svg>
  );
}
