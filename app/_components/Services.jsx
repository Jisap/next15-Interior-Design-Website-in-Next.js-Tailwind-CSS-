import React from 'react'
import { services } from '../constants'
import Image from 'next/image'

const Services = () => {
  return (
    <div className="px-[8%] lg:px-[12%] py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-8xl lg:leading-none font-bricolage font-bold">
            Interior Design Solutions
          </h1>
        </div>

        <div className="lg:w-1/3">
          <h3 className="text-2xl font-jost font-semibold mb-3">
            Our Services
          </h3>

          <p className="mb-4 text-gray-700">
            Wheter you're dreaming of a cozy home retreat or a bold, modern workspace, out experiences at Shree Hari Associates will make your vision come to life.
          </p>

          <a href="/Services">
            <button className="btn py-3 px-0 text-lg font-medium flex items-center">
              <span>All Services</span>
              <i className="bi bi-arrow-up-right ms-2"></i>
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <Image
              src={service.icon}
              alt="service-icon"
              width={70}
              height={70}
              className="mb-4 transition-transform duration-700 group-hover:rotate-[360deg]"

            />
            <h2 className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:blcok after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all af:duration-300">
              {service.title}
            </h2>
            <p className="text-gray-700 font-normal w-4/5">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services