import { getAllPosts } from "./getAllPosts";

export const getPostBySlug = (slug: string) => {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
};
