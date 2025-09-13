"use client"

import Image from 'next/image'
import Link from 'next/link'
import PropertyData from '@/app/jsonData/property.json'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const page = () => {
  const container = useRef();

  useGSAP(() => {
    // Animación del título principal
    gsap.from(".title-animation", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    // Animación del subtítulo "Available Properties"
    gsap.from(".subtitle-animation", {
        scrollTrigger: {
            trigger: ".subtitle-animation",
            start: "top 85%",
            toggleActions: "restart none none reset"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Animación de las tarjetas de propiedades
    gsap.from(".property-card", {
        scrollTrigger: {
            trigger: ".properties-container",
            start: "top 80%",
            toggleActions: "restart none none reset"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

  }, { scope: container });

  return (
    <div ref={container}>
      <div className="relative h-[75vh] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/page-title.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10 flex items-center justify-center" />
        <h1 className="text-white text-center text-[3rem] md:text-[5rem] font-bricolage z-20 title-animation">
          Properties
        </h1>
      </div>
      
      

      <main className='px-[8%] lg:px-[12%] py-12'>
        <h2 className='text-4xl font-bold font-bricolage mb-6 subtitle-animation'>
          Available Properties
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 properties-container'>
          {PropertyData.map((property, idx) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className='group relative block h-[400px] rounded overflow-hidden shadow-md property-card'
            >
              <Image 
                src={property.image}
                alt={property.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
               <div className='flex justify-between items-center w-full absolute bottom-0 left-0 z-10 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-700'>
                 <h4 className="text-white text-2xl font-bold font-bricolage">
                   {property.title}
                 </h4>

                 <p className='text-white text-xl font-bricolage'>
                   {property.id}
                 </p>
               </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default page