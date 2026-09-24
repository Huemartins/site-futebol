type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  stacked?: boolean;
};

export function FutzoneMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path
        fill="#39FF14"
        d="M25 19 31.2 7.2 36.2 16.4 40 5.4 43.8 16.4 48.8 7.2 55 19 50 23.4 H30Z"
      />
      <path
        fill="#39FF14"
        d="M13 26h35.5l-5.2 11.2H24.8L21.8 45h16.6l-4.2 9.2H17.2Z"
      />
      <path fill="#39FF14" d="M31.5 48.2 61 26.2h12.2L45.4 55.6H66l5.2 12.2H16.8Z" />
    </svg>
  );
}

export function FutzoneSlash({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 56" className={className} aria-hidden="true">
      <path
        fill="#39FF14"
        d="M6 34C42 12 86 6 132 8c36 2 68 12 116 4-44 14-86 10-128 18C78 36 40 44 6 34Z"
      />
      <path
        fill="none"
        stroke="#39FF14"
        strokeWidth="4"
        d="M28 44h36M78 40h28M118 42h22"
        opacity="0.85"
      />
    </svg>
  );
}

export function FutzoneLogo({
  className = "",
  markClassName = "h-10 w-10",
  showWordmark = true,
  stacked = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <FutzoneMark className={markClassName} />
      {showWordmark ? (
        <span className={stacked ? "flex flex-col" : ""}>
          <span className="font-display text-2xl font-extrabold italic leading-none tracking-tighter md:text-[1.75rem]">
            <span className="text-white">FUT</span>
            <span className="text-pitch">ZONE</span>
          </span>
          {stacked ? (
            <span className="mt-1 text-[9px] font-semibold tracking-[0.18em] text-muted uppercase">
              Futebol · EA FC · Pro Clubs · eSports
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
