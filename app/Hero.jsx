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
import { useRef, useState } from "react"
import PropertyData from "@/app/jsonData/property.json"

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
};

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
];

const services = [
  {
    icon: "/service-icon-4.svg",
    title: "Furniture Selection",
    description: "Picking stylish, functional pieces to match space and purpose"
  },
  {
    icon: "/service-icon-2.svg",
    title: "Color Consultation",
    description: "Choosing harmonious palletes that reflect mood, space, and personality."
  },
  {
    icon: "/service-icon-3.svg",
    title: "Lighting Design",
    description: "Enhancing ambiance and functionality with strategic lighting placements."
  },
  {
    icon: "/service-icon-5.svg",
    title: "Wall Treatments",
    description: "Applying paint, wallpaper, or textures for visual interest enhancement."
  },
  {
    icon: "/service-icon-6.svg",
    title: "Flooring Design",
    description: "Selecting materials for style, durability, and room-specficic performance."
  },
  {
    icon: "/kitchen-icon.png",
    title: "Kitchens",
    description: "Crafting modern, efficient kitchens tailored for comfort and utility."
  }
];

const marqueeItems2 = [
  {
    imgs: "/property-1.jpg",
    title: "Space Planning & Layout"
  },
  {
    imgs: "/property-2.jpg",
    title: "Color & Material Consultation"
  },
  {
    imgs: "/property-3.jpg",
    title: "Space Planning & Layout"
  },
  {
    imgs: "/property-4.jpg",
    title: "Commercial Interior Design"
  },
  {
    imgs: "/property-5.jpg",
    title: "Furniture & Decor Selection"
  },
];

const services2 =[
  {
    icon: "/structure-design-icon.png",
    title: "Structure Design",
    description: "Engineering safe, sustainable, and functional structures with attention to detail."
  },
  {
    icon: "/residential-area-icon.png",
    title: "Residential Space",
    description: "Creating cozy, personalized homes that reflect your unique style and lifestyle."
  },
  {
    icon: "/office-icon.png",
    title: "Commercial",
    description: "Designing dynamic bussines environments that inspire productivity and success."
  },
  {
    icon: "/landscape-icon.png",
    title: "Landscape",
    description: "Creating breathtaking outdoor spaces that enhance your well-being and ambiance."
  },
  {
    icon: "/Renovation-icon.png",
    title: "Renovation",
    description: "Revamping old space into modern, purposeful, and stylish environments."
  },
  {
    icon: "/service-icon-1.svg",
    title: "Space Planning",
    description: "Strategic space utilization to maximize potential and long-term value."
  }
];

const galleryItems = [
  { 
    img: "/property-1.jpg",
    title: "Gallery 1",
  },
  {
    img: "/property-2.jpg",
    title: "Gallery 2",
  },
  {
    img: "/property-3.jpg",
    title: "Gallery 3",
  },
  {
    img: "/property-4.jpg",
    title: "Gallery 4",
  },
  {
    img: "/property-5.jpg",
    title: "Gallery 5",
  },
  {
    img: "/property-6.jpg",
    title: "Gallery 6",
  },
  {
    img: "/property-7.jpg",
    title: "Gallery 7",
  },
  {
    img: "/property-8.jpg",
    title: "Gallery 8",
  },
  {
    img: "/property-9.jpg",
    title: "Gallery 9",
  },
  {
    img: "/property-10.jpg",
    title: "Gallery 10",
  },
  {
    img: "/property-11.jpg",
    title: "Gallery 11",
  },
  {
    img: "/property-12.jpg",
    title: "Gallery 12",
  }
  
];

const testimonials = [
  {
    name: "Riya Shah",
    location: "New York, NY",
    image: "/User.jpg",
    quote: "We hired them for our home's complete interior revamp. Every detail was handled with professionalism and crativity. Highly recommended!."
  },
  {
    name: "Arjun Singh",
    location: "Bengaluru, India",
    image: "/User.jpg",
    quote: "Their team transformed our office into a space that's both functional and visually impressive. The design flo was flawless and well thought out."
  },
  {
    name: "John Doe",
    location: "Chicago, USA",
    image: "/User.jpg",
    quote: "I was blown away by their attention to detail and the level of craftsmanship that went into every aspect of their design. Their work is truly exceptional."
  },
  {
    name: "Jane Smith",
    location: "Paris, France",
    image: "/User.jpg",
    quote: "Their designs are not only visually stunning but also highly functional. Their attention to detail and attention to detail are truly impressive."
  },
  {
    name: "Sarah Lee",
    location: "London, UK",
    image: "/User.jpg",
    quote: "We wanted a modern kitchen and minimal living room. They truly understood our taste and delivered beyond expectations. Super satisfied with their work."
  }
];

const socialImages = [
    "/social-slide-1.jpg",
    "/social-slide-2.jpg",
    "/social-slide-3.jpg",
    "/social-slide-4.jpg",
    "/social-slide-5.jpg",
];

const Hero = () => {

  const [activeTab, setActiveTab] = useState('his');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
      <section className="px-[8%] lg:px-[12%] py-12">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-[3.5rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4rem] lg:text-[6rem] lg:leading-[6rem] tracking-[.1rem] font-bricolage font-semibold">
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
                Company Info <span className="ml-2"><i className="bi bi-arrow-up-right ms-2"></i></span>
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
                    <img 
                      src={src} 
                      alt="interior-image" 
                      className="w-full h-[580px] object-cover rounded"
                    />
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