import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Heading from "./Heading";
interface HistoryVersionProps {
  title: string;
}
const HistoryVersion = ({ title }: HistoryVersionProps) => {
  return (
    <div className='max-w-[1140px] mx-auto my-10'>
      <Card>
        <Heading />
        <CardContent>
          <div className='grid grid-cols-2 gap-10'>
            <Link
              href='#'
              className='bg-[#F9FBFD] border rounded-lg hover:text-blue-600   p-5 mt-5 flex flex-col'
            >
              <h3 className='mb-4 text-sm font-bold'>{title} v1.0 Mod Apk</h3>
              <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center mt-1'>
                  <div>573.7MB</div>
                  <div className='w-[1px] h-[10px] bg-[#97979e] mx-[10px] '></div>
                  <div>2024-05-11</div>
                </div>
                <div>
                  <Link
                    href='#'
                    className='bg-[#5342f6] h-[36px]  flex items-center justify-center px-[15px] rounded-full text-white'
                  >
                    Download
                  </Link>
                </div>
              </div>
            </Link>
            <div></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryVersion;
