"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}
        className='mySwiper'
        spaceBetween={15}
        style={{
          margin: "30px 24px 15px",
        }}
      >
        <SwiperSlide className='swiper_slide'>
          <Image
            src='https://qn-resource.playmods.net/prd/image/0c941fa7-e9da-494e-b30d-4dc6ee3ee2eb.png-subjectDetailwebp'
            alt='img'
            height={378}
            width={672}
          />
        </SwiperSlide>
        <SwiperSlide className='swiper_slide'>
          <Image
            src='https://qn-resource.playmods.net/prd/image/c8c7129e-0bed-4d83-adda-f220a5c3f15f.png-subjectDetailwebp'
            alt='img'
            height={378}
            width={672}
          />
        </SwiperSlide>
        <SwiperSlide className='swiper_slide'>
          <Image
            src='https://qn-resource.playmods.net/prd/image/884d7e78-df39-4f47-b1e7-47e3e889fa82.png-subjectDetailwebp'
            alt='img'
            height={378}
            width={672}
          />
        </SwiperSlide>
        <SwiperSlide className='swiper_slide'>
          <Image
            src='https://qn-resource.playmods.net/prd/image/7ccf1b18-271f-4ad5-92ef-a7d8734352b0.png-subjectDetailwebp'
            alt='img'
            height={378}
            width={672}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='https://qn-resource.playmods.net/prd/image/689d843a-4fe6-465e-9631-6f0d8a538e2e.png-subjectDetailwebp'
            alt='img'
            height={378}
            width={672}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
