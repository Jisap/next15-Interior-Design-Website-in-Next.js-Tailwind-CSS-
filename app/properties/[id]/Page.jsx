"use client"

import { use, useRef } from "react"
import { Autoplay, Navigation } from "swiper/modules"
import PropertyData from "@/app/jsonData/property.json"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const PropertyDetails = ({ params }) => {

  const { id } = use(params);
  const property = PropertyData.find(property => property.id === parseInt(id));
 
  if (!property) {
    notFound();
  }

  const relatedProperties = PropertyData.filter(item => item.id !== property.id && item.location === property.location);

  const container = useRef();

  useGSAP(() => {
    const animateOnScroll = (selector, props) => {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: selector.split(" ")[0],  
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        ...props
      });
    };

    gsap.from(".title-animation", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });

    animateOnScroll(".property-image-animation", { x: -50, y: 0 });
    animateOnScroll(".property-info-animation", { x: 50, y: 0 });

    animateOnScroll(".description-title-animation", {});
    animateOnScroll(".description-text-animation", { stagger: 0.2 });

    animateOnScroll(".amenities-title-animation", {});
    animateOnScroll(".amenity-item-animation", { y: 30, duration: 0.6, stagger: 0.15 });

    animateOnScroll(".related-title-animation", {});
    animateOnScroll(".related-swiper-animation", { y: 50, delay: 0.2 });

  }, { scope: container });

  return (
    <div ref={container}>
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

        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10 flex items-center justify-center">
          <h1 className="text-white text-center text-[3rem] md:text-[5rem] font-bricolage z-20 px-4 title-animation">
            {property.title}
          </h1>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg property-image-animation">
            <a 
              href={property.image} 
              data-lightbox={property.lightbox} 
              data-title={property.title}
            >
              <Image 
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </a>
          </div>

          <div className="p-8 property-info-animation">
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
    
      <div className="px-[8%] lg:px-[12%] py-12">
        <h1 className="text-6xl font-bricolage font-bold mb-10 description-title-animation">
          Description
        </h1>
        <p className="text-bricolage text-lg-mb-2 description-text-animation">
          This 2200 sqft residence in Prabha Colony, Godhra, showcases a subtle and sophisticated approach to modern
          living. Designed with a minimalist mindset, the home balances funcionality with elegance through clean geometry,
          soft neutral tones, and purposeful spatial planning.
        </p>
        <p className="text-bricolage text-lg-mb-2 description-text-animation">
          A minimal yet impactful approach, tailored for healing and clarity.
        </p>
        <p className="text-bricolage text-lg-mb-2 description-text-animation">
          A compact yet impactful home that speaks of thoughtful design and refined simplicity.
        </p>
      </div>

      <div className="px-[8%] lg:px-[12%] py-16 rounded-xl shadow-sm bg-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 amenities-title-animation">
          Amenities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
          <div className="flex items-center gap-3 amenity-item-animation">
            <i className="bi bi-lightning-charge text-yellow-600 text-2xl"></i>
            <span className="font-medium">Power Back Up</span>
          </div>
          <div className="flex items-center gap-3 amenity-item-animation">
            <i className="bi bi-wifi text-yellow-600 text-2xl"></i>
            <span className="font-medium">Internet/Wifi Connectivity</span>
          </div>
          <div className="flex items-center gap-3 amenity-item-animation">
            <i className="bi bi-tools text-yellow-600 text-2xl"></i>
            <span className="font-medium">Maintenance Staff</span>
          </div>
          <div className="flex items-center gap-3 amenity-item-animation">
            <i className="bi bi-building text-yellow-600 text-2xl"></i>
            <span className="font-medium">Vaastu Compliant</span>
          </div>
          <div className="flex items-center gap-3 amenity-item-animation">
            <i className="bi bi-houses text-yellow-600 text-2xl"></i>
            <span className="font-medium">Rentable Community Space</span>
          </div>
        </div>
      </div>

      <div className="relative px-[8%] lg:px-[12%] py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 related-title-animation">
          Related Properties
        </h2>

        <div className="related-swiper-animation">
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
            className="w-full"
            onSwiper={(swiper) => {
              console.log('Swiper initialized:', swiper);
            }}
          >
            {relatedProperties.map((property, index) => (
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
        </div>

        {/* Navigation buttons */}
        <div className="swiper-project-prev hidden lg:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full cursor-pointer z-10 transition-colors">
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </div>
        <div className="swiper-project-next hidden lg:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full cursor-pointer z-10 transition-colors">
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
