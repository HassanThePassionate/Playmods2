import Apps from "@/constant/Apps";
import Image from "next/image";
import Link from "next/link";
import CategoryHeading from "./CategoryHeading";
interface AppssCategoryProps {
  white: boolean;
  black: boolean;
}
const AppsCategory = ({ white, black }: AppssCategoryProps) => {
  return (
    <>
      <CategoryHeading white={white} black={black} />

      <div className='grid grid-cols-2 mt-4 px-3 pb-3 '>
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
      </div>
    </>
  );
};

export default AppsCategory;
