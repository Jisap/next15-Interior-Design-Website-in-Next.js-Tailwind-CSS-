"use client"

import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from 'next/image'
import Link from 'next/link'
import { galleryItems } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const Galllery = () => {
  const galleryEl = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([".gallery-title", ".gallery-item"], { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryEl.current,
          start: "top 70%",
          toggleActions: "restart none none reset",
        }
      });

      tl.to(".gallery-title", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }).to(".gallery-item", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1, // A small stagger for a quick ripple effect
        ease: "power3.out",
      }, "-=0.7"); // Overlap for a smoother flow

    }, galleryEl);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={galleryEl} className="px-[8%] lg:px-[12%] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="gallery-title text-[3.5rem] leading-[3.5rem] lg:text-8xl lg:leading-none font-bricolage font-bold mb-10">
          Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <Link
              key={`property-${item.id}-${idx}`} // Es mejor práctica usar un ID único para la key
              href={`/properties/${item.id}`}
              className="gallery-item group relative block overflow-hidden rounded-md"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galllery