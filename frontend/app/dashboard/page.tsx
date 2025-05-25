"use client";

import axios from "axios";
import React, {useState } from "react";
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
      const response = await axios.post(
        "https://jwellery-f68r.onrender.com/api/banner",
        formData
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
      formData.append("imageUrl", categoryFile);
      formData.append("name", categoryName);
      const response = await axios.post(
        "https://jwellery-f68r.onrender.com/api/category",
        formData
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

      const response = await axios.post(
        "https://jwellery-f68r.onrender.com/api/products",
        formData
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

  return (
    <div className="w-9/12 mx-auto mt-12 mb-12 space-y-12">
      {/* banner create card */}
      <form
        onSubmit={createBanner}
        className="flex flex-col gap-4 w-5/12  mx-auto border p-4 border-gray-300 shadow-md"
      >
        <input
          type="file"
          required
          placeholder="Uplode banner file"
          className="border border-gray-200 outline-none"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-sm"
        >
          {bannerCreating ? "Creating..." : "Create Banner"}
        </button>
      </form>

      {/* category create card */}
      <form
        onSubmit={createCategory}
        className="flex flex-col gap-4 w-5/12  mx-auto border p-4 border-gray-300 shadow-md"
      >
        <input
          type="text"
          required
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter Category Name"
          className="border border-gray-200 outline-none"
        />
        <input
          type="file"
          onChange={(e) => setCategoryFile(e.target.files?.[0] || null)}
          placeholder="Select Category Image"
          className="border border-gray-200 outline-none"
        />
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-sm"
        >
          {categoryCreating ? "Creating..." : "Create Category"}
        </button>
      </form>

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
