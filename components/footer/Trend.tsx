import { TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const Trend = () => {
  return (
    <div>
      <div className='flex items-center gap-3 font-semibold mb-6'>
        <span>
          <TrendingUp />
        </span>
        <h2>Top Charts</h2>
      </div>
      <div className='flex flex-col gap-2'>
        {data.map((elem) => {
          return (
            <Link href='#' className='hover:underline' key={elem.title}>
              <h3>{elem.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Trend;
const data = [
  {
    title: "Toca Life World Download PC",
  },
  {
    title: "Chicken World Download Android",
  },
  {
    title: "My Town World Download Android",
  },
  {
    title: "Signal Strength Download Android",
  },
  {
    title: "Faded Icon Pack Download PC",
  },
  {
    title: "App Manager Download Android",
  },
  {
    title: "Signal Strength Download Android",
  },
  {
    title: "Faded Icon Pack Download PC",
  },
  {
    title: "App Manager Download Android",
  },
  {
    title: "Flow Minimalist Launcher",
  },
];
