"use client"

import { use } from "react"
import PropertyData from "@/app/jsonData/property.json"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'

const PropertyDetails = ({ params }) => {

  const { id } = use(params);
  console.log(id);
  const property = PropertyData.find(property => property.id === parseInt(id));
  console.log(property);
  if (!property) {
    notFound();
  }

  const relatedProperties = PropertyData.filter(item => item.id !== property.id && item.location === property.location);

  return (
    <>
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/page-title.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10">
          <h1 className="text-white text-[3rem] md:text-[5rem] font-bricolage z-20">
            {property.title}
          </h1>
        </div>

        <div className="px-[8%] lg:px-[12%] py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 font-bricolage mb-2">
                    {property.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyDetails
