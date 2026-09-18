import { Reveal } from "@site-lab/shared";
import { Hairline } from "@/components/motion/hairline";
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
      <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">{title}</h2>
      <Hairline className="mt-10" />
    </Reveal>
  );
}
