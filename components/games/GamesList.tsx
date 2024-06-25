import Image from "next/image";
import Link from "next/link";
import { FaWindows } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

interface GameListProps {
  data: Array<{
    id: number;
    img: string;
    name: string;
    catagory: { main: string; sub: string };
    rates: number;
    size: string;
  }>;
}

const GamesList = ({ data }: GameListProps) => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {data.map((elem) => (
        <Link
          href={`/game/${elem.id}`}
          key={elem.img}
          className='flex gap-2 relative items-center link transition duration-300 rounded-md hover:bg-[#f3f3f3] hover:text-blue-600 px-[10px] py-[10px]'
        >
          <Image
            src={elem.img}
            alt='img'
            height={80}
            width={80}
            className='h-[80px] w-[80px] rounded-3xl relative overflow-hidden'
          />

          <div className='flex flex-col gap-1'>
            <h2 className='text-sm font-semibold'>{elem.name}</h2>
            <span className='text-[12px] text-[#999] hover:text-[#555]'>
              {elem.catagory.main}
            </span>
            <div className='flex items-center gap-[4px] '>
              <div className='flex items-center gap-[4px]'>
                <BsStarFill color='#FFE234' size={12} />
                <span className='text-[12px]'>{elem.rates}</span>
              </div>
              <span className='truncate text-[12px] text-[#777] w-12'>
                {elem.catagory.sub}
              </span>
              <span className=' text-[12px] text-[#999]'>{elem.size}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GamesList;
