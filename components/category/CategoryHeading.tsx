import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
interface CategoryHeadingProps {
  white: boolean;
  black: boolean;
}
const CategoryHeading = ({ white, black }: CategoryHeadingProps) => {
  return (
    <div className='flex justify-between items-center px-4 h-[56px] bg-[#fbfbfb]'>
      <div className='flex items-center  text-[18px]'>
        <Link
          href='/result/game'
          className={`cursor-pointer p-4 ${
            white ? "bg-white " : "hover:text-blue-600"
          } `}
        >
          Games
        </Link>
        <Link
          href='/result/andriod'
          className={`cursor-pointer p-4 ${
            black ? "bg-white " : "hover:text-blue-600 "
          } `}
        >
          Apps
        </Link>
      </div>
      <Link
        href='#'
        className='hover:bg-[#e9e9e9] transition duration-300 p-2 rounded-full'
      >
        <FaArrowRight size={16} />
      </Link>
    </div>
  );
};

export default CategoryHeading;
