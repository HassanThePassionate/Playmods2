import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='containers'>
        <div className=' flex items-center justify-between py-2 '>
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
