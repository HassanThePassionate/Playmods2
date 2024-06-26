import Image from "next/image";
import Link from "next/link";
interface MenuListProps {
  icon: string;
  title: string;
}
const MenuList = ({ title, icon }: MenuListProps) => {
  return (
    <Link href='#' className=' flex items-center flex-col'>
      <div className='img'>
        <Image src={icon} alt='img' height={36} width={36} />
      </div>
      <span className='text-sm'>{title}</span>
    </Link>
  );
};

export default MenuList;
