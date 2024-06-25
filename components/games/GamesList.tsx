import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";

interface GameListProps {
  data: Array<{
    img: string;
    name: string;
    catagory: string;
    rates: number;
    id: number;
  }>;
}

const GamesList = ({ data }: GameListProps) => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {data.map((elem) => (
        <Link
          href={`/game/${elem.id}`}
          key={elem.img}
          className='flex gap-2 items-center transition duration-300 rounded-md hover:bg-[#f3f3f3] hover:text-blue-600 px-[10px] py-[10px]'
        >
          <Image
            src={elem.img}
            alt='img'
            height={80}
            width={80}
            className='h-[80px] w-[80px] rounded-3xl'
          />
          <div className='flex flex-col gap-1'>
            <h2 className='text-sm font-semibold'>{elem.name}</h2>
            <span className='text-[12px] text-[#999] hover:text-[#555]'>
              {elem.catagory}
            </span>
            <div className='flex items-center gap-2'>
              <BsStarFill color='yellow' size={14} />
              <span className='text-[12px]'>{elem.rates}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GamesList;
