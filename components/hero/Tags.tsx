import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Tags = () => {
  return (
    <div className="pt-5">
      {data.map((data) => {
        return (
          <Link href="#" key={data.title}>
            <Badge
              variant="secondary"
              className="px-[26px] hover:bg-[#e0dede] h-[32px] font-normal text-sm mr-[8px] mb-[14px]"
            >
              {data.title}
            </Badge>
          </Link>
        );
      })}
    </div>
  );
};

export default Tags;
const data = [
  {
    title: "Fanstay Cultvating",
  },
  {
    title: "亂鬥三國",
  },
  {
    title: "Ice Scream 8: Final Chapter",
  },
  {
    title: "GTA: Vice City",
  },
  {
    title: "GTA III",
  },
  {
    title: "Little Nightmares",
  },
  {
    title: "Goat Simulator 3",
  },
  {
    title: "VPN",
  },
  {
    title: "Kingdom Eighties",
  },
  {
    title: "Gacha Life 2",
  },
];
