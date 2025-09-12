import Image from 'next/image'
import React from 'react'
import { galleryItems } from '../constants'

const Galllery = () => {
  return (
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
  )
}

export default Galllery