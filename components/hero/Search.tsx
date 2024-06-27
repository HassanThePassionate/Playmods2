import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

const Search = () => {
  return (
    <div className='flex items-center relative max-w-7x lg:min-w-[500px] pr-[80px] pl-[44px] rounded-[70px] border h-[48px] bg-[#F4F6FA] border-[#ddd] focus-within:border-[#5442f6]'>
      <Input
        className='bg-transparent p-0 w-full outline-none border-none relative focus:outline-none'
        placeholder='Enter a Keyword to Search...'
      />
      <Link
        href='#'
        className='absolute left-3 flex items-center justify-center text-sm'
      >
        <AiOutlineSearch size={24} color='blue' />
      </Link>
    </div>
  );
};

export default Search;
