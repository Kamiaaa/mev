'use client'
import React from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
    {
        image: "/img/product.jpg",
        year: "2025",
        name: "Toyota Crown",
        description: "Elegance meets performance.",
        price: "$41,440",
        mpg: "42/41",
        tag: "Hybrid EV",
    },
    {
        image: "/img/product-02.avif",
        year: "2025",
        name: "Toyota Camry",
        description: "Elegance meets performance.",
        price: "$35,000",
        mpg: "40/38",
        tag: "Battery EV",
    },
    // Add more products as needed
    {
        image: "/img/product.jpg",
        year: "2024",
        name: "Toyota Camry",
        description: "Elegance meets performance.",
        price: "$35,000",
        mpg: "40/38",
        tag: "Hybrid",
    },
    {
        image: "/img/product.jpg",
        year: "2024",
        name: "Toyota Camry",
        description: "Elegance meets performance.",
        price: "$35,000",
        mpg: "40/38",
        tag: "Hybrid",
    },
    {
        image: "/img/product.jpg",
        year: "2024",
        name: "Toyota Camry",
        description: "Elegance meets performance.",
        price: "$35,000",
        mpg: "40/38",
        tag: "Hybrid",
    },
];

export default function Product() {
    return (
        <div className="p-6">
            <h2 className='text-center pb-10'>New Arrivals</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20} // Space between slides
                slidesPerView={1} // Number of slides per view
                navigation // Enable navigation arrows
                pagination={{ clickable: true }}
                autoplay={{ delay: 500 }} // Enable pagination dots

                breakpoints={{
                    // Responsive breakpoints
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}