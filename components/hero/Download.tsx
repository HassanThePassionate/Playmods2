import Image from "next/image";
import Link from "next/link";
import { BsAndroid2 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Download = () => {
  return (
    <div className='mt-3 px-2  '>
      <div className='flex gap-4  '>
        <div>
          <Image
            src='https://qn-resource.playmods.net/html/2024061901/static/www/images/img-common-subject.png'
            height={65}
            width={65}
            alt='img'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <h2 className='text-[25px]'>PlayMods</h2>
          <div className='flex items-center  '>
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <span className='ml-2 text-blue-600'>9.6</span>
          </div>
          <span className='text-sm'>Safe and 100% working mods!</span>
        </div>
      </div>
      <div>
        <Link
          href='#'
          className='bg-[#5342f6] h-[48px] hover:bg-blue-700 px-6 rounded-full flex items-center text-white  gap-2 mt-[30px]'
        >
          <BsAndroid2 size={20} />
          Download&nbsp; v2.6.10 (31.5MB)
        </Link>
      </div>
    </div>
  );
};

export default Download;
