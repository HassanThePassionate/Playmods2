import GamesCategory from "@/components/category/GamesCategory";
import GamesResults from "@/components/search/GamesResult";
import { Card, CardContent } from "@/components/ui/card";

export default function Game() {
  return (
    <div>
      <div className='flex gap-x-3 mt-4'>
        <div className='h-full w-[326px] '>
          <Card className=' overflow-hidden'>
            <CardContent className='h-full  w-full p-0'>
              <GamesCategory white={true} black={false} />
            </CardContent>
          </Card>
        </div>
        <div className=' w-[804px] '>
          <GamesResults />
        </div>
      </div>
    </div>
  );
}
