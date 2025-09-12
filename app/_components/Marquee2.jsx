import Image from 'next/image'
import React from 'react'
import { marqueeItems2 } from '../constants'

const Marquee2 = () => {
  return (
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

  )
}

export default Marquee2