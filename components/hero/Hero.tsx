import Search from "./Search";
import Tabs from "./Tabs";
import Tags from "./Tags";

const Hero = () => {
  return (
    <div>
      <div className="h-full w-full bg-white px-3 py-5">
        <Search />
        <Tabs />
        <Tags />
      </div>
    </div>
  );
};

export default Hero;
