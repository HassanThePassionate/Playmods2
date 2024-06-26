import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";

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
    <div className='grid grid-cols-2 gap-y-5 gap-x-3'>
      {data.map((elem) => (
        <Link
          href={`/game/${elem.id}`}
          key={elem.img}
          className='flex gap-2 relative items-center link transition duration-300 p-[10px] rounded-md hover:bg-[#f3f3f3] hover:shadow-md hover:text-blue-600'
        >
          <Image
            src={elem.img}
            alt='img'
            height={78}
            width={78}
            className='h-[80px] w-[80px] rounded-xl relative overflow-hidden'
          />

          <div className='flex flex-col gap-1'>
            <h2 className='text-[16px] '>{elem.name}</h2>
            <span className='text-[14px] text-[#999] hover:text-[#555]'>
              {elem.catagory.main}
            </span>
            <div className='flex items-center gap-[10px] '>
              <span className='truncate text-[12px] text-[#777] '>
                {elem.catagory.sub}
              </span>
              <div className='flex items-center gap-[2px]'>
                <BsStarFill color='#666' size={10} />
                <span className='text-[12px] text-[#999]'>{elem.rates}</span>
              </div>

              <span className=' text-[12px] text-[#999]'>{elem.size}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GamesList;
