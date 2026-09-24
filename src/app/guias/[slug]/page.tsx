import { notFound } from "next/navigation";
import Link from "next/link";
import { guideBackHref, guides, guidesBySlug } from "@/lib/guides";

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  return { title: guide?.title ?? "Guia", description: guide?.excerpt };
}

export default async function GuiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Link href={guideBackHref(guide.hub)} className="text-xs tracking-[0.2em] text-pitch uppercase">
        ← {guide.hub === "taticas" ? "Táticas" : guide.hub === "builds" ? "Builds" : "Guias"}
      </Link>
      <p className="mt-4 text-xs tracking-[0.28em] text-pitch uppercase">{guide.tag}</p>
      <h1 className="font-display mt-3 text-5xl text-white">{guide.title}</h1>
      <div className="mdx mt-8">
        {guide.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href={guideBackHref(guide.hub)} className="rounded-full bg-pitch px-5 py-2.5 text-sm font-bold text-black">
          Voltar
        </Link>
        <Link href="/guias" className="rounded-full border border-line px-5 py-2.5 text-sm text-white">
          Guias
        </Link>
        <Link href="/taticas" className="rounded-full border border-line px-5 py-2.5 text-sm text-white">
          Táticas
        </Link>
      </div>
    </article>
  );
}
