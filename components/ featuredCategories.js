import Link from "next/link";
import Image from "next/image";

export default function FeaturedCategories() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Öne Çıkan Kategoriler
          </h2>
          <Link
            href="/search"
            className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-500 sm:block"
          >
            Tüm Kategoriler
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              src="https://drive.google.com/uc?export=view&id=1h-0UKzUvXNf2LvF6FwZAI7GibkMg6tSu"
              alt="Jersey Puf Kollu Tshirt"
              className="object-cover object-center group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="/search?categoryIDs=400">
                    <span className="absolute inset-0" />
                    T-Shirts
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Şimdi Satın Al
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              src="https://drive.google.com/uc?export=view&id=1XCoP1QxbRxeDRMkI4bj2LPZddM72SRQu"
              alt="Şapka"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="/search?categoryIDs=500">
                    <span className="absolute inset-0" />
                    Şapka
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Şimdi Satın Al
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              src="https://drive.google.com/uc?export=view&id=1Cah8d0eddqDPvUoyJcVBy39TDT4mBCqX"
              alt="Saat"
              className="object-cover object-top group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />

            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="/search?categoryIDs=100">
                    <span className="absolute inset-0" />
                    Eşofman
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Şimdi Satın Al
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/search"
            className="block text-sm font-semibold text-emerald-600 hover:text-emerald-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
