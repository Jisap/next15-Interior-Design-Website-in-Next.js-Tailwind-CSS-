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
      <div className="relative h-[60vh] mt-24 overflow-hidden flex items-center justify-center">
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
          <h1 className="text-white ml-4 md:ml-6 text-[3rem] md:text-[5rem] font-bricolage z-20">
            {property.title}
          </h1>
        </div>
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

                <p className="text-lg text-gray-600 mb-1 leading-relaxed">
                  {property.desc}
                </p>
              </div>

              <span className="text-3xl pe-6 font-semibold text-shadow-gray-800">
                {property.price}
              </span>
            </div>

            <div className="mb-6 mt-3 space-y-1 text-gray-700 font-medium flex flex-wrap gap-x-5 gap-y-3">
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">2200 Sq. Ft</span>
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Location:</span> USA
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Design by:</span> Jhon Doe
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Client:</span> Jay Smith
              </p>
            </div>

            <p className="mt-3 font-bricolage text-gray-700">
              A cozy and modern home designed for comfortable living, Properties 3 combines practical layout
              with stylesh details. Perfect for those seeking a peaceful and affordable residence.
            </p>
            <p className="mt-3 font-bricolage text-gray-700">
              This charming property offers a bright and inviting space, ideal for a growing family or anyone
              looking for. Experience comfort and convenience in a beatiful setting.
            </p>
          </div>
        </div>
      </div>  
    
      <div className="px-[8%] lg:px-[12%] py-16">

      </div>
    </>
  )
}

export default PropertyDetails
