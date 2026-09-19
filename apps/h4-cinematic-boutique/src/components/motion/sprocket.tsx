import { cx } from "@/lib/utils";

/**
 * The sprocket-hole leader — the H4 signature rule.
 * A row of film sprocket holes, like the edge of a film strip.
 * Replaces H3's diamond ornament and H2's dotted leader.
 */
export function Sprocket({
  className,
  holes = 14,
}: {
  className?: string;
  holes?: number;
}) {
  return (
    <div aria-hidden="true" className={cx("flex items-center gap-2", className)}>
      {Array.from({ length: holes }).map((_, i) => (
        <span key={i} className="block h-3 w-2 rounded-[3px] bg-graphite" />
      ))}
    </div>
  );
}
