"use client";
import Link from "next/link";
import { useState } from "react";

const Tabs = () => {
  const [links, setLinks] = useState(true);
  const handleClick = () => {
    setLinks(!links);
  };
  return (
    <div className='mt-2 flex items-center justify-around'>
      <Link
        href='#'
        className={` ${
          links
            ? "text-[#5342F6] border-[#5342F6] border-b-2"
            : "text-[#999] hover:text-[#555]"
        } text-sm   `}
        onClick={handleClick}
      >
        Trending Searches
      </Link>
      <Link
        href='#'
        className={` ${
          links
            ? "text-[#999] hover:text-[#555]"
            : "text-[#5342F6] border-[#5342F6] border-b-2"
        } text-sm   `}
        onClick={handleClick}
      >
        Mod Features
      </Link>
    </div>
  );
};

export default Tabs;
