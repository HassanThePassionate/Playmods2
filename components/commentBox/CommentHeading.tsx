import { PencilLine } from "lucide-react";
import Link from "next/link";

const CommentHeading = () => {
  return (
    <div className='px-6 h-[56px] flex items-center bg-[#fbfbfb] justify-between text-sm '>
      <h2 className='text-[18px]'>Reviews (0)</h2>
      <Link
        href='#'
        className='flex items-center gap-2 text-[#5342F6] hover:underline'
      >
        <PencilLine size={16} color='blue' />
        Write review
      </Link>
    </div>
  );
};

export default CommentHeading;
