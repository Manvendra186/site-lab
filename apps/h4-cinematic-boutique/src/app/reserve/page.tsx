import { Container } from "@site-lab/shared";
import { ReserveForm } from "@/components/forms/reserve-form";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/ui/page-hero";
import { RESERVE } from "@/data/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Reserve",
  description: RESERVE.intro,
});

export default function ReservePage() {
  return (
    <>
      <PageHero
        label={RESERVE.label}
        title={RESERVE.title}
        intro={RESERVE.intro}
        code={RESERVE.timecode}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_320px] md:gap-16">
            <ReserveForm />

            <aside className="space-y-8">
              <div>
                <Label>Details</Label>
                <dl className="mt-4 space-y-4 text-sm text-silver/80">
                  <div>
                    <dt className="text-silver-dim">Hours</dt>
                    <dd className="mt-1">{RESERVE.details.hours}</dd>
                  </div>
                  <div>
                    <dt className="text-silver-dim">Address</dt>
                    <dd className="mt-1">{RESERVE.details.address}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <Label>Reach</Label>
                <div className="mt-4 space-y-4">
                  {RESERVE.reach.map((r) => (
                    <div key={r.title}>
                      <h3 className="font-display text-lg text-screen">{r.title}</h3>
                      <p className="mt-1 text-sm text-silver/80">{r.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-graphite bg-smoke p-5 text-xs leading-relaxed text-silver-dim">
                {RESERVE.demoNote}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}