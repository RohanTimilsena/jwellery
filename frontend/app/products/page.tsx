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
    <div className=" w-9/12 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 mb-12">
      {products?.map((product: Iproduct, index: number) => (
        <div key={index}>
          <Image
            src={product.imageUrl}
            width={200}
            height={200}
            alt="product-image"
          />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.previousPrice}</p>
          <p>{product.currentPrice}</p>
          <p>{product.rating}</p>
        </div>
      ))}
    </div>
  );
}
