import Logo from "../navbar/Logo";
import Company from "./Company";
import Copyright from "./Copyright";
import TopApps from "./TopApps";
import TopGames from "./TopGames";
import Trend from "./Trend";

const Footer = () => {
  return (
    <div className='bg-white pt-6 mt-8'>
      <div className='containers'>
        <div className='mb-8'>
          <Logo />
          <div className='mt-[48px] gridi gap-[42px]'>
            <Trend />
            <div className='flex flex-col gap-12'>
              <TopGames />
              <TopApps />
            </div>
            <Company />
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
