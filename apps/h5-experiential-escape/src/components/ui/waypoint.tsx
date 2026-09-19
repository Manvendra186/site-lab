import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

/**
 * A waypoint label — the H5 signature marker.
 * "Stage 01 · 3,500 m" in Manrope, with an optional label.
 * Replaces H4's timecode and H3's numbered lineage.
 */
export function Waypoint({
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
      <span className="text-[11px] tracking-[0.18em] uppercase text-sky-deep">{code}</span>
      {label ? (
        <span className="text-[11px] uppercase tracking-[0.18em] text-slate/60">{label}</span>
      ) : null}
    </div>
  );
}

/**
 * A waypoint row — for the stay detail data panel.
 * "Label · value" in a bordered row.
 */
export function WaypointRow({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cx("flex items-baseline justify-between gap-4 border-b border-stone py-3", className)}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-slate/60">{label}</span>
      <span className="text-right text-sm text-slate">{value}</span>
    </div>
  );
}