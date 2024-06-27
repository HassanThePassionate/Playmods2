import data from "@/constant/AppsData";
import { Badge } from "../ui/badge";
import { RiApps2Line } from "react-icons/ri";
import Link from "next/link";
const TopApps = () => {
  return (
    <div>
      <div className='mb-6 font-semibold flex items-center gap-3'>
        <span>
          <RiApps2Line />
        </span>
        <h2>Apps Catagory</h2>
      </div>
      <ul className='flex flex-wrap gap-y-3 gap-x-4 '>
        {data.map((elem) => {
          return (
            <li key={elem.id}>
              <Link href='#'>
                <Badge
                  variant={"outline"}
                  className='text-[14px] pr-[15px] pl-[12px] hover:bg-[#fbfbfb] min-h-[36px] '
                >
                  {elem.catagory.sub}
                </Badge>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopApps;
