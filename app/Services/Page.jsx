'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Services from '../_components/Services'
import Marquee2 from '../_components/Marquee2'
import Services2 from '../_components/Services2'

const Page = () => {
  const container = useRef()

  useGSAP(() => {
    gsap.from(".title-animation", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });
  }, { scope: container })

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
            Services
          </h1>
        </div>
      </div> 

      <Services />

      <Marquee2 />

      <Services2 />
    </div>
  )
}

export default Page