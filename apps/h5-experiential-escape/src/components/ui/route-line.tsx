import { cx } from "@/lib/utils";

/**
 * The route line — the H5 signature rule.
 * A thin line with a small waypoint dot, like a road on a map.
 * Replaces H4's sprocket leader and H3's diamond ornament.
 */
export function RouteLine({
  className,
}: {
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={cx("flex items-center gap-3", className)}>
      <span className="block h-2 w-2 rounded-full bg-sky" />
      <span className="block h-px w-24 bg-stone" />
    </div>
  );
}