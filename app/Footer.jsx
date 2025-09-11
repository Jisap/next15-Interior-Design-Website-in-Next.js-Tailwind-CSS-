"use client"

import Link from "next/link"




const Footer = () => {
  return (
    <>
      <footer className="relative z-10">
        <div className="absolute inset-0 bg-[url('/footer-bg.png')] invert z-[-1]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[url('/footer-shape.svg')] bg-no-repeat bg-right-bottom invert z-[-1]" />

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            {/* left */}
            <div className="lg:w-1/2 pr-0 lg:pr-0">
              <h2 className="font-bricolage text-6xl mb-6">
                We'd love to cooperate to build amazing{" "}
                <span className="word-animate"></span>
              </h2>

              <p className="my-5 text-lg font-medium">
                Through a unique combination of construction, architecture, furniture and design disciplines and expertise.
              </p>

              <div className="flex justify-between items-center w-full max-w-md">
                <div>
                  <span className="text-xl block">Call our office</span>
                  <h4 className="mt-3 text-xl font-semibold">
                    <a href="+15555555555" className="hover:underline">+1 (555) 555-5555</a>
                  </h4>
                </div>

                <div>
                  <span className="text-xl block">Send a message</span>
                  <a href="#" className="mt-3 text-lg hover:underline inline-block font-semibold">Example@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div>
                <div className="flex flex-col space-y-3">
                  <h3 className="uppercase text-3xl font-bricolage mb-3">Company</h3>
                  <Link href="/about" className="text-xl font-medium text-gray-700 hover:text-black">
                    About Us
                  </Link>
                  <Link href="/properties" className="text-xl font-medium text-gray-700 hover:text-black">
                    Properties
                  </Link>
                  <Link href="/contact" className="text-xl font-medium text-gray-700 hover:text-black">
                    Contact
                  </Link>
                </div>

                <div className="lg:flex-1 mt-5">
                  <h5 className="font-bricolage text-3xl mb-3">
                    Address
                  </h5>

                  <p className="text-lg font-medium max-w-sm">
                    401, Skyline Drive, <br/> San Francisco,<br/> CA 94103
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <h3 className="uppercase text-3xl font-bricolage mb-3">
                  Follow Us
                </h3>
                <a href="#" className="text-xl font-medium text-gray-700 hover:text-black">
                  Facebook
                </a>
                <a href="#" className="text-xl font-medium text-gray-700 hover:text-black">
                  Instagram
                </a>
                <a href="#" className="text-xl font-medium text-gray-700 hover:text-black">
                  Pinterest
                </a>
                <a href="#" className="text-xl font-medium text-gray-700 hover:text-black">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 py-6 bg-white">
          <p className="text-center text-lg">
            Copyright © 2025 LivingLines. All rights reserved By
            <a href="#" className="font-semibold hover:underline"> k2infocom</a>
          </p>
        </div>
    
      </footer>
    </>
  )
}

export default Footer