import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div>
      <div className="w-[24%]">
        <h3 className="mb-[20px] font-bold text-sm uppercase">FOLLOW US</h3>
        <ul className="flex flex-col gap-3 text-sm ">
          {data.map((elem) => {
            return (
              <li key={elem.img}>
                <Link href="#" className="flex items-center gap-2">
                  <Image src={elem.img} alt="icon" height={27} width={27} />
                  <span>{elem.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
const data = [
  {
    img: "https://qn-resource.playmods.net/dev/image/5f23e70c-bdf3-3f53-5b95-e0d081e935d3.png",
    title: "Youtube",
  },
  {
    img: "https://qn-resource.playmods.net/dev/image/57a2e305-7762-bc55-77e2-bf87281455f9.png",
    title: "Tiktok",
  },
  {
    img: "https://qn-resource.playmods.net/dev/image/b295a25d-24e1-c52e-2ce2-c9692cc97cac.png",
    title: "Telegram",
  },
  {
    img: "https://qn-resource.playmods.net/prd/image/960f3210-e1f8-ef83-d1ba-8e0fe2f0286e.jpg",
    title: "Discord",
  },
  {
    img: "https://qn-resource.playmods.net/dev/image/1e774512-2aae-e620-c712-27d4e6160f9e.png",
    title: "Instagram",
  },
  {
    img: "https://qn-resource.playmods.net/dev/image/f821de20-319d-5508-346e-65ffdc3e8046.png",
    title: "Twitter",
  },
];
