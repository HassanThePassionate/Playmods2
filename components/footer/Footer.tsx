import Links from "./Links";
import TopLinks from "./TopLinks";

const Footer = () => {
  return (
    <div className='bg-white pt-8 mt-8'>
      <div className='containers'>
        <TopLinks />
        <Links />
      </div>
    </div>
  );
};

export default Footer;
