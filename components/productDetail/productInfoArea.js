"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Toaster, toast } from "sonner";
import ProductTitle from "./productTitle";
import ProductPrice from "./productPrice";
import ProductShortDescription from "./productShortDescription";
import ProductCargoInfo from "./productCargoInfo";
import ProductOption from "./productOption";
import ProductFeatures from "./productFeatures";
import AddToCartButton from "./productButton";

export default function ProductInfoArea({ productData }) {
  const [selectedSize, setSelectedSize] = useState();
  const { addToCart, cart, updateCartItemQuantity } = useCart();

  const originalPrice = productData.price;
  const discountPrice = productData.discountPrice
    ? productData.discountPrice
    : null;
  const optionPrice = selectedSize ? selectedSize.price : null;
  const optiondiscountPrice = selectedSize ? selectedSize.discountPrice : null;

  const productAddToCartHandler = () => {
    toast.success("Ürün sepete eklendi.");
    let foundDuplicate = false;
    const cartItem = {
      id: productData.id,
      slug: productData.slug,
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
      <ProductTitle title={productData.name} />
      <ProductPrice
        discountPrice={discountPrice}
        availability={productData.availability}
        originalPrice={originalPrice}
        optionPrice={optionPrice}
        optiondiscountPrice={optiondiscountPrice}
      />
      <ProductShortDescription
        shortDescription={productData.shortDescription}
      />
      <ProductCargoInfo />
      <ProductOption
        sizes={productData.sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        productId={productData.id}
      />
      <Toaster position="top-center" richColors />
      <AddToCartButton
        productAddToCartHandler={productAddToCartHandler}
        selectedSize={selectedSize}
        sizes={productData.sizes}
      />
      <ProductFeatures features={productData.features} />
    </>
  );
}
