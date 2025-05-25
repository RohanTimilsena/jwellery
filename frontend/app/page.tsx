"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import CategorySection from "@/components/CategorySection ";

interface IBanner {
  _id: string;
  imageUrl: string;
}

export default function page() {
  const [banners, setBanners] = useState<IBanner[]>([]);

  // fetch all banners from server
  const fetchAllBanner = async () => {
    try {
      const allBanner = await axios.get(
        "https://jwellery-f68r.onrender.com/api/banner"
      );
      setBanners(allBanner?.data?.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchAllBanner();
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {banners?.map((banner: IBanner, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={banner.imageUrl}
                height={100}
                width={200}
                alt="banner-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <CategorySection />
    </div>
  );
}
