import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
const Trending = () => {
  return (
    <div>
      <h2 className='font-semibold mb-4'>Top Trends</h2>
      {data.map((elem) => {
        return (
          <div key={elem.title} className='mb-3'>
            <Link href='#' className='text-sm'>
              {elem.title}
            </Link>
            <div className='flex items-center gap-2 cursor-pointer text-[#999] hover:text-[#5342F6]'>
              <FaArrowTrendUp size={12} />
              <span className='text-[12px] '>{elem.downloads} Downloads</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Trending;
const data = [
  {
    title: "Toca Life World Download PC",
    downloads: "230988",
  },
  {
    title: "Chicken World",
    downloads: "254488",
  },
  {
    title: "My Town World Download Android",
    downloads: "230098",
  },
  {
    title: "Signal Strength Download Android",
    downloads: "200998",
  },
  {
    title: "Faded Icon Pack Download PC",
    downloads: "200023",
  },
  {
    title: "App Manager Download Android",
    downloads: "540988",
  },
  {
    title: "Signal Strength Download Android",
    downloads: "200998",
  },
  {
    title: "Faded Icon Pack Download PC",
    downloads: "200023",
  },
  {
    title: "App Manager Download Android",
    downloads: "540988",
  },
];
