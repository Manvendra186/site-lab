import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Img, Reveal } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { JOURNAL } from "@/data/journal";
import { RESERVE_HREF } from "@/data/site.config";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return JOURNAL.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = JOURNAL.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `https://sthira.example/journal/${slug}`,
    ogImage: image(post.image).url,
  });
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = JOURNAL.find((p) => p.slug === slug);
  if (!post) notFound();
  const img = image(post.image);

  return (
    <>
      <Img
        src={img.url}
        alt={img.alt}
        ratio={16 / 9}
        eager
        sizes="100vw"
        className="h-[50vh] min-h-[340px] w-full"
      />
      <article className="py-16 md:py-24">
        <Container size="narrow">
          <Reveal>
            <Label>{post.date}</Label>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-8 space-y-6 text-base leading-8 text-ink/80">
              {post.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <div className="mt-12 border-t border-stone pt-8">
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </article>
    </>
  );
}
