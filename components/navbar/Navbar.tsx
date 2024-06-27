import Search from "../hero/Search";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-[1800px] mx-auto overflow-hidden w-full px-4'>
        <div className=' flex items-center gap-[60px] py-4 '>
          <Logo />
          <Search />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
