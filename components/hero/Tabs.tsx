import Link from "next/link";

const Tabs = () => {
  return (
    <div className="mt-2 flex items-center justify-around">
      <Link
        href="#"
        className="text-[#5342F6] text-sm  border-b-2 border-[#5342F6]"
      >
        Trending Searches
      </Link>
      <Link href="#" className="text-[#999] text-sm hover:text-[#555]">
        Mod Features
      </Link>
    </div>
  );
};

export default Tabs;
