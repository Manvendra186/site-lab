import type { ReactNode } from "react";
import { Reveal } from "@site-lab/shared";
import { cx } from "@/lib/utils";

/**
 * Specimen — the H2 signature motif. A large Fraunces numeral, a dotted
 * leader, and a small-caps label, like the label on a herbarium sheet.
 */
export function Specimen({
  number,
  label,
  className,
  dark = false,
}: {
  number: string;
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className={className}>
      <div className="flex items-end gap-4">
        <span
          className={cx(
            "font-display text-4xl font-light leading-none md:text-5xl",
            dark ? "text-sage" : "text-fern"
          )}
        >
          {number}
        </span>
        <span
          className={cx(
            "mb-1 flex-1 border-b border-dotted",
            dark ? "border-sage/40" : "border-stone"
          )}
          aria-hidden="true"
        />
        <span
          className={cx(
            "mb-1 text-[11px] uppercase tracking-[0.18em]",
            dark ? "text-sage" : "text-fern-deep"
          )}
        >
          {label}
        </span>
      </div>
    </Reveal>
  );
}

/** A specimen row: number + dotted leader + label + value (field-guide data). */
export function SpecimenRow({
  label,
  value,
  className,
}: {
  label: string;
  value: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("flex items-baseline justify-between gap-6 border-b border-dotted border-stone py-3", className)}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-fern-deep">{label}</span>
      <span className="text-right text-sm text-ink/80">{value}</span>
    </div>
  );
}
