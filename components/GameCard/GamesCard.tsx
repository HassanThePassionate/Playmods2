import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import GameDes from "./GameDes";
import Slider from "./GameSlider";
import Image from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { TiStarFullOutline } from "react-icons/ti";

interface GameCard {
  img: string;
  title: string;
  rate: number;
}

const GamesCard = ({ img, title, rate }: GameCard) => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <Card className='p-0 bg-gradient-to-tl from-[#ffffff] to-[#d4dfed]'>
        <CardContent className='p-6'>
          <div className=' font-roboto'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href='/'>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href='#'>Games</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href='#'>Simulation</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className='text-blue-600'>
                    Melon Playground Mods inside
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className='flex gap-4 mt-6'>
              <Image
                src={img}
                alt='img'
                height={100}
                width={100}
                className='rounded-[16px] h-[96px] w-[96px]'
              />
              <div className='flex items-center justify-between w-full'>
                <div className='self-start'>
                  <h1 className='text-[34px] font-bold cursor-pointer block hover:text-[#5342F6]'>
                    {title} (Mod Menu)
                  </h1>
                  <p className='block text-[18px] text-[#5342F6]'>
                    Extend your Gaming Experience with this Handy Game
                  </p>
                  <Link
                    href='#'
                    className='text-[#666] hover:text-black font-medium text-[14px] py-[2px] hover:underline'
                  >
                    Adventure
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-5 my-3 ml-3 mt-6 text-sm font-medium '>
              <div>
                <p className='flex items-center gap-1 justify-center'>
                  {rate} <TiStarFullOutline size={14} />
                </p>
                <p>67 reviews</p>
              </div>
              <div className='w-[1px] h-[20px] bg-[#97979e]'></div>
              <div className='flex flex-col items-center'>
                <p>11K+</p>
                <p>Downloads</p>
              </div>
              <div className='w-[1px] h-[20px] bg-[#97979e] mx-[10px]'></div>
              <div className='flex flex-col items-center'>
                <p>200MB</p>
                <p>Size</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Link
                href='#'
                className='bg-[#5342F6] flex items-center gap-3 border-2 border-transparent hover:bg-blue-700 justify-center h-[46px] text-sm text-white px-[30px] rounded-full mt-4'
                onClick={handleClick}
              >
                {loading ? (
                  <Loader2 className='animate-spin' size={25} />
                ) : (
                  <Image
                    src='https://qn-resource.playmods.net/html/2024061901/static/www/images/icon-detail-dn.png'
                    alt='img'
                    height={25}
                    width={25}
                  />
                )}
                <p>Fast Download</p>
              </Link>

              <Link
                href='#'
                className='border-2 border-[#5342F6] flex items-center gap-1 justify-center h-[46px] rounded-full text-sm text-[#5442F6] px-[30px]  mt-4 hover:bg-[#5342F6] hover:text-white transition duration-300'
              >
                Download APK
                <p className='text-[12px]'>(573.8MB)</p>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='mt-6'>
        <CardContent>
          <Slider />
          <GameDes />
        </CardContent>
      </Card>
    </>
  );
};

export default GamesCard;
