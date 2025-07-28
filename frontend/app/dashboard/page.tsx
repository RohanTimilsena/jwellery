"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DashboardPage() {
  // For Banner
  const [file, setFile] = useState<File | null>(null);
  const [bannerCreating, setBannerCreating] = useState<boolean>(false);
  const createBanner = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setBannerCreating(true);
      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append("imageUrl", file);
      const mytoken = localStorage.getItem("token");
      const response = await axios.post(
        "https://jwellery-f68r.onrender.com/api/banner",
        formData,
        {
          headers: {
            authorization: `Bearer ${mytoken}`,
          },
        }
      );
      console.log(response);
      toast.success("Banner Created Successfully");
      setBannerCreating(false);
    } catch (error) {
      setBannerCreating(false);
      toast.error("Something went wrong");
      console.log("Something went wrong", error);
    }
  };

  // For Category
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryFile, setCategoryFile] = useState<File | null>(null);
  const [categoryCreating, setCategoryCreating] = useState<boolean>(false);

  const createCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setCategoryCreating(true);
      if (!categoryFile) {
        return;
      }

      const formData = new FormData();
      formData.append("name", categoryName);
      formData.append("imageUrl", categoryFile);
      const mytoken = localStorage.getItem("token");
      const response = await axios.post(
        "https://jwellery-f68r.onrender.com/api/category",
        formData,
        {
          headers: {
            authorization: `Bearer ${mytoken}`,
          },
        }
      );
      console.log(response);
      toast.success("Category Created Successfully");
      setCategoryCreating(false);
    } catch (error) {
      setCategoryCreating(false);
      toast.error("Something went wrong");
      console.log("Something went wrong", error);
    }
  };

  // For Product
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [previousPrice, setPreviousPrice] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [productFile, setProductFile] = useState<File | null>(null);

  const [productCreating, setproductCreating] = useState<boolean>(false);

  const createProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setproductCreating(true);
      if (!productFile) {
        return;
      }

      const formData = new FormData();
      formData.append("name", productName);
      formData.append("description", description);
      formData.append("rating", String(rating));
      formData.append("previousPrice", String(previousPrice));
      formData.append("currentPrice", String(currentPrice));
      formData.append("category", category);
      formData.append("imageUrl", productFile);

      const mytoken = localStorage.getItem("token");

      const response = await axios.post(
        "https://jwellery-f68r.onrender.com/api/products",
        formData,
        {
          headers: {
            authorization: `Bearer ${mytoken}`,
          },
        }
      );
      console.log(response);
      toast.success("Product Created Successfully");
      setproductCreating(false);
    } catch (error) {
      setproductCreating(false);
      toast.error("Something went wrong");
      console.log("Something went wrong", error);
    }
  };

  interface IBanner {
    _id: string;
    imageUrl: string;
  }

  // fetch all banners
  const [banner, setBanner] = useState<IBanner[]>([]);

  const fetchBanners = async () => {
    try {
      const response = await axios.get(
        "https://jwellery-f68r.onrender.com/api/banner"
      );
      setBanner(response?.data?.data);
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const deleteBanner = async (_id: string) => {
    try {
      const mytoken = localStorage.getItem("token");
      await axios.delete(
        `https://jwellery-f68r.onrender.com/api/banner/${_id}`,
        {
          headers: {
            authorization: `Bearer ${mytoken}`,
          },
        }
      );

      toast.success("Banner deleted successfully");
       fetchBanners();
    } catch (error) {
      toast.error("Something went wrong while deleting the banner");
      console.log("Something went wrong", error);
    }
  };

  // category

  interface ICategory {
    _id: string;
    imageUrl: string;
    name: string;
  }

  // fetch all Categories
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchAllCategory = async () => {
    try {
      const response = await axios.get(
        "https://jwellery-f68r.onrender.com/api/category"
      );
      setCategories(response?.data?.data);
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  const deleteCategory = async (_id: string) => {
    try {
      const mytoken = localStorage.getItem("token");
      const response = await axios.delete(
        `https://jwellery-f68r.onrender.com/api/category/${_id}`,
        {
          headers: {
            authorization: `Bearer ${mytoken}`,
          },
        }
      );
      console.log(response);
      toast.success("Category deleted successfully");
       fetchAllCategory();
    } catch (error) {
      toast.error("Something went wrong while deleting the banner");
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="w-9/12 mx-auto mt-12 mb-12 space-y-12 bg-pink-50 pt-30">
      {/* banner create card */}
      <form
        onSubmit={createBanner}
        className="flex flex-col gap-4 w-5/12  mx-auto border p-4 border-gray-300 shadow-md"
      >
        <input
          type="file"
          required
          placeholder="Uplode banner file"
          className="border border-gray-200 outline-none py-1 px-2"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-sm"
        >
          {bannerCreating ? "Creating..." : "Create Banner"}
        </button>
      </form>

      <div className="w-11/12 max-w-6xl mx-auto p-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white shadow-lg rounded-xl">
        {banner?.map((banner, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <p className=" text-xl font-bold text-gray-800 mb-2">
              {" "}
              Banner {index + 1}{" "}
            </p>
            <p className="text-sm text-gray-700 font-medium">{banner._id}</p>

            <Image
              src={banner?.imageUrl}
              alt="banner-image"
              width={150}
              height={100}
              className="rounded-md object-cover h-24 w-full mt-4 "
            />
            <button
              onClick={() => deleteBanner(banner._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded mt-5 cursor-pointer transition duration-200 shadow-sm  "
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* category create card */}
      <form
        onSubmit={createCategory}
        className="flex flex-col gap-4 w-5/12  mx-auto border p-4 border-gray-300 shadow-md mt-16"
      >
        <input
          type="text"
          required
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter Category Name"
          className="border border-gray-200 outline-none py-1 px-2"
        />
        <input
          type="file"
          onChange={(e) => setCategoryFile(e.target.files?.[0] || null)}
          placeholder="Select Category Image"
          className="border border-gray-200 outline-none py-1 px-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-sm"
        >
          {categoryCreating ? "Creating..." : "Create Category"}
        </button>
      </form>

      <div className="w-11/12 max-w-6xl mx-auto p-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white shadow-lg rounded-xl">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <p className="text-xl font-bold text-gray-800 mb-2">
              Category {index + 1}
            </p>
            <p className="text-sm text-gray-600">{category._id}</p>
            <p className="text-sm text-gray-700 font-medium">{category.name}</p>
            <Image
              src={category.imageUrl}
              alt={`Category ${index + 1}`}
              width={150}
              height={100}
              className="rounded-md object-cover h-50 w-full mt-4"
            />
            <button
              onClick={() => deleteCategory(category._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded mt-5 cursor-pointer transition duration-200 shadow-sm    "
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* product create card */}
      <form
        onSubmit={createProduct}
        className="flex flex-col gap-4 w-5/12  mx-auto border p-4 border-gray-300 shadow-md"
      >
        <input
          required
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Enter Product Name"
          className="border border-gray-200 outline-none"
        />

        <input
          required
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Product Description"
          className="border border-gray-200 outline-none"
        />

        <input
          required
          onChange={(e) => setRating(e.target.valueAsNumber)}
          type="number"
          placeholder="Enter Product Rating"
          className="border border-gray-200 outline-none"
        />

        <input
          required
          onChange={(e) => setPreviousPrice(e.target.valueAsNumber)}
          type="number"
          placeholder="Enter Product Previous  Price"
          className="border border-gray-200 outline-none"
        />

        <input
          required
          onChange={(e) => setCurrentPrice(e.target.valueAsNumber)}
          type="number"
          placeholder="Enter Producr Current  Price"
          className="border border-gray-200 outline-none"
        />

        <input
          required
          onChange={(e) => setCategory(e.target.value)}
          type="string"
          placeholder="Enter Product  Category"
          className="border border-gray-200 outline-none"
        />

        <input
          onChange={(e) => setProductFile(e.target.files?.[0] || null)}
          type="file"
          placeholder="Select Product Image"
          className="border border-gray-200 outline-none"
        />
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-sm"
        >
          {productCreating ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
