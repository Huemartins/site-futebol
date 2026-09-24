import Link from "next/link";
import { notFound } from "next/navigation";
import { news, newsBySlug } from "@/lib/news";

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsBySlug[slug];
  return {
    title: article?.title ?? "Notícia",
    description: article?.excerpt,
  };
}

export default async function NoticiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsBySlug[slug];
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Link href="/noticias" className="text-xs tracking-[0.2em] text-pitch uppercase">
        ← Notícias
      </Link>
      <p className="mt-4 text-xs tracking-[0.28em] text-muted uppercase">
        {article.tag} · {article.date}
      </p>
      <h1 className="font-display mt-3 text-4xl text-white md:text-5xl">{article.title}</h1>
      <p className="mt-4 text-lg leading-7 text-muted">{article.excerpt}</p>
      <div className="mdx mt-8">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        {article.href ? (
          <Link href={article.href} className="rounded-full bg-pitch px-5 py-2.5 text-sm font-bold text-black">
            Continuar no hub
          </Link>
        ) : null}
        <Link href="/noticias" className="rounded-full border border-line px-5 py-2.5 text-sm text-white">
          Todas as notícias
        </Link>
        <Link href="/ea-fc" className="rounded-full border border-line px-5 py-2.5 text-sm text-white">
          Preços e modos
        </Link>
      </div>
    </article>
  );
}
