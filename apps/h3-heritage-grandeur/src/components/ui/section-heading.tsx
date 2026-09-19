import { Reveal } from "@site-lab/shared";
import { Diamond } from "@/components/motion/diamond";
import { Label } from "./label";

export function SectionHeading({
  label,
  title,
  className,
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Label>{label}</Label>
      <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{title}</h2>
      <Diamond className="mt-10 max-w-xs" />
    </Reveal>
  );
}
