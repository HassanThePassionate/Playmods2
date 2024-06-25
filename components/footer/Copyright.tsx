import Link from "next/link";

const Copyright = () => {
  return (
    <div>
      <div className='flex items-center p-4 border-t border-[#999]  justify-center mt-[20px]'>
        <p className='pr-1 text-sm text-[#666] '>
          Copyright © 2024 PlayMods All rights reserved.
        </p>
        <div className='flex items-center text-sm'>
          <div className='w-[1px] h-[10px] bg-[#97979e] mr-[10px]  '></div>
          <Link href='#' className='text-blue-600  hover:underline '>
            DMCA Policy
          </Link>
          <div className='w-[1px] h-[10px] bg-[#97979e] mx-[10px]  '></div>
          <Link href='#' className='text-blue-600 hover:underline '>
            Privacy Policy
          </Link>
          <div className='w-[1px] h-[10px] bg-[#97979e] mx-[10px] '></div>
          <Link href='#' className='text-blue-600 hover:underline '>
            Terms Of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
