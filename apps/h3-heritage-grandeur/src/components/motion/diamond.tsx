import { cx } from "@/lib/utils";

/**
 * The diamond ornament — the H3 signature rule.
 * A line, a diamond, a line. The diamond draws in on mount (the "gild"
 * family of motion). Replaces H2's dotted leader and H1's hairline.
 */
export function Diamond({
  className,
  tone = "light",
  animate = true,
}: {
  className?: string;
  tone?: "light" | "dark";
  animate?: boolean;
}) {
  const line = tone === "dark" ? "bg-gold/50" : "bg-sandstone";
  return (
    <div aria-hidden="true" className={cx("flex items-center gap-3", className)}>
      <span className={cx("h-px flex-1", line)} />
      <span className={cx("block h-2 w-2 bg-gold", animate && "diamond-in")} />
      <span className={cx("h-px flex-1", line)} />
    </div>
  );
}
