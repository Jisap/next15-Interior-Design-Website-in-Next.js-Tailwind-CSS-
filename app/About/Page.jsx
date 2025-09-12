import Image from "next/image"
import { processSteps } from "../constants";
import { galleryItems } from "../constants";


const Page = () => {
  return (
    <>
      {/* About title */}
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

      {/* Design Process */}
      <div className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-[3.5rem] leading-[3.5rem] sm:text-6xl sm:leading-none lg:text-8xl lg:leading-none font-bricolage font-semibold">
                Our Design Process
              </h1>
            </div>

            <div className="lg:w-1/3 ">
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
              <div key={id} className="w-full relative mb-10">
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

      {/* Gallery */}
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
    </>
  )
}

export default Page