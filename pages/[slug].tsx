import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";

const Post: React.FC = ({ slug }) => {
  const router = useRouter();
  console.log(router);
  // const { slug } = router.query;

  return <p>Post: {slug}</p>;
};

export const getStaticPath: GetStaticPaths<{ slug: string }> = () => {
  const files = fs.readdirSync("notes");
  console.log("files: ", files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log("paths: ", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params ?? {};
  return {
    props: {
      slug,
    },
  };
};

export default Post;
