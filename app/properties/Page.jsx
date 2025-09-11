import Image from "next/image";
import Link from "next/link";
import PropertyData from "@/app/jsonData/property.json";

const PropertiesPage = () => {
  return (
    <section className="px-[8%] lg:px-[12%] py-30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bricolage font-bold">
            Our Properties
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our collection of meticulously designed properties. Each project reflects our commitment to quality, innovation, and creating spaces that inspire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PropertyData.map((property) => (
            <Link href={`/properties/${property.id}`} key={property.id}>
              <div className="h-[450px] relative rounded-lg overflow-hidden group shadow-lg">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h4 className="text-white text-2xl font-bold mb-1">
                    {property.title}
                  </h4>
                  <p className="text-white/90 text-lg">${property.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;