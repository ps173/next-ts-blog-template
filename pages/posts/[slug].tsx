import { useRouter } from "next/router";
import { Navbar, PostContainer } from "../../components";
import React from "react";
import { getAllPosts, getPostBySlug } from "../../api/";

const Post: React.FC = (props) => {
  return (
    <div>
      <Navbar />
      <PostContainer
        author={props.author}
        title={props.title}
        content={props.content}
        description={props.description}
      />
    </div>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: await getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default Post;
