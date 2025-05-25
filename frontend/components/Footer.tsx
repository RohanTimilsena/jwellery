"use client"

import Link from "next/link"
import { MapPin, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full ">
      {/* Country Navigation */}
      <div className="bg-gray-50 py-4 w-8/12 mx-auto">
        <div className="container mx-auto flex flex-wrap justify-center divide-x divide-gray-300">
          <Link href="#" className="px-4 text-gray-700 hover:text-gray-900">
            Canada
          </Link>
          <Link href="#" className="px-4 text-gray-700 hover:text-gray-900">
            United States
          </Link>
          <Link href="#" className="px-4 text-gray-700 hover:text-gray-900">
            Saudi Arabia
          </Link>
          <Link href="#" className="px-4 text-gray-700 hover:text-gray-900">
            United Kingdom
          </Link>
          <Link href="#" className="px-4 text-gray-700 hover:text-gray-900">
            Brazil
          </Link>
          <Link href="#" className="px-4 text-gray-700 hover:text-gray-900">
            Singapore
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white py-16 w-8/12 mx-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-bold">
              Marketo<span className="text-green-500">.</span>
            </div>
            <div>
              <p className="text-gray-500">Got Question? Call us 24/7</p>
              <p className="text-2xl font-semibold text-gray-800">[80] 1017 197</p>
            </div>
            <div className="text-gray-500">
              <p>17 Princess Road, London, Greater London</p>
              <p>NW1 8JR, UK</p>
            </div>
            <button className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-md transition-colors">
              <MapPin size={18} />
              <span>View On Map</span>
            </button>
          </div>

          {/* Safe Payments */}
          <div>
            <h3 className="text-xl font-semibold mb-6">We Using Safe Payments</h3>
            <p className="text-gray-600 mb-4">Secured by:</p>
            {/* Payment icons would go here */}
          </div>

          {/* Our Stores */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Stores</h3>
            <ul className="space-y-3">
              {["New York", "London SF", "Cockfosters BP", "Los Angeles", "Chicago", "Las Vegas", "Albarto"].map(
                (store) => (
                  <li key={store}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      {store}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
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
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-red-500 text-white p-3 flex flex-col items-center justify-center w-14 h-20"
      >
        <ArrowUp size={20} />
      </button>

      {/* Copyright */}
      <div className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>All Rights Reserved ©Copyright 2018 by XpeedStudio.</p>
      </div>
    </footer>
  )
}
