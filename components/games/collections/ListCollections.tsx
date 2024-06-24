import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DataProps {
  data: Array<{
    img: string;
    title: string;
  }>;
}

const ListCollections: React.FC<DataProps> = ({ data }) => {
  return (
    <div className="flex justify-between flex-wrap gap-y-[30px]">
      {data.map((elem) => (
        <Link
          href="#"
          key={elem.img}
          className="flex flex-col gap-1 hover:text-blue-600  "
        >
          <Image
            src={elem.img}
            alt={elem.title}
            height={147}
            width={239}
            className="rounded-[12px]"
          />
          <h3 className="text-sm font-semibold my-3 text-start">
            {elem.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

const data = [
  {
    img: "https://qn-resource.playmods.net/prd/159/20240517/2354e849-7b06-4011-8147-0e0ce61bfc16.png-topicwebp",
    title: "Sales rise simulation game",
  },
  {
    img: "https://qn-resource.playmods.net/prd/159/20240517/77397bb6-e03d-4597-94a9-0e29b2722851.png-topicwebp",
    title: "Collection of recent popular new games",
  },
  {
    img: "https://qn-resource.playmods.net/prd/159/20240312/94a9340c-7684-4e00-bab9-4b6ee8af2ceb.png-topicwebp",
    title: "Papa's game series collection",
  },
  {
    img: "https://qn-resource.playmods.net/prd/image/0e937940-8fb5-052a-dbc7-c4e3bef059ed.jpg-topicwebp",
    title: "Garry's Mod",
  },
  {
    img: "https://qn-resource.playmods.net/prd/image/f4b37eda-8774-a519-d650-1bb957c50447.jpg-topicwebp",
    title: "Avatar World",
  },
  {
    img: "https://qn-resource.playmods.net/prd/image/366e6470-7c94-cec7-9d14-3804c20fc2cd.jpg-topicwebp",
    title: "Rusty Lake collection",
  },
];

const ListCollectionss = () => {
  return <ListCollections data={data} />;
};

export default ListCollectionss;
