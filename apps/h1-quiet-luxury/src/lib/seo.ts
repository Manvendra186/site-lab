import { buildMetadata, localBusinessSchema, type PageMeta } from "@site-lab/shared";
import { site } from "@/data/site.config";

/** Per-page metadata, bound to the Sthira site config. */
export function pageMeta(page: PageMeta) {
  return buildMetadata(site, page);
}

/** LodgingBusiness JSON-LD (home + contact). */
export function lodgingSchema(extra: Record<string, unknown> = {}) {
  return localBusinessSchema(site, extra);
}
