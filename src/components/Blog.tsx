import { getAllPosts } from "@/lib/getAllPosts";
import { Cover } from "./ui/cover";
import { PostType } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const posts: PostType[] = getAllPosts();

  return (
    <>
      <section
        className="bg-gradient-to-r from-primary1 to-secondary1 text-gray-800 lg:px-20 md:px-12 px-4"
        id="/blog"
      >
        <h1 className="text-3xl md:text-4xl font-semibold max-w-7xl mx-auto text-center pt-10 relative z-20 pb-6 bg-clip-text text-transparent bg-gradient-to-r from-text to-white ">
          The <Cover>BlogSpot</Cover>
        </h1>

        <div className=" w-full md:p-6 p-1 text-white ">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((blog) => {
              // Check if the blog is "featured" to give it a larger column
              if (blog.featured) {
                return (
                  <Link
                    href={`/blog/${blog.slug}`}
                    key={blog.slug}
                    className="grid md:grid-cols-2 grid-cols-1 md:col-span-3 rounded-lg overflow-hidden bg-red-700 order-first group w-full"
                  >
                    {/* Featured Blog */}
                    <div className="w-full relative h-44 md:h-72 overflow-hidden">
                      <Image
                        src={blog.image!}
                        alt={blog.title!}
                        className="w-full h-64 object-cover"
                        fill
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-primary1 to-secondary1">
                      <h2 className="text-3xl font-bold group-hover:underline">
                        {blog.title}
                      </h2>
                      <p className="text-sm text-gray-300 mt-1">{blog.date}</p>
                      <p className="mt-2 text-gray-100">{blog.description}</p>
                    </div>
                  </Link>
                );
              }
              return (
                // Blog Cards
                <Link
                  href={`/blog/${blog.slug}`}
                  key={blog.slug}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group relative w-full"
                >
                  <div className="w-full h-48 relative">
                    <Image
                      src={blog.image!}
                      alt={blog.title!}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mt-1 mb-4">
                      {blog.date}
                    </p>
                    <div className="flex items-center flex-wrap gap-2 mb-4">
                      {blog.tags!.map((tag, index) => (
                        <span
                          key={index}
                          className=" text-white bg-primary1 px-2 py-1 rounded-lg text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold group-hover:underline">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-gray-300">{blog.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
