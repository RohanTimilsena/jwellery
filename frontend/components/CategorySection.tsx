"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";


interface ICategory {
  _id: string;
  name: string;
  imageUrl: string;
}

export default function CategorySection() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  // fetch all categories function
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
    

    <div>
      <p className="text-3xl font-medium mb-12 text-center">Explor Category</p>
      <div className="w-10/12 mx-auto mt-20 grid grid-cols-4 items-center space-x-3">
        {categories?.map((category: ICategory, index: number) => (
          <div key={index} className=" space-y-2">
            <img
              src={category.imageUrl}
              alt="category-image"
              width={300}
              height={200}
            />
            <p className="text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
