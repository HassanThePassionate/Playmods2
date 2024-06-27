import Trending from "../Trending";
import GamesCategory from "../category/GamesCategory";
import Download from "./Download";
import Search from "./Search";
import Tabs from "./Tabs";
import Tags from "./Tags";

const Hero = () => {
  return (
    <div>
      <div className='h-full w-full bg-white px-3 py-5'>
        <Tabs />
        <Tags />
        <Download />
      </div>
      <div className='h-[300px] mt-6 w-full bg-white '></div>
      <div className='h-full mt-6 w-full bg-white '>
        <GamesCategory />
      </div>
      <div className='h-full mt-6 w-full bg-white p-5 '>
        <Trending />
      </div>
    </div>
  );
};

export default Hero;
