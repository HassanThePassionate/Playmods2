import Image from "next/image";
import Link from "next/link";

const SideLinks = () => {
  return (
    <div className='fixed top-[50%] right-0 bg-white -translate-y-[50%]'>
      <div>
        {data.map((links) => {
          return (
            <Link
              href='#'
              key={links.img}
              className='flex justify-center px-[22px] py-4 w-full hover:bg-[#f6f6f6] hover:scale-110'
            >
              <Image
                src={links.img}
                alt='img'
                width={40}
                height={40}
                className='h-[40px] w-[40px]'
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideLinks;
const data = [
  {
    img: "https://qn-resource.playmods.net/html/2024061901/static/www/images/exclusive/include/Facebook.png",
  },
  {
    img: "https://qn-resource.playmods.net/html/2024061901/static/www/images/exclusive/include/Twitter.png",
  },
  {
    img: "https://qn-resource.playmods.net/html/2024061901/static/www/images/exclusive/include/reddit.png",
  },
  {
    img: "https://qn-resource.playmods.net/html/2024061901/static/www/images/exclusive/include/G-Mail.png",
  },
  {
    img: "https://qn-resource.playmods.net/html/2024061901/static/www/images/exclusive/include/tumblr.png",
  },
];
