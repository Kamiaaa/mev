import Image from 'next/image';
import React from 'react';

interface Product {
    image: string;
    year: string;
    name: string;
    description: string;
    price: string;
    mpg: string;
    tag?: string; // Optional tag
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { image, year, name, description, price, mpg, tag } = product;

    return (
        <div className="max-w-lg text-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2">
                <Image src={image} height={500} width={500} alt={name} className="w-full h-full" />
                {tag && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                        {tag}
                    </span>
                )}
            </div>

            <div className="w-full md:w-1/2 p-6 bg-gray-900">
                <p className="text-sm text-gray-300">{year}</p>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-sm text-gray-400 my-2">{description}</p>

                <div className="flex items-center justify-between text-lg font-semibold">
                    <div>
                        <p>{price}</p>
                        <p className="text-xs text-gray-400">Starting MSRP *</p>
                    </div>
                    <div>
                        <p>{mpg}</p>
                        <p className="text-xs text-gray-400">Up to Est. MPG *</p>
                    </div>
                </div>

                <div className="mt-4 flex space-x-2">
                    <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                        Explore
                    </button>
                    {/* <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold">Build</button> */}
                </div>
            </div>
        </div>
    );
}