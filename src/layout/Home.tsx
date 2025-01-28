import List_News from "./home/List_News";
import Main_News from "./home/Main_News";
import Other_News from "./home/Other_News";

const Home = () => {
  return (
    <div className="px-8 md:px-32 ">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
        <div className="col-span-2">
          <Main_News />
        </div>
        <List_News />
      </div>
      <Other_News />
    </div>
  );
};

export default Home;
