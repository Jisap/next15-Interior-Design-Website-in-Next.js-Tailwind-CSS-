import React from 'react'

const Page = () => {
  return (
    <>
      <div>
        {/* title */}
        <div className='relative flex justify-center items-center h-[75vh] overflow-hidden'>
          <h1 className='absolute text-white font-bricolage text-6xl lg:text-8xl font-bold z-20'>
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

        {/* Contact Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col lg:flex-row gap-10'>
              {/* left */}
              <div className='lg:w-1/2 space-y-6'>
                <h1 className='text-4xl lg:text-6xl font-bricolage font-bold'>
                  Let's Talk
                </h1>

                <h2 className='text-xl text-gray-700'>
                  Let's start transforming your space-reach out and bring your vision to life today
                </h2>

                <div className='space-y-4'>
                  <h6 className='uppercase text-lg tracking-widest border-b pb-4'>
                    Call Us
                  </h6>

                  <h3 className='text-2xl lg:text-3xl font-light'>
                    <a href="#" className='text-black no-underline'>
                      +1 (555) 555-5555
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Page