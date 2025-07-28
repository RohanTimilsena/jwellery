"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface ICategory {
  _id: string;
  name: string;
  imageUrl: string;
}

export default function CategorySection() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://jwellery-f68r.onrender.com/api/category"
      );
      setCategories(response?.data?.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <section className="mt-20 px-4 md:px-8 bg-gray-50  ">
      <h2 className="text-3xl font-semibold text-center mb-12 pt-8">Explore Category</h2>
      <div className="max-w-7xl mx-auto     grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => (
          <div key={index} className="space-y-4 text-center bg-gray-100  p-3">
            <Image
              src={category?.imageUrl}
              alt={category.name}
              width={150}
              height={100}
              className="w-full h-[250px] object-cover rounded-xl shadow-md"
            />
            <p className="text-lg font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
