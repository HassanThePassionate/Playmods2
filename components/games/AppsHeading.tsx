import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

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
        <div className='flex items-center gap-4 px-4'>
          <span
            className={`text-[16px] cursor-pointer ${
              games
                ? "underline text-blue-600"
                : "text-[#999] hover:text-[#5342F6]"
            } `}
            onClick={GamesHandler}
          >
            Games
          </span>
          <span
            className={`text-[16px] cursor-pointer ${
              games
                ? " text-[#999] hover:text-[#5342F6] "
                : "underline text-blue-600"
            } `}
            onClick={GamesHandler}
          >
            Apps
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppsHeading;
