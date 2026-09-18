import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** default | wide | narrow — resolved by the site's own CSS via [data-container] */
  size?: "default" | "wide" | "narrow";
}

/**
 * Layout container. Widths are the site's decision: style [data-container] in your globals.css.
 */
export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={className} data-container={size}>
      {children}
    </div>
  );
}
