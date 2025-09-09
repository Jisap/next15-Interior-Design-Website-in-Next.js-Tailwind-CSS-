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
];

const tabs = [
  {label: "History", key: "his"},
  {label: "Mission", key: "mis"},
  {label: "Vision", key: "vis"},
];

const tabContent = {
  his: [
    "At Shree Hari Associates Interior Design, we believe every space should tell a meaningful story...",
    "With years of insdustry experience and passion for innovation, we specialize in both residential and commercial interior design...",
    "From initial concepts to final execution, we manage every stage of the process with precision and creativity",
  ],
  mis: [
    "Our mission at Shree Hari Associates is to design personalized, functional, and inspiring spaces ...",
    "We focus on building lasting client relationships and approach every project with attention to detail ..."
  ],
  vis: [
    "Our vision is to be a leading force in interior and architectural design",
    "We strive to shape living and working environments thar reflect individual aspirations..."
  ]
}

const processSteps = [
  {
    id: 1,
    imgSrc: "/process-icon-1.svg",
    title: "Consultation and initial meeting",
    description: "The architecture company meets with the client to discuss their needs, budget, and timeline and to understand their vision for the project."
  },
  {
    id: 2,
    imgSrc: "/process-icon-2.svg",
    title: "Concept design",
    description: "Based on the client's requirements, the architecture company creates a concept design that outlines the overall layout and design elements."
  },
  {
    id: 3,
    imgSrc: "/process-icon-3.svg",
    title: "Design development",
    description: "Once the client approves the concept design, the architecture company begins to develop detailed drawings and models for the project."
  },
  {
    id: 4,
    imgSrc: "/process-icon-4.svg",
    title: "Permitting and approvals",
    description: "Before de construction can begin, the architecture company mus obtain the necessary permits and approvals from the client and local authorities."
  },
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

            {/* Tabs & Content */}
            <div className="lg:w-1/2 w-full px-0 lg:px-10 pt-10">
              {/* Tabs */}
              <div className="flex gap-6 border-b mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    className={`
                      relative pb-2 text-lg font-medium transition-colors cursor-pointer
                      ${activeTab === tab.key 
                        ? "text-black after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black" 
                        : "text-gray-400 hover:text-black"
                      }  
                    `}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-4 text-gray-700">
                {tabContent[activeTab].map((para, idx) => (
                  <p key={idx} className="text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Design Process */}
      <div className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-8xl font-[bricolage-font] font-semibold">
                  Our Design Process
                </h1>
            </div>

            <div className="lg:w-1/3">
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
    </>
  )
}

export default Hero