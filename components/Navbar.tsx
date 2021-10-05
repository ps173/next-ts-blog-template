import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
      <div
        className="flex flex-row justify-between p-3 bg-gray-700 px-3"
      >
        <h1 className="text-3xl font-sans font-bold text-blue-500 p-1">Blog</h1>
        <div className="p-2 text-purple-400 text-xl">
          <Link href="https://github.com/ps173/next-ts-blog-template">
            Github
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
