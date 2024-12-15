import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostType } from "@/types/types";

export function getAllPosts() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/posts"));
  const posts: PostType[] = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(process.cwd(), "src/posts", filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return {
      slug,
      content,
      ...data,
    };
  });
  return posts;
}
