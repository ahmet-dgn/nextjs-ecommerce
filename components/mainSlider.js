"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
export default function MainSlider({ sliders }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
      >
        {sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full ${slider.bgColor} relative isolate`}>
              <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-8  relative">
                <Link href={slider.url}>
                  <Image
                    width={1280}
                    height={750}
                    src={slider.image}
                    alt={slider.alt}
                    className="w-full rounded-lg border-white border-4"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
