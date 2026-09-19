import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

/**
 * A timecode label — the H4 signature marker.
 * "TC 00:00:00:00" in Space Grotesk tabular-nums, with an optional label.
 * Replaces H3's numbered lineage and H2's specimen numbers.
 */
export function Timecode({
  code,
  label,
  className,
}: {
  code: string;
  label?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("flex items-baseline gap-3", className)}>
      <span className="text-[11px] tracking-[0.18em] tabular-nums text-tungsten">{code}</span>
      {label ? (
        <span className="text-[11px] uppercase tracking-[0.18em] text-silver/70">{label}</span>
      ) : null}
    </div>
  );
}

/** A label + value row, for the room detail data panel. */
export function TimecodeRow({
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
        "flex items-baseline justify-between gap-4 border-b border-graphite py-3",
        className
      )}
    >
      <span className="text-[11px] uppercase tracking-[0.18em] text-silver/60">{label}</span>
      <span className="text-right text-sm text-silver">{value}</span>
    </div>
  );
}
