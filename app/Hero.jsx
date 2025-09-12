"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCards, EffectFade, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-cards"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import Image from "next/image"
import Link from "next/link"
import { useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PropertyData from "@/app/jsonData/property.json"
import {
  HeroSlides,
  galleryItems,
  marqueeItems,
  marqueeItems2,
  processSteps,
  services,
  services2,
  socialImages,
  tabContent,
  tabs,
  testimonials,
} from "@/app/constants"
import About from "./_components/About"

const Hero = () => {

  const [activeTab, setActiveTab] = useState('his');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Refs for GSAP animations
  // const aboutSectionRef = useRef(null);
  // const aboutTitleRef = useRef(null);
  // const aboutInfoRef = useRef(null);
  // const aboutImageRef = useRef(null);
  // const aboutTabsRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const aboutEl = aboutSectionRef.current;

  //   // Create a timeline for the animations
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: aboutEl,
  //       start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
  //       toggleActions: "play none none none", // Play on enter
  //     }
  //   });

  //   // Animate the main title and the info block
  //   tl.fromTo(aboutTitleRef.current, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" })
  //     .fromTo(aboutInfoRef.current.children, { x: 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" }, "-=0.5");

  //   // Animate the image swiper and the tabs section
  //   tl.fromTo(aboutImageRef.current, { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
  //     .fromTo(aboutTabsRef.current, { x: 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }, "<");


  //   return () => {
  //     // Kill the timeline and ScrollTriggers on component unmount
  //     if (tl) {
  //       tl.kill();
  //     }
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   }
  // }, []);

  return (
    <>
      {/* Hero */}
      <div className="w-full h-screen relative overflow-hidden">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect={"fade"}
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,          
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="h-full"
        >
          {HeroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative w-full h-screen flex justify-center items-center text-white px-6"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}  
              >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/70 z-0"></div>

                {/* content */}
                <div className="hero-content relative z-10 max-w-4xl text-start space-y-6">
                  <span className="text-xl font-medium uppercase">{slide.span}</span>
                  <h1 className="text-6xl md:text-8xl font-bold font-bricolage whitespace-pre-line">
                    {slide.title}           
                  </h1>
                  <div className="flex flex-col md:flex-row gap-4 text-lg justify-center">
                    {slide.paragraphs.map((pera, i) => (
                      <p key={i} className="max-w-xl">
                        {pera}
                      </p>
                    ))}
                  </div>
                  <Link href={slide.buttonLink}>
                    <button className="mt-4 cursor-pointer rounded px-6 py-3 border border-white text-white uppercase tracking-wide hover:bg-white hover:text-black transition-all">
                      {slide.buttonText} <i className="bi bi-arrow-right ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}
          <div ref={nextRef} className="swiper-button-next swiper-btn swiper-next left-4 top-[80%] absolute z-20">
            <i className="ri-arrow-right-wide-line"></i>
          </div>
          <div ref={prevRef} className="swiper-button-prev swiper-btn swiper-prev left-4 top-[90%] absolute z-20">
            <i className="ri-arrow-left-wide-line"></i>
          </div>
        </Swiper>

      </div>

      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap my-10 relative">
        <div className="animate-marquee flex w-max gap-8">
          {marqueeItems.map((item, idx) => (
            <div 
              key={idx}
              className="min-w-[250px] h-[100px] border-2 border-gray-300 rounded-full flex items-center justify-center text-black text-2xl font-bold uppercase px-5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <About />

      {/* Design Process */}
      <div className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-[3.5rem] leading-[3.5rem] sm:text-6xl sm:leading-none lg:text-8xl lg:leading-none font-bricolage font-semibold">
                  Our Design Process
                </h1>
            </div>

            <div className="lg:w-1/3 ">
              <h3 className="uppercase tracking-wide font-semibold border-b border-black inline-block">
                Process
              </h3>
              <p className="text-lg max-w-md">
                Discover how our thoughtful process transforms ideas into personalized, functional, and beatifully styled spaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-10">
            {processSteps.map(({ id, imgSrc, title, description }) => (
              <div key={id} className="w-full relative mb-10">
                <div className="flex flex-col items-center cursor-pointer relative group">
                  {/* Circle with image and number */}
                  <div className="w-[170px] h-[170px] rounded-full shadow-lg flex items-center justify-center relative hover:-translate-y-1.5 transition-transform duration-300">
                    <img 
                      src={imgSrc} 
                      alt="process-icon" 
                      className="w-[70px] h-[70px] transition-transform duration-500 ease-out items-center group-hover:-rotate-y-360" 
                    />
                    <span className="absolute -top-3 right-10 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold select-none">
                      {id}.
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-bricolage text-xl mt-6 mb-4 relative after:absolute after:botton-0 after:left-0 after:h-0.5 after:bg-black after:w-0 group-hover:after:w-full after:transition-width after:duration-300">
                    {title}
                  </h2>

                  {/* Description */}
                  <p className="text-center text-base max-w-[70%] mx-auto">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-[8%] lg:px-[12%] py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-8xl lg:leading-none font-bricolage font-bold">
              Interior Design Solutions
            </h1>
          </div>

          <div className="lg:w-1/3">
            <h3 className="text-2xl font-jost font-semibold mb-3">
              Our Services
            </h3>

            <p className="mb-4 text-gray-700">
              Wheter you're dreaming of a cozy home retreat or a bold, modern workspace, out experiences at Shree Hari Associates will make your vision come to life.
            </p>

            <a href="/Services">
              <button className="btn py-3 px-0 text-lg font-medium flex items-center">
                <span>All Services</span>
                <i className="bi bi-arrow-up-right ms-2"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <Image 
                src={service.icon} 
                alt="service-icon" 
                width={70}
                height={70}
                className="mb-4 transition-transform duration-700 group-hover:rotate-[360deg]"

              />
              <h2 className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:blcok after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all af:duration-300">
                {service.title}
              </h2>
              <p className="text-gray-700 font-normal w-4/5">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our properties */}
      <section className="px-[8%] lg:px-[12%] py-16 relative">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-8xl lg:leading-none font-bricolage font-bold">
                Our Properties
              </h1>
            </div>

            <div className="lg:w-1/3">
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
          className="w-full"
          onSwiper={(swiper) => {
            console.log('Swiper initialized:', swiper);
          }}
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
        <div className="swiper-project-prev hidden lg:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full cursor-pointer z-10 transition-colors">
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </div>
        <div className="swiper-project-next hidden lg:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full cursor-pointer z-10 transition-colors">
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </div>
      </section>

      {/* Marquee 2 */}
      <div className="overflow-hidden whitespace-nowrap py-12">
        <div className="animate-marquee flex items-center gap-8">
          {marqueeItems2.flatMap((item, idx) => ([
            <div key={`img-${idx}`} className="w-[250px] h-[100px] overflow-hidden rounded-full shrink-0">
              <Image 
                src={item.imgs} 
                alt="marquee-image" 
                width={250}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>,
            <div key={`title-${idx}`} className="min-w-[250px] h-[100px] border-2 border-gray-300 rounded-full flex items-center justify-center shrink-0">
              <span className="text-black text-2xl font-bold uppercase px-4 text-center">
                {item.title}
              </span>
            </div>
          ]))}
        </div>
      </div>

      {/* Services 2 */}
      <section className="px-[8%] lg:px-[12%] py-12 bg-gray-100">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12"> 
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-8xl lg:leading-none font-bricolage font-bold">
              Architecture <br/> Design Solutions
            </h1>
          </div>

          <div className="lg:w-1/3">
            <h3 className="text-2xl font-jost font-semibold mb-3">
              Our Services
            </h3>

            <p className="mb-4 text-gray-700">
              Wheter you're dreaming of a cozy home retreat or a bold, modern workspace, out experiences at Shree Hari Associates will make your vision come to life.
            </p>

            <a href="/Services">
              <button className="btn py-3 px-0 text-lg font-medium flex items-center">
                <span>All Services</span>
                <i className="bi bi-arrow-up-right ms-2"></i>
              </button>
            </a>
          </div>
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {services2.map((service, idx) => (
            <div key={idx} className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <Image
                src={service.icon}
                alt="service-icon"
                width={60}
                height={60}
                className="mb-4 transition-transform duration-700 group-hover:rotate-[360deg]"
               />
               <h2 className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300">
                {service.title}
              </h2>
              <p className="text-gray-700 font-normal w-4/5">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-8xl lg:leading-none font-bricolage font-bold mb-10">
            Gallery
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.img} 
                data-lightbox={item.lightbox}
                data-title={item.title}
                className="group relative block overflow-hidden rounded-md"
              >
                <div className="relative w-full h-[400px]">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <h4 className="text-white text-3xl font-bricolage">
                    {item.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Video Banner */}
      <div className="relative w-full h-[500px] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video-bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 z-10">
            <h2 className="text-5xl md:text-6xl leading-tight font-bricolage font-bold text-white">
              Ready For An Upgrade ? Let's Talk
            </h2>

            <button className="mt-10 px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded transition hover:bg-gray-400 hover:translate-y-1">
              Contact Us
            </button>
          </div>
      </div>

      {/* Testimonials */}
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

      {/* Social Links */}
      <div className="w-full h-[500px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          autoPlay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {socialImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px]">
                <Image 
                  src={image}
                  alt="social-image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Hero