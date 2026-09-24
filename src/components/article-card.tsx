import Link from "next/link";
import type { ArticleMeta } from "@/lib/types";

export function ArticleCard({
  article,
  href,
}: {
  article: ArticleMeta;
  href: string;
}) {
  return (
    <article className="fx-ease flex flex-col rounded-3xl border border-line bg-panel p-6 transition hover:-translate-y-1 hover:border-pitch/60 hover:shadow-[0_0_32px_rgba(57,255,20,0.22)]">
      <p className="text-xs tracking-[0.2em] text-pitch uppercase">
        {article.tags[0] ?? article.section} · {article.date}
      </p>
      <h2 className="font-display mt-2 text-2xl text-white">{article.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.excerpt}</p>
      <Link href={href} className="mt-4 inline-block text-sm font-semibold text-pitch transition hover:translate-x-1">
        Ler matéria →
      </Link>
    </article>
  );
}
