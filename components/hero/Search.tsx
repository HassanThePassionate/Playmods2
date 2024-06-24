import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
const Search = () => {
  return (
    <div className="flex items-center relative pr-[80px] pl-[17px] rounded-[70px] border h-[50px] border-[#5342f6] w-fit">
      <Input
        className="bg-transparent p-0 w-[170px] outline-none border-none relative focus:outline-none"
        placeholder="Fanstay Cultivation"
      />
      <Link
        href="#"
        className="h-[50px] absolute right-0 w-[60px] flex items-center justify-center  rounded-r-[30px] text-sm bg-[#5342f6] "
      >
        <SearchIcon size={28} color="white" />
      </Link>
    </div>
  );
};

export default Search;
