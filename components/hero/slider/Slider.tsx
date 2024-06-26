"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className='mb-4'>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className='mySwiper'
      >
        {data.map((elem) => {
          return (
            <SwiperSlide key={elem.img}>
              <Image
                src={elem.img}
                alt='img'
                height={416}
                width={804}
                className='h-[416px] w-[804px] '
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Sidebar;
const data = [
  {
    img: "https://qn-resource.playmods.net/prd/159/20240619/3a9f3d9e-c359-457e-b42a-2f93ef17dde0.png-shouyetuwebp",
  },
  {
    img: "https://qn-resource.playmods.net/prd/159/20240620/3a9885b5-7a34-4416-972a-71cfdc79ca93.jpg-shouyetuwebp",
  },
  {
    img: "https://qn-resource.playmods.net/prd/159/20240619/485bd01b-ec51-45bf-be51-0a9bff11f7fc.png-shouyetuwebp",
  },
  {
    img: "https://qn-resource.playmods.net/prd/159/20240619/4bf12bc0-fd66-4ad9-ac0d-a2069080ade2.png-shouyetuwebp",
  },
  {
    img: "https://qn-resource.playmods.net/prd/159/20240619/d68ce2ab-98b4-44e5-b2a4-626daf422b84.png-shouyetuwebp",
  },
];
