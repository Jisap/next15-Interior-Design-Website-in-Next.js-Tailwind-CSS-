"use client"

import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"
import { testimonials } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const testimonialsEl = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([".testimonial-header", ".testimonial-swiper"], { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testimonialsEl.current,
          start: "top 70%",
          toggleActions: "restart none none reset",
        }
      });

      tl.to(".testimonial-header", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }).to(".testimonial-swiper", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.7");

    }, testimonialsEl);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={testimonialsEl} className="px-[8%] lg:px-[12%] py-20 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
        <div className="lg:w-1/2 testimonial-header">
          <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-7xl lg:leading-none font-bricolage font-bold">
            Client <br /> Testimonials
          </h1>
        </div>

        <div className="lg:w-2/5 testimonial-header">
          <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
          <p className="text-gray-600">
            Discover how our thoughtful process transforms ideas into personalized, functional, and beautifully styled spaces.
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
        className="w-full !pb-12 testimonial-swiper"
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
