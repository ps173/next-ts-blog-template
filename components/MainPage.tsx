import React from "react";
import Link from "next/link";

interface Props {
  data: DataType[];
}

interface DataType {
  value: string;
  slug: string;
}

const MainPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div>
        <div className="m-4 bg-gray-900 h-auto">
          <div className="text-2xl p-3 text-purple-400">Posts</div>
          {data.map(
            ({ value, slug }) => (
              <li className="text-blue-100 p-2">
                <Link
                  href={"/" + slug}
                  key={value + Math.floor(Math.random() * 10000000)}
                >
                  {value}
                </Link>
              </li>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
