import { useId } from "react";
import { brainTones, brandColors } from "@/config/brand";

/**
 * El Cerebrito de Friendz Quiz: el mismo personaje que en los imprimibles.
 * Estados disponibles: neutral, feliz, pensando y sorprendido.
 * Pendientes de dibujar con las mismas formas: confundido, celebrando, ganador,
 * dormido, «game over» y curioso.
 */

export type CerebritoMood = "neutral" | "happy" | "thinking" | "surprised";
export type CerebritoPose = "hips" | "wave" | "up" | "chin" | "none";

interface CerebritoProps {
  mood?: CerebritoMood;
  pose?: CerebritoPose;
  hat?: boolean;
  className?: string;
  /** Texto alternativo. Si se omite, la ilustración es decorativa. */
  title?: string;
}

const INK = brandColors.ink.hex;
const T = brainTones;

const BODY =
  "M30,96 C14,90 12,64 30,56 C26,34 48,18 70,26 C80,10 108,8 120,20 C134,8 162,12 168,32 C190,30 206,50 198,70 C214,82 210,108 192,114 C192,134 170,146 152,138 C142,152 116,154 104,144 C90,154 64,152 58,138 C38,142 22,126 30,108 C22,104 22,98 30,96 Z";

const FOLDS = [
  "M42,92 C32,84 32,70 44,64", "M44,56 C44,42 58,34 72,38", "M80,36 C88,24 106,22 114,32",
  "M128,30 C140,22 156,26 160,40", "M172,46 C184,46 192,56 188,66", "M190,80 C200,90 198,102 188,106",
  "M182,120 C180,130 168,134 158,128", "M146,132 C138,138 126,138 120,132", "M98,134 C90,140 78,140 70,132",
  "M54,126 C42,126 36,118 40,110", "M56,80 C62,68 76,70 82,60", "M100,52 C108,60 120,60 128,50",
  "M146,58 C156,64 168,62 172,74", "M58,108 C64,100 74,104 72,112", "M160,90 C168,96 168,106 160,110",
];

const arm = { stroke: T.limb, strokeWidth: 7.5, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } as const;
const leg = { stroke: T.limb, strokeWidth: 9, strokeLinecap: "round", fill: "none" } as const;

function Eye({ x, y, scale = 1, look = 0 }: { x: number; y: number; scale?: number; look?: number }) {
  return (
    <>
      <ellipse cx={x} cy={y} rx={7 * scale} ry={10 * scale} fill={INK} />
      <ellipse cx={x + 2 * scale + look} cy={y - 4 * scale - look} rx={2.4 * scale} ry={3.2 * scale} fill="#fff" />
    </>
  );
}

function Eyes({ mood }: { mood: CerebritoMood }) {
  if (mood === "happy") {
    const p = { stroke: INK, strokeWidth: 5, strokeLinecap: "round", fill: "none" } as const;
    return (
      <>
        <path d="M83,89 Q92,77 101,89" {...p} />
        <path d="M125,85 Q134,73 143,85" {...p} />
      </>
    );
  }
  if (mood === "thinking") {
    return (
      <>
        <Eye x={92} y={86} look={1} />
        <Eye x={134} y={82} look={1} />
        <path d="M124,62 Q136,55 146,63" stroke={T.fold} strokeWidth={7} strokeLinecap="round" fill="none" />
      </>
    );
  }
  const scale = mood === "surprised" ? 1.25 : 1;
  return (
    <>
      <Eye x={92} y={86} scale={scale} />
      <Eye x={134} y={82} scale={scale} />
    </>
  );
}

function Mouth({ mood }: { mood: CerebritoMood }) {
  if (mood === "thinking") {
    return <path d="M92,112 L124,108" stroke={T.mouth} strokeWidth={9} strokeLinecap="round" />;
  }
  if (mood === "surprised") return <ellipse cx={113} cy={114} rx={7} ry={9} fill={T.mouth} />;
  return (
    <>
      <path d="M98,108 Q114,124 130,106 Z" fill={T.mouth} stroke={T.mouth} strokeWidth={6} strokeLinejoin="round" />
      <path d="M106,114 Q114,119 122,113" stroke={T.mouthInner} strokeWidth={4} strokeLinecap="round" fill="none" />
    </>
  );
}

function Hand({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r={7.5} fill={T.limb} />;
}

function BackLimbs({ pose }: { pose: CerebritoPose }) {
  return (
    <>
      <path d="M94,140 C92,170 90,196 88,220" {...leg} />
      <path d="M132,140 C134,170 138,196 140,220" {...leg} />
      <ellipse cx={82} cy={224} rx={14} ry={7.5} fill={T.limb} />
      <ellipse cx={146} cy={224} rx={14} ry={7.5} fill={T.limb} />
      {pose === "hips" && (
        <>
          <path d="M34,104 L14,126 L36,142" {...arm} /><Hand x={36} y={142} />
          <path d="M196,104 L214,126 L194,142" {...arm} /><Hand x={194} y={142} />
        </>
      )}
      {pose === "chin" && (
        <>
          <path d="M194,108 C198,130 198,152 196,172" {...arm} /><Hand x={196} y={176} />
        </>
      )}
      {pose === "up" && (
        <>
          <path d="M30,92 C16,80 10,62 14,46" {...arm} /><Hand x={14} y={42} />
          <path d="M196,90 C210,78 216,60 212,44" {...arm} /><Hand x={212} y={40} />
        </>
      )}
      {pose === "wave" && (
        <>
          <path d="M32,108 C26,128 24,148 26,166" {...arm} /><Hand x={26} y={170} />
          <path d="M196,92 C210,80 216,62 212,46" {...arm} /><Hand x={212} y={42} />
        </>
      )}
    </>
  );
}

function SantaHat() {
  return (
    <g transform="translate(0,-8) rotate(-6 110 40)">
      <path d="M42,50 Q56,-18 124,-22 Q190,-24 224,46 Q216,52 208,44 Q198,20 180,18 L186,44 Z" fill={brandColors.coral.hex} />
      <path d="M72,6 Q92,-10 122,-12" stroke={T.hatHighlight} strokeWidth={6} strokeLinecap="round" fill="none" />
      <path d="M36,58 Q110,32 184,46" stroke={T.hatFur} strokeWidth={22} strokeLinecap="round" fill="none" />
      <path d="M40,66 Q110,42 182,55" stroke={T.hatFurShade} strokeWidth={6} strokeLinecap="round" fill="none" />
      <circle cx={222} cy={56} r={13} fill={T.hatFur} />
    </g>
  );
}

export function Cerebrito({ mood = "neutral", pose = "hips", hat = false, className, title }: CerebritoProps) {
  const clipId = useId();
  const decorative = !title;
  return (
    <svg
      viewBox={hat ? "0 -40 236 280" : "0 0 228 240"}
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={title}
      overflow="visible"
    >
      <BackLimbs pose={pose} />
      <defs>
        <clipPath id={clipId}>
          <path d={BODY} />
        </clipPath>
      </defs>
      <path d={BODY} fill={T.body} />
      <g clipPath={`url(#${clipId})`}>
        <ellipse cx={112} cy={168} rx={120} ry={42} fill={T.shade} />
        {FOLDS.map((d) => (
          <path key={d} d={d} stroke={T.fold} strokeWidth={7} strokeLinecap="round" fill="none" />
        ))}
      </g>
      <Eyes mood={mood} />
      <Mouth mood={mood} />
      {pose === "chin" && (
        <>
          <path d="M40,110 C18,140 38,154 70,124" {...arm} />
          <Hand x={72} y={122} />
        </>
      )}
      {hat && <SantaHat />}
    </svg>
  );
}
