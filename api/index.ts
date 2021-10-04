import matter from "gray-matter"
import marked from 'marked'

export async function getAllPosts(){
    const context = require.context('../posts/',false,/\.md$/)
    const posts = []
    for(const key of context.keys()){
        const post = key.slice(2);
        const content = await import(`../posts/${post}`);
        const meta = matter(content.default)
        posts.push({
          slug: meta.data.slug,
          title: meta.data.title
        })
      }
      return posts;

}

export async function getPostBySlug(slug:string){
    const fileContent = await import(`../posts/${slug}.md`)
    const meta = matter(fileContent.default)
    const content = marked(meta.content)    
    return {
        title: meta.data.title, 
        content: content
    }
}