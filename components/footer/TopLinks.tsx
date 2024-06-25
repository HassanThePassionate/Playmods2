import Link from "next/link";

const TopLinks = () => {
  return (
    <div>
      <ul className='flex flex-wrap list'>
        <h4 className='text-sm font-bold mr-[44px] mb-[15px]'>
          Friendly Links:
        </h4>
        {data.map((elem) => {
          return (
            <li
              className='hover:underline mr-[44px] mb-[10px]'
              key={elem.title}
            >
              <Link href='#'>{elem.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopLinks;
const data = [
  {
    title: "Garena Free Fire MAX Mod Menu",
  },
  {
    title: "Royal Match MOD APK",
  },
  {
    title: "Candy Crush Saga Mod Apk",
  },
  {
    title: "Melon Playground Mods",
  },
  {
    title: "Subway Surfers Mod Apk",
  },
  {
    title: "Roblox Mod Apk",
  },
  {
    title: "Jenny MOD",
  },
  {
    title: " Survivor!.io",
  },
  {
    title: "Terraria Mod Apk",
  },
  {
    title: "Carx Drift Racing 2 Mod Apk",
  },
  {
    title: "Komikindo - Komiku Indonesia",
  },
  {
    title: " Need For Speed",
  },
];
