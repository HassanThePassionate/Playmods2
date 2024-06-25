"use client";
import Games from "@/constant/Games";
import Image from "next/image";
import Link from "next/link";
import CategoryHeading from "./CategoryHeading";
import { useState } from "react";
import Apps from "@/constant/Apps";

const GamesCategory = () => {
  const [category, setCategory] = useState(true);
  const handleClick = () => {
    setCategory(!category);
  };
  return (
    <div>
      <CategoryHeading click={handleClick} category={category} />
      <div className='grid grid-cols-2 mt-4 px-3 pb-3 '>
        {category ? (
          <>
            {Games.map((games) => {
              return (
                <Link
                  href='#'
                  className='flex items-center gap-2 p-4 hover:bg-[#f3f3f3]  text-[12px] '
                  key={games.img}
                >
                  <Image
                    src={games.img}
                    alt='img'
                    height={30}
                    width={30}
                    className='rounded-full '
                  />
                  <span>{games.title}</span>
                </Link>
              );
            })}
          </>
        ) : (
          <>
            {Apps.map((elem: any) => {
              return (
                <Link
                  href='#'
                  className='flex items-center gap-2 p-4 hover:bg-[#f3f3f3]  text-[12px] '
                  key={elem.img}
                >
                  <Image
                    src={elem.img}
                    alt='img'
                    height={30}
                    width={30}
                    className='rounded-full '
                  />
                  <span>{elem.title}</span>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default GamesCategory;
