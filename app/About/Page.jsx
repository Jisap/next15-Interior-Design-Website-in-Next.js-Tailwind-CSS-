import Image from "next/image"




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
            About Us
          </h1>
        </div>
      </div>
      
      {/* About Us */}
      <div className="bg-white py-10">
        {/* Top section */}
        <div className="container mx-auto mb-10 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h1 className="text-3xl lg:text-8xl font-bold text-gray-800">
                Interior & Exterior Solutions
              </h1>
            </div>

            <div className="lg:w-1/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  About Us
                </h3>

                <p className="mt-2 text-gray-600">
                  Designing Dreams, Crafting Spaces - Where Vision Meets Elegance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* vision section*/}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-lg">
              <Image
                src="/ab-vision-image1.jpeg"
                alt="vision"
                width={800}
                height={800}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="lg:w-1/2 lg:pl-12">
              <p className="mb-4 text-gray-700 leading-relaxed">
                <span className="text-gray-800 font-bold">Our </span>
                vision is to become a leader in transforming spaces
                thorough innovative and thoughtful desing. 
                We aim to create environments that not only meet the 
                aesthetic and functional needs of our clients, but also 
                inspire creativiy, foster well-being, and enhance the
                overall quality of life.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We believe that interior design is a form of art, and the
                residential, comercial, or public-reflects the individuality
                and aspirations of those who occupy it, combining timeless desing
                with modern elegance. Through passion, collaboration, andexcellence, 
                we aspire to shape interiors that leave a lasting impression and 
                positively impact the communities we serve.
              </p>
            </div>

            
          </div>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center">
           
            <div className="lg:w-1/2 lg:pl-12">
              <p className="mb-4 text-gray-700 leading-relaxed">
                <span className="text-gray-800">
                  At <strong>LivingLines</strong>, our mission is to craft inspiring, functional,
                  and personalized spaces that elevate the way our clients live, work,
                  and experience their surroundings. We are committed to delivering their
                  exceptional design solutions thar blend creativity with practicality,
                  transforming every envirnment into a reflection of the client's unique 
                  vision and style.
                </span>
              </p>

              <p className="text-gray-700 leading-relaxed">
                We strive to build lasting relationships with our clients, ensuring each project
                is executed with attention to detail, innovation, and impeccable craftsmanship.
                Our goal is to create spaces that inspire, enrich, and enhance the everyday lives of
                thos who inhabit them.
              </p>
            </div>

            <div className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-lg">
              <Image
                src="/ab-vision-image1.jpeg"
                alt="vision"
                width={800}
                height={800}
                className="w-full h-[500px] object-cover"
              />
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Page