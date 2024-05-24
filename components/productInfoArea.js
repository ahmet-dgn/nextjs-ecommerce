"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { TruckIcon } from "@heroicons/react/24/outline";
import { RadioGroup } from "@headlessui/react";
const product = {
  name: "Basic Tee",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    {
      name: "Black",
      bgColor: "bg-gray-900",
      selectedColor: "ring-gray-900",
    },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ProductInfoArea({ productData }) {
  const [selectedSize, setSelectedSize] = useState();
  const { addToCart, cart, updateCartItemQuantity } = useCart();

  const originalPrice = productData.price;
  const discountPrice = productData.discountPrice && productData.discountPrice;
  const optionPrice = selectedSize ? selectedSize.price : null;
  const optiondiscountPrice = selectedSize ? selectedSize.discountPrice : null;
  console.log();
  let discountPercentage;
  if (optiondiscountPrice) {
    discountPercentage = Math.round(
      ((optionPrice - optiondiscountPrice) / optionPrice) * 100
    );
  } else
    discountPercentage = Math.round(
      ((originalPrice - discountPrice) / originalPrice) * 100
    );

  const productAddToCartHandler = () => {
    let foundDuplicate = false;
    const cartItem = {
      id: productData.id,
      name: productData.name,
      price: optionPrice || originalPrice || "",
      discountPrice: optiondiscountPrice || discountPrice || "",
      ...(selectedSize && { option: selectedSize.name }),
      quantity: 1,
      image: productData.images[0].url,
    };

    if (cart.length === 0) {
      addToCart(cartItem);
    } else if (cart.length > 0) {
      for (const item of cart) {
        // Eğer aynı ürün ID'si ve aynı seçenek varsa
        if (
          cartItem.option
            ? item.id === cartItem.id && item.option === cartItem.option
            : item.id === cartItem.id
        ) {
          item.quantity += 1; // Quantity'i artır
          foundDuplicate = true; // Duplicate bulunduğunu işaretle
          updateCartItemQuantity(item);
          break;
        }
      }

      if (!foundDuplicate) {
        addToCart(cartItem); // Hiçbir eşleşme bulunamazsa ekle
      }
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mt-8 md:mt-0 md:text-3xl">
        {productData.name && productData.name}
      </h1>
      <div className="mt-3 mb-8">
        <h2 className="sr-only">Ürün Bilgisi</h2>
        <div className="flex justify-between items-end">
          <div>
            <p
              className={`text-xl md:text-2xl tracking-tight text-gray-900 ${
                productData.discountPrice && "line-through !text-xl"
              }`}
            >
              {selectedSize ? selectedSize.price : productData.price} TL
            </p>
            {productData.discountPrice && (
              <p
                className={`ttext-xl md:text-2xl  tracking-tight text-red-600 `}
              >
                {selectedSize
                  ? selectedSize.discountPrice
                  : productData.discountPrice}
                TL
              </p>
            )}
          </div>
          <div className="flex gap-2">
            {productData.discountPrice && (
              <p className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-base font-medium text-red-700">
                - {discountPercentage}%{" "}
              </p>
            )}
            {productData.availability === "OutOfStock" && (
              <p className="inline-flex items-center rounded-full bg-gray-900 px-2 py-1 text-xs font-medium text-gray-50">
                Stokta yok
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Size picker */}
      <div className="mt-8">
        {productData.shortDescription && (
          <div className="mb-8 text-sm ">
            <p className="mt-2 text-gray-500">{productData.shortDescription}</p>
          </div>
        )}
        <div className="rounded-lg border border-blue-100 bg-blue-50 py-2 px-4 mb-8 flex items-center gap-2">
          <TruckIcon
            className="h-10 w-10 text-blue-800
"
          />
          <span className=" text-sm font-medium text-blue-800">
            5000 TL Üzeri Siparişlerde Kargo Bedava
          </span>
        </div>
        {productData.sizes && (
          <RadioGroup
            value={selectedSize}
            onChange={setSelectedSize}
            className="mt-2 border-t pt-8"
          >
            <RadioGroup.Label className="sr-only">Boyut Seç</RadioGroup.Label>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {productData.sizes.map((size) => (
                <RadioGroup.Option
                  key={size.name}
                  value={size}
                  className={({ active, checked }) =>
                    classNames(
                      size.inStock
                        ? "cursor-pointer focus:outline-none"
                        : "cursor-not-allowed opacity-25",
                      active ? "ring-2 ring-emerald-500 ring-offset-2" : "",
                      checked
                        ? "border-transparent bg-emerald-600 text-white hover:bg-emerald-700"
                        : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                      "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                    )
                  }
                  disabled={!size.inStock}
                >
                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        )}
      </div>

      <button
        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-25"
        onClick={() => productAddToCartHandler()}
        disabled={!selectedSize && productData.sizes}
      >
        Sepete Ekle
      </button>

      {/* Product details */}
      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Özellikler</h2>

        <div className="prose prose-sm mt-2 text-gray-500" />
        {productData.features && (
          <ul className="text-sm text-gray-700 list-disc list-inside">
            {productData.features.color && (
              <li className="capitalize">
                <span className="font-medium">Renk: </span>
                {productData.features.color}
              </li>
            )}
            {productData.features.material && (
              <li className="capitalize">
                <span className="font-medium">Materyal: </span>
                {productData.features.material}
              </li>
            )}
            {productData.features.material && (
              <li className="capitalize">
                <span className="font-medium">Materyal-2: </span>
                {productData.features.material}
              </li>
            )}
            {productData.features.sleeveLength && (
              <li className="capitalize">
                <span className="font-medium">Kol Boyu: </span>
                {productData.features.sleeveLength}
              </li>
            )}
            {productData.features.pattern && (
              <li className="capitalize">
                <span className="font-medium">Desen: </span>
                {productData.features.pattern}
              </li>
            )}
            {productData.features.fit && (
              <li className="capitalize">
                <span className="font-medium">Kalıp: </span>
                {productData.features.fit}
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
}
