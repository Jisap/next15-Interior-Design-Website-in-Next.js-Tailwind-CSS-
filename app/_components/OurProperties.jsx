"use client"

import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import PropertyData from "@/app/jsonData/property.json"
import Link from "next/link"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const OurProperties = () => {
  const propertiesEl = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([".header-anim", ".swiper-anim", ".nav-anim"], { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: propertiesEl.current,
          start: "top 70%",
          toggleActions: "play none none none",
        }
      });

      tl.to(".header-anim", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }).to([".swiper-anim", ".nav-anim"], {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.7"); // Overlap for a smoother flow

    }, propertiesEl);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={propertiesEl} className="px-[8%] lg:px-[12%] py-16 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
        <div className="lg:w-2/3 mb-8 lg:mb-0 header-anim">
          <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-8xl lg:leading-none font-bricolage font-bold">
            Our Properties
          </h1>
        </div>

        <div className="lg:w-1/3 header-anim">
          <h3 className="text-2xl font-jost font-semibold mb-3">
            Our Properties
          </h3>

          <p className="mb-4 text-gray-700">
            We build our projects with your dreams and ideas. Touch modern concepts and designs with Shree Hari Associates.
          </p>

          <a href="/properties">
            <button className="btn py-3 px-0 text-lg font-medium flex items-center">
              <span className="text-black">View More</span>
              <i className="bi bi-arrow-up-right ms-2"></i>
            </button>
          </a>
        </div>
      </div>

      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-project-next",
          prevEl: ".swiper-project-prev",
        }}
        autoplay={{
          delay: 3000
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full swiper-anim"
      >
        {PropertyData.map((property, index) => (
          <SwiperSlide key={property.id}>
            <Link href={`/properties/${property.id}`}>
              <div className="h-[450px] relative rounded overflow-hidden group">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <h4 className="text-white text-xl font-bold mb-1">
                    {property.title}
                  </h4>
                  <p className="text-white text-lg">
                    ${property.price}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="swiper-project-prev nav-anim hidden lg:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full cursor-pointer z-10 transition-colors">
        <i className="ri-arrow-left-s-line text-2xl"></i>
      </div>
      <div className="swiper-project-next nav-anim hidden lg:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full cursor-pointer z-10 transition-colors">
        <i className="ri-arrow-right-s-line text-2xl"></i>
      </div>
    </section>

  )
}

export default OurProperties