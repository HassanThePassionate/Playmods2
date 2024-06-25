import Logo from "../navbar/Logo";
import Copyright from "./Copyright";
import Links from "./Links";
import TopLinks from "./TopLinks";

const Footer = () => {
  return (
    <div className='bg-white pt-6 mt-8'>
      <div className='containers'>
        <div className='mb-8'>
          <Logo />
        </div>
        <TopLinks />
        <Links />
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
