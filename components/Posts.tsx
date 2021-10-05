import React from "react";
import Link from "next/link";
import Head from "next/head";

interface Props {
  title: string | string[] | undefined;
  content: string;
}

const LinkContainer: React.FC<Props> = (
  { title, content, author, description },
) => {
  return (
    <>
      <Head>
        <title>{title} : by {author}</title>
        <meta
          name="description"
          content={description}
        />
      </Head>
      <div className="h-auto w-auto m-4 p-4 bg-gray-900 text-white">
        <h1 className="text-2xl text-green-500">{title}</h1>
        <h5 className="text-lg text-red-400">By {author}</h5>
        <br />
        <div
          className="text-lg px-4"
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>
        <br />
      </div>
      <div className="text-xl text-red-500 p-5">
        <Link href="/">
          <a>Go To Home</a>
        </Link>
      </div>
    </>
  );
};

export default LinkContainer;
