import { Container } from "@site-lab/shared";
import { RESERVE } from "@/data/content";
import { site } from "@/data/site.config";
import { pageMeta } from "@/lib/seo";
import { Ascent } from "@/components/motion/ascent";
import { SectionHeading } from "@/components/ui/section-heading";
import { ReserveForm } from "@/components/forms/reserve-form";

export const metadata = pageMeta({
  title: "Reserve",
  description: RESERVE.intro,
  path: "https://safar.example/reserve",
});

export default function ReservePage() {
  return (
    <>
      <section className="border-b border-stone py-20 md:py-28">
        <Container>
          <Ascent>
            <SectionHeading
              label={RESERVE.label}
              title={RESERVE.title}
              intro={RESERVE.intro}
            />
          </Ascent>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* Form */}
            <Ascent>
              <div className="border border-stone bg-ice p-6 md:p-8">
                <ReserveForm />
              </div>
            </Ascent>

            {/* Details */}
            <Ascent delay={120}>
              <aside className="flex flex-col gap-8">
                <div className="border border-stone bg-mist p-6">
                  <h3 className="text-[11px] uppercase tracking-[0.18em] text-slate/60">
                    The house
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate/80">
                    {RESERVE.details.hours}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate/80">
                    {RESERVE.details.address}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate/80">
                    <a href={`tel:${site.phone?.replace(/\s/g, "")}`} className="hover:text-slate">
                      {site.phone}
                    </a>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate/80">
                    <a href={`mailto:${site.email}`} className="hover:text-slate">
                      {site.email}
                    </a>
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {RESERVE.reach.map((item) => (
                    <div key={item.title}>
                      <h4 className="font-display text-base tracking-tight text-slate">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate/70">{item.body}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </Ascent>
          </div>
        </Container>
      </section>
    </>
  );
}