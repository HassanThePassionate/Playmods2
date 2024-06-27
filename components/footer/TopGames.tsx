import { Gamepad2 } from "lucide-react";
import data from "@/constant/gamesData";
import { Badge } from "../ui/badge";
import Link from "next/link";
const TopGames = () => {
  return (
    <div>
      <div className='mb-6 font-semibold flex items-center gap-3'>
        <span>
          <Gamepad2 />
        </span>
        <h2>Games Catagory</h2>
      </div>
      <ul className='flex flex-wrap gap-y-3 gap-x-4 '>
        {data.map((elem) => {
          return (
            <li key={elem.id}>
              <Link href='#'>
                <Badge
                  variant={"outline"}
                  className='text-[14px] pr-[15px] pl-[12px] hover:bg-[#fbfbfb]'
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

export default TopGames;
