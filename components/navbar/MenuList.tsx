import Image from "next/image";
import Link from "next/link";
interface MenuListProps {
  icon: string;
  title: string;
}
const MenuList = ({ title, icon }: MenuListProps) => {
  return (
    <Link
      href='#'
      className=' flex items-center gap-2 pr-6 pl-4 min-h-[48px] py-1 hover:bg-[#f4f4f4] transition duration-300 rounded-full'
    >
      <div className='img'>
        <Image src={icon} alt='img' height={36} width={36} />
      </div>
      <span className='text-[16px] font-semibold'>{title}</span>
    </Link>
  );
};

export default MenuList;
