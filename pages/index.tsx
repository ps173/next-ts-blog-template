import type { GetStaticProps, NextPage } from "next";
import { LinkContainer, Navbar } from "../components";
import { getAllPosts } from "../api";

const Home: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <div>
      <Navbar />
      <LinkContainer data={posts} />
    </div>
  );
};

export async function getStaticProps<GetStaticProps>() {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Home;
