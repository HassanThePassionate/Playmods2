import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Badge } from "../ui/badge";

interface AppsHeadingProps {
  title: string;
  setGames: any;
  games: boolean;
}
const AppsHeading = ({ title, setGames, games }: AppsHeadingProps) => {
  const GamesHandler = () => {
    setGames(!games);
  };
  return (
    <div>
      <div className='flex items-center justify-between mb-6 '>
        <div className='flex items-center gap-2 '>
          <h3 className='text-[20px]  font-semibold'>{title}</h3>
          <Link
            href='#'
            className='hover:bg-[#e9e9e9] transition duration-300 p-3 rounded-full'
          >
            <FaArrowRight size={18} />
          </Link>
        </div>
        <div className='flex items-center gap-2 '>
          <Badge
            variant={"outline"}
            className={`text-[14px] cursor-pointer px-4 ${
              games ? " text-blue-700 bg-blue-100" : " hover:bg-blue-100"
            } `}
            onClick={GamesHandler}
          >
            Games
          </Badge>
          <Badge
            variant={"outline"}
            className={`text-[14px] cursor-pointer px-4${
              games ? "  hover:bg-blue-100 " : " text-blue-700 bg-blue-100"
            } `}
            onClick={GamesHandler}
          >
            Apps
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default AppsHeading;
