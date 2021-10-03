import type { NextPage } from "next";
import { MainPage, Navbar } from "../components";

const Home: NextPage = () => {
  const dummyData = [{
    value: "Something",
    slug: "Something",
  }, {
    value: "Something More",
    slug: "Something-More",
  }];

  return (
    <div>
      <Navbar />
      <MainPage data={dummyData} />
    </div>
  );
};

export default Home;
