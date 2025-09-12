"use client"

import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { processSteps } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const DesingProcess = () => {
  const designProcessEl = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: designProcessEl.current,
          start: "top 70%",
          toggleActions: "restart none none reset",
        },
      })

      // Animate the header section (title and description)
      tl.from(".header-anim", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
        // Animate the process steps sequentially from the left
        .from(".process-step-card", {
          opacity: 0,
          x: -100,                  // Slide in from the left
          duration: 0.8,
          stagger: 0.2,             // This creates the sequential effect for each card
          ease: "power3.out",
        }, "-=0.5")                 // Overlap with the previous animation for a smoother flow
    }, designProcessEl)

    return () => ctx.revert() // Cleanup
  }, [])

  return (
    <div 
      ref={designProcessEl} 
      className="bg-gray-100 px-[8%] lg:px-[12%] py-16 overflow-x-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0 header-anim">
            <h1 className="text-[3.5rem] leading-[3.5rem] sm:text-6xl sm:leading-none lg:text-8xl lg:leading-none font-bricolage font-semibold">
              Our Design Process
            </h1>
          </div>

          <div className="lg:w-1/3 header-anim">
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
            <div 
              key={id} 
              className="w-full relative mb-10 process-step-card"
            >
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
  )
}

export default DesingProcess