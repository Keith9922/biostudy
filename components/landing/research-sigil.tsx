import { cn } from "@/lib/utils";

type ResearchSigilProps = {
  className?: string;
  tone?: "default" | "inverse";
};

export function ResearchSigil({
  className,
  tone = "default",
}: ResearchSigilProps) {
  const stroke =
    tone === "inverse" ? "rgba(255,255,255,0.48)" : "rgba(49,82,143,0.24)";
  const fill =
    tone === "inverse" ? "rgba(255,255,255,0.12)" : "rgba(49,82,143,0.08)";
  const accent =
    tone === "inverse" ? "rgba(255,255,255,0.78)" : "rgba(92,139,122,0.36)";

  return (
    <svg
      viewBox="0 0 136 136"
      fill="none"
      aria-hidden="true"
      className={cn("h-24 w-24", className)}
    >
      <rect x="8" y="8" width="120" height="120" rx="32" fill={fill} />
      <rect
        x="8.5"
        y="8.5"
        width="119"
        height="119"
        rx="31.5"
        stroke={stroke}
      />
      <path
        d="M34 94C34 74.1177 50.1177 58 70 58H102"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34 104H102"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34 44H78"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="70" cy="58" r="14" fill={accent} />
      <circle cx="70" cy="58" r="5" fill={tone === "inverse" ? "#ffffff" : "#16233f"} />
      <circle cx="102" cy="94" r="7" fill={accent} />
      <circle cx="34" cy="104" r="5" fill={tone === "inverse" ? "#ffffff" : "#31528f"} />
      <circle
        cx="34"
        cy="44"
        r="6"
        fill={tone === "inverse" ? "rgba(255,255,255,0.7)" : "rgba(22,35,63,0.16)"}
      />
    </svg>
  );
}
