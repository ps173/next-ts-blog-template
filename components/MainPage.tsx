import React from "react";
import Link from "next/link";

interface Props {
  data: DataType[];
}

interface DataType {
  title: string;
  slug: string;
}

const LinkContainer: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data ? (
        <div>
          <div className="m-4 bg-gray-900 h-auto">
            <div className="text-2xl p-3 text-purple-400">
              List of all the notes
            </div>
            {data.map(function (post, idx) {
              return (
                <li key={idx} className="text-lg p-5 text-green-400">
                  <Link href={"/posts/" + post.slug}>{post.title}</Link>
                </li>
              );
            })}
          </div>
        </div>
      ) : (
        <div>No posts</div>
      )}
    </>
  );
};

export default LinkContainer;
