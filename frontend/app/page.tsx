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

export default function Page() {
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
    <div className="w-9/12 mx-auto ">
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper  "
        >
          {banners?.map((banner: IBanner, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={banner.imageUrl}

                height={300}
                width={600}
                alt="banner-image"
                className="h-[650px] w-full object-cover rounded-lg shadow-md   "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>


      <CategorySection />
    </div>
  );
}
