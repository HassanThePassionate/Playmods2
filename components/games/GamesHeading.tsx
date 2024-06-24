import { ChevronRight } from "lucide-react";
import Link from "next/link";
interface GamesHeadingProps {
  text: string;
}
const GamesHeading = ({ text }: GamesHeadingProps) => {
  return (
    <div className="flex items-center justify-between h-[56px] bg-[#fbfbfb] ">
      <h3 className="text-[18px] relative px-[17px]">{text}</h3>
      <Link href="#" className="px-4 flex items-center text-sm hover:underline">
        more
        <ChevronRight size={14} />
      </Link>
    </div>
  );
};

export default GamesHeading;
