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
import Marquee1 from "./_components/Marquee1"
import DesingProcess from "./_components/DesingProcess"
import Services from "./_components/Services"
import OurProperties from "./_components/OurProperties"
import Marquee2 from "./_components/Marquee2"
import Services2 from "./_components/Services2"
import Galllery from "./_components/Galllery"
import VideoBanner from "./_components/VideoBanner"
import Testimonials from "./_components/Testimonials"
import SocialLinks from "./_components/SocialLinks"
import HeroSlider from "./_components/HeroSlider"

const Hero = () => {

  const [activeTab, setActiveTab] = useState('his');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      {/* Hero */}
      <HeroSlider />

      {/* Marquee1 */}
      <Marquee1 />

      {/* About */}
      <About />

      {/* Design Process */}
      <DesingProcess />

      {/* Services */}
      <Services />

      {/* Our properties */}
      <OurProperties />
     
      {/* Marquee 2 */}
      <Marquee2 />

      {/* Services 2 */}
      <Services2 />

      {/* Gallery */}
      <Galllery />

      {/* Video Banner */}
      <VideoBanner />
      
      {/* Testimonials */}
      <Testimonials />

      {/* Social Links */}
      <SocialLinks />
    </>
  )
}

export default Hero