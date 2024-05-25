"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider({ sliders }) {
  return (
    <>
      <Swiper navigation>
        {sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-h-3 aspect-w-2">
              <Image
                fill
                sizes="100 vw"
                src={slider.url}
                alt={slider.alt}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
