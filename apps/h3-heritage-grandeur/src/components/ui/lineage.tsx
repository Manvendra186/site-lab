import { cx } from "@/lib/utils";

/**
 * The lineage — the H3 numbered motif. A court-record label:
 * "No. 01 ◆ The audience hall". Replaces H2's specimen number.
 */
export function Lineage({
  number,
  label,
  dark,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cx(
          "font-display text-sm tracking-[0.2em]",
          dark ? "text-gold" : "text-maroon"
        )}
      >
        No. {number}
      </span>
      <span aria-hidden="true" className="block h-1.5 w-1.5 rotate-45 bg-gold" />
      <span
        className={cx(
          "text-[11px] uppercase tracking-[0.18em]",
          dark ? "text-ivory/70" : "text-ink/60"
        )}
      >
        {label}
      </span>
    </div>
  );
}

/** A single lineage data row (label … value), for the suite detail spec. */
export function LineageRow({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex items-baseline justify-between gap-6 border-b border-sandstone py-3",
        className
      )}
    >
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink/60">{label}</span>
      <span className="text-right text-sm text-ink/80">{value}</span>
    </div>
  );
}
