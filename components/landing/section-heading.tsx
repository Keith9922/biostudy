import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[54rem] space-y-4 sm:space-y-5",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-[1.92rem] font-semibold leading-[1.16] tracking-[-0.03em] text-[#16233f] sm:text-[2.42rem] lg:text-[3rem]">
        {title}
      </h2>
      <p
        className={cn(
          "max-w-[46rem] text-[0.98rem] leading-8 text-[#576076] sm:text-[1.04rem]",
          align === "center" ? "mx-auto" : "",
        )}
      >
        {description}
      </p>
    </div>
  );
}
