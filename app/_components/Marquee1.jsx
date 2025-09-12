
import { marqueeItems } from '../constants'

const Marquee1 = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap my-10 relative">
      <div className="animate-marquee flex w-max gap-8">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[250px] h-[100px] border-2 border-gray-300 rounded-full flex items-center justify-center text-black text-2xl font-bold uppercase px-5"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee1

