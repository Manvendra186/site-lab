import type { Metadata } from "next";
import Link from "next/link";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Label } from "@/components/ui/label";
import { Hairline } from "@/components/motion/hairline";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { JOURNAL } from "@/data/journal";

export const metadata: Metadata = pageMeta({
  title: "Journal",
  description:
    "Notes from the house — on stillness, water, and the small rituals of a quiet stay at Sthira.",
  path: "https://sthira.example/journal",
});

export default function JournalPage() {
  return (
    <>
      <PageHero
        label="Journal"
        title="Notes from the house"
        intro="A few things we think about while the lake does its work. Written slowly, published rarely."
      />
      <section className="pb-20 md:pb-28">
        <Container>
          <div>
            {JOURNAL.map((post) => {
              const img = image(post.image);
              return (
                <Reveal key={post.slug}>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="group grid gap-6 border-t border-stone py-10 md:grid-cols-[1fr_2fr] md:items-center md:gap-12"
                  >
                    <Img
                      src={img.url}
                      alt={img.alt}
                      ratio={4 / 3}
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="md:max-w-sm"
                    />
                    <div>
                      <Label>{post.date}</Label>
                      <h2 className="mt-3 font-display text-3xl font-light">{post.title}</h2>
                      <p className="mt-3 max-w-xl text-base leading-7 text-ink/75">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Hairline className="mt-2" />
        </Container>
      </section>
    </>
  );
}
