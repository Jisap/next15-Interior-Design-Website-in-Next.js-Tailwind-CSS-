import React from 'react'

const Page = () => {
  return (
    <>
      <div>
        {/* title */}
        <div className='relative flex justify-center items-center h-[75vh] overflow-hidden'>
          <h1 className='absolute text-white font-bricolage text-8xl font-bold z-50'>
            Contact Us
          </h1>
          <video
            muted 
            loop
            autoPlay
            className='absolute top-0 left-0 w-full h-full object-cover'
          >
            <source src="/page-title.mp4" type="video/mp4" />
          </video>

          <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10'/>

          
        </div>
      </div>
    </>
  )
}

export default Page