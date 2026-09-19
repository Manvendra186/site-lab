"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESERVE_HREF } from "@/data/site.config";

/** Mobile-only sticky reserve bar (brief). Hidden on the reserve page itself. */
export function ReserveBar() {
  const pathname = usePathname();
  if (pathname === "/reserve") return null;
  return (
    <div className="sticky bottom-0 z-40 border-t border-graphite bg-charcoal lg:hidden">
      <Link
        href={RESERVE_HREF}
        className="block py-4 text-center text-[13px] uppercase tracking-[0.18em] text-tungsten"
      >
        Reserve a stay
      </Link>
    </div>
  );
}
