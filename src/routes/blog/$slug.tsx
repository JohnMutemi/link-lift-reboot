import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTA } from "../about";
import { getPostBySlug, posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Blog"} — Link Freight Logistics Ltd` },
      { name: "description", content: loaderData?.excerpt },
      { property: "og:title", content: loaderData?.title },
      { property: "og:description", content: loaderData?.excerpt },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  return (
    <>
      {/* Article header */}
      <header className="bg-navy pt-20 pb-14 sm:pt-24 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan/70 hover:text-cyan transition-colors mb-8"
          >
            <ArrowLeft className="size-3.5" /> All articles
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-cyan/20 text-cyan">
              {post.tag}
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-widest">{post.date}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Divider rule */}
      <div className="h-1 bg-cyan w-24 ml-[max(1rem,calc((100%-48rem)/2))]" />

      {/* Article body */}
      <article className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <div className="space-y-6 text-slate-700 leading-relaxed text-[1.0625rem]">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <hr className="my-10 border-slate-100" />

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-navy hover:text-cyan transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to all articles
          </Link>
        </div>
      </article>

      <CTA />
    </>
  );
}

export const blogSlugs = posts.map((p) => p.slug);