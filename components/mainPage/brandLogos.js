import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Diesel",
    url: "/search?brandID=500",
    logo: "/icons/diesel.svg",
  },
  {
    name: "Pierre Cardin",
    url: "/search?brandID=200",
    logo: "/icons/pierre-cardin.svg",
  },
  {
    name: "Adidas",
    url: "/search?brandID=600",
    logo: "/icons/adidas.svg",
  },
  {
    name: "New Balance",
    url: "/search?brandID=700",
    logo: "/icons/new-balance.svg",
  },
  {
    name: "Levis",
    url: "/search?brandID=400",
    logo: "/icons/levis.svg",
  },
  {
    name: "Calvin Klein",
    url: "/search?brandID=100",
    logo: "/icons/calvin-klein.svg",
  },
];
export default function BrandLogos() {
  return (
    <div className="bg-white py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {brands.map((brand, index) => (
            <Link href={brand.url} key={index}>
              <div className="bg-gray-100 p-8 sm:p-10 hover:bg-gray-200">
                <Image
                  className="h-12 w-full object-contain"
                  src={brand.logo}
                  alt={brand.name}
                  width={158}
                  height={48}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
