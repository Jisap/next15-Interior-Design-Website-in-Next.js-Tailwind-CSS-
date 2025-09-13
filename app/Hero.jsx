"use client"


import About from "./_components/About"
import Marquee1 from "./_components/Marquee1"
import DesingProcess from "./_components/DesingProcess"
import Services from "./_components/Services"
import OurProperties from "./_components/OurProperties"
import Marquee2 from "./_components/Marquee2"
import Services2 from "./_components/Services2"
import Galllery from "./_components/Galllery"
import VideoBanner from "./_components/VideoBanner"
import Testimonials from "./_components/Testimonials"
import SocialLinks from "./_components/SocialLinks"
import HeroSlider from "./_components/HeroSlider"

const Hero = () => {

  return (
    <>
      {/* Hero */}
      <HeroSlider />

      {/* Marquee1 */}
      <Marquee1 />

      {/* About */}
      <About />

      {/* Design Process */}
      <DesingProcess />

      {/* Services */}
      <Services />

      {/* Our properties */}
      <OurProperties />
     
      {/* Marquee 2 */}
      <Marquee2 />

      {/* Services 2 */}
      <Services2 />

      {/* Gallery */}
      <Galllery />

      {/* Video Banner */}
      <VideoBanner />
      
      {/* Testimonials */}
      <Testimonials />

      {/* Social Links */}
      <SocialLinks />
    </>
  )
}

export default Hero