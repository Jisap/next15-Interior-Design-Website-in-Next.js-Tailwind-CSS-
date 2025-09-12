"use client"

import Image from 'next/image'
import Link from 'next/link'
import PropertyData from '@/app/jsonData/property.json'


const page = () => {
  return (
    <>
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
        <h1 className="text-white text-center text-[6rem] md:text-[10rem] font-bricolage z-20">
          Properties
        </h1>
      </div>
      
      

      <main className='px-[8%] lg:px-[12%] py-12'>
        <h2 className='text-4xl font-bold font-bricolage mb-6'>
          Available Properties
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {PropertyData.map((property, idx) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className='group relative block h-[400px] rounded overflow-hidden shadow-md'
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
    </>
  )
}

export default page