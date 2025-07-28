"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full mt-10">
      {/* Country Navigation */}
      <div className="flex justify-center  bg-gray-100 py-6">
        {[
          "Canada",
          "United States",
          "Saudi Arabia",
          "United Kingdom",
          "Brazil",
          "Singapore",
        ].map((country, index) => (
          <Link
            key={country}
            href="#"
            className={`px-12 py-3 text-gray-700 hover:text-gray-900 text-sm font-medium text-center ${
              index < 5 ? "border-r border-gray-300" : ""
            }`}
          >
            {country}
          </Link>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="w-9/12 mx-auto py-12 px-4 grid grid-cols-4 gap-8">
        {/* Logo and Contact */}
        <div className="space-y-6">
          <div className="text-3xl font-bold text-gray-800">
            Marketo<span className="text-green-500">.</span>
          </div>

          <div className="space-y-2">
            <p className="text-gray-500">Got Question? Call us 24/7</p>
            <p className="text-xl font-semibold text-gray-800">[80] 1017 197</p>
            <p className="text-gray-500">
              17 Princess Road, London, Greater London
            </p>
            <p className="text-gray-500">NW1 8JR, UK</p>
          </div>

          <button className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-md transition-colors">
            <MapPin size={18} />
            <span>View On Map</span>
          </button>
        </div>

        {/* Safe Payments */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            We Using Safe Payments
          </h3>
          <p className="text-gray-600">Secured by:</p>
          {/* The image doesn't show any payment icons */}
        </div>

        {/* Our Stores */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Our Stores</h3>
          <ul className="space-y-2">
            {[
              "New York",
              "London SF",
              "Cockfosters BP",
              "Los Angeles",
              "Chicago",
              "Las Vegas",
              "Albarto",
            ].map((store) => (
              <li key={store}>
                <Link
                  href="#"
                  className={`text-gray-600 hover:text-gray-900 transition-colors ${
                    store === "Albarto" ? "text-blue-500" : ""
                  }`}
                >
                  {store}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Support Center",
              "Term & Conditions",
              "Shipping",
              "Privacy Policy",
              "Help",
              "Products Return",
              "FAQS",
            ].map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className=" ml-30 -mt-40 bg-red-500 hover:bg-gray-800 text-white py-3 px-14  rounded-md flex items-center -rotate-90"
            // style={{ writingMode: "vertical-rl", textOrientation: "mixed", height: "180px" }}
          >
            <span className="text-xs tracking-wider">BACK TOP</span>
            <ArrowRight className="ml-2" size={26} />
          </button>
        </div>
      </div>

      {/* Copyright Footer */}

      <div className=" bg-gray-800 text-gray-400 py-6 px-4 text-sm">
        <p className="ml-46">
          All Rights Reserved ©Copyright 2018 by XpeedStudio.
        </p>
      </div>

      {/* Back to Top Button */}
    </div>
  );
}
