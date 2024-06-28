import AppsCategory from "@/components/category/AppsCategory";
import GamesCategory from "@/components/category/GamesCategory";
import AppsResults from "@/components/search/AppsResult";
import { Card, CardContent } from "@/components/ui/card";

export default function Result() {
  return (
    <div className='flex gap-x-3 mt-4'>
      <div className='h-full w-[326px] '>
        <Card className=' overflow-hidden'>
          <CardContent className='h-full  w-full p-0'>
            <AppsCategory white={false} black={true} />
          </CardContent>
        </Card>
      </div>
      <div className=' w-[804px] '>
        <AppsResults />
      </div>
    </div>
  );
}
