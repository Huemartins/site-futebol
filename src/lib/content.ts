import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import type { ArticleFrontmatter, ArticleMeta } from "@/lib/types";

export type MdxDoc = ArticleMeta & {
  content: string;
};

const articlesDir = path.join(process.cwd(), "content", "articles");
const guidesDir = path.join(process.cwd(), "content", "guias");

function parseDoc(filename: string, raw: string): MdxDoc {
  const { data, content } = matter(raw);
  const front = data as ArticleFrontmatter;
  return {
    slug: filename.replace(/\.mdx$/, ""),
    title: front.title,
    section: front.section,
    tags: front.tags ?? [],
    date: front.date,
    excerpt: front.excerpt,
    content: content.trim(),
  };
}

async function readDir(dir: string): Promise<MdxDoc[]> {
  try {
    const files = (await fs.readdir(dir)).filter((file) => file.endsWith(".mdx"));
    const docs = await Promise.all(
      files.map(async (file) => parseDoc(file, await fs.readFile(path.join(dir, file), "utf8"))),
    );
    return docs.sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return [];
  }
}

export async function listArticles(section?: ArticleFrontmatter["section"]) {
  const docs = await readDir(articlesDir);
  return section ? docs.filter((doc) => doc.section === section) : docs;
}

export async function getArticle(slug: string) {
  const docs = await readDir(articlesDir);
  return docs.find((doc) => doc.slug === slug) ?? null;
}

export async function listMdxGuides() {
  return readDir(guidesDir);
}

export async function getMdxGuide(slug: string) {
  const docs = await readDir(guidesDir);
  return docs.find((doc) => doc.slug === slug) ?? null;
}
