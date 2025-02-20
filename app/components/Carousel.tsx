"use client"; // Ensure this is used if in a Next.js app

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles
import Image from "next/image";

const slides = [
  { id: 1, image: "/img/slide-01.jpg", company: "Electric Cars", title: "Driving the future today!" },
  { id: 2, image: "/img/slide-02.jpg", company: "Two Wheeler Electric Bike", title: "Driving the future today!" },
  { id: 3, image: "/img/slide-03.jpg", company: "Three Wheeler Electric Bike", title: "Driving the future today!" },
  { id: 4, image: "/img/slide-04.jpg", company: "Accessories", title: "Driving the future today!" },
];

const Carousel: React.FC = () => {
  return (
    <div className="h-[500 px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // Enables fade transition
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Delay between slides (3 seconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        loop={true} // Infinite loop
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex justify-center items-center h-[500px] w-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                height={500}
                width={1920}
                className="object-cover w-full h-full"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-4">
                <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">{slide.company}</h1>
                <h3 className="text-lg mt-2">{slide.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
