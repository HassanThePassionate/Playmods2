import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
interface CategoryHeadingProps {
  click: () => void;
  category: boolean;
}
const CategoryHeading = ({ click, category }: CategoryHeadingProps) => {
  return (
    <div className='flex justify-between items-center px-4 h-[56px] bg-[#fbfbfb]'>
      <div className='flex items-center  text-[18px]'>
        <span
          className={`cursor-pointer p-4 ${
            category ? "bg-white " : "hover:text-blue-600"
          } `}
          onClick={click}
        >
          Games
        </span>
        <span
          className={`cursor-pointer p-4 ${
            category ? "hover:text-blue-600" : "bg-white "
          } `}
          onClick={click}
        >
          Apps
        </span>
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
