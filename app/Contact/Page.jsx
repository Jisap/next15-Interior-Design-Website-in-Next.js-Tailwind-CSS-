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
              {/* left side */}
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

                  <div className='flex gap-4'>
                    <a href="#">
                      <i className='bi bi-facebook text-2xl text-black'></i>
                    </a>
                    <a href="#">
                      <i className='bi bi-instagram text-2xl text-black'></i>
                    </a>
                    <a href="#">
                      <i className='bi bi-pinterest text-2xl text-black'></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className='lg:w-2/5'>
                <form className='space-y-4'>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    required 
                    className='w-full border-b border-gray-300 focus:border-black outline-none py-2'
                  />
                  <input 
                    type="email"
                    placeholder="Email" 
                    name="email" 
                    required 
                    className='w-full border-b border-gray-300 focus:border-black outline-none py-2'
                  />
                  <input 
                    type="text"
                    placeholder="Phone" 
                    name="phone" 
                    required 
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <textarea 
                    rows="6" 
                    placeholder="Your Message" 
                    name="message" 
                    required 
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <button 
                    type="submit" 
                    className='bg-black text-white py-2 px-6 rounded-md text-lg'
                  >
                    Submit
                  </button>
                </form>
              </div>  
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className='bg-black px-[8%] lg:px-[12%] py-12'>
          <div className='overflow-hidden'>
            <div className='bg-white rounded flex flex-col md:flex-row gap-6 p-10 items-center shadow-md'>
              {/* image */}
              <div className='w-full md:w-2/5 h-[400px]'>
                <img src="/contact-banner.jpg" alt="contact-banner" className='w-full h-full object-cover rounded-2xl'/>
              </div>
              {/* info */}
              <div className='w-full md:w-3/5'>
                <h1 className='text-4xl md:text-6xl font-bold'>
                  Your Dream Start Here
                </h1>
                <p className='text-gray-500 mt-4'>
                  All queries are replied within 24 hours.
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className='mt-10'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10499.998333680309!2d2.351183757322502!3d48.85821833418118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1757768514524!5m2!1ses!2ses" 
                className="w-full h-[450px] rounded-[10px]" 
                style={{border:0}} 
                allowFullScreen="" 
                oading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Page