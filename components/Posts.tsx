import React from "react";
import Link from "next/link";
import Head from "next/head";

interface Props {
  title: string | string[] | undefined;
  content: string;
}

const LinkContainer: React.FC<Props> = ({ title, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
};

export default LinkContainer;
