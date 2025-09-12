"use client"

import { useState, useRef, useLayoutEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectCards, Autoplay } from "swiper/modules"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { tabs, tabContent } from "@/app/constants"

const About = () => {
  const [activeTab, setActiveTab] = useState("his")

  // Refs for GSAP animations
  const aboutSectionRef = useRef(null)
  const aboutTitleRef = useRef(null)
  const aboutInfoRef = useRef(null)
  const aboutImageRef = useRef(null)
  const aboutTabsRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const aboutEl = aboutSectionRef.current

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutEl,
        start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
        toggleActions: "play none none none", // Play on enter
      },
    })

    // Animate the main title and the info block
    tl.fromTo(
      aboutTitleRef.current,
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      aboutInfoRef.current.children,
      { x: 50, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.5"
    )

    // Animate the image swiper and the tabs section
    tl.fromTo(
      aboutImageRef.current,
      { x: -50, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    ).fromTo(
      aboutTabsRef.current,
      { x: 50, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" },
      "<"
    )

    return () => {
      // Kill the timeline and ScrollTriggers on component unmount
      if (tl) {
        tl.kill()
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={aboutSectionRef} className="px-[8%] lg:px-[12%] py-12 overflow-hidden">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="lg:w-2/3">
          <h2 ref={aboutTitleRef} className="text-[3.5rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4rem] lg:text-[6rem] lg:leading-[6rem] tracking-[.1rem] font-bricolage font-semibold">
            Interior & Architecture Design Solutions
          </h2>
        </div>

        <div ref={aboutInfoRef} className="lg:w-1/2">
          <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">About Us</h3>
          <p className="text-base mb-4 text-gray-700 ">At Shree Hari Associates, we're committed to transforming spaces through creative vision, elegant design, and solutions that truly reflect your lifestyle.</p>
          <a className="inline-flex items-center text-black font-medium hover:underline text-lg">Company Info <span className="ml-2"><i className="bi bi-arrow-up-right ms-2"></i></span></a>
        </div>
      </div>

      {/* Main section */}
      <div className="mt-12 flex flex-col lg:flex-row gap-10">
        <div ref={aboutImageRef} className="lg:w-1/2 w-full">
          <Swiper modules={[Navigation, EffectCards, Autoplay]} loop={true} effect={"cards"} grabCursor={true} autoplay={{ delay: 1500, disableOnInteraction: false }} navigation={{ nextEl: ".swiper-about-next", prevEl: ".swiper-about-prev" }} className="rounded" style={{ padding: "30px" }}>
            {["/interior-image-01.jpg", "/interior-image-02.jpg", "/interior-image-05.jpg"].map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt="interior-image" className="w-full h-[580px] object-cover rounded" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tabs & Content */}
        <div ref={aboutTabsRef} className="lg:w-1/2 w-full px-0 lg:px-10 pt-10">
          {/* Tabs */}
          <div className="flex gap-6 border-b mb-6">
            {tabs.map((tab) => (
              <button key={tab.key} className={`relative pb-2 text-lg font-medium transition-colors cursor-pointer ${activeTab === tab.key ? "text-black after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black" : "text-gray-400 hover:text-black"}`} onClick={() => setActiveTab(tab.key)}>{tab.label}</button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4 text-gray-700">
            {tabContent[activeTab].map((para, idx) => (<p key={idx} className="text-base leading-relaxed">{para}</p>))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About