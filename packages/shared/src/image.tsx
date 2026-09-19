"use client";

import Image from "next/image";

export interface ImgProps {
  src: string;
  /** Required. Use "" for decorative images. */
  alt: string;
  /** Width/height ratio, e.g. 16/9. Reserved to prevent layout shift. */
  ratio?: number;
  className?: string;
  imgClassName?: string;
  /** Load eagerly (above the fold). */
  eager?: boolean;
  sizes?: string;
}

/**
 * Responsive image with a reserved aspect ratio (no layout shift, lazy by default).
 * Visual styling (radius, filters, etc.) belongs to the site, not here.
 */
export function Img({ src, alt, ratio = 4 / 3, className, imgClassName, eager, sizes }: ImgProps) {
  return (
    <span
      data-img=""
      className={className}
      style={{ display: "block", position: "relative", overflow: "hidden", aspectRatio: `${ratio}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={eager}
        loading={eager ? "eager" : "lazy"}
        className={imgClassName}
        style={{ objectFit: "cover" }}
      />
    </span>
  );
}
