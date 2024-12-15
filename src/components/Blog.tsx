import { Cover } from "./ui/cover";

const Blog = () => {
  return (
    <>
      <section
        className="bg-gradient-to-r from-primary1 to-secondary1 text-gray-800"
        id="/blog"
      >
        <h1 className="text-3xl md:text-4xl font-semibold max-w-7xl mx-auto text-center pt-10 relative z-20 pb-6 bg-clip-text text-transparent bg-gradient-to-r from-text to-white ">
          The <Cover>BlogSpot</Cover>
        </h1>
      </section>
    </>
  );
};

export default Blog;
