import { useRouter } from "next/router";
import { PostContainer, Navbar } from "../../components";
import React from "react";

// TODO : Make this work
// refer to https://css-tricks.com/building-a-blog-with-next-js/

const Post: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);

  return (
    <div>
      <Navbar />
      <PostContainer title={slug} content="Normal Content Here" />
    </div>
  );
};

export default Post;
