import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ productData }) {
  const [imgSrc, setImgSrc] = useState(productData.images[0].url);
  const [imgErrorClass, setImgErrorClass] = useState(false);
  const handleError = () => {
    setImgSrc("/icons/no-image.svg");
    setImgErrorClass(true);
  };
  return (
    <div className="group relative z-0">
      <div className=" w-full overflow-hidden rounded-lg aspect-h-3 aspect-w-2 group-hover:opacity-75 sm:h-auto">
        <div className="bg-neutral-100">
          <Image
            src={imgSrc}
            alt={
              productData.images[0].alt
                ? productData.images[0].alt
                : productData.name
            }
            onError={handleError}
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className={
              imgErrorClass
                ? `object-fit !w-2/3 mx-auto`
                : `h-full w-full object-cover object-center `
            }
          />
        </div>
      </div>
      <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-900">
        <Link href="#">
          <span className="absolute inset-0" />
          {productData.name}
        </Link>
      </h3>
      <div className="flex gap-2">
        <p
          className={`mt-1 text-sm text-gray-500 ${
            productData.discountPrice && "line-through"
          }`}
        >
          {productData.price} TL
        </p>
        {productData.discountPrice && (
          <p className="mt-1 text-sm text-red-500">
            {productData.discountPrice} TL
          </p>
        )}
      </div>

      <div className="absolute top-2 left-2 ">
        <div className="flex flex-col gap-2">
          {productData.discountPrice && (
            <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
              İndirim
            </span>
          )}
          {productData.availability === "OutOfStock" && (
            <span className="inline-flex items-center rounded-full bg-gray-900 px-2 py-1  text-xs font-medium text-gray-100">
              Stokta Yok
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
