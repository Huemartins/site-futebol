import { MDXRemote } from "next-mdx-remote/rsc";

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="mdx">
      <MDXRemote source={source} />
    </div>
  );
}
