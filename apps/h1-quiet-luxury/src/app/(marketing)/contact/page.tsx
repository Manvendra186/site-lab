import type { Metadata } from "next";
import { Container, Reveal, jsonLd } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Label } from "@/components/ui/label";
import { Hairline } from "@/components/motion/hairline";
import { ReserveForm } from "@/components/forms/reserve-form";
import { pageMeta, lodgingSchema } from "@/lib/seo";
import { CONTACT } from "@/data/content";
import { site } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Reserve",
  description:
    "Reserve a stay at Sthira — a 14-room private house on the edge of Lake Pichola, Udaipur. Breakfast and one experience are included.",
  path: "https://sthira.example/contact",
});

export default function ContactPage() {
  return (
    <>
      {jsonLd(lodgingSchema())}
      <PageHero label={CONTACT.label} title={CONTACT.title} intro={CONTACT.intro} />
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <Reveal>
              <ReserveForm />
            </Reveal>
            <Reveal delay={120}>
              <Label>Details</Label>
              <div className="mt-6 grid gap-6">
                <div className="border-t border-stone pt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                    Address
                  </p>
                  <p className="mt-2 text-base leading-7">{CONTACT.details.address}</p>
                </div>
                <div className="border-t border-stone pt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                    Phone
                  </p>
                  <a
                    href={`tel:${site.phone?.replace(/\s/g, "")}`}
                    className="mt-2 block text-base transition-colors hover:text-bronze-deep"
                  >
                    {site.phone}
                  </a>
                </div>
                <div className="border-t border-stone pt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 block break-all text-base transition-colors hover:text-bronze-deep"
                  >
                    {site.email}
                  </a>
                </div>
                <div className="border-t border-stone pt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                    Reception
                  </p>
                  <p className="mt-2 text-base">{CONTACT.details.hours}</p>
                </div>
              </div>
              <Hairline className="mt-10" />
              <div className="mt-10">
                <Label>Getting here</Label>
              </div>
              <div className="mt-6 grid gap-5">
                {CONTACT.reach.map((g) => (
                  <div key={g.title}>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                      {g.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink/75">{g.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-10 max-w-sm text-xs leading-5 text-ink/55">{CONTACT.demoNote}</p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
