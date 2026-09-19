import { Fade } from "@/components/motion/fade";
import { Sprocket } from "@/components/motion/sprocket";
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
    <Fade className={className}>
      <Label>{label}</Label>
      <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-screen md:text-5xl">
        {title}
      </h2>
      <Sprocket className="mt-10 max-w-[180px]" />
    </Fade>
  );
}
