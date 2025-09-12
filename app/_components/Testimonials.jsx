import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCards, EffectFade, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-cards"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import Image from "next/image"
import { testimonials } from "../constants"


import React from 'react'

const Testimonials = () => {
  return (
    <section className="px-[8%] lg:px-[12%] py-20 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-7xl lg:leading-none font-bricolage font-bold">
            Client <br /> Testimonials
          </h1>
        </div>

        <div className="lg:w-2/5">
          <h3 className="text-xl font-semibold mb-2">
            Testimonials
          </h3>

          <p className="text-gray-600">
            Discover how oir thoughtful process transforms ideas into personalized, functional, and beatifully styled spaces.
          </p>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full !pb-12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
              <div>
                <Image
                  src="/quote.svg"
                  alt="quote icon"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain mb-4 opacity-25"
                />
                <p className="text-gray-700 mb-6 text-lg italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center mt-auto">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials

