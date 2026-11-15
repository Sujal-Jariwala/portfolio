import type { CSSProperties, ReactNode, SVGProps } from "react";

// Size and tilt are CSS variables read by `.sticker` in global.css:
//   style={{ "--w": "150px", "--r": "-8deg" }}
type StickerStyle = CSSProperties & Record<`--${string}`, string | number>;

export type StickerProps = Omit<SVGProps<SVGSVGElement>, "style" | "children"> & {
  style?: StickerStyle;
};

const INK = "#0F181C";
const PAPER = "#F5F2F3";
const TINT = "#8FA3F5";
const BLUE = "#021F94";

const Base = ({
  className = "",
  children,
  ...rest
}: StickerProps & { children: ReactNode }) => (
  <svg
    viewBox="0 0 100 100"
    aria-hidden="true"
    focusable="false"
    className={`sticker ${className}`}
    {...rest}
  >
    <g stroke={INK} strokeWidth={2.8} strokeLinejoin="round" strokeLinecap="round">
      {children}
    </g>
  </svg>
);

export const Gopher = (props: StickerProps) => (
  <Base {...props}>
    <circle cx="27" cy="24" r="9" fill={TINT} />
    <circle cx="73" cy="24" r="9" fill={TINT} />
    <ellipse cx="50" cy="80" rx="27" ry="18" fill={TINT} />
    <ellipse cx="17" cy="72" rx="7" ry="11" fill={TINT} transform="rotate(20 17 72)" />
    <ellipse cx="83" cy="72" rx="7" ry="11" fill={TINT} transform="rotate(-20 83 72)" />
    <ellipse cx="50" cy="50" rx="35" ry="34" fill={TINT} />
    <circle cx="37" cy="42" r="11" fill={PAPER} />
    <circle cx="63" cy="42" r="11" fill={PAPER} />
    <circle cx="39" cy="43" r="3.5" fill={INK} />
    <circle cx="61" cy="43" r="3.5" fill={INK} />
    <ellipse cx="50" cy="62" rx="14" ry="9" fill={PAPER} />
    <ellipse cx="50" cy="57" rx="5.5" ry="3.5" fill={INK} />
    <path d="M46 66h8v9h-8z" fill={PAPER} />
  </Base>
);

export const Socrates = (props: StickerProps) => (
  <Base {...props}>
    <path d="M10 100Q12 80 36 77L64 77Q88 80 90 100Z" fill={TINT} />
    <ellipse cx="30" cy="40" rx="4" ry="6" fill={PAPER} />
    <ellipse cx="70" cy="40" rx="4" ry="6" fill={PAPER} />
    <ellipse cx="50" cy="38" rx="20" ry="25" fill={PAPER} />
    <path d="M30 46Q28 80 50 84Q72 80 70 46Q60 58 50 56Q40 58 30 46Z" fill={PAPER} />
    <path d="M37 54Q50 47 63 54Q50 61 37 54Z" fill={PAPER} />
    <path d="M36 31L46 34M64 31L54 34" fill="none" strokeWidth={3} />
    <path d="M42 22Q50 19 58 22" fill="none" strokeWidth={1.6} />
    <circle cx="42" cy="38" r="2" fill={INK} stroke="none" />
    <circle cx="58" cy="38" r="2" fill={INK} stroke="none" />
    <path d="M50 38Q45 47 50 49" fill="none" />
  </Base>
);

// Ferris, the Rust mascot
export const Crab = (props: StickerProps) => (
  <Base {...props}>
    <path
      d="M22 56Q10 48 12 34M78 56Q90 48 88 34M26 70L14 82M34 74L26 90M66 74L74 90M74 70L86 82"
      fill="none"
      strokeWidth={4}
    />
    <circle cx="14" cy="30" r="12" fill={PAPER} />
    <circle cx="86" cy="30" r="12" fill={PAPER} />
    <path d="M8 22L14 30L20 21Z" fill={INK} />
    <path d="M80 21L86 30L92 22Z" fill={INK} />
    <path d="M40 40V30M60 40V30" fill="none" strokeWidth={3} />
    <ellipse cx="50" cy="60" rx="32" ry="22" fill={PAPER} />
    <circle cx="40" cy="28" r="5.5" fill={PAPER} />
    <circle cx="60" cy="28" r="5.5" fill={PAPER} />
    <circle cx="40" cy="28" r="2" fill={INK} stroke="none" />
    <circle cx="60" cy="28" r="2" fill={INK} stroke="none" />
    <path d="M43 62Q50 68 57 62" fill="none" />
  </Base>
);

export const Arrow = (props: StickerProps) => (
  <Base {...props}>
    <path d="M6 46L94 8L58 92L46 60Z" fill={BLUE} />
    <path d="M6 46L46 60L94 8Z" fill={TINT} />
    <path d="M46 60L58 92L62 52Z" fill={PAPER} />
    <path d="M46 60L94 8" fill="none" />
  </Base>
);

export const Mug = (props: StickerProps) => (
  <Base {...props}>
    <ellipse cx="46" cy="88" rx="36" ry="7" fill={TINT} />
    <path d="M68 46Q92 44 90 60Q88 74 66 72" fill="none" strokeWidth={8} />
    <path d="M68 46Q92 44 90 60Q88 74 66 72" fill="none" stroke={PAPER} strokeWidth={3.5} />
    <path d="M20 38H72V64Q72 86 46 86Q20 86 20 64Z" fill={PAPER} />
    <ellipse cx="46" cy="38" rx="26" ry="6" fill={BLUE} />
    <path d="M34 28Q28 20 34 12M48 28Q42 20 48 12M62 28Q56 20 62 12" fill="none" strokeWidth={3} />
  </Base>
);

/* ---------- Section-header icons (use at --w: 62px, className="-my-2.5") ---------- */

export const BookIcon = (props: StickerProps) => (
  <Base {...props}>
    <path d="M8 28Q30 20 50 30L50 84Q30 74 8 82Z" fill={PAPER} />
    <path d="M92 28Q70 20 50 30L50 84Q70 74 92 82Z" fill={PAPER} />
    <path d="M16 42Q30 38 42 44M16 54Q30 50 42 56M16 66Q30 62 42 68" fill="none" strokeWidth={2} />
    <path d="M64 24V50L69 45L74 50V26Z" fill={BLUE} />
  </Base>
);

export const Clipboard = (props: StickerProps) => (
  <Base {...props}>
    <rect x="20" y="8" width="60" height="82" rx="4" fill={PAPER} />
    <rect x="28" y="17" width="26" height="6" rx="1" fill={BLUE} stroke="none" />
    <g fill={TINT} stroke="none">
      <rect x="28" y="30" width="44" height="3" />
      <rect x="28" y="38" width="36" height="3" />
      <rect x="28" y="46" width="44" height="3" />
      <rect x="28" y="58" width="40" height="3" />
      <rect x="28" y="66" width="30" height="3" />
    </g>
    <circle cx="72" cy="78" r="15" fill={BLUE} />
    <path d="M64 78L70 84L81 72" fill="none" stroke={PAPER} strokeWidth={4} />
  </Base>
);

export const Scroll = (props: StickerProps) => (
  <Base {...props}>
    <rect x="22" y="22" width="56" height="58" fill={PAPER} />
    <rect x="14" y="14" width="72" height="12" rx="6" fill={TINT} />
    <rect x="14" y="76" width="72" height="12" rx="6" fill={TINT} />
    <g fill={BLUE} stroke="none">
      <rect x="30" y="38" width="40" height="3" />
      <rect x="30" y="47" width="32" height="3" />
      <rect x="30" y="56" width="40" height="3" />
      <rect x="30" y="65" width="24" height="3" />
    </g>
    <path d="M92 6Q68 16 58 56Q88 46 92 6Z" fill={PAPER} />
    <path d="M90 8L56 62" fill="none" />
  </Base>
);

export const Gear = (props: StickerProps) => (
  <Base {...props}>
    <g fill={BLUE}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <rect key={a} x="43" y="6" width="14" height="20" rx="2" transform={`rotate(${a} 50 50)`} />
      ))}
    </g>
    <circle cx="50" cy="50" r="31" fill={TINT} />
    <circle cx="50" cy="50" r="11" fill={PAPER} />
  </Base>
);

export const Books = (props: StickerProps) => (
  <Base {...props}>
    <rect x="10" y="62" width="80" height="16" rx="2" fill={BLUE} />
    <rect x="16" y="44" width="72" height="16" rx="2" fill={PAPER} />
    <rect x="12" y="26" width="76" height="16" rx="2" fill={TINT} />
    <path d="M22 70H78M28 52H74M24 34H70" fill="none" strokeWidth={1.6} opacity={0.5} />
  </Base>
);

export const Postcard = (props: StickerProps) => (
  <Base {...props}>
    <rect x="8" y="22" width="84" height="58" rx="5" fill={PAPER} />
    <rect x="66" y="30" width="18" height="22" fill={BLUE} />
    <rect x="70" y="34" width="10" height="14" fill={TINT} stroke="none" />
    <circle cx="50" cy="40" r="10" fill="none" strokeDasharray="3 3" />
    <path d="M16 56H48M16 65H56M16 74H40" fill="none" strokeWidth={3} />
  </Base>
);

/* ---------- Project-group icons (use at --w: 48px) ---------- */

export const Folder = (props: StickerProps) => (
  <Base {...props}>
    <path d="M8 24H38L46 34H92V82H8Z" fill={TINT} />
    <path d="M8 44H92V82H8Z" fill={PAPER} />
  </Base>
);

export const Layers = (props: StickerProps) => (
  <Base {...props}>
    <rect x="34" y="12" width="32" height="13" rx="4" fill={PAPER} />
    <rect x="24" y="31" width="52" height="13" rx="4" fill={TINT} />
    <rect x="14" y="50" width="72" height="13" rx="4" fill={BLUE} />
    <rect x="6" y="69" width="88" height="13" rx="4" fill={PAPER} />
  </Base>
);