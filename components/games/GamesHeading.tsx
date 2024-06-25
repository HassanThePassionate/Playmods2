import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
interface GamesHeadingProps {
  text: string;
}
const GamesHeading = ({ text }: GamesHeadingProps) => {
  return (
    <div className='flex items-center gap-1 h-[56px] bg-[#fbfbfb] '>
      <h3 className='text-[18px] relative pl-[17px]'>{text}</h3>
      <Link
        href='#'
        className='hover:bg-[#e9e9e9] transition duration-300 p-2 rounded-full'
      >
        <FaArrowRight size={18} />
      </Link>
    </div>
  );
};

export default GamesHeading;
