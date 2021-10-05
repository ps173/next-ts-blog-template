import matter from "gray-matter";
import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

export async function getAllPosts() {
  const context = require.context("../posts/", false, /\.md$/);
  const posts = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../posts/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace(".md", ""),
      author: meta.data.author,
      description: meta.data.description,
      title: meta.data.title,
    });
  }
  return posts;
}

export async function getPostBySlug(slug: string) {
  const fileContent = await import(`../posts/${slug}.md`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: meta.data.title,
    author: meta.data.author,
    description: meta.data.description,
    content: content,
  };
}
