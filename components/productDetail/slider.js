"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

export default function Slider({ sliders }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-h-3 aspect-w-2 ">
              <Image
                fill
                sizes="100 vw"
                src={slider.url}
                alt={slider.alt}
                className="block h-full w-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
