import Trending from "../Trending";
import GamesCategory from "../category/GamesCategory";
import { Card, CardContent } from "../ui/card";
import Download from "./Download";
import Search from "./Search";
import Tabs from "./Tabs";
import Tags from "./Tags";

const Hero = () => {
  return (
    <>
      <Card>
        <CardContent className='h-full w-full  px-3 py-5'>
          <Tabs />
          <Tags />
          <Download />
        </CardContent>
      </Card>
      <Card className='mt-6 overflow-hidden'>
        <CardContent className='h-[300px]  w-full p-0'></CardContent>
      </Card>
      <Card className='mt-6 overflow-hidden'>
        <CardContent className='h-full  w-full p-0'>
          <GamesCategory />
        </CardContent>
      </Card>
      <Card className='mt-6 overflow-hidden'>
        <CardContent className='h-full  w-full p-5'>
          <Trending />
        </CardContent>
      </Card>
    </>
  );
};

export default Hero;
