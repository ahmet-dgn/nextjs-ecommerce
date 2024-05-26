import Image from "next/image";
const incentives = [
  {
    name: "Ücretsiz Kargo",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namvelit lectus.",
  },
  {
    name: "2 yıl garanti",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namvelit lectus.",
  },
  {
    name: "Ücretsiz değişim",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namvelit lectus.",
  },
];

export default function WhyUs() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Müşterilerimiz neden bizi tercih ediyor?
              </h2>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                velit lectus, ultricies eu viverra nec, aliquet ut est. Proin
                pulvinar, turpis venenatis dapibus maximus, arcu nisl pretium
                dui, id fringilla dui justo sit amet dui. Fusce eget libero
                purus.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <Image
                fill
                sizes="(max-width: 1023) 100vw, 50vw"
                src="/why-us.jpg"
                alt="Neden biz"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
