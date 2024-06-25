import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import CommentHeading from "./CommentHeading";
const CommentBox = () => {
  return (
    <div className='max-w-[1140px] mx-auto my-10'>
      <Card>
        <CommentHeading />
        <CardContent>
          <div className='flex items-center justify-center flex-col my-[80px] gap-2'>
            <Image
              src='https://qn-resource.playmods.net/html/2024061901/static/www/images/review-empty.png'
              alt='img'
              height={171}
              width={307}
            />
            <span>No Content</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentBox;
