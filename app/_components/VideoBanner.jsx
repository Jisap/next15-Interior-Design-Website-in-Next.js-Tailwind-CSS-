


const VideoBanner = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 z-10">
        <h2 className="text-5xl md:text-6xl leading-tight font-bricolage font-bold text-white">
          Ready For An Upgrade ? Let's Talk
        </h2>

        <button className="mt-10 px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded transition hover:bg-gray-400 hover:translate-y-1">
          Contact Us
        </button>
      </div>
    </div>

  )
}

export default VideoBanner