import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { Separator } from "@/components/ui/separator";
import data from "@/constant/gamesData";
import Pagenation from "../Pagenation";
const GamesResults = () => {
  return (
    <div>
      <Card>
        <CardContent className='px-[40px] pt-[40px] pb-[16px]'>
          <h1 className='text-[20px] font-bold'>
            100 Apps & Games found for Your Search
          </h1>
          {data.map((elem) => {
            return (
              <>
                <Link
                  href='#'
                  key={elem.id}
                  className='flex items-center justify-between gap-4 px-6  py-3 mt-4 transition duration-300 mb-2  rounded-lg hover:bg-[#f8f8f8]'
                >
                  <div className='flex items-center gap-3 '>
                    <Image src={elem.img} alt='img' height={64} width={64} />

                    <div>
                      <h2>{elem.name}</h2>
                      <p className=' text-sm'>{elem.catagory.main}</p>
                      <p className='text-[12px]'>{elem.catagory.sub}</p>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-5 my-3 ml-3 mt-6 text-sm font-medium '>
                      <div>
                        <p className='flex items-center gap-1 justify-center'>
                          {elem.rates} <TiStarFullOutline size={14} />
                        </p>
                        <p className='text-[12px] text-[#666]'>67 reviews</p>
                      </div>
                      <div className='w-[1px] h-[20px] bg-[#97979e]'></div>
                      <div className='flex flex-col items-center'>
                        <p>11K+</p>
                        <p className='text-[12px] text-[#666]'>Downloads</p>
                      </div>
                      <div className='w-[1px] h-[20px] bg-[#97979e] mx-[10px]'></div>
                      <div className='flex flex-col items-center'>
                        <p>{elem.size}</p>
                        <p className='text-[12px] text-[#666]'>Size</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Separator />
              </>
            );
          })}
          <Pagenation />
        </CardContent>
      </Card>
    </div>
  );
};

export default GamesResults;
