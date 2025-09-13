import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-cards"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import Image from "next/image"
import { socialImages } from "../constants"

const SocialLinks = () => {
  return (
    <div className="w-full h-[500px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        autoPlay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {socialImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <Image
                src={image}
                alt="social-image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SocialLinks