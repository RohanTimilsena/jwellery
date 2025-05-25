"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full mb-12">
      {/* Top bar */}
      <div className="bg-black ">
        <div className="w-8/12 mx-auto  text-white py-2.5 px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              <span>Free Delivery</span>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>Returns Policy</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-1">
                <span>Follow Us</span>
                <div className="flex items-center space-x-2 ml-2">
                  <Link href="#" className="text-white hover:text-gray-300">
                    <Facebook size={16} />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300">
                    <Twitter size={16} />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300">
                    <Instagram size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
      {/* Main header */}
      <div className=" w-8/12 mx-auto py-4 px-4 flex justify-between items-center border-b border-gray-200">
        {/* Search */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-3 pr-10 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search size={20} />
          </button>
        </div>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <div className="w-16 h-16 relative mb-1">
            <div className="absolute inset-0 border-2 border-gray-400 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">M</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-widest text-gray-800">
            MARKETO
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="relative">
            <Heart size={30} className="stroke-1 " />
            <span className="absolute -top-2 -right-2 bg-gray-200 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="relative">
            <ShoppingBag size={30} className=" stroke-1" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
      {/* Navigation */}
      <nav className="  w-8/12 mx-auto flex  items-center px-4 py-3 gap-30 cursor-pointer ">
        <div className="flex items-center mr-8">
          <Menu className="w-5 h-5 mr-2" />
          <span className="font-medium ">All Categories</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>
        <div className="hidden md:flex   space-x-8">
          <Link href="/" className=" text-sm  opacity-95 hover:text-blue-400">
            HOME
          </Link>
          <Link
            href="/about"
            className=" text-sm opacity-95 hover:text-blue-400"
          >
            ABOUT
          </Link>

          <Link
            href="/contact"
            className=" text-sm opacity-95 hover:text-blue-400"
          >
            CONTACT
          </Link>

          <Link
            href="/products"
            className=" text-sm opacity-95 hover:text-blue-400"
          >
            PRODUCTS
          </Link>
          <Link
            href="/blog"
            className=" text-sm opacity-95 hover:text-blue-400"
          >
            BLOG
          </Link>

          <Link
            href="/gallery"
            className="text-sm opacity-95 hover:text-blue-400"
          >
            GALLERY
          </Link>



          <Link
            href="/dashboard"
            className="text-sm opacity-95 hover:text-blue-400"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
