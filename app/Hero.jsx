"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCards, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-cards"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"


const HeroSlides = [
  {
    bgImage: "/Hero-1.webp",
    span: "Space Planning",
    title: "Unique \nCreations",
    paragraphs: [
      "At Shree Hari Associate, we specialize in crafting thoughtful architectural layouts that not only look great but also provide a sense of calm and tranquility.",
      "Let's create timeless, purposeful spaces -where aesthetic beauty meets intelligent functionality.",
    ],
    buttonText: "About Us",
    buttonLink: "/about", 
  },
  {
    bgImage: "/Hero-2.webp",
    span: "Furniture Selection",
    title: "Design \nPerfection",
    paragraphs: [
      "Welcome to Shree Hari Associates - where exceptional design meets tailored solutions.",
      "Every piece is selected to enhance both aesthetic and funcionality, reflecting your unique taste and style.",
    ],
    buttonText: "Portfolio",
    buttonLink: "/projects",
  },
  {
    bgImage: "/Hero-3.webp",
    span: "Lighting Solutions",
    title: "Elegant \nLiving",
    paragraphs: [
      "Welcome to Shree Hari Associates Interior Design - where creativity meets functionality.",
      "Our lighting solutions transform ordinay rooms into masterpieces that reflect your personality and style.",
    ],
    buttonText: "Blog",
    buttonLink: "/blog",
  },
  {
    bgImage: "/Hero-4.webp",
    span: "Color Harmony",
    title: "Functional \nBeauty",
    paragraphs: [
      "Welcome to Shree Hari Associates, where your vision comes to life through thoughtful design.",
      "We believe the right colors create balance, mood, and meaning in every space.",
    ],
    buttonText: "Services",
    buttonLink: "/services",
  },
  {
    bgImage: "/Hero-1.webp",
    span: "Space Planning",
    title: "Unique \nCreations",
    paragraphs: [
      "At Shree Hari Associate, we specialize in crafting thoughtful architectural layouts that not only look great but also provide a sense of calm and tranquility.",
      "Let's create timeless, purposeful spaces -where aesthetic beauty meets intelligent functionality.",
    ],
    buttonText: "About Us",
    buttonLink: "/about",
  },
  {
    bgImage: "/Hero-2.webp",
    span: "Furniture Selection",
    title: "Design \nPerfection",
    paragraphs: [
      "Welcome to Shree Hari Associates - where exceptional design meets tailored solutions.",
      "Every piece is selected to enhance both aesthetic and funcionality, reflecting your unique taste and style.",
    ],
    buttonText: "Portfolio",
    buttonLink: "/projects",
  },
  {
    bgImage: "/Hero-3.webp",
    span: "Lighting Solutions",
    title: "Elegant \nLiving",
    paragraphs: [
      "Welcome to Shree Hari Associates Interior Design - where creativity meets functionality.",
      "Our lighting solutions transform ordinay rooms into masterpieces that reflect your personality and style.",
    ],
    buttonText: "Blog",
    buttonLink: "/blog",
  },
  {
    bgImage: "/Hero-4.webp",
    span: "Color Harmony",
    title: "Functional \nBeauty",
    paragraphs: [
      "Welcome to Shree Hari Associates, where your vision comes to life through thoughtful design.",
      "We believe the right colors create balance, mood, and meaning in every space.",
    ],
    buttonText: "Services",
    buttonLink: "/services",
  },
];

const marqueeItems = [
  "Space Planning & Layout",
  "Color & Material Consultation",
  "Renovation",
  "Commercial Interior Design",
  "Furniture & Decor Selection",
  "Structure Design",
  "Residential Space",
  "Space Planning & Layout",
  "Color & Material Consultation",
  "Renovation",
  "Commercial Interior Design",
  "Furniture & Decor Selection",
  "Structure Design",
  "Residential Space",
]

const Hero = () => {

  const [activeTab, setActiveTab] = useState('his');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      {/* Hero */}
      <div className="w-full h-screen relative overflow-hidden">
        <Swiper
          modules={[Navigation, EffectCards, Autoplay]}
          effect={"cards"}
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
      <section className="px-[8%] lg:-[12%] py-12">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-[4rem] leading-[4rem] lg:text-[6rem] lg:leading-[6rem] fon tracking-[.2rem] font-[bricolage-font]">
                Interior & Architecture Design Solutions
              </h2>
            </div>

            <div className="lg:w-1/2">
              <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
                About Us
              </h3>

              <p className="text-base mb-4 text-gray-700">
                At Shree Hari Associates, we're committed to transforming spaces through creative vision, elegant design, and solutions that truly reflect your lifestyle.
              </p>

              <a className="inline-flex items-center text-black font-medium hover:underline text-lg">
                Company Info <span className="ml-2">***</span>
              </a>
            </div>
          </div>

          {/* Main section */}
          <div className="mt-12 flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2 w-full">
              <Swiper
                modules={[Navigation, EffectCards, Autoplay]}
                loop={true}
                effect={"cards"}
                grabCursor={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-about-next",
                  prevEl: ".swiper-about-prev",
                }}
                className="rounded"
                style={{ padding: "30px"}}
              >
                {[
                  "interior-image-01.jpg",
                  "interior-image-02.jpg",
                  "interior-image-05.jpg",
                ].map((src, index) => (
                  <SwiperSlide key={index}>
                    <img src={src} alt="interior-image" className="w-full h-[580px] object-cover rounded"/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
      </section>
    </>
  )
}

export default Hero