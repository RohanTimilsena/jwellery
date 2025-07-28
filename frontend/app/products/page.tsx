"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Iproduct {
  _id: string;
  name: string;
  description: string;
  previousPrice: number;
  currentPrice: number;
  rating: number;
  category: string;
  imageUrl: string;
}

export default function ProductsPage() {
  const [products, setProduct] = useState<Iproduct[]>([]);

  // fetch all Product Function
  const fetchAllProduct = async () => {
    try {
      const response = await axios.get(
        "https://jwellery-f68r.onrender.com/api/products"
      );
      setProduct(response?.data?.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div className="w-11/12 max-w-7xl mx-auto mt-10 mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products?.map((product: Iproduct, index: number) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.imageUrl}
                alt="product-image"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg font-medium mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <div className="text-sm flex justify-between items-center">
              <div>
                <p className="line-through text-gray-400">₹{product.previousPrice}</p>
                <p className="text-green-600 font-semibold">₹{product.currentPrice}</p>
              </div>
              <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md text-xs font-medium">
                ⭐ {product.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
