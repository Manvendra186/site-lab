import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Diamond } from "@/components/motion/diamond";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { LEDGER } from "@/data/ledger";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "The Ledger — The Alkari",
  description:
    "The ledger is a court record of the haveli, kept by the family. Six entries, from the first stone laid in 1742 to the day the haveli is open.",
  path: "https://alkari.example/ledger",
});

export default function Ledger() {
  return (
    <>
      <PageHero
        label="The ledger"
        title="A court record of the haveli"
        intro="The family keeps a ledger — a record of the haveli, from the first stone to the day it is open. Six entries, oldest to newest. The years are illustrative."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Diamond className="mb-16" />
            <div className="grid gap-16">
              {LEDGER.map((e, i) => {
                const img = image(e.image);
                return (
                  <Reveal key={e.id} delay={i * 80}>
                    <article className="grid gap-8 md:grid-cols-[1fr_240px] md:gap-12">
                      <div>
                        <p className="font-display text-3xl text-maroon md:text-4xl">{e.year}</p>
                        <h2 className="mt-3 font-display text-2xl">{e.title}</h2>
                        <p className="mt-4 text-base leading-7 text-ink/75">{e.body}</p>
                        <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-ink/50">
                          {e.note}
                        </p>
                      </div>
                      <Img
                        src={img.url}
                        alt={img.alt}
                        ratio={4 / 5}
                        sizes="(min-width: 768px) 240px, 100vw"
                      />
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-sandstone bg-mist">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-md text-base leading-7 text-ink/75">
              The ledger is still kept by the family. Come and read it, in the haveli.
            </p>
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
