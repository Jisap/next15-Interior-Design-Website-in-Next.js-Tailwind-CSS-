import React from 'react'
import Services from '../_components/Services'
import Marquee2 from '../_components/Marquee2'
import Services2 from '../_components/Services2'

const Page = () => {
  return (
    <>
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
          <h1 className="text-white text-center text-[3rem] md:text-[5rem] font-bricolage z-20 px-4">
            Services
          </h1>
        </div>
      </div> 

      <Services />

      <Marquee2 />

      <Services2 />
    </>
  )
}

export default Page