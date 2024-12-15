import { getPostBySlug } from "@/lib/getPostBySlugs";
import MarkdownIt from "markdown-it";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const md = new MarkdownIt();

  if (!post) {
    return notFound();
  }

  const htmlConvertor = md.render(post?.content ?? "");

  return (
    <>
      <section className="container mx-auto lg:px-56 px-4  py-36 text-white ">
        <Link
          href="/"
          className="text-white mb-6  inline-flex items-center gap-1  px-2 py-1 rounded-md hover:bg-primary1 bg-primary1/60"
        >
          <BsArrowLeft className="text-lg" /> <span>Back</span>
        </Link>
        <h1 className="lg:text-6xl text-4xl text-white  mb-6">{post?.title}</h1>
        <p className="text-xl text-white">{post?.description}</p>
        <div
          dangerouslySetInnerHTML={{ __html: htmlConvertor }}
          className="text-white prose prose-lg xl:prose-xl tw-prose"
        />
      </section>
    </>
  );
};

export default BlogPost;
