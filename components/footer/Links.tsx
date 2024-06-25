import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Links = () => {
  return (
    <div className='px-4 flex justify-between gap-8 mt-[20px]'>
      <div className='w-[24%]'>
        <h3 className='mb-[20px] text-start font-bold text-sm uppercase'>
          Solutions
        </h3>
        <ul className='flex flex-col gap-2 text-sm list-disc'>
          <li className='  hover:bg-slate-100  w-full'>
            <Link href='#'>Mobile Version</Link>
          </li>
          <li className='  hover:bg-slate-100 w-full'>
            <Link href='#'>PlayMods For Android</Link>
          </li>
          <li className='  hover:bg-slate-200 w-full'>
            <Link href='#'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <SocialLinks />
      <div className='w-[24%]'>
        <h3 className='mb-[20px] font-bold text-sm uppercase'>Top Games</h3>
        <ul className='flex flex-col gap-2 text-sm list-disc'>
          {data.map((elem) => {
            return (
              <li className=' hover:bg-slate-200 w-full' key={elem.title}>
                <Link href='#'>
                  {elem.title}
                  <span className='text-[#999] ml-1'>{elem.category}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='w-[24%]'>
        <h3 className='mb-[20px] font-bold text-sm uppercase'>Top Games</h3>
        <ul className='flex flex-col gap-2 text-sm list-disc'>
          {data.map((elem) => {
            return (
              <li className=' hover:bg-slate-100 w-full' key={elem.title}>
                <Link href='#'>
                  {elem.title}
                  <span className='text-[#999] ml-1'>{elem.category}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Links;
const data = [
  {
    title: "Miga Town My World",
    category: "Unlocked All",
  },
  {
    title: "Grand Theft Auto Vice City",
    category: "Unlimited...",
  },
  {
    title: "ملكة الموضة لعبة قصص و تمثيل",
    category: "Unlimited...",
  },
  {
    title: "GTA5",
  },
  {
    title: "Grand Theft Auto: San Andreas",
    category: "Mod...",
  },
  {
    title: "Minecraft Full",
    category: "content available",
  },
  {
    title: " Minecraft",
    category: "Mod Menu",
  },
  {
    title: "Brawl Stars",
    category: "Unlimited Money",
  },
  {
    title: "Car Parking Multiplayer",
    category: "Mod Menu",
  },
  {
    title: "Good Pizza Great Pizza",
    category: "Mod Menu",
  },
];
